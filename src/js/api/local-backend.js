// 오프라인 모드: config.js에 Supabase 주소가 비어 있으면 휴대폰(브라우저) 안에 데이터를 저장합니다.
// supabase-js에서 이 앱이 쓰는 기능(auth, from().select/insert/update/upsert/delete, functions.invoke)만 흉내 냅니다.
const LOCAL_DB_KEY = "ieum-local-db";
const LOCAL_SESSION_KEY = "ieum-local-session";

function isLocalMode() {
  const config = window.IEUM_CONFIG || {};
  return !(config.SUPABASE_URL && config.SUPABASE_PUBLISHABLE_KEY);
}

const localId = () => (window.crypto?.randomUUID ? crypto.randomUUID() : `local-${Date.now()}-${Math.random().toString(16).slice(2)}`);
const localHash = (text) => { let h = 5381; for (const c of String(text)) h = ((h << 5) + h + c.charCodeAt(0)) >>> 0; return `h${h.toString(16)}`; };

function readLocalDb() {
  let db = null;
  try { db = JSON.parse(localStorage.getItem(LOCAL_DB_KEY)); } catch {}
  if (!db || typeof db !== "object") db = {};
  db.users ||= [];
  db.tables ||= {};
  if (!db.seededCommunity) {
    // 처음 실행할 때 샘플 게시글을 로컬 커뮤니티에 넣어 둡니다.
    const posts = db.tables.community_posts ||= [];
    const comments = db.tables.community_comments ||= [];
    const minutesAgo = (text) => { const n = parseInt(text, 10) || 5; return text.includes("시간") ? n * 60 : text.includes("일") ? n * 1440 : n; };
    (APP_DATA.posts || []).forEach((post, index) => {
      const id = `seed-post-${index}`;
      const created = Date.now() - minutesAgo(post.time || "") * 60000;
      posts.push({ id, author_id: "seed", author_name: post.author, kind: post.kind || "질문", category: post.category, title: post.title, body: post.body, image_url: post.image || null, status: "published", created_at: new Date(created).toISOString() });
      (post.commentList || []).forEach((comment, commentIndex) => {
        comments.push({ id: `${id}-c${commentIndex}`, post_id: id, parent_id: null, author_id: "seed", author_name: comment.author, body: comment.body, status: "published", created_at: new Date(created + (commentIndex + 1) * 60000).toISOString() });
      });
    });
    db.seededCommunity = true;
    db.seedVersion = 2;
    writeLocalDb(db);
  }
  if ((db.seedVersion || 1) < 2) {
    // 예전에 저장된 샘플 게시글에 게시판(질문/모임/꿀팁)을 붙이고, 새 샘플을 추가합니다.
    const posts = db.tables.community_posts ||= [];
    (APP_DATA.posts || []).forEach((post, index) => {
      const id = `seed-post-${index}`;
      const existing = posts.find((row) => row.id === id);
      if (existing) existing.kind = post.kind || "질문";
      else posts.push({ id, author_id: "seed", author_name: post.author, kind: post.kind || "질문", category: post.category, title: post.title, body: post.body, image_url: post.image || null, status: "published", created_at: new Date(Date.now() - 30 * 60000).toISOString() });
    });
    db.seedVersion = 2;
    writeLocalDb(db);
  }
  return db;
}

function writeLocalDb(db) {
  try { localStorage.setItem(LOCAL_DB_KEY, JSON.stringify(db)); }
  catch (error) { console.error("로컬 저장 실패", error); throw new Error("휴대폰 저장 공간에 저장하지 못했어요."); }
}

const publicUser = (user) => user && ({ id: user.id, email: user.email, user_metadata: { ...(user.user_metadata || {}) }, created_at: user.created_at });

class LocalQuery {
  constructor(table) { this.table = table; this.filters = []; this.action = "select"; this.payload = null; this.orderBy = null; this.max = null; this.mode = "many"; this.conflict = null; }
  select() { if (this.action === "select") this.action = "select"; this.returning = true; return this; }
  eq(column, value) { this.filters.push([column, value]); return this; }
  order(column, { ascending = true } = {}) { this.orderBy = { column, ascending }; return this; }
  limit(count) { this.max = count; return this; }
  single() { this.mode = "single"; return this; }
  maybeSingle() { this.mode = "maybe"; return this; }
  insert(rows) { this.action = "insert"; this.payload = rows; return this; }
  update(patch) { this.action = "update"; this.payload = patch; return this; }
  upsert(rows, { onConflict = "id" } = {}) { this.action = "upsert"; this.payload = rows; this.conflict = onConflict.split(",").map((c) => c.trim()); return this; }
  delete() { this.action = "delete"; return this; }
  matches(row) { return this.filters.every(([column, value]) => row[column] === value); }
  run() {
    const db = readLocalDb();
    const rows = db.tables[this.table] ||= [];
    const now = new Date().toISOString();
    let result = [];
    if (this.action === "select") result = rows.filter((row) => this.matches(row));
    if (this.action === "insert") {
      result = [].concat(this.payload).map((row) => ({ id: localId(), created_at: now, ...row }));
      rows.push(...result);
    }
    if (this.action === "update") {
      result = rows.filter((row) => this.matches(row));
      result.forEach((row) => Object.assign(row, this.payload));
    }
    if (this.action === "upsert") {
      result = [].concat(this.payload).map((item) => {
        const existing = rows.find((row) => this.conflict.every((column) => row[column] === item[column]));
        if (existing) return Object.assign(existing, item);
        const created = { id: localId(), created_at: now, ...item };
        rows.push(created);
        return created;
      });
    }
    if (this.action === "delete") {
      result = rows.filter((row) => this.matches(row));
      db.tables[this.table] = rows.filter((row) => !this.matches(row));
    }
    if (this.action !== "select") writeLocalDb(db);
    if (this.orderBy) {
      const { column, ascending } = this.orderBy;
      result = [...result].sort((a, b) => (a[column] > b[column] ? 1 : a[column] < b[column] ? -1 : 0) * (ascending ? 1 : -1));
    }
    if (this.max !== null) result = result.slice(0, this.max);
    result = JSON.parse(JSON.stringify(result));
    if (this.mode === "single") return result[0] ? { data: result[0], error: null } : { data: null, error: new Error("저장된 데이터를 찾지 못했어요.") };
    if (this.mode === "maybe") return { data: result[0] || null, error: null };
    return { data: result, error: null };
  }
  then(resolve, reject) { try { return Promise.resolve(this.run()).then(resolve, reject); } catch (error) { return Promise.resolve({ data: null, error }).then(resolve, reject); } }
}

const localAuthListeners = new Set();
const currentLocalSession = () => {
  let session = null;
  try { session = JSON.parse(localStorage.getItem(LOCAL_SESSION_KEY)); } catch {}
  if (!session?.user?.id) return null;
  const user = readLocalDb().users.find((item) => item.id === session.user.id);
  return user ? { access_token: "local", user: publicUser(user) } : null;
};
const setLocalSession = (user, event) => {
  const session = user ? { access_token: "local", user: publicUser(user) } : null;
  if (session) localStorage.setItem(LOCAL_SESSION_KEY, JSON.stringify(session));
  else localStorage.removeItem(LOCAL_SESSION_KEY);
  localAuthListeners.forEach((callback) => setTimeout(() => callback(event, session), 0));
  return session;
};

// 로그인 없이 바로 쓰도록 기본 사용자를 자동으로 만들고 로그인합니다.
// 이름·지역·나이는 mock-data.js의 APP_DATA.user 값이며, 앱의 '맞춤 정보 관리'에서 바꿀 수 있어요.
function ensureDefaultLocalUser() {
  if (currentLocalSession()) return;
  const db = readLocalDb();
  let user = db.users.find((item) => item.id === "local-default");
  if (!user) {
    const info = APP_DATA.user || {};
    user = { id: "local-default", email: "me@ieum.local", password: null, user_metadata: { display_name: info.name || "이음 사용자" }, created_at: new Date().toISOString() };
    db.users.push(user);
    (db.tables.profiles ||= []).push({ id: user.id, display_name: info.name || "이음 사용자", region: info.region || "서울", birth_year: new Date().getFullYear() - (info.age || 25) + 1, avatar_url: null });
    writeLocalDb(db);
  }
  localStorage.setItem(LOCAL_SESSION_KEY, JSON.stringify({ access_token: "local", user: publicUser(user) }));
}

function createLocalClient() {
  return {
    from: (table) => new LocalQuery(table),
    auth: {
      async signUp({ email, password, options }) {
        const db = readLocalDb();
        const normalized = String(email).trim().toLowerCase();
        if (db.users.some((user) => user.email === normalized)) return { data: {}, error: new Error("User already registered") };
        if (String(password).length < 6) return { data: {}, error: new Error("Password should be at least 6 characters") };
        const user = { id: localId(), email: normalized, password: localHash(password), user_metadata: { ...(options?.data || {}) }, created_at: new Date().toISOString() };
        db.users.push(user);
        (db.tables.profiles ||= []).push({ id: user.id, display_name: options?.data?.display_name || null, region: null, birth_year: null, avatar_url: null });
        writeLocalDb(db);
        const session = setLocalSession(user, "SIGNED_IN");
        return { data: { user: session.user, session }, error: null };
      },
      async signInWithPassword({ email, password }) {
        const user = readLocalDb().users.find((item) => item.email === String(email).trim().toLowerCase());
        if (!user || user.password !== localHash(password)) return { data: {}, error: new Error("Invalid login credentials") };
        const session = setLocalSession(user, "SIGNED_IN");
        return { data: { user: session.user, session }, error: null };
      },
      async getSession() { ensureDefaultLocalUser(); return { data: { session: currentLocalSession() }, error: null }; },
      async getUser() { const session = currentLocalSession(); return { data: { user: session?.user || null }, error: session ? null : new Error("로그인이 필요합니다.") }; },
      async signOut() { setLocalSession(null, "SIGNED_OUT"); return { error: null }; },
      async updateUser({ data, password }) {
        const session = currentLocalSession();
        if (!session) return { data: {}, error: new Error("로그인이 필요합니다.") };
        const db = readLocalDb();
        const user = db.users.find((item) => item.id === session.user.id);
        if (data) user.user_metadata = { ...user.user_metadata, ...data };
        if (password) user.password = localHash(password);
        writeLocalDb(db);
        setLocalSession(user, "USER_UPDATED");
        return { data: { user: publicUser(user) }, error: null };
      },
      onAuthStateChange(callback) { localAuthListeners.add(callback); return { data: { subscription: { unsubscribe: () => localAuthListeners.delete(callback) } } }; },
      async resetPasswordForEmail() { return { error: new Error("오프라인 모드에서는 비밀번호 재설정 메일을 보낼 수 없어요.") }; },
      async signInWithOAuth() { return { data: null, error: new Error("오프라인 모드에서는 Google 로그인을 사용할 수 없어요. 이메일로 가입해주세요.") }; }
    },
    functions: {
      async invoke(name, { body } = {}) {
        if (name !== "ai-chat") return { data: null, error: new Error("오프라인 모드에서 지원하지 않는 기능이에요.") };
        return { data: { answer: localChatAnswer(body?.messages || [], body?.userName) }, error: null };
      }
    }
  };
}

// 오프라인 AI 상담: 질문 단어로 정책을 찾아 이름을 불러 안내합니다.
function localChatAnswer(messages, userName) {
  const name = userName || "이음 사용자";
  const question = [...messages].reverse().find((message) => message.type === "user")?.text || "";
  const topics = [
    ["주거", ["집", "주거", "월세", "전세", "임대", "방", "이사", "보증금"]],
    ["생활", ["생활비", "수당", "정착금", "돈", "생계", "용돈"]],
    ["금융", ["저축", "통장", "적금", "대출", "이자", "금융"]],
    ["교육", ["장학", "등록금", "학교", "대학", "공부", "학자금"]],
    ["취업", ["취업", "일자리", "알바", "구직", "면접", "직업"]],
    ["건강", ["병원", "의료", "심리", "상담", "마음", "아파", "우울"]]
  ];
  const topic = topics.find(([, words]) => words.some((word) => question.includes(word)))?.[0];
  const words = question.split(/\s+/).filter((word) => word.length >= 2);
  const scored = (state.policies || []).map((policy) => {
    const text = `${policy.title} ${policy.desc} ${policy.content || ""} ${policy.category}`;
    const score = (topic && policy.category === topic ? 5 : 0) + words.filter((word) => text.includes(word)).length;
    return { policy, score };
  }).filter((item) => item.score > 0).sort((a, b) => b.score - a.score).slice(0, 3);
  if (/안녕|하이|반가/.test(question) && !scored.length) return `안녕하세요, ${name}님! 주거, 생활비, 취업, 장학금, 건강 중 궁금한 걸 편하게 물어보세요.`;
  if (!scored.length) return `${name}님, 질문과 딱 맞는 정책은 아직 찾지 못했어요. "월세 지원", "자립수당", "장학금"처럼 키워드로 물어보시면 지원정책에서 찾아드릴게요.`;
  const lines = scored.map(({ policy }) => `• ${policy.title} (${policy.amount})\n  ${policy.desc}`);
  return `${name}님, ${topic ? `${topic} 관련해서 ` : ""}이런 지원을 확인해 보세요.\n\n${lines.join("\n\n")}\n\n자세한 신청 방법은 지원정책 탭의 각 카드에서 볼 수 있어요. (오프라인 모드라 간단한 안내만 드려요)`;
}

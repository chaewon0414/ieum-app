// Source: js/data/mock-data.js
// 문구, 카드, 정책 정보는 이 파일의 APP_DATA만 수정하면 화면 전체에 반영됩니다.
const APP_DATA = {
  user: { name: "지원", region: "서울시 관악구", age: 25 },
  policies: [
    {"id": "seed-jarip-sudang", "category": "생활", "title": "자립수당", "desc": "보호가 끝난 뒤 5년 동안 매달 생활비를 받을 수 있어요. 보호종료일 기준으로 2년 이상 연속 보호받았다면 대상이에요.", "content": "대상: 아동복지시설·가정위탁 보호가 끝난 자립준비청년 중 보호종료일 기준 과거 2년 이상 연속 보호받은 사람\n지원: 월 50만 원, 보호종료 후 5년간\n신청: 주소지 행정복지센터 또는 복지로 온라인 신청\n문의: 보건복지부 청년정책팀 044-202-3361", "amount": "월 50만 원", "deadline": "상시 신청", "region": "전국", "applicationUrl": "https://www.bokjiro.go.kr", "source": "보건복지부 자립준비청년 자립지원 안내", "match": 98},
    {"id": "seed-jarip-jeongchakgeum", "category": "생활", "title": "자립정착금", "desc": "보호가 끝날 때 시·도에서 한 번에 받는 정착 지원금이에요. 사는 지역에 따라 금액이 달라요.", "content": "대상: 만 18세 이후 보호가 끝난 자립준비청년\n지원(2025년 기준): 서울 2,000만 원 / 대전·경기·제주·경남 1,500만 원 / 부산 1,200만 원 / 그 외 지역 1,000만 원\n신청: 아동복지시설 또는 가정위탁지원센터와 사용계획서를 작성한 뒤 관할 행정복지센터에 신청\n금액은 해마다 바뀔 수 있으니 관할 시·군·구 공고를 꼭 확인하세요.", "amount": "1,000만~2,000만 원", "deadline": "상시 신청", "region": "시·도별", "applicationUrl": "https://www.mohw.go.kr/menu.es?mid=a10711041000", "source": "보건복지부 자립준비청년 자립지원 안내", "match": 96},
    {"id": "seed-gichosaenghwal-gongje", "category": "생활", "title": "기초생활보장 근로소득 공제", "desc": "기초생활수급을 받으면서 일해도 소득 일부를 빼고 계산해 줘서, 일을 시작해도 급여가 크게 줄지 않아요.", "content": "대상: 기초생활보장 수급 자립준비청년(생계급여 수급 자격 완화 포함)\n지원: 소득 조사 때 근로·사업소득에서 60만 원 + 나머지 소득의 30%를 공제, 보호종료 후 5년간\n신청: 주소지 행정복지센터", "amount": "월 60만 원 + 30% 공제", "deadline": "상시 신청", "region": "전국", "applicationUrl": "https://www.mohw.go.kr/menu.es?mid=a10711041000", "source": "보건복지부 자립준비청년 자립지원 안내", "match": 88},
    {"id": "seed-jarip-sarye", "category": "생활", "title": "자립지원 통합서비스(사례관리)", "desc": "시·도 자립지원전담기관 담당자가 주거, 돈 관리, 진로, 건강 고민을 함께 살피고 필요한 지원을 연결해 줘요.", "content": "대상: 보호종료 5년 이내 자립준비청년, 보호연장아동\n지원: 1:1 맞춤형 사례관리, 필요한 서비스 연계\n신청: 거주 지역 시·도 자립지원전담기관", "amount": "1:1 맞춤 상담", "deadline": "상시 신청", "region": "전국", "applicationUrl": "https://jaripon.ncrc.or.kr", "source": "보건복지부 자립준비청년 자립지원 안내", "match": 90},
    {"id": "seed-baramgaebi", "category": "생활", "title": "바람개비서포터즈·자조모임", "desc": "먼저 자립한 선배들과 만나고, 비슷한 경험을 가진 청년들끼리 모임을 만들면 활동비를 지원받을 수 있어요.", "content": "대상: 만 29세 이하 보호연장아동 및 자립준비청년\n지원: 자립 멘토 활동(바람개비서포터즈), 자조모임 운영과 활동비\n신청: 거주 지역 시·도 자립지원전담기관", "amount": "모임 활동비", "deadline": "상시 신청", "region": "전국", "applicationUrl": "https://jaripon.ncrc.or.kr", "source": "보건복지부 자립준비청년 자립지원 안내", "match": 80},
    {"id": "seed-lh-sonyeon-jeonse", "category": "주거", "title": "소년소녀가정 등 전세임대", "desc": "LH가 전셋집을 빌려 저렴하게 다시 빌려줘요. 22세까지는 무상이고, 보호종료 후 5년간 이자를 절반 깎아줘요.", "content": "대상: 자립준비청년, 청소년복지시설 퇴소청소년 등 무주택자(보호종료아동은 소득 기준 미적용)\n지원: 22세 이하 무상 지원, 보호종료 후 5년 이내 대출이율 50% 감면\n신청: 주소지 읍·면·동 주민센터\n문의: LH 전세임대콜센터 1670-0002", "amount": "22세까지 무상", "deadline": "상시 신청", "region": "전국", "applicationUrl": "https://apply.lh.or.kr", "source": "복지로 2025 복지서비스 안내책자(청년층)", "match": 95},
    {"id": "seed-lh-jarip-jeonse", "category": "주거", "title": "자립준비청년 전세임대(청년 전세임대 우선공급)", "desc": "청년 전세임대 물량 중 자립준비청년에게 먼저 공급해요. 지금 사는 곳과 상관없이 전국 주택에 신청할 수 있어요.", "content": "대상: 가정위탁 종료 또는 아동복지시설 퇴소 5년 이내인 사람, 보호연장아동\n지원: 지원한도액 수도권 1억 2,000만 원(청년 유형과 동일), 최장 6년 거주(조건 충족 시 최장 20년)\n신청: LH 청약플러스 공고 확인", "amount": "수도권 최대 1억 2천만 원", "deadline": "상시 신청", "region": "전국", "applicationUrl": "https://apply.lh.or.kr", "source": "문화일보 LH 청년 전세임대 모집 기사", "match": 93},
    {"id": "seed-busan-maeip", "category": "주거", "title": "부산도시공사 자립준비청년 매입임대주택", "desc": "보증금 100만 원, 월세는 시세의 20% 수준으로 살 수 있는 집이에요. 모집 세대가 다 찰 때까지 수시로 접수해요.", "content": "대상: 아동복지시설 퇴소 5년 이내 무주택자(공고일 기준 공사 매입임대주택에 살고 있지 않은 사람)\n지원: 임대보증금 100만 원, 월 임대료 시세 20% 수준, 최초 2년(재계약 시 최장 10년, 소득·자산 기준 충족 시 최장 20년)\n신청: 부산도시공사 누리집 공고문 확인", "amount": "보증금 100만 원", "deadline": "모집 마감 시까지", "region": "부산", "applicationUrl": "https://www.bmc.busan.kr", "source": "파이낸셜뉴스 2026.7.22 부산도시공사 수시모집 기사", "match": 84},
    {"id": "seed-didim-ssiat", "category": "금융", "title": "디딤씨앗통장", "desc": "보호받는 동안 저축하면 나라가 2배를 더 넣어줘요. 모은 돈은 18세 이후 자립 초기 비용으로 받아요.", "content": "대상: 0세~만 18세 미만 보호대상아동\n지원: 매월 저축액을 국가(지자체)가 1:2로 매칭, 정부지원금 월 10만 원 한도\n지급: 18세 이후 사회진출 초기 비용으로 사용\n자세한 내용: 아동권리보장원 누리집", "amount": "월 최대 10만 원 매칭", "deadline": "상시 신청", "region": "전국", "applicationUrl": "https://www.ncrc.or.kr", "source": "보건복지부 자립준비청년 자립지원 안내", "match": 85},
    {"id": "seed-kosaf-loan-interest", "category": "금융", "title": "학자금대출 생활비 이자 면제", "desc": "대학생이 취업 후 상환 학자금대출로 생활비를 빌리면, 갚기 시작하기 전까지 이자를 내지 않아도 돼요.", "content": "대상: 취업 후 상환 학자금대출을 받는 자립준비청년(보호아동 포함) 학부생, 만 35세 이하\n지원: 의무상환 개시 전까지 생활비 대출 이자 면제\n신청: 한국장학재단 누리집 또는 모바일 앱\n문의: 한국장학재단 1599-2000", "amount": "생활비 대출 이자 0원", "deadline": "상시 신청", "region": "전국", "applicationUrl": "https://www.kosaf.go.kr", "source": "복지로 2025 복지서비스 안내책자(청년층)", "match": 82},
    {"id": "seed-kosaf-scholarship", "category": "교육", "title": "국가장학금 성적기준 미적용", "desc": "자립준비청년은 국가장학금 Ⅰ유형을 받을 때 성적 기준을 보지 않아요. 학자금지원 9구간 이하면 신청할 수 있어요.", "content": "대상: 국내 대학 재학생 중 학자금지원 9구간 이하\n특례: 자립준비청년은 Ⅰ유형·다자녀 국가장학금 성적 기준 미적용\n신청: 한국장학재단 누리집 및 모바일 앱(학기별 신청 기간 확인)\n문의: 한국장학재단 1599-2000", "amount": "등록금 지원", "deadline": "학기별 신청 기간", "region": "전국", "applicationUrl": "https://www.kosaf.go.kr", "source": "복지로 2025 복지서비스 안내책자(청년층)", "match": 87},
    {"id": "seed-medical-copay", "category": "건강", "title": "자립준비청년 의료비 지원", "desc": "건강보험으로 병원에 갈 때 내는 본인부담금을 의료급여 수준으로 줄여줘요.", "content": "대상: 건강보험에 가입한 자립준비청년\n지원: 요양급여비용 본인일부부담금 경감(의료급여와 비슷한 수준)\n문의: 보건복지부 청년정책팀 044-202-3361", "amount": "병원비 본인부담 경감", "deadline": "상시 신청", "region": "전국", "applicationUrl": "https://www.mohw.go.kr/menu.es?mid=a10711041000", "source": "보건복지부 자립준비청년 자립지원 안내", "match": 91},
    {"id": "seed-maeum-tuja", "category": "건강", "title": "마음투자 심리상담 본인부담 면제", "desc": "전국민 마음투자 지원사업으로 심리상담을 받을 때 자립준비청년은 본인부담금 없이 이용할 수 있어요.", "content": "대상: 자립준비청년, 보호연장아동\n지원: 전국민 마음투자 지원사업 참여 시 본인부담금 제외\n신청: 복지로 온라인 신청", "amount": "상담비 본인부담 0원", "deadline": "상시 신청", "region": "전국", "applicationUrl": "https://www.bokjiro.go.kr", "source": "보건복지부 자립준비청년 자립지원 안내", "match": 86},
    {"id": "seed-kuksi-chwieop", "category": "취업", "title": "국민취업지원제도", "desc": "취업 상담, 직업훈련, 일자리 소개를 받고 조건이 맞으면 구직촉진수당도 받을 수 있어요. 청년 누구나 확인해 볼 만한 제도예요.", "content": "대상: 취업을 원하는 청년 등(유형별 소득·재산 기준 있음)\n지원: 취업지원 서비스, 1유형은 구직촉진수당(6개월)\n신청: 고용24 또는 가까운 고용센터\n자립준비청년 전용 제도는 아니니 자격은 고용24에서 확인하세요.", "amount": "구직촉진수당 + 취업지원", "deadline": "상시 신청", "region": "전국", "applicationUrl": "https://www.work24.go.kr", "source": "고용노동부 고용24", "match": 83}
  ],
  jobs: [
    { company: "카카오", title: "서비스 기획 어시스턴트 모집", tags: ["신입", "판교", "기획"], deadline: "D-12" },
    { company: "네이버", title: "UX/UI 디자인 체험형 인턴", tags: ["인턴", "분당", "디자인"], deadline: "D-18" }
  ],
  posts: [
    { author: "취준하는 민지", time: "12분 전", category: "취업", title: "첫 면접을 앞두고 있는데 이것만은 꼭 준비하세요", body: "지난주 모의 면접에서 받은 피드백을 정리해봤어요. 답변을 외우기보다 경험을 상황-행동-결과로 나누니 훨씬 자연스러웠습니다.", likes: 42, comments: 13 },
    { author: "자립 2년 차", time: "1시간 전", category: "생활", title: "한 달 생활비를 줄여준 작은 습관들", body: "고정비를 먼저 분리하고 남은 금액을 주 단위로 나눠 쓰니 월말이 훨씬 편해졌어요. 저만의 예산표도 공유해요.", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=300&q=80", likes: 87, comments: 26 }
  ]
};

APP_DATA.posts[0].commentList = [
  { author: "오늘도 한 걸음", time: "9분 전", body: "저도 첫 면접을 앞두고 있는데 덕분에 방향을 잡았습니다.", replies: [] },
  { author: "취업준비생", time: "5분 전", body: "상황-행동-결과로 나누는 방법이 정말 도움이 됐어요!", replies: [] }
];
APP_DATA.posts[1].commentList = [
  { author: "독립 준비 중", time: "35분 전", body: "예산표 양식도 궁금해요. 좋은 정보 감사합니다!", replies: [] },
  { author: "알뜰한 하루", time: "20분 전", body: "주 단위로 예산을 나누는 방법 저도 해봐야겠어요.", replies: [] }
];


// Source: js/api/supabase-client.js
let supabaseClient = null;

let localClient = null;

// 서버(Supabase) 또는 오프라인 저장소 중 하나는 항상 쓸 수 있어요.
function isSupabaseConfigured() {
  return true;
}

function getSupabaseClient() {
  if (isLocalMode()) return (localClient ||= createLocalClient());
  if (!window.supabase) throw new Error("Supabase 라이브러리를 불러오지 못했습니다.");

  if (!supabaseClient) {
    const config = window.IEUM_CONFIG;
    supabaseClient = window.supabase.createClient(config.SUPABASE_URL, config.SUPABASE_PUBLISHABLE_KEY);
  }
  return supabaseClient;
}


// Source: js/api/local-backend.js
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
      posts.push({ id, author_id: "seed", author_name: post.author, category: post.category, title: post.title, body: post.body, image_url: post.image || null, status: "published", created_at: new Date(created).toISOString() });
      (post.commentList || []).forEach((comment, commentIndex) => {
        comments.push({ id: `${id}-c${commentIndex}`, post_id: id, parent_id: null, author_id: "seed", author_name: comment.author, body: comment.body, status: "published", created_at: new Date(created + (commentIndex + 1) * 60000).toISOString() });
      });
    });
    db.seededCommunity = true;
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
      async getSession() { return { data: { session: currentLocalSession() }, error: null }; },
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
// Source: js/api/policies-api.js
function formatDeadline(date) {
  if (!date) return "상시 신청";
  return `${date.replaceAll("-", ".")}까지`;
}

async function fetchPublishedPolicies() {
  const client = getSupabaseClient();
  if (!client) return null;

  const { data, error } = await client
    .from("policies")
    .select("id,title,category,summary,content,support_amount,application_start,application_end,region,image_url,application_url,published_at")
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (error) throw error;
  return data.map((policy) => ({
    id: policy.id,
    title: policy.title,
    category: policy.category,
    desc: policy.summary,
    content: policy.content,
    amount: policy.support_amount || "지원 내용 확인",
    deadline: formatDeadline(policy.application_end),
    region: policy.region,
    image: policy.image_url,
    applicationUrl: policy.application_url,
    match: 0
  }));
}


// Source: js/api/community-api.js
function relativeTime(dateText) {
  const minutes = Math.max(0, Math.floor((Date.now() - new Date(dateText).getTime()) / 60000));
  if (minutes < 1) return "방금 전";
  if (minutes < 60) return `${minutes}분 전`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}시간 전`;
  return `${Math.floor(hours / 24)}일 전`;
}

async function fetchCommunityPosts() {
  const client = getSupabaseClient();
  if (!client) return null;

  const [{ data: posts, error: postsError }, { data: comments, error: commentsError }, { data: likes, error: likesError }] = await Promise.all([
    client.from("community_posts").select("id,author_id,author_name,category,title,body,image_url,created_at").eq("status", "published").order("created_at", { ascending: false }),
    client.from("community_comments").select("id,post_id,parent_id,author_id,author_name,body,created_at").eq("status", "published").order("created_at", { ascending: true }),
    client.from("community_post_likes").select("post_id,user_id")
  ]);

  if (postsError) throw postsError;
  if (commentsError) throw commentsError;
  if (likesError) throw likesError;

  return posts.map((post) => {
    const postComments = comments.filter((comment) => comment.post_id === post.id);
    const topLevel = postComments.filter((comment) => !comment.parent_id);
    return {
      id: post.id,
      authorId: post.author_id,
      author: post.author_name,
      time: relativeTime(post.created_at),
      category: post.category,
      title: post.title,
      body: post.body,
      image: post.image_url,
      likes: likes.filter((like) => like.post_id === post.id).length,
      likedUserIds: likes.filter((like) => like.post_id === post.id).map((like) => like.user_id),
      comments: postComments.length,
      commentList: topLevel.map((comment) => ({
        id: comment.id,
        authorId: comment.author_id,
        createdAt: comment.created_at,
        author: comment.author_name,
        time: relativeTime(comment.created_at),
        body: comment.body,
        replies: postComments.filter((reply) => reply.parent_id === comment.id).map((reply) => ({
          id: reply.id,
          authorId: reply.author_id,
          createdAt: reply.created_at,
          author: reply.author_name,
          time: relativeTime(reply.created_at),
          body: reply.body
        }))
      }))
    };
  });
}

async function insertCommunityPost({ userId, authorName, category, title, body }) {
  const client = getSupabaseClient();
  if (!client) throw new Error("Supabase가 연결되지 않았습니다.");

  const { data, error } = await client
    .from("community_posts")
    .insert({
      author_id: userId,
      author_name: authorName,
      category,
      title,
      body,
      status: "published"
    })
    .select("id")
    .single();

  if (error) throw error;
  return data;
}

async function insertCommunityComment({ postId, parentId = null, userId, authorName, body }) {
  const client = getSupabaseClient();
  if (!client) throw new Error("Supabase가 연결되지 않았습니다.");

  const { data, error } = await client
    .from("community_comments")
    .insert({
      post_id: postId,
      parent_id: parentId,
      author_id: userId,
      author_name: authorName,
      body,
      status: "published"
    })
    .select("id")
    .single();

  if (error) throw error;
  return data;
}

async function addCommunityLike({ postId, userId }) {
  const client = getSupabaseClient();
  if (!client) throw new Error("Supabase가 연결되지 않았습니다.");
  const { error } = await client.from("community_post_likes").insert({ post_id: postId, user_id: userId });
  if (error) throw error;
}

async function removeCommunityLike({ postId, userId }) {
  const client = getSupabaseClient();
  if (!client) throw new Error("Supabase가 연결되지 않았습니다.");
  const { error } = await client.from("community_post_likes").delete().eq("post_id", postId).eq("user_id", userId);
  if (error) throw error;
}

async function insertCommunityReport({ reporterId, postId = null, commentId = null, reason }) {
  const client = getSupabaseClient();
  if (!client) throw new Error("Supabase가 연결되지 않았습니다.");
  const { error } = await client.from("community_reports").insert({ reporter_id: reporterId, post_id: postId, comment_id: commentId, reason });
  if (error) throw error;
}


// Source: js/api/auth-api.js
function requireClient() {
  const client = getSupabaseClient();
  if (!client) throw new Error("Supabase 연결 설정을 먼저 완료해주세요.");
  return client;
}

async function signUpWithEmail({ email, password, displayName }) {
  const { data, error } = await requireClient().auth.signUp({
    email,
    password,
    options: { data: { display_name: displayName } }
  });
  if (error) throw error;
  return data;
}

async function signInWithEmail({ email, password }) {
  const { data, error } = await requireClient().auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data;
}

async function sendPasswordResetEmail(email, redirectTo) {
  const { error } = await requireClient().auth.resetPasswordForEmail(email, { redirectTo });
  if (error) throw error;
}

async function updatePassword(password) {
  const { error } = await requireClient().auth.updateUser({ password });
  if (error) throw error;
}

async function signInWithGoogle() {
  const options = {};
  if (["http:", "https:"].includes(location.protocol)) {
    options.redirectTo = `${location.origin}${location.pathname}`;
  }
  const { data, error } = await requireClient().auth.signInWithOAuth({
    provider: "google",
    options
  });
  if (error) throw error;
  return data;
}

async function signOutUser() {
  const client = requireClient();
  const { error } = await client.auth.signOut();
  if (error) {
    const { error: localError } = await client.auth.signOut({ scope: "local" });
    if (localError) throw localError;
  }
}

async function getCurrentSession() {
  const { data, error } = await requireClient().auth.getSession();
  if (error) throw error;
  return data.session;
}

async function getVerifiedSession() {
  const client = requireClient();
  const { data: sessionData, error: sessionError } = await client.auth.getSession();
  if (sessionError) throw sessionError;
  if (!sessionData.session) return null;

  const { data: userData, error: userError } = await client.auth.getUser();
  if (userError || !userData.user) {
    await client.auth.signOut({ scope: "local" });
    return null;
  }
  return sessionData.session;
}

async function fetchProfile(userId) {
  const { data, error } = await requireClient()
    .from("profiles")
    .select("id,display_name,region,birth_year,avatar_url")
    .eq("id", userId)
    .maybeSingle();
  if (error) throw error;
  return data;
}

async function updateInitialProfile({ userId, displayName, region, birthYear }) {
  const { data, error } = await requireClient()
    .from("profiles")
    .update({
      display_name: displayName,
      region,
      birth_year: birthYear,
      updated_at: new Date().toISOString()
    })
    .eq("id", userId)
    .select("id,display_name,region,birth_year,avatar_url")
    .single();
  if (error) throw error;
  return data;
}

async function updateGenderMetadata(gender) {
  const { data, error } = await requireClient().auth.updateUser({ data: { gender } });
  if (error) throw error;
  return data.user;
}

function subscribeToAuthChanges(callback) {
  return requireClient().auth.onAuthStateChange((event, session) => callback(session, event));
}


// Source: js/api/finance-api.js
function requireClient() {
  const client = getSupabaseClient();
  if (!client) throw new Error("Supabase가 연결되지 않았습니다.");
  return client;
}

async function fetchMonthlyFinances(userId, limit = 12) {
  const { data, error } = await requireClient()
    .from("monthly_finances")
    .select("id,user_id,month,income,expense_total,created_at,updated_at")
    .eq("user_id", userId)
    .order("month", { ascending: false })
    .limit(limit);
  if (error) throw error;
  return data || [];
}

async function upsertMonthlyFinance({ userId, month, income, expenseTotal }) {
  const { data, error } = await requireClient()
    .from("monthly_finances")
    .upsert({
      user_id: userId,
      month,
      income: Math.round(Number(income || 0)),
      expense_total: Math.round(Number(expenseTotal || 0)),
      updated_at: new Date().toISOString()
    }, { onConflict: "user_id,month" })
    .select("id,user_id,month,income,expense_total,created_at,updated_at")
    .single();
  if (error) throw error;
  return data;
}

async function fetchUserIncome(userId) {
  const { data, error } = await requireClient()
    .from("user_incomes")
    .select("user_id,monthly_income,income_status,created_at,updated_at")
    .eq("user_id", userId)
    .maybeSingle();
  if (error) throw error;
  return data;
}

async function upsertUserIncome({ userId, monthlyIncome, incomeStatus }) {
  const { data, error } = await requireClient()
    .from("user_incomes")
    .upsert({
      user_id: userId,
      monthly_income: monthlyIncome === null ? null : Math.round(Number(monthlyIncome || 0)),
      income_status: incomeStatus,
      updated_at: new Date().toISOString()
    }, { onConflict: "user_id" })
    .select("user_id,monthly_income,income_status,created_at,updated_at")
    .single();
  if (error) throw error;
  return data;
}


// Source: js/api/ai-api.js
async function fetchGeminiAnswer(messages, userName = "") {
  const client = getSupabaseClient();
  if (!client) throw new Error("Supabase가 연결되지 않았습니다.");

  const { data, error } = await client.functions.invoke("ai-chat", { body: { messages, userName } });
  if (error) {
    let detail = error.message || "Edge Function 호출 실패";
    try {
      const body = await error.context?.clone?.().json();
      if (body?.error) detail = body.error;
      else if (body?.message) detail = body.message;
    } catch {}
    const status = error.context?.status;
    throw new Error(status ? `${detail} (${status})` : detail);
  }
  if (data?.error) throw new Error(data.error);
  if (!data?.answer) throw new Error("AI 답변이 없습니다.");
  return data.answer;
}


// Source: js/api/notification-expense-api.js
const notificationExpensePlugin = () => window.Capacitor?.Plugins?.NotificationExpense || null;

const notificationExpenseAvailable = () => Boolean(notificationExpensePlugin());

async function getNotificationExpenseStatus() {
  const plugin = notificationExpensePlugin();
  if (!plugin) return { available: false, enabled: false };
  const result = await plugin.getStatus();
  return { available: true, enabled: Boolean(result?.enabled) };
}

async function openNotificationExpenseSettings() {
  const plugin = notificationExpensePlugin();
  if (!plugin) return false;
  await plugin.openSettings();
  return true;
}

async function getNotificationExpenseCandidates() {
  const plugin = notificationExpensePlugin();
  if (!plugin) return [];
  const result = await plugin.getCandidates();
  return Array.isArray(result?.items) ? result.items : [];
}

async function removeNotificationExpenseCandidate(id) {
  const plugin = notificationExpensePlugin();
  if (!plugin) return;
  await plugin.removeCandidate({ id });
}


// Source: js/core/state.js
const readStoredState = (key, fallback) => {
  try {
    const saved = JSON.parse(localStorage.getItem(key));
    return saved && typeof saved === "object" ? saved : fallback;
  } catch {
    return fallback;
  }
};

const readSupportApplications = () => {
  const saved = readStoredState("ieum-support-applications", []);
  if (!Array.isArray(saved)) return [];
  const applications = saved.filter((item) => !(
    (item?.id === "youth-rent" && item.title === "청년 월세 지원" && Number(item.amount) === 200000)
    || (item?.id === "youth-savings" && item.title === "청년도약계좌 기여금" && Number(item.amount) === 500000)
  ));
  if (applications.length !== saved.length) localStorage.setItem("ieum-support-applications", JSON.stringify(applications));
  return applications;
};

const defaultLiving = {
  income: 1900000,
  expenses: [
    { id: "expense-1", content: "생활용품", amount: 32800, date: "2026-08-31" },
    { id: "expense-2", content: "점심 식비", amount: 11000, date: "2026-08-30" }
  ],
  rent: { amount: 500000, startMonth: "2026-03", endMonth: "2027-02" },
  recurring: [
    { id: "recurring-1", category: "공과금", content: "전기·가스", amount: 65000 },
    { id: "recurring-2", category: "정기지출", content: "통신비", amount: 55000 }
  ],
  history: {
    "2026-06": { income: 1750000, spending: 1310000 },
    "2026-07": { income: 1850000, spending: 1420000 }
  }
};

const normalizeLiving = (living) => ({
  ...defaultLiving,
  ...living,
  expenses: Array.isArray(living?.expenses) ? living.expenses : defaultLiving.expenses,
  recurring: Array.isArray(living?.recurring) ? living.recurring : defaultLiving.recurring,
  rent: { ...defaultLiving.rent, ...(living?.rent || {}) },
  history: { ...defaultLiving.history, ...(living?.history || {}) }
});

const state = {
  route: new URLSearchParams(location.search).has("reset-password") ? "reset-password" : (location.hash.slice(1) || "home"),
  selectedPost: 0,
  replyTarget: null,
  policyFilter: "전체",
  policySearch: "",
  policySort: "추천순",
  showPolicySort: false,
  communityKind: "질문",
  communityFilter: "취업",
  policies: [...APP_DATA.policies],
  policiesLoading: false,
  policiesError: null,
  policyDataSource: "mock",
  posts: APP_DATA.posts,
  communityLoading: false,
  communityError: null,
  communityDataSource: "mock",
  authUser: null,
  profile: null,
  customInfo: { gender: "" },
  livingCalendarMonth: `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, "0")}`,
  authLoading: true,
  authSubmitting: false,
  authEmail: "",
  authRecovery: new URLSearchParams(location.search).has("reset-password"),
  authError: null,
  authNotice: null,
  welcomeCompleted: localStorage.getItem("ieum-welcome-completed") === "true",
  guestMode: sessionStorage.getItem("ieum-guest-mode") === "true",
  onboardingSubmitting: false,
  onboardingError: null,
  chatLoading: false,
  saved: new Set(readStoredState("ieum-saved-policies", [])),
  notificationSettings: readStoredState("ieum-notification-settings", { community: true, policy: true, rent: true }),
  notificationRead: readStoredState("ieum-notification-read", {}),
  checked: new Set([0, 2]),
  supportApplications: readSupportApplications(),
  living: normalizeLiving(readStoredState("ieum-living", defaultLiving)),
  notificationExpenseAvailable: false,
  notificationExpenseEnabled: false,
  notificationExpenseCandidates: [],
  notificationExpenseLoading: false,
  chat: [{ type: "bot", greeting: true, text: "" }]
};


// Source: js/core/utils.js
const toast = document.querySelector("#toast");

const icon = (name) => `<span class="material-symbols-rounded">${name}</span>`;
const escapeHtml = (value = "") => String(value).replace(/[&<>'"]/g, (character) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "'": "&#39;",
  '"': "&quot;"
})[character]);
const formatWon = (value) => `${Number(value || 0).toLocaleString("ko-KR")}원`;
const showToast = (message) => {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1800);
};


// Source: js/components/policy-card.js
const LINK_NAMES = [["bokjiro", "복지로"], ["jaripon", "자립정보ON"], ["ncrc", "아동권리보장원"], ["mohw", "보건복지부"], ["lh.or.kr", "LH 청약플러스"], ["kosaf", "한국장학재단"], ["work24", "고용24"], ["bmc.busan", "부산도시공사"], ["gov.kr", "정부24"], ["youthcenter", "온통청년"]];
const linkName = (url = "") => (LINK_NAMES.find(([key]) => url.includes(key)) || [null, "공식 페이지"])[1];
const CATEGORY_TAG = { 생활: "", 주거: "house", 금융: "gold", 교육: "edu", 취업: "job", 건강: "health" };

function policyCard(policy, index, result = false) {
  const saveKey = String(policy.id || policy.title);
  const region = policy.region && policy.region !== "전국" ? `<span>${icon("location_on")} ${escapeHtml(policy.region)}</span>` : "";
  const link = !result && policy.applicationUrl ? `<a class="policy-link" href="${escapeHtml(policy.applicationUrl)}" target="_blank" rel="noopener">${escapeHtml(linkName(policy.applicationUrl))}에서 확인하기 ${icon("open_in_new")}</a>` : "";
  const details = !result && policy.content ? `<details class="policy-details">
      <summary>자세히 보기 ${icon("expand_more")}</summary>
      <ul>${policy.content.split("\n").filter(Boolean).map((line) => `<li>${escapeHtml(line)}</li>`).join("")}</ul>
      ${policy.source ? `<div class="policy-details-foot"><small>출처: ${escapeHtml(policy.source)}</small></div>` : ""}
    </details>` : "";
  return `<article class="card ${result ? "result-card" : "policy-card"} ${result && index === 2 ? "featured" : ""}">
    <div class="card-top"><div><span class="tag ${CATEGORY_TAG[policy.category] || ""}">${escapeHtml(policy.category)}</span><h3>${escapeHtml(policy.title)}</h3></div>
    <button class="bookmark ${state.saved.has(saveKey) ? "saved" : ""}" data-save="${escapeHtml(saveKey)}" aria-label="${escapeHtml(policy.title)} 저장">${icon("bookmark")}</button></div>
    <p class="subtext">${escapeHtml(policy.desc)}</p>
    <div class="meta"><span>${icon("payments")} ${escapeHtml(policy.amount)}</span><span>${icon("event")} ${escapeHtml(policy.deadline)}</span>${region}${result ? `<span>${icon("verified")} 매칭 ${policy.match}%</span>` : ""}</div>
    ${link}
    ${details}
  </article>`;
}
// Source: js/services/notifications.js
const dayMs = 86400000;
const startOfDay = (value) => { const date = new Date(value); return new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime(); };
const persistRead = () => localStorage.setItem("ieum-notification-read", JSON.stringify(state.notificationRead));

function getNotifications() {
  const today = startOfDay(Date.now());
  const items = [];
  const userId = state.authUser?.id;

  if (userId && state.notificationSettings.community && state.communityDataSource === "supabase") {
    state.posts.forEach((post, postIndex) => {
      post.commentList?.forEach((comment) => {
        if (post.authorId === userId && comment.authorId !== userId) items.push({ id: `comment:${comment.id}`, type: "community", title: "내 글에 댓글이 달렸어요", body: `${comment.author} · ${post.title}`, route: "post", postIndex, time: new Date(comment.createdAt).getTime() });
        comment.replies?.forEach((reply) => {
          if (comment.authorId === userId && reply.authorId !== userId) items.push({ id: `reply:${reply.id}`, type: "community", title: "내 댓글에 답글이 달렸어요", body: `${reply.author} · ${post.title}`, route: "post", postIndex, time: new Date(reply.createdAt).getTime() });
        });
      });
    });
  }

  if (state.notificationSettings.policy) state.policies.forEach((policy) => {
    if (!state.saved.has(String(policy.id || policy.title))) return;
    const match = policy.deadline?.match(/(\d{4})[.-](\d{1,2})[.-](\d{1,2})/);
    if (!match) return;
    const deadline = new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3])).getTime();
    const days = Math.round((deadline - today) / dayMs);
    if (days >= 0 && days <= 7) items.push({ id: `policy:${policy.id || policy.title}:${match[0]}`, type: "policy", title: days === 0 ? "저장한 정책이 오늘 마감돼요" : `저장한 정책이 ${days}일 뒤 마감돼요`, body: policy.title, route: "policies", time: deadline });
  });

  if (state.notificationSettings.rent && Number(state.living.rent?.amount) > 0 && Number(state.living.rent?.dueDay) > 0) {
    const dueDay = Math.min(31, Math.max(1, Number(state.living.rent.dueDay) || 1));
    const now = new Date();
    for (let offset = 0; offset <= 1; offset++) {
      const monthEnd = new Date(now.getFullYear(), now.getMonth() + offset + 1, 0).getDate();
      const due = new Date(now.getFullYear(), now.getMonth() + offset, Math.min(dueDay, monthEnd)).getTime();
      const days = Math.round((due - today) / dayMs);
      if (days >= 0 && days <= 3) { items.push({ id: `rent:${new Date(due).getFullYear()}-${new Date(due).getMonth() + 1}`, type: "rent", title: days === 0 ? "오늘은 월세 납부일이에요" : `월세 납부일이 ${days}일 남았어요`, body: `${dueDay}일 · ${Number(state.living.rent.amount).toLocaleString("ko-KR")}원`, route: "living", time: due }); break; }
    }
  }
  return items.sort((a, b) => (state.notificationRead[a.id] ? 1 : 0) - (state.notificationRead[b.id] ? 1 : 0) || b.time - a.time);
}

function markNotificationRead(id) { state.notificationRead[id] = true; persistRead(); }
function markAllNotificationsRead() { getNotifications().forEach((item) => { state.notificationRead[item.id] = true; }); persistRead(); }


// Source: js/pages/home.js
const homeView = () => { const accountName = state.profile?.display_name || state.authUser?.user_metadata?.display_name; const greeting = state.authUser && accountName ? `반가워요, ${accountName}님!` : "반가워요!"; const applications = state.supportApplications || []; const upcomingAmount = applications.filter((item) => !["탈락", "지급 완료"].includes(item.status)).reduce((sum, item) => sum + Number(item.amount || 0), 0); const currentApplication = applications[0]; return `<div class="page home-page">
    <section><h1>${greeting}</h1></section>
    <section class="section status-section ${state.authUser ? "" : "status-locked"}">
      <button type="button" class="card status-card" data-route="support-status" ${state.authUser ? "" : "disabled aria-hidden=\"true\""}><div class="status-title"><span>나의 지원 현황</span>${icon("chevron_right")}</div><div class="status-grid"><div><small>신청 중인 정책</small><strong>${applications.length}건</strong></div><div><small>이번 달 지원 예정</small><strong>${formatWon(upcomingAmount)}</strong></div></div><div class="status-foot">${icon("fact_check")}<div><b>${currentApplication?.title || "신청 중인 정책이 없어요"}</b>${currentApplication ? `<span class="status-progress-chip">${currentApplication.status}</span>` : ""}<small>${currentApplication ? "진행상태와 심사결과를 확인하세요" : "지원정책에서 관심 정책을 찾아보세요"}</small></div></div></button>
      ${state.authUser ? "" : `<div class="status-login-notice">${icon("lock")}<strong>로그인해야 이용 가능합니다</strong><button type="button" data-route="login">로그인</button></div>`}
    </section>
    <section class="section quick-start-section"><div class="section-head"><h2>빠른 시작</h2></div><div class="action-grid">
      <button class="action-card wide" data-route="living"><span class="action-icon">${icon("home")}</span><div><h3>생활 관리</h3><p>월세와 생활비를 가볍게 관리해요</p></div><span class="chevron">${icon("chevron_right")}</span></button>
      <button class="action-card" data-route="policies"><span class="action-icon">${icon("account_balance")}</span><div class="action-copy"><h3>지원정책 찾기</h3><p>놓치기 쉬운 혜택까지 한눈에</p></div></button>
      <button class="action-card" data-route="jobs"><span class="action-icon">${icon("work")}</span><div class="action-copy"><h3>취업 준비</h3><p>채용 정보와 면접 연습</p></div></button>
    </div></section>
    <section class="section"><article class="card daily-message"><span class="action-icon">${icon("lightbulb")}</span><div><h2>오늘의 한마디</h2><p>작은 한 걸음도 분명한 시작이에요. 오늘도 천천히 나아가요.</p></div></article></section>
  </div>`; };


// Source: js/pages/policies.js
const policiesView = () => { const categories = ["전체", "생활", "주거", "금융", "교육", "취업", "건강"]; const query = state.policySearch.trim().toLowerCase(); let filtered = state.policies.filter(p => (state.policyFilter === "전체" || p.category === state.policyFilter) && (!query || `${p.title} ${p.desc} ${p.category} ${p.content || ""} ${p.region || ""}`.toLowerCase().includes(query))); if (state.policySort === "마감 임박순") filtered = [...filtered].reverse(); const status = state.policiesLoading ? `<div class="card empty">정책을 불러오는 중이에요.</div>` : state.policiesError ? `<div class="card empty">${state.policiesError}</div>` : ""; return `<div class="page"><section><label class="policy-search">${icon("search")}<input id="policy-search" value="${state.policySearch}" placeholder="지원정책을 검색하세요" aria-label="지원정책 검색"><button class="filter-button ${state.showPolicySort ? "active" : ""}" type="button" data-policy-sort-toggle aria-label="정렬 필터 열기">${icon("tune")}</button></label>${state.showPolicySort ? `<div class="sort-options"><button class="${state.policySort === "추천순" ? "active" : ""}" data-sort="추천순">추천순</button><button class="${state.policySort === "마감 임박순" ? "active" : ""}" data-sort="마감 임박순">마감 임박순</button></div>` : ""}<div class="chips policy-filters">${categories.map(c => `<button class="chip ${c === state.policyFilter ? "active" : ""}" data-filter="${c}">${c}</button>`).join("")}</div>${status}<div class="list policy-list policy-results">${filtered.map((p) => policyCard(p, state.policies.indexOf(p))).join("") || (!state.policiesLoading ? `<div class="card empty">검색 조건에 맞는 정책이 없어요.</div>` : "")}</div></section></div>`; };


// Source: js/pages/recommend.js
const recommendView = () => {
  const savedName = state.profile?.display_name || state.authUser?.user_metadata?.display_name || "";
  const savedAge = state.profile?.birth_year ? new Date().getFullYear() - state.profile.birth_year + 1 : "";
  const savedGender = state.customInfo?.gender || "";
  const savedRegion = state.profile?.region || "";
  const savedSalary = state.living.income ?? "";
  return `<div class="page"><section class="screen-head"><button class="screen-back" data-route="profile" aria-label="내 정보로 돌아가기">${icon("arrow_back")}</button><div><h1>맞춤 정보 관리</h1><p>내 정보를 입력하고 수정해요</p></div></section><section class="section recommend-layout"><form class="card form-card" id="recommend-form"><div class="form-grid"><div class="field full"><label for="custom-name">이름 또는 닉네임</label><input id="custom-name" name="displayName" maxlength="30" value="${escapeHtml(savedName)}" required autocomplete="name"></div><div class="field"><label for="custom-age">나이</label><input id="custom-age" name="age" type="text" inputmode="numeric" pattern="[0-9]*" data-age-input maxlength="2" value="${escapeHtml(savedAge)}" required placeholder="예: 25"></div><div class="field"><label for="custom-gender">성별</label><select id="custom-gender" name="gender"><option value="" ${savedGender ? "" : "selected"}>선택 안 함</option><option value="남성" ${savedGender === "남성" ? "selected" : ""}>남성</option><option value="여성" ${savedGender === "여성" ? "selected" : ""}>여성</option><option value="기타" ${savedGender === "기타" ? "selected" : ""}>기타</option><option value="응답하지 않음" ${savedGender === "응답하지 않음" ? "selected" : ""}>응답하지 않음</option></select></div><div class="field full"><label for="custom-region">거주지역</label><input id="custom-region" name="region" maxlength="40" value="${escapeHtml(savedRegion)}" required autocomplete="address-level1" placeholder="예: 서울시 관악구"></div><div class="field full"><label for="custom-salary">월 수입 <span class="optional-label">선택</span></label><input id="custom-salary" name="salary" type="text" inputmode="numeric" pattern="[0-9]*" data-money-input value="${escapeHtml(savedSalary)}" placeholder="예: 2500000"></div><button class="secondary-button full" type="submit">내 정보 저장</button></div></form></section></div>`;
};


// Source: js/pages/living.js
const monthKey = (date) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
const calendarAmount = (amount) => Number(amount || 0).toLocaleString("ko-KR");
const calendarMonth = (month, living, totals, currentKey) => {
  const firstWeekday = new Date(month.year, month.month, 1).getDay();
  const daysInMonth = new Date(month.year, month.month + 1, 0).getDate();
  const entries = {};
  const add = (day, type, amount) => {
    if (!amount) return;
    entries[day] ||= { income: 0, expense: 0 };
    entries[day][type] += Number(amount);
  };
  const history = living.history?.[month.key] || {};
  add(1, "income", month.key === currentKey ? living.income : history.income);
  const datedExpenses = living.expenses.filter(item => String(item.date || "").slice(0, 7) === month.key);
  datedExpenses.forEach(item => add(Number(String(item.date).slice(8, 10)), "expense", item.amount));
  const datedTotal = datedExpenses.reduce((sum, item) => sum + Number(item.amount || 0), 0);
  if (month.key === currentKey) add(1, "expense", totals.rentAmount + totals.recurringTotal);
  else add(1, "expense", Math.max(0, Number(history.spending || 0) - datedTotal));
  const cells = Array.from({ length: firstWeekday }, () => `<div class="living-calendar-day empty" aria-hidden="true"></div>`);
  for (let day = 1; day <= daysInMonth; day += 1) {
    const entry = entries[day] || {};
    cells.push(`<div class="living-calendar-day"><b>${day}</b>${entry.income ? `<span class="calendar-income">+${calendarAmount(entry.income)}</span>` : ""}${entry.expense ? `<span class="calendar-expense">-${calendarAmount(entry.expense)}</span>` : ""}</div>`);
  }
  return `<article class="living-calendar-month"><h3>${month.label}</h3><div class="living-calendar-weekdays"><span>일</span><span>월</span><span>화</span><span>수</span><span>목</span><span>금</span><span>토</span></div><div class="living-calendar-grid">${cells.join("")}</div></article>`;
};

const livingView = () => {
  const living = state.living;
  const totals = calculateLivingTotals();
  const currentKey = monthKey(new Date());
  const [calendarYear, calendarMonthNumber] = state.livingCalendarMonth.split("-").map(Number);
  const selectedMonth = { key: state.livingCalendarMonth, label: `${calendarYear}년 ${calendarMonthNumber}월`, year: calendarYear, month: calendarMonthNumber - 1 };
  const calendar = calendarMonth(selectedMonth, living, totals, currentKey);

  return `<div class="page living-page">
    <section class="screen-head living-screen-head"><button class="screen-back" data-route="home" aria-label="홈으로 돌아가기">${icon("arrow_back")}</button><div><h1>생활 관리</h1><p>최근 생활비 흐름을 한눈에 확인해요</p></div><button class="living-settings-button" data-route="living-settings" aria-label="생활비 설정">${icon("settings")}</button></section>

    <section class="living-balance-grid">
      <article class="card living-balance-card income"><small>이번 달 수입</small><strong>${formatWon(living.income)}</strong></article>
      <article class="card living-balance-card expense"><small>이번 달 지출</small><strong>${formatWon(totals.spending)}</strong></article>
      <article class="card living-balance-card balance"><small>현재 잔액</small><strong class="${totals.balance < 0 ? "negative" : ""}">${formatWon(totals.balance)}</strong></article>
    </section>

    <section class="section card living-chart-card">
      <div class="section-head"><div><span class="eyebrow">이번 달</span><h2>날짜별 수입과 지출</h2></div><div class="living-chart-legend"><span><i class="income"></i>수입</span><span><i class="expense"></i>지출</span></div></div>
      <div class="living-calendar-nav"><button type="button" data-calendar-shift="-1" aria-label="이전 달">${icon("chevron_left")}</button><strong>${selectedMonth.label}</strong><button type="button" data-calendar-shift="1" aria-label="다음 달">${icon("chevron_right")}</button></div>
      <div class="living-calendar-list">${calendar}</div>
    </section>

    <section class="section card living-form-card">
      <div class="section-head"><div><span class="eyebrow">지출 기록</span><h2>사용한 금액 추가</h2></div></div>
      <form id="expense-form" class="living-entry-form">
        <label class="wide"><span>사용 내용</span><input name="content" maxlength="40" placeholder="예: 장보기, 교통비" required></label>
        <label class="wide"><span>금액</span><input name="amount" type="text" inputmode="numeric" pattern="[0-9]*" data-money-input placeholder="숫자만 입력" required></label>
        <button class="primary-button wide" type="submit">지출 추가</button>
      </form>
      <div class="living-item-list">${living.expenses.length ? living.expenses.map((item) => `<div class="living-list-row"><span class="living-list-icon">${icon("payments")}</span><div><b>${escapeHtml(item.content)}</b><small>${escapeHtml(item.date || "오늘")}</small></div><strong>-${formatWon(item.amount)}</strong><button type="button" data-delete-expense="${escapeHtml(item.id)}" aria-label="${escapeHtml(item.content)} 지출 삭제">${icon("delete")}</button></div>`).join("") : `<div class="living-empty">등록한 지출이 없어요.</div>`}</div>
    </section>

    <button type="button" class="card living-settings-card" data-route="living-settings"><span>${icon("tune")}</span><div><b>생활비 설정</b><small>수입, 월세, 공과금 및 정기 지출 관리</small></div>${icon("chevron_right")}</button>
  </div>`;
};


// Source: js/pages/living-settings.js
const formatMonth = (month) => month ? month.replace(/^(\d{4})-(\d{2})$/, "$1.$2") : "미설정";
const formatNotificationTime = (timestamp) => {
  const date = new Date(Number(timestamp));
  return Number.isNaN(date.getTime()) ? "방금" : date.toLocaleString("ko-KR", { month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit" });
};

const livingSettingsView = () => {
  const living = state.living;
  const totals = calculateLivingTotals();

  return `<div class="page living-settings-page">
    <section class="screen-head"><button class="screen-back" data-route="living" aria-label="생활 관리로 돌아가기">${icon("arrow_back")}</button><div><h1>생활비 설정</h1><p>수입과 고정적으로 나가는 금액을 관리해요</p></div></section>

    <section class="card notification-expense-card">
      <div class="section-head"><div><span class="eyebrow">Android 자동 입력</span><h2>결제 알림 가져오기</h2></div><span class="notification-access-badge ${state.notificationExpenseEnabled ? "enabled" : ""}">${state.notificationExpenseEnabled ? "허용됨" : "사용 안 함"}</span></div>
      <p class="notification-expense-description">카드·은행 앱의 새 결제 알림에서 금액을 찾아 지출 후보로 보여줘요. 알림 내용은 서버로 보내지 않고 이 휴대폰에만 저장해요.</p>
      ${state.notificationExpenseAvailable ? `<div class="notification-expense-actions"><button type="button" class="secondary-button" data-notification-access>${icon("notifications_active")} 알림 접근 설정</button><button type="button" class="text-button" data-notification-refresh ${state.notificationExpenseLoading ? "disabled" : ""}>${icon("refresh")} ${state.notificationExpenseLoading ? "확인 중" : "새 알림 확인"}</button></div>` : `<div class="notification-app-only">${icon("android")} Android 앱에서만 사용할 수 있어요.</div>`}
      ${state.notificationExpenseEnabled ? `<div class="notification-candidate-list">${state.notificationExpenseCandidates.length ? state.notificationExpenseCandidates.map((candidate) => `<article class="notification-candidate"><span class="notification-candidate-icon">${icon("receipt_long")}</span><div><b>${escapeHtml(candidate.appName || "결제 알림")}</b><p>${escapeHtml(candidate.content || candidate.title || "결제 내역")}</p><small>${formatNotificationTime(candidate.timestamp)}</small></div><strong>${formatWon(candidate.amount)}</strong><button type="button" data-import-notification="${escapeHtml(candidate.id)}">추가</button></article>`).join("") : `<div class="living-empty">가져올 새 결제 알림이 없어요.</div>`}</div>` : ""}
    </section>

    <section class="section card living-form-card">
      <div class="section-head"><div><span class="eyebrow">수입 설정</span><h2>이번 달 수입</h2></div><strong>${formatWon(living.income)}</strong></div>
      <form id="income-form" class="living-inline-form"><label><span>수입 금액</span><input name="income" type="text" inputmode="numeric" pattern="[0-9]*" data-money-input value="${Number(living.income || 0)}" required></label><button class="primary-button" type="submit">저장</button></form>
    </section>

    <section class="section card living-form-card">
      <div class="section-head"><div><span class="eyebrow">주거비 설정</span><h2>월세 금액과 기간</h2></div></div>
      <form id="rent-form" class="living-entry-form">
        <label class="wide"><span>월세 금액</span><input name="amount" type="text" inputmode="numeric" pattern="[0-9]*" data-money-input value="${Number(living.rent.amount || 0)}" required></label>
        <label><span>계약 시작</span><input name="startMonth" type="month" value="${escapeHtml(living.rent.startMonth)}" required></label>
        <label><span>계약 종료</span><input name="endMonth" type="month" value="${escapeHtml(living.rent.endMonth)}" required></label>
        <label class="wide"><span>매월 납부일 (1~31일)</span><input name="dueDay" type="number" min="1" max="31" value="${Number(living.rent.dueDay) || 1}" required></label>
        <button class="secondary-button wide" type="submit">월세 정보 저장</button>
      </form>
      <div class="rent-summary"><span>${icon("home")} 월 ${formatWon(totals.rentAmount)}</span><span>${formatMonth(living.rent.startMonth)} – ${formatMonth(living.rent.endMonth)}</span></div>
    </section>

    <section class="section card living-form-card">
      <div class="section-head"><div><span class="eyebrow">고정비 설정</span><h2>공과금 및 정기 지출</h2></div><strong>${formatWon(totals.recurringTotal)}</strong></div>
      <form id="recurring-form" class="living-entry-form">
        <label><span>구분</span><select name="category"><option>공과금</option><option>정기지출</option></select></label>
        <label><span>항목</span><input name="content" maxlength="30" placeholder="예: 전기요금" required></label>
        <label class="wide"><span>월 금액</span><input name="amount" type="text" inputmode="numeric" pattern="[0-9]*" data-money-input placeholder="숫자만 입력" required></label>
        <button class="secondary-button wide" type="submit">정기 지출 추가</button>
      </form>
      <div class="living-item-list">${living.recurring.length ? living.recurring.map((item) => `<div class="living-list-row"><span class="living-list-icon recurring">${icon(item.category === "공과금" ? "bolt" : "event_repeat")}</span><div><b>${escapeHtml(item.content)}</b><small>${escapeHtml(item.category)}</small></div><strong>${formatWon(item.amount)}</strong><button type="button" data-delete-recurring="${escapeHtml(item.id)}" aria-label="${escapeHtml(item.content)} 정기 지출 삭제">${icon("delete")}</button></div>`).join("") : `<div class="living-empty">등록한 정기 지출이 없어요.</div>`}</div>
    </section>
  </div>`;
};


// Source: js/pages/support-status.js
const statuses = ["신청 준비", "신청 완료", "서류 검토", "심사 중", "선정", "탈락", "지급 완료"];

const supportStatusView = () => {
  const applications = state.supportApplications || [];
  const upcomingAmount = applications
    .filter((item) => !["탈락", "지급 완료"].includes(item.status))
    .reduce((sum, item) => sum + Number(item.amount || 0), 0);

  return `<div class="page support-status-page">
    <section class="screen-head"><button class="screen-back" data-route="home" aria-label="홈으로 돌아가기">${icon("arrow_back")}</button><div><h1>나의 지원 현황</h1><p>신청한 정책의 진행상태와 결과를 확인해요</p></div></section>
    <section class="support-summary-grid">
      <article class="card"><small>신청 중인 정책</small><strong>${applications.length}건</strong></article>
      <article class="card"><small>이번 달 지원 예정</small><strong>${formatWon(upcomingAmount)}</strong></article>
    </section>
    <section class="section"><div class="section-head"><h2>신청 정책</h2><span class="eyebrow">${applications.length}건</span></div>
      <div class="support-application-list">${applications.length ? applications.map((application) => `<article class="card support-application-card">
        <div class="support-application-head"><div><span class="tag">신청 정책</span><h3>${escapeHtml(application.title)}</h3></div><strong>${formatWon(application.amount)}</strong></div>
        <div class="support-status-window"><span class="material-symbols-rounded">${application.status === "선정" ? "task_alt" : application.status === "탈락" ? "cancel" : "pending_actions"}</span><div><small>심사결과 또는 진행상태</small><b>${escapeHtml(application.status)}</b></div></div>
        <label class="support-status-select"><span>진행상태 변경</span><select data-support-status="${escapeHtml(application.id)}">${statuses.map((status) => `<option value="${status}" ${status === application.status ? "selected" : ""}>${status}</option>`).join("")}</select></label>
        <p class="support-updated">최근 확인 ${escapeHtml(application.updatedAt || "-")}</p>
      </article>`).join("") : `<div class="card empty">아직 신청 중인 정책이 없어요.</div>`}</div>
    </section>
  </div>`;
};


// Source: js/pages/community.js
const communityView = () => {
  const kinds = ["질문", "모임", "꿀팁"];
  const categories = ["생활", "취업", "주거", "관계", "금융"];
  const posts = state.posts
    .map((post, index) => ({ post, index }))
    .filter(({ post }) => (post.kind || "질문") === state.communityKind && post.category === state.communityFilter);
  const status = state.communityLoading ? `<div class="card empty">게시글을 불러오는 중이에요.</div>` : state.communityError ? `<div class="card empty">${state.communityError}</div>` : "";
  return `<div class="page community-page"><div class="community-filter-panel"><nav class="community-kinds" aria-label="게시글 유형">${kinds.map(kind => `<button type="button" class="community-kind ${kind === state.communityKind ? "active" : ""}" data-community-kind="${kind}" aria-pressed="${kind === state.communityKind}">${kind}</button>`).join("")}</nav><nav class="community-categories" aria-label="게시글 주제">${categories.map(category => `<button type="button" class="community-category ${category === state.communityFilter ? "active" : ""}" data-community-filter="${category}" aria-pressed="${category === state.communityFilter}">${category}</button>`).join("")}</nav></div><section class="feed">${status}<div class="list feed-list">${posts.map(({ post: p, index }) => `<article class="card feed-card" data-post="${index}" tabindex="0" role="button" aria-label="${p.title} 본문 보기"><div class="feed-category">${p.category}</div><div class="feed-content-row"><div class="feed-copy"><h3>${p.title}</h3><p>${p.body}</p></div>${p.image ? `<img class="feed-image" src="${p.image}" alt="${p.title} 첨부 이미지" loading="lazy">` : ""}</div><div class="feed-footer"><span>${p.author} · ${p.time}</span><div class="meta"><button class="meta-action ${p.liked ? "liked" : ""}" data-like-post="${index}" aria-label="좋아요">${icon("favorite")} ${p.likes}</button><span>${icon("chat_bubble")} ${p.comments}</span></div></div></article>`).join("") || (!state.communityLoading ? `<div class="community-empty">선택한 분류의 게시글이 아직 없어요.</div>` : "")}</div></section></div>`;
};


// Source: js/pages/post.js
const postView = () => { const p = state.posts[state.selectedPost] || state.posts[0]; if (!p) return `<div class="page post-page"><header class="post-topbar"><button data-route="community" aria-label="커뮤니티로 돌아가기">${icon("arrow_back")}</button></header><div class="card empty">게시글을 찾을 수 없어요.</div></div>`; const comments = p.commentList || []; return `<div class="page post-page"><header class="post-topbar"><button data-route="community" aria-label="커뮤니티로 돌아가기">${icon("arrow_back")}</button><div class="post-topbar-actions"><button data-toast="신고 접수 화면을 준비하고 있어요" aria-label="게시글 신고하기">${icon("flag")}</button><button data-share aria-label="게시글 공유하기">${icon("ios_share")}</button></div></header><article class="card post-detail"><div class="author"><span class="author-avatar">${p.author[0]}</span><div><b>${p.author}</b><small>${p.time} · ${p.category}</small></div></div><h1>${p.title}</h1><p class="post-body">${p.body}</p>${p.image ? `<img class="post-image" src="${p.image}" alt="${p.title} 첨부 이미지">` : ""}<div class="post-actions"><button class="like-button ${p.liked ? "liked" : ""}" data-like-post="${state.selectedPost}">${icon("favorite")} 좋아요 ${p.likes}</button></div></article><section class="card comment-box"><h2>댓글 ${p.comments}</h2><form id="comment-form" class="comment-form"><input name="comment" maxlength="300" required autocomplete="off" placeholder="댓글을 입력하세요" aria-label="댓글 내용"><button aria-label="댓글 등록">${icon("send")}</button></form><div class="comment-list">${comments.length ? comments.map((c, index) => `<article class="comment-item" data-comment-index="${index}"><span class="comment-avatar">${c.author[0]}</span><div class="comment-content"><header><b>${c.author}</b><span class="comment-head-actions"><small>${c.time}</small><button class="comment-report" data-report-comment aria-label="댓글 신고하기">${icon("flag")}</button></span></header><p>${c.body}</p>${(c.replies || []).length ? `<div class="reply-list">${c.replies.map(r => `<article class="reply-item"><header><b>${r.author}</b><small>${r.time}</small></header><p>${r.body}</p></article>`).join("")}</div>` : ""}${state.replyTarget === index ? `<form id="reply-form" class="reply-form" data-reply-index="${index}"><input name="reply" maxlength="300" required autofocus placeholder="${c.author}님에게 답글 쓰기" aria-label="대댓글 내용"><button aria-label="대댓글 등록">${icon("send")}</button></form>` : ""}</div></article>`).join("") : `<p class="comment-empty">첫 댓글을 남겨 이야기를 이어가 보세요.</p>`}</div></section></div>`; };


// Source: js/pages/jobs.js
const jobsView = () => `<div class="page"><section class="hero"><span class="hero-label">AI 면접 트레이닝</span><h2>실전처럼 준비하는<br>나만의 모의 면접</h2><p>관심 직무에 맞춘 예상 질문으로 연습하고 답변의 핵심을 확인해 보세요.</p><button class="primary-button" data-toast="AI 면접 기능을 준비하고 있어요">면접 시작 ${icon("arrow_forward")}</button></section><section class="section"><div class="section-head"><h2>추천 채용 공고</h2><button class="text-button" data-toast="채용 공고를 더 불러올게요">더 보기</button></div><div class="list">${APP_DATA.jobs.map((j,i) => `<article class="card job-card"><div class="card-top"><div><span class="tag ${i ? "gold" : ""}">${j.company}</span><h3>${j.title}</h3></div><button class="bookmark" data-toast="채용 공고를 저장했어요">${icon("bookmark")}</button></div><div class="meta">${j.tags.map(t => `<span>#${t}</span>`).join("")}<span>${icon("schedule")} ${j.deadline}</span></div></article>`).join("")}</div></section><section class="section action-grid"><button class="action-card" data-toast="이력서 가이드를 준비하고 있어요"><span class="action-icon">${icon("description")}</span><h3>이력서 작성 가이드</h3><p>강점이 잘 드러나는 작성법</p></button><button class="action-card" data-toast="멘토를 연결해드릴게요"><span class="action-icon">${icon("diversity_3")}</span><h3>현직자 멘토링</h3><p>관심 직무의 생생한 조언</p></button></section></div>`;


// Source: js/pages/chat.js
const safeChatText = (text) => String(text).replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[character]);
const chatView = () => `<div class="page"><header class="screen-head"><button class="screen-back" data-route="home" aria-label="홈으로 돌아가기">${icon("arrow_back")}</button><div><h1>이음 AI</h1><p>Gemini 청년 지원 상담 도우미</p></div></header><section class="chat-screen"><div id="chat-messages" class="chat-messages">${state.chat.map(message => `<div class="chat-bubble ${message.type === "user" ? "user" : "bot"}">${safeChatText(message.greeting ? chatGreetingText() : message.text)}</div>`).join("")}${state.chatLoading ? `<div class="chat-bubble bot chat-thinking">답변을 생각하고 있어요...</div>` : ""}</div><div class="chat-controls"><form id="chat-form" class="chat-form"><input name="message" maxlength="2000" autocomplete="off" placeholder="궁금한 내용을 입력하세요" aria-label="AI에게 메시지 보내기" ${state.chatLoading ? "disabled" : ""}><button aria-label="전송" ${state.chatLoading ? "disabled" : ""}>${icon("send")}</button></form></div></section></div>`;


// Source: js/pages/write.js
const writeView = () => `<div class="page"><header class="screen-head"><button class="screen-back" data-route="community" aria-label="커뮤니티로 돌아가기">${icon("arrow_back")}</button><div><h1>새 글 작성</h1><p>커뮤니티에 경험을 나눠주세요</p></div></header><section class="card write-screen"><form id="write-form" class="write-form"><label>카테고리<select name="category"><option>생활</option><option>취업</option><option>주거</option><option>관계</option><option>금융</option></select></label><label>제목<input name="title" maxlength="60" required placeholder="제목을 입력하세요"></label><label>내용<textarea name="body" maxlength="1000" required placeholder="서로에게 도움이 되는 이야기를 들려주세요"></textarea></label><button class="secondary-button" type="submit">게시하기</button></form></section></div>`;


// Source: js/pages/profile.js
const savedPolicyCount = () => state.policies.filter((policy) => state.saved.has(String(policy.id || policy.title))).length;
const profileView = () => {
  if (state.authLoading) return `<div class="page"><div class="card empty">계정 정보를 확인하는 중이에요.</div></div>`;

  if (!state.authUser) return `<div class="page"><section><span class="eyebrow">내 정보</span><h1>로그인하고<br>이음을 더 편하게 이용하세요</h1></section><section class="section card signed-out-card"><span class="avatar">${icon("person")}</span><h2>아직 로그인하지 않았어요</h2><p class="subtext">글쓰기, 댓글, 좋아요와 저장한 정책을 계정에 보관할 수 있어요.</p><div class="signed-out-actions"><button class="secondary-button" data-route="login">로그인</button><button class="text-button" data-route="signup">계정 만들기</button></div></section><section class="section card menu-list"><button class="menu-row" data-route="saved-policies">${icon("bookmark")} 저장한 정책 ${savedPolicyCount() ? `<b class="menu-count">${savedPolicyCount()}</b>` : ""}${icon("chevron_right")}</button></section></div>`;

  const name = state.profile?.display_name || state.authUser.user_metadata?.display_name || "이음 사용자";
  const initial = name[0] || "이";
  const details = [state.profile?.birth_year ? `${new Date().getFullYear() - state.profile.birth_year + 1}세` : null, state.profile?.region].filter(Boolean).join(" · ") || state.authUser.email;
  return `<div class="page"><section><span class="eyebrow">내 정보</span><h1>${name}님만을 위한<br>이음을 관리해요</h1></section><section class="section card profile-card"><span class="avatar">${initial}</span><div><h3>${name}님</h3><p class="subtext">${details}</p></div><button class="text-button" style="margin-left:auto" data-route="recommend">편집</button></section><section class="section card menu-list"><button class="menu-row" data-route="recommend">${icon("tune")} 맞춤 정보 관리 ${icon("chevron_right")}</button><button class="menu-row" data-route="saved-policies">${icon("bookmark")} 저장한 정책 ${icon("chevron_right")}</button><button class="menu-row" data-route="notification-settings">${icon("notifications")} 알림 설정 ${icon("chevron_right")}</button><button class="menu-row" data-auth-logout>${icon("logout")} 로그아웃 ${icon("chevron_right")}</button></section></div>`;
};


// Source: js/pages/login.js
const loginView = () => `<div class="page auth-page">
  <header class="screen-head"><button class="screen-back" data-route="${state.guestMode ? "profile" : "welcome"}" aria-label="이전 화면으로 돌아가기">${icon("arrow_back")}</button><div><h1>로그인</h1><p>이음 계정으로 계속하세요</p></div></header>
  <section class="card auth-card">
    ${state.authNotice ? `<p class="auth-notice" role="status">${state.authNotice}</p>` : ""}
    <form id="login-form" class="auth-form">
      <label>이메일<input name="email" type="email" required autocomplete="email" placeholder="name@example.com" value="${escapeHtml(state.authEmail)}"></label>
      <label>비밀번호<input name="password" type="password" minlength="6" required autocomplete="current-password" placeholder="비밀번호 6자 이상"></label>
      <button class="auth-forgot-link" type="button" data-route="forgot-password">비밀번호를 잊으셨나요?</button>
      ${state.authError ? `<p class="auth-error" role="alert">${state.authError}</p>` : ""}
      <button class="secondary-button" type="submit" ${state.authSubmitting ? "disabled" : ""}>${state.authSubmitting ? "로그인 중..." : "로그인"}</button>
    </form>
    <div class="auth-switch"><span>처음 이용하시나요?</span><button type="button" data-route="signup">계정 만들기</button></div>
  </section>
</div>`;


// Source: js/pages/forgot-password.js
const forgotPasswordView = () => `<div class="page auth-page">
  <header class="screen-head"><button class="screen-back" type="button" data-route="login" aria-label="로그인으로 돌아가기">${icon("arrow_back")}</button><div><h1>비밀번호 찾기</h1><p>가입한 이메일로 재설정 링크를 보내드려요</p></div></header>
  <section class="card auth-card">
    ${state.authNotice ? `<p class="auth-notice" role="status">${state.authNotice}</p>` : ""}
    <form id="forgot-password-form" class="auth-form">
      <label>이메일<input name="email" type="email" required autocomplete="email" placeholder="name@example.com" value="${escapeHtml(state.authEmail)}"></label>
      ${state.authError ? `<p class="auth-error" role="alert">${state.authError}</p>` : ""}
      <button class="secondary-button" type="submit" ${state.authSubmitting ? "disabled" : ""}>${state.authSubmitting ? "보내는 중..." : "재설정 메일 보내기"}</button>
    </form>
    <div class="auth-switch"><button type="button" data-route="login">로그인으로 돌아가기</button></div>
  </section>
</div>`;


// Source: js/pages/reset-password.js
const resetPasswordView = () => `<div class="page auth-page">
  <header class="screen-head"><button class="screen-back" type="button" data-route="login" aria-label="로그인으로 돌아가기">${icon("arrow_back")}</button><div><h1>새 비밀번호 설정</h1><p>새로 사용할 비밀번호를 입력해주세요</p></div></header>
  <section class="card auth-card">
    ${!state.authRecovery || !state.authUser ? `<p class="auth-error" role="alert">재설정 링크가 만료되었거나 유효하지 않아요. 새 링크를 요청해주세요.</p><div class="auth-switch"><button type="button" data-route="forgot-password">재설정 메일 다시 받기</button></div>` : `
    <form id="reset-password-form" class="auth-form">
      <label>새 비밀번호<input name="password" type="password" minlength="6" required autocomplete="new-password" placeholder="비밀번호 6자 이상"></label>
      <label>새 비밀번호 확인<input name="passwordConfirm" type="password" minlength="6" required autocomplete="new-password" placeholder="비밀번호를 다시 입력해주세요"></label>
      ${state.authError ? `<p class="auth-error" role="alert">${state.authError}</p>` : ""}
      <button class="secondary-button" type="submit" ${state.authSubmitting ? "disabled" : ""}>${state.authSubmitting ? "변경 중..." : "비밀번호 변경하기"}</button>
    </form>`}
  </section>
</div>`;


// Source: js/pages/signup.js
const signupView = () => `<div class="page auth-page">
  <header class="screen-head"><button class="screen-back" data-route="login" aria-label="로그인으로 돌아가기">${icon("arrow_back")}</button><div><h1>계정 만들기</h1><p>이메일로 이음 계정을 만들어요</p></div></header>
  <section class="card auth-card"><form id="signup-form" class="auth-form">
    <label>이메일<input name="email" type="email" required autocomplete="email" placeholder="name@example.com"></label>
    <label>비밀번호<input name="password" type="password" minlength="6" required autocomplete="new-password" placeholder="비밀번호 6자 이상"></label>
    <label>비밀번호 확인<input name="passwordConfirm" type="password" minlength="6" required autocomplete="new-password" placeholder="비밀번호를 다시 입력하세요"></label>
    ${state.authError ? `<p class="auth-error" role="alert">${state.authError}</p>` : ""}
    <button class="secondary-button" type="submit" ${state.authSubmitting ? "disabled" : ""}>${state.authSubmitting ? "가입 중..." : "계정 만들기"}</button>
  </form><div class="auth-switch"><span>이미 계정이 있나요?</span><button type="button" data-route="login">로그인</button></div></section>
</div>`;


// Source: js/pages/welcome.js
const welcomeView = () => `<div class="page welcome-page">
  <section class="welcome-hero" aria-label="집과 집을 노란 선으로 연결하는 도시">
    <img class="welcome-art" src="assets/welcome-city-no-bg-dots.png" alt="" />
    <div class="welcome-brand" aria-label="이음">
      <svg class="welcome-brand-icon" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M5 19.5c3.5-7 7.5-7 11-3.5s7.5 3.5 11-3.5" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>
        <circle cx="5" cy="19.5" r="3" fill="currentColor"/>
        <circle cx="27" cy="12.5" r="3" fill="currentColor"/>
      </svg>
      <span>이음</span>
    </div>
  </section>
  <section class="welcome-actions" aria-label="시작하기">
    <svg class="welcome-thread" viewBox="0 -130 430 280" preserveAspectRatio="none" aria-hidden="true">
      <path d="M466 -117 C421 -112 420 15 354 47 C304 56 258 49 216 49 S94 50 52 49 C18 49 16 94 51 124 C91 143 141 119 216 125 S356 123 458 124" fill="none" stroke="#fff0bd" stroke-width="13" stroke-linecap="round"/>
      <path d="M466 -117 C421 -112 420 15 354 47 C304 56 258 49 216 49 S94 50 52 49 C18 49 16 94 51 124 C91 143 141 119 216 125 S356 123 458 124" fill="none" stroke="#f8c323" stroke-width="5" stroke-linecap="round"/>
    </svg>
    <button type="button" class="welcome-primary" data-route="login">로그인</button>
    <button type="button" class="welcome-secondary" data-route="signup">계정 만들기</button>
    <button type="button" class="welcome-skip" data-skip-login>건너뛰고 시작하기</button>
    <small>로그인하지 않아도 정책과 기본 화면을 둘러볼 수 있어요.</small>
  </section>
</div>`;


// Source: js/pages/onboarding.js
const onboardingView = () => {
  const defaultName = state.profile?.display_name === "이음 사용자" ? "" : (state.profile?.display_name || state.authUser?.user_metadata?.display_name || "");
  return `<div class="page onboarding-page">
    <section class="onboarding-head"><span class="onboarding-step">첫 설정</span><h1>맞춤 정보를<br>알려주세요</h1><p>이음이 필요한 정책과 생활 정보를 더 알맞게 보여드릴게요.</p></section>
    <section class="card onboarding-card"><form id="onboarding-form" class="auth-form">
      <label>이름<input name="displayName" maxlength="30" value="${escapeHtml(defaultName)}" required autocomplete="name" placeholder="이름 또는 사용할 닉네임"></label>
      <label>나이<input name="age" type="text" inputmode="numeric" pattern="[0-9]*" data-age-input maxlength="2" required placeholder="예: 25"></label>
      <label>사는 곳<input name="region" maxlength="40" required autocomplete="address-level1" placeholder="예: 서울시 관악구"></label>
      <label>월 수입 <span class="optional-label">선택</span><input name="income" type="text" inputmode="numeric" pattern="[0-9]*" data-money-input placeholder="건너뛰어도 괜찮아요"></label>
      <p class="onboarding-income-note">수입은 생활관리의 잔액 계산에만 사용되며 나중에 변경할 수 있어요.</p>
      ${state.onboardingError ? `<p class="auth-error" role="alert">${state.onboardingError}</p>` : ""}
      <button class="secondary-button" type="submit" ${state.onboardingSubmitting ? "disabled" : ""}>${state.onboardingSubmitting ? "저장 중..." : "이음 시작하기"}</button>
    </form></section>
  </div>`;
};


// Source: js/pages/notifications.js
const notificationsView = () => {
  const items = getNotifications();
  return `<div class="page notifications-page"><section class="screen-head"><button class="screen-back" data-route="home" aria-label="홈으로 돌아가기">${icon("arrow_back")}</button><div><h1>알림</h1><p>놓치기 쉬운 소식을 모아봤어요</p></div></section>
    <div class="notification-toolbar"><strong>알림 ${items.length}개</strong><button type="button" data-notification-read-all>모두 읽음</button></div>
    <div class="notification-list">${items.length ? items.map((item) => `<button type="button" class="card notification-item ${state.notificationRead[item.id] ? "read" : ""}" data-notification-id="${escapeHtml(item.id)}"><span class="notification-item-icon">${icon(item.type === "community" ? "forum" : item.type === "policy" ? "event" : "home")}</span><span><b>${escapeHtml(item.title)}</b><small>${escapeHtml(item.body)}</small></span>${state.notificationRead[item.id] ? "" : `<i aria-label="읽지 않음"></i>`}</button>`).join("") : `<div class="card empty">새 알림이 없어요.</div>`}</div></div>`;
};

const notificationSettingsView = () => `<div class="page notifications-page"><section class="screen-head"><button class="screen-back" data-route="profile" aria-label="내 정보로 돌아가기">${icon("arrow_back")}</button><div><h1>알림 설정</h1><p>받을 알림을 선택하세요</p></div></section>
  <section class="card notification-settings">${[["community", "댓글·답글"], ["policy", "저장한 정책 마감"], ["rent", "월세 납부일"]].map(([key, label]) => `<label><span>${label}</span><input type="checkbox" data-notification-setting="${key}" ${state.notificationSettings[key] ? "checked" : ""}></label>`).join("")}</section></div>`;


// Source: js/pages/saved-policies.js
const savedPoliciesView = () => {
  const saved = state.policies.filter((policy) => state.saved.has(String(policy.id || policy.title)));
  const list = saved.length
    ? saved.map((policy) => policyCard(policy, state.policies.indexOf(policy))).join("")
    : `<div class="card empty saved-empty">${icon("bookmark")}<p>아직 저장한 정책이 없어요.<br>지원정책 카드의 북마크를 누르면 여기에 모여요.</p><button class="secondary-button" data-route="policies">지원정책 보러 가기</button></div>`;
  return `<div class="page"><header class="screen-head"><button class="screen-back" data-route="profile" aria-label="내 정보로 돌아가기">${icon("arrow_back")}</button><div><h1>저장한 정책</h1><p>${saved.length ? `${saved.length}개를 저장했어요` : "관심 있는 정책을 모아 보세요"}</p></div></header><section class="list policy-list">${list}</section></div>`;
};
// Source: js/pages/views.js
const views = {
  home: homeView,
  policies: policiesView,
  recommend: recommendView,
  living: livingView,
  "living-settings": livingSettingsView,
  "support-status": supportStatusView,
  community: communityView,
  post: postView,
  jobs: jobsView,
  chat: chatView,
  write: writeView,
  profile: profileView,
  login: loginView,
  "forgot-password": forgotPasswordView,
  "reset-password": resetPasswordView,
  signup: signupView,
  welcome: welcomeView,
  onboarding: onboardingView,
  notifications: notificationsView,
  "notification-settings": notificationSettingsView,
  "saved-policies": savedPoliciesView,
};


// Source: js/core/render.js
const app = document.querySelector("#app");
const contextAction = document.querySelector("#context-action");
function render() {
  let route = views[state.route] ? state.route : "home";
  if (state.authRecovery) route = "reset-password";
  if (!state.authLoading && !state.guestMode && !state.authUser && !["welcome", "login", "signup", "forgot-password", "reset-password"].includes(route)) route = "welcome";
  const initialProfileNeeded = Boolean(state.authUser && (!state.profile?.display_name || !state.profile?.region || !state.profile?.birth_year));
  if (!state.authLoading && initialProfileNeeded && route !== "onboarding" && route !== "reset-password") route = "onboarding";
  if (["write", "chat", "support-status", "recommend"].includes(route) && !state.authLoading && !state.authUser) route = "login";
  state.route = route;
  document.body.classList.toggle("home-lock", route === "home");
  document.body.classList.toggle("post-mode", route === "post");
  document.body.classList.toggle("living-mode", route === "living");
  document.body.classList.toggle("chat-mode", route === "chat");
  document.body.classList.toggle("auth-flow-mode", ["welcome", "login", "forgot-password", "reset-password", "signup", "onboarding"].includes(route));
  app.innerHTML = views[route]();
  document.querySelectorAll(".bottom-nav button").forEach(btn => btn.classList.toggle("active", btn.dataset.route === route || (["living", "living-settings", "support-status", "jobs", "chat", "notifications"].includes(route) && btn.dataset.route === "home") || (["recommend", "notification-settings", "saved-policies"].includes(route) && btn.dataset.route === "profile") || (["write", "post"].includes(route) && btn.dataset.route === "community")));
  document.title = `${route === "home" ? "이음" : ({ policies:"지원정책", recommend:"맞춤 추천", living:"생활 관리", "living-settings":"생활비 설정", "support-status":"나의 지원 현황", community:"커뮤니티", jobs:"취업 지원", profile:"내 정보", "saved-policies":"저장한 정책", chat:"AI 상담", write:"글쓰기", post:"게시글", login:"로그인", "forgot-password":"비밀번호 찾기", "reset-password":"새 비밀번호 설정", signup:"계정 만들기", welcome:"환영합니다", onboarding:"첫 설정", notifications:"알림", "notification-settings":"알림 설정" })[route]} | 이음`;
  const actionType = ["home", "policies"].includes(route) ? "chat" : route === "community" ? "write" : "";
  contextAction.className = `context-action${actionType ? " visible" : ""}${actionType === "write" ? " write" : ""}`;
  contextAction.dataset.action = actionType;
  contextAction.innerHTML = icon(actionType === "write" ? "edit" : "smart_toy");
  contextAction.setAttribute("aria-label", actionType === "write" ? "새 글 작성" : "AI 상담 열기");
  const topAvatar = document.querySelector(".topbar .avatar span");
  const topbarActions = document.querySelector(".topbar-actions");
  const accountName = state.profile?.display_name || state.authUser?.user_metadata?.display_name;
  if (topAvatar) topAvatar.textContent = accountName?.[0] || "지";
  if (topbarActions) topbarActions.hidden = false;
  const unread = getNotifications().filter((item) => !state.notificationRead[item.id]).length;
  const notificationButton = document.querySelector(".topbar [data-route=notifications]");
  if (notificationButton) { notificationButton.setAttribute("aria-label", `알림${unread ? ` ${unread}개 읽지 않음` : ""}`); notificationButton.querySelector("i").hidden = unread === 0; }
  document.documentElement.classList.add("app-ready");
}


// Source: js/services/chat.js
function addChatMessage(text, type = "user") {
  state.chat.push({ text, type });
  render();
  requestAnimationFrame(() => { const messages = document.querySelector("#chat-messages"); if (messages) messages.scrollTop = messages.scrollHeight; });
}

function currentUserName() {
  return state.profile?.display_name || state.authUser?.user_metadata?.display_name || "";
}

function chatGreetingText() {
  const name = currentUserName();
  return `안녕하세요${name ? `, ${name}님` : ""}! 주거·생활·취업 정책 중 어떤 도움이 필요하세요?`;
}

async function sendChatMessage(question) {
  if (!state.authUser) throw new Error("로그인이 필요합니다.");
  state.chat.forEach((message) => { if (message.greeting) message.text = chatGreetingText(); });
  state.chat.push({ text: question, type: "user" });
  state.chatLoading = true;
  render();
  requestAnimationFrame(() => { const messages = document.querySelector("#chat-messages"); if (messages) messages.scrollTop = messages.scrollHeight; });

  try {
    const answer = await fetchGeminiAnswer(state.chat, currentUserName());
    state.chat.push({ text: answer, type: "bot" });
  } catch (error) {
    console.error("Gemini 채팅 실패", error);
    state.chat.push({ text: `AI 연결 오류: ${error?.message || "답변을 불러오지 못했습니다."}`, type: "bot" });
    throw error;
  } finally {
    state.chatLoading = false;
    render();
    requestAnimationFrame(() => { const messages = document.querySelector("#chat-messages"); if (messages) messages.scrollTop = messages.scrollHeight; });
  }
}


// Source: js/services/policies.js
async function loadPolicies({ renderUpdates = true } = {}) {
  if (isLocalMode()) return; // 오프라인 모드는 앱에 내장된 정책을 사용

  state.policiesLoading = true;
  state.policiesError = null;
  if (renderUpdates) render();

  try {
    const policies = await fetchPublishedPolicies();
    state.policies = policies || [];
    state.policyDataSource = "supabase";
  } catch (error) {
    console.error("정책 데이터를 불러오지 못했습니다.", error);
    state.policiesError = "Supabase 연결에 실패해 샘플 정책을 표시하고 있어요.";
    state.policyDataSource = "mock";
  } finally {
    state.policiesLoading = false;
    if (renderUpdates) render();
  }
}


// Source: js/services/community.js
async function loadCommunity({ renderUpdates = true } = {}) {
  if (!isSupabaseConfigured()) return;
  state.communityLoading = true;
  state.communityError = null;
  if (renderUpdates) render();

  try {
    const posts = await fetchCommunityPosts();
    state.posts = posts || [];
    state.posts.forEach((post) => { post.liked = Boolean(state.authUser && post.likedUserIds?.includes(state.authUser.id)); });
    state.communityDataSource = "supabase";
  } catch (error) {
    console.error("커뮤니티 데이터를 불러오지 못했습니다.", error);
    state.communityError = "커뮤니티 연결에 실패해 샘플 게시글을 표시하고 있어요.";
    state.communityDataSource = "mock";
  } finally {
    state.communityLoading = false;
    if (renderUpdates) render();
  }
}

function currentAuthor() {
  if (!state.authUser) throw new Error("로그인이 필요합니다.");
  return {
    userId: state.authUser.id,
    authorName: state.profile?.display_name || state.authUser.user_metadata?.display_name || "이음 사용자"
  };
}

async function saveCommunityPost({ category, title, body }) {
  const author = currentAuthor();
  const created = await insertCommunityPost({ ...author, category, title, body });
  await loadCommunity({ renderUpdates: false });
  state.selectedPost = Math.max(0, state.posts.findIndex((post) => post.id === created.id));
  render();
  return created;
}

async function saveCommunityComment({ postId, parentId = null, body }) {
  const author = currentAuthor();
  const selectedId = postId;
  const created = await insertCommunityComment({ ...author, postId, parentId, body });
  await loadCommunity({ renderUpdates: false });
  state.selectedPost = Math.max(0, state.posts.findIndex((post) => post.id === selectedId));
  state.replyTarget = null;
  render();
  return created;
}

async function toggleCommunityLike(post) {
  const { userId } = currentAuthor();
  if (post.liked) await removeCommunityLike({ postId: post.id, userId });
  else await addCommunityLike({ postId: post.id, userId });
  post.liked = !post.liked;
  post.likes += post.liked ? 1 : -1;
  render();
  return post.liked;
}

async function saveCommunityReport({ postId = null, commentId = null, reason = "부적절한 콘텐츠" }) {
  const { userId } = currentAuthor();
  await insertCommunityReport({ reporterId: userId, postId, commentId, reason });
}


// Source: js/services/finances.js
const financeMonthKey = (date = new Date()) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
const financeMonthDate = (date = new Date()) => `${financeMonthKey(date)}-01`;

function calculateLivingTotals() {
  const living = state.living;
  const expenseTotal = living.expenses.reduce((sum, item) => sum + Number(item.amount || 0), 0);
  const recurringTotal = living.recurring.reduce((sum, item) => sum + Number(item.amount || 0), 0);
  const rentAmount = Number(living.rent.amount || 0);
  const spending = expenseTotal + recurringTotal + rentAmount;
  return {
    expenseTotal,
    recurringTotal,
    rentAmount,
    spending,
    balance: Number(living.income || 0) - spending
  };
}

async function loadMonthlyFinances() {
  if (!state.authUser) return [];
  let rows = await fetchMonthlyFinances(state.authUser.id, 12);
  let current = rows.find((row) => String(row.month).slice(0, 7) === financeMonthKey());
  if (!current) {
    current = await upsertMonthlyFinance({
      userId: state.authUser.id,
      month: financeMonthDate(),
      income: Number(state.living.income || 0),
      expenseTotal: 0
    });
    rows = [current, ...rows];
  }
  rows.forEach((row) => {
    const key = String(row.month).slice(0, 7);
    state.living.history[key] = {
      income: Number(row.income || 0),
      spending: Number(row.expense_total || 0)
    };
  });
  if (current) state.living.income = Number(current.income || 0);
  localStorage.setItem("ieum-living", JSON.stringify(state.living));
  return rows;
}

async function loadUserIncome() {
  if (!state.authUser) return null;
  let row = await fetchUserIncome(state.authUser.id);
  if (!row) {
    row = await upsertUserIncome({
      userId: state.authUser.id,
      monthlyIncome: null,
      incomeStatus: "not_set"
    });
  }
  state.living.income = Number(row?.monthly_income || 0);
  localStorage.setItem("ieum-living", JSON.stringify(state.living));
  return row;
}

async function syncUserIncome(monthlyIncome, incomeStatus = "provided") {
  if (!state.authUser) return null;
  return upsertUserIncome({
    userId: state.authUser.id,
    monthlyIncome: incomeStatus === "provided" ? Math.max(0, Number(monthlyIncome || 0)) : null,
    incomeStatus
  });
}

async function syncCurrentMonthlyFinance() {
  if (!state.authUser) return null;
  const totals = calculateLivingTotals();
  const key = financeMonthKey();
  state.living.history[key] = { income: Number(state.living.income || 0), spending: totals.spending };
  localStorage.setItem("ieum-living", JSON.stringify(state.living));
  return upsertMonthlyFinance({
    userId: state.authUser.id,
    month: financeMonthDate(),
    income: state.living.income,
    expenseTotal: totals.spending
  });
}


// Source: js/services/auth.js
function authMessage(error) {
  const message = error?.message || "계정 처리 중 오류가 발생했습니다.";
  if (message.includes("Invalid login credentials")) return "이메일 또는 비밀번호가 올바르지 않습니다.";
  if (message.includes("Email not confirmed")) return "이메일 확인을 완료한 뒤 로그인해주세요.";
  if (message.includes("User already registered")) return "이미 가입된 이메일입니다.";
  if (message.includes("Password should be")) return "비밀번호는 6자 이상 입력해주세요.";
  if (message.includes("rate limit")) return "인증 메일 요청이 너무 많아요. 잠시 후 다시 시도해주세요.";
  return message;
}

async function applySession(session, renderUpdate = true) {
  state.authUser = session?.user || null;
  state.customInfo = { gender: state.authUser?.user_metadata?.gender || "" };
  if (state.authUser) {
    state.welcomeCompleted = true;
    localStorage.setItem("ieum-welcome-completed", "true");
  }
  state.posts.forEach((post) => { post.liked = Boolean(state.authUser && post.likedUserIds?.includes(state.authUser.id)); });
  state.profile = null;
  if (state.authUser) {
    try { state.profile = await fetchProfile(state.authUser.id); }
    catch (error) { console.error("프로필을 불러오지 못했습니다.", error); }
    try { await loadUserIncome(); }
    catch (error) {
      state.living.income = 0;
      console.error("계정 수입 정보를 불러오지 못했습니다.", error);
    }
    try { await loadMonthlyFinances(); }
    catch (error) { console.error("월별 수입·지출을 불러오지 못했습니다.", error); }
  }
  if (renderUpdate) render();
}

async function initializeAuth({ renderUpdates = true } = {}) {
  if (!isSupabaseConfigured()) {
    state.authLoading = false;
    if (renderUpdates) render();
    return;
  }

  try {
    const session = await getVerifiedSession();
    await applySession(session, renderUpdates);
    subscribeToAuthChanges((nextSession, event) => setTimeout(() => {
      if (event === "PASSWORD_RECOVERY") {
        state.authRecovery = true;
        state.route = "reset-password";
        history.replaceState(null, "", `${location.pathname}?reset-password=1#reset-password`);
      }
      applySession(nextSession);
    }, 0));
  } catch (error) {
    console.error("로그인 상태를 확인하지 못했습니다.", error);
  } finally {
    state.authLoading = false;
    if (renderUpdates) render();
  }
}

async function loginAccount(email, password) {
  state.authEmail = email;
  state.authSubmitting = true;
  state.authError = null;
  state.authNotice = null;
  render();
  try {
    const { session } = await signInWithEmail({ email, password });
    await applySession(session);
    state.authEmail = "";
    return true;
  } catch (error) {
    state.authError = authMessage(error);
    return false;
  } finally {
    state.authSubmitting = false;
    render();
  }
}

async function requestPasswordReset(email) {
  state.authEmail = email;
  state.authSubmitting = true;
  state.authError = null;
  state.authNotice = null;
  render();
  try {
    if (!["http:", "https:"].includes(location.protocol)) {
      throw new Error("비밀번호 재설정 메일은 배포 주소나 로컬 서버에서 요청해주세요.");
    }
    const redirectTo = `${location.origin}${location.pathname}?reset-password=1`;
    await sendPasswordResetEmail(email, redirectTo);
    state.authNotice = "재설정 메일을 보냈어요. 메일함과 스팸함을 확인해주세요.";
    return true;
  } catch (error) {
    state.authError = authMessage(error);
    return false;
  } finally {
    state.authSubmitting = false;
    render();
  }
}

async function completePasswordReset(password) {
  if (!state.authRecovery || !state.authUser) {
    state.authError = "재설정 링크가 만료되었거나 유효하지 않아요. 새 링크를 요청해주세요.";
    render();
    return false;
  }
  state.authSubmitting = true;
  state.authError = null;
  render();
  try {
    await updatePassword(password);
    await signOutUser();
    state.authUser = null;
    state.profile = null;
    state.authRecovery = false;
    state.authEmail = "";
    state.authNotice = "비밀번호가 변경되었어요. 새 비밀번호로 로그인해주세요.";
    state.route = "login";
    history.replaceState(null, "", `${location.pathname}#login`);
    return true;
  } catch (error) {
    state.authError = authMessage(error);
    return false;
  } finally {
    state.authSubmitting = false;
    render();
  }
}

async function loginWithGoogleAccount() {
  state.authError = null;
  if (location.protocol === "file:") {
    state.authError = "Google 로그인은 파일 직접 열기에서는 사용할 수 없어요. 배포 주소나 로컬 서버로 앱을 열어주세요.";
    render();
    return false;
  }
  try {
    await signInWithGoogle();
    return true;
  } catch (error) {
    state.authError = authMessage(error);
    render();
    return false;
  }
}

async function createAccount(displayName, email, password) {
  state.authSubmitting = true;
  state.authError = null;
  state.authNotice = null;
  render();
  try {
    const data = await signUpWithEmail({ email, password, displayName });
    if (data.session) await applySession(data.session);
    if (!data.session) state.authNotice = `${email} 주소로 보낸 인증 메일을 확인한 뒤 로그인해주세요. 메일이 없으면 스팸함도 확인해주세요.`;
    return { success: true, needsEmailConfirmation: !data.session };
  } catch (error) {
    state.authError = authMessage(error);
    return { success: false, needsEmailConfirmation: false };
  } finally {
    state.authSubmitting = false;
    render();
  }
}

async function logoutAccount() {
  await signOutUser();
  state.authUser = null;
  state.profile = null;
  state.customInfo = { gender: "" };
  state.guestMode = false;
  sessionStorage.removeItem("ieum-guest-mode");
  render();
}

async function savePersonalInfo({ displayName, age, gender, region, income }) {
  if (!state.authUser) throw new Error("로그인이 필요합니다.");
  const birthYear = new Date().getFullYear() - Number(age) + 1;
  state.profile = await updateInitialProfile({ userId: state.authUser.id, displayName, region, birthYear });
  state.authUser = await updateGenderMetadata(gender);
  const incomeProvided = income !== "" && income !== null && income !== undefined;
  state.living.income = incomeProvided ? Math.max(0, Number(income)) : 0;
  await syncUserIncome(incomeProvided ? state.living.income : null, incomeProvided ? "provided" : "skipped");
  await syncCurrentMonthlyFinance();
  state.customInfo = { gender };
  localStorage.setItem("ieum-living", JSON.stringify(state.living));
  render();
}

function needsInitialProfile() {
  if (!state.authUser) return false;
  return !state.profile?.display_name || !state.profile?.region || !state.profile?.birth_year;
}

async function completeInitialProfile({ displayName, age, region, income }) {
  if (!state.authUser) throw new Error("로그인이 필요합니다.");
  state.onboardingSubmitting = true;
  state.onboardingError = null;
  render();
  try {
    const numericAge = Number(age);
    const birthYear = new Date().getFullYear() - numericAge + 1;
    state.profile = await updateInitialProfile({
      userId: state.authUser.id,
      displayName,
      region,
      birthYear
    });
    const incomeProvided = income !== "" && income !== null && income !== undefined;
    if (incomeProvided) {
      state.living.income = Math.max(0, Number(income));
      localStorage.setItem("ieum-living", JSON.stringify(state.living));
    } else {
      state.living.income = 0;
      localStorage.setItem("ieum-living", JSON.stringify(state.living));
    }
    await syncUserIncome(incomeProvided ? state.living.income : null, incomeProvided ? "provided" : "skipped");
    try { await syncCurrentMonthlyFinance(); }
    catch (error) { console.error("월별 수입·지출을 저장하지 못했습니다.", error); }
    return true;
  } catch (error) {
    console.error("최초 프로필 저장 실패", error);
    state.onboardingError = error?.message || "정보를 저장하지 못했습니다.";
    return false;
  } finally {
    state.onboardingSubmitting = false;
    render();
  }
}


// Source: js/events/handlers.js
const eventContextAction = document.querySelector("#context-action");
const saveLivingState = () => localStorage.setItem("ieum-living", JSON.stringify(state.living));
const saveSupportApplications = () => localStorage.setItem("ieum-support-applications", JSON.stringify(state.supportApplications));
const createLocalId = (prefix) => `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
const syncFinanceQuietly = () => syncCurrentMonthlyFinance().catch((error) => console.error("월별 수입·지출 동기화 실패", error));
const syncIncomeQuietly = () => Promise.all([
  syncUserIncome(state.living.income, "provided"),
  syncCurrentMonthlyFinance()
]).catch((error) => console.error("계정 수입 동기화 실패", error));
const refreshNotificationExpenses = async () => {
  state.notificationExpenseAvailable = notificationExpenseAvailable();
  if (!state.notificationExpenseAvailable) { state.notificationExpenseEnabled = false; state.notificationExpenseCandidates = []; render(); return; }
  state.notificationExpenseLoading = true;
  render();
  try {
    const status = await getNotificationExpenseStatus();
    state.notificationExpenseEnabled = status.enabled;
    state.notificationExpenseCandidates = status.enabled ? await getNotificationExpenseCandidates() : [];
  } catch (error) {
    console.error("알림 지출 확인 실패", error);
    showToast("결제 알림을 확인하지 못했어요");
  } finally {
    state.notificationExpenseLoading = false;
    render();
  }
};

function registerEventHandlers() {  document.addEventListener("click", async (event) => {
    if (event.target.closest("[data-notification-read-all]")) { markAllNotificationsRead(); render(); return; }
    const noticeTarget = event.target.closest("[data-notification-id]");
    if (noticeTarget) { const notice = getNotifications().find((item) => item.id === noticeTarget.dataset.notificationId); if (!notice) return; markNotificationRead(notice.id); if (notice.postIndex !== undefined) state.selectedPost = notice.postIndex; location.hash = notice.route; render(); return; }
    if (event.target.closest("[data-skip-login]")) { state.guestMode = true; sessionStorage.setItem("ieum-guest-mode", "true"); location.hash = "home"; showToast("로그인 없이 이용 가능한 기능으로 시작했어요"); return; }
    if (event.target.closest("[data-notification-access]")) { const opened = await openNotificationExpenseSettings(); if (!opened) showToast("Android 앱에서만 사용할 수 있어요"); else showToast("이음의 알림 접근을 허용한 뒤 돌아오세요"); return; }
    if (event.target.closest("[data-notification-refresh]")) { await refreshNotificationExpenses(); return; }
    const notificationImportTarget = event.target.closest("[data-import-notification]");
    if (notificationImportTarget) { const candidate = state.notificationExpenseCandidates.find((item) => item.id === notificationImportTarget.dataset.importNotification); if (!candidate) return; const content = (candidate.title || `${candidate.appName || "카드"} 결제`).slice(0, 40); state.living.expenses.unshift({ id: createLocalId("expense"), content, amount: Number(candidate.amount || 0), date: new Date(Number(candidate.timestamp || Date.now())).toISOString().slice(0, 10), source: "notification" }); saveLivingState(); syncFinanceQuietly(); await removeNotificationExpenseCandidate(candidate.id); state.notificationExpenseCandidates = state.notificationExpenseCandidates.filter((item) => item.id !== candidate.id); render(); showToast("결제 알림을 지출에 추가했어요"); return; }
    const expenseDeleteTarget = event.target.closest("[data-delete-expense]");
    if (expenseDeleteTarget) { state.living.expenses = state.living.expenses.filter((item) => item.id !== expenseDeleteTarget.dataset.deleteExpense); saveLivingState(); syncFinanceQuietly(); render(); showToast("지출 내역을 삭제했어요"); return; }
    const recurringDeleteTarget = event.target.closest("[data-delete-recurring]");
    if (recurringDeleteTarget) { state.living.recurring = state.living.recurring.filter((item) => item.id !== recurringDeleteTarget.dataset.deleteRecurring); saveLivingState(); syncFinanceQuietly(); render(); showToast("정기 지출을 삭제했어요"); return; }
    const calendarShiftTarget = event.target.closest("[data-calendar-shift]");
    if (calendarShiftTarget) { const [year, month] = state.livingCalendarMonth.split("-").map(Number); const date = new Date(year, month - 1 + Number(calendarShiftTarget.dataset.calendarShift), 1); state.livingCalendarMonth = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`; render(); return; }
    const likeTarget = event.target.closest("[data-like-post]");
    if (likeTarget) { event.stopPropagation(); if (!state.authUser) { location.hash = "login"; showToast("로그인 후 좋아요를 누를 수 있어요"); return; } const post = state.posts[Number(likeTarget.dataset.likePost)]; if (!post?.id) return; likeTarget.disabled = true; try { const liked = await toggleCommunityLike(post); showToast(liked ? "좋아요를 눌렀어요" : "좋아요를 취소했어요"); } catch (error) { console.error("좋아요 저장 실패", error); likeTarget.disabled = false; showToast("좋아요를 처리하지 못했어요"); } return; }
    const commentReportTarget = event.target.closest("[data-report-comment]");
    if (commentReportTarget) { event.stopPropagation(); if (!state.authUser) { location.hash = "login"; showToast("로그인 후 신고할 수 있어요"); return; } const post = state.posts[state.selectedPost] || state.posts[0]; const commentIndex = Number(commentReportTarget.closest("[data-comment-index]")?.dataset.commentIndex); const comment = post?.commentList?.[commentIndex]; if (!comment?.id || !confirm("이 댓글을 신고하시겠어요?")) return; commentReportTarget.disabled = true; try { await saveCommunityReport({ commentId: comment.id }); showToast("댓글 신고가 접수됐어요"); } catch (error) { console.error("댓글 신고 실패", error); commentReportTarget.disabled = false; showToast(error?.code === "23505" ? "이미 신고한 댓글이에요" : "신고를 접수하지 못했어요"); } return; }
    const postReportTarget = event.target.closest('[data-toast="신고 접수 화면을 준비하고 있어요"]');
    if (postReportTarget) { event.stopPropagation(); if (!state.authUser) { location.hash = "login"; showToast("로그인 후 신고할 수 있어요"); return; } const post = state.posts[state.selectedPost] || state.posts[0]; if (!post?.id || !confirm("이 게시글을 신고하시겠어요?")) return; postReportTarget.disabled = true; try { await saveCommunityReport({ postId: post.id }); showToast("게시글 신고가 접수됐어요"); } catch (error) { console.error("게시글 신고 실패", error); postReportTarget.disabled = false; showToast(error?.code === "23505" ? "이미 신고한 게시글이에요" : "신고를 접수하지 못했어요"); } return; }
    const commentTarget = event.target.closest("[data-comment-index]");
    if (commentTarget && !event.target.closest("form")) { const index = Number(commentTarget.dataset.commentIndex); state.replyTarget = state.replyTarget === index ? null : index; render(); if (state.replyTarget !== null) requestAnimationFrame(() => document.querySelector("#reply-form input")?.focus()); return; }
    if (event.target.closest("[data-share]")) { const post = state.posts[state.selectedPost] || state.posts[0]; if (!post) return; if (navigator.share) navigator.share({ title: post.title, text: post.body, url: location.href }).catch(() => {}); else { navigator.clipboard?.writeText(location.href); showToast("게시글 주소를 복사했어요"); } return; }
    if (event.target.closest("[data-auth-logout]")) { logoutAccount().then(() => { location.hash = "welcome"; showToast("로그아웃했어요"); }).catch(() => showToast("로그아웃하지 못했어요")); return; }
    if (event.target.closest("[data-google-login]")) { loginWithGoogleAccount(); return; }
    const postTarget = event.target.closest("[data-post]");
    if (postTarget) { state.selectedPost = Number(postTarget.dataset.post); state.replyTarget = null; location.hash = "post"; return; }
    if (event.target.closest("#context-action")) { if (!state.authUser) { location.hash = "login"; showToast(eventContextAction.dataset.action === "write" ? "로그인 후 글을 작성할 수 있어요" : "로그인 후 AI 상담을 이용할 수 있어요"); return; } location.hash = eventContextAction.dataset.action === "write" ? "write" : "chat"; return; }
    const questionTarget = event.target.closest("[data-question]");
    if (questionTarget) { const question = questionTarget.dataset.question; sendChatMessage(question).catch(() => showToast("AI 답변을 불러오지 못했어요")); return; }
    const routeTarget = event.target.closest("[data-route]");
    if (routeTarget) { const nextRoute = routeTarget.dataset.route; if ((["forgot-password", "reset-password"].includes(state.route) && nextRoute !== state.route) || nextRoute === "forgot-password") { state.authError = null; state.authNotice = null; } if (state.route === "reset-password" && nextRoute !== "reset-password") { state.authRecovery = false; history.replaceState(null, "", location.pathname + location.hash); } location.hash = nextRoute; if (nextRoute === "living-settings") setTimeout(() => refreshNotificationExpenses(), 0); if (nextRoute === "notifications" && state.authUser) loadCommunity().catch((error) => console.error("알림 확인 실패", error)); return; }
    const communityKindTarget = event.target.closest("[data-community-kind]");
    if (communityKindTarget) { state.communityKind = communityKindTarget.dataset.communityKind; render(); return; }
    const communityFilterTarget = event.target.closest("[data-community-filter]");
    if (communityFilterTarget) { state.communityFilter = communityFilterTarget.dataset.communityFilter; render(); return; }
    const filterTarget = event.target.closest("[data-filter]");
    if (filterTarget) { state.policyFilter = filterTarget.dataset.filter; render(); return; }
    if (event.target.closest("[data-policy-sort-toggle]")) { state.showPolicySort = !state.showPolicySort; render(); return; }
    const sortTarget = event.target.closest("[data-sort]");
    if (sortTarget) { state.policySort = sortTarget.dataset.sort; state.showPolicySort = false; render(); return; }
    const saveTarget = event.target.closest("[data-save]");
    if (saveTarget) { const id = saveTarget.dataset.save; state.saved.has(id) ? state.saved.delete(id) : state.saved.add(id); localStorage.setItem("ieum-saved-policies", JSON.stringify([...state.saved])); showToast(state.saved.has(id) ? "정책을 저장했어요" : "저장을 취소했어요"); render(); return; }
    const toastTarget = event.target.closest("[data-toast]");
    if (toastTarget) showToast(toastTarget.dataset.toast);
  });
  
  document.addEventListener("change", (event) => {
    if (event.target.matches("[data-notification-setting]")) { state.notificationSettings[event.target.dataset.notificationSetting] = event.target.checked; localStorage.setItem("ieum-notification-settings", JSON.stringify(state.notificationSettings)); render(); return; }
    if (event.target.matches("[data-support-status]")) { const application = state.supportApplications.find((item) => item.id === event.target.dataset.supportStatus); if (application) { application.status = event.target.value; application.updatedAt = new Date().toISOString().slice(0, 10); saveSupportApplications(); render(); showToast("진행상태를 변경했어요"); } return; }
    if (event.target.matches("[data-check]")) { const id = Number(event.target.dataset.check); event.target.checked ? state.checked.add(id) : state.checked.delete(id); render(); }
  });
  
  document.addEventListener("input", (event) => {
    if (event.target.matches("[data-age-input]")) { event.target.value = event.target.value.replace(/\D/g, "").slice(0, 2); return; }
    if (event.target.matches("[data-money-input]")) { event.target.value = event.target.value.replace(/\D/g, "").slice(0, 12); return; }
    if (event.target.id === "policy-search") { const cursor = event.target.selectionStart; state.policySearch = event.target.value; render(); const input = document.querySelector("#policy-search"); if (input) { input.focus(); input.setSelectionRange(cursor, cursor); } }
  });
  
  document.addEventListener("keydown", (event) => {
    const postTarget = event.target.closest?.("[data-post]");
    if (postTarget && (event.key === "Enter" || event.key === " ")) { event.preventDefault(); state.selectedPost = Number(postTarget.dataset.post); location.hash = "post"; }
  });
  
  document.addEventListener("submit", async (event) => {
    if (event.target.id === "income-form") { event.preventDefault(); const data = new FormData(event.target); state.living.income = Math.max(0, Number(data.get("income") || 0)); saveLivingState(); syncIncomeQuietly(); render(); showToast("이번 달 수입을 저장했어요"); return; }
    if (event.target.id === "expense-form") { event.preventDefault(); const data = new FormData(event.target); const content = data.get("content").trim(); const amount = Number(data.get("amount")); if (!content || amount <= 0) return; state.living.expenses.unshift({ id: createLocalId("expense"), content, amount, date: new Date().toISOString().slice(0, 10) }); saveLivingState(); syncFinanceQuietly(); render(); showToast("지출을 추가했어요"); return; }
    if (event.target.id === "rent-form") { event.preventDefault(); const data = new FormData(event.target); const startMonth = data.get("startMonth"); const endMonth = data.get("endMonth"); if (endMonth < startMonth) { showToast("계약 종료일을 다시 확인해주세요"); return; } state.living.rent = { amount: Math.max(0, Number(data.get("amount") || 0)), startMonth, endMonth, dueDay: Math.min(31, Math.max(1, Number(data.get("dueDay") || 1))) }; saveLivingState(); syncFinanceQuietly(); render(); showToast("월세 정보를 저장했어요"); return; }
    if (event.target.id === "recurring-form") { event.preventDefault(); const data = new FormData(event.target); const content = data.get("content").trim(); const amount = Number(data.get("amount")); if (!content || amount <= 0) return; state.living.recurring.push({ id: createLocalId("recurring"), category: data.get("category"), content, amount }); saveLivingState(); syncFinanceQuietly(); render(); showToast("정기 지출을 추가했어요"); return; }
    if (event.target.id === "login-form") { event.preventDefault(); const data = new FormData(event.target); const success = await loginAccount(data.get("email").trim(), data.get("password")); if (success) { location.hash = needsInitialProfile() ? "onboarding" : "home"; showToast("로그인했어요"); } return; }
    if (event.target.id === "forgot-password-form") { event.preventDefault(); const data = new FormData(event.target); await requestPasswordReset(data.get("email").trim()); return; }
    if (event.target.id === "reset-password-form") { event.preventDefault(); const data = new FormData(event.target); if (data.get("password") !== data.get("passwordConfirm")) { state.authError = "비밀번호 확인이 일치하지 않습니다."; render(); return; } await completePasswordReset(data.get("password")); return; }
    if (event.target.id === "signup-form") { event.preventDefault(); const data = new FormData(event.target); if (data.get("password") !== data.get("passwordConfirm")) { state.authError = "비밀번호 확인이 일치하지 않습니다."; render(); return; } const result = await createAccount("이음 사용자", data.get("email").trim(), data.get("password")); if (result.success) { if (result.needsEmailConfirmation) { location.hash = "login"; showToast("이메일 확인 후 로그인해주세요"); } else { location.hash = "onboarding"; showToast("계정을 만들었어요"); } } return; }
    if (event.target.id === "onboarding-form") { event.preventDefault(); const data = new FormData(event.target); const age = Number(data.get("age")); if (age < 14 || age > 99) { state.onboardingError = "나이는 14세부터 99세 사이로 입력해주세요."; render(); return; } const success = await completeInitialProfile({ displayName: data.get("displayName").trim(), age, region: data.get("region").trim(), income: data.get("income") }); if (success) { location.hash = "home"; showToast("맞춤 정보를 저장했어요"); } return; }
    if (event.target.id === "comment-form") { event.preventDefault(); if (!state.authUser) { location.hash = "login"; showToast("로그인 후 댓글을 작성할 수 있어요"); return; } const input = event.target.elements.comment; const body = input.value.trim(); const post = state.posts[state.selectedPost] || state.posts[0]; if (!body || !post?.id) return; const button = event.target.querySelector("button"); button.disabled = true; try { await saveCommunityComment({ postId: post.id, body }); showToast("댓글을 등록했어요"); } catch (error) { console.error("댓글 저장 실패", error); button.disabled = false; showToast("댓글을 저장하지 못했어요"); } return; }
    if (event.target.id === "reply-form") { event.preventDefault(); if (!state.authUser) { location.hash = "login"; showToast("로그인 후 답글을 작성할 수 있어요"); return; } const body = event.target.elements.reply.value.trim(); const post = state.posts[state.selectedPost] || state.posts[0]; const comment = post?.commentList?.[Number(event.target.dataset.replyIndex)]; if (!body || !post?.id || !comment?.id) return; const button = event.target.querySelector("button"); button.disabled = true; try { await saveCommunityComment({ postId: post.id, parentId: comment.id, body }); showToast("답글을 등록했어요"); } catch (error) { console.error("답글 저장 실패", error); button.disabled = false; showToast("답글을 저장하지 못했어요"); } return; }
    if (event.target.id === "chat-form") { event.preventDefault(); if (!state.authUser) { location.hash = "login"; showToast("로그인 후 AI 상담을 이용할 수 있어요"); return; } if (state.chatLoading) return; const input = event.target.elements.message; const question = input.value.trim(); if (!question) return; input.value = ""; try { await sendChatMessage(question); } catch { showToast("AI 답변을 불러오지 못했어요"); } return; }
    if (event.target.id === "write-form") { event.preventDefault(); if (!state.authUser) { location.hash = "login"; showToast("로그인 후 글을 작성할 수 있어요"); return; } const data = new FormData(event.target); const button = event.target.querySelector("button[type=submit]"); button.disabled = true; button.textContent = "게시 중..."; try { await saveCommunityPost({ category: data.get("category"), title: data.get("title").trim(), body: data.get("body").trim() }); location.hash = "community"; showToast("게시글을 등록했어요"); } catch (error) { console.error("게시글 저장 실패", error); button.disabled = false; button.textContent = "게시하기"; showToast("게시글을 저장하지 못했어요"); } return; }
    if (event.target.id === "recommend-form") { event.preventDefault(); const data = new FormData(event.target); const age = Number(data.get("age")); if (age < 14 || age > 99) { showToast("나이는 14세부터 99세 사이로 입력해주세요"); return; } const displayName = data.get("displayName").trim(); const region = data.get("region").trim(); if (!displayName || !region) { showToast("이름과 거주지역을 입력해주세요"); return; } const button = event.target.querySelector("button[type=submit]"); button.disabled = true; try { await savePersonalInfo({ displayName, age, gender: data.get("gender"), region, income: data.get("salary").trim() }); showToast("내 정보를 저장했어요"); } catch (error) { console.error("내 정보 저장 실패", error); button.disabled = false; showToast("내 정보를 저장하지 못했어요"); } return; }
  });
}


// Source: js/core/router.js
function initializeRouter() {
  window.addEventListener("hashchange", () => {
    state.route = location.hash.slice(1) || "home";
    render();
    window.scrollTo({ top: 0 });
  });
}


// Source: js/app.js
// 서버가 꺼져 있으면(config.js가 비어 있으면) 오프라인 모드로 휴대폰 안에 저장하며 동작합니다.
registerEventHandlers();
initializeRouter();

const fontsReady = document.fonts
  ? Promise.race([document.fonts.load('20px "Material Symbols Rounded"'), new Promise((resolve) => setTimeout(resolve, 2500))])
  : Promise.resolve();

Promise.all([
  loadPolicies({ renderUpdates: false }),
  loadCommunity({ renderUpdates: false }),
  initializeAuth({ renderUpdates: false }),
  fontsReady
]).finally(() => render());

const refreshCommunityNotifications = () => {
  if (document.hidden || !state.authUser || !["home", "community", "profile", "notifications"].includes(state.route)) return;
  loadCommunity({ renderUpdates: false }).then(render).catch((error) => console.error("커뮤니티 알림 갱신 실패", error));
};
document.addEventListener("visibilitychange", refreshCommunityNotifications);
setInterval(refreshCommunityNotifications, 60000);

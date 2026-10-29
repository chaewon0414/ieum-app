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



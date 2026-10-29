import { getSupabaseClient } from "./supabase-client.js";

function requireClient() {
  const client = getSupabaseClient();
  if (!client) throw new Error("Supabase 연결 설정을 먼저 완료해주세요.");
  return client;
}

export async function signUpWithEmail({ email, password, displayName }) {
  const { data, error } = await requireClient().auth.signUp({
    email,
    password,
    options: { data: { display_name: displayName } }
  });
  if (error) throw error;
  return data;
}

export async function signInWithEmail({ email, password }) {
  const { data, error } = await requireClient().auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data;
}

export async function sendPasswordResetEmail(email, redirectTo) {
  const { error } = await requireClient().auth.resetPasswordForEmail(email, { redirectTo });
  if (error) throw error;
}

export async function updatePassword(password) {
  const { error } = await requireClient().auth.updateUser({ password });
  if (error) throw error;
}

export async function signInWithGoogle() {
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

export async function signOutUser() {
  const client = requireClient();
  const { error } = await client.auth.signOut();
  if (error) {
    const { error: localError } = await client.auth.signOut({ scope: "local" });
    if (localError) throw localError;
  }
}

export async function getCurrentSession() {
  const { data, error } = await requireClient().auth.getSession();
  if (error) throw error;
  return data.session;
}

export async function getVerifiedSession() {
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

export async function fetchProfile(userId) {
  const { data, error } = await requireClient()
    .from("profiles")
    .select("id,display_name,region,birth_year,avatar_url")
    .eq("id", userId)
    .maybeSingle();
  if (error) throw error;
  return data;
}

export async function updateInitialProfile({ userId, displayName, region, birthYear }) {
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

export async function updateGenderMetadata(gender) {
  const { data, error } = await requireClient().auth.updateUser({ data: { gender } });
  if (error) throw error;
  return data.user;
}

export function subscribeToAuthChanges(callback) {
  return requireClient().auth.onAuthStateChange((event, session) => callback(session, event));
}

let supabaseClient = null;

export function isSupabaseConfigured() {
  const config = window.IEUM_CONFIG || {};
  return Boolean(config.SUPABASE_URL && config.SUPABASE_PUBLISHABLE_KEY);
}

export function getSupabaseClient() {
  if (!isSupabaseConfigured()) return null;
  if (!window.supabase) throw new Error("Supabase 라이브러리를 불러오지 못했습니다.");

  if (!supabaseClient) {
    const config = window.IEUM_CONFIG;
    supabaseClient = window.supabase.createClient(config.SUPABASE_URL, config.SUPABASE_PUBLISHABLE_KEY);
  }
  return supabaseClient;
}

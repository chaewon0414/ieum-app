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



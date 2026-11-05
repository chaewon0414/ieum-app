import { isSupabaseConfigured } from "../api/supabase-client.js";
import { fetchPolicies, savePolicy } from "../api/policies-api.js";
import { state } from "../core/state.js";
import { APP_DATA } from "../data/mock-data.js";
import { render } from "../core/render.js";

// 앱에 내장된 자립준비청년 정책을 Supabase 정책 뒤에 붙입니다. 같은 제목이 서버에 있으면 서버 것을 씁니다.
function withBuiltInPolicies(policies) {
  const titles = new Set(policies.map((policy) => policy.title));
  return [...policies, ...APP_DATA.policies.filter((policy) => !titles.has(policy.title))];
}

export async function loadPolicies({ renderUpdates = true } = {}) {
  if (!isSupabaseConfigured()) return;

  state.policiesLoading = true;
  state.policiesError = null;
  if (renderUpdates) render();

  try {
    const policies = await fetchPolicies({ includeUnpublished: state.isAdmin });
    state.policies = withBuiltInPolicies(policies || []);
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

export async function saveSupportPolicy(policy) {
  if (!state.authUser || !state.isAdmin) throw new Error("관리자 권한이 필요합니다.");
  const saved = await savePolicy(policy);
  await loadPolicies({ renderUpdates: false });
  return saved;
}

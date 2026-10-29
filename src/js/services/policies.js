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



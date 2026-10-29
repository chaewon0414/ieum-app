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



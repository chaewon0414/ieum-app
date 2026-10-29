const savedPolicyCount = () => state.policies.filter((policy) => state.saved.has(String(policy.id || policy.title))).length;
const profileView = () => {
  if (state.authLoading) return `<div class="page"><div class="card empty">계정 정보를 확인하는 중이에요.</div></div>`;

  if (!state.authUser) return `<div class="page"><section><span class="eyebrow">내 정보</span><h1>로그인하고<br>이음을 더 편하게 이용하세요</h1></section><section class="section card signed-out-card"><span class="avatar">${icon("person")}</span><h2>아직 로그인하지 않았어요</h2><p class="subtext">글쓰기, 댓글, 좋아요와 저장한 정책을 계정에 보관할 수 있어요.</p><div class="signed-out-actions"><button class="secondary-button" data-route="login">로그인</button><button class="text-button" data-route="signup">계정 만들기</button></div></section><section class="section card menu-list"><button class="menu-row" data-route="saved-policies">${icon("bookmark")} 저장한 정책 ${savedPolicyCount() ? `<b class="menu-count">${savedPolicyCount()}</b>` : ""}${icon("chevron_right")}</button></section></div>`;

  const name = state.profile?.display_name || state.authUser.user_metadata?.display_name || "이음 사용자";
  const initial = name[0] || "이";
  const details = [state.profile?.birth_year ? `${new Date().getFullYear() - state.profile.birth_year + 1}세` : null, state.profile?.region].filter(Boolean).join(" · ") || state.authUser.email;
  return `<div class="page"><section><span class="eyebrow">내 정보</span><h1>${name}님만을 위한<br>이음을 관리해요</h1></section><section class="section card profile-card"><span class="avatar">${initial}</span><div><h3>${name}님</h3><p class="subtext">${details}</p></div><button class="text-button" style="margin-left:auto" data-route="recommend">편집</button></section><section class="section card menu-list"><button class="menu-row" data-route="recommend">${icon("tune")} 맞춤 정보 관리 ${icon("chevron_right")}</button><button class="menu-row" data-route="saved-policies">${icon("bookmark")} 저장한 정책 ${icon("chevron_right")}</button><button class="menu-row" data-route="notification-settings">${icon("notifications")} 알림 설정 ${icon("chevron_right")}</button><button class="menu-row" data-auth-logout>${icon("logout")} 로그아웃 ${icon("chevron_right")}</button></section></div>`;
};



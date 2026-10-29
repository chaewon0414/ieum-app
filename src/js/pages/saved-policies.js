const savedPoliciesView = () => {
  const saved = state.policies.filter((policy) => state.saved.has(String(policy.id || policy.title)));
  const list = saved.length
    ? saved.map((policy) => policyCard(policy, state.policies.indexOf(policy))).join("")
    : `<div class="card empty saved-empty">${icon("bookmark")}<p>아직 저장한 정책이 없어요.<br>지원정책 카드의 북마크를 누르면 여기에 모여요.</p><button class="secondary-button" data-route="policies">지원정책 보러 가기</button></div>`;
  return `<div class="page"><header class="screen-head"><button class="screen-back" data-route="profile" aria-label="내 정보로 돌아가기">${icon("arrow_back")}</button><div><h1>저장한 정책</h1><p>${saved.length ? `${saved.length}개를 저장했어요` : "관심 있는 정책을 모아 보세요"}</p></div></header><section class="list policy-list">${list}</section></div>`;
};

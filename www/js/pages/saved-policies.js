import { state } from "../core/state.js";
import { icon } from "../core/utils.js";
import { policyCard } from "../components/policy-card.js";

export const savedPoliciesView = () => {
  const savedPolicies = state.policies.filter((policy) => state.saved.has(String(policy.id || policy.title)));
  return `<div class="page saved-policies-page">
    <header class="screen-head"><button class="screen-back" data-route="profile" aria-label="내 정보로 돌아가기">${icon("arrow_back")}</button><div><h1>저장한 정책</h1><p>관심 있는 지원정책을 모아봤어요</p></div></header>
    <section>
      <div class="list policy-list policy-results">
        ${savedPolicies.map((policy) => policyCard(policy, state.policies.indexOf(policy))).join("") || `<div class="card empty saved-policies-empty">${icon("bookmark")}<strong>저장한 정책이 없어요</strong><p class="subtext">지원정책에서 북마크 버튼을 누르면 여기에 표시됩니다.</p><button class="secondary-button" data-route="policies">지원정책 둘러보기</button></div>`}
      </div>
    </section>
  </div>`;
};

import { state } from "../core/state.js";
import { escapeHtml, icon } from "../core/utils.js";
import { policyCard } from "../components/policy-card.js";

export const policiesView = () => {
  const categories = ["전체", "생활", "주거", "금융", "취업"];
  const query = state.policySearch.trim().toLowerCase();
  let filtered = state.policies.filter((policy) =>
    (state.policyFilter === "전체" || policy.category === state.policyFilter)
    && (!query || `${policy.title} ${policy.desc} ${policy.category}`.toLowerCase().includes(query))
  );
  if (state.policySort === "마감 임박순") filtered = [...filtered].reverse();
  const status = state.policiesLoading
    ? `<div class="card empty">정책을 불러오는 중이에요.</div>`
    : state.policiesError
      ? `<div class="card empty">${escapeHtml(state.policiesError)}</div>`
      : "";
  return `<div class="page"><section>
    <label class="policy-search">${icon("search")}<input id="policy-search" value="${escapeHtml(state.policySearch)}" placeholder="지원정책을 검색하세요" aria-label="지원정책 검색"><button class="filter-button ${state.showPolicySort ? "active" : ""}" type="button" data-policy-sort-toggle aria-label="정렬 필터 열기">${icon("tune")}</button></label>
    ${state.showPolicySort ? `<div class="sort-options"><button class="${state.policySort === "추천순" ? "active" : ""}" data-sort="추천순">추천순</button><button class="${state.policySort === "마감 임박순" ? "active" : ""}" data-sort="마감 임박순">마감 임박순</button></div>` : ""}
    <div class="chips policy-filters">${categories.map((category) => `<button class="chip ${category === state.policyFilter ? "active" : ""}" data-filter="${category}">${category}</button>`).join("")}</div>
    ${status}<div class="list policy-list policy-results">${filtered.map((policy) => policyCard(policy, state.policies.indexOf(policy))).join("") || (!state.policiesLoading ? `<div class="card empty">검색 조건에 맞는 정책이 없어요.</div>` : "")}</div>
  </section></div>`;
};

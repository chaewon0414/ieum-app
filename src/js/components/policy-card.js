const LINK_NAMES = [["bokjiro", "복지로"], ["jaripon", "자립정보ON"], ["ncrc", "아동권리보장원"], ["mohw", "보건복지부"], ["lh.or.kr", "LH 청약플러스"], ["kosaf", "한국장학재단"], ["work24", "고용24"], ["bmc.busan", "부산도시공사"], ["gov.kr", "정부24"], ["youthcenter", "온통청년"]];
const linkName = (url = "") => (LINK_NAMES.find(([key]) => url.includes(key)) || [null, "공식 페이지"])[1];
const CATEGORY_TAG = { 생활: "", 주거: "house", 금융: "gold", 교육: "edu", 취업: "job", 건강: "health" };

function policyCard(policy, index, result = false) {
  const saveKey = String(policy.id || policy.title);
  const region = policy.region && policy.region !== "전국" ? `<span>${icon("location_on")} ${escapeHtml(policy.region)}</span>` : "";
  const link = !result && policy.applicationUrl ? `<a class="policy-link" href="${escapeHtml(policy.applicationUrl)}" target="_blank" rel="noopener">${escapeHtml(linkName(policy.applicationUrl))}에서 확인하기 ${icon("open_in_new")}</a>` : "";
  const details = !result && policy.content ? `<details class="policy-details">
      <summary>자세히 보기 ${icon("expand_more")}</summary>
      <ul>${policy.content.split("\n").filter(Boolean).map((line) => `<li>${escapeHtml(line)}</li>`).join("")}</ul>
      ${policy.source ? `<div class="policy-details-foot"><small>출처: ${escapeHtml(policy.source)}</small></div>` : ""}
    </details>` : "";
  return `<article class="card ${result ? "result-card" : "policy-card"} ${result && index === 2 ? "featured" : ""}">
    <div class="card-top"><div><span class="tag ${CATEGORY_TAG[policy.category] || ""}">${escapeHtml(policy.category)}</span><h3>${escapeHtml(policy.title)}</h3></div>
    <button class="bookmark ${state.saved.has(saveKey) ? "saved" : ""}" data-save="${escapeHtml(saveKey)}" aria-label="${escapeHtml(policy.title)} 저장">${icon("bookmark")}</button></div>
    <p class="subtext">${escapeHtml(policy.desc)}</p>
    <div class="meta"><span>${icon("payments")} ${escapeHtml(policy.amount)}</span><span>${icon("event")} ${escapeHtml(policy.deadline)}</span>${region}${result ? `<span>${icon("verified")} 매칭 ${policy.match}%</span>` : ""}</div>
    ${link}
    ${details}
  </article>`;
}

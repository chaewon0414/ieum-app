import { state } from "../core/state.js";
import { escapeHtml, icon } from "../core/utils.js";
export function policyCard(policy, index, result = false) {
  const saveKey = String(policy.id || policy.title);
  return `<article class="card ${result ? "result-card" : "policy-card"} ${result && index === 2 ? "featured" : ""}">
    <div class="card-top"><div><span class="tag ${policy.category === "금융" ? "gold" : ""}">${escapeHtml(policy.category)}${state.isAdmin && policy.status !== "published" ? ` · ${escapeHtml(policy.status === "draft" ? "임시저장" : "종료")}` : ""}</span><h3>${escapeHtml(policy.title)}</h3></div>
    <button class="bookmark ${state.saved.has(saveKey) ? "saved" : ""}" data-save="${escapeHtml(saveKey)}" aria-label="${escapeHtml(policy.title)} 저장">${icon("bookmark")}</button></div>
    <p class="subtext">${escapeHtml(policy.desc)}</p>
    <div class="meta"><span>${icon("payments")} ${escapeHtml(policy.amount)}</span><span>${icon("event")} ${escapeHtml(policy.deadline)}</span>${result ? `<span>${icon("verified")} 매칭 ${policy.match}%</span>` : ""}</div>
    ${state.isAdmin && !result ? `<div class="policy-admin-actions"><button type="button" data-edit-policy="${escapeHtml(policy.id)}">${icon("edit")} 수정</button></div>` : ""}
  </article>`;
}

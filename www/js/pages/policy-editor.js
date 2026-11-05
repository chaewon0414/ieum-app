import { state } from "../core/state.js";
import { escapeHtml, icon } from "../core/utils.js";

const value = (input) => escapeHtml(input ?? "");

export const policyEditorView = () => {
  if (!state.isAdmin) return `<div class="page"><div class="card empty">관리자 권한이 필요합니다.</div></div>`;
  const policy = state.policies.find((item) => item.id === state.editingPolicyId) || {};
  const editing = Boolean(policy.id);
  return `<div class="page policy-editor-page">
    <header class="screen-head"><button class="screen-back" data-route="policies" aria-label="지원정책으로 돌아가기">${icon("arrow_back")}</button><div><h1>${editing ? "지원정책 수정" : "지원정책 작성"}</h1><p>관리자 권한으로 정책 정보를 ${editing ? "수정" : "등록"}합니다</p></div></header>
    <section class="card policy-editor-card">
      <form id="policy-form" class="policy-form">
        <div class="policy-form-grid">
          <label><span>상태</span><select name="status"><option value="published" ${policy.status !== "draft" && policy.status !== "closed" ? "selected" : ""}>게시</option><option value="draft" ${policy.status === "draft" ? "selected" : ""}>임시저장</option><option value="closed" ${policy.status === "closed" ? "selected" : ""}>종료</option></select></label>
          <label><span>카테고리</span><select name="category">${["생활", "주거", "금융", "취업"].map((category) => `<option ${policy.category === category ? "selected" : ""}>${category}</option>`).join("")}</select></label>
          <label class="wide"><span>제목</span><input name="title" maxlength="120" required value="${value(policy.title)}" placeholder="정책 제목"></label>
          <label class="wide"><span>요약</span><textarea name="summary" maxlength="500" required placeholder="목록에 표시할 정책 요약">${value(policy.summary || policy.desc)}</textarea></label>
          <label class="wide"><span>상세 내용</span><textarea name="content" class="policy-content-input" required placeholder="지원 대상, 신청 방법 등 상세 내용">${value(policy.content)}</textarea></label>
          <label><span>지원 내용</span><input name="supportAmount" value="${value(policy.supportAmount)}" placeholder="예: 월 최대 20만원"></label>
          <label><span>지역</span><input name="region" value="${value(policy.region || "전국")}" placeholder="전국"></label>
          <label><span>신청 시작일</span><input name="applicationStart" type="date" value="${value(policy.applicationStart)}"></label>
          <label><span>신청 종료일</span><input name="applicationEnd" type="date" value="${value(policy.applicationEnd)}"></label>
          <label><span>최소 나이</span><input name="minimumAge" type="number" min="0" max="120" value="${value(policy.minimumAge)}"></label>
          <label><span>최대 나이</span><input name="maximumAge" type="number" min="0" max="120" value="${value(policy.maximumAge)}"></label>
          <label class="wide"><span>소득 조건</span><input name="incomeCondition" value="${value(policy.incomeCondition)}"></label>
          <label class="wide"><span>취업 조건</span><input name="employmentCondition" value="${value(policy.employmentCondition)}"></label>
          <label class="wide"><span>신청 링크</span><input name="applicationUrl" type="url" value="${value(policy.applicationUrl)}" placeholder="https://"></label>
          <label class="wide"><span>문의처</span><input name="contact" value="${value(policy.contact)}"></label>
          <label class="wide"><span>이미지 주소</span><input name="imageUrl" type="url" value="${value(policy.imageUrl)}" placeholder="https://"></label>
        </div>
        ${state.policyFormError ? `<p class="policy-form-error" role="alert">${escapeHtml(state.policyFormError)}</p>` : ""}
        <button class="secondary-button policy-submit" type="submit" ${state.policySubmitting ? "disabled" : ""}>${state.policySubmitting ? "저장 중..." : editing ? "수정 내용 저장" : "지원정책 등록"}</button>
      </form>
    </section>
  </div>`;
};

import { state } from "../core/state.js";
import { escapeHtml, formatWon, icon } from "../core/utils.js";
import { calculateLivingTotals } from "../services/finances.js";

const formatMonth = (month) => month ? month.replace(/^(\d{4})-(\d{2})$/, "$1.$2") : "미설정";
const formatNotificationTime = (timestamp) => {
  const date = new Date(Number(timestamp));
  return Number.isNaN(date.getTime()) ? "방금" : date.toLocaleString("ko-KR", { month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit" });
};

export const livingSettingsView = () => {
  const living = state.living;
  const totals = calculateLivingTotals();

  return `<div class="page living-settings-page">
    <section class="screen-head"><button class="screen-back" data-route="living" aria-label="생활 관리로 돌아가기">${icon("arrow_back")}</button><div><h1>생활비 설정</h1><p>수입과 고정적으로 나가는 금액을 관리해요</p></div></section>

    <section class="card notification-expense-card">
      <div class="section-head"><div><span class="eyebrow">Android 자동 입력</span><h2>결제 알림 가져오기</h2></div><span class="notification-access-badge ${state.notificationExpenseEnabled ? "enabled" : ""}">${state.notificationExpenseEnabled ? "허용됨" : "사용 안 함"}</span></div>
      <p class="notification-expense-description">카드·은행 앱의 새 결제 알림에서 금액을 찾아 지출 후보로 보여줘요. 알림 내용은 서버로 보내지 않고 이 휴대폰에만 저장해요.</p>
      ${state.notificationExpenseAvailable ? `<div class="notification-expense-actions"><button type="button" class="secondary-button" data-notification-access>${icon("notifications_active")} 알림 접근 설정</button><button type="button" class="text-button" data-notification-refresh ${state.notificationExpenseLoading ? "disabled" : ""}>${icon("refresh")} ${state.notificationExpenseLoading ? "확인 중" : "새 알림 확인"}</button></div>` : `<div class="notification-app-only">${icon("android")} Android 앱에서만 사용할 수 있어요.</div>`}
      ${state.notificationExpenseEnabled ? `<div class="notification-candidate-list">${state.notificationExpenseCandidates.length ? state.notificationExpenseCandidates.map((candidate) => `<article class="notification-candidate"><span class="notification-candidate-icon">${icon("receipt_long")}</span><div><b>${escapeHtml(candidate.appName || "결제 알림")}</b><p>${escapeHtml(candidate.content || candidate.title || "결제 내역")}</p><small>${formatNotificationTime(candidate.timestamp)}</small></div><strong>${formatWon(candidate.amount)}</strong><button type="button" data-import-notification="${escapeHtml(candidate.id)}">추가</button></article>`).join("") : `<div class="living-empty">가져올 새 결제 알림이 없어요.</div>`}</div>` : ""}
    </section>

    <section class="section card living-form-card">
      <div class="section-head"><div><span class="eyebrow">수입 설정</span><h2>이번 달 수입</h2></div><strong>${formatWon(living.income)}</strong></div>
      <form id="income-form" class="living-inline-form"><label><span>수입 금액</span><input name="income" type="text" inputmode="numeric" pattern="[0-9]*" data-money-input value="${Number(living.income || 0)}" required></label><button class="primary-button" type="submit">저장</button></form>
    </section>

    <section class="section card living-form-card">
      <div class="section-head"><div><span class="eyebrow">주거비 설정</span><h2>월세 금액과 기간</h2></div></div>
      <form id="rent-form" class="living-entry-form">
        <label class="wide"><span>월세 금액</span><input name="amount" type="text" inputmode="numeric" pattern="[0-9]*" data-money-input value="${Number(living.rent.amount || 0)}" required></label>
        <label><span>계약 시작</span><input name="startMonth" type="month" value="${escapeHtml(living.rent.startMonth)}" required></label>
        <label><span>계약 종료</span><input name="endMonth" type="month" value="${escapeHtml(living.rent.endMonth)}" required></label>
        <label class="wide"><span>매월 납부일 (1~31일)</span><input name="dueDay" type="number" min="1" max="31" value="${Number(living.rent.dueDay) || 1}" required></label>
        <button class="secondary-button wide" type="submit">월세 정보 저장</button>
      </form>
      <div class="rent-summary"><span>${icon("home")} 월 ${formatWon(totals.rentAmount)}</span><span>${formatMonth(living.rent.startMonth)} – ${formatMonth(living.rent.endMonth)}</span></div>
    </section>

    <section class="section card living-form-card">
      <div class="section-head"><div><span class="eyebrow">고정비 설정</span><h2>공과금 및 정기 지출</h2></div><strong>${formatWon(totals.recurringTotal)}</strong></div>
      <form id="recurring-form" class="living-entry-form">
        <label><span>구분</span><select name="category"><option>공과금</option><option>정기지출</option></select></label>
        <label><span>항목</span><input name="content" maxlength="30" placeholder="예: 전기요금" required></label>
        <label class="wide"><span>월 금액</span><input name="amount" type="text" inputmode="numeric" pattern="[0-9]*" data-money-input placeholder="숫자만 입력" required></label>
        <button class="secondary-button wide" type="submit">정기 지출 추가</button>
      </form>
      <div class="living-item-list">${living.recurring.length ? living.recurring.map((item) => `<div class="living-list-row"><span class="living-list-icon recurring">${icon(item.category === "공과금" ? "bolt" : "event_repeat")}</span><div><b>${escapeHtml(item.content)}</b><small>${escapeHtml(item.category)}</small></div><strong>${formatWon(item.amount)}</strong><button type="button" data-delete-recurring="${escapeHtml(item.id)}" aria-label="${escapeHtml(item.content)} 정기 지출 삭제">${icon("delete")}</button></div>`).join("") : `<div class="living-empty">등록한 정기 지출이 없어요.</div>`}</div>
    </section>
  </div>`;
};

const statuses = ["신청 준비", "신청 완료", "서류 검토", "심사 중", "선정", "탈락", "지급 완료"];

const supportStatusView = () => {
  const applications = state.supportApplications || [];
  const upcomingAmount = applications
    .filter((item) => !["탈락", "지급 완료"].includes(item.status))
    .reduce((sum, item) => sum + Number(item.amount || 0), 0);

  return `<div class="page support-status-page">
    <section class="screen-head"><button class="screen-back" data-route="home" aria-label="홈으로 돌아가기">${icon("arrow_back")}</button><div><h1>나의 지원 현황</h1><p>신청한 정책의 진행상태와 결과를 확인해요</p></div></section>
    <section class="support-summary-grid">
      <article class="card"><small>신청 중인 정책</small><strong>${applications.length}건</strong></article>
      <article class="card"><small>이번 달 지원 예정</small><strong>${formatWon(upcomingAmount)}</strong></article>
    </section>
    <section class="section"><div class="section-head"><h2>신청 정책</h2><span class="eyebrow">${applications.length}건</span></div>
      <div class="support-application-list">${applications.length ? applications.map((application) => `<article class="card support-application-card">
        <div class="support-application-head"><div><span class="tag">신청 정책</span><h3>${escapeHtml(application.title)}</h3></div><strong>${formatWon(application.amount)}</strong></div>
        <div class="support-status-window"><span class="material-symbols-rounded">${application.status === "선정" ? "task_alt" : application.status === "탈락" ? "cancel" : "pending_actions"}</span><div><small>심사결과 또는 진행상태</small><b>${escapeHtml(application.status)}</b></div></div>
        <label class="support-status-select"><span>진행상태 변경</span><select data-support-status="${escapeHtml(application.id)}">${statuses.map((status) => `<option value="${status}" ${status === application.status ? "selected" : ""}>${status}</option>`).join("")}</select></label>
        <p class="support-updated">최근 확인 ${escapeHtml(application.updatedAt || "-")}</p>
      </article>`).join("") : `<div class="card empty">아직 신청 중인 정책이 없어요.</div>`}</div>
    </section>
  </div>`;
};



const homeView = () => { const accountName = state.profile?.display_name || state.authUser?.user_metadata?.display_name; const greeting = state.authUser && accountName ? `반가워요, ${accountName}님!` : "반가워요!"; const applications = state.supportApplications || []; const upcomingAmount = applications.filter((item) => !["탈락", "지급 완료"].includes(item.status)).reduce((sum, item) => sum + Number(item.amount || 0), 0); const currentApplication = applications[0]; return `<div class="page home-page">
    <section><h1>${greeting}</h1></section>
    <section class="section status-section ${state.authUser ? "" : "status-locked"}">
      <button type="button" class="card status-card" data-route="support-status" ${state.authUser ? "" : "disabled aria-hidden=\"true\""}><div class="status-title"><span>나의 지원 현황</span>${icon("chevron_right")}</div><div class="status-grid"><div><small>신청 중인 정책</small><strong>${applications.length}건</strong></div><div><small>이번 달 지원 예정</small><strong>${formatWon(upcomingAmount)}</strong></div></div><div class="status-foot">${icon("fact_check")}<div><b>${currentApplication?.title || "신청 중인 정책이 없어요"}</b>${currentApplication ? `<span class="status-progress-chip">${currentApplication.status}</span>` : ""}<small>${currentApplication ? "진행상태와 심사결과를 확인하세요" : "지원정책에서 관심 정책을 찾아보세요"}</small></div></div></button>
      ${state.authUser ? "" : `<div class="status-login-notice">${icon("lock")}<strong>로그인해야 이용 가능합니다</strong><button type="button" data-route="login">로그인</button></div>`}
    </section>
    <section class="section quick-start-section"><div class="section-head"><h2>빠른 시작</h2></div><div class="action-grid">
      <button class="action-card wide" data-route="living"><span class="action-icon">${icon("home")}</span><div><h3>생활 관리</h3><p>월세와 생활비를 가볍게 관리해요</p></div><span class="chevron">${icon("chevron_right")}</span></button>
      <button class="action-card" data-route="policies"><span class="action-icon">${icon("account_balance")}</span><div class="action-copy"><h3>지원정책 찾기</h3><p>놓치기 쉬운 혜택까지 한눈에</p></div></button>
      <button class="action-card" data-route="jobs"><span class="action-icon">${icon("work")}</span><div class="action-copy"><h3>취업 준비</h3><p>채용 정보와 면접 연습</p></div></button>
    </div></section>
    <section class="section"><article class="card daily-message"><span class="action-icon">${icon("lightbulb")}</span><div><h2>오늘의 한마디</h2><p>작은 한 걸음도 분명한 시작이에요. 오늘도 천천히 나아가요.</p></div></article></section>
  </div>`; };



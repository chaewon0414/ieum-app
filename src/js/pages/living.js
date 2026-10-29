const monthKey = (date) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
const calendarAmount = (amount) => Number(amount || 0).toLocaleString("ko-KR");
const calendarMonth = (month, living, totals, currentKey) => {
  const firstWeekday = new Date(month.year, month.month, 1).getDay();
  const daysInMonth = new Date(month.year, month.month + 1, 0).getDate();
  const entries = {};
  const add = (day, type, amount) => {
    if (!amount) return;
    entries[day] ||= { income: 0, expense: 0 };
    entries[day][type] += Number(amount);
  };
  const history = living.history?.[month.key] || {};
  add(1, "income", month.key === currentKey ? living.income : history.income);
  const datedExpenses = living.expenses.filter(item => String(item.date || "").slice(0, 7) === month.key);
  datedExpenses.forEach(item => add(Number(String(item.date).slice(8, 10)), "expense", item.amount));
  const datedTotal = datedExpenses.reduce((sum, item) => sum + Number(item.amount || 0), 0);
  if (month.key === currentKey) add(1, "expense", totals.rentAmount + totals.recurringTotal);
  else add(1, "expense", Math.max(0, Number(history.spending || 0) - datedTotal));
  const cells = Array.from({ length: firstWeekday }, () => `<div class="living-calendar-day empty" aria-hidden="true"></div>`);
  for (let day = 1; day <= daysInMonth; day += 1) {
    const entry = entries[day] || {};
    cells.push(`<div class="living-calendar-day"><b>${day}</b>${entry.income ? `<span class="calendar-income">+${calendarAmount(entry.income)}</span>` : ""}${entry.expense ? `<span class="calendar-expense">-${calendarAmount(entry.expense)}</span>` : ""}</div>`);
  }
  return `<article class="living-calendar-month"><h3>${month.label}</h3><div class="living-calendar-weekdays"><span>일</span><span>월</span><span>화</span><span>수</span><span>목</span><span>금</span><span>토</span></div><div class="living-calendar-grid">${cells.join("")}</div></article>`;
};

const livingView = () => {
  const living = state.living;
  const totals = calculateLivingTotals();
  const currentKey = monthKey(new Date());
  const [calendarYear, calendarMonthNumber] = state.livingCalendarMonth.split("-").map(Number);
  const selectedMonth = { key: state.livingCalendarMonth, label: `${calendarYear}년 ${calendarMonthNumber}월`, year: calendarYear, month: calendarMonthNumber - 1 };
  const calendar = calendarMonth(selectedMonth, living, totals, currentKey);

  return `<div class="page living-page">
    <section class="screen-head living-screen-head"><button class="screen-back" data-route="home" aria-label="홈으로 돌아가기">${icon("arrow_back")}</button><div><h1>생활 관리</h1><p>최근 생활비 흐름을 한눈에 확인해요</p></div><button class="living-settings-button" data-route="living-settings" aria-label="생활비 설정">${icon("settings")}</button></section>

    <section class="living-balance-grid">
      <article class="card living-balance-card income"><small>이번 달 수입</small><strong>${formatWon(living.income)}</strong></article>
      <article class="card living-balance-card expense"><small>이번 달 지출</small><strong>${formatWon(totals.spending)}</strong></article>
      <article class="card living-balance-card balance"><small>현재 잔액</small><strong class="${totals.balance < 0 ? "negative" : ""}">${formatWon(totals.balance)}</strong></article>
    </section>

    <section class="section card living-chart-card">
      <div class="section-head"><div><span class="eyebrow">이번 달</span><h2>날짜별 수입과 지출</h2></div><div class="living-chart-legend"><span><i class="income"></i>수입</span><span><i class="expense"></i>지출</span></div></div>
      <div class="living-calendar-nav"><button type="button" data-calendar-shift="-1" aria-label="이전 달">${icon("chevron_left")}</button><strong>${selectedMonth.label}</strong><button type="button" data-calendar-shift="1" aria-label="다음 달">${icon("chevron_right")}</button></div>
      <div class="living-calendar-list">${calendar}</div>
    </section>

    <section class="section card living-form-card">
      <div class="section-head"><div><span class="eyebrow">지출 기록</span><h2>사용한 금액 추가</h2></div></div>
      <form id="expense-form" class="living-entry-form">
        <label class="wide"><span>사용 내용</span><input name="content" maxlength="40" placeholder="예: 장보기, 교통비" required></label>
        <label class="wide"><span>금액</span><input name="amount" type="text" inputmode="numeric" pattern="[0-9]*" data-money-input placeholder="숫자만 입력" required></label>
        <button class="primary-button wide" type="submit">지출 추가</button>
      </form>
      <div class="living-item-list">${living.expenses.length ? living.expenses.map((item) => `<div class="living-list-row"><span class="living-list-icon">${icon("payments")}</span><div><b>${escapeHtml(item.content)}</b><small>${escapeHtml(item.date || "오늘")}</small></div><strong>-${formatWon(item.amount)}</strong><button type="button" data-delete-expense="${escapeHtml(item.id)}" aria-label="${escapeHtml(item.content)} 지출 삭제">${icon("delete")}</button></div>`).join("") : `<div class="living-empty">등록한 지출이 없어요.</div>`}</div>
    </section>

    <button type="button" class="card living-settings-card" data-route="living-settings"><span>${icon("tune")}</span><div><b>생활비 설정</b><small>수입, 월세, 공과금 및 정기 지출 관리</small></div>${icon("chevron_right")}</button>
  </div>`;
};



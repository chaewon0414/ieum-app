const eventContextAction = document.querySelector("#context-action");
const saveLivingState = () => localStorage.setItem("ieum-living", JSON.stringify(state.living));
const saveSupportApplications = () => localStorage.setItem("ieum-support-applications", JSON.stringify(state.supportApplications));
const createLocalId = (prefix) => `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
const syncFinanceQuietly = () => syncCurrentMonthlyFinance().catch((error) => console.error("월별 수입·지출 동기화 실패", error));
const syncIncomeQuietly = () => Promise.all([
  syncUserIncome(state.living.income, "provided"),
  syncCurrentMonthlyFinance()
]).catch((error) => console.error("계정 수입 동기화 실패", error));
const refreshNotificationExpenses = async () => {
  state.notificationExpenseAvailable = notificationExpenseAvailable();
  if (!state.notificationExpenseAvailable) { state.notificationExpenseEnabled = false; state.notificationExpenseCandidates = []; render(); return; }
  state.notificationExpenseLoading = true;
  render();
  try {
    const status = await getNotificationExpenseStatus();
    state.notificationExpenseEnabled = status.enabled;
    state.notificationExpenseCandidates = status.enabled ? await getNotificationExpenseCandidates() : [];
  } catch (error) {
    console.error("알림 지출 확인 실패", error);
    showToast("결제 알림을 확인하지 못했어요");
  } finally {
    state.notificationExpenseLoading = false;
    render();
  }
};

function registerEventHandlers() {  document.addEventListener("click", async (event) => {
    if (event.target.closest("[data-notification-read-all]")) { markAllNotificationsRead(); render(); return; }
    const noticeTarget = event.target.closest("[data-notification-id]");
    if (noticeTarget) { const notice = getNotifications().find((item) => item.id === noticeTarget.dataset.notificationId); if (!notice) return; markNotificationRead(notice.id); if (notice.postIndex !== undefined) state.selectedPost = notice.postIndex; location.hash = notice.route; render(); return; }
    if (event.target.closest("[data-skip-login]")) { state.guestMode = true; sessionStorage.setItem("ieum-guest-mode", "true"); location.hash = "home"; showToast("로그인 없이 이용 가능한 기능으로 시작했어요"); return; }
    if (event.target.closest("[data-notification-access]")) { const opened = await openNotificationExpenseSettings(); if (!opened) showToast("Android 앱에서만 사용할 수 있어요"); else showToast("이음의 알림 접근을 허용한 뒤 돌아오세요"); return; }
    if (event.target.closest("[data-notification-refresh]")) { await refreshNotificationExpenses(); return; }
    const notificationImportTarget = event.target.closest("[data-import-notification]");
    if (notificationImportTarget) { const candidate = state.notificationExpenseCandidates.find((item) => item.id === notificationImportTarget.dataset.importNotification); if (!candidate) return; const content = (candidate.title || `${candidate.appName || "카드"} 결제`).slice(0, 40); state.living.expenses.unshift({ id: createLocalId("expense"), content, amount: Number(candidate.amount || 0), date: new Date(Number(candidate.timestamp || Date.now())).toISOString().slice(0, 10), source: "notification" }); saveLivingState(); syncFinanceQuietly(); await removeNotificationExpenseCandidate(candidate.id); state.notificationExpenseCandidates = state.notificationExpenseCandidates.filter((item) => item.id !== candidate.id); render(); showToast("결제 알림을 지출에 추가했어요"); return; }
    const expenseDeleteTarget = event.target.closest("[data-delete-expense]");
    if (expenseDeleteTarget) { state.living.expenses = state.living.expenses.filter((item) => item.id !== expenseDeleteTarget.dataset.deleteExpense); saveLivingState(); syncFinanceQuietly(); render(); showToast("지출 내역을 삭제했어요"); return; }
    const recurringDeleteTarget = event.target.closest("[data-delete-recurring]");
    if (recurringDeleteTarget) { state.living.recurring = state.living.recurring.filter((item) => item.id !== recurringDeleteTarget.dataset.deleteRecurring); saveLivingState(); syncFinanceQuietly(); render(); showToast("정기 지출을 삭제했어요"); return; }
    const calendarShiftTarget = event.target.closest("[data-calendar-shift]");
    if (calendarShiftTarget) { const [year, month] = state.livingCalendarMonth.split("-").map(Number); const date = new Date(year, month - 1 + Number(calendarShiftTarget.dataset.calendarShift), 1); state.livingCalendarMonth = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`; render(); return; }
    const likeTarget = event.target.closest("[data-like-post]");
    if (likeTarget) { event.stopPropagation(); if (!state.authUser) { location.hash = "login"; showToast("로그인 후 좋아요를 누를 수 있어요"); return; } const post = state.posts[Number(likeTarget.dataset.likePost)]; if (!post?.id) return; likeTarget.disabled = true; try { const liked = await toggleCommunityLike(post); showToast(liked ? "좋아요를 눌렀어요" : "좋아요를 취소했어요"); } catch (error) { console.error("좋아요 저장 실패", error); likeTarget.disabled = false; showToast("좋아요를 처리하지 못했어요"); } return; }
    const commentReportTarget = event.target.closest("[data-report-comment]");
    if (commentReportTarget) { event.stopPropagation(); if (!state.authUser) { location.hash = "login"; showToast("로그인 후 신고할 수 있어요"); return; } const post = state.posts[state.selectedPost] || state.posts[0]; const commentIndex = Number(commentReportTarget.closest("[data-comment-index]")?.dataset.commentIndex); const comment = post?.commentList?.[commentIndex]; if (!comment?.id || !confirm("이 댓글을 신고하시겠어요?")) return; commentReportTarget.disabled = true; try { await saveCommunityReport({ commentId: comment.id }); showToast("댓글 신고가 접수됐어요"); } catch (error) { console.error("댓글 신고 실패", error); commentReportTarget.disabled = false; showToast(error?.code === "23505" ? "이미 신고한 댓글이에요" : "신고를 접수하지 못했어요"); } return; }
    const postReportTarget = event.target.closest('[data-toast="신고 접수 화면을 준비하고 있어요"]');
    if (postReportTarget) { event.stopPropagation(); if (!state.authUser) { location.hash = "login"; showToast("로그인 후 신고할 수 있어요"); return; } const post = state.posts[state.selectedPost] || state.posts[0]; if (!post?.id || !confirm("이 게시글을 신고하시겠어요?")) return; postReportTarget.disabled = true; try { await saveCommunityReport({ postId: post.id }); showToast("게시글 신고가 접수됐어요"); } catch (error) { console.error("게시글 신고 실패", error); postReportTarget.disabled = false; showToast(error?.code === "23505" ? "이미 신고한 게시글이에요" : "신고를 접수하지 못했어요"); } return; }
    const commentTarget = event.target.closest("[data-comment-index]");
    if (commentTarget && !event.target.closest("form")) { const index = Number(commentTarget.dataset.commentIndex); state.replyTarget = state.replyTarget === index ? null : index; render(); if (state.replyTarget !== null) requestAnimationFrame(() => document.querySelector("#reply-form input")?.focus()); return; }
    if (event.target.closest("[data-share]")) { const post = state.posts[state.selectedPost] || state.posts[0]; if (!post) return; if (navigator.share) navigator.share({ title: post.title, text: post.body, url: location.href }).catch(() => {}); else { navigator.clipboard?.writeText(location.href); showToast("게시글 주소를 복사했어요"); } return; }
    if (event.target.closest("[data-auth-logout]")) { logoutAccount().then(() => { location.hash = "welcome"; showToast("로그아웃했어요"); }).catch(() => showToast("로그아웃하지 못했어요")); return; }
    if (event.target.closest("[data-google-login]")) { loginWithGoogleAccount(); return; }
    const postTarget = event.target.closest("[data-post]");
    if (postTarget) { state.selectedPost = Number(postTarget.dataset.post); state.replyTarget = null; location.hash = "post"; return; }
    if (event.target.closest("#context-action")) { if (!state.authUser) { location.hash = "login"; showToast(eventContextAction.dataset.action === "write" ? "로그인 후 글을 작성할 수 있어요" : "로그인 후 AI 상담을 이용할 수 있어요"); return; } location.hash = eventContextAction.dataset.action === "write" ? "write" : "chat"; return; }
    const questionTarget = event.target.closest("[data-question]");
    if (questionTarget) { const question = questionTarget.dataset.question; sendChatMessage(question).catch(() => showToast("AI 답변을 불러오지 못했어요")); return; }
    const routeTarget = event.target.closest("[data-route]");
    if (routeTarget) { const nextRoute = routeTarget.dataset.route; if ((["forgot-password", "reset-password"].includes(state.route) && nextRoute !== state.route) || nextRoute === "forgot-password") { state.authError = null; state.authNotice = null; } if (state.route === "reset-password" && nextRoute !== "reset-password") { state.authRecovery = false; history.replaceState(null, "", location.pathname + location.hash); } location.hash = nextRoute; if (nextRoute === "living-settings") setTimeout(() => refreshNotificationExpenses(), 0); if (nextRoute === "notifications" && state.authUser) loadCommunity().catch((error) => console.error("알림 확인 실패", error)); return; }
    const communityKindTarget = event.target.closest("[data-community-kind]");
    if (communityKindTarget) { state.communityKind = communityKindTarget.dataset.communityKind; render(); return; }
    const communityFilterTarget = event.target.closest("[data-community-filter]");
    if (communityFilterTarget) { state.communityFilter = communityFilterTarget.dataset.communityFilter; render(); return; }
    const filterTarget = event.target.closest("[data-filter]");
    if (filterTarget) { state.policyFilter = filterTarget.dataset.filter; render(); return; }
    if (event.target.closest("[data-policy-sort-toggle]")) { state.showPolicySort = !state.showPolicySort; render(); return; }
    const sortTarget = event.target.closest("[data-sort]");
    if (sortTarget) { state.policySort = sortTarget.dataset.sort; state.showPolicySort = false; render(); return; }
    const saveTarget = event.target.closest("[data-save]");
    if (saveTarget) { const id = saveTarget.dataset.save; state.saved.has(id) ? state.saved.delete(id) : state.saved.add(id); localStorage.setItem("ieum-saved-policies", JSON.stringify([...state.saved])); showToast(state.saved.has(id) ? "정책을 저장했어요" : "저장을 취소했어요"); render(); return; }
    const toastTarget = event.target.closest("[data-toast]");
    if (toastTarget) showToast(toastTarget.dataset.toast);
  });
  
  document.addEventListener("change", (event) => {
    if (event.target.matches("[data-notification-setting]")) { state.notificationSettings[event.target.dataset.notificationSetting] = event.target.checked; localStorage.setItem("ieum-notification-settings", JSON.stringify(state.notificationSettings)); render(); return; }
    if (event.target.matches("[data-support-status]")) { const application = state.supportApplications.find((item) => item.id === event.target.dataset.supportStatus); if (application) { application.status = event.target.value; application.updatedAt = new Date().toISOString().slice(0, 10); saveSupportApplications(); render(); showToast("진행상태를 변경했어요"); } return; }
    if (event.target.matches("[data-check]")) { const id = Number(event.target.dataset.check); event.target.checked ? state.checked.add(id) : state.checked.delete(id); render(); }
  });
  
  document.addEventListener("input", (event) => {
    if (event.target.matches("[data-age-input]")) { event.target.value = event.target.value.replace(/\D/g, "").slice(0, 2); return; }
    if (event.target.matches("[data-money-input]")) { event.target.value = event.target.value.replace(/\D/g, "").slice(0, 12); return; }
    if (event.target.id === "policy-search") { const cursor = event.target.selectionStart; state.policySearch = event.target.value; render(); const input = document.querySelector("#policy-search"); if (input) { input.focus(); input.setSelectionRange(cursor, cursor); } }
  });
  
  document.addEventListener("keydown", (event) => {
    const postTarget = event.target.closest?.("[data-post]");
    if (postTarget && (event.key === "Enter" || event.key === " ")) { event.preventDefault(); state.selectedPost = Number(postTarget.dataset.post); location.hash = "post"; }
  });
  
  document.addEventListener("submit", async (event) => {
    if (event.target.id === "income-form") { event.preventDefault(); const data = new FormData(event.target); state.living.income = Math.max(0, Number(data.get("income") || 0)); saveLivingState(); syncIncomeQuietly(); render(); showToast("이번 달 수입을 저장했어요"); return; }
    if (event.target.id === "expense-form") { event.preventDefault(); const data = new FormData(event.target); const content = data.get("content").trim(); const amount = Number(data.get("amount")); if (!content || amount <= 0) return; state.living.expenses.unshift({ id: createLocalId("expense"), content, amount, date: new Date().toISOString().slice(0, 10) }); saveLivingState(); syncFinanceQuietly(); render(); showToast("지출을 추가했어요"); return; }
    if (event.target.id === "rent-form") { event.preventDefault(); const data = new FormData(event.target); const startMonth = data.get("startMonth"); const endMonth = data.get("endMonth"); if (endMonth < startMonth) { showToast("계약 종료일을 다시 확인해주세요"); return; } state.living.rent = { amount: Math.max(0, Number(data.get("amount") || 0)), startMonth, endMonth, dueDay: Math.min(31, Math.max(1, Number(data.get("dueDay") || 1))) }; saveLivingState(); syncFinanceQuietly(); render(); showToast("월세 정보를 저장했어요"); return; }
    if (event.target.id === "recurring-form") { event.preventDefault(); const data = new FormData(event.target); const content = data.get("content").trim(); const amount = Number(data.get("amount")); if (!content || amount <= 0) return; state.living.recurring.push({ id: createLocalId("recurring"), category: data.get("category"), content, amount }); saveLivingState(); syncFinanceQuietly(); render(); showToast("정기 지출을 추가했어요"); return; }
    if (event.target.id === "login-form") { event.preventDefault(); const data = new FormData(event.target); const success = await loginAccount(data.get("email").trim(), data.get("password")); if (success) { location.hash = needsInitialProfile() ? "onboarding" : "home"; showToast("로그인했어요"); } return; }
    if (event.target.id === "forgot-password-form") { event.preventDefault(); const data = new FormData(event.target); await requestPasswordReset(data.get("email").trim()); return; }
    if (event.target.id === "reset-password-form") { event.preventDefault(); const data = new FormData(event.target); if (data.get("password") !== data.get("passwordConfirm")) { state.authError = "비밀번호 확인이 일치하지 않습니다."; render(); return; } await completePasswordReset(data.get("password")); return; }
    if (event.target.id === "signup-form") { event.preventDefault(); const data = new FormData(event.target); if (data.get("password") !== data.get("passwordConfirm")) { state.authError = "비밀번호 확인이 일치하지 않습니다."; render(); return; } const result = await createAccount("이음 사용자", data.get("email").trim(), data.get("password")); if (result.success) { if (result.needsEmailConfirmation) { location.hash = "login"; showToast("이메일 확인 후 로그인해주세요"); } else { location.hash = "onboarding"; showToast("계정을 만들었어요"); } } return; }
    if (event.target.id === "onboarding-form") { event.preventDefault(); const data = new FormData(event.target); const age = Number(data.get("age")); if (age < 14 || age > 99) { state.onboardingError = "나이는 14세부터 99세 사이로 입력해주세요."; render(); return; } const success = await completeInitialProfile({ displayName: data.get("displayName").trim(), age, region: data.get("region").trim(), income: data.get("income") }); if (success) { location.hash = "home"; showToast("맞춤 정보를 저장했어요"); } return; }
    if (event.target.id === "comment-form") { event.preventDefault(); if (!state.authUser) { location.hash = "login"; showToast("로그인 후 댓글을 작성할 수 있어요"); return; } const input = event.target.elements.comment; const body = input.value.trim(); const post = state.posts[state.selectedPost] || state.posts[0]; if (!body || !post?.id) return; const button = event.target.querySelector("button"); button.disabled = true; try { await saveCommunityComment({ postId: post.id, body }); showToast("댓글을 등록했어요"); } catch (error) { console.error("댓글 저장 실패", error); button.disabled = false; showToast("댓글을 저장하지 못했어요"); } return; }
    if (event.target.id === "reply-form") { event.preventDefault(); if (!state.authUser) { location.hash = "login"; showToast("로그인 후 답글을 작성할 수 있어요"); return; } const body = event.target.elements.reply.value.trim(); const post = state.posts[state.selectedPost] || state.posts[0]; const comment = post?.commentList?.[Number(event.target.dataset.replyIndex)]; if (!body || !post?.id || !comment?.id) return; const button = event.target.querySelector("button"); button.disabled = true; try { await saveCommunityComment({ postId: post.id, parentId: comment.id, body }); showToast("답글을 등록했어요"); } catch (error) { console.error("답글 저장 실패", error); button.disabled = false; showToast("답글을 저장하지 못했어요"); } return; }
    if (event.target.id === "chat-form") { event.preventDefault(); if (!state.authUser) { location.hash = "login"; showToast("로그인 후 AI 상담을 이용할 수 있어요"); return; } if (state.chatLoading) return; const input = event.target.elements.message; const question = input.value.trim(); if (!question) return; input.value = ""; try { await sendChatMessage(question); } catch { showToast("AI 답변을 불러오지 못했어요"); } return; }
    if (event.target.id === "write-form") { event.preventDefault(); if (!state.authUser) { location.hash = "login"; showToast("로그인 후 글을 작성할 수 있어요"); return; } const data = new FormData(event.target); const button = event.target.querySelector("button[type=submit]"); button.disabled = true; button.textContent = "게시 중..."; try { const kind = data.get("kind") || state.communityKind; const category = data.get("category"); await saveCommunityPost({ kind, category, title: data.get("title").trim(), body: data.get("body").trim() }); state.communityKind = kind; state.communityFilter = category; location.hash = "community"; showToast("게시글을 등록했어요"); } catch (error) { console.error("게시글 저장 실패", error); button.disabled = false; button.textContent = "게시하기"; showToast("게시글을 저장하지 못했어요"); } return; }
    if (event.target.id === "recommend-form") { event.preventDefault(); const data = new FormData(event.target); const age = Number(data.get("age")); if (age < 14 || age > 99) { showToast("나이는 14세부터 99세 사이로 입력해주세요"); return; } const displayName = data.get("displayName").trim(); const region = data.get("region").trim(); if (!displayName || !region) { showToast("이름과 거주지역을 입력해주세요"); return; } const button = event.target.querySelector("button[type=submit]"); button.disabled = true; try { await savePersonalInfo({ displayName, age, gender: data.get("gender"), region, income: data.get("salary").trim() }); showToast("내 정보를 저장했어요"); } catch (error) { console.error("내 정보 저장 실패", error); button.disabled = false; showToast("내 정보를 저장하지 못했어요"); } return; }
  });
}



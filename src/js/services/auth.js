function authMessage(error) {
  const message = error?.message || "계정 처리 중 오류가 발생했습니다.";
  if (message.includes("Invalid login credentials")) return "이메일 또는 비밀번호가 올바르지 않습니다.";
  if (message.includes("Email not confirmed")) return "이메일 확인을 완료한 뒤 로그인해주세요.";
  if (message.includes("User already registered")) return "이미 가입된 이메일입니다.";
  if (message.includes("Password should be")) return "비밀번호는 6자 이상 입력해주세요.";
  if (message.includes("rate limit")) return "인증 메일 요청이 너무 많아요. 잠시 후 다시 시도해주세요.";
  return message;
}

async function applySession(session, renderUpdate = true) {
  state.authUser = session?.user || null;
  state.customInfo = { gender: state.authUser?.user_metadata?.gender || "" };
  if (state.authUser) {
    state.welcomeCompleted = true;
    localStorage.setItem("ieum-welcome-completed", "true");
  }
  state.posts.forEach((post) => { post.liked = Boolean(state.authUser && post.likedUserIds?.includes(state.authUser.id)); });
  state.profile = null;
  if (state.authUser) {
    try { state.profile = await fetchProfile(state.authUser.id); }
    catch (error) { console.error("프로필을 불러오지 못했습니다.", error); }
    try { await loadUserIncome(); }
    catch (error) {
      state.living.income = 0;
      console.error("계정 수입 정보를 불러오지 못했습니다.", error);
    }
    try { await loadMonthlyFinances(); }
    catch (error) { console.error("월별 수입·지출을 불러오지 못했습니다.", error); }
  }
  if (renderUpdate) render();
}

async function initializeAuth({ renderUpdates = true } = {}) {
  if (!isSupabaseConfigured()) {
    state.authLoading = false;
    if (renderUpdates) render();
    return;
  }

  try {
    const session = await getVerifiedSession();
    await applySession(session, renderUpdates);
    subscribeToAuthChanges((nextSession, event) => setTimeout(() => {
      if (event === "PASSWORD_RECOVERY") {
        state.authRecovery = true;
        state.route = "reset-password";
        history.replaceState(null, "", `${location.pathname}?reset-password=1#reset-password`);
      }
      applySession(nextSession);
    }, 0));
  } catch (error) {
    console.error("로그인 상태를 확인하지 못했습니다.", error);
  } finally {
    state.authLoading = false;
    if (renderUpdates) render();
  }
}

async function loginAccount(email, password) {
  state.authEmail = email;
  state.authSubmitting = true;
  state.authError = null;
  state.authNotice = null;
  render();
  try {
    const { session } = await signInWithEmail({ email, password });
    await applySession(session);
    state.authEmail = "";
    return true;
  } catch (error) {
    state.authError = authMessage(error);
    return false;
  } finally {
    state.authSubmitting = false;
    render();
  }
}

async function requestPasswordReset(email) {
  state.authEmail = email;
  state.authSubmitting = true;
  state.authError = null;
  state.authNotice = null;
  render();
  try {
    if (!["http:", "https:"].includes(location.protocol)) {
      throw new Error("비밀번호 재설정 메일은 배포 주소나 로컬 서버에서 요청해주세요.");
    }
    const redirectTo = `${location.origin}${location.pathname}?reset-password=1`;
    await sendPasswordResetEmail(email, redirectTo);
    state.authNotice = "재설정 메일을 보냈어요. 메일함과 스팸함을 확인해주세요.";
    return true;
  } catch (error) {
    state.authError = authMessage(error);
    return false;
  } finally {
    state.authSubmitting = false;
    render();
  }
}

async function completePasswordReset(password) {
  if (!state.authRecovery || !state.authUser) {
    state.authError = "재설정 링크가 만료되었거나 유효하지 않아요. 새 링크를 요청해주세요.";
    render();
    return false;
  }
  state.authSubmitting = true;
  state.authError = null;
  render();
  try {
    await updatePassword(password);
    await signOutUser();
    state.authUser = null;
    state.profile = null;
    state.authRecovery = false;
    state.authEmail = "";
    state.authNotice = "비밀번호가 변경되었어요. 새 비밀번호로 로그인해주세요.";
    state.route = "login";
    history.replaceState(null, "", `${location.pathname}#login`);
    return true;
  } catch (error) {
    state.authError = authMessage(error);
    return false;
  } finally {
    state.authSubmitting = false;
    render();
  }
}

async function loginWithGoogleAccount() {
  state.authError = null;
  if (location.protocol === "file:") {
    state.authError = "Google 로그인은 파일 직접 열기에서는 사용할 수 없어요. 배포 주소나 로컬 서버로 앱을 열어주세요.";
    render();
    return false;
  }
  try {
    await signInWithGoogle();
    return true;
  } catch (error) {
    state.authError = authMessage(error);
    render();
    return false;
  }
}

async function createAccount(displayName, email, password) {
  state.authSubmitting = true;
  state.authError = null;
  state.authNotice = null;
  render();
  try {
    const data = await signUpWithEmail({ email, password, displayName });
    if (data.session) await applySession(data.session);
    if (!data.session) state.authNotice = `${email} 주소로 보낸 인증 메일을 확인한 뒤 로그인해주세요. 메일이 없으면 스팸함도 확인해주세요.`;
    return { success: true, needsEmailConfirmation: !data.session };
  } catch (error) {
    state.authError = authMessage(error);
    return { success: false, needsEmailConfirmation: false };
  } finally {
    state.authSubmitting = false;
    render();
  }
}

async function logoutAccount() {
  await signOutUser();
  state.authUser = null;
  state.profile = null;
  state.customInfo = { gender: "" };
  state.guestMode = false;
  sessionStorage.removeItem("ieum-guest-mode");
  render();
}

async function savePersonalInfo({ displayName, age, gender, region, income }) {
  if (!state.authUser) throw new Error("로그인이 필요합니다.");
  const birthYear = new Date().getFullYear() - Number(age) + 1;
  state.profile = await updateInitialProfile({ userId: state.authUser.id, displayName, region, birthYear });
  state.authUser = await updateGenderMetadata(gender);
  const incomeProvided = income !== "" && income !== null && income !== undefined;
  state.living.income = incomeProvided ? Math.max(0, Number(income)) : 0;
  await syncUserIncome(incomeProvided ? state.living.income : null, incomeProvided ? "provided" : "skipped");
  await syncCurrentMonthlyFinance();
  state.customInfo = { gender };
  localStorage.setItem("ieum-living", JSON.stringify(state.living));
  render();
}

function needsInitialProfile() {
  if (!state.authUser) return false;
  return !state.profile?.display_name || !state.profile?.region || !state.profile?.birth_year;
}

async function completeInitialProfile({ displayName, age, region, income }) {
  if (!state.authUser) throw new Error("로그인이 필요합니다.");
  state.onboardingSubmitting = true;
  state.onboardingError = null;
  render();
  try {
    const numericAge = Number(age);
    const birthYear = new Date().getFullYear() - numericAge + 1;
    state.profile = await updateInitialProfile({
      userId: state.authUser.id,
      displayName,
      region,
      birthYear
    });
    const incomeProvided = income !== "" && income !== null && income !== undefined;
    if (incomeProvided) {
      state.living.income = Math.max(0, Number(income));
      localStorage.setItem("ieum-living", JSON.stringify(state.living));
    } else {
      state.living.income = 0;
      localStorage.setItem("ieum-living", JSON.stringify(state.living));
    }
    await syncUserIncome(incomeProvided ? state.living.income : null, incomeProvided ? "provided" : "skipped");
    try { await syncCurrentMonthlyFinance(); }
    catch (error) { console.error("월별 수입·지출을 저장하지 못했습니다.", error); }
    return true;
  } catch (error) {
    console.error("최초 프로필 저장 실패", error);
    state.onboardingError = error?.message || "정보를 저장하지 못했습니다.";
    return false;
  } finally {
    state.onboardingSubmitting = false;
    render();
  }
}



const resetPasswordView = () => `<div class="page auth-page">
  <header class="screen-head"><button class="screen-back" type="button" data-route="login" aria-label="로그인으로 돌아가기">${icon("arrow_back")}</button><div><h1>새 비밀번호 설정</h1><p>새로 사용할 비밀번호를 입력해주세요</p></div></header>
  <section class="card auth-card">
    ${!state.authRecovery || !state.authUser ? `<p class="auth-error" role="alert">재설정 링크가 만료되었거나 유효하지 않아요. 새 링크를 요청해주세요.</p><div class="auth-switch"><button type="button" data-route="forgot-password">재설정 메일 다시 받기</button></div>` : `
    <form id="reset-password-form" class="auth-form">
      <label>새 비밀번호<input name="password" type="password" minlength="6" required autocomplete="new-password" placeholder="비밀번호 6자 이상"></label>
      <label>새 비밀번호 확인<input name="passwordConfirm" type="password" minlength="6" required autocomplete="new-password" placeholder="비밀번호를 다시 입력해주세요"></label>
      ${state.authError ? `<p class="auth-error" role="alert">${state.authError}</p>` : ""}
      <button class="secondary-button" type="submit" ${state.authSubmitting ? "disabled" : ""}>${state.authSubmitting ? "변경 중..." : "비밀번호 변경하기"}</button>
    </form>`}
  </section>
</div>`;



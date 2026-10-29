const forgotPasswordView = () => `<div class="page auth-page">
  <header class="screen-head"><button class="screen-back" type="button" data-route="login" aria-label="로그인으로 돌아가기">${icon("arrow_back")}</button><div><h1>비밀번호 찾기</h1><p>가입한 이메일로 재설정 링크를 보내드려요</p></div></header>
  <section class="card auth-card">
    ${state.authNotice ? `<p class="auth-notice" role="status">${state.authNotice}</p>` : ""}
    <form id="forgot-password-form" class="auth-form">
      <label>이메일<input name="email" type="email" required autocomplete="email" placeholder="name@example.com" value="${escapeHtml(state.authEmail)}"></label>
      ${state.authError ? `<p class="auth-error" role="alert">${state.authError}</p>` : ""}
      <button class="secondary-button" type="submit" ${state.authSubmitting ? "disabled" : ""}>${state.authSubmitting ? "보내는 중..." : "재설정 메일 보내기"}</button>
    </form>
    <div class="auth-switch"><button type="button" data-route="login">로그인으로 돌아가기</button></div>
  </section>
</div>`;



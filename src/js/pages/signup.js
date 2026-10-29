const signupView = () => `<div class="page auth-page">
  <header class="screen-head"><button class="screen-back" data-route="login" aria-label="로그인으로 돌아가기">${icon("arrow_back")}</button><div><h1>계정 만들기</h1><p>이메일로 이음 계정을 만들어요</p></div></header>
  <section class="card auth-card"><form id="signup-form" class="auth-form">
    <label>이메일<input name="email" type="email" required autocomplete="email" placeholder="name@example.com"></label>
    <label>비밀번호<input name="password" type="password" minlength="6" required autocomplete="new-password" placeholder="비밀번호 6자 이상"></label>
    <label>비밀번호 확인<input name="passwordConfirm" type="password" minlength="6" required autocomplete="new-password" placeholder="비밀번호를 다시 입력하세요"></label>
    ${state.authError ? `<p class="auth-error" role="alert">${state.authError}</p>` : ""}
    <button class="secondary-button" type="submit" ${state.authSubmitting ? "disabled" : ""}>${state.authSubmitting ? "가입 중..." : "계정 만들기"}</button>
  </form><div class="auth-switch"><span>이미 계정이 있나요?</span><button type="button" data-route="login">로그인</button></div></section>
</div>`;



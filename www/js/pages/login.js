import { state } from "../core/state.js";
import { escapeHtml, icon } from "../core/utils.js";

export const loginView = () => `<div class="page auth-page">
  <header class="screen-head"><button class="screen-back" data-route="${state.guestMode ? "profile" : "welcome"}" aria-label="이전 화면으로 돌아가기">${icon("arrow_back")}</button><div><h1>로그인</h1><p>이음 계정으로 계속하세요</p></div></header>
  <section class="card auth-card">
    ${state.authNotice ? `<p class="auth-notice" role="status">${state.authNotice}</p>` : ""}
    <form id="login-form" class="auth-form">
      <label>이메일<input name="email" type="email" required autocomplete="email" placeholder="name@example.com" value="${escapeHtml(state.authEmail)}"></label>
      <label>비밀번호<input name="password" type="password" minlength="6" required autocomplete="current-password" placeholder="비밀번호 6자 이상"></label>
      <button class="auth-forgot-link" type="button" data-route="forgot-password">비밀번호를 잊으셨나요?</button>
      ${state.authError ? `<p class="auth-error" role="alert">${state.authError}</p>` : ""}
      <button class="secondary-button" type="submit" ${state.authSubmitting ? "disabled" : ""}>${state.authSubmitting ? "로그인 중..." : "로그인"}</button>
    </form>
    <div class="auth-switch"><span>처음 이용하시나요?</span><button type="button" data-route="signup">계정 만들기</button></div>
  </section>
</div>`;

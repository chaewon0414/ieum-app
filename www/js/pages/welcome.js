export const welcomeView = () => `<div class="page welcome-page">
  <section class="welcome-hero" aria-label="집과 집을 노란 선으로 연결하는 도시">
    <img class="welcome-art" src="assets/welcome-city-no-bg-dots.png" alt="" />
    <div class="welcome-brand" aria-label="이음">
      <svg class="welcome-brand-icon" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M5 19.5c3.5-7 7.5-7 11-3.5s7.5 3.5 11-3.5" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>
        <circle cx="5" cy="19.5" r="3" fill="currentColor"/>
        <circle cx="27" cy="12.5" r="3" fill="currentColor"/>
      </svg>
      <span>이음</span>
    </div>
  </section>
  <section class="welcome-actions" aria-label="시작하기">
    <svg class="welcome-thread" viewBox="0 -130 430 280" preserveAspectRatio="none" aria-hidden="true">
      <path d="M466 -117 C421 -112 420 15 354 47 C304 56 258 49 216 49 S94 50 52 49 C18 49 16 94 51 124 C91 143 141 119 216 125 S356 123 458 124" fill="none" stroke="#fff0bd" stroke-width="13" stroke-linecap="round"/>
      <path d="M466 -117 C421 -112 420 15 354 47 C304 56 258 49 216 49 S94 50 52 49 C18 49 16 94 51 124 C91 143 141 119 216 125 S356 123 458 124" fill="none" stroke="#f8c323" stroke-width="5" stroke-linecap="round"/>
    </svg>
    <button type="button" class="welcome-primary" data-route="login">로그인</button>
    <button type="button" class="welcome-secondary" data-route="signup">계정 만들기</button>
    <button type="button" class="welcome-skip" data-skip-login>건너뛰고 시작하기</button>
    <small>로그인하지 않아도 정책과 기본 화면을 둘러볼 수 있어요.</small>
  </section>
</div>`;

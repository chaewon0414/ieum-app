// 서버가 꺼져 있으면(config.js가 비어 있으면) 오프라인 모드로 휴대폰 안에 저장하며 동작합니다.
registerEventHandlers();
initializeRouter();

const fontsReady = document.fonts
  ? Promise.race([document.fonts.load('20px "Material Symbols Rounded"'), new Promise((resolve) => setTimeout(resolve, 2500))])
  : Promise.resolve();

Promise.all([
  loadPolicies({ renderUpdates: false }),
  loadCommunity({ renderUpdates: false }),
  initializeAuth({ renderUpdates: false }),
  fontsReady
]).finally(() => render());

const refreshCommunityNotifications = () => {
  if (document.hidden || !state.authUser || !["home", "community", "profile", "notifications"].includes(state.route)) return;
  loadCommunity({ renderUpdates: false }).then(render).catch((error) => console.error("커뮤니티 알림 갱신 실패", error));
};
document.addEventListener("visibilitychange", refreshCommunityNotifications);
setInterval(refreshCommunityNotifications, 60000);

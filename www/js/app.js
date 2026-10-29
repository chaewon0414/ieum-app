import { initializeRouter } from "./core/router.js";
import { registerEventHandlers } from "./events/handlers.js";
import { render } from "./core/render.js";
import { loadPolicies } from "./services/policies.js";
import { loadCommunity } from "./services/community.js";
import { initializeAuth } from "./services/auth.js";
import { state } from "./core/state.js";

registerEventHandlers();
initializeRouter();

Promise.all([
  loadPolicies({ renderUpdates: false }),
  loadCommunity({ renderUpdates: false }),
  initializeAuth({ renderUpdates: false }),
  document.fonts ? document.fonts.load('20px "Material Symbols Rounded"') : Promise.resolve()
]).finally(() => render());

const refreshCommunityNotifications = () => {
  if (document.hidden || !state.authUser || !["home", "community", "profile", "notifications"].includes(state.route)) return;
  loadCommunity({ renderUpdates: false }).then(render).catch((error) => console.error("커뮤니티 알림 갱신 실패", error));
};
document.addEventListener("visibilitychange", refreshCommunityNotifications);
setInterval(refreshCommunityNotifications, 60000);

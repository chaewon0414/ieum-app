import { state } from "./state.js";
import { render } from "./render.js";

export function initializeRouter() {
  window.addEventListener("hashchange", () => {
    state.route = location.hash.slice(1) || "home";
    render();
    window.scrollTo({ top: 0 });
  });
}

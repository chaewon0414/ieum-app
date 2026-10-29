function initializeRouter() {
  window.addEventListener("hashchange", () => {
    state.route = location.hash.slice(1) || "home";
    render();
    window.scrollTo({ top: 0 });
  });
}



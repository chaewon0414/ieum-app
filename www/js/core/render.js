import { state } from "./state.js";
import { icon } from "./utils.js";
import { views } from "../pages/views.js";
import { getNotifications } from "../services/notifications.js";

const app = document.querySelector("#app");
const contextAction = document.querySelector("#context-action");
export function render() {
  let route = views[state.route] ? state.route : "home";
  if (state.authRecovery) route = "reset-password";
  if (!state.authLoading && !state.guestMode && !state.authUser && !["welcome", "login", "signup", "forgot-password", "reset-password"].includes(route)) route = "welcome";
  const initialProfileNeeded = Boolean(state.authUser && (!state.profile?.display_name || !state.profile?.region || !state.profile?.birth_year));
  if (!state.authLoading && initialProfileNeeded && route !== "onboarding" && route !== "reset-password") route = "onboarding";
  if (["write", "chat", "support-status", "recommend"].includes(route) && !state.authLoading && !state.authUser) route = "login";
  state.route = route;
  document.body.classList.toggle("home-lock", route === "home");
  document.body.classList.toggle("post-mode", route === "post");
  document.body.classList.toggle("living-mode", route === "living");
  document.body.classList.toggle("chat-mode", route === "chat");
  document.body.classList.toggle("auth-flow-mode", ["welcome", "login", "forgot-password", "reset-password", "signup", "onboarding"].includes(route));
  app.innerHTML = views[route]();
  document.querySelectorAll(".bottom-nav button").forEach(btn => btn.classList.toggle("active", btn.dataset.route === route || (["living", "living-settings", "support-status", "jobs", "chat", "notifications"].includes(route) && btn.dataset.route === "home") || (["recommend", "notification-settings"].includes(route) && btn.dataset.route === "profile") || (["write", "post"].includes(route) && btn.dataset.route === "community")));
  document.title = `${route === "home" ? "이음" : ({ policies:"지원정책", recommend:"맞춤 추천", living:"생활 관리", "living-settings":"생활비 설정", "support-status":"나의 지원 현황", community:"커뮤니티", jobs:"취업 지원", profile:"내 정보", chat:"AI 상담", write:"글쓰기", post:"게시글", login:"로그인", "forgot-password":"비밀번호 찾기", "reset-password":"새 비밀번호 설정", signup:"계정 만들기", welcome:"환영합니다", onboarding:"첫 설정", notifications:"알림", "notification-settings":"알림 설정" })[route]} | 이음`;
  const actionType = ["home", "policies"].includes(route) ? "chat" : route === "community" ? "write" : "";
  contextAction.className = `context-action${actionType ? " visible" : ""}${actionType === "write" ? " write" : ""}`;
  contextAction.dataset.action = actionType;
  contextAction.innerHTML = icon(actionType === "write" ? "edit" : "smart_toy");
  contextAction.setAttribute("aria-label", actionType === "write" ? "새 글 작성" : "AI 상담 열기");
  const topAvatar = document.querySelector(".topbar .avatar span");
  const topbarActions = document.querySelector(".topbar-actions");
  const accountName = state.profile?.display_name || state.authUser?.user_metadata?.display_name;
  if (topAvatar) topAvatar.textContent = accountName?.[0] || "지";
  if (topbarActions) topbarActions.hidden = false;
  const unread = getNotifications().filter((item) => !state.notificationRead[item.id]).length;
  const notificationButton = document.querySelector(".topbar [data-route=notifications]");
  if (notificationButton) { notificationButton.setAttribute("aria-label", `알림${unread ? ` ${unread}개 읽지 않음` : ""}`); notificationButton.querySelector("i").hidden = unread === 0; }
  document.documentElement.classList.add("app-ready");
}

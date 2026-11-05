import { state } from "../core/state.js";
import { escapeHtml, icon } from "../core/utils.js";
import { getNotifications } from "../services/notifications.js";

export const notificationsView = () => {
  const items = getNotifications();
  return `<div class="page notifications-page"><section class="screen-head"><button class="screen-back" data-route="home" aria-label="홈으로 돌아가기">${icon("arrow_back")}</button><div><h1>알림</h1><p>놓치기 쉬운 소식을 모아봤어요</p></div></section>
    <div class="notification-toolbar"><strong>알림 ${items.length}개</strong><button type="button" data-notification-read-all>모두 읽음</button></div>
    <div class="notification-list">${items.length ? items.map((item) => `<button type="button" class="card notification-item ${state.notificationRead[item.id] ? "read" : ""}" data-notification-id="${escapeHtml(item.id)}"><span class="notification-item-icon">${icon(item.type === "community" ? "forum" : item.type === "policy" ? "event" : "home")}</span><span><b>${escapeHtml(item.title)}</b><small>${escapeHtml(item.body)}</small></span>${state.notificationRead[item.id] ? "" : `<i aria-label="읽지 않음"></i>`}</button>`).join("") : `<div class="card empty">새 알림이 없어요.</div>`}</div></div>`;
};

export const notificationSettingsView = () => `<div class="page notifications-page"><section class="screen-head"><button class="screen-back" data-route="profile" aria-label="내 정보로 돌아가기">${icon("arrow_back")}</button><div><h1>알림 설정</h1><p>받을 알림을 선택하세요</p></div></section>
  <section class="card notification-settings">${[["community", "댓글·답글"], ["policy", "저장한 정책 마감"], ["rent", "월세 납부일"]].map(([key, label]) => `<label><span>${label}</span><input type="checkbox" data-notification-setting="${key}" ${state.notificationSettings[key] ? "checked" : ""}></label>`).join("")}</section></div>`;

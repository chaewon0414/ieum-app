import { state } from "../core/state.js";
import { icon } from "../core/utils.js";

const safeChatText = (text) => String(text).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[character]);

export const chatView = () => {
  const nickname = state.profile?.display_name || state.authUser?.user_metadata?.display_name || state.authUser?.user_metadata?.name || "사용자";
  return `<div class="page"><header class="screen-head"><button class="screen-back" data-route="home" aria-label="홈으로 돌아가기">${icon("arrow_back")}</button><div><h1>이음 AI</h1><p>${safeChatText(nickname)}님을 위한 청년 지원 상담</p></div></header><section class="chat-screen"><div id="chat-messages" class="chat-messages">${state.chat.map((message) => `<div class="chat-bubble ${message.type === "user" ? "user" : "bot"}">${safeChatText(message.text)}</div>`).join("")}${state.chatLoading ? `<div class="chat-bubble bot chat-thinking">답변을 생각하고 있어요...</div>` : ""}</div><div class="chat-controls"><form id="chat-form" class="chat-form"><input name="message" maxlength="2000" autocomplete="off" placeholder="궁금한 내용을 입력하세요" aria-label="AI에게 메시지 보내기" ${state.chatLoading ? "disabled" : ""}><button aria-label="전송" ${state.chatLoading ? "disabled" : ""}>${icon("send")}</button></form></div></section></div>`;
};

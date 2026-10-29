import { fetchGeminiAnswer } from "../api/ai-api.js";
import { state } from "../core/state.js";
import { render } from "../core/render.js";

export function addChatMessage(text, type = "user") {
  state.chat.push({ text, type });
  render();
  requestAnimationFrame(() => { const messages = document.querySelector("#chat-messages"); if (messages) messages.scrollTop = messages.scrollHeight; });
}

export async function sendChatMessage(question) {
  if (!state.authUser) throw new Error("로그인이 필요합니다.");
  state.chat.push({ text: question, type: "user" });
  state.chatLoading = true;
  render();
  requestAnimationFrame(() => { const messages = document.querySelector("#chat-messages"); if (messages) messages.scrollTop = messages.scrollHeight; });

  try {
    const answer = await fetchGeminiAnswer(state.chat);
    state.chat.push({ text: answer, type: "bot" });
  } catch (error) {
    console.error("Gemini 채팅 실패", error);
    state.chat.push({ text: `AI 연결 오류: ${error?.message || "답변을 불러오지 못했습니다."}`, type: "bot" });
    throw error;
  } finally {
    state.chatLoading = false;
    render();
    requestAnimationFrame(() => { const messages = document.querySelector("#chat-messages"); if (messages) messages.scrollTop = messages.scrollHeight; });
  }
}

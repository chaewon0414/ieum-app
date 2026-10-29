function addChatMessage(text, type = "user") {
  state.chat.push({ text, type });
  render();
  requestAnimationFrame(() => { const messages = document.querySelector("#chat-messages"); if (messages) messages.scrollTop = messages.scrollHeight; });
}

function currentUserName() {
  return state.profile?.display_name || state.authUser?.user_metadata?.display_name || "";
}

function chatGreetingText() {
  const name = currentUserName();
  return `안녕하세요${name ? `, ${name}님` : ""}! 주거·생활·취업 정책 중 어떤 도움이 필요하세요?`;
}

async function sendChatMessage(question) {
  if (!state.authUser) throw new Error("로그인이 필요합니다.");
  state.chat.forEach((message) => { if (message.greeting) message.text = chatGreetingText(); });
  state.chat.push({ text: question, type: "user" });
  state.chatLoading = true;
  render();
  requestAnimationFrame(() => { const messages = document.querySelector("#chat-messages"); if (messages) messages.scrollTop = messages.scrollHeight; });

  try {
    const answer = await fetchGeminiAnswer(state.chat, currentUserName());
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



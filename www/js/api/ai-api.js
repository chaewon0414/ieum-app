import { getSupabaseClient } from "./supabase-client.js";

export async function fetchGeminiAnswer(messages) {
  const client = getSupabaseClient();
  if (!client) throw new Error("Supabase가 연결되지 않았습니다.");

  const { data, error } = await client.functions.invoke("ai-chat", { body: { messages } });
  if (error) {
    let detail = error.message || "Edge Function 호출 실패";
    try {
      const body = await error.context?.clone?.().json();
      if (body?.error) detail = body.error;
      else if (body?.message) detail = body.message;
    } catch {}
    const status = error.context?.status;
    throw new Error(status ? `${detail} (${status})` : detail);
  }
  if (data?.error) throw new Error(data.error);
  if (!data?.answer) throw new Error("AI 답변이 없습니다.");
  return data.answer;
}

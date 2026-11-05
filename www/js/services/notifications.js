import { state } from "../core/state.js";

const dayMs = 86400000;
const startOfDay = (value) => { const date = new Date(value); return new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime(); };
const persistRead = () => localStorage.setItem("ieum-notification-read", JSON.stringify(state.notificationRead));

export function getNotifications() {
  const today = startOfDay(Date.now());
  const items = [];
  const userId = state.authUser?.id;

  if (userId && state.notificationSettings.community && state.communityDataSource === "supabase") {
    state.posts.forEach((post, postIndex) => {
      post.commentList?.forEach((comment) => {
        if (post.authorId === userId && comment.authorId !== userId) items.push({ id: `comment:${comment.id}`, type: "community", title: "내 글에 댓글이 달렸어요", body: `${comment.author} · ${post.title}`, route: "post", postIndex, time: new Date(comment.createdAt).getTime() });
        comment.replies?.forEach((reply) => {
          if (comment.authorId === userId && reply.authorId !== userId) items.push({ id: `reply:${reply.id}`, type: "community", title: "내 댓글에 답글이 달렸어요", body: `${reply.author} · ${post.title}`, route: "post", postIndex, time: new Date(reply.createdAt).getTime() });
        });
      });
    });
  }

  if (state.notificationSettings.policy) state.policies.forEach((policy) => {
    if (!state.saved.has(String(policy.id || policy.title))) return;
    const match = policy.deadline?.match(/(\d{4})[.-](\d{1,2})[.-](\d{1,2})/);
    if (!match) return;
    const deadline = new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3])).getTime();
    const days = Math.round((deadline - today) / dayMs);
    if (days >= 0 && days <= 7) items.push({ id: `policy:${policy.id || policy.title}:${match[0]}`, type: "policy", title: days === 0 ? "저장한 정책이 오늘 마감돼요" : `저장한 정책이 ${days}일 뒤 마감돼요`, body: policy.title, route: "policies", time: deadline });
  });

  if (state.notificationSettings.rent && Number(state.living.rent?.amount) > 0 && Number(state.living.rent?.dueDay) > 0) {
    const dueDay = Math.min(31, Math.max(1, Number(state.living.rent.dueDay) || 1));
    const now = new Date();
    for (let offset = 0; offset <= 1; offset++) {
      const monthEnd = new Date(now.getFullYear(), now.getMonth() + offset + 1, 0).getDate();
      const due = new Date(now.getFullYear(), now.getMonth() + offset, Math.min(dueDay, monthEnd)).getTime();
      const days = Math.round((due - today) / dayMs);
      if (days >= 0 && days <= 3) { items.push({ id: `rent:${new Date(due).getFullYear()}-${new Date(due).getMonth() + 1}`, type: "rent", title: days === 0 ? "오늘은 월세 납부일이에요" : `월세 납부일이 ${days}일 남았어요`, body: `${dueDay}일 · ${Number(state.living.rent.amount).toLocaleString("ko-KR")}원`, route: "living", time: due }); break; }
    }
  }
  return items.sort((a, b) => (state.notificationRead[a.id] ? 1 : 0) - (state.notificationRead[b.id] ? 1 : 0) || b.time - a.time);
}

export function markNotificationRead(id) { state.notificationRead[id] = true; persistRead(); }
export function markAllNotificationsRead() { getNotifications().forEach((item) => { state.notificationRead[item.id] = true; }); persistRead(); }

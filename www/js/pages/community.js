import { state } from "../core/state.js";
import { icon } from "../core/utils.js";
import { policyCard } from "../components/policy-card.js";
export const communityView = () => {
  const kinds = ["질문", "모임", "꿀팁"];
  const categories = ["생활", "취업", "주거", "관계", "금융"];
  const posts = state.posts
    .map((post, index) => ({ post, index }))
    .filter(({ post }) => (post.kind || "질문") === state.communityKind && post.category === state.communityFilter);
  const status = state.communityLoading ? `<div class="card empty">게시글을 불러오는 중이에요.</div>` : state.communityError ? `<div class="card empty">${state.communityError}</div>` : "";
  return `<div class="page community-page"><div class="community-filter-panel"><nav class="community-kinds" aria-label="게시글 유형">${kinds.map(kind => `<button type="button" class="community-kind ${kind === state.communityKind ? "active" : ""}" data-community-kind="${kind}" aria-pressed="${kind === state.communityKind}">${kind}</button>`).join("")}</nav><nav class="community-categories" aria-label="게시글 주제">${categories.map(category => `<button type="button" class="community-category ${category === state.communityFilter ? "active" : ""}" data-community-filter="${category}" aria-pressed="${category === state.communityFilter}">${category}</button>`).join("")}</nav></div><section class="feed">${status}<div class="list feed-list">${posts.map(({ post: p, index }) => `<article class="card feed-card" data-post="${index}" tabindex="0" role="button" aria-label="${p.title} 본문 보기"><div class="feed-category">${p.category}</div><div class="feed-content-row"><div class="feed-copy"><h3>${p.title}</h3><p>${p.body}</p></div>${p.image ? `<img class="feed-image" src="${p.image}" alt="${p.title} 첨부 이미지" loading="lazy">` : ""}</div><div class="feed-footer"><span>${p.author} · ${p.time}</span><div class="meta"><button class="meta-action ${p.liked ? "liked" : ""}" data-like-post="${index}" aria-label="좋아요">${icon("favorite")} ${p.likes}</button><span>${icon("chat_bubble")} ${p.comments}</span></div></div></article>`).join("") || (!state.communityLoading ? `<div class="community-empty">선택한 분류의 게시글이 아직 없어요.</div>` : "")}</div></section></div>`;
};

async function loadCommunity({ renderUpdates = true } = {}) {
  if (!isSupabaseConfigured()) return;
  state.communityLoading = true;
  state.communityError = null;
  if (renderUpdates) render();

  try {
    const posts = await fetchCommunityPosts();
    state.posts = posts || [];
    state.posts.forEach((post) => { post.liked = Boolean(state.authUser && post.likedUserIds?.includes(state.authUser.id)); });
    state.communityDataSource = "supabase";
  } catch (error) {
    console.error("커뮤니티 데이터를 불러오지 못했습니다.", error);
    state.communityError = "커뮤니티 연결에 실패해 샘플 게시글을 표시하고 있어요.";
    state.communityDataSource = "mock";
  } finally {
    state.communityLoading = false;
    if (renderUpdates) render();
  }
}

function currentAuthor() {
  if (!state.authUser) throw new Error("로그인이 필요합니다.");
  return {
    userId: state.authUser.id,
    authorName: state.profile?.display_name || state.authUser.user_metadata?.display_name || "이음 사용자"
  };
}

async function saveCommunityPost({ kind = "질문", category, title, body }) {
  const author = currentAuthor();
  const created = await insertCommunityPost({ ...author, kind, category, title, body });
  await loadCommunity({ renderUpdates: false });
  state.selectedPost = Math.max(0, state.posts.findIndex((post) => post.id === created.id));
  render();
  return created;
}

async function saveCommunityComment({ postId, parentId = null, body }) {
  const author = currentAuthor();
  const selectedId = postId;
  const created = await insertCommunityComment({ ...author, postId, parentId, body });
  await loadCommunity({ renderUpdates: false });
  state.selectedPost = Math.max(0, state.posts.findIndex((post) => post.id === selectedId));
  state.replyTarget = null;
  render();
  return created;
}

async function toggleCommunityLike(post) {
  const { userId } = currentAuthor();
  if (post.liked) await removeCommunityLike({ postId: post.id, userId });
  else await addCommunityLike({ postId: post.id, userId });
  post.liked = !post.liked;
  post.likes += post.liked ? 1 : -1;
  render();
  return post.liked;
}

async function saveCommunityReport({ postId = null, commentId = null, reason = "부적절한 콘텐츠" }) {
  const { userId } = currentAuthor();
  await insertCommunityReport({ reporterId: userId, postId, commentId, reason });
}



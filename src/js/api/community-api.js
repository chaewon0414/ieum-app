function relativeTime(dateText) {
  const minutes = Math.max(0, Math.floor((Date.now() - new Date(dateText).getTime()) / 60000));
  if (minutes < 1) return "방금 전";
  if (minutes < 60) return `${minutes}분 전`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}시간 전`;
  return `${Math.floor(hours / 24)}일 전`;
}

async function fetchCommunityPosts() {
  const client = getSupabaseClient();
  if (!client) return null;

  const [{ data: posts, error: postsError }, { data: comments, error: commentsError }, { data: likes, error: likesError }] = await Promise.all([
    client.from("community_posts").select("*").eq("status", "published").order("created_at", { ascending: false }),
    client.from("community_comments").select("id,post_id,parent_id,author_id,author_name,body,created_at").eq("status", "published").order("created_at", { ascending: true }),
    client.from("community_post_likes").select("post_id,user_id")
  ]);

  if (postsError) throw postsError;
  if (commentsError) throw commentsError;
  if (likesError) throw likesError;

  return posts.map((post) => {
    const postComments = comments.filter((comment) => comment.post_id === post.id);
    const topLevel = postComments.filter((comment) => !comment.parent_id);
    return {
      id: post.id,
      authorId: post.author_id,
      author: post.author_name,
      time: relativeTime(post.created_at),
      kind: post.kind || "질문",
      category: post.category,
      title: post.title,
      body: post.body,
      image: post.image_url,
      likes: likes.filter((like) => like.post_id === post.id).length,
      likedUserIds: likes.filter((like) => like.post_id === post.id).map((like) => like.user_id),
      comments: postComments.length,
      commentList: topLevel.map((comment) => ({
        id: comment.id,
        authorId: comment.author_id,
        createdAt: comment.created_at,
        author: comment.author_name,
        time: relativeTime(comment.created_at),
        body: comment.body,
        replies: postComments.filter((reply) => reply.parent_id === comment.id).map((reply) => ({
          id: reply.id,
          authorId: reply.author_id,
          createdAt: reply.created_at,
          author: reply.author_name,
          time: relativeTime(reply.created_at),
          body: reply.body
        }))
      }))
    };
  });
}

async function insertCommunityPost({ userId, authorName, kind = "질문", category, title, body }) {
  const client = getSupabaseClient();
  if (!client) throw new Error("Supabase가 연결되지 않았습니다.");

  const { data, error } = await client
    .from("community_posts")
    .insert({
      author_id: userId,
      author_name: authorName,
      kind,
      category,
      title,
      body,
      status: "published"
    })
    .select("id")
    .single();

  if (error) throw error;
  return data;
}

async function insertCommunityComment({ postId, parentId = null, userId, authorName, body }) {
  const client = getSupabaseClient();
  if (!client) throw new Error("Supabase가 연결되지 않았습니다.");

  const { data, error } = await client
    .from("community_comments")
    .insert({
      post_id: postId,
      parent_id: parentId,
      author_id: userId,
      author_name: authorName,
      body,
      status: "published"
    })
    .select("id")
    .single();

  if (error) throw error;
  return data;
}

async function addCommunityLike({ postId, userId }) {
  const client = getSupabaseClient();
  if (!client) throw new Error("Supabase가 연결되지 않았습니다.");
  const { error } = await client.from("community_post_likes").insert({ post_id: postId, user_id: userId });
  if (error) throw error;
}

async function removeCommunityLike({ postId, userId }) {
  const client = getSupabaseClient();
  if (!client) throw new Error("Supabase가 연결되지 않았습니다.");
  const { error } = await client.from("community_post_likes").delete().eq("post_id", postId).eq("user_id", userId);
  if (error) throw error;
}

async function insertCommunityReport({ reporterId, postId = null, commentId = null, reason }) {
  const client = getSupabaseClient();
  if (!client) throw new Error("Supabase가 연결되지 않았습니다.");
  const { error } = await client.from("community_reports").insert({ reporter_id: reporterId, post_id: postId, comment_id: commentId, reason });
  if (error) throw error;
}



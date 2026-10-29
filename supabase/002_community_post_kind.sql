-- 커뮤니티 게시판(질문/모임/꿀팁) 구분 컬럼
-- 나중에 Supabase(온라인)로 다시 연결할 때 SQL Editor에서 한 번 실행하세요.
alter table public.community_posts add column if not exists kind text not null default '질문';
alter table public.community_posts drop constraint if exists community_posts_kind_check;
alter table public.community_posts add constraint community_posts_kind_check check (kind in ('질문', '모임', '꿀팁'));

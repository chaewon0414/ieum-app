-- Run this in the Supabase SQL Editor for the existing 이음 project.
-- The original community_posts schema already accepts 생활; add 관계 to its check.
alter table public.community_posts
  drop constraint if exists community_posts_category_check;

alter table public.community_posts
  add constraint community_posts_category_check
  check (category in ('생활', '취업', '주거', '관계', '금융'));

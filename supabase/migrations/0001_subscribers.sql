-- Subscribers table for the email capture flow (/api/subscribe, /api/unsubscribe).
-- Run this in the Supabase SQL editor (or via the CLI) before deploying.

create table if not exists public.subscribers (
  id                bigint generated always as identity primary key,
  email             text not null unique,
  source            text not null default 'unknown',
  created_at        timestamptz not null default now(),
  sequence_position integer not null default 0,
  subscribed        boolean not null default true,
  unsubscribed_at   timestamptz
);

-- Fast lookups for the drip sequence (query by subscribed + created_at + position).
create index if not exists subscribers_active_idx
  on public.subscribers (subscribed, sequence_position, created_at);

-- The API talks to Supabase with the service role key, which bypasses RLS. Enabling
-- RLS with no permissive policies means the anon/public keys can't touch this table.
alter table public.subscribers enable row level security;

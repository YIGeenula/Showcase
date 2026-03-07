-- 1. Create the website stats table
CREATE TABLE website_stats (
    id integer PRIMARY KEY DEFAULT 1,
    likes_count integer DEFAULT 0
);

-- 2. Insert the initial row
INSERT INTO website_stats (id, likes_count) VALUES (1, 0);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE website_stats ENABLE ROW LEVEL SECURITY;

-- 4. Create policy to allow public read access
CREATE POLICY "Allow public read access" ON website_stats 
FOR SELECT USING (true);

-- 5. Create a function to securely increment likes
-- This prevents concurrent users from overwriting each other's increments
CREATE OR REPLACE FUNCTION increment_likes()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE website_stats
  SET likes_count = likes_count + 1
  WHERE id = 1;
END;
$$;

-- 6. Enable realtime for website_stats table
alter publication supabase_realtime add table website_stats;

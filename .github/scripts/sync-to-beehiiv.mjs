import { execSync } from 'child_process';
import { readFileSync, existsSync } from 'fs';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

const API_KEY = process.env.BEEHIIV_API_KEY;
const PUB_ID = process.env.BEEHIIV_PUB_ID;

if (!API_KEY || !PUB_ID) {
  console.error('Missing BEEHIIV_API_KEY or BEEHIIV_PUB_ID');
  process.exit(1);
}

// Get MDX files changed in this push
const changedRaw = execSync('git diff --name-only HEAD~1 HEAD -- "content/blog/*.mdx"')
  .toString()
  .trim();

const changedFiles = changedRaw.split('\n').filter(Boolean);

if (changedFiles.length === 0) {
  console.log('No blog MDX files changed.');
  process.exit(0);
}

for (const file of changedFiles) {
  // Skip draft/template files prefixed with _
  if (file.split('/').pop().startsWith('_')) continue;
  if (!existsSync(file)) continue;

  const current = matter(readFileSync(file, 'utf8'));

  // Only process files that are now published
  if (current.data.status !== 'published') continue;

  // Check if this file was already published in the previous commit
  let wasAlreadyPublished = false;
  try {
    const prevContent = execSync(`git show HEAD~1:${file}`, { stdio: ['pipe', 'pipe', 'pipe'] }).toString();
    const prev = matter(prevContent);
    if (prev.data.status === 'published') {
      wasAlreadyPublished = true;
    }
  } catch {
    // File didn't exist in previous commit — treat as newly published
  }

  if (wasAlreadyPublished) {
    console.log(`Skipping "${current.data.title}" — was already published before this commit.`);
    continue;
  }

  // Convert Markdown body to HTML
  const processed = await remark().use(remarkHtml).process(current.content);
  const contentHtml = String(processed);

  const payload = {
    title: current.data.title,
    subtitle: current.data.summary || '',
    preview_text: current.data.summary || '',
    content_html: contentHtml,
    status: 'draft', // lands as draft in beehiiv so you can review before sending
    schedule_type: 'immediate',
  };

  const res = await fetch(`https://api.beehiiv.com/v2/publications/${PUB_ID}/posts`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const json = await res.json();

  if (!res.ok) {
    console.error(`Failed to create beehiiv post for "${current.data.title}":`, JSON.stringify(json, null, 2));
    process.exit(1);
  }

  const postUrl = json.data?.web_url || json.data?.id;
  console.log(`Created beehiiv draft: "${current.data.title}" → ${postUrl}`);
}

// Temporary content data until contentlayer works properly

export interface Post {
  slug: string;
  title: string;
  summary: string;
  tags?: string[];
  publishDate: string;
  status: 'draft' | 'published';
  thumbnail?: string;
  body: {
    raw: string;
    code: string;
  };
}

export interface Log {
  slug: string;
  title: string;
  summary: string;
  mood?: string;
  publishDate: string;
  status: 'draft' | 'published';
  body: {
    raw: string;
    code: string;
  };
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  stack?: string[];
  repo?: string;
  demo?: string;
  status: 'draft' | 'published';
  body: {
    raw: string;
    code: string;
  };
}

export const allPosts: Post[] = [
  {
    slug: 'first-post',
    title: "How I'm building the LinkedIn Influencer Analyzer",
    summary: "First principles, stack choices, and what I'm validating in week one.",
    tags: ['build-in-public', 'linkedin', 'mvp'],
    publishDate: '2025-09-07',
    status: 'published',
    thumbnail: '',
    body: {
      raw: `Welcome to the build! In this post I cover:

- Problem & audience hypothesis
- MVP scope
- Validation metric (first 10 paid reports)

### Stack
- Next.js + Neon for lead capture
- MDX for content
- beehiiv for newsletter`,
      code: `<p>Welcome to the build! In this post I cover:</p>
<ul>
<li>Problem &amp; audience hypothesis</li>
<li>MVP scope</li>
<li>Validation metric (first 10 paid reports)</li>
</ul>
<h3>Stack</h3>
<ul>
<li>Next.js + Neon for lead capture</li>
<li>MDX for content</li>
<li>beehiiv for newsletter</li>
</ul>`
    }
  }
];

export const allLogs: Log[] = [
  {
    slug: '2025-09-07',
    title: 'Day 1 — Portfolio starter live',
    summary: 'Created Next.js + MDX starter, wired RSS & sitemap.',
    mood: 'shipping',
    publishDate: '2025-09-07',
    status: 'published',
    body: {
      raw: `- Pushed initial scaffold
- Added sample post & daily log
- Next: connect beehiiv embed and add projects`,
      code: `<ul>
<li>Pushed initial scaffold</li>
<li>Added sample post &amp; daily log</li>
<li>Next: connect beehiiv embed and add projects</li>
</ul>`
    }
  }
];

export const allProjects: Project[] = [
  {
    slug: 'personal-site',
    title: 'Personal Portfolio Site',
    summary: 'Next.js portfolio with blog, daily logs, and project showcase.',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'MDX'],
    repo: 'https://github.com/JakwounReid/personal-site',
    status: 'published',
    body: {
      raw: `A modern personal portfolio built with Next.js, featuring a blog, daily logs, and project showcase. Includes RSS feeds, sitemap generation, and responsive design with Tailwind CSS.`,
      code: `<p>A modern personal portfolio built with Next.js, featuring a blog, daily logs, and project showcase. Includes RSS feeds, sitemap generation, and responsive design with Tailwind CSS.</p>`
    }
  }
];
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Post {
  slug: string;
  title: string;
  summary: string;
  tags?: string[];
  publishDate: string;
  status: "draft" | "published";
  thumbnail?: string;
  series?: string;
  seriesOrder?: number;
  body: {
    raw: string;
  };
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  stack?: string[];
  repo?: string;
  demo?: string;
  status: "draft" | "published";
  body: {
    raw: string;
  };
}

const BLOG_DIR = path.join(process.cwd(), "content/blog");

function loadPosts(): Post[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx") && !f.startsWith("_"))
    .reduce<Post[]>((acc, filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
      const { data, content } = matter(raw);
      if ((data.status ?? "draft") !== "published") return acc;
      acc.push({
        slug,
        title: data.title ?? slug,
        summary: data.summary ?? "",
        tags: data.tags ?? [],
        publishDate: data.publishDate ?? "",
        status: "published",
        thumbnail: data.thumbnail ?? "",
        series: data.series,
        seriesOrder: data.seriesOrder,
        body: { raw: content },
      });
      return acc;
    }, []);
}

export const allPosts: Post[] = loadPosts();

export const allProjects: Project[] = [
  {
    slug: "personal-site",
    title: "Personal Portfolio Site",
    summary:
      "Next.js portfolio with blog, daily logs, and project showcase.",
    stack: ["Next.js", "TypeScript", "Tailwind", "MDX"],
    repo: "https://github.com/JakwounReid/personal-site",
    status: "published",
    body: {
      raw: "A modern personal portfolio built with Next.js, featuring a blog, daily logs, and project showcase.",
    },
  },
  {
    slug: "linkedin-influencer-analyzer",
    title: "LinkedIn Influencer Analyzer",
    summary:
      "A tool to reverse-engineer top LinkedIn creators and understand what drives engagement.",
    stack: ["Next.js", "TypeScript", "Tailwind", "MDX"],
    repo: "https://github.com/JakwounReid/linkedin-influencer-analyzer",
    status: "published",
    body: {
      raw: "A tool to reverse-engineer top LinkedIn creators and understand what drives engagement.",
    },
  },
  {
    slug: "side-gig-stats-central",
    title: "Gig Dash",
    summary:
      "A dashboard for tracking and analyzing side gig performance metrics.",
    stack: ["Next.js", "TypeScript", "Tailwind", "MDX"],
    repo: "https://github.com/JakwounReid/side-gig-stats-central",
    status: "published",
    body: {
      raw: "A dashboard for tracking and analyzing side gig performance metrics.",
    },
  },
];

export const allLogs: Post[] = [];

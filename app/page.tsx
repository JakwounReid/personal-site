import Link from "next/link";
import Image from "next/image";
import { allProjects, allPosts } from "@/lib/content";

export default function Home() {
  const posts = [...allPosts]
    .sort(
      (a, b) =>
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    )
    .slice(0, 3);
  const projects = allProjects.slice(0, 3);

  const ventures = [
    {
      label: "Software",
      title: "Full-Stack Engineer",
      description:
        "4+ years building production web applications in financial services. Day job at Northwestern Mutual; nights and weekends shipping my own tools.",
      href: "/projects",
      cta: "View projects",
      accent: "text-white",
      border: "border-neutral-700",
    },
    {
      label: "Video",
      title: "Post-Production Partner",
      description:
        "4K short-form editing for creators, realtors, and brands. Social-first strategy, 48-hr delivery, built for the algorithm.",
      href: "/editing-services",
      cta: "See editing services",
      accent: "text-blue-400",
      border: "border-blue-500/30",
    },
    {
      label: "Travel",
      title: "The Travel Architect",
      description:
        "City guides, relocation intel, and property shoots. Currently building the 2026 Milwaukee Relocation Guide for newcomers and Chicago transplants.",
      href: "/thetravelarchitect",
      cta: "Explore guides",
      accent: "text-neutral-300",
      border: "border-neutral-700",
    },
    {
      label: "Content",
      title: "YouTube & Media",
      description:
        "Documenting the build — software, travel, and systems thinking. The same precision I bring to client work shows up on camera.",
      href: "https://www.youtube.com/@jakwounreid",
      cta: "Watch on YouTube",
      accent: "text-neutral-300",
      border: "border-neutral-700",
      external: true,
    },
  ];

  return (
    <div className="space-y-16">
      {/* ── HERO ── */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-500 mb-3">
            Milwaukee, WI
          </p>
          <h1 className="text-4xl md:text-5xl font-black leading-tight">
            Developer. Videographer. Builder.
          </h1>
          <p className="mt-4 text-neutral-300">
            I&apos;m Jakwoun — a full-stack software engineer at Northwestern
            Mutual by day, and a builder of side projects, video content, and
            city guides the rest of the time. React, TypeScript, Node.js, and
            AWS at work; whatever it takes everywhere else.
          </p>
          <p className="mt-3 text-neutral-400 text-sm">
            i.c.stars alumnus · Northwestern Mutual · Milwaukee, WI
          </p>
          <div className="mt-6 flex gap-3">
            <Link
              href="/projects"
              className="rounded-xl bg-white text-neutral-900 px-5 py-3 font-semibold hover:bg-neutral-200"
            >
              View projects
            </Link>
            <Link
              href="/blog"
              className="rounded-xl border border-neutral-800 px-5 py-3 hover:bg-neutral-900"
            >
              Read blog
            </Link>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <Image
              src="/profile.jpg"
              alt="Profile picture"
              width={300}
              height={300}
              className="rounded-2xl shadow-lg"
              priority
            />
            <div className="mt-4 flex justify-center gap-4">
              <Link
                href="https://www.linkedin.com/in/jakwounreid/"
                target="_blank"
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
              <Link
                href="https://www.youtube.com/@jakwounreid"
                target="_blank"
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT I BUILD ── */}
      <section>
        <h2 className="text-2xl font-bold mb-6">What I build</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {ventures.map((v) => (
            <Link
              key={v.title}
              href={v.href}
              target={v.external ? "_blank" : undefined}
              rel={v.external ? "noopener noreferrer" : undefined}
              className={`group rounded-2xl border ${v.border} p-6 hover:bg-neutral-900/50 transition-colors`}
            >
              <p className={`text-xs font-semibold uppercase tracking-widest ${v.accent} mb-2`}>
                {v.label}
              </p>
              <p className="font-bold text-white text-lg">{v.title}</p>
              <p className="mt-2 text-sm text-neutral-400">{v.description}</p>
              <p className="mt-4 text-sm text-neutral-500 group-hover:text-neutral-300 transition-colors">
                {v.cta} →
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── LATEST BLOG POSTS ── */}
      <section>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Latest blog posts</h2>
          <Link
            href="/blog"
            className="text-sm text-neutral-300 hover:text-white underline underline-offset-4"
          >
            View all
          </Link>
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="rounded-2xl border border-neutral-800 p-5 hover:bg-neutral-900/50"
            >
              <div className="text-sm text-neutral-400">
                {new Date(p.publishDate).toLocaleDateString()}
              </div>
              <div className="mt-2 font-semibold">{p.title}</div>
              <div className="mt-2 text-sm text-neutral-300">{p.summary}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Projects</h2>
          <Link
            href="/projects"
            className="text-sm text-neutral-300 hover:text-white underline underline-offset-4"
          >
            View all
          </Link>
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {projects.map((pr) => (
            <a
              key={pr.slug}
              href={pr.repo || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-neutral-800 p-5 hover:bg-neutral-900/50"
            >
              <div className="text-sm text-neutral-400">
                {pr.stack?.join(" • ")}
              </div>
              <div className="mt-2 font-semibold">{pr.title}</div>
              <div className="mt-2 text-sm text-neutral-300">{pr.summary}</div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";
import { allProjects, allPosts } from "@/lib/content";
import Subscribe from "@/components/subscribe";

export const metadata = {
  title: "Jakwoun Reid — Digital Infrastructure for Service Businesses",
  description:
    "I diagnose what's costing service businesses revenue and build the system that captures it. Custom sites, bookings, automations. Fixed price.",
};

export default function Home() {
  const posts = [...allPosts]
    .sort(
      (a, b) =>
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    )
    .slice(0, 3);
  const projects = allProjects.slice(0, 3);

  return (
    <div className="space-y-16">
      {/* ── HERO ── */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-sm font-medium uppercase tracking-widest text-neutral-500">
              Milwaukee, WI
            </span>
            <span className="text-neutral-700">·</span>
            <Link
              href="/build"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
              Taking new clients
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight">
            Jakwoun Reid
          </h1>
          <p className="mt-3 text-lg text-neutral-300 font-medium">
            Systems Consultant · Engineer · Builder
          </p>
          <p className="mt-3 text-neutral-400 text-sm max-w-lg">
            Diagnosis first. Build second. I find what&apos;s costing you revenue and
            build the system that captures it — not a template, not a guess.
            Production engineering background. Fixed price.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <Image
              src="/profile-jakwoun.jpg"
              alt="Jakwoun Reid"
              width={300}
              height={300}
              className="rounded-2xl shadow-lg"
              priority
            />
            <div className="mt-4 flex justify-center gap-4 flex-wrap">
              <Link
                href="https://www.linkedin.com/in/jakwounreid/"
                target="_blank"
                className="p-2 -m-2 text-neutral-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
              <Link
                href="https://www.youtube.com/@jakwounreid"
                target="_blank"
                className="p-2 -m-2 text-neutral-400 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
              <Link
                href="https://contra.com/jakwoun_reid_fs9ndm0n/work?r=jakwoun_reid_fs9ndm0n"
                target="_blank"
                className="p-2 -m-2 text-neutral-400 hover:text-white transition-colors text-sm font-medium"
                aria-label="Contra"
              >
                Contra
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── AUDIENCE PATHS ── */}
      <section>
        <p className="text-xs font-medium uppercase tracking-widest text-neutral-500 mb-4">
          What brings you here?
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <Link
            href="/build"
            className="group rounded-2xl border border-blue-500/20 bg-blue-950/10 p-6 hover:border-blue-500/40 hover:bg-blue-950/20 transition-colors"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2">
              Founder / service business
            </p>
            <p className="font-bold text-white text-base">
              Need digital infrastructure that actually works?
            </p>
            <p className="mt-2 text-sm text-neutral-400">
              Custom sites, booking systems, automations. Fixed price. You own everything.
            </p>
            <p className="mt-4 text-sm text-blue-400 group-hover:text-blue-300 transition-colors">
              See packages &amp; pricing →
            </p>
          </Link>

          <Link
            href="/blog"
            className="group rounded-2xl border border-neutral-700 p-6 hover:bg-neutral-900/50 transition-colors"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-2">
              Builder / reader
            </p>
            <p className="font-bold text-white text-base">
              Here from a post?
            </p>
            <p className="mt-2 text-sm text-neutral-400">
              I write about building in public, non-traditional tech careers, and the
              systems behind the work. New post weekly.
            </p>
            <p className="mt-4 text-sm text-neutral-400 group-hover:text-neutral-200 transition-colors">
              Read the blog →
            </p>
          </Link>
        </div>
      </section>

      {/* ── LATEST BLOG POSTS ── */}
      <section>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Latest posts</h2>
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
              href={pr.demo ?? pr.repo ?? "#"}
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

      {/* ── NEWSLETTER ── */}
      <section>
        <Subscribe />
      </section>
    </div>
  );
}

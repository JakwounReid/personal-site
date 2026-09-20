import Link from "next/link";
import Image from "next/image";
import { allProjects, allPosts } from "@/lib/content";
import Subscribe from "@/components/subscribe";
import GtagLink from "@/components/gtag-link";
import { ArrowIcon } from "@/components/ui";
import { clarityCall, INTEREST } from "@/lib/booking";

// Free no-cost entry point to the offer ladder. Paid diagnostics live on /strategy
// (business) and /career-strategy (career); recurring care lives on /site-care.
// Prices are deliberately absent site-wide — scope and cost get set on the clarity call.
const CLARITY_URL = clarityCall(INTEREST.unsure);
const SITECHECK_URL = "https://sitecheck.jakwoun.me";

export const metadata = {
  title: "Jakwoun Reid — Digital Infrastructure for Your Business",
  description:
    "Strategy sessions, roadmap teardowns, and ongoing site care for Wix, Squarespace, Shopify, and Kajabi. Diagnosis first. Start with a free 15-minute clarity call.",
};

// The three things I sell. Each links to its own page.
const offers = [
  {
    eyebrow: "Advisory",
    title: "Strategy",
    body: "A paid strategy session or a written roadmap teardown. You leave with direction and decisions — what's broken, what matters, what order to fix it in.",
    href: "/strategy",
    cta: "See strategy options",
    featured: true,
  },
  {
    eyebrow: "Recurring",
    title: "Site Care & Support",
    body: "Someone who owns your site so you don't have to. Fixed monthly price, one request at a time, no hourly billing. For sites that already exist.",
    href: "/site-care",
    cta: "See care plans",
    featured: false,
  },
  {
    eyebrow: "Advisory",
    title: "Career Strategy",
    body: "A live session or a written roadmap for your job search. You leave with direction and decisions — your positioning, your target roles, what to fix first.",
    href: "/career-strategy",
    cta: "See career strategy options",
    featured: false,
  },
];

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
              href="/strategy"
              className="text-sm font-medium uppercase tracking-widest text-blue-400 transition-colors hover:text-blue-300"
            >
              Digital infrastructure for your business
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight">
            Your site is already live.{" "}
            <span className="text-blue-400">
              The question is what to fix first.
            </span>
          </h1>
          <p className="mt-5 text-neutral-300 text-base max-w-lg">
            I help owners of Wix, Squarespace, Shopify, and Kajabi sites figure
            out what&apos;s costing them — then keep it running. Diagnosis first,
            then a plan, then someone who owns the upkeep so you don&apos;t have
            to.
          </p>
          <div className="mt-6">
            <p className="mb-3 text-sm text-neutral-400">
              Start with a free 15-minute clarity call — a quick fit and scope
              check, no charge. I&apos;ll point you to the right next step.
            </p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              <GtagLink
                href={CLARITY_URL}
                event="booking_click"
                eventParams={{ page: "home", position: "hero", offer: "triage" }}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 border border-blue-400 bg-blue-400 px-6 py-3 text-sm font-bold uppercase tracking-widest text-black transition-all duration-200 hover:bg-transparent hover:text-blue-400"
              >
                Book a Free Clarity Call
                <ArrowIcon />
              </GtagLink>
              <GtagLink
                href={SITECHECK_URL}
                event="sitecheck_click"
                eventParams={{ page: "home", position: "hero" }}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-400 transition-colors hover:text-blue-300"
              >
                Or run a free SiteCheck audit →
              </GtagLink>
            </div>
          </div>
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
            {/* Identity line — demoted from the hero H1 but kept present. */}
            <p className="mt-4 text-center text-sm font-semibold text-neutral-300">
              Jakwoun Reid
              <span className="block text-xs font-normal text-neutral-500">
                Systems Consultant · Engineer · Builder
              </span>
            </p>
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

      {/* ── 3-STEP PLAN ── */}
      <section className="grid gap-px overflow-hidden rounded-sm border border-neutral-800 bg-neutral-800 sm:grid-cols-3">
        {[
          {
            n: "1",
            title: "Free clarity call",
            body: "15 minutes, we find the real problem.",
          },
          {
            n: "2",
            title: "Get your roadmap",
            body: "A prioritized plan you keep and can act on.",
          },
          {
            n: "3",
            title: "Someone owns the upkeep",
            body: "Ongoing care so it stays fixed, or a plan you run yourself.",
          },
        ].map(({ n, title, body }) => (
          <div key={n} className="bg-neutral-950 p-5">
            <span className="font-mono text-sm font-black text-blue-400/50">
              0{n}
            </span>
            <p className="mt-1 font-bold text-white">{title}</p>
            <p className="mt-1 text-sm text-neutral-400">{body}</p>
          </div>
        ))}
      </section>

      {/* ── OFFERS ── */}
      <section>
        <p className="text-xs font-medium uppercase tracking-widest text-blue-400 mb-4">
          What I do
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {offers.map(({ eyebrow, title, body, href, cta, featured }) => (
            <Link
              key={title}
              href={href}
              className={`group flex flex-col p-6 transition-colors ${
                featured
                  ? "border border-blue-500/60 bg-blue-950/10 ring-1 ring-blue-500/20 hover:bg-blue-950/20"
                  : "border border-neutral-700 hover:bg-neutral-900/50"
              }`}
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-400">
                {eyebrow}
              </p>
              <p className="font-bold text-white text-lg">{title}</p>
              <p className="mt-2 flex-1 text-sm text-neutral-400">{body}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 group-hover:text-blue-300">
                {cta}
                <ArrowIcon />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── LATEST BLOG POSTS ── */}
      <section>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-black tracking-tight">Latest posts</h2>
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
              className="border border-neutral-800 p-5 transition-colors hover:border-blue-500/30 hover:bg-blue-950/10"
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
          <h2 className="text-2xl font-black tracking-tight">Projects</h2>
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
              className="border border-neutral-800 p-5 transition-colors hover:border-blue-500/30 hover:bg-blue-950/10"
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

      {/* ── UPDATES ── */}
      <section>
        <Subscribe />
      </section>
    </div>
  );
}

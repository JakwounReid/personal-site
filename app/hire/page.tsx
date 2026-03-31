import Link from "next/link";

export const metadata = {
  title: "Available for Contract Work — Jakwoun Reid",
  description:
    "Full-stack software engineer available for part-time remote contracts. React, TypeScript, Node.js, AWS. Financial services background.",
};

const stack = [
  { category: "Frontend", skills: "React, TypeScript, HTML, CSS" },
  { category: "Backend", skills: "Node.js, REST APIs, PostgreSQL, Python" },
  { category: "Cloud & DevOps", skills: "AWS, Terraform, Kubernetes, CI/CD, Azure DevOps" },
  { category: "Tools", skills: "Git, Figma, Jira, Postman, Airtable" },
  { category: "CMS", skills: "WordPress (Gutenberg), Shopify, WIX" },
];

const offerings = [
  {
    title: "Full-Stack Feature Development",
    description:
      "Build and ship new features end-to-end — React frontend, Node.js API, database, and deployment. Comfortable owning the whole stack or plugging into an existing team.",
  },
  {
    title: "Frontend Engineering",
    description:
      "Component architecture, performance optimization, and pixel-accurate UI in React and TypeScript. I work well with design systems and cross-functional teams.",
  },
  {
    title: "Web Application Builds",
    description:
      "Custom web apps and client sites from requirements to deployment. I've delivered end-to-end for small businesses since 2021 — scoping, building, and shipping solo.",
  },
  {
    title: "Regulated / Enterprise Environments",
    description:
      "3+ years building production applications inside a major financial services company. Comfortable with compliance-aware systems, secure data handling, and high-stakes releases.",
  },
];

export default function HirePage() {
  return (
    <div className="space-y-16">
      {/* ── HERO ── */}
      <section>
        <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-950/30 px-3 py-1 text-xs font-medium text-green-400 mb-6">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
          Available for contracts
        </div>
        <h1 className="text-4xl md:text-5xl font-black leading-tight">
          Let&apos;s build something together.
        </h1>
        <p className="mt-4 text-neutral-300 max-w-2xl">
          I&apos;m a full-stack software engineer with 4+ years of production experience,
          including 3+ years inside a major financial services company. I&apos;m available
          for part-time remote contracts — 10 to 20 hours per week.
        </p>
        <div className="mt-6 flex gap-3 flex-wrap">
          <a
            href="mailto:jakwounreid@gmail.com?subject=Contract%20Inquiry"
            className="rounded-xl bg-white text-neutral-900 px-5 py-3 font-semibold hover:bg-neutral-200 transition-colors"
          >
            Get in touch
          </a>
          <a
            href="https://www.linkedin.com/in/jakwounreid/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-neutral-800 px-5 py-3 hover:bg-neutral-900 transition-colors"
          >
            View LinkedIn
          </a>
        </div>
      </section>

      {/* ── WHAT I CAN HELP WITH ── */}
      <section>
        <h2 className="text-2xl font-bold mb-6">What I can help with</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {offerings.map((o) => (
            <div
              key={o.title}
              className="rounded-2xl border border-neutral-800 p-5"
            >
              <p className="font-semibold text-white">{o.title}</p>
              <p className="mt-2 text-sm text-neutral-400">{o.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── STACK ── */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Stack</h2>
        <div className="space-y-3">
          {stack.map((s) => (
            <div key={s.category} className="flex gap-4 text-sm">
              <span className="w-36 shrink-0 text-neutral-500">{s.category}</span>
              <span className="text-neutral-300">{s.skills}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── BACKGROUND ── */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Background</h2>
        <div className="space-y-4 text-neutral-300 max-w-2xl">
          <p>
            I&apos;ve spent the last 3+ years as a software engineer at{" "}
            <span className="text-white font-semibold">Northwestern Mutual</span>,
            building and maintaining production financial web applications used by internal
            teams and clients. That means I&apos;m used to high-stakes releases, regulated
            environments, and working in cross-functional Agile teams.
          </p>
          <p>
            Before that I came up through{" "}
            <span className="text-white font-semibold">i.c.stars</span> — a rigorous
            tech training program in Milwaukee — and have been freelancing for small
            businesses since 2021, owning projects end-to-end from requirements to deployment.
          </p>
          <p>
            I&apos;m based in Milwaukee, WI and work fully remote.
          </p>
        </div>
      </section>

      {/* ── ENGAGEMENT ── */}
      <section className="rounded-2xl border border-neutral-700 bg-neutral-900/50 p-6 md:p-8">
        <h2 className="text-xl font-bold mb-2">What I&apos;m looking for</h2>
        <ul className="mt-4 space-y-2 text-sm text-neutral-400">
          <li className="flex gap-3"><span className="text-white">—</span> Part-time remote contracts (10–20 hrs/week)</li>
          <li className="flex gap-3"><span className="text-white">—</span> React / Node.js / AWS work</li>
          <li className="flex gap-3"><span className="text-white">—</span> Fintech, insurtech, or enterprise SaaS</li>
          <li className="flex gap-3"><span className="text-white">—</span> Async-friendly teams</li>
        </ul>
        <a
          href="mailto:jakwounreid@gmail.com?subject=Contract%20Inquiry"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white text-neutral-900 px-5 py-3 text-sm font-semibold hover:bg-neutral-200 transition-colors"
        >
          Email me →
        </a>
      </section>
    </div>
  );
}

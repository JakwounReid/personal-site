import GtagLink from "@/components/gtag-link";

export const metadata = {
  title: "Jakwoun Reid — Full-Stack Engineer",
  description:
    "Full-stack software engineer. 3+ yrs fintech at Northwestern Mutual. React, TypeScript, Node.js, AWS. Open to full-time roles starting June 2026.",
};

const stackRows = [
  { category: "Frontend", skills: "React, TypeScript, HTML, CSS" },
  { category: "Backend", skills: "Node.js, REST APIs, PostgreSQL, Python" },
  { category: "Cloud & DevOps", skills: "AWS, Terraform, Kubernetes, CI/CD, Azure DevOps" },
  { category: "Tools", skills: "Git, Figma, Jira, Postman, Airtable" },
];

const caseStudies = [
  {
    org: "Northwestern Mutual",
    tenure: "June 2023 – June 2026 · 3+ yrs",
    outcome: "Built and maintained production financial web applications used by internal teams and clients inside a Fortune 100 company.",
    details: [
      "Delivered full-stack features end-to-end in React, TypeScript, and Node.js",
      "Operated in high-stakes, compliance-aware, Agile environments",
      "Navigated regulated data handling and enterprise-scale CI/CD pipelines",
    ],
  },
  {
    org: "Freelance Web Development",
    tenure: "Since March 2021",
    outcome: "Scoped, built, and shipped custom sites and digital systems solo for small business clients.",
    details: [
      "Owned the full project lifecycle: requirements → design → build → deploy",
      "Integrated booking, payments, lead capture, and automation systems",
      "Delivered on fixed-price, time-bound engagements across industries",
    ],
  },
  {
    org: "i.c.stars Milwaukee",
    tenure: "Alumnus",
    outcome: "Graduated a rigorous, full-time tech training program that selected 20 students from hundreds of applicants.",
    details: [
      "Completed intensive project-based curriculum in software development",
      "Built foundation for production-level engineering without a CS degree",
      "Connected to a lasting professional network in Milwaukee tech",
    ],
  },
];

export default function HirePage() {
  return (
    <div className="space-y-16">
      {/* ── HERO ── */}
      <section>
        <div className="flex flex-wrap gap-2 mb-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-950/30 px-3 py-1 text-xs font-medium text-green-400">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
            Open to full-time roles · available June 2026
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/30 px-3 py-1 text-xs font-medium text-blue-400">
            Contract: 10–20 hrs/week, available now
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-black leading-tight text-white">
          Jakwoun Reid
        </h1>
        <p className="mt-1 text-xl text-neutral-400 font-medium">
          Full-Stack Software Engineer
        </p>

        {/* Quick facts */}
        <div className="mt-6 grid sm:grid-cols-2 gap-3 max-w-xl">
          {[
            { label: "Current role", value: "Software Engineer @ Northwestern Mutual (3+ yrs)" },
            { label: "Stack", value: "React · TypeScript · Node.js · AWS · PostgreSQL" },
            { label: "Location", value: "Milwaukee, WI · fully remote" },
            { label: "Background", value: "i.c.stars alum · fintech / enterprise SaaS" },
          ].map(({ label, value }) => (
            <div key={label} className="flex gap-3 text-sm">
              <span className="w-28 shrink-0 text-neutral-500">{label}</span>
              <span className="text-neutral-300">{value}</span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-neutral-300 max-w-2xl">
          I build production-grade full-stack applications. My background is in financial services and enterprise software. I&apos;m targeting{" "}
          <span className="text-white font-semibold">Solutions Engineer</span> and{" "}
          <span className="text-white font-semibold">Developer Advocate</span> roles next.
        </p>

        <div className="mt-6 flex gap-3 flex-wrap">
          <GtagLink
            href="mailto:jakwounreid@gmail.com?subject=Let%27s%20Connect"
            event="contact_click"
            eventParams={{ page: "hire", type: "email" }}
            className="rounded-xl bg-white text-neutral-900 px-5 py-3 font-semibold hover:bg-neutral-200 transition-colors text-sm"
          >
            Email me →
          </GtagLink>
          <GtagLink
            href="https://www.linkedin.com/in/jakwounreid/"
            event="contact_click"
            eventParams={{ page: "hire", type: "linkedin" }}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-neutral-800 px-5 py-3 hover:bg-neutral-900 transition-colors text-sm"
          >
            LinkedIn
          </GtagLink>
          <GtagLink
            href="https://contra.com/jakwoun_reid_fs9ndm0n/work?r=jakwoun_reid_fs9ndm0n"
            event="contact_click"
            eventParams={{ page: "hire", type: "contra" }}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-neutral-800 px-5 py-3 hover:bg-neutral-900 transition-colors text-sm"
          >
            Contra
          </GtagLink>
        </div>
      </section>

      {/* ── STACK ── */}
      <section>
        <h2 className="text-xl font-bold mb-5">Stack</h2>
        <div className="space-y-3">
          {stackRows.map((s) => (
            <div key={s.category} className="flex gap-4 text-sm">
              <span className="w-36 shrink-0 text-neutral-500">{s.category}</span>
              <span className="text-neutral-300">{s.skills}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section>
        <h2 className="text-xl font-bold mb-6">Experience</h2>
        <div className="space-y-8">
          {caseStudies.map((cs) => (
            <div
              key={cs.org}
              className="rounded-2xl border border-neutral-800 p-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                <p className="font-bold text-white">{cs.org}</p>
                <span className="text-xs text-neutral-500 shrink-0">{cs.tenure}</span>
              </div>
              <p className="text-sm text-neutral-300 mb-4">{cs.outcome}</p>
              <ul className="space-y-1.5">
                {cs.details.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-neutral-500">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-neutral-700 shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHAT I'M LOOKING FOR ── */}
      <section className="rounded-2xl border border-neutral-700 bg-neutral-900/50 p-6 md:p-8">
        <h2 className="text-xl font-bold mb-4">What I&apos;m looking for</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            "Full-time remote engineering roles starting June 2026",
            "Solutions Engineer or Developer Advocate track",
            "Part-time remote contracts now (10–20 hrs/week)",
            "Fintech, insurtech, or enterprise SaaS",
          ].map((item) => (
            <div key={item} className="flex gap-3 text-sm text-neutral-400">
              <span className="text-white mt-0.5">—</span>
              {item}
            </div>
          ))}
        </div>
        <div className="mt-6 flex gap-3 flex-wrap">
          <GtagLink
            href="mailto:jakwounreid@gmail.com?subject=Let%27s%20Connect"
            event="contact_click"
            eventParams={{ page: "hire", type: "email_bottom" }}
            className="inline-flex items-center gap-2 rounded-xl bg-white text-neutral-900 px-5 py-3 text-sm font-semibold hover:bg-neutral-200 transition-colors"
          >
            Email me →
          </GtagLink>
          <GtagLink
            href="https://www.linkedin.com/in/jakwounreid/"
            event="contact_click"
            eventParams={{ page: "hire", type: "linkedin_bottom" }}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-neutral-700 px-5 py-3 text-sm hover:bg-neutral-900 transition-colors"
          >
            Message on LinkedIn →
          </GtagLink>
        </div>
      </section>
    </div>
  );
}

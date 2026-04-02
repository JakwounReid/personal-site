import Link from "next/link";

export const metadata = {
  title: "Web Development — Jakwoun Reid",
  description:
    "Custom websites and digital systems for small businesses. Three tiers: Launch, Build, and System. Fixed price, fast delivery, open source stack.",
};

const tiers = [
  {
    name: "The Launch",
    price: "$1,500",
    priceSuffix: "– $2,500",
    cadence: "one-time",
    badge: null,
    description:
      "A clean, fast, custom site that makes your business look the part — built and live in 7 days.",
    features: [
      "5-page custom site",
      "Mobile responsive + SEO ready",
      "Contact form with email notifications",
      "7-day delivery",
      "You own the code",
    ],
    cta: "Book a Call",
    ctaHref: "https://calendly.com/jakwounreid/intro-call",
    featured: false,
  },
  {
    name: "The Build",
    price: "$3,500",
    priceSuffix: "– $5,000",
    cadence: "one-time",
    badge: "Most Popular",
    description:
      "A full site plus one integrated system — booking, payments, lead capture, or ecommerce.",
    features: [
      "Everything in The Launch",
      "1 integrated system (booking, payments, ecommerce, or lead capture)",
      "CRM or email tool integration",
      "2-week delivery",
      "Post-launch walkthrough",
    ],
    cta: "Book a Call",
    ctaHref: "https://calendly.com/jakwounreid/intro-call",
    featured: true,
  },
  {
    name: "The System",
    price: "$7,500",
    priceSuffix: "– $12,000",
    cadence: "one-time",
    badge: null,
    description:
      "Your full digital infrastructure — site, automations, workflows, and integrations built from the ground up.",
    features: [
      "Everything in The Build",
      "Full automation + workflow setup",
      "Multiple system integrations",
      "Custom dashboard or admin panel",
      "4-week delivery",
      "30-day post-launch support",
    ],
    cta: "Apply Now",
    ctaHref: "https://calendly.com/jakwounreid/intro-call",
    featured: false,
  },
];

const problems = [
  {
    headline: "Your site doesn't reflect your business",
    body: "You're doing real work and making real money — but your website looks like it was built in 2014. First impressions cost you clients before you ever talk to them.",
  },
  {
    headline: "You're running on manual everything",
    body: "Booking through DMs. Invoicing by hand. Following up in your head. Every hour you spend on admin is an hour you're not spending on the work that actually pays.",
  },
  {
    headline: "You have no way to capture or convert online",
    body: "No lead form. No booking link. No payments page. People visit your site and have nowhere to go — so they leave.",
  },
];

const reasons = [
  {
    icon: "⚡",
    label: "AI-Assisted Builds",
    description:
      "I use modern AI tooling to build faster without cutting corners — you get enterprise-quality work in days, not months.",
  },
  {
    icon: "🏗️",
    label: "Enterprise Background",
    description:
      "I build production systems at Northwestern Mutual. Your business gets the same engineering standards as a Fortune 500.",
  },
  {
    icon: "🔓",
    label: "Open Source Stack",
    description:
      "No vendor lock-in. No monthly platform fees. You own every line of code and can take it anywhere.",
  },
  {
    icon: "⚙️",
    label: "Systems Thinker",
    description:
      "I don't just build websites — I build the workflows, automations, and integrations that make your business run.",
  },
];

const faqs = [
  {
    question: "Do you work with my existing site or build from scratch?",
    answer:
      "Both. If your current site is salvageable I can work with it. If it's easier to rebuild, I'll tell you honestly. Either way you get a clear recommendation on the discovery call.",
  },
  {
    question: "What platforms do you build on?",
    answer:
      "I build custom sites using Next.js, TypeScript, and Tailwind — a modern open source stack that's fast, scalable, and doesn't lock you into a monthly platform fee. For ecommerce, I work with Shopify.",
  },
  {
    question: "Do I own the code when we're done?",
    answer:
      "Yes. You get the full codebase, hosted wherever you want. No ongoing fees, no dependencies on me to keep the lights on.",
  },
  {
    question: "What if I'm not sure which tier is right for me?",
    answer:
      "Book the call. 15 minutes, no pressure. I'll ask about your business and tell you exactly what I'd build and what it would cost — before you commit to anything.",
  },
  {
    question: "Can you work with businesses outside Milwaukee?",
    answer:
      "Yes, all projects are remote. I'm based in Milwaukee but have worked with clients in other cities and states.",
  },
];

export default function BuildPage() {
  return (
    <div className="relative -mx-4 -mt-10 overflow-x-hidden">
      {/* Blueprint grid background */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* ── HERO ── */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 py-28 text-center">
        <div
          aria-hidden
          className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
        />
        <div
          aria-hidden
          className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
        />

        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/30 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-blue-400">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-400" />
          Web Development
        </p>

        <h1 className="mx-auto max-w-4xl text-5xl font-black leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl">
          Your Business Deserves{" "}
          <span className="relative inline-block text-blue-400">
            Infrastructure,
            <span
              aria-hidden
              className="absolute -bottom-1 left-0 h-px w-full bg-blue-400/50"
            />
          </span>{" "}
          Not Just a Website.
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-neutral-400 sm:text-xl">
          Custom sites and digital systems for small businesses — fixed price,
          fast delivery, open source stack. You own everything.
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="https://calendly.com/jakwounreid/intro-call"
            className="group inline-flex items-center gap-2 border border-blue-400 bg-blue-400 px-8 py-4 text-sm font-bold uppercase tracking-widest text-black transition-all duration-200 hover:bg-transparent hover:text-blue-400"
          >
            Book a Free 15-Min Call
            <svg
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium text-neutral-500 underline-offset-4 hover:text-neutral-300 hover:underline"
          >
            See pricing ↓
          </a>
        </div>

        <span aria-hidden className="absolute left-4 top-4 h-4 w-4 border-l border-t border-blue-500/20" />
        <span aria-hidden className="absolute right-4 top-4 h-4 w-4 border-r border-t border-blue-500/20" />
        <span aria-hidden className="absolute bottom-4 left-4 h-4 w-4 border-b border-l border-blue-500/20" />
        <span aria-hidden className="absolute bottom-4 right-4 h-4 w-4 border-b border-r border-blue-500/20" />
      </section>

      {/* ── PROBLEM ── */}
      <section className="border-t border-neutral-800 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-blue-400">
            Sound Familiar?
          </p>
          <h2 className="mb-12 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Making Money Offline. Losing It Online.
          </h2>

          <div className="grid gap-6 sm:grid-cols-3">
            {problems.map(({ headline, body }) => (
              <div
                key={headline}
                className="border border-neutral-800 bg-neutral-900/50 p-6"
              >
                <h3 className="mb-3 font-bold text-white">{headline}</h3>
                <p className="text-sm text-neutral-400">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="border-t border-neutral-800 bg-neutral-950/80 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-blue-400">
            The Process
          </p>
          <h2 className="mb-12 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Simple. Fast. No Surprises.
          </h2>

          <ol className="space-y-8">
            {[
              {
                n: "01",
                title: "Discovery Call",
                body: "15 minutes. I learn about your business, what you need, and what success looks like. You walk away with a clear recommendation — no obligation.",
              },
              {
                n: "02",
                title: "Scope + Fixed Price",
                body: "I send a clear proposal — exactly what I'll build, the delivery timeline, and a flat price. No hourly rates. No scope creep.",
              },
              {
                n: "03",
                title: "Build",
                body: "I get to work. You get progress updates. I use AI-assisted tooling to move fast without cutting quality corners.",
              },
              {
                n: "04",
                title: "Launch + Handoff",
                body: "We go live. I walk you through everything and hand over the full codebase. You own it. Completely.",
              },
            ].map(({ n, title, body }) => (
              <li key={n} className="flex gap-6">
                <span className="shrink-0 font-black text-blue-400/40 text-3xl leading-none mt-1">
                  {n}
                </span>
                <div>
                  <h3 className="font-bold text-white mb-1">{title}</h3>
                  <p className="text-sm text-neutral-400">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="border-t border-neutral-800 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-blue-400">
            The Offerings
          </p>
          <h2 className="mb-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Pick Your Build Level
          </h2>
          <p className="mb-12 text-neutral-400">
            Whether you need a clean site or a full business system — there&apos;s
            a tier built for where you are right now.
          </p>

          <div className="grid gap-6 sm:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`flex flex-col border bg-neutral-900 p-6 transition-colors ${
                  tier.featured
                    ? "border-blue-500/60 ring-1 ring-blue-500/20"
                    : "border-neutral-700"
                }`}
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <p className="font-bold text-white">{tier.name}</p>
                  {tier.badge && (
                    <span className="shrink-0 rounded-sm border border-blue-400/40 bg-blue-400/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-blue-400">
                      {tier.badge}
                    </span>
                  )}
                </div>

                <div className="mb-1 flex items-baseline gap-1 flex-wrap">
                  <span className="text-3xl font-black text-white">{tier.price}</span>
                  <span className="text-lg font-bold text-neutral-400">{tier.priceSuffix}</span>
                </div>
                <p className="mb-4 text-xs text-neutral-500 uppercase tracking-widest">{tier.cadence}</p>

                <p className="mb-5 text-sm text-neutral-400">{tier.description}</p>

                <ul className="mb-6 space-y-2 text-sm text-neutral-400">
                  {tier.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>

                <a
                  href={tier.ctaHref}
                  className={`group mt-auto inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-widest transition-all duration-200 ${
                    tier.featured
                      ? "border border-blue-400 bg-blue-400 text-black hover:bg-transparent hover:text-blue-400"
                      : "border border-neutral-600 bg-transparent text-white hover:border-blue-400 hover:text-blue-400"
                  }`}
                >
                  {tier.cta}
                  <svg
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY ME ── */}
      <section className="border-t border-neutral-800 bg-neutral-950/80 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-blue-400">
            Why Me
          </p>
          <h2 className="mb-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Not a Web Designer. A Systems Builder.
          </h2>
          <p className="mb-12 text-neutral-400">
            I came up through{" "}
            <span className="font-semibold text-neutral-300">i.c.stars</span> and
            have been freelancing since 2021 — with enterprise engineering
            experience at Northwestern Mutual. I build things that work, not just
            things that look good.
          </p>

          <ul className="space-y-5">
            {reasons.map(({ icon, label, description }) => (
              <li
                key={label}
                className="group flex gap-5 border border-neutral-800 bg-neutral-900/50 p-5 transition-colors hover:border-blue-500/30 hover:bg-blue-950/10"
              >
                <span className="mt-0.5 text-2xl">{icon}</span>
                <div>
                  <p className="font-bold text-white">{label}</p>
                  <p className="mt-1 text-sm text-neutral-400">{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t border-neutral-800 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-blue-400">
            Questions
          </p>
          <h2 className="mb-12 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Common Questions
          </h2>

          <ul className="space-y-4">
            {faqs.map(({ question, answer }) => (
              <li key={question}>
                <details className="group border border-neutral-800 bg-neutral-900/50 p-6 cursor-pointer">
                  <summary className="flex items-center justify-between font-semibold text-white list-none">
                    {question}
                    <svg
                      className="h-4 w-4 shrink-0 text-neutral-500 transition-transform group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-4 text-sm text-neutral-400">{answer}</p>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-neutral-800 px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-blue-400">
            Let&apos;s Build
          </p>
          <h2 className="mb-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Ready to Stop Leaving Money on the Table?
          </h2>
          <p className="mb-10 text-neutral-400">
            Book a free 15-minute call. No pitch, no pressure — just a straight
            answer on what your business needs and what it would cost.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://calendly.com/jakwounreid/intro-call"
              className="group inline-flex items-center gap-2 border border-blue-400 bg-blue-400 px-8 py-4 text-sm font-bold uppercase tracking-widest text-black transition-all duration-200 hover:bg-transparent hover:text-blue-400"
            >
              Book a Free Call
              <svg
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <Link
              href="/"
              className="text-sm font-medium text-neutral-500 underline-offset-4 hover:text-neutral-300 hover:underline"
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-neutral-800 px-6 py-10 text-center">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm font-bold tracking-tight text-white">
            Jakwoun Reid — Web Development
          </p>
          <nav className="flex gap-6 text-sm text-neutral-500">
            <Link href="/" className="transition-colors hover:text-neutral-300">
              Portfolio
            </Link>
            <Link href="/blog" className="transition-colors hover:text-neutral-300">
              Blog
            </Link>
            <Link href="/editing-services" className="transition-colors hover:text-neutral-300">
              Editing Services
            </Link>
          </nav>
          <p className="text-xs text-neutral-700">
            © {new Date().getFullYear()} Jakwoun Reid
          </p>
        </div>
      </footer>
    </div>
  );
}

import Link from "next/link";
import GtagLink from "@/components/gtag-link";

export const metadata = {
  title: "Digital Infrastructure for Service Businesses — Jakwoun Reid",
  description:
    "Custom websites, booking systems, and automations for service businesses doing $500K–$5M in revenue. Diagnosis first. Fixed price. You own the code.",
};

const BOOKING_URL = "https://calendly.com/jakwounreid/intro-call";

const tiers = [
  {
    name: "The Launch",
    tagline: "For businesses that need a real online presence, fast.",
    price: "From $3,500",

    badge: null,
    features: [
      "5-page custom site",
      "Mobile + SEO ready",
      "Lead capture + contact forms",
      "2-week delivery",
    ],
    featured: false,
  },
  {
    name: "The Build",
    tagline: "For service businesses ready to stop running on duct tape.",
    price: "From $6,000",

    badge: "Most Popular",
    features: [
      "Everything in Launch",
      "1 integrated system (booking / payments / CRM)",
      "Automations to reduce manual work",
      "3-week delivery",
    ],
    featured: true,
  },
  {
    name: "The System",
    tagline: "For operators ready to build digital infrastructure that scales.",
    price: "From $12,000",

    badge: null,
    features: [
      "Full digital infrastructure",
      "Multiple integrations + automations",
      "4-week delivery + 30-day support",
      "Built to scale with your business",
    ],
    featured: false,
  },
];

const proofPoints = [
  { stat: "Since 2021", label: "building for service businesses end-to-end" },
  { stat: "Fortune 500", label: "engineering standards applied to your business" },
  { stat: "Fixed price", label: "no hourly rates, no scope creep" },
];


const faqs = [
  {
    question: "Do you work with my existing site or build from scratch?",
    answer:
      "Both. If your current site is worth saving I'll work with it. If a rebuild is the faster path, I'll tell you honestly. Either way you get a clear recommendation on the discovery call — before you commit to anything.",
  },
  {
    question: "What does 'you own the code' actually mean?",
    answer:
      "You get the full codebase, hosted wherever you choose. There's no ongoing dependency on me to keep your site running. No platform subscription fees. You can hand it to any developer in the future.",
  },
  {
    question: "What kind of integrations can you build?",
    answer:
      "Online booking, payment processing, contact forms, CRM connections, automated follow-up sequences, review request flows, and more. If you're doing something manually today that a system could handle, that's scope for The Build or The System.",
  },
  {
    question: "What if I'm not sure which tier fits?",
    answer:
      "Book the 15-minute call. I'll ask about your business, understand where you're losing time or clients, and give you a straight recommendation — with a price — before you decide anything.",
  },
  {
    question: "What's the retainer for?",
    answer:
      "For clients who don't want to think about their site after launch. The retainer covers monthly updates, priority support, performance monitoring, and small additions as your business changes. Most clients who take it say it's the easiest line item they have.",
  },
  {
    question: "Do you work with businesses outside of Milwaukee?",
    answer:
      "Yes. All projects are remote. I've worked with clients across multiple states. Location doesn't factor into delivery.",
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
          Service Businesses · $500K–$5M Revenue
        </p>

        <h1 className="mx-auto max-w-4xl text-5xl font-black leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl">
          Your Business Earns Offline.{" "}
          <span className="relative inline-block text-blue-400">
            You&rsquo;re Leaking Leads
            <span
              aria-hidden
              className="absolute -bottom-1 left-0 h-px w-full bg-blue-400/50"
            />
          </span>{" "}
          Online.
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-neutral-400 sm:text-xl">
          Plumbers, med spas, law firms, contractors — if your website doesn&apos;t
          reflect what you&apos;ve built, you&apos;re losing clients before the first
          conversation. I build the digital infrastructure that fixes that.
        </p>

        {/* Proof points */}
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-8">
          {proofPoints.map(({ stat, label }) => (
            <div key={stat} className="text-center">
              <span className="text-lg font-black text-white">{stat}</span>{" "}
              <span className="text-sm text-neutral-500">{label}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <GtagLink
            href={BOOKING_URL}
            event="booking_click"
            eventParams={{ page: "build", position: "hero" }}
            target="_blank"
            rel="noopener noreferrer"
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </GtagLink>
          <a
            href="#pricing"
            className="text-sm font-medium text-neutral-500 underline-offset-4 hover:text-neutral-300 hover:underline"
          >
            See packages ↓
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
            {[
              {
                headline: "Your site doesn't reflect your business",
                body: "You're doing real work and generating real revenue — but your website looks like it was built in 2014. First impressions cost you clients before you ever pick up the phone.",
              },
              {
                headline: "You're running on manual everything",
                body: "Booking through DMs. Invoicing by hand. Following up from memory. Every hour spent on admin is an hour not spent on the work that actually pays.",
              },
              {
                headline: "You have no way to capture leads online",
                body: "No booking link. No lead form. No clear next step. People find you, land on your site, and leave — with no way for you to follow up.",
              },
            ].map(({ headline, body }) => (
              <div
                key={headline}
                className="border border-neutral-800 bg-neutral-900/50 p-6"
              >
                <h3 className="mb-3 font-bold text-white">{headline}</h3>
                <p className="text-sm text-neutral-400">{body}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-sm text-neutral-500">
            Not sure where your site stands?{" "}
            <a
              href="https://sitecheck.jakwoun.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline-offset-4 hover:underline"
            >
              Run a free audit with SiteCheck →
            </a>
          </p>
        </div>
      </section>

      {/* ── DIAGNOSIS FIRST ── */}
      <section className="border-t border-neutral-800 px-6 py-28">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-6 text-2xl font-black tracking-tight text-white sm:text-3xl">
            Most agencies sell you a website. I sell you the right answer.
          </h2>
          <p className="text-lg leading-relaxed text-neutral-400">
            Before I write a line of code I&apos;ll tell you what&apos;s actually
            broken — and sometimes that means a smaller build than you expected.
            Sometimes it means more. The discovery call ends with a clear
            recommendation: this is what&apos;s leaking revenue, this is what to fix
            first, this is what it costs. You can take that recommendation to me, to
            another developer, or sit on it. The answer is yours either way.
          </p>
          <div className="mt-10">
            <GtagLink
              href={BOOKING_URL}
              event="booking_click"
              eventParams={{ page: "build", position: "diagnosis_section" }}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 border border-blue-400 bg-blue-400 px-8 py-4 text-sm font-bold uppercase tracking-widest text-black transition-all duration-200 hover:bg-transparent hover:text-blue-400"
            >
              Book the 15-minute call
              <svg
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </GtagLink>
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
                body: "15 minutes. I learn about your business, where you're losing time or leads, and what success looks like. You walk away with a clear recommendation — no obligation.",
              },
              {
                n: "02",
                title: "Scope + Fixed Price",
                body: "I send a clear proposal — exactly what I'll build, the delivery timeline, and a flat price. No hourly rates. No scope creep. No surprises on the invoice.",
              },
              {
                n: "03",
                title: "Build",
                body: "I get to work. You get progress updates. I use modern tooling to move fast without cutting corners on quality.",
              },
              {
                n: "04",
                title: "Launch + Handoff",
                body: "We go live. I walk you through everything. You own the full codebase — no dependency on me to keep the lights on.",
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
      <section id="pricing" className="border-t border-neutral-800 bg-neutral-950/80 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-blue-400">
            The Offerings
          </p>
          <h2 className="mb-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Pick Your Build Level
          </h2>
          <p className="mb-12 text-neutral-400">
            Fixed price. You own the code. No ongoing platform fees.
          </p>

          <div className="grid gap-6 sm:grid-cols-3 mb-8">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`flex flex-col border bg-neutral-900 p-6 transition-colors ${
                  tier.featured
                    ? "border-blue-500/60 ring-1 ring-blue-500/20"
                    : "border-neutral-700"
                }`}
              >
                <div className="mb-2 flex items-start justify-between gap-3">
                  <p className="font-bold text-white">{tier.name}</p>
                  {tier.badge && (
                    <span className="shrink-0 rounded-sm border border-blue-400/40 bg-blue-400/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-blue-400">
                      {tier.badge}
                    </span>
                  )}
                </div>

                <p className="mb-4 text-xs text-neutral-500">{tier.tagline}</p>

                <div className="mb-5 flex items-baseline gap-1 flex-wrap">
                  <span className="text-3xl font-black text-white">{tier.price}</span>
                </div>

                <ul className="mb-6 space-y-2 text-sm text-neutral-400 flex-1">
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

                <GtagLink
                  href={BOOKING_URL}
                  event="booking_click"
                  eventParams={{ page: "build", tier: tier.name.toLowerCase().replace("the ", "") }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-widest transition-all duration-200 ${
                    tier.featured
                      ? "border border-blue-400 bg-blue-400 text-black hover:bg-transparent hover:text-blue-400"
                      : "border border-neutral-600 bg-transparent text-white hover:border-blue-400 hover:text-blue-400"
                  }`}
                >
                  Book a Call
                  <svg
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </GtagLink>
              </div>
            ))}
          </div>

          {/* Retainer */}
          <div className="border border-neutral-700 bg-neutral-900 p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex-1">
                <div className="mb-2 flex items-center gap-3">
                  <p className="font-bold text-white">Ongoing Support Retainer</p>
                  <span className="rounded-sm border border-neutral-600 bg-neutral-800 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-neutral-400">
                    Monthly
                  </span>
                </div>
                <p className="mb-4 text-sm text-neutral-400">
                  For clients who want their digital infrastructure maintained — not just
                  launched. Updates, monitoring, priority support, and incremental additions
                  as your business evolves. You stay focused on the work. I keep the systems running.
                </p>
                <ul className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-neutral-400">
                  {[
                    "Monthly updates + content changes",
                    "Priority support",
                    "Performance monitoring",
                    "Minor additions each month",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <svg className="h-3.5 w-3.5 shrink-0 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="shrink-0 sm:text-right">
                <div className="mb-4">
                  <span className="text-3xl font-black text-white">$750</span>
                  <span className="text-lg font-bold text-neutral-400"> – $1,000</span>
                  <span className="block text-sm text-neutral-500">/month</span>
                </div>
                <GtagLink
                  href={BOOKING_URL}
                  event="booking_click"
                  eventParams={{ page: "build", tier: "retainer" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 border border-neutral-600 bg-transparent px-6 py-3 text-sm font-bold uppercase tracking-widest text-white transition-all duration-200 hover:border-blue-400 hover:text-blue-400"
                >
                  Ask About Retainer
                  <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </GtagLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY ME ── */}
      <section className="border-t border-neutral-800 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-blue-400">
            Why This Works
          </p>
          <h2 className="mb-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
            I diagnose what&apos;s costing you revenue. Then I build the fix.
          </h2>
          <p className="mb-12 text-neutral-400">
            Most developers will quote you a website. I&apos;ll tell you whether a
            website is even what&apos;s broken. Sometimes the real fix is a booking
            system, an automation, or killing three tools you&apos;re paying for. The
            diagnosis comes first. The build follows.
          </p>

          <ul className="space-y-5">
            {[
              {
                icon: "⚙️",
                label: "Systems Thinker",
                description:
                  "A website is the front door. I also build what's behind it — the automations, integrations, and workflows that save you time and capture more revenue.",
              },
              {
                icon: "🏗️",
                label: "Production-Grade Standards",
                description:
                  "I've built in regulated, high-stakes fintech environments. Your business gets the same engineering rigor — without Fortune 500 timelines or prices.",
              },
              {
                icon: "🔓",
                label: "No Vendor Lock-In",
                description:
                  "Open source stack. No monthly platform fees. No dependency on me or any third-party to keep your site live. You own it, completely.",
              },
              {
                icon: "⚡",
                label: "Fast, Not Rushed",
                description:
                  "I use modern tooling to compress timelines without cutting corners. Most projects deliver in 2–4 weeks — not months.",
              },
            ].map(({ icon, label, description }) => (
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
      <section className="border-t border-neutral-800 bg-neutral-950/80 px-6 py-24">
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
            Ready to stop leaking leads?
          </h2>
          <p className="mb-10 text-neutral-400">
            Book a free 15-minute call. No pitch, no pressure — just a straight
            answer on what your business needs and what it would cost.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <GtagLink
              href={BOOKING_URL}
              event="booking_click"
              eventParams={{ page: "build", position: "bottom_cta" }}
              target="_blank"
              rel="noopener noreferrer"
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
            </GtagLink>
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
            <a
              href="https://sitecheck.jakwoun.me"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-neutral-300"
            >
              SiteCheck
            </a>
          </nav>
          <p className="text-xs text-neutral-700">
            © {new Date().getFullYear()} Jakwoun Reid
          </p>
        </div>
      </footer>
    </div>
  );
}

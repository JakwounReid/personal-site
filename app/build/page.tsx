import Link from "next/link";
import GtagLink from "@/components/gtag-link";
import CaseStudyCard, { type CaseStudy } from "@/components/case-study";

export const metadata = {
  title: "Web Development for Service Businesses — Jakwoun Reid",
  description:
    "I diagnose what's broken in your digital infrastructure, then build the fix. Custom sites, integrations, and automations for service businesses. Diagnosis first. Fixed price. You own the code.",
};

const TRIAGE_URL = "https://cal.com/jakwoun-reid-ha7wcd/15min";
const STRATEGY_URL = "https://cal.com/jakwoun-reid-ha7wcd/1-hour-strategy-consultation";
const SITECHECK_URL = "https://sitecheck.jakwoun.me";
const TEARDOWN_URL = "https://buy.stripe.com/4gMaEP9e00lc1qna53gA803";

const CREDIT_TERMS =
  "Credit applies to any build package booked within 14 days of your session. One credit per client. Applied to your build invoice; not refundable as cash.";

const tiers = [
  {
    name: "The Launch",
    tagline: "For businesses whose site is costing them credibility. You need a professional presence that converts, fast.",
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
    tagline: "For businesses drowning in manual work. Your site plus the one system (booking, payments, or CRM) that buys your time back.",
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
    tagline: "For businesses ready to run on infrastructure, not memory. Full build: site, integrations, automations, support.",
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
  { stat: "Since 2021", label: "building for solo operators and small organizations" },
  { stat: "Fortune 500", label: "engineering standards on indie founder timelines" },
  { stat: "Fixed price", label: "no hourly rates, no scope creep" },
];

const caseStudies: CaseStudy[] = [
  {
    label: "Recent Build",
    title: "Consultant Site — Full Client Infrastructure",
    image: "/case-study-consultant.jpg",
    imageAlt: "Screenshot of theo.jakwoun.me consultant site",
    stats: [
      "95+ Lighthouse scores",
      "Stripe payments + automated email, fully integrated",
      "Built in days, not months",
    ],
    description:
      "Complete digital infrastructure for an independent consultant: custom site, Stripe checkout, automated client emails, and an MDX content system — production-grade, owned outright.",
    href: "https://theo.jakwoun.me",
    linkLabel: "View the live build →",
  },
];


const faqs = [
  {
    question: "Do you work with my existing site or build from scratch?",
    answer:
      "Both. If your current site is worth saving I'll work with it. If a rebuild is the faster path, I'll tell you honestly. Either way you get a clear recommendation on a free triage call — before you commit to anything.",
  },
  {
    question: "What does 'you own the code' actually mean?",
    answer:
      "You get the full codebase, hosted wherever you choose. There's no ongoing dependency on me to keep your site running. No platform subscription fees. You can hand it to any developer in the future.",
  },
  {
    question: "What kind of integrations can you build?",
    answer:
      "Booking and intake flows, payment and subscription handling, newsletter and CRM integrations, automated client onboarding, content publishing pipelines, speaker/podcast page funnels, donation and volunteer flows. If you're doing something manually today that a system could handle, that's scope for The Build or The System.",
  },
  {
    question: "What if I'm not sure which tier fits?",
    answer:
      "Start with a free 15-minute triage call — I'll point you to the right next step. For a full prioritized plan with a price, book the $150 Strategy Session. It credits back in full toward any build booked within 14 days, so if you build, the session costs you nothing.",
  },
  {
    question: "Is the Strategy Session worth it if I might not build?",
    answer:
      "Yes. You leave with a complete written roadmap you own — take it to me, another developer, or run it yourself. And if you build with me within 14 days, the $150 comes right back off the price.",
  },
  {
    question: "What's the retainer for?",
    answer:
      "For clients who don't want to think about their site after launch. The retainer covers monthly updates, priority support, performance monitoring, and small additions as your business changes. Most clients who take it say it's the easiest line item they have.",
  },
  {
    question: "Do you work with businesses outside of Milwaukee?",
    answer:
      "Yes — most clients are remote. I'm based in Milwaukee but work with consultants, founders, and organizations across the country. Location doesn't factor into delivery.",
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
          Consultants · Coaches · Mission-Driven Founders
        </p>

        <h1 className="mx-auto max-w-4xl text-5xl font-black leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl">
          The work matters.{" "}
          <span className="text-blue-400">
            Your digital presence
          </span>{" "}
          should say so.
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-neutral-400 sm:text-xl">
          Solo consultants, coaches, and mission-driven founders running real
          operations on duct-taped tools. I build the digital infrastructure that
          matches the seriousness of the work — and quietly does the admin so you
          can stop thinking about it.
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
            href={TRIAGE_URL}
            event="booking_click"
            eventParams={{ page: "build", position: "hero", offer: "triage" }}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 border border-blue-400 bg-blue-400 px-8 py-4 text-sm font-bold uppercase tracking-widest text-black transition-all duration-200 hover:bg-transparent hover:text-blue-400"
          >
            Book a Free 15-min Triage Call
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
          <GtagLink
            href={SITECHECK_URL}
            event="sitecheck_click"
            eventParams={{ page: "build", position: "hero" }}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-neutral-400 underline-offset-4 hover:text-neutral-200 hover:underline"
          >
            Run a free audit →
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

      {/* ── START HERE ── */}
      <section className="border-t border-neutral-800 bg-neutral-950/80 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-blue-400">
            Start Here
          </p>
          <h2 className="mb-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Three ways to get a diagnosis.
          </h2>
          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-neutral-400">
            Start free, go deep when you&apos;re ready. Pick the entry point that
            fits where you are.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            {/* Triage Call */}
            <div className="flex flex-col border border-neutral-700 bg-neutral-900/50 p-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-400">
                Free · 15 min
              </p>
              <h3 className="mb-2 font-bold text-white">Triage Call</h3>
              <p className="mb-6 flex-1 text-sm text-neutral-400">
                Bring me what&apos;s broken. In 15 minutes I&apos;ll pinpoint the
                single biggest thing leaking time or revenue and tell you the right
                next step — a build, a deeper strategy session, or a free audit you
                can run yourself. A fit check and fast diagnosis, not a full working
                session.
              </p>
              <GtagLink
                href={TRIAGE_URL}
                event="booking_click"
                eventParams={{ page: "build", position: "start_here", offer: "triage" }}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 self-start text-sm font-bold uppercase tracking-widest text-blue-400 underline-offset-4 hover:underline"
              >
                Book a Triage Call
                <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </GtagLink>
            </div>

            {/* SiteCheck Audit */}
            <div className="flex flex-col border border-neutral-700 bg-neutral-900/50 p-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-400">
                Free · async
              </p>
              <h3 className="mb-2 font-bold text-white">SiteCheck Audit</h3>
              <p className="mb-6 flex-1 text-sm text-neutral-400">
                Not ready to talk? Run your site through SiteCheck for an instant
                read on performance, SEO, and the gaps costing you conversions. No
                call, no email required.
              </p>
              <GtagLink
                href={SITECHECK_URL}
                event="sitecheck_click"
                eventParams={{ page: "build", position: "start_here" }}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 self-start text-sm font-bold uppercase tracking-widest text-blue-400 underline-offset-4 hover:underline"
              >
                Run a free audit
                <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </GtagLink>
            </div>

            {/* Strategy Session */}
            <div className="flex flex-col border border-blue-500/60 bg-blue-950/10 p-6 ring-1 ring-blue-500/20">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-400">
                $150 · 60 min
              </p>
              <h3 className="mb-2 font-bold text-white">Strategy Session</h3>
              <p className="mb-6 flex-1 text-sm text-neutral-400">
                The real working session. We go deep and I build you a complete,
                prioritized roadmap live — what&apos;s broken, what to fix first,
                what it costs — plus a written roadmap doc after. The full $150
                credits toward any build you book within 14 days, so if you build,
                the session is free.
              </p>
              <GtagLink
                href={STRATEGY_URL}
                event="booking_click"
                eventParams={{ page: "build", position: "start_here", offer: "strategy" }}
                target="_blank"
                rel="noopener noreferrer"
                className="group mb-3 inline-flex items-center gap-2 self-start border border-blue-400 bg-blue-400 px-5 py-2.5 text-sm font-bold uppercase tracking-widest text-black transition-all duration-200 hover:bg-transparent hover:text-blue-400"
              >
                Book a Strategy Session
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
              <p className="text-xs text-neutral-500">
                Want the roadmap without a call?{" "}
                <a href="#teardown" className="text-blue-400 underline-offset-4 hover:underline">
                  See the Roadmap Teardown below.
                </a>
              </p>
            </div>
          </div>

          <p className="mt-6 max-w-2xl text-xs leading-relaxed text-neutral-600">
            {CREDIT_TERMS}
          </p>
        </div>
      </section>

      {/* ── ROADMAP TEARDOWN ── */}
      <section id="teardown" className="border-t border-neutral-800 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-blue-400">
            No Call? No Problem
          </p>
          <h2 className="mb-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Roadmap Teardown — $250
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-neutral-400">
            Checkout takes two minutes — you&apos;ll share your site, your main
            concern, and your goal. Within 3 business days I&apos;ll record a 15–20
            minute walkthrough — your SiteCheck results, every gap I find, and a
            priority-ordered list of what to fix and in what sequence. Yours to keep
            and hand to any developer. Credits toward any build booked within 14
            days, same as the Strategy Session.
          </p>
          <GtagLink
            href={TEARDOWN_URL}
            event="teardown_click"
            eventParams={{ page: "build", position: "teardown_section" }}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 border border-blue-400 bg-blue-400 px-8 py-4 text-sm font-bold uppercase tracking-widest text-black transition-all duration-200 hover:bg-transparent hover:text-blue-400"
          >
            Start a Teardown
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
      </section>

      {/* ── PROBLEM ── */}
      <section className="border-t border-neutral-800 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-blue-400">
            Sound Familiar?
          </p>
          <h2 className="mb-12 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Your work has depth. Your digital presence doesn&apos;t show it yet.
          </h2>

          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                headline: "Your site doesn't match your work",
                body: "You're doing important work — leading workshops, advising founders, building programs that actually change people's lives. Your website looks like it was assembled in a weekend in 2022. There's a gap between who you are in person and who your site says you are.",
              },
              {
                headline: "Your admin stack is held together with duct tape",
                body: "Calendly, Stripe, Mailchimp, Notion, a Google form, a Typeform you forgot about. Each one solves part of the problem. None of them talk to each other. Every new client means three manual steps that should be one.",
              },
              {
                headline: "You're the bottleneck for your own growth",
                body: "Speaking gigs, podcast appearances, newsletter mentions — they all drive traffic to a site that converts a fraction of what it should. You know the system needs to be rebuilt. You also know you're not the person who should be rebuilding it.",
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
            Want a quick read on where your site stands?{" "}
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
                title: "Start: Triage or Strategy Session",
                body: "Start free with a 15-minute triage call or a SiteCheck audit. When you're ready to go deep, the $150 Strategy Session delivers a full prioritized roadmap — and credits back in full toward your build.",
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

      {/* ── DIAGNOSIS FIRST ── */}
      <section className="border-t border-neutral-800 px-6 py-28">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-6 text-2xl font-black tracking-tight text-white sm:text-3xl">
            Most agencies sell you a website. I sell you the right answer.
          </h2>
          <p className="text-lg leading-relaxed text-neutral-400">
            Before I write a line of code I&apos;ll tell you what&apos;s actually
            broken — and sometimes that means a smaller build than you expected.
            Sometimes it means more. The Strategy Session ends with a clear,
            written recommendation: this is what&apos;s leaking revenue, this is
            what to fix first, this is what it costs. You can take that to me, to
            another developer, or sit on it. The answer is yours either way.
          </p>
          <div className="mt-10">
            <GtagLink
              href={STRATEGY_URL}
              event="booking_click"
              eventParams={{ page: "build", position: "diagnosis_section", offer: "strategy" }}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 border border-blue-400 bg-blue-400 px-8 py-4 text-sm font-bold uppercase tracking-widest text-black transition-all duration-200 hover:bg-transparent hover:text-blue-400"
            >
              Book a Strategy Session
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

      {/* ── CASE STUDY ── */}
      <section className="border-t border-neutral-800 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-blue-400">
            Proof
          </p>
          <h2 className="mb-12 text-3xl font-black tracking-tight text-white sm:text-4xl">
            A recent build, start to finish.
          </h2>

          <div className="space-y-6">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.title} study={study} />
            ))}
          </div>
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
                  href={STRATEGY_URL}
                  event="booking_click"
                  eventParams={{ page: "build", tier: tier.name.toLowerCase().replace("the ", ""), offer: "strategy" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-widest transition-all duration-200 ${
                    tier.featured
                      ? "border border-blue-400 bg-blue-400 text-black hover:bg-transparent hover:text-blue-400"
                      : "border border-neutral-600 bg-transparent text-white hover:border-blue-400 hover:text-blue-400"
                  }`}
                >
                  Book a Strategy Session
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

          <p className="mb-8 text-sm text-neutral-400">
            Not sure which tier?{" "}
            <GtagLink
              href={STRATEGY_URL}
              event="booking_click"
              eventParams={{ page: "build", position: "pricing_note", offer: "strategy" }}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline-offset-4 hover:underline"
            >
              Book a Strategy Session
            </GtagLink>{" "}
            — it credits back in full when you build.
          </p>

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
                  as your business evolves. You stay focused on the work. I keep the systems
                  running. Most clients tell me it&apos;s the easiest line item they have.
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
                  <span className="text-3xl font-black text-white">From $750</span>
                  <span className="block text-sm text-neutral-500">/month</span>
                </div>
                <GtagLink
                  href={TRIAGE_URL}
                  event="booking_click"
                  eventParams={{ page: "build", tier: "retainer", offer: "triage" }}
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
                  "A website is the front door. I also build what's behind it — the automations, integrations, and workflows that quietly run your operation so you can focus on the work itself.",
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
            Ready for a digital presence that matches the work?
          </h2>
          <p className="mb-10 text-neutral-400">
            Start free with a 15-minute triage call, or go deep with the $150
            Strategy Session — a live diagnosis and a full prioritized plan that
            credits back in full when you build.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <GtagLink
              href={TRIAGE_URL}
              event="booking_click"
              eventParams={{ page: "build", position: "bottom_cta", offer: "triage" }}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 border border-neutral-600 bg-transparent px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all duration-200 hover:border-blue-400 hover:text-blue-400"
            >
              Book a Free Triage Call
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
            <GtagLink
              href={STRATEGY_URL}
              event="booking_click"
              eventParams={{ page: "build", position: "bottom_cta", offer: "strategy" }}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 border border-blue-400 bg-blue-400 px-8 py-4 text-sm font-bold uppercase tracking-widest text-black transition-all duration-200 hover:bg-transparent hover:text-blue-400"
            >
              Book a Strategy Session — $150
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

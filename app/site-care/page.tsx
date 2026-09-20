import Link from "next/link";
import GtagLink from "@/components/gtag-link";
import Testimonials from "@/components/testimonials";
import FooterSignup from "@/components/footer-signup";
import { ArrowIcon, CheckIcon } from "@/components/ui";
import { clarityCall, INTEREST } from "@/lib/booking";

export const metadata = {
  title: "Site Care & Support — Ongoing Maintenance for Your Website | Jakwoun Reid",
  description:
    "Recurring site care for Wix, Squarespace, Shopify, and Kajabi. Fixed monthly price, never hourly. Someone who owns your site so you don't have to. Every plan starts with a free clarity call.",
  openGraph: {
    title: "Site Care & Support — Jakwoun Reid",
    description:
      "Recurring maintenance for Wix, Squarespace, Shopify, and Kajabi sites. Fixed monthly price, one request at a time, no hourly billing.",
    url: "https://jakwoun.me/site-care",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Site Care & Support — Jakwoun Reid",
    description:
      "Recurring maintenance for Wix, Squarespace, Shopify, and Kajabi sites. Fixed monthly price, no hourly billing.",
    images: ["/og-image.jpg"],
  },
};

const CLARITY_URL = clarityCall(INTEREST.siteCare);
const SITECHECK_URL = "https://sitecheck.jakwoun.me";

// Shared terms that apply to every care plan — stated plainly on the page.
const sharedTerms = [
  "3-month minimum, then month-to-month with 30 days notice",
  "Billed monthly via Stripe subscription",
  "Fixed monthly price, never hourly",
  "One active request at a time",
  "Unused requests do not roll over",
  "Work beyond the plan is quoted separately as a mini-project",
  "Each cycle opens with a planning conversation to set priorities",
];

// `outcome` replaces the old price line — what the tier buys you, not what it costs.
// Pricing is set per engagement on the clarity call, never listed.
const tiers = [
  {
    name: "Essentials",
    outcome: "The basics, handled",
    tagline: "For a site that mostly works and needs a steady hand on it.",
    features: [
      "3 requests per month",
      "Response in 3–5 business days",
      "One active request at a time",
    ],
    featured: false,
  },
  {
    name: "Growth",
    outcome: "Moving forward every month",
    tagline: "For a site doing real work that you want moving forward every month.",
    features: [
      "8 requests per month",
      "Response in 2 business days",
      "Monthly report",
    ],
    featured: true,
  },
  {
    name: "Partner",
    outcome: "Off your plate entirely",
    tagline: "For when your site is core to the business and you want it handled.",
    features: [
      "Unlimited request queue (one active at a time)",
      "Response by next business day",
      "Monthly report + priority queue",
      "Quarterly Strategy Session included",
    ],
    featured: false,
  },
];

const tuneUpIncludes = [
  "Copy tightening on your key pages",
  "SEO and metadata basics",
  "Speed and mobile cleanup",
  "Analytics wired up",
];

const reportContents = [
  "Work completed this month",
  "Requests used and remaining",
  "Site health — uptime, page speed, broken links",
  "Traffic and top pages",
  "Conversions",
  "One recommendation for next month",
];

const faqs = [
  {
    question: "What counts as a request?",
    answer:
      "A request is a single defined task — a content swap, a page update, an SEO fix, a speed cleanup, a broken form. Not measured in hours. If something is bigger than a single task, I'll tell you on the clarity call and we'll scope it as a mini-project.",
  },
  {
    question: "Why is there no checkout button?",
    answer:
      "Because scope determines which plan fits, and I can't tell that from a payment page. Every plan starts with a free clarity call so we land on the right tier before you pay for anything. There is no self-serve checkout for care plans.",
  },
  {
    question: "Do I need the Tune-Up before joining a plan?",
    answer:
      "No. The Tune-Up is a one-time on-ramp for a neglected site. If your site is rough, that work can just as easily happen inside a care plan, one request at a time. The Tune-Up is there if you'd rather get everything cleaned up in a single two-week push first.",
  },
  {
    question: "What if I need more than my plan covers in a given month?",
    answer:
      "Anything beyond your plan's requests is quoted separately as a mini-project. You're never surprised by an hourly bill — the monthly price is fixed.",
  },
  {
    question: "Which platforms do you support?",
    answer:
      "Wix, Squarespace, Shopify, and Kajabi. If your site is on one of those, I can care for it.",
  },
];

export default function SiteCarePage() {
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
      <section className="relative flex min-h-[80vh] flex-col items-center justify-center px-6 py-28 text-center">
        <div
          aria-hidden
          className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
        />
        <div
          aria-hidden
          className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
        />

        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/30 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-blue-400">
          Wix · Squarespace · Shopify · Kajabi
        </p>

        <h1 className="mx-auto max-w-4xl text-5xl font-black leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl">
          Someone owns your site,{" "}
          <span className="text-blue-400">so you don&apos;t have to.</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-neutral-400 sm:text-xl">
          Your site is up. Keeping it fast, current, and working is a job nobody
          on your team wants. Site Care is a fixed monthly price for exactly that
          — uptime, updates, and one person who quietly keeps it running.
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <GtagLink
            href={CLARITY_URL}
            event="booking_click"
            eventParams={{ page: "site-care", position: "hero", offer: "triage" }}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 border border-blue-400 bg-blue-400 px-8 py-4 text-sm font-bold uppercase tracking-widest text-black transition-all duration-200 hover:bg-transparent hover:text-blue-400"
          >
            Book a Free 15-min Clarity Call
            <ArrowIcon />
          </GtagLink>
          <GtagLink
            href={SITECHECK_URL}
            event="sitecheck_click"
            eventParams={{ page: "site-care", position: "hero" }}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-neutral-400 underline-offset-4 hover:text-neutral-200 hover:underline"
          >
            Run a free audit →
          </GtagLink>
          <a
            href="#plans"
            className="text-sm font-medium text-neutral-500 underline-offset-4 hover:text-neutral-300 hover:underline"
          >
            See plans ↓
          </a>
        </div>

        <span aria-hidden className="absolute left-4 top-4 h-4 w-4 border-l border-t border-blue-500/20" />
        <span aria-hidden className="absolute right-4 top-4 h-4 w-4 border-r border-t border-blue-500/20" />
        <span aria-hidden className="absolute bottom-4 left-4 h-4 w-4 border-b border-l border-blue-500/20" />
        <span aria-hidden className="absolute bottom-4 right-4 h-4 w-4 border-b border-r border-blue-500/20" />
      </section>

      {/* ── WHAT YOU GET ── */}
      <section className="border-t border-neutral-800 bg-neutral-950/80 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-blue-400">
            Peace Of Mind
          </p>
          <h2 className="mb-12 text-3xl font-black tracking-tight text-white sm:text-4xl">
            The upkeep you keep meaning to get to.
          </h2>

          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                headline: "It stays fast and current",
                body: "Content swaps, page updates, broken forms, slow pages — handled as they come up, before they cost you. You send a request; I take it from there.",
              },
              {
                headline: "You stop being the fallback",
                body: "No more fixing your own site at 11pm because there was no one else. One person owns it now, and it isn't you.",
              },
              {
                headline: "One predictable line item",
                body: "A fixed monthly price — never hourly, never a surprise invoice. You know exactly what it costs before the month starts.",
              },
            ].map(({ headline, body }) => (
              <div key={headline} className="border border-neutral-800 bg-neutral-900/50 p-6">
                <h3 className="mb-3 font-bold text-white">{headline}</h3>
                <p className="text-sm text-neutral-400">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORM TUNE-UP (on-ramp) ── */}
      <section className="border-t border-neutral-800 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-blue-400">
            The On-Ramp
          </p>
          <h2 className="mb-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Platform Tune-Up
          </h2>
          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-neutral-400">
            A neglected site rarely needs a rebuild — it needs a focused cleanup.
            The Tune-Up is a two-week sprint that gets a rough site back to
            performing on purpose, in one push.
          </p>

          <div className="border border-blue-500/60 bg-blue-950/10 p-6 ring-1 ring-blue-500/20 sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex-1">
                <div className="mb-2 flex items-center gap-3">
                  <p className="font-bold text-white">Platform Tune-Up</p>
                  <span className="rounded-sm border border-blue-400/40 bg-blue-400/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-blue-400">
                    2-week sprint
                  </span>
                </div>
                <ul className="mb-4 grid gap-x-6 gap-y-1 text-sm text-neutral-400 sm:grid-cols-2">
                  {tuneUpIncludes.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckIcon className="mt-0.5 h-3.5 w-3.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-neutral-400">
                  <span className="font-semibold text-neutral-300">Not required to join a care plan.</span>{" "}
                  If your site is rough, that same work can happen inside a plan,
                  one request at a time. The Tune-Up just gets it all done at once
                  — a clean starting line before the ongoing care begins.
                </p>
              </div>
              <div className="shrink-0 sm:text-right">
                <div className="mb-4">
                  <span className="block text-xl font-black leading-tight text-white sm:max-w-[13rem]">
                    A rough site, performing on purpose
                  </span>
                  <span className="mt-1 block text-sm text-neutral-500">
                    Two weeks · scoped on the call
                  </span>
                </div>
                <GtagLink
                  href={CLARITY_URL}
                  event="booking_click"
                  eventParams={{ page: "site-care", tier: "tune-up", offer: "triage" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 border border-blue-400 bg-blue-400 px-6 py-3 text-sm font-bold uppercase tracking-widest text-black transition-all duration-200 hover:bg-transparent hover:text-blue-400"
                >
                  Book a Clarity Call
                  <ArrowIcon />
                </GtagLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PLANS ── */}
      <section id="plans" className="border-t border-neutral-800 bg-neutral-950/80 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-blue-400">
            Care Plans
          </p>
          <h2 className="mb-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Pick the level of attention your site needs.
          </h2>
          <p className="mb-10 max-w-2xl text-neutral-400">
            Every plan is a fixed monthly price with no hourly billing. The right
            tier depends on how much your site moves — we settle that on the free
            clarity call.
          </p>

          {/* ── STAT STRIP ── (kept from the prior offer page; build-specific
               wording removed to fit ongoing care) ── */}
          <div className="mb-12 grid gap-px overflow-hidden rounded-sm border border-neutral-800 bg-neutral-800 sm:grid-cols-3">
            {[
              { value: "95+", label: "Lighthouse scores I hold your site to" },
              { value: "Fixed", label: "monthly price — never hourly" },
              // TODO: replace hardcoded value with live count from SiteCheck /api/stats
              { value: "120+", label: "free audits run" },
            ].map(({ value, label }) => (
              <div key={label} className="bg-neutral-950 px-6 py-6">
                <p className="font-mono text-3xl font-black tracking-tight text-white">
                  {value}
                </p>
                <p className="mt-1 text-sm text-neutral-500">{label}</p>
              </div>
            ))}
          </div>

          <div className="mb-8 grid gap-6 lg:grid-cols-3">
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
                  <p className="font-bold text-white">Site Care — {tier.name}</p>
                  {tier.featured && (
                    <span className="shrink-0 rounded-sm border border-blue-400/40 bg-blue-400/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-blue-400">
                      Most Popular
                    </span>
                  )}
                </div>

                <p className="mb-4 text-xs text-neutral-500">{tier.tagline}</p>

                <div className="mb-5">
                  <p className="text-xl font-black leading-tight text-white">
                    {tier.outcome}
                  </p>
                  <p className="mt-1 text-sm text-neutral-500">
                    Fixed monthly · scoped on the call
                  </p>
                </div>

                <ul className="mb-6 flex-1 space-y-2 text-sm text-neutral-400">
                  {tier.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2">
                      <CheckIcon className="mt-0.5" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <GtagLink
                  href={CLARITY_URL}
                  event="booking_click"
                  eventParams={{ page: "site-care", tier: tier.name.toLowerCase(), offer: "triage" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-widest transition-all duration-200 ${
                    tier.featured
                      ? "border border-blue-400 bg-blue-400 text-black hover:bg-transparent hover:text-blue-400"
                      : "border border-neutral-600 bg-transparent text-white hover:border-blue-400 hover:text-blue-400"
                  }`}
                >
                  Book a Clarity Call
                  <ArrowIcon />
                </GtagLink>
              </div>
            ))}
          </div>

          <div className="border border-blue-500/30 bg-blue-950/10 p-6 text-sm text-neutral-300">
            <span className="font-semibold text-white">No self-serve checkout.</span>{" "}
            Every plan starts with a free clarity call, because scope determines
            which tier fits. There&apos;s no payment link to click — we talk
            first, land on the right plan, then set it up.
          </div>
        </div>
      </section>

      {/* ── HOW EVERY PLAN WORKS ── */}
      <section className="border-t border-neutral-800 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-blue-400">
            How Every Plan Works
          </p>
          <h2 className="mb-10 text-3xl font-black tracking-tight text-white sm:text-4xl">
            The same rules, on every tier.
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <ul className="space-y-3 text-sm text-neutral-300">
              {sharedTerms.map((term) => (
                <li key={term} className="flex items-start gap-3">
                  <CheckIcon className="mt-0.5" />
                  {term}
                </li>
              ))}
            </ul>

            <div className="space-y-6">
              <div className="border border-neutral-800 bg-neutral-900/50 p-6">
                <h3 className="mb-2 font-bold text-white">What a request is</h3>
                <p className="text-sm text-neutral-400">
                  A single defined task — a content swap, a page update, an SEO
                  fix, a speed cleanup, a broken form. Not measured in hours.
                  Whether a given ask fits as one request is something we settle
                  on the clarity call.
                </p>
              </div>
              <div className="border border-neutral-800 bg-neutral-900/50 p-6">
                <h3 className="mb-2 font-bold text-white">
                  What&apos;s in the monthly report
                </h3>
                <p className="mb-3 text-xs text-neutral-500">
                  Included on Growth and Partner.
                </p>
                <ul className="grid gap-x-6 gap-y-1 text-sm text-neutral-400 sm:grid-cols-2">
                  {reportContents.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckIcon className="mt-0.5 h-3.5 w-3.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS (feature-flagged; ships hidden until real quotes land) ── */}
      <Testimonials />

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
            Get Started
          </p>
          <h2 className="mb-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Hand off the upkeep.
          </h2>
          <p className="mb-10 text-neutral-400">
            Book a free 15-minute clarity call. We&apos;ll figure out which plan
            fits your site — no checkout, no commitment on the call.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <GtagLink
              href={CLARITY_URL}
              event="booking_click"
              eventParams={{ page: "site-care", position: "bottom_cta", offer: "triage" }}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 border border-blue-400 bg-blue-400 px-8 py-4 text-sm font-bold uppercase tracking-widest text-black transition-all duration-200 hover:bg-transparent hover:text-blue-400"
            >
              Book a Free Clarity Call
              <ArrowIcon />
            </GtagLink>
            <Link
              href="/strategy"
              className="text-sm font-medium text-neutral-500 underline-offset-4 hover:text-neutral-300 hover:underline"
            >
              Just want a plan? See Strategy →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-neutral-800 px-6 py-10">
        <div className="mx-auto mb-8 flex max-w-3xl justify-center sm:justify-start">
          <FooterSignup />
        </div>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between">
          <p className="text-sm font-bold tracking-tight text-white">
            Jakwoun Reid — Digital Infrastructure
          </p>
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-neutral-500">
            <Link href="/" className="transition-colors hover:text-neutral-300">
              Home
            </Link>
            <Link href="/strategy" className="transition-colors hover:text-neutral-300">
              Strategy
            </Link>
            <Link href="/career-strategy" className="transition-colors hover:text-neutral-300">
              Career Strategy
            </Link>
            <Link href="/blog" className="transition-colors hover:text-neutral-300">
              Blog
            </Link>
            <a
              href={SITECHECK_URL}
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

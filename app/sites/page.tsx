import Link from "next/link";
import GtagLink from "@/components/gtag-link";
import Testimonials from "@/components/testimonials";
import FooterSignup from "@/components/footer-signup";
import { ArrowIcon, CheckIcon } from "@/components/ui";
import { clarityCall, INTEREST } from "@/lib/booking";
import { BUILD_TOOL } from "@/lib/sites";

export const metadata = {
  title: "Sites — Move Off Wix or Squarespace, or Launch Something New | Jakwoun Reid",
  description: `Move a Wix or Squarespace site to ${BUILD_TOOL}, or launch a new one in a fixed-scope sprint. You own the code and the account, and you learn to edit it yourself. Every build starts from a strategy roadmap.`,
  openGraph: {
    title: "Sites — Jakwoun Reid",
    description: `Move off Wix or Squarespace, or launch something new — on a site you own and can edit yourself. Every build starts from a roadmap.`,
    url: "https://jakwoun.me/sites",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sites — Jakwoun Reid",
    description: `Move off Wix or Squarespace, or launch something new — on a site you own and can edit yourself.`,
    images: ["/og-image.jpg"],
  },
};

const CLARITY_URL = clarityCall(INTEREST.websites);
const SITECHECK_URL = "https://sitecheck.jakwoun.me";

// Neither offer is bought cold. Both start after a Strategy Session or Roadmap Teardown
// on /strategy — the roadmap is the scope, so there's nothing to quote from this page.

const moveIncludes = [
  `Rebuilt on ${BUILD_TOOL}, with your content carried over`,
  "301 redirects from every old URL, so links and search rankings follow you",
  "Forms, booking, and email capture reconnected and tested",
  "DNS cutover to your domain",
  `The project transferred to your own ${BUILD_TOOL} workspace`,
  "A live handoff session: you learn to edit by describing the change",
];

const sprintIncludes = [
  "A new site, built to a fixed scope set by your roadmap",
  "About two weeks, start to launch",
  "Two batched feedback rounds — not a running thread of tweaks",
  `Your own ${BUILD_TOOL} workspace, code, and account`,
  "The same live handoff session",
];

const howIBuild = [
  {
    headline: "AI-assisted, engineer-reviewed",
    body: `Built with ${BUILD_TOOL}, then reviewed by an engineer who shipped software to enterprise standards at Northwestern Mutual. Fast tooling, not unchecked output.`,
  },
  {
    headline: "Security-checked before launch",
    body: "Anything that collects data — a form, a booking flow, an email signup — gets a security check before it goes live.",
  },
  {
    headline: "You own all of it",
    body: "The code and the account are yours. No platform lock-in to me, no hostage situation if we stop working together.",
  },
];

const afterHandoff = [
  {
    title: "Edit it yourself",
    body: `That's the point of the handoff. Describe the change in ${BUILD_TOOL}, review it, publish it.`,
  },
  {
    title: "Advisory Retainer",
    body: "Send questions and decisions as they come up, async. Direction, not builds.",
    href: "/strategy#retainer",
  },
  {
    title: "A new sprint",
    body: "When the next big thing needs building, we scope it the same way and run another sprint.",
  },
];

const faqs = [
  {
    question: "Do I need a Strategy Session or Teardown first?",
    answer:
      "Yes. Both offers start from a roadmap, because the roadmap is the scope. It's how a build stays fixed — we've already agreed on what matters before anything gets built. The free clarity call tells us which one fits.",
  },
  {
    question: "My site is on Shopify or Kajabi. Can you move it?",
    answer: `Not with Move to ${BUILD_TOOL}. It's built for Wix and Squarespace sites. Shopify stores and Kajabi courses or memberships carry commerce and member systems this offer doesn't replace. A Strategy Session can still help you decide what to do with them.`,
  },
  {
    question: "Who owns the site when we're done?",
    answer: `You do. The project moves to your own ${BUILD_TOOL} workspace, and the code and the account are yours.`,
  },
  {
    question: "Do you offer a maintenance plan?",
    answer:
      "No. The handoff is built so you can make changes yourself. For ongoing direction there's the Advisory Retainer; for the next big build, a new sprint.",
  },
];

export default function SitesPage() {
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
          Build &amp; Handoff
        </p>

        <h1 className="mx-auto max-w-4xl text-5xl font-black leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl">
          A site you own,{" "}
          <span className="text-blue-400">and can change yourself.</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-neutral-400 sm:text-xl">
          Move off Wix or Squarespace, or launch something new. Either way you
          end up with the code, the account, and the know-how to edit it by
          describing what you want changed.
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <GtagLink
            href={CLARITY_URL}
            event="booking_click"
            eventParams={{ page: "sites", position: "hero", offer: "triage" }}
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
            eventParams={{ page: "sites", position: "hero" }}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-neutral-400 underline-offset-4 hover:text-neutral-200 hover:underline"
          >
            Run a free audit →
          </GtagLink>
          <a
            href="#offers"
            className="text-sm font-medium text-neutral-500 underline-offset-4 hover:text-neutral-300 hover:underline"
          >
            See both offers ↓
          </a>
        </div>

        <span aria-hidden className="absolute left-4 top-4 h-4 w-4 border-l border-t border-blue-500/20" />
        <span aria-hidden className="absolute right-4 top-4 h-4 w-4 border-r border-t border-blue-500/20" />
        <span aria-hidden className="absolute bottom-4 left-4 h-4 w-4 border-b border-l border-blue-500/20" />
        <span aria-hidden className="absolute bottom-4 right-4 h-4 w-4 border-b border-r border-blue-500/20" />
      </section>

      {/* ── ROADMAP FIRST ── */}
      <section className="border-t border-neutral-800 bg-neutral-950/80 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-blue-400">
            Roadmap First
          </p>
          <h2 className="mb-6 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Nothing gets built before we know what to build.
          </h2>
          <p className="text-lg leading-relaxed text-neutral-400">
            Both offers start after a{" "}
            <Link href="/strategy" className="font-semibold text-white underline-offset-4 hover:text-blue-400 hover:underline">
              Strategy Session or Roadmap Teardown
            </Link>
            . The roadmap is the scope — what the site needs to do, what
            matters most, what can wait. That&apos;s what keeps a build fixed
            instead of open-ended.
          </p>
        </div>
      </section>

      {/* ── THE TWO OFFERS ── */}
      <section id="offers" className="border-t border-neutral-800 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-blue-400">
            Two Offers
          </p>
          <h2 className="mb-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Move what you have, or launch what you need.
          </h2>
          <p className="mb-10 max-w-2xl text-neutral-400">
            Same standards, same handoff. The difference is whether there&apos;s
            a site to move.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Move to BUILD_TOOL */}
            <div className="flex flex-col border border-blue-500/60 bg-blue-950/10 p-8 ring-1 ring-blue-500/20">
              <p className="mb-2 text-lg font-bold text-white">Move to {BUILD_TOOL}</p>
              <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-blue-400">
                For Wix &amp; Squarespace sites
              </p>
              <p className="mb-5 text-sm text-neutral-400">
                Your site, rebuilt on a platform you own and can edit yourself —
                without losing the links, forms, or search rankings you already
                have.
              </p>
              <ul className="mb-6 flex-1 space-y-2 text-sm text-neutral-400">
                {moveIncludes.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <p className="mb-6 border-l-2 border-neutral-700 pl-3 text-xs text-neutral-500">
                <span className="font-semibold text-neutral-300">Not for</span>{" "}
                Shopify stores or Kajabi courses and memberships.
              </p>
              <GtagLink
                href={CLARITY_URL}
                event="booking_click"
                eventParams={{ page: "sites", offer: "migration" }}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 self-start border border-blue-400 bg-blue-400 px-6 py-3 text-sm font-bold uppercase tracking-widest text-black transition-all duration-200 hover:bg-transparent hover:text-blue-400"
              >
                Book a Clarity Call
                <ArrowIcon />
              </GtagLink>
            </div>

            {/* Launch Sprint */}
            <div className="flex flex-col border border-neutral-700 bg-neutral-900 p-8">
              <p className="mb-2 text-lg font-bold text-white">Launch Sprint</p>
              <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-blue-400">
                New site · fixed scope · about two weeks
              </p>
              <p className="mb-5 text-sm text-neutral-400">
                For when there&apos;s nothing worth moving — or nothing yet. A
                new site built to the scope your roadmap set, then handed over.
              </p>
              <ul className="mb-6 flex-1 space-y-2 text-sm text-neutral-400">
                {sprintIncludes.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <GtagLink
                href={CLARITY_URL}
                event="booking_click"
                eventParams={{ page: "sites", offer: "launch_sprint" }}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 self-start border border-neutral-600 bg-transparent px-6 py-3 text-sm font-bold uppercase tracking-widest text-white transition-all duration-200 hover:border-blue-400 hover:text-blue-400"
              >
                Book a Clarity Call
                <ArrowIcon />
              </GtagLink>
            </div>
          </div>

          <div className="mt-8 border border-blue-500/30 bg-blue-950/10 p-6 text-sm text-neutral-300">
            <span className="font-semibold text-white">No self-serve checkout.</span>{" "}
            Scope comes from your roadmap, and cost comes from scope. Start with
            a free 15-minute clarity call — we&apos;ll work out whether you need
            a Session or a Teardown first, and which build fits after.
          </div>
        </div>
      </section>

      {/* ── HOW I BUILD ── */}
      <section className="border-t border-neutral-800 bg-neutral-950/80 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-blue-400">
            How I Build
          </p>
          <h2 className="mb-12 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Modern tools, enterprise habits.
          </h2>

          <div className="grid gap-6 sm:grid-cols-3">
            {howIBuild.map(({ headline, body }) => (
              <div key={headline} className="border border-neutral-800 bg-neutral-900/50 p-6">
                <h3 className="mb-3 font-bold text-white">{headline}</h3>
                <p className="text-sm text-neutral-400">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AFTER HANDOFF ── */}
      <section className="border-t border-neutral-800 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-blue-400">
            After Handoff
          </p>
          <h2 className="mb-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
            No maintenance plan. On purpose.
          </h2>
          <p className="mb-10 max-w-2xl text-neutral-400">
            The whole build is designed so you don&apos;t need someone on call
            to change a headline. From here, you have three options.
          </p>

          <div className="grid gap-6 sm:grid-cols-3">
            {afterHandoff.map(({ title, body, href }) => (
              <div key={title} className="flex flex-col border border-neutral-800 bg-neutral-900/50 p-6">
                <h3 className="mb-3 font-bold text-white">{title}</h3>
                <p className="flex-1 text-sm text-neutral-400">{body}</p>
                {href && (
                  <Link
                    href={href}
                    className="group mt-4 inline-flex items-center gap-2 self-start text-sm font-semibold text-blue-400 hover:text-blue-300"
                  >
                    How the retainer works
                    <ArrowIcon />
                  </Link>
                )}
              </div>
            ))}
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
            Own the next version of your site.
          </h2>
          <p className="mb-10 text-neutral-400">
            Book a free 15-minute clarity call. We&apos;ll figure out where you
            are and what comes first — no checkout, no commitment on the call.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <GtagLink
              href={CLARITY_URL}
              event="booking_click"
              eventParams={{ page: "sites", position: "bottom_cta", offer: "triage" }}
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
              Start with the roadmap? See Strategy →
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

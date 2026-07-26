import Link from "next/link";
import GtagLink from "@/components/gtag-link";
import FooterSignup from "@/components/footer-signup";
import { ArrowIcon, CheckIcon } from "@/components/ui";

export const metadata = {
  title: "Strategy — Sessions & Roadmap Teardowns | Jakwoun Reid",
  description:
    "Paid strategy for your digital presence: a $150 live Strategy Session or a $250 written Roadmap Teardown. Leave with direction and decisions. Both fees credit toward any paid offer.",
  openGraph: {
    title: "Strategy — Jakwoun Reid",
    description:
      "A $150 live Strategy Session or a $250 written Roadmap Teardown. Both fees credit toward any paid offer.",
    url: "https://jakwoun.me/strategy",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Strategy — Jakwoun Reid",
    description:
      "A $150 live Strategy Session or a $250 written Roadmap Teardown. Both fees credit toward any paid offer.",
    images: ["/og-image.jpg"],
  },
};

const TRIAGE_URL = "https://cal.com/jakwoun-reid-ha7wcd/15min";
const SITECHECK_URL = "https://sitecheck.jakwoun.me";
const STRATEGY_URL = "https://cal.com/jakwoun-reid-ha7wcd/2-hour-strategy-consultation";
const TEARDOWN_URL = "https://buy.stripe.com/4gMaEP9e00lc1qna53gA803";

const CREDIT_NOTE =
  "The fee for either credits toward any paid offer — a Tune-Up, a care plan, another engagement. If you go further with me, the diagnostic pays for itself.";

export default function StrategyPage() {
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
      <section className="relative flex min-h-[70vh] flex-col items-center justify-center px-6 py-28 text-center">
        <div
          aria-hidden
          className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
        />
        <div
          aria-hidden
          className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
        />

        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/30 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-blue-400">
          Advisory
        </p>

        <h1 className="mx-auto max-w-4xl text-5xl font-black leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl">
          Know what to fix{" "}
          <span className="text-blue-400">before you spend a dollar fixing it.</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-neutral-400 sm:text-xl">
          Two ways to get a clear read on your business and its digital
          presence: a live working session, or a written roadmap you keep. Both
          leave you with direction and decisions — with or without me doing the
          work after.
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#session"
            className="group inline-flex items-center gap-2 border border-blue-400 bg-blue-400 px-8 py-4 text-sm font-bold uppercase tracking-widest text-black transition-all duration-200 hover:bg-transparent hover:text-blue-400"
          >
            See both options
            <ArrowIcon />
          </a>
          <GtagLink
            href={TRIAGE_URL}
            event="booking_click"
            eventParams={{ page: "strategy", position: "hero", offer: "triage" }}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-neutral-400 underline-offset-4 hover:text-neutral-200 hover:underline"
          >
            Not sure? Book a free triage call →
          </GtagLink>
        </div>

        <span aria-hidden className="absolute left-4 top-4 h-4 w-4 border-l border-t border-blue-500/20" />
        <span aria-hidden className="absolute right-4 top-4 h-4 w-4 border-r border-t border-blue-500/20" />
        <span aria-hidden className="absolute bottom-4 left-4 h-4 w-4 border-b border-l border-blue-500/20" />
        <span aria-hidden className="absolute bottom-4 right-4 h-4 w-4 border-b border-r border-blue-500/20" />
      </section>

      {/* ── THE TWO OFFERS ── */}
      <section id="session" className="border-t border-neutral-800 bg-neutral-950/80 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-blue-400">
            Two Ways In
          </p>
          <h2 className="mb-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
            A conversation, or a document.
          </h2>
          <p className="mb-10 max-w-2xl text-neutral-400">
            Pick by how you work best. Want to think it through live? Take the
            Session. Want a plan handed to you with minimal back-and-forth? Take
            the Teardown.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Strategy Session */}
            <div className="flex flex-col border border-blue-500/60 bg-blue-950/10 p-8 ring-1 ring-blue-500/20">
              <div className="mb-2 flex items-baseline justify-between gap-3">
                <p className="font-bold text-white text-lg">Strategy Session</p>
                <span className="text-2xl font-black text-white">$150</span>
              </div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-blue-400">
                2 hours · live
              </p>
              <p className="mb-5 text-sm text-neutral-400">
                A working conversation about the business and its digital
                presence. We go deep together and you leave with direction and
                decisions — what&apos;s broken, what matters, what to do next.
              </p>
              <ul className="mb-6 flex-1 space-y-2 text-sm text-neutral-400">
                {[
                  "Two hours, live, working through it together",
                  "You leave with clear direction and decisions",
                  "No written deliverable — this is the working session, not a document",
                  "Fee credits toward any paid offer",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <GtagLink
                href={STRATEGY_URL}
                event="booking_click"
                eventParams={{ page: "strategy", offer: "strategy" }}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 border border-blue-400 bg-blue-400 px-6 py-3 text-sm font-bold uppercase tracking-widest text-black transition-all duration-200 hover:bg-transparent hover:text-blue-400"
              >
                Book a Strategy Session
                <ArrowIcon />
              </GtagLink>
            </div>

            {/* Roadmap Teardown */}
            <div className="flex flex-col border border-neutral-700 bg-neutral-900 p-8">
              <div className="mb-2 flex items-baseline justify-between gap-3">
                <p className="font-bold text-white text-lg">Roadmap Teardown</p>
                <span className="text-2xl font-black text-white">$250</span>
              </div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-blue-400">
                Async · written deliverable
              </p>
              <p className="mb-5 text-sm text-neutral-400">
                I review your site and business independently, then deliver a
                written, prioritized roadmap: what&apos;s broken, what matters,
                and what order to fix it in. Minimal back-and-forth by design.
              </p>
              <ul className="mb-6 flex-1 space-y-2 text-sm text-neutral-400">
                {[
                  "A written, prioritized roadmap you keep",
                  "I work independently — minimal back-and-forth",
                  "A document you can act on with or without me",
                  "Fee credits toward any paid offer",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <GtagLink
                href={TEARDOWN_URL}
                event="teardown_click"
                eventParams={{ page: "strategy", offer: "teardown" }}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 border border-neutral-600 bg-transparent px-6 py-3 text-sm font-bold uppercase tracking-widest text-white transition-all duration-200 hover:border-blue-400 hover:text-blue-400"
              >
                Start a Teardown
                <ArrowIcon />
              </GtagLink>
            </div>
          </div>

          <div className="mt-8 border border-blue-500/30 bg-blue-950/10 p-6 text-sm text-neutral-300">
            <span className="font-semibold text-white">These pay for themselves.</span>{" "}
            {CREDIT_NOTE}
          </div>
        </div>
      </section>

      {/* ── WHICH ONE ── */}
      <section className="border-t border-neutral-800 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-blue-400">
            Which One
          </p>
          <h2 className="mb-8 text-3xl font-black tracking-tight text-white sm:text-4xl">
            The difference in one line.
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-neutral-400">
            <p>
              The <span className="font-semibold text-white">Session</span> is a
              live conversation. You bring the questions, we work through them
              together, and you walk away with decisions made. There&apos;s no
              written deliverable — the value is the two hours of thinking done
              with you.
            </p>
            <p>
              The <span className="font-semibold text-white">Teardown</span> is a
              document. You buy a written, prioritized roadmap you keep and can
              hand to any developer — or run yourself. It exists whether or not
              we ever work together again.
            </p>
          </div>
          <div className="mt-10">
            <GtagLink
              href={TRIAGE_URL}
              event="booking_click"
              eventParams={{ page: "strategy", position: "which_one", offer: "triage" }}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-blue-400 underline-offset-4 hover:text-blue-300 hover:underline"
            >
              Still deciding? A free triage call sorts it in 15 minutes →
            </GtagLink>
          </div>
        </div>
      </section>

      {/* ── FREE OPTIONS ── */}
      <section className="border-t border-neutral-800 bg-neutral-950/80 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-blue-400">
            Free First
          </p>
          <h2 className="mb-10 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Not ready to pay for a diagnosis? Start here.
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col border border-neutral-700 bg-neutral-900/50 p-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-400">
                Free · 15 min
              </p>
              <h3 className="mb-2 font-bold text-white">Triage Call</h3>
              <p className="mb-6 flex-1 text-sm text-neutral-400">
                A fast fit-and-scope check. Bring me what&apos;s bugging you and
                I&apos;ll point you to the right next step — paid or not.
              </p>
              <GtagLink
                href={TRIAGE_URL}
                event="booking_click"
                eventParams={{ page: "strategy", position: "free_options", offer: "triage" }}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 self-start text-sm font-bold uppercase tracking-widest text-blue-400 underline-offset-4 hover:underline"
              >
                Book a Triage Call
                <ArrowIcon />
              </GtagLink>
            </div>

            <div className="flex flex-col border border-neutral-700 bg-neutral-900/50 p-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-400">
                Free · async
              </p>
              <h3 className="mb-2 font-bold text-white">SiteCheck Audit</h3>
              <p className="mb-6 flex-1 text-sm text-neutral-400">
                Run your site through SiteCheck for an instant read on
                performance and SEO, with the full report sent to your inbox.
              </p>
              <GtagLink
                href={SITECHECK_URL}
                event="sitecheck_click"
                eventParams={{ page: "strategy", position: "free_options" }}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 self-start text-sm font-bold uppercase tracking-widest text-blue-400 underline-offset-4 hover:underline"
              >
                Run a free audit
                <ArrowIcon />
              </GtagLink>
            </div>
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
            <Link href="/site-care" className="transition-colors hover:text-neutral-300">
              Site Care
            </Link>
            <Link href="/coaching" className="transition-colors hover:text-neutral-300">
              Coaching
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

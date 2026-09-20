import Link from "next/link";
import Image from "next/image";
import GtagLink from "@/components/gtag-link";
import FooterSignup from "@/components/footer-signup";
import { ArrowIcon, CheckIcon } from "@/components/ui";
import { clarityCall, INTEREST } from "@/lib/booking";

export const metadata = {
  title: "Career Strategy — Sessions & Roadmap Teardowns | Jakwoun Reid",
  description:
    "Career strategy for people breaking into tech: a live Career Strategy Session or a written Career Roadmap Teardown. Leave with direction and decisions — positioning, target roles, what to fix first.",
  openGraph: {
    title: "Career Strategy — Jakwoun Reid",
    description:
      "A live Career Strategy Session or a written Career Roadmap Teardown. Direction and decisions for your job search, not a twelve-week commitment.",
    url: "https://jakwoun.me/career-strategy",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Career Strategy — Jakwoun Reid",
    description:
      "A live Career Strategy Session or a written Career Roadmap Teardown. Direction and decisions for your job search, not a twelve-week commitment.",
    images: ["/og-image.jpg"],
  },
};

const CLARITY_URL = clarityCall(INTEREST.careerStrategy);
const SITECHECK_URL = "https://sitecheck.jakwoun.me";

// Both offers route to the Clarity Call. The 90-minute Strategy Session in Cal covers
// career work and business work alike (STRATEGY_SESSION_URL in lib/booking); the
// Teardown has no checkout by design. Scope and cost get settled on the call first.

// TODO: no free self-serve career diagnostic exists yet (the SiteCheck analog for
// a resume/LinkedIn quick-check). The placeholder card below ships until one does.
const RESUME_CHECK_URL: string | null = null;

const notForYou = [
  "You want a job handed to you rather than a clear read on how to go get one.",
  "You're looking for someone to write your applications and do the reaching out for you.",
  "You want someone to run your search for months. This is diagnosis and direction — you run it.",
  "You want a guarantee. I can give you an honest read and a plan, not a promise about outcomes.",
];

export default function CareerStrategyPage() {
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
          Career Advisory
        </p>

        <h1 className="mx-auto max-w-4xl text-5xl font-black leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl">
          Know what to fix{" "}
          <span className="text-blue-400">before you send another application.</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-neutral-400 sm:text-xl">
          Two ways to get a clear read on your job search: a live working
          session, or a written roadmap you keep. Both leave you with direction
          and decisions — positioning, target roles, what to fix first and in
          what order.
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
            href={CLARITY_URL}
            event="booking_click"
            eventParams={{ page: "career-strategy", position: "hero", offer: "triage" }}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-neutral-400 underline-offset-4 hover:text-neutral-200 hover:underline"
          >
            Not sure? Book a free clarity call →
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
            {/* Career Strategy Session */}
            <div className="flex flex-col border border-blue-500/60 bg-blue-950/10 p-8 ring-1 ring-blue-500/20">
              <p className="mb-2 font-bold text-white text-lg">
                Career Strategy Session
              </p>
              <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-blue-400">
                90 minutes · live
              </p>
              <p className="mb-5 text-sm text-neutral-400">
                A working conversation about where you actually are and where
                you&apos;re trying to go. We go deep together and you leave with
                direction and decisions — what&apos;s holding the search back,
                what matters, what to do next.
              </p>
              <ul className="mb-6 flex-1 space-y-2 text-sm text-neutral-400">
                {[
                  "Your positioning — the specific way you tell your story",
                  "The target roles you're actually competitive for",
                  "Resume and LinkedIn priorities, in order",
                  "What to fix first, and what to ignore for now",
                  "No written deliverable — this is the working session, not a document",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <GtagLink
                href={CLARITY_URL}
                event="booking_click"
                eventParams={{ page: "career-strategy", offer: "career_session" }}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 border border-blue-400 bg-blue-400 px-6 py-3 text-sm font-bold uppercase tracking-widest text-black transition-all duration-200 hover:bg-transparent hover:text-blue-400"
              >
                Book a Clarity Call to Scope It
                <ArrowIcon />
              </GtagLink>
            </div>

            {/* Career Roadmap Teardown */}
            <div className="flex flex-col border border-neutral-700 bg-neutral-900 p-8">
              <p className="mb-2 font-bold text-white text-lg">
                Career Roadmap Teardown
              </p>
              <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-blue-400">
                Async · written deliverable
              </p>
              <p className="mb-5 text-sm text-neutral-400">
                I review your resume, your LinkedIn, and the direction
                you&apos;re aiming at — independently — then deliver a written,
                prioritized roadmap: what&apos;s weak, what matters, and what
                order to fix it in. Minimal back-and-forth by design.
              </p>
              <ul className="mb-6 flex-1 space-y-2 text-sm text-neutral-400">
                {[
                  "A written, prioritized roadmap you keep",
                  "Resume and LinkedIn reviewed line by line",
                  "A positioning and target-role read you can act on",
                  "I work independently — minimal back-and-forth",
                  "A document that works with or without me",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <GtagLink
                href={CLARITY_URL}
                event="booking_click"
                eventParams={{ page: "career-strategy", offer: "career_teardown" }}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 border border-neutral-600 bg-transparent px-6 py-3 text-sm font-bold uppercase tracking-widest text-white transition-all duration-200 hover:border-blue-400 hover:text-blue-400"
              >
                Book a Clarity Call to Scope It
                <ArrowIcon />
              </GtagLink>
            </div>
          </div>

          <div className="mt-8 border border-blue-500/30 bg-blue-950/10 p-6 text-sm text-neutral-300">
            <span className="font-semibold text-white">No self-serve checkout.</span>{" "}
            Scope decides which of these fits and what it costs, and I
            can&apos;t tell that from a payment page. Every engagement starts
            with a free 15-minute clarity call — we talk first, land on the right
            one, then set it up.
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
              live conversation. You bring the questions — what am I even
              qualified for, why is this resume not landing, where do I aim — we
              work through them together, and you walk away with decisions made.
              There&apos;s no written deliverable; the value is the thinking
              done with you.
            </p>
            <p>
              The <span className="font-semibold text-white">Teardown</span> is a
              document. You get a written, prioritized roadmap you keep — your
              positioning, your target roles, and the fixes in the order they
              matter. It exists whether or not we ever work together again.
            </p>
          </div>
          <div className="mt-10">
            <GtagLink
              href={CLARITY_URL}
              event="booking_click"
              eventParams={{ page: "career-strategy", position: "which_one", offer: "triage" }}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-blue-400 underline-offset-4 hover:text-blue-300 hover:underline"
            >
              Still deciding? A free clarity call sorts it in 15 minutes →
            </GtagLink>
          </div>
        </div>
      </section>

      {/* ── WHO'S ADVISING YOU ── */}
      <section className="border-t border-neutral-800 bg-neutral-950/80 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-6 text-xs font-medium uppercase tracking-widest text-blue-400">
            Who&apos;s Advising You
          </p>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
            <Image
              src="/profile-travel.jpg"
              alt="Jakwoun Reid"
              width={160}
              height={160}
              className="h-40 w-40 shrink-0 rounded-2xl object-cover shadow-lg"
            />
            <p className="max-w-2xl text-neutral-300">
              I&apos;m Jakwoun Reid. I came into tech through a non-traditional
              path myself — a workforce program, a lot of self-teaching — and
              went on to build software as an engineer inside a Fortune 100
              company. I know what it&apos;s like to be on the outside looking
              in, and I know exactly what it takes to get through the door,
              because I did it.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHO THIS ISN'T FOR ── */}
      <section className="border-t border-neutral-800 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-blue-400">
            Read This First
          </p>
          <h2 className="mb-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Who this isn&apos;t for.
          </h2>
          <p className="mb-8 max-w-2xl text-neutral-400">
            I&apos;d rather be straight with you now than waste your money. This
            isn&apos;t the right fit if:
          </p>
          <ul className="max-w-2xl space-y-3 text-sm text-neutral-300">
            {notForYou.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 border border-neutral-800 bg-neutral-900/50 p-4"
              >
                <span aria-hidden className="mt-0.5 text-neutral-600">✕</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-2xl text-neutral-400">
            If you read that list and thought &quot;that&apos;s not me — I just
            need to know what to do,&quot; then we should talk.
          </p>
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
              <h3 className="mb-2 font-bold text-white">Clarity Call</h3>
              <p className="mb-6 flex-1 text-sm text-neutral-400">
                A fast fit-and-scope check. Tell me where the search is stuck and
                I&apos;ll point you to the right next step — paid or not.
              </p>
              <GtagLink
                href={CLARITY_URL}
                event="booking_click"
                eventParams={{ page: "career-strategy", position: "free_options", offer: "triage" }}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 self-start text-sm font-bold uppercase tracking-widest text-blue-400 underline-offset-4 hover:underline"
              >
                Book a Clarity Call
                <ArrowIcon />
              </GtagLink>
            </div>

            {/* Placeholder: the SiteCheck analog for careers doesn't exist yet. */}
            <div className="flex flex-col border border-dashed border-neutral-800 bg-neutral-900/30 p-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-600">
                Coming soon
              </p>
              <h3 className="mb-2 font-bold text-neutral-400">
                Resume &amp; LinkedIn Quick-Check
              </h3>
              <p className="mb-6 flex-1 text-sm text-neutral-500">
                A free self-serve read on your resume and LinkedIn — the career
                equivalent of a SiteCheck audit. Not built yet. Until it is, the
                clarity call does the same job, faster.
              </p>
              {RESUME_CHECK_URL ? (
                <GtagLink
                  href={RESUME_CHECK_URL}
                  event="resume_check_click"
                  eventParams={{ page: "career-strategy", position: "free_options" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 self-start text-sm font-bold uppercase tracking-widest text-blue-400 underline-offset-4 hover:underline"
                >
                  Run a free check
                  <ArrowIcon />
                </GtagLink>
              ) : (
                <span className="self-start text-sm font-bold uppercase tracking-widest text-neutral-700">
                  Not yet available
                </span>
              )}
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
            <Link href="/strategy" className="transition-colors hover:text-neutral-300">
              Strategy
            </Link>
            <Link href="/site-care" className="transition-colors hover:text-neutral-300">
              Site Care
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

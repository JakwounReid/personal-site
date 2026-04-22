import Image from "next/image";
import Link from "next/link";
import ContactForm from "./contact-form";
import GtagLink from "@/components/gtag-link";

export const metadata = {
  title: "Professional Post-Production Partner — Jakwoun Reid",
  description:
    "High-retention editing for creators, realtors, and brands. 4K quality, 48-hour delivery, and social-first strategy — raw clips to scroll-stopping stories.",
};

const tiers = [
  {
    name: "The Starter",
    price: "$150",
    cadence: "per project",
    badge: null,
    description:
      "One polished short-form deliverable. Sharp, captioned, and ready to post.",
    features: [
      "1 × 4K short-form edit (60–90 sec)",
      "Captions + text overlays",
      "Platform-optimized 9:16 export",
      "2 revision rounds",
      "48-hr standard delivery",
    ],
    cta: "Book a Project",
    ctaHref:
      "mailto:jakwoun@jakwoun.me?subject=The%20Starter%20-%20Editing%20Services&body=Hi%20Jakwoun%2C%0A%0AI%27m%20interested%20in%20The%20Starter%20package.%0A%0AProject%20details%3A%0A",
    featured: false,
  },
  {
    name: "The Growth",
    price: "$850",
    cadence: "/mo",
    badge: "Most Popular",
    description:
      "Recurring monthly editing for consistent posting — built for creators and brands who show up every week.",
    features: [
      "8 × 4K short-form edits per month",
      "Captions, color grade, and sound design",
      "Platform-optimized exports (9:16 + 16:9)",
      "Content calendar alignment",
      "48-hr turnaround SLA",
      "Unlimited minor revision requests",
    ],
    cta: "Start Monthly",
    ctaHref:
      "mailto:jakwoun@jakwoun.me?subject=The%20Growth%20-%20Editing%20Services&body=Hi%20Jakwoun%2C%0A%0AI%27m%20interested%20in%20The%20Growth%20monthly%20package.%0A%0AChannel%2FSocial%3A%0AMonthly%20output%20goal%3A%0A",
    featured: true,
  },
  {
    name: "The Professional",
    price: "$1,500",
    cadence: "/mo",
    badge: null,
    description:
      "Full-scale content management and strategy — for brands and operators who need a true post-production partner.",
    features: [
      "Content strategy + scripting support",
      "Unlimited short-form edits",
      "1 × flagship long-form edit per month",
      "Thumbnail design included",
      "Priority 48-hr turnaround",
      "Monthly strategy call",
    ],
    cta: "Apply Now",
    ctaHref:
      "mailto:jakwoun@jakwoun.me?subject=The%20Professional%20-%20Editing%20Services&body=Hi%20Jakwoun%2C%0A%0AI%27m%20interested%20in%20The%20Professional%20package.%0A%0ABrand%2FChannel%3A%0AMonthly%20output%20goal%3A%0A",
    featured: false,
  },
];

const workflow = [
  {
    icon: "📱",
    label: "4K Master Quality",
    description:
      "Shot on the Pixel 10 Pro and processed on M4 Silicon — every deliverable is true 4K with professional color grade, not compressed phone footage.",
  },
  {
    icon: "⚡",
    label: "48-Hour Delivery",
    description:
      "Standard across all short-form projects. You send the footage, I send back a scroll-stopping edit — no queues, no delays, no excuses.",
  },
  {
    icon: "📐",
    label: "Social-First Strategy",
    description:
      "Every edit is built around hooks, captions, and retention — engineered for the algorithm, not just the aesthetic. Platform-optimized 9:16 and 16:9 exports included.",
  },
];

export default function EditingServicesPage() {
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
          Post-Production
        </p>

        <h1 className="mx-auto max-w-3xl text-5xl font-black leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl">
          Your Professional{" "}
          <span className="relative inline-block text-blue-400">
            Post-Production Partner.
            <span
              aria-hidden
              className="absolute -bottom-1 left-0 h-px w-full bg-blue-400/50"
            />
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-neutral-400 sm:text-xl">
          From raw clips to scroll-stopping stories. High-retention editing for
          creators, realtors, and brands.
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#pricing"
            className="group inline-flex items-center gap-2 border border-blue-400 bg-blue-400 px-8 py-4 text-sm font-bold uppercase tracking-widest text-black transition-all duration-200 hover:bg-transparent hover:text-blue-400"
          >
            See Pricing
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
            href="#reel"
            className="text-sm font-medium text-neutral-500 underline-offset-4 hover:text-neutral-300 hover:underline"
          >
            Watch the reel ↓
          </a>
        </div>

        {/* Corner registration marks */}
        <span
          aria-hidden
          className="absolute left-4 top-4 h-4 w-4 border-l border-t border-blue-500/20"
        />
        <span
          aria-hidden
          className="absolute right-4 top-4 h-4 w-4 border-r border-t border-blue-500/20"
        />
        <span
          aria-hidden
          className="absolute bottom-4 left-4 h-4 w-4 border-b border-l border-blue-500/20"
        />
        <span
          aria-hidden
          className="absolute bottom-4 right-4 h-4 w-4 border-b border-r border-blue-500/20"
        />
      </section>

      {/* ── REEL ── */}
      <section id="reel" className="border-t border-neutral-800 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-blue-400">
            Luxury Showcase
          </p>
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              Oasis Monte Y Mar — Destination Reel
            </h2>
            <span className="inline-flex items-center gap-1.5 rounded-sm border border-yellow-500/40 bg-yellow-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-yellow-400">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-yellow-400" />
              In Progress
            </span>
          </div>
          <p className="mb-12 text-neutral-400">
            A 9:16 cinematic reel shot and edited entirely for social — from
            raw 4K capture to final export with color grade, sound design, and
            captions. A benchmark example of production quality.
          </p>

          {/* 9:16 video container — fixed phone width */}
          <div className="mx-auto w-full border border-blue-500/20" style={{ maxWidth: "320px" }}>
            <div className="relative w-full" style={{ paddingTop: "177.78%" }}>
              <iframe
                src="https://drive.google.com/file/d/1NxY0ZEz7ZxS3CvzwGyUPz5XhTfOcUSyF/preview"
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Oasis Monte Y Mar — Destination Reel"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── WORKFLOW ── */}
      <section className="border-t border-neutral-800 bg-neutral-950/80 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-blue-400">
            Why Me
          </p>
          <h2 className="mb-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Built for Speed. Built for Craft.
          </h2>
          <p className="mb-12 text-neutral-400">
            No render queues. No thermal throttling. Every project runs on a
            purpose-built stack that ships clean, fast, and on spec.
          </p>

          <ul className="space-y-5">
            {workflow.map(({ icon, label, description }) => (
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

      {/* ── PRICING ── */}
      <section id="pricing" className="border-t border-neutral-800 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-blue-400">
            The Offerings
          </p>
          <h2 className="mb-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Pick Your Production Level
          </h2>
          <p className="mb-12 text-neutral-400">
            Whether you need one reel or a full content engine — there&apos;s a
            tier built for where you are right now.
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

                <div className="mb-4 flex items-baseline gap-1">
                  <span className="text-3xl font-black text-white">
                    {tier.price}
                  </span>
                  <span className="text-sm text-neutral-500">{tier.cadence}</span>
                </div>

                <p className="mb-5 text-sm text-neutral-400">
                  {tier.description}
                </p>

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
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>

                <GtagLink
                  href={tier.ctaHref}
                  event="editing_inquiry_click"
                  eventParams={{ tier: tier.name }}
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </GtagLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="border-t border-neutral-800 bg-neutral-950/80 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-blue-400">
            The Editor
          </p>
          <h2 className="mb-8 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Built From the Ground Up.
          </h2>

          <div className="mb-10 grid gap-8 sm:grid-cols-[1fr_2fr]">
            <div className="space-y-3">
              <div className="relative aspect-square w-full max-w-[200px] overflow-hidden border border-blue-500/20">
                <Image
                  src="/profile-travel.jpg"
                  alt="Jakwoun Reid — Editor"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Credential badges */}
              <div className="flex flex-col gap-2 max-w-[200px]">
                <span className="inline-flex items-center gap-1.5 rounded-sm border border-blue-500/30 bg-blue-950/30 px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-blue-400">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-400" />
                  i.c.stars Alumnus
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-sm border border-neutral-600/40 bg-neutral-800/40 px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-neutral-400">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-neutral-400" />
                  The Travel Architect
                </span>
              </div>
            </div>
            <div className="space-y-4 text-neutral-400">
              <p>
                I&apos;m Jakwoun — a software developer, videographer, and
                post-production editor. I came up through{" "}
                <span className="font-semibold text-neutral-300">i.c.stars</span>,
                a rigorous tech training program that built my systems thinking
                from scratch — and I bring that same precision to every edit.
              </p>
              <p>
                My work building{" "}
                <span className="font-semibold text-neutral-300">
                  The Travel Architect
                </span>{" "}
                proved that content could live at the intersection of cinematic
                craft and algorithmic efficiency. These aren&apos;t just pretty
                cuts — every frame has a purpose, every reel has a structure,
                and every delivery is on time.
              </p>
              <p className="text-neutral-300">
                Whether you&apos;re a creator building an audience, a realtor
                showcasing listings, or a brand that needs a consistent content
                presence — let&apos;s build something worth watching.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="border-t border-neutral-800 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-blue-400">
            Let&apos;s Build
          </p>
          <h2 className="mb-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Tell Me About the Project.
          </h2>
          <p className="mb-12 text-neutral-400">
            Drop the details below — I&apos;ll come back with a plan and a
            timeline within 24 hours.
          </p>

          <ContactForm />
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-neutral-800 px-6 py-10 text-center">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm font-bold tracking-tight text-white">
            Jakwoun Reid — Post-Production
          </p>
          <nav className="flex gap-6 text-sm text-neutral-500">
            <Link href="/" className="transition-colors hover:text-neutral-300">
              Portfolio
            </Link>
            <Link
              href="/travel-architect-mke"
              className="transition-colors hover:text-neutral-300"
            >
              Travel Architect MKE
            </Link>
            <Link
              href="/blog"
              className="transition-colors hover:text-neutral-300"
            >
              Blog
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

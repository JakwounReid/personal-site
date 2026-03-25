import Image from "next/image";
import Link from "next/link";
import { WaitlistButton } from "@/components/waitlist-modal";

export const metadata = {
  title: "The Travel Architect MKE — Milwaukee Relocation Guide 2026",
  description:
    "From Bay View to the Burbs — get the curated directory and relocation guide designed for newcomers and Chicago transplants.",
};

export default function TravelArchitectMKEPage() {
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
        {/* Architectural accent lines */}
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
          The Travel Architect
        </p>

        <h1 className="mx-auto max-w-3xl text-5xl font-black leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl">
          Your Blueprint for{" "}
          <span className="relative inline-block text-blue-400">
            MKE Living.
            <span
              aria-hidden
              className="absolute -bottom-1 left-0 h-px w-full bg-blue-400/50"
            />
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-neutral-400 sm:text-xl">
          From Bay View to the Burbs — I&apos;ve mapped Milwaukee so you
          don&apos;t have to. Get the curated directory and relocation guide
          designed for newcomers and Chicago transplants.
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <WaitlistButton className="group inline-flex items-center gap-2 rounded-none border border-blue-400 bg-blue-400 px-8 py-4 text-sm font-bold uppercase tracking-widest text-black transition-all duration-200 hover:bg-transparent hover:text-blue-400">
            Join the Waitlist
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
          </WaitlistButton>
          <a
            href="#the-guide"
            className="text-sm font-medium text-neutral-500 underline-offset-4 hover:text-neutral-300 hover:underline"
          >
            See what&apos;s inside ↓
          </a>
        </div>

        {/* Corner registration marks — architectural detail */}
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

      {/* ── BIO — The Architect ── */}
      <section className="border-t border-neutral-800 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-blue-400">
            The Architect
          </p>
          <h2 className="mb-8 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Jakwoun — The MKE Architect
          </h2>

          <div className="grid gap-8 sm:grid-cols-[1fr_2fr]">
            {/* Profile photo */}
            <div className="relative aspect-square w-full max-w-[200px] border border-blue-500/20 overflow-hidden">
              <Image
                src="/profile-travel.jpg"
                alt="Jakwoun — The MKE Architect"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-4 text-neutral-400">
              <p>
                I&apos;m a Milwaukee local, software developer, and videographer
                who knows this city beyond the Bucks games and beer gardens.
                I&apos;m documenting the rentals, the neighborhoods, the local
                spots, and the logistics that actually matter when you&apos;re
                making a move.
              </p>
              <p>
                As a developer, I think in systems. As a videographer, I show
                what&apos;s actually there — not the tourist version. The Travel
                Architect MKE is the resource I wish existed for people moving
                here from Chicago, the coasts, or anywhere in between.
              </p>
              <p className="text-neutral-300">
                This isn&apos;t a generic &ldquo;moving to Milwaukee&rdquo;
                listicle. It&apos;s a blueprint — built from the ground up by
                someone who lives it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE OFFER ── */}
      <section
        id="the-guide"
        className="border-t border-neutral-800 bg-neutral-950/80 px-6 py-24"
      >
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-blue-400">
            The Deliverable
          </p>
          <h2 className="mb-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
            The 2026 Milwaukee Relocation Guide
          </h2>
          <p className="mb-12 text-neutral-400">
            Every section is built from direct local experience and
            independently verified. No affiliate filler — just the information
            that moves the needle.
          </p>

          <ul className="space-y-5">
            {[
              {
                icon: "🏠",
                label: "Rental Directory",
                description:
                  "Vetted Airbnbs, long-term rentals, and properties across Milwaukee and surrounding areas — from Bay View to Lake Geneva.",
              },
              {
                icon: "📍",
                label: "Curated Neighborhood Guide",
                description:
                  "Third Ward, Wauwatosa, East Side, Bay View, and beyond — what each area actually feels like to live in.",
              },
              {
                icon: "⚡",
                label: "Relocation Checklist",
                description:
                  "Step-by-step guidance on the practical stuff: utilities, commute, cost of living, and settling into the community.",
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

      {/* ── FEATURED PARTNERS ── */}
      <section className="border-t border-neutral-800 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-blue-400">
                The Directory Preview
              </p>
              <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                Featured Partners
              </h2>
              <p className="mt-3 max-w-xl text-neutral-400">
                A preview of the vetted directory inside the guide. Every
                listing is hand-selected — no sponsored placements.
              </p>
            </div>
            <p className="shrink-0 text-xs uppercase tracking-widest text-neutral-600 sm:self-end">
              Full directory in the guide
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                category: "Short-term rental",
                location: "Third Ward, Milwaukee",
              },
              {
                category: "Long-term rental",
                location: "Bay View, Milwaukee",
              },
              {
                category: "Property",
                location: "Wauwatosa, Milwaukee",
              },
            ].map(({ category, location }) => (
              <div
                key={location}
                className="group flex flex-col border border-neutral-800 bg-neutral-900/50 transition-colors hover:border-blue-500/30 hover:bg-blue-950/10"
              >
                {/* 16:9 placeholder image */}
                <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-neutral-800"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px)
                      `,
                      backgroundSize: "20px 20px",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs uppercase tracking-widest text-neutral-600">
                      Photo
                    </span>
                  </div>
                  {/* Vetted badge */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full border border-blue-500/40 bg-blue-950/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-blue-300 backdrop-blur-sm">
                    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.491 4.491 0 01-3.497-1.307 4.491 4.491 0 01-1.307-3.497A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Vetted by the Architect
                  </div>
                </div>

                {/* Card body */}
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="rounded-sm border border-blue-500/30 bg-blue-950/40 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-blue-400">
                      {category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-neutral-500">
                      <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.013 3.5-4.619 3.5-7.327A8 8 0 004 12c0 2.708 1.555 5.314 3.5 7.327a19.58 19.58 0 002.683 2.282 16.974 16.974 0 001.144.742zM12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Partner CTA */}
          <div className="mt-16 border border-neutral-800 bg-neutral-900/50 p-8 sm:p-12">
            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-blue-400">
              For Property Owners
            </p>
            <h3 className="mb-4 text-2xl font-black tracking-tight text-white sm:text-3xl">
              Get Your Property In Front of the Right People
            </h3>
            <p className="mb-10 max-w-2xl text-neutral-400">
              If you own an Airbnb, long-term rental, or property for sale in
              Milwaukee or the surrounding area — I&apos;d like to work with
              you. I show up, film a professional 4K/8K POV walkthrough, and
              deliver a polished social reel plus raw footage you keep forever.
              No generic real estate filter — just an honest, high-quality look
              at what makes your space worth choosing.
            </p>

            {/* Pricing cards */}
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Card 1 — Promo Video */}
              <div className="flex flex-col border border-neutral-700 bg-neutral-900 p-6 text-left">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <p className="font-bold text-white">Promo Video / Reel</p>
                  <span className="shrink-0 rounded-sm border border-blue-400/40 bg-blue-400/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-blue-400">
                    Limited Intro Offer
                  </span>
                </div>
                <div className="mb-4 flex items-baseline gap-2">
                  <span className="text-3xl font-black text-white">$70</span>
                  <span className="text-sm text-neutral-500 line-through">$140</span>
                </div>
                <p className="mb-5 text-sm text-neutral-400">
                  A professional 4K/8K POV walkthrough edited into a
                  social-ready reel, plus all raw footage delivered to you.
                  Perfect for Airbnb hosts, rental owners, and property managers
                  who want standout content.
                </p>
                <ul className="mb-6 space-y-2 text-sm text-neutral-400">
                  {[
                    "4K/8K POV walkthrough",
                    "Edited social reel (Instagram/TikTok ready)",
                    "Full raw footage included",
                    "Delivered within 5 business days",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
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
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="mailto:jakwoun@jakwoun.me?subject=Book%20a%20Property%20Shoot%20-%20MKE&body=Hi%20Jakwoun%2C%0A%0AI%27d%20like%20to%20book%20a%20property%20shoot.%0A%0AProperty%20address%3A%0AProperty%20type%20(Airbnb%2C%20long-term%20rental%2C%20for%20sale)%3A%0APreferred%20dates%3A%0A"
                  className="group mt-auto inline-flex items-center gap-2 border border-blue-400 bg-blue-400 px-6 py-3 text-sm font-bold uppercase tracking-widest text-black transition-all duration-200 hover:bg-transparent hover:text-blue-400"
                >
                  Book a Shoot
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
              </div>

              {/* Card 2 — Directory Listing */}
              <div className="flex flex-col border border-neutral-700 bg-neutral-900 p-6 text-left">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <p className="font-bold text-white">Directory Listing</p>
                  <span className="shrink-0 rounded-sm border border-neutral-600 bg-neutral-800 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-neutral-400">
                    No Upfront Cost
                  </span>
                </div>
                <div className="mb-4">
                  <span className="text-3xl font-black text-white">Free to list</span>
                </div>
                <p className="mb-5 text-sm text-neutral-400">
                  Get your property in front of a curated audience of relocators
                  and travelers actively researching Milwaukee. No pay-to-play —
                  listings are earned. I earn a referral commission only when I
                  send you a client that converts.
                </p>
                <ul className="mb-6 space-y-2 text-sm text-neutral-400">
                  {[
                    "Featured in the vetted MKE directory",
                    "Shared with my travel agent network",
                    "Referral commission only — you pay nothing unless I send you a client",
                    "Trackable referral link provided",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
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
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="mailto:jakwoun@jakwoun.me?subject=Directory%20Listing%20Application%20-%20MKE&body=Hi%20Jakwoun%2C%0A%0AI%27d%20like%20to%20apply%20for%20a%20directory%20listing.%0A%0AProperty%20name%3A%0ALocation%3A%0AType%20(Airbnb%2C%20long-term%20rental%2C%20property%20for%20sale%2C%20other)%3A%0AWhy%20it%20should%20be%20vetted%3A%0A"
                  className="group mt-auto inline-flex items-center gap-2 border border-neutral-600 bg-transparent px-6 py-3 text-sm font-bold uppercase tracking-widest text-white transition-all duration-200 hover:border-blue-400 hover:text-blue-400"
                >
                  Apply to Be Listed
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
              </div>
            </div>

            {/* How Referrals Work */}
            <div className="mt-12 border-t border-neutral-800 pt-12 text-left">
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-blue-400">
                Referral Model
              </p>
              <h3 className="mb-4 text-2xl font-black tracking-tight text-white sm:text-3xl">
                How Referrals Work
              </h3>
              <p className="mb-8 max-w-2xl text-neutral-400">
                When your property is listed in the directory, every visitor I
                send your way comes through a unique tracked link. If they
                convert — whether that&apos;s a booking, a lease, or a sale — I
                earn a referral commission we agree on upfront. No surprises, no
                hidden fees.
              </p>
              <ul className="space-y-5">
                {[
                  {
                    icon: "🔗",
                    label: "You get a unique link",
                    description:
                      "Every listing gets a custom UTM tracking link so we both know exactly where your referrals are coming from.",
                  },
                  {
                    icon: "👥",
                    label: "I send you qualified leads",
                    description:
                      "Relocators and travelers from the directory, my travel agent network, and my social content click through to your listing.",
                  },
                  {
                    icon: "🤝",
                    label: "You pay only when it converts",
                    description:
                      "We agree on a referral commission upfront — flat fee or percentage. You only pay when I actually send you a client that converts.",
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
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        id="get-the-guide"
        className="relative border-t border-neutral-800 px-6 py-28 text-center"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-blue-950/10 via-transparent to-transparent"
        />

        <p className="mb-4 text-xs font-medium uppercase tracking-widest text-blue-400">
          Coming Soon
        </p>
        <h2 className="mx-auto mb-6 max-w-xl text-4xl font-black tracking-tight text-white sm:text-5xl">
          Get Early Access.
        </h2>
        <p className="mx-auto mb-3 max-w-md text-neutral-400">
          The 2026 Milwaukee Relocation Guide is being built now. Join the
          waitlist to be first in line when it launches.
        </p>
        <p className="mx-auto mb-10 max-w-md text-sm text-neutral-500">
          Waitlist members get first access and early-bird pricing when the
          guide goes live.
        </p>

        <WaitlistButton
          aria-label="Join the waitlist for the 2026 Milwaukee Relocation Guide"
          className="group inline-flex items-center gap-3 border border-blue-400 bg-blue-400 px-10 py-5 text-sm font-bold uppercase tracking-widest text-black transition-all duration-200 hover:bg-transparent hover:text-blue-400"
        >
          Join the Waitlist
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
        </WaitlistButton>

        <p className="mt-6 text-xs text-neutral-600">
          No spam. Just a notification when the guide is ready.
        </p>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-neutral-800 px-6 py-10 text-center">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm font-bold tracking-tight text-white">
            The Travel Architect MKE
          </p>
          <nav className="flex gap-6 text-sm text-neutral-500">
            <a
              href="https://jakwoun.me"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-neutral-300"
            >
              jakwoun.me
            </a>
            <Link href="/" className="transition-colors hover:text-neutral-300">
              Portfolio
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

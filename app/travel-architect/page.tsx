import Link from "next/link";

export const metadata = {
  title: "The Travel Architect — Puerto Rico Relocation Guide 2026",
  description:
    "From mainland to Puerto Rico — get the curated directory and relocation guide designed for digital nomads and families.",
};

export default function TravelArchitectPage() {
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
            the Island Life.
            <span
              aria-hidden
              className="absolute -bottom-1 left-0 h-px w-full bg-blue-400/50"
            />
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-neutral-400 sm:text-xl">
          From mainland to Puerto Rico — I&apos;ve mapped the move so you
          don&apos;t have to. Get the curated directory and relocation guide
          designed for digital nomads and families.
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#get-the-guide"
            className="group inline-flex items-center gap-2 rounded-none border border-blue-400 bg-blue-400 px-8 py-4 text-sm font-bold uppercase tracking-widest text-black transition-all duration-200 hover:bg-transparent hover:text-blue-400"
          >
            Get the Guide
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
            Jakwoun — The Travel Architect
          </h2>

          <div className="grid gap-8 sm:grid-cols-[1fr_2fr]">
            {/* Placeholder avatar block */}
            <div className="relative aspect-square w-full max-w-[200px] border border-blue-500/20 bg-neutral-900">
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(59,130,246,0.08) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(59,130,246,0.08) 1px, transparent 1px)
                  `,
                  backgroundSize: "20px 20px",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs text-neutral-600 uppercase tracking-widest">
                  Photo
                </span>
              </div>
            </div>

            <div className="space-y-4 text-neutral-400">
              <p>
                I&apos;m a software developer and videographer who's making the move
                from Milwaukee to Puerto Rico — not on a vacation, but for real.
                I'm navigating the permits, the rental maze, the internet setup,
                and businesses that can help you be a positive inpact in the local economy.
              </p>
              <p>
                As a developer, I think in systems. As a videographer, I
                document what&apos;s actually there — not the Instagram version.
                The Travel Architect is the resource I wish existed when I was
                planning my own move.
              </p>
              <p className="text-neutral-300">
                This isn&apos;t a generic &ldquo;move abroad&rdquo; guide. It&apos;s a
                blueprint — built from the ground up by someone who is walking the
                path.
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
            The 2026 Puerto Rico Relocation Guide
          </h2>
          <p className="mb-12 text-neutral-400">
            Every section was built from direct experience and independently
            verified. No affiliate filler — just the information that moves the
            needle.
          </p>

          <ul className="space-y-5">
            {[
              {
                icon: "🏠",
                label: "Housing Directory",
                description:
                  "Vetted directory of Airbnbs, haciendas, and long-term rentals across the island — from Santurce to Rincón.",
              },
              {
                icon: "📍",
                label: "Curated Local Business Guide",
                description:
                  "Restaurants, coworking spaces, schools, and services chosen for quality — not just proximity.",
              },
              {
                icon: "⚡",
                label: "Technical Move Checklist",
                description:
                  "Step-by-step guidance on internet setup (fiber vs LTE), power resilience, and Act 60 tax incentive filing.",
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
          Ready to move?
        </p>
        <h2 className="mx-auto mb-6 max-w-xl text-4xl font-black tracking-tight text-white sm:text-5xl">
          Start with the Blueprint.
        </h2>
        <p className="mx-auto mb-10 max-w-md text-neutral-400">
          One guide. Everything you need to make the move from the mainland to
          Puerto Rico — with confidence.
        </p>

        {/* Payment link placeholder */}
        <a
          href="#"
          aria-label="Get the 2026 Puerto Rico Relocation Guide"
          className="group inline-flex items-center gap-3 border border-blue-400 bg-blue-400 px-10 py-5 text-sm font-bold uppercase tracking-widest text-black transition-all duration-200 hover:bg-transparent hover:text-blue-400"
        >
          Get the Guide
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

        <p className="mt-6 text-xs text-neutral-600">
          Payment link coming soon — join the waitlist by reaching out below.
        </p>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-neutral-800 px-6 py-10 text-center">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm font-bold tracking-tight text-white">
            The Travel Architect
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

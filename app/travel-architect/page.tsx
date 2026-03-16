import Image from "next/image";
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
            {/* Profile photo */}
            <div className="relative aspect-square w-full max-w-[200px] border border-blue-500/20 overflow-hidden">
              <Image
                src="/profile.jpg"
                alt="Jakwoun — The Travel Architect"
                fill
                className="object-cover"
              />
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
                category: "Eco-Hacienda",
                location: "Rincón",
                name: "Hacienda del Mar",
                description:
                  "Secluded hilltop property with ocean views, solar power, and fast fiber. Perfect for long-term stays.",
              },
              {
                category: "Beachfront Airbnb",
                location: "Cabo Rojo",
                name: "Casa Playa Sucia",
                description:
                  "Steps from Playa Sucia. Fully equipped kitchen, reliable LTE backup, and a local host who actually answers.",
              },
              {
                category: "Coworking Space",
                location: "Santurce, San Juan",
                name: "La Colmena",
                description:
                  "The go-to coworking hub for remote workers in San Juan. Gigabit fiber, private offices, and a strong founder community.",
              },
              {
                category: "Local Restaurant",
                location: "Aguada",
                name: "El Bohío",
                description:
                  "Family-run spot serving traditional Puerto Rican food. Known by locals, overlooked by most guides.",
              },
              {
                category: "Long-Term Rental",
                location: "Dorado",
                name: "Residencias del Norte",
                description:
                  "Gated community with month-to-month options, generator backup, and close proximity to major highways.",
              },
              {
                category: "Surf School",
                location: "Isabela",
                name: "Norte Surf Co.",
                description:
                  "Reputable surf school with beginner and intermediate programs. Doubles as a local community hub on the northwest coast.",
              },
            ].map(({ category, location, name, description }) => (
              <div
                key={name}
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
                  <p className="mb-2 font-bold text-white">{name}</p>
                  <p className="mt-auto text-sm text-neutral-400">{description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Partner CTA */}
          <div className="mt-16 border border-neutral-800 bg-neutral-900/50 p-8 text-center sm:p-12">
            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-blue-400">
              For Local Business Owners
            </p>
            <h3 className="mb-4 text-2xl font-black tracking-tight text-white sm:text-3xl">
              Get Listed in the Directory
            </h3>
            <p className="mx-auto mb-8 max-w-md text-neutral-400">
              If you run a hacienda, Airbnb, coworking space, or local business
              in Puerto Rico — I&apos;d like to hear from you. No pay-to-play.
              Listings are earned, not bought.
            </p>
            <a
              href="mailto:jakwoun@jakwoun.me?subject=Partner%20with%20the%20Architect&body=Hi%20Jakwoun%2C%0A%0AI%27d%20like%20to%20get%20my%20business%20listed%20in%20the%20Travel%20Architect%20directory.%0A%0ABusiness%20name%3A%0ALocation%3A%0AType%20(hacienda%2C%20Airbnb%2C%20coworking%2C%20restaurant%2C%20other)%3A%0AWhy%20it%20should%20be%20vetted%3A%0A"
              className="group inline-flex items-center gap-2 border border-neutral-600 bg-transparent px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all duration-200 hover:border-blue-400 hover:text-blue-400"
            >
              Partner with the Architect
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
            <p className="mt-4 text-xs text-neutral-600">
              Opens your email client — hello@jakwoun.me
            </p>
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

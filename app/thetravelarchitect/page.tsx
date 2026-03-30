import { LinkCard } from "./link-card";

export const metadata = {
  title: "The Travel Architect — Curating Remarkable Places",
  description:
    "Hidden gems, city guides, relocation intel, and handpicked stays from The Travel Architect.",
};

const links = [
  {
    href: "/travel-architect-mke",
    title: "The Milwaukee Guide",
    description: "Neighborhoods, stays + relocation intel",
    external: false,
  },
  {
    href: "/travel-architect",
    title: "The Puerto Rico Guide",
    description: "From mainland to island — where to land",
    external: false,
  },
  {
    href: "https://calendly.com/jakwounreid/relocation-call",
    title: "Book a Relocation Call",
    description: "Puerto Rico · Milwaukee · Let's find your place",
    external: true,
  },
  {
    href: "/thetravelarchitect/contact",
    title: "Work with Me",
    description: "Relocation help, property shoots + more",
    external: false,
  },
];

export default function TheTravelArchitectPage() {
  return (
    <div
      className="relative -mx-4 -mt-10 min-h-screen"
      style={{ backgroundColor: "#faf8f4" }}
    >
      {/* Subtle warm texture overlay */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(196,133,89,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-[480px] px-5 py-14">
        {/* ── HEADER ── */}
        <header className="mb-10 text-center">
          {/* Monogram / brand mark */}
          <div
            className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full"
            style={{ backgroundColor: "#c48559", color: "#faf8f4" }}
          >
            <span className="font-serif text-xl font-bold tracking-tight">TA</span>
          </div>

          <h1
            className="font-serif text-3xl font-bold leading-tight tracking-tight"
            style={{ color: "#2c2317" }}
          >
            The Travel Architect
          </h1>

          <p
            className="mt-2 text-sm leading-relaxed"
            style={{ color: "#8c7b6b" }}
          >
            Curating remarkable places to stay + live 🗺️
          </p>

          {/* Divider */}
          <div className="mx-auto mt-6 flex items-center gap-3">
            <div
              className="h-px flex-1"
              style={{ backgroundColor: "#e8e0d5" }}
            />
            <div
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: "#c48559", opacity: 0.5 }}
            />
            <div
              className="h-px flex-1"
              style={{ backgroundColor: "#e8e0d5" }}
            />
          </div>
        </header>

        {/* ── LINKS ── */}
        <nav className="space-y-3">
          {links.map(({ href, title, description, external }) => (
            <LinkCard
              key={href}
              href={href}
              title={title}
              description={description}
              external={external}
            />
          ))}
        </nav>

        {/* ── FOOTER ── */}
        <footer className="mt-12 text-center">
          <div
            className="mx-auto mb-6 h-px"
            style={{ backgroundColor: "#e8e0d5" }}
          />

          <p className="text-xs" style={{ color: "#a89585" }}>
            📍 jakwoun.me/thetravelarchitect
          </p>
          <p className="mt-1 text-xs" style={{ color: "#a89585" }}>
            @thetravelarchitect.io
          </p>
          <p className="mt-4 text-[11px]" style={{ color: "#c4b5a5" }}>
            © The Travel Architect
          </p>
        </footer>
      </div>
    </div>
  );
}

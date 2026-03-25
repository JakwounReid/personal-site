export const metadata = {
  title: "Order Confirmed — Puerto Rico Relocation Blueprint",
  description:
    "Your Puerto Rico Relocation Blueprint is ready. Access your live Notion dashboard now.",
};

export default function SuccessPage() {
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

      {/* ── MAIN ── */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-28 text-center">
        {/* Architectural accent lines */}
        <div
          aria-hidden
          className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
        />
        <div
          aria-hidden
          className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
        />

        {/* Corner registration marks */}
        <span aria-hidden className="absolute left-4 top-4 h-4 w-4 border-l border-t border-blue-500/20" />
        <span aria-hidden className="absolute right-4 top-4 h-4 w-4 border-r border-t border-blue-500/20" />
        <span aria-hidden className="absolute bottom-4 left-4 h-4 w-4 border-b border-l border-blue-500/20" />
        <span aria-hidden className="absolute bottom-4 right-4 h-4 w-4 border-b border-r border-blue-500/20" />

        <div className="mx-auto w-full max-w-xl">
          {/* Badge */}
          <p className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/30 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-blue-400">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-400" />
            Order Confirmed
          </p>

          {/* Compass icon */}
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center border border-blue-500/30 bg-blue-950/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <circle cx="12" cy="12" r="10" />
              <polygon
                points="12,2 14.5,9.5 12,12 9.5,9.5"
                fill="currentColor"
                opacity="0.9"
              />
              <polygon
                points="12,22 9.5,14.5 12,12 14.5,14.5"
                fill="currentColor"
                opacity="0.3"
              />
            </svg>
          </div>

          {/* Success headline */}
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-blue-400">
            Success!
          </p>
          <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">
            Your Blueprint is{" "}
            <span className="relative inline-block text-blue-400">
              Ready.
              <span
                aria-hidden
                className="absolute -bottom-1 left-0 h-px w-full bg-blue-400/50"
              />
            </span>
          </h1>

          {/* Divider */}
          <div className="mx-auto mb-8 h-px w-16 bg-blue-500/30" />

          {/* Body copy */}
          <p className="mb-6 text-base leading-relaxed text-neutral-400 sm:text-lg">
            Thank you for choosing to move with purpose. By using this guide,
            you are directly supporting local Puerto Rican businesses and
            contributing to a sustainable local economy.
          </p>

          {/* Instructions */}
          <p className="mb-10 text-sm leading-relaxed text-neutral-500">
            Click the button below to access your live Relocation Dashboard in
            Notion. We highly recommend bookmarking the Notion page for easy
            access.
          </p>

          {/* CTA button */}
          <a
            href="[PASTE YOUR NOTION URL HERE]"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full items-center justify-center gap-3 border border-blue-400 bg-blue-400 px-8 py-5 text-sm font-bold uppercase tracking-widest text-black transition-all duration-200 hover:bg-transparent hover:text-blue-400 sm:w-auto sm:px-12"
          >
            Open Your Dashboard
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

          {/* Support note */}
          <p className="mt-12 text-xs leading-relaxed text-neutral-600">
            A confirmation receipt has been sent to your email.{" "}
            <br className="hidden sm:block" />
            For support, contact{" "}
            <a
              href="mailto:hello@jakwoun.me"
              className="text-neutral-500 underline-offset-4 transition-colors hover:text-neutral-300 hover:underline"
            >
              hello@jakwoun.me
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

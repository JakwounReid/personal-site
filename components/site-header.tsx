import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-800 bg-black/50 backdrop-blur">
      <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-black tracking-tight">
          Jakwoun Reid
        </Link>
        <nav className="flex items-center gap-4 text-sm text-neutral-300">
          <Link href="/projects" className="py-2 hover:text-white">
            Projects
          </Link>
          <Link href="/blog" className="py-2 hover:text-white">
            Blog
          </Link>
          <Link
            href="/build"
            className="rounded-lg border border-green-500/40 bg-green-950/30 px-3 py-2 text-xs font-semibold text-green-400 hover:bg-green-950/60 transition-colors"
          >
            Hire me
          </Link>
        </nav>
      </div>
    </header>
  );
}

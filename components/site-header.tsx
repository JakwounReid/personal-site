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
            className="rounded-sm border border-blue-400/40 bg-blue-400/10 px-3 py-2 text-xs font-semibold uppercase tracking-widest text-blue-400 transition-colors hover:bg-blue-400/20"
          >
            Hire me
          </Link>
        </nav>
      </div>
    </header>
  );
}

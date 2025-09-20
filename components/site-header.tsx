import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-800 bg-black/50 backdrop-blur">
      <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-black tracking-tight">
          Jakwoun Reid
        </Link>
        <nav className="flex items-center gap-4 text-sm text-neutral-300">
          <Link href="/projects" className="hover:text-white">
            Projects
          </Link>
          <Link href="/blog" className="hover:text-white">
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
}

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <p className="text-xs font-medium uppercase tracking-widest text-neutral-500 mb-4">404</p>
      <h1 className="text-4xl font-black text-white">Page not found.</h1>
      <p className="mt-4 text-neutral-400 max-w-sm">
        That URL doesn&apos;t exist here. Here&apos;s where you probably want to go:
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-xl border border-neutral-700 px-5 py-3 text-sm font-medium hover:bg-neutral-900 transition-colors"
        >
          Home
        </Link>
        <Link
          href="/build"
          className="rounded-xl border border-neutral-700 px-5 py-3 text-sm font-medium hover:bg-neutral-900 transition-colors"
        >
          Web dev packages
        </Link>
        <Link
          href="/blog"
          className="rounded-xl border border-neutral-700 px-5 py-3 text-sm font-medium hover:bg-neutral-900 transition-colors"
        >
          Blog
        </Link>
        <Link
          href="/projects"
          className="rounded-xl border border-neutral-700 px-5 py-3 text-sm font-medium hover:bg-neutral-900 transition-colors"
        >
          Projects
        </Link>
      </div>
    </div>
  );
}

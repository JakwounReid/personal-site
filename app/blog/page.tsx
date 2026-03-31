import Link from "next/link";
import { allPosts } from "@/lib/content";

export const metadata = { title: "Blog" };

export default function BlogIndex() {
  const posts = allPosts
    .filter((p) => p.status !== "draft")
    .sort(
      (a, b) =>
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    );

  // Group series to show them collapsed
  const seriesNames = [...new Set(posts.filter((p) => p.series).map((p) => p.series!))];

  return (
    <div>
      <h1 className="text-3xl font-bold">Blog</h1>

      {/* Series callouts */}
      {seriesNames.map((series) => {
        const seriesPosts = posts
          .filter((p) => p.series === series)
          .sort((a, b) => (a.seriesOrder ?? 0) - (b.seriesOrder ?? 0));
        const first = seriesPosts[0];
        return (
          <div
            key={series}
            className="mt-8 rounded-2xl border border-neutral-700 bg-neutral-900/50 p-5"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-1">
                  Series · {seriesPosts.length} parts
                </p>
                <p className="font-bold text-white text-lg">{series}</p>
                <p className="mt-1 text-sm text-neutral-400">
                  {first.summary}
                </p>
              </div>
              <Link
                href={`/blog/${first.slug}`}
                className="shrink-0 rounded-xl border border-neutral-700 px-4 py-2 text-sm hover:bg-neutral-800 whitespace-nowrap"
              >
                Start reading →
              </Link>
            </div>
          </div>
        );
      })}

      {/* All posts */}
      <div className="mt-8 space-y-4">
        {posts.map((p) => (
          <article
            key={p.slug}
            className="rounded-2xl border border-neutral-800 p-5"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm text-neutral-400">
                    {new Date(p.publishDate).toLocaleDateString()}
                  </span>
                  {p.series && (
                    <span className="text-xs border border-neutral-700 rounded-full px-2 py-0.5 text-neutral-500">
                      {p.series} · {p.seriesOrder}
                    </span>
                  )}
                </div>
                <Link
                  href={`/blog/${p.slug}`}
                  className="block mt-1 text-lg font-semibold hover:underline underline-offset-4"
                >
                  {p.title}
                </Link>
                <p className="mt-1 text-sm text-neutral-400">{p.summary}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

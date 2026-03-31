import { notFound } from "next/navigation";
import { allPosts } from "@/lib/content";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Prose } from "@/components/prose";
import Link from "next/link";

export async function generateStaticParams() {
  return allPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = allPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return { title: post.title, description: post.summary };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = allPosts.find((p) => p.slug === params.slug);
  if (!post || post.status === "draft") return notFound();

  // Series navigation
  const seriesPosts = post.series
    ? allPosts
        .filter((p) => p.series === post.series && p.status === "published")
        .sort((a, b) => (a.seriesOrder ?? 0) - (b.seriesOrder ?? 0))
    : [];
  const seriesIndex = seriesPosts.findIndex((p) => p.slug === post.slug);
  const prevPost = seriesIndex > 0 ? seriesPosts[seriesIndex - 1] : null;
  const nextPost =
    seriesIndex < seriesPosts.length - 1 ? seriesPosts[seriesIndex + 1] : null;

  return (
    <div>
      {/* Series badge */}
      {post.series && (
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-900 px-3 py-1 text-xs text-neutral-400">
          <span className="font-semibold text-neutral-300">{post.series}</span>
          {seriesPosts.length > 0 && (
            <span>· Part {post.seriesOrder} of {seriesPosts.length}</span>
          )}
        </div>
      )}

      <h1 className="text-3xl font-bold">{post.title}</h1>
      <div className="mt-1 text-sm text-neutral-400">
        {new Date(post.publishDate).toLocaleDateString()}
      </div>

      {post.tags && post.tags.length > 0 && (
        <div className="mt-3 flex gap-2 flex-wrap">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs border border-neutral-700 rounded-full px-3 py-1 text-neutral-400"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <Prose className="mt-8">
        <MDXRemote source={post.body.raw} />
      </Prose>

      {/* Series prev/next navigation */}
      {(prevPost || nextPost) && (
        <div className="mt-12 border-t border-neutral-800 pt-8 grid grid-cols-2 gap-4">
          <div>
            {prevPost && (
              <Link
                href={`/blog/${prevPost.slug}`}
                className="group flex flex-col gap-1 rounded-xl border border-neutral-800 p-4 hover:bg-neutral-900/50"
              >
                <span className="text-xs text-neutral-500">← Previous</span>
                <span className="text-sm font-medium text-neutral-300 group-hover:text-white">
                  {prevPost.title}
                </span>
              </Link>
            )}
          </div>
          <div>
            {nextPost && (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="group flex flex-col gap-1 rounded-xl border border-neutral-800 p-4 hover:bg-neutral-900/50 text-right"
              >
                <span className="text-xs text-neutral-500">Next →</span>
                <span className="text-sm font-medium text-neutral-300 group-hover:text-white">
                  {nextPost.title}
                </span>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

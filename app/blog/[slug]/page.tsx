import { notFound } from "next/navigation";
import { allPosts } from "@/lib/content";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Prose } from "@/components/prose";

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
  return (
    <div>
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
    </div>
  );
}

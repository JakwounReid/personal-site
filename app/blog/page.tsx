
import Link from 'next/link'
import { allPosts } from '@/lib/content'
// Removed date-fns import

export const metadata = { title: 'Blog' }

export default function BlogIndex() {
  const posts = allPosts
    .filter(p => p.status !== 'draft')
    .sort((a,b)=> new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
  return (
    <div>
      <h1 className="text-3xl font-bold">Blog</h1>
      <div className="mt-6 space-y-6">
        {posts.map(p => (
          <article key={p.slug} className="rounded-2xl border border-neutral-800 p-5">
            <div className="text-sm text-neutral-400">{new Date(p.publishDate).toLocaleDateString()}</div>
            <Link href={`/blog/${p.slug}`} className="block mt-1 text-xl font-semibold hover:underline underline-offset-4">{p.title}</Link>
            <p className="mt-2 text-neutral-300">{p.summary}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

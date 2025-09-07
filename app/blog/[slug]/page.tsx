
import { notFound } from 'next/navigation'
import { allPosts } from '@/lib/content'
import { MDX } from '@/components/mdx'
import { Prose } from '@/components/prose'

export async function generateStaticParams() {
  return allPosts.map(p => ({ slug: p.slug }))
}

export function generateMetadata({ params }:{ params: { slug: string }}) {
  const post = allPosts.find(p => p.slug === params.slug)
  if (!post) return {}
  return { title: post.title, description: post.summary }
}

export default function PostPage({ params }:{ params: { slug: string } }) {
  const post = allPosts.find(p => p.slug === params.slug)
  if (!post || post.status === 'draft') return notFound()
  return (
    <div>
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <div className="mt-1 text-sm text-neutral-400">{new Date(post.publishDate).toLocaleDateString()}</div>
      <Prose className="mt-6"><MDX code={post.body.code} /></Prose>
    </div>
  )
}

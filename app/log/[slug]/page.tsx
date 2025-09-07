
import { notFound } from 'next/navigation'
import { allLogs } from '@/lib/content'
import { MDX } from '@/components/mdx'
import { Prose } from '@/components/prose'

export async function generateStaticParams() {
  return allLogs.map(p => ({ slug: p.slug }))
}

export function generateMetadata({ params }:{ params: { slug: string }}) {
  const item = allLogs.find(p => p.slug === params.slug)
  if (!item) return {}
  return { title: item.title, description: item.summary }
}

export default function LogPage({ params }:{ params: { slug: string } }) {
  const item = allLogs.find(p => p.slug === params.slug)
  if (!item || item.status === 'draft') return notFound()
  return (
    <div>
      <h1 className="text-2xl font-bold">{item.title}</h1>
      <div className="mt-1 text-sm text-neutral-400">{new Date(item.publishDate).toLocaleDateString()}</div>
      <Prose className="mt-6"><MDX code={item.body.code} /></Prose>
    </div>
  )
}

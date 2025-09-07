
import { notFound } from 'next/navigation'
import { allProjects } from 'contentlayer/generated'
import { MDX } from '@/components/mdx'
import { Prose } from '@/components/prose'
import Link from 'next/link'

export async function generateStaticParams() {
  return allProjects.map(p => ({ slug: p.slug }))
}

export function generateMetadata({ params }:{ params: { slug: string }}) {
  const proj = allProjects.find(p => p.slug === params.slug)
  if (!proj) return {}
  return { title: proj.title, description: proj.summary }
}

export default function ProjectPage({ params }:{ params: { slug: string } }) {
  const proj = allProjects.find(p => p.slug === params.slug)
  if (!proj) return notFound()
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">{proj.title}</h1>
        <div className="flex items-center gap-3 text-sm">
          {proj.demo && <Link target="_blank" className="underline underline-offset-4" href={proj.demo}>Demo</Link>}
          {proj.repo && <Link target="_blank" className="underline underline-offset-4" href={proj.repo}>Repo</Link>}
        </div>
      </div>
      <div className="mt-1 text-sm text-neutral-400">{proj.stack?.join(' • ')}</div>
      <Prose className="mt-6"><MDX code={proj.body.code} /></Prose>
    </div>
  )
}

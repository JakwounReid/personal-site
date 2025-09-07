
import Link from 'next/link'
import { allLogs } from '@/lib/content'
import { compareDesc } from 'date-fns'

export const metadata = { title: 'Founder Daily' }

export default function LogIndex() {
  const logs = allLogs
    .filter(p => p.status !== 'draft')
    .sort((a,b)=>compareDesc(new Date(a.publishDate), new Date(b.publishDate)))
  return (
    <div>
      <h1 className="text-3xl font-bold">Founder Daily</h1>
      <p className="text-neutral-300 mt-2">Short, behind-the-scenes updates I can turn into videos & social posts.</p>
      <div className="mt-6 space-y-4">
        {logs.map(l => (
          <div key={l.slug} className="rounded-2xl border border-neutral-800 p-5">
            <div className="text-sm text-neutral-400">{new Date(l.publishDate).toLocaleDateString()}</div>
            <Link href={`/log/${l.slug}`} className="block mt-1 text-lg font-semibold hover:underline underline-offset-4">{l.title}</Link>
            <p className="mt-1 text-neutral-300">{l.summary}</p>
          </div>
        ))}
      </div>
    </div>
  )
}


import Link from 'next/link'
import Subscribe from '@/components/subscribe'
import { allProjects, allPosts, allLogs } from '@/lib/content'
// Removed date-fns import

export default function Home() {
  const posts = [...allPosts].sort((a,b)=> new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()).slice(0,3)
  const logs = [...allLogs].sort((a,b)=> new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()).slice(0,5)
  const projects = allProjects.slice(0,3)

  return (
    <div className="space-y-12">
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight">Engineer & builder of MVPs.</h1>
          <p className="mt-4 text-neutral-300">I ship fast, validate faster. Follow along as I build tools like Gig Dash and the LinkedIn Influencer Analyzer.</p>
          <div className="mt-6 flex gap-3">
            <Link href="/projects" className="rounded-xl bg-white text-neutral-900 px-5 py-3 font-semibold hover:bg-neutral-200">View projects</Link>
            <Link href="/log" className="rounded-xl border border-neutral-800 px-5 py-3 hover:bg-neutral-900">Founder daily</Link>
          </div>
        </div>
        <Subscribe />
      </section>

      <section>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Latest blog posts</h2>
          <Link href="/blog" className="text-sm text-neutral-300 hover:text-white underline underline-offset-4">View all</Link>
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {posts.map(p => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="rounded-2xl border border-neutral-800 p-5 hover:bg-neutral-900/50">
              <div className="text-sm text-neutral-400">{new Date(p.publishDate).toLocaleDateString()}</div>
              <div className="mt-2 font-semibold">{p.title}</div>
              <div className="mt-2 text-sm text-neutral-300">{p.summary}</div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Founder daily</h2>
          <Link href="/log" className="text-sm text-neutral-300 hover:text-white underline underline-offset-4">View all</Link>
        </div>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {logs.map(l => (
            <Link key={l.slug} href={`/log/${l.slug}`} className="rounded-2xl border border-neutral-800 p-5 hover:bg-neutral-900/50">
              <div className="text-sm text-neutral-400">{new Date(l.publishDate).toLocaleDateString()}</div>
              <div className="mt-2 font-semibold">{l.title}</div>
              <div className="mt-2 text-sm text-neutral-300">{l.summary}</div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Projects</h2>
          <Link href="/projects" className="text-sm text-neutral-300 hover:text-white underline underline-offset-4">View all</Link>
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {projects.map(pr => (
            <Link key={pr.slug} href={`/projects/${pr.slug}`} className="rounded-2xl border border-neutral-800 p-5 hover:bg-neutral-900/50">
              <div className="text-sm text-neutral-400">{pr.stack?.join(' • ')}</div>
              <div className="mt-2 font-semibold">{pr.title}</div>
              <div className="mt-2 text-sm text-neutral-300">{pr.summary}</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

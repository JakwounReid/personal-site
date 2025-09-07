
import './globals.css'
import SiteHeader from '@/components/site-header'

export const metadata = {
  title: 'Jakwoun Reid — Portfolio',
  description: 'Projects, blog, and daily founder updates from The Non‑Traditional Engineer.',
  metadataBase: new URL('https://example.com')
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-950 text-neutral-100">
        <SiteHeader />
        <main className="mx-auto max-w-5xl px-4 py-10">{children}</main>
      </body>
    </html>
  )
}

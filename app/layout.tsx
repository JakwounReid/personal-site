
import './globals.css'
import SiteHeader from '@/components/site-header'
import Script from 'next/script'
import ClaritySnippet from '@/components/clarity-snippet'
import { Analytics } from '@vercel/analytics/next'

export const metadata = {
  title: 'Jakwoun Reid — Portfolio',
  description: 'Projects, blog, and daily founder updates from The Non‑Traditional Engineer.',
  metadataBase: new URL('https://jakwoun.me'),
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VPDTKRGTP5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VPDTKRGTP5');
          `}
        </Script>
      </head>
      <body className="min-h-screen bg-neutral-950 text-neutral-100">
        <ClaritySnippet />
        <SiteHeader />
        <main className="mx-auto max-w-5xl px-4 py-10">{children}</main>
        <Analytics />
      </body>
    </html>
  )
}

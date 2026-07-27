
import './globals.css'
import SiteHeader from '@/components/site-header'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'

const SITE_TITLE = 'Jakwoun Reid — Digital Infrastructure for Your Business';
const SITE_DESCRIPTION =
  'Digital infrastructure for your business: strategy sessions, roadmap teardowns, and ongoing site care for Wix, Squarespace, Shopify, and Kajabi. Diagnosis first.';

export const metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  metadataBase: new URL('https://jakwoun.me'),
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: 'https://jakwoun.me',
    siteName: 'Jakwoun Reid',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/og-image.jpg'],
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-950 text-neutral-100">
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
        <Script
          src="https://t.contentsquare.net/uxa/821670af420c0.js"
          strategy="afterInteractive"
        />
        <SiteHeader />
        <main className="mx-auto max-w-5xl px-4 py-10">{children}</main>
        <Analytics />
      </body>
    </html>
  )
}

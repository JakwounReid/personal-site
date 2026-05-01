
import './globals.css'
import SiteHeader from '@/components/site-header'
import Script from 'next/script'
import ClaritySnippet from '@/components/clarity-snippet'
import { Analytics } from '@vercel/analytics/next'

export const metadata = {
  title: 'Jakwoun Reid — Digital Infrastructure for Service Businesses',
  description: 'Systems consultant and engineer building digital infrastructure for service businesses. Diagnosis-first. Fixed price. Open source stack.',
  metadataBase: new URL('https://jakwoun.me'),
  openGraph: {
    title: 'Jakwoun Reid — Digital Infrastructure for Service Businesses',
    description: 'Systems consultant and engineer building digital infrastructure for service businesses. Diagnosis-first. Fixed price. Open source stack.',
    url: 'https://jakwoun.me',
    siteName: 'Jakwoun Reid',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jakwoun Reid — Digital Infrastructure for Service Businesses',
    description: 'Systems consultant and engineer building digital infrastructure for service businesses. Diagnosis-first. Fixed price. Open source stack.',
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
        <ClaritySnippet />
        <SiteHeader />
        <main className="mx-auto max-w-5xl px-4 py-10">{children}</main>
        <Analytics />
      </body>
    </html>
  )
}

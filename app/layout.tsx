import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { dreamAiLabEntityGraph, dreamAiLabWebsiteSchema } from '../lib/entities'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '드림에이아이랩 (DAL) – AI 디지털케어로그로 의료·돌봄·교육 혁신',
  description: 'AI 디지털케어로그로 발달장애·시니어케어·토탈케어로그를 연결해 개인맞춤 케어 표준을 만드는 드림에이아이랩(DAL).',
  authors: [{ name: '드림에이아이랩' }],
  creator: '드림에이아이랩',
  publisher: '드림에이아이랩',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dreamailab.com'),
  alternates: {
    canonical: 'https://dreamailab.com',
  },
  openGraph: {
    title: '드림에이아이랩 (DAL) – AI 디지털케어로그로 의료·돌봄·교육 혁신',
    description: 'AI 디지털케어로그로 발달장애·시니어케어·토탈케어로그를 연결해 개인맞춤 케어 표준을 만드는 드림에이아이랩(DAL).',
    url: 'https://dreamailab.com',
    siteName: '드림에이아이랩',
    images: [
      {
        url: 'https://dreamailab.com/og-image.png',
        width: 1200,
        height: 630,
        alt: '드림에이아이랩',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '드림에이아이랩 (DAL) – AI 디지털케어로그로 의료·돌봄·교육 혁신',
    description: 'AI 디지털케어로그로 발달장애·시니어케어·토탈케어로그를 연결해 개인맞춤 케어 표준을 만드는 드림에이아이랩(DAL).',
    images: ['https://dreamailab.com/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: 'any', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico']
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  themeColor: '#111827',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="preload" href="/og-image.png" as="image" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(dreamAiLabEntityGraph)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(dreamAiLabWebsiteSchema)
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

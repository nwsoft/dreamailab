import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '드림에이아이랩 (DAL) – AI 디지털케어로그로 의료·돌봄·교육 혁신',
  description: 'AI 디지털케어로그로 발달장애·시니어케어·헬스케어를 연결해 개인맞춤 케어 표준을 만드는 드림에이아이랩(DAL).',
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
    description: 'AI 디지털케어로그로 발달장애·시니어케어·헬스케어를 연결해 개인맞춤 케어 표준을 만드는 드림에이아이랩(DAL).',
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
    description: 'AI 디지털케어로그로 발달장애·시니어케어·헬스케어를 연결해 개인맞춤 케어 표준을 만드는 드림에이아이랩(DAL).',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "드림에이아이랩",
              "alternateName": "DAL",
              "url": "https://dreamailab.com",
              "logo": "https://dreamailab.com/logo.png",
              "description": "AI 디지털케어로그로 발달장애·시니어케어·헬스케어를 연결해 개인맞춤 케어 표준을 만드는 드림에이아이랩(DAL).",
              "foundingDate": "2022",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "KR"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "contact@dreamailab.com"
              },
              "sameAs": [
                "https://jarame.or.kr",
                "https://jarame.org",
                "https://seniorandlife.com",
                "https://medicai.kr",
                "https://hanbangai.kr",
                "https://cancerrehabai.kr",
                "https://noahai.net",
                "https://globalcouplecare.com",
                "https://veggie.care"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "AI 서비스",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "자람이",
                      "description": "발달장애인을 위한 AI 디지털케어로그 플랫폼"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "시니어앤라이프",
                      "description": "시니어돌봄 AI 디지털케어로그 플랫폼"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "토탈케어로그",
                      "description": "개인 맞춤형 AI 주치의 헬스케어 플랫폼"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "글로벌커플케어",
                      "description": "국제결혼 지원 AI 플랫폼"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "베지케어",
                      "description": "채식 라이프스타일 AI 플랫폼"
                    }
                  }
                ]
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "드림에이아이랩",
              "url": "https://dreamailab.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://dreamailab.com/search?q={query}",
                "query-input": "required name=query"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
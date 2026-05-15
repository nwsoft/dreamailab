import type { Metadata } from 'next'
import { absoluteUrl, defaultOpenGraph, defaultTwitter } from '../../lib/seo'

export const metadata: Metadata = {
  title: '뉴스 및 소식 - 드림에이아이랩',
  description: '드림에이아이랩의 최신 뉴스, 서비스 업데이트, 보도자료, 기술 관련 글 등을 확인하세요. AI 기술의 혁신과 사회적 가치 창출에 대한 최신 소식을 제공합니다.',
  alternates: {
    canonical: absoluteUrl('/news'),
  },
  openGraph: {
    title: '뉴스 및 소식 - 드림에이아이랩',
    description: '드림에이아이랩의 최신 뉴스, 서비스 업데이트, 보도자료, 기술 관련 글 등을 확인하세요.',
    url: absoluteUrl('/news'),
    siteName: defaultOpenGraph.siteName,
    images: defaultOpenGraph.images,
    locale: defaultOpenGraph.locale,
    type: 'website',
  },
  twitter: {
    ...defaultTwitter,
    title: '뉴스 및 소식 - 드림에이아이랩',
    description: '드림에이아이랩의 최신 뉴스, 서비스 업데이트, 보도자료, 기술 관련 글 등을 확인하세요.',
  },
}

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

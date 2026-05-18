/**
 * 정보·허브 페이지(홈, 회사소개, 기술, 서비스 목록, 공공 등) 하단용 단일 문의 CTA.
 * /business·/ir·서비스 상세처럼 본문에 이미 목적형 CTA가 있으면 중복되므로 넣지 않습니다.
 * 투자·IR은 푸터·/ir·히어로 각주 등 한 경로로 충분할 때가 많습니다.
 */
import Link from 'next/link'

type LinkItem = { label: string; href: string }

type PageClosingSectionProps = {
  title: string
  description: string
  primary?: LinkItem
  secondary?: LinkItem[]
}

export default function PageClosingSection({
  title,
  description,
  primary = { label: '문의하기', href: '/contact' },
  secondary = [],
}: PageClosingSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
        <p className="text-lg max-w-3xl mx-auto text-white/90 mb-8">{description}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href={primary.href}
            className="bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            {primary.label}
          </Link>
          {secondary.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-2 border-white/80 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

import Link from 'next/link'
import Header from './Header'
import Footer from './Footer'

interface EnLandingPageProps {
  title: string
  subtitle: string
  description: string
  koPath: string
  sections?: { heading: string; body: string }[]
  links?: { label: string; href: string }[]
}

export default function EnLandingPage({
  title,
  subtitle,
  description,
  koPath,
  sections = [],
  links = [],
}: EnLandingPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <section className="py-20 lg:py-28 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-white/80 mb-4">
            <Link href={koPath} hrefLang="ko" className="underline hover:text-white">
              한국어
            </Link>
          </p>
          <p className="text-primary-100 text-lg mb-3">{subtitle}</p>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">{title}</h1>
          <p className="text-xl text-gray-100 leading-relaxed">{description}</p>
        </div>
      </section>

      {sections.length > 0 && (
        <section className="py-16 lg:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            {sections.map((s) => (
              <div key={s.heading}>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{s.heading}</h2>
                <p className="text-lg text-gray-700 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {links.length > 0 && (
        <section className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-4 flex flex-wrap gap-4 justify-center">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-6 py-3 rounded-lg bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </section>
      )}

      <Footer />
    </div>
  )
}

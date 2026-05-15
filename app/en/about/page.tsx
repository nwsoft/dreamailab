import type { Metadata } from 'next'
import EnLandingPage from '../../../components/EnLandingPage'
import { absoluteUrl, buildPageMetadata } from '../../../lib/seo'

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: 'About Dream AI Lab',
    description:
      'Dream AI Lab (DAL) develops AI Digital Care Log technology for developmental disability, senior care, healthcare, and education—with social impact at the core.',
    path: '/en/about',
    ogImageAlt: 'About Dream AI Lab',
  }),
  alternates: {
    canonical: absoluteUrl('/en/about'),
    languages: {
      'ko-KR': absoluteUrl('/about'),
      'en-US': absoluteUrl('/en/about'),
    },
  },
  openGraph: { locale: 'en_US' },
}

export default function EnAboutPage() {
  return (
    <EnLandingPage
      title="About Dream AI Lab"
      subtitle="Company"
      description="Founded in 2022, DAL is a technology company building AI Digital Care Log standards for care, health, and education—starting with Jarame for developmental disabilities."
      koPath="/about"
      sections={[
        {
          heading: 'Mission',
          body: 'Turn “untreatable” welfare challenges into solvable problems through standardized data, multimodal AI, and cross-institution collaboration.',
        },
        {
          heading: 'Leadership',
          body: 'CTO Jung Haesung architected AI Digital Care Log and Noah AI; the team combines deep AI engineering with field-validated care platforms.',
        },
      ]}
      links={[
        { label: 'Services', href: '/en/services' },
        { label: 'Contact', href: '/contact' },
      ]}
    />
  )
}

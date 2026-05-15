import type { Metadata } from 'next'
import EnLandingPage from '../../../components/EnLandingPage'
import { absoluteUrl, buildPageMetadata } from '../../../lib/seo'

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: 'Technology – AI Digital Care Log | Dream AI Lab',
    description:
      'AI Digital Care Log technology: standardized care records, multimodal AI, reinforcement learning, and middleware that powers Jarame, Noah AI, and the DAL service ecosystem.',
    path: '/en/technology',
    ogImageAlt: 'Dream AI Lab Technology',
  }),
  alternates: {
    canonical: absoluteUrl('/en/technology'),
    languages: {
      'ko-KR': absoluteUrl('/technology'),
      'en-US': absoluteUrl('/en/technology'),
    },
  },
  openGraph: { locale: 'en_US' },
}

export default function EnTechnologyPage() {
  return (
    <EnLandingPage
      title="AI Digital Care Log"
      subtitle="Core technology"
      description="DAL's stack unifies sensitive care data with blockchain-grade protection, AI feedback loops, and cross-domain middleware—validated in finance (Noah AI) and developmental care (Jarame)."
      koPath="/technology"
      sections={[
        {
          heading: 'What is AI Digital Care Log?',
          body: 'A standard for recording, sharing, and learning from care data across institutions—enabling personalized plans instead of fragmented paper records.',
        },
        {
          heading: 'Noah AI engine',
          body: 'Time-series and reinforcement-learning architecture proven on financial data, now feeding care-domain feedback and group reinforcement loops.',
        },
      ]}
      links={[
        { label: 'Technology (KO)', href: '/technology' },
        { label: 'EduCareLog', href: '/technology/educarelog' },
      ]}
    />
  )
}

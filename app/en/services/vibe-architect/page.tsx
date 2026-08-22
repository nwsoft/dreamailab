import type { Metadata } from 'next'
import EnLandingPage from '../../../../components/EnLandingPage'
import { absoluteUrl, buildPageMetadata } from '../../../../lib/seo'

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: 'DAL Vibe Architect | AI Software Creation Without a Learning Curve',
    description:
      'Describe what you want in everyday language. DAL turns intent into architecture, software, verification, deployment and operations without requiring users to learn prompts or development tools.',
    path: '/en/services/vibe-architect',
    ogTitle: 'Tell us what you want to build. DAL handles the complexity.',
    ogDescription: 'A Korea-ready AI software creation service designed around human intent, safe defaults, accessible decisions and the full operating lifecycle.',
    ogImageAlt: 'DAL Vibe Architect software creation architecture',
  }),
  alternates: {
    canonical: absoluteUrl('/en/services/vibe-architect'),
    languages: {
      'ko-KR': absoluteUrl('/services/vibe-architect'),
      'en-US': absoluteUrl('/en/services/vibe-architect'),
    },
  },
  openGraph: { locale: 'en_US' },
}

export default function EnVibeArchitectPage() {
  return (
    <EnLandingPage
      title="DAL Vibe Architect"
      subtitle="AI Software Creation Service · In development and preparing limited pilots"
      description="Do not learn prompt formulas, development tools, databases, servers or deployment. Explain the problem in everyday language and DAL translates your intent into a service that can be designed, built, verified, deployed and operated."
      koPath="/services/vibe-architect"
      sections={[
        {
          heading: 'If people must learn AI to use AI, the barrier has not disappeared',
          body: 'DAL does not teach non-developers to speak like developers. Users describe their goal and workplace in ordinary language; the system prepares safe defaults and asks only the business decisions that materially change the result.',
        },
        {
          heading: 'From a one-line idea to a working service',
          body: 'DAL connects intent discovery, product and system design, a clickable preview, implementation, security and accessibility checks, user approval, deployment, monitoring and ongoing change in one service. Users see understandable decisions and results instead of a chain of developer tools.',
        },
        {
          heading: 'DAL carries the hidden complexity',
          body: 'Technology selection, data models, authentication and permissions, privacy, testing, recovery, deployment and observability are handled inside the system by default. Code, Git, infrastructure and advanced policies are exposed only when a user explicitly wants them.',
        },
        {
          heading: 'Architecture Guardian and project intelligence',
          body: 'Architecture Guardian tracks the impact of every creation and change. A Project Knowledge Graph preserves requirements, dependencies and decisions, while an outcome data foundation is intended to learn what actually works in operation with appropriate rights and privacy controls.',
        },
        {
          heading: 'Korea-ready operations',
          body: 'This is more than a Korean-language interface. Local identity and consent flows, login, payment, messaging, administrator operations, privacy controls and industry-specific workflows belong in the architecture so users do not have to research and configure them alone.',
        },
        {
          heading: 'Disability inclusion by design',
          body: 'Requiring people to learn a complicated interface can itself become an access barrier. The creation service should work with keyboard, screen readers, voice, magnification and alternative input, while generated products must pass accessibility gates and real task testing with disabled people.',
        },
        {
          heading: 'Service availability',
          body: 'Public self-service signup and pricing are still being prepared. DAL is first validating the complete path from conversation to design, generation, verification, deployment and operations through co-design and limited real-world pilots before widening access.',
        },
      ]}
      links={[
        { label: 'Full service experience (KO)', href: '/services/vibe-architect' },
        { label: 'Service hub', href: '/en/services' },
        { label: 'Pilot inquiry', href: '/contact?service=vibe-architect&type=partnership' },
      ]}
    />
  )
}

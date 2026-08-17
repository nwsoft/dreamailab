import type { ReactNode } from 'react'
import Link from 'next/link'

type HeroAction = {
  label: string
  href: string
  variant?: 'primary' | 'secondary'
}

type CompanyPageHeroProps = {
  eyebrow: string
  title: ReactNode
  description: ReactNode
  badges?: string[]
  status?: ReactNode
  actions?: HeroAction[]
}

export default function CompanyPageHero({
  eyebrow,
  title,
  description,
  badges = [],
  status,
  actions = [],
}: CompanyPageHeroProps) {
  return (
    <section className="company-hero">
      <div className="company-hero__inner">
        <div className="company-hero__content">
          <p className="company-eyebrow">{eyebrow}</p>
          <h1 className="company-title">{title}</h1>
          <div className="company-lead">{description}</div>

          {badges.length > 0 && (
            <div className="company-badges" aria-label="페이지 분류">
              {badges.map((badge) => (
                <span key={badge} className="company-badge">
                  {badge}
                </span>
              ))}
            </div>
          )}

          {status && <div className="company-status-note">{status}</div>}

          {actions.length > 0 && (
            <div className="company-actions">
              {actions.map((action) => (
                <Link
                  key={`${action.href}-${action.label}`}
                  href={action.href}
                  className={action.variant === 'secondary' ? 'company-action-secondary' : 'company-action-primary'}
                >
                  {action.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

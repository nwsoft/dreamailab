import Link from 'next/link'

const companyLinks = [
  ['회사소개', '/about'],
  ['철학·비전', '/vision'],
  ['기술', '/technology'],
  ['비즈니스', '/business'],
  ['Research', '/research'],
]

const serviceLinks = [
  ['서비스 전체', '/services'],
  ['자람이', '/services/jarame'],
  ['시니어앤라이프', '/services/senior'],
  ['글로벌커플케어', '/services/marriage'],
  ['토탈케어로그', '/services/healthcare'],
  ['에듀케어로그', '/services/educarelog'],
  ['베지케어', '/services/veggie'],
  ['DAL Vibe Architect', '/services/vibe-architect'],
]

const partnerLinks = [
  ['공공 협력', '/public'],
  ['투자·IR', '/ir'],
  ['뉴스', '/news'],
  ['문의하기', '/contact'],
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.7fr_1fr_0.7fr]">
          <div>
            <Link href="/" className="inline-flex items-center">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-r from-primary-600 to-secondary-600"><span className="text-xs font-black">DAL</span></div>
              <span className="ml-3 text-xl font-black">드림에이아이랩</span>
            </Link>
            <p className="mt-5 max-w-md leading-relaxed text-slate-300">사람의 삶과 현장의 복잡성을 연결되고 학습하는 AI 시스템으로 바꾸는 기술 기업입니다.</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">복잡성은 시스템이 흡수하고, 사람은 더 나은 선택과 삶에 집중하도록.</p>
            <Link href="/about#philosophy" className="mt-6 inline-flex text-sm font-bold text-cyan-300 hover:text-cyan-200">회사 철학 보기 →</Link>
          </div>

          <FooterColumn title="회사" links={companyLinks} />
          <FooterColumn title="서비스" links={serviceLinks} columns />
          <FooterColumn title="협력·정보" links={partnerLinks} />
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-800 pt-7 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} Dream AI Lab. All rights reserved.</p>
          <p>AI Digital Care Log · Architecture to Execution · Evidence before Scale</p>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, links, columns = false }: { title: string; links: string[][]; columns?: boolean }) {
  return (
    <div>
      <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400">{title}</h2>
      <ul className={`mt-5 gap-x-5 gap-y-2 ${columns ? 'grid grid-cols-2 lg:grid-cols-1 xl:grid-cols-2' : 'space-y-2'}`}>
        {links.map(([label, href]) => (
          <li key={href}><Link href={href} className="text-sm text-slate-300 transition hover:text-white">{label}</Link></li>
        ))}
      </ul>
    </div>
  )
}

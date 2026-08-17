import Link from 'next/link'

const items = [
  { href: '/about', label: '회사소개', description: '우리는 누구인가' },
  { href: '/vision', label: '철학·비전', description: '왜, 어디로 가는가' },
  { href: '/technology', label: '기술', description: '어떻게 만드는가' },
  { href: '/business', label: '비즈니스', description: '어떻게 가치가 되는가' },
  { href: '/research', label: '미래 연구', description: '다음 무엇을 탐색하는가' },
  { href: '/services', label: '서비스', description: '무엇을 제공하는가' },
  { href: '/public', label: '공공 협력', description: '공공과 무엇을 하는가' },
  { href: '/ir', label: 'IR', description: '어떻게 성장하는가' },
]

export default function CompanyNarrativeNav({ current }: { current: string }) {
  return (
    <nav className="border-b border-slate-200 bg-white" aria-label="회사 정보 구조">
      <div className="company-container py-5">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
          One company · One narrative
        </p>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {items.map((item) => {
            const active = item.href === current
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={`min-w-fit rounded-xl border px-4 py-3 transition ${
                  active
                    ? 'border-primary-600 bg-primary-600 text-white'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-primary-200 hover:bg-blue-50'
                }`}
              >
                <span className="block text-sm font-black">{item.label}</span>
                <span className={`mt-0.5 block text-xs ${active ? 'text-white/80' : 'text-slate-500'}`}>
                  {item.description}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

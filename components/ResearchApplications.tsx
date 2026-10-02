import { researchApplications, researchUpdateDate } from '../lib/research-applications'

export default function ResearchApplications({ domain }: { domain?: string }) {
  return (
    <section className="scroll-mt-24 border-t border-slate-200 bg-white py-14" id="recent-research">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-cyan-800">연구·제품 적용 업데이트 · {researchUpdateDate}</p>
        <h2 className="mt-3 text-2xl font-bold text-slate-900">{domain ? '최근 연구·제품 적용' : '같은 연구 구조를 서로 다른 현장의 제품으로'}</h2>
        <p className="mt-4 leading-7 text-slate-700">정해성 연구자의 설계는 기록을 모으는 데서 시작해, 누가 어떤 근거로 판단하고 다음 행동을 이어갈 수 있는지까지 다룹니다. {domain ? '이 분야의 최근 적용과 현재 제공 범위를 안내합니다.' : '최근 고도화는 금융의 실행 통제, 발달지원의 역할별 협업, 국제커플 파트너 운영, 생활·영양 기록으로 구체화되고 있습니다.'}</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {researchApplications.filter((item) => !domain || item.name.startsWith(domain)).map((item) => (
            <article key={item.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-bold text-slate-900">{item.name}</h3>
              <p className="mt-4 leading-7 text-slate-700">{item.description}</p>
              <p className="mt-4 text-sm leading-6 text-slate-600">{item.status}</p>
              <a href={item.href} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block font-semibold text-primary-700 underline underline-offset-4">공식 적용·기술 안내 →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

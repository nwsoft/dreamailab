export default function StrategyPassportResearch() {
  return (
    <section className="scroll-mt-24 border-t border-slate-200 bg-slate-950 py-14 text-white" id="strategy-passport">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-cyan-300">NoahAI · 전략 스튜디오 · 전략 검증 여권 · 전략 허브</p>
        <h2 className="mt-3 text-2xl font-bold">전략을 주장하는 시장에서, 실행 근거를 확인하는 문화로</h2>
        <p className="mt-5 leading-8 text-slate-200">좋은 수익률을 보여주는 이미지와 실제로 실행한 전략은 같은 증거가 아닙니다. 정해성 연구자의 금융 분야 설계는 전략의 원문, 실행 규칙, 버전과 검증 결과를 연결해 다른 사람이 그 근거를 확인하고 다시 검증할 수 있는 구조를 만드는 데 있습니다.</p>
        <p className="mt-4 leading-8 text-slate-200">NoahAI가 정의한 ‘세계 최초 전략 검증 여권 생태계’는 이 연결 전체를 하나의 제품 생명주기로 다룹니다. 전략 스튜디오가 자연어·Pine·문서의 의미를 지원되는 실행 규칙으로 구조화하고, 여권이 특정 버전의 출처·검증 조건·결과·한계를 담습니다. 전략 허브는 그 패키지를 유통하고, 받은 사용자는 자신의 환경에서 다시 검증한 뒤 운용합니다.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-700 p-6">
            <h3 className="text-lg font-bold text-cyan-200">전략과 증거의 바꿔치기를 막는 구조</h3>
            <p className="mt-4 leading-7 text-slate-300">원문과 실행 규칙을 추적하고 전략 ID·버전·콘텐츠 해시를 연결합니다. 패키지 내용이 기록된 해시와 다르면 가져오기를 차단하며, 서명이 있는 패키지는 서명을 검사합니다. 미지원 규칙을 임의로 실행 가능한 전략으로 바꾸지 않고, 수정한 버전이 기존 활성 전략을 자동 교체하지 않도록 합니다.</p>
          </article>
          <article className="rounded-2xl border border-slate-700 p-6">
            <h3 className="text-lg font-bold text-cyan-200">검증하지 않은 성과를 검증된 성과로 포장하지 않도록</h3>
            <p className="mt-4 leading-7 text-slate-300">구조·무결성 확인 E0와 제작자 로컬·서버 미확인 근거 E1을 구분하고 둘 다 검증 랭킹에서 제외합니다. E2~E5는 서버 서명 OOS, 계정 연동 PAPER, 제한 LIVE 관찰, 기관 확인 체결로 근거를 구분하는 계약입니다. 기관·통화·PAPER/LIVE와 정확한 전략 버전을 분리해 다른 성과를 섞지 않습니다.</p>
          </article>
        </div>
        <h3 className="mt-9 text-xl font-bold">이 구조가 필요한 현장</h3>
        <p className="mt-4 leading-8 text-slate-300">금융 전략의 공유·유통과 자동 운용에서는 ‘무엇을 실행했는가’와 ‘어떤 결과를 확인했는가’가 일치해야 합니다. 전략 여권은 수익률 광고만으로 판단하던 거래를 출처·버전·검증 조건·근거를 확인하는 흐름으로 바꾸는 신뢰 기반입니다. 같은 설계 원리는 산업 자동화 규칙이나 AI 에이전트의 실행 정책을 전달할 때도 적용 가능성이 있습니다. 이 산업 확장은 연구 방향입니다.</p>
        <p className="mt-4 text-sm leading-7 text-slate-400">패키지 무결성은 입력된 주장 자체의 진실성을 인증하지 않습니다. 미확인 근거를 분리하고 더 높은 확인 단계를 요구하는 것이 핵심입니다. 현재 허브는 무료 공개 테스트이며 유료 판매·정산은 별도 단계입니다. 여권은 미래 수익 보증이 아닙니다.</p>
        <a href="https://noahailabs.com/ko/search/strategy-studio-validation-passport" target="_blank" rel="noopener noreferrer" className="mt-6 inline-block font-semibold text-cyan-300 underline underline-offset-4">전략 스튜디오·검증 여권 공식 설명 →</a>
      </div>
    </section>
  )
}

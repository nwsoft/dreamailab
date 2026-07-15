import {
  getCategoryName as getNewsCategoryName,
  getNewsCategoriesForFilter,
} from '../../lib/news-categories'

export interface NewsArticleLocale {
  title: string
  excerpt: string
  content: string
}

export interface NewsArticle {
  id: number
  title: string
  excerpt: string
  content: string
  category: string
  date: string
  image: string
  featured: boolean
  author?: string
  tags?: string[]
  /** 영문 등 추가 언어 (해당 locale 전용 페이지·hreflang·JSON-LD에 사용) */
  i18n?: {
    en?: NewsArticleLocale
  }
}

export function hasEnglishTranslation(article: NewsArticle): boolean {
  return Boolean(article.i18n?.en?.title && article.i18n?.en?.content)
}

export function getLocalizedArticle(
  article: NewsArticle,
  locale: 'ko' | 'en'
): NewsArticle {
  if (locale === 'en' && article.i18n?.en) {
    return {
      ...article,
      title: article.i18n.en.title,
      excerpt: article.i18n.en.excerpt,
      content: article.i18n.en.content,
    }
  }
  return article
}

export const newsArticles: NewsArticle[] = [
  {
    id: 83,
    title: '노아AI, SaaS 전환 앞두고 통합 KPI 대시보드 공개… 운영·AI 추론·학습 데이터 기록 한눈에',
    excerpt: 'Noah AI Labs가 SaaS 서비스 전환을 앞두고 플랫폼·블록체인·증권·ETF 운영 이벤트와 AI 추론, 학습 데이터 기록을 기간별로 확인할 수 있는 통합 KPI 대시보드를 공개했습니다.',
    category: 'company',
    date: '2026-07-15',
    image: '📊',
    featured: true,
    author: 'Noah AI Labs',
    tags: [
      '노아AI',
      'Noah AI Labs',
      'AI 금융',
      '금융 SaaS',
      '통합 KPI 대시보드',
      '운영 데이터',
      'AI 추론',
      '학습 데이터 기록',
      '가드레일',
      '금융 의사결정 인프라',
      '디지털케어로그',
      '핀테크',
    ],
    content: `
      <p class="text-sm text-gray-500 mb-6">[회사 뉴스 · 2026-07-15]</p>

      <p class="text-lg font-semibold text-gray-800 mb-8 leading-relaxed border-l-4 border-primary-600 pl-4">
        금융 인공지능 서비스 <strong>노아AI</strong>를 운영하는 <strong>Noah AI Labs</strong>가 SaaS 서비스 전환을 앞두고 플랫폼 운영과 금융 의사결정 인프라의 상태를 확인할 수 있는 통합 KPI 대시보드를 공개했다. 대시보드는 1일·7일·30일·90일 구간을 선택해 플랫폼, 블록체인, 증권, ETF, AI 추론, 학습 데이터 기록, 주문 처리 결과를 구분해 보여준다.
      </p>

      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        노아AI는 드림에이아이랩에서 분리된 금융 AI 서비스로, 시장·계정 데이터를 바탕으로 판단을 보조하고 위험 신호와 실행 전 통제 과정을 기록하는 금융 의사결정 인프라를 지향한다. 실제 주문과 자금 이동은 사용자의 계정과 외부 거래소·증권사 API 조건에 따라 수행되며, 노아AI가 수익을 보장하거나 자산을 직접 운용하는 구조는 아니다.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10">1일·7일·30일·90일 단위로 운영 상태 확인</h2>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        통합 KPI 대시보드는 짧은 기간의 운영 상태와 누적 흐름을 함께 확인할 수 있도록 기간 선택 기능을 제공한다. 로그인·세션·상태 점검 같은 플랫폼 이벤트, 블록체인 및 학습 데이터 기록, 증권·ETF 주문 이벤트, AI 추론 완료 건수와 응답시간을 한 화면에서 확인하는 방식이다.
      </p>
      <ul class="list-disc list-inside text-gray-700 space-y-2 mb-8 ml-2">
        <li><strong>플랫폼 지표:</strong> 로그인, 세션, 상태 점검과 서비스 이용 흐름</li>
        <li><strong>AI 지표:</strong> 추론 완료 건수와 평균 응답시간</li>
        <li><strong>학습 데이터 지표:</strong> 운영 과정에서 기록된 학습 데이터 이벤트</li>
        <li><strong>거래 지표:</strong> 거래소·자산군별 주문 이벤트와 처리 결과</li>
        <li><strong>사용자 지표:</strong> DAU, MAU, 재방문율과 사용자별 이용 흐름</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">이벤트 수와 거래 성과를 분리해 공개</h2>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        대시보드의 핵심은 이벤트 수와 실제 거래 성과를 같은 의미로 해석하지 않도록 지표를 분리한 데 있다. 최근 30일 화면에는 플랫폼·블록체인·증권·ETF 등 여러 영역의 이벤트가 함께 집계되며, 이 중 학습 데이터 기록과 AI 추론은 시스템 활동량을 보여주는 운영 지표다. 이벤트가 많이 기록됐다는 사실만으로 수익률이나 투자 성과가 높다고 판단할 수는 없다.
      </p>
      <div class="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
        <h3 class="font-bold text-gray-900 mb-3">공개 KPI를 읽는 기준</h3>
        <ul class="list-disc list-inside text-gray-700 space-y-2">
          <li>이벤트 성공률은 데이터 처리 또는 주문 처리 성공률이며, 매매 승률과 다르다.</li>
          <li>학습 데이터 기록 건수는 데이터가 축적된 활동량이며, 모델 성능 개선을 직접 의미하지 않는다.</li>
          <li>주문 성공률은 주문 요청의 처리 결과이며, 거래 후 손익과는 별도로 확인해야 한다.</li>
          <li>사용자 성과를 말하려면 수수료·슬리피지·순손익·최대낙폭을 함께 공개해야 한다.</li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">가드레일은 차단 건수만으로 판단하지 않는다</h2>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        노아AI의 가드레일은 위험 신호를 확인하고, 조건에 맞지 않는 실행을 제한하거나 보류하는 안전 계층이다. 따라서 가드레일의 유효성을 검증하려면 위험 이벤트가 발생했는지뿐 아니라 전체 평가 건수, 차단 건수, 차단률, 주문 거부 사유, 반복 실패 보호가 함께 기록되어야 한다. 특정 기간에 리스크 이벤트가 0건으로 표시되는 경우에도 차단 조건이 작동하지 않았다는 뜻인지, 해당 이벤트 수집이 없는 것인지 구분할 필요가 있다.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">학습 구조는 기간·동일 기준 비교로 검증</h2>
      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        운영 데이터가 쌓인다는 사실은 노아AI의 피드백 루프가 작동하기 위한 기반을 보여준다. 다만 학습으로 선택 구조가 개선되고 사용자 순손익이 상승했다는 결론을 내리려면 동일한 사용자군과 동일한 집계 기준으로 기간을 나눠 승률, 순손익, 최대낙폭, 거래 비용, 손실 사용자 비중을 비교해야 한다. 단순 이벤트 누적이나 짧은 기간의 승률만으로 강화학습 또는 연합학습의 성능을 단정하지 않는 것이 노아AI의 공개 원칙이다.
      </p>

      <div class="bg-amber-50 border-l-4 border-amber-500 p-5 mb-8 rounded-r-lg">
        <p class="text-amber-900 text-sm leading-relaxed">
          <strong>투자 유의사항:</strong> 본 KPI는 운영 로그와 집계 지표를 공개하는 기술 투명성 자료다. 투자 자문, 일임 운용, 수익 보장 또는 손실 방지를 의미하지 않는다. 실제 주문·체결·손익은 사용자의 계정과 외부 금융 API, 시장 상황에 따라 달라질 수 있다.
        </p>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">SaaS 전환을 위한 공개 기준선</h2>
      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        Noah AI Labs는 SaaS 전환 과정에서 기능 소개만 공개하는 방식에서 벗어나, 서비스가 실제로 어떤 이벤트를 수집하고 어떤 상태를 확인하는지 공개하는 운영 기준선을 마련하고 있다. 향후에는 기간별 데이터의 기준 시각, 집계 범위, 사용자군 정의, 순손익 산식, 가드레일 평가 건수를 함께 제공해 KPI가 기술 운영과 사용자 경험을 어떻게 연결하는지 검증할 수 있도록 할 계획이다.
      </p>

      <div class="bg-white border border-gray-200 rounded-xl p-6 mb-8">
        <p class="font-semibold text-gray-900 mb-3">공식 확인 경로</p>
        <ul class="list-disc list-inside text-sm text-gray-700 space-y-2">
          <li><a href="https://noahailabs.com/ko" target="_blank" rel="noopener noreferrer" class="text-primary-600 underline">Noah AI Labs 공식 사이트</a></li>
          <li><a href="https://daltrading.net/admin/kpi?days=7" target="_blank" rel="noopener noreferrer" class="text-primary-600 underline">7일 KPI 대시보드</a></li>
          <li><a href="https://daltrading.net/admin/kpi?days=30" target="_blank" rel="noopener noreferrer" class="text-primary-600 underline">30일 KPI 대시보드</a></li>
          <li><a href="/services/finance" class="text-primary-600 underline">드림에이아이랩의 노아AI 이전 안내</a></li>
          <li><a href="/blog/noahai-technical-whitepaper" class="text-primary-600 underline">노아AI 기술 기준 요약</a></li>
        </ul>
      </div>

      <p class="text-gray-600 text-sm border-t border-gray-200 pt-6 leading-relaxed">
        ※ NoahAI는 Noah AI Labs에서 독립 운영되는 금융 AI 서비스입니다. 본 글은 공개 KPI의 구조와 해석 기준을 설명하기 위한 회사 뉴스이며, 특정 금융상품의 매수·매도 추천이나 투자 성과를 보장하지 않습니다.
      </p>
    `,
  },
  {
    id: 82,
    title: '자람이, 발달센터 도입 과정 공개… 센터 행정·치료기록·보호자 연계를 하나의 흐름으로',
    excerpt: '드림에이아이랩이 발달장애 플랫폼 자람이의 발달센터 도입 과정을 공개했습니다. 센터 초기 설정부터 치료기록, 보호자 소통, 단계별 확산까지 실제 운영 흐름을 중심으로 설명합니다.',
    category: 'company',
    date: '2026-07-15',
    image: '🏢',
    featured: true,
    author: '드림에이아이랩',
    tags: [
      '자람이',
      '발달센터 도입',
      '발달장애 플랫폼',
      '치료센터 행정',
      '치료일지',
      '보호자 연계',
      '센터 운영',
      '발달장애 SaaS',
      'AI 디지털 케어로그',
      '권한 관리',
      '센터 온보딩',
      '디지털 헬스케어',
    ],
    content: `
      <p class="text-sm text-gray-500 mb-6">[회사 뉴스 · 2026-07-15]</p>

      <p class="text-lg font-semibold text-gray-800 mb-8 leading-relaxed border-l-4 border-primary-600 pl-4">
        드림에이아이랩이 발달장애 플랫폼 <strong>자람이</strong>의 발달센터 도입 과정을 공개했다. 센터 운영자가 기본 정보를 설정하는 단계부터 아동·보호자 등록, 일정과 출석 관리, 치료기록 작성, 보호자 소통까지 실제 업무가 이어지는 흐름을 중심으로 센터 도입 방식을 설명한다.
      </p>

      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        발달센터는 상담, 치료, 일정, 출결, 보호자 안내, 치료기록 등 여러 업무를 동시에 처리한다. 기록이 종이·메신저·개별 파일로 나뉘면 같은 내용을 반복해서 입력하거나, 보호자에게 상황을 다시 설명하는 일이 생기기 쉽다. 자람이는 센터에서 발생하는 기록을 아이 중심으로 연결하고, 역할별 권한에 따라 필요한 정보를 확인하도록 설계된 AI 디지털 케어로그 플랫폼이다.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10">1단계: 센터 운영 구조와 권한 설정</h2>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        도입은 센터의 운영 구조를 확인하는 것에서 시작한다. 센터 관리자, 치료사, 보호자 등 사용자 역할을 구분하고, 각 역할이 입력하거나 확인할 수 있는 기록 범위를 정한다. 여러 사람이 같은 아동의 정보를 다루는 만큼, 기능을 빠르게 여는 것보다 권한과 동의 범위를 먼저 정하는 것이 중요하다.
      </p>
      <ul class="list-disc list-inside text-gray-700 space-y-2 mb-8 ml-2">
        <li>센터 기본 정보와 운영자 계정 설정</li>
        <li>치료사·보호자 등 사용자 역할과 접근 범위 설정</li>
        <li>아동·보호자 등록 및 이용 동의 확인</li>
        <li>센터 내부 공지와 소통 채널 정리</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">2단계: 일정·출석·치료기록을 한 흐름으로 연결</h2>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        기본 설정이 끝나면 센터 업무의 중심인 일정과 치료기록을 연결한다. 예약과 출석을 확인한 뒤 치료 목표, 회기 관찰, 과제 수행, 보호자 전달사항을 같은 아동의 기록 흐름 안에 남길 수 있도록 구성한다. 이를 통해 치료일지가 단순히 회기별 문서로 끝나지 않고, 다음 회기와 보호자 소통에 참고할 수 있는 누적 기록으로 이어진다.
      </p>
      <ul class="list-disc list-inside text-gray-700 space-y-2 mb-8 ml-2">
        <li>상담·치료 일정과 출석 상태 확인</li>
        <li>치료 목표와 회기별 관찰 기록 작성</li>
        <li>결석·보강·대기자 등 센터 운영 흐름 관리</li>
        <li>보호자에게 전달할 변화와 다음 과제 정리</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">3단계: 보호자 기록과 센터 기록 연결</h2>
      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        치료실에서의 관찰만으로는 아이의 하루를 모두 설명하기 어렵다. 자람이는 센터 기록과 보호자가 가정에서 남긴 수면, 식사, 감정, 행동, 생활 변화를 연결해 치료실 밖의 맥락을 함께 확인하는 방향을 지향한다. 다만 보호자 기록의 열람 범위와 공유 기간은 기관 정책과 동의 범위에 따라 달라질 수 있다.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">센터 도입 후 달라지는 업무 흐름</h2>
      <div class="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
        <ul class="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>기존:</strong> 일정, 출석, 치료일지, 보호자 안내가 서로 다른 문서와 대화에 분산</li>
          <li><strong>도입 후:</strong> 아동을 기준으로 일정·치료·가정 기록을 연결해 확인</li>
          <li><strong>관리자:</strong> 센터 운영 현황과 사용자 권한을 한 화면에서 점검</li>
          <li><strong>치료사:</strong> 회기 기록과 이전 목표를 이어 보고 다음 치료 방향을 검토</li>
          <li><strong>보호자:</strong> 센터에서 진행된 내용과 가정에서 관찰한 변화를 같은 흐름으로 확인</li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">단계별 확산으로 현장 부담을 줄인다</h2>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        센터 전체 업무를 한 번에 바꾸기보다 핵심 기능부터 적용하고 사용 범위를 넓히는 방식이 현실적이다. 자람이는 센터 운영과 치료기록을 우선 연결한 뒤 보호자, 학교, 병원 등 관련 주체와의 기록 연계를 단계적으로 확장하는 구조를 제시한다.
      </p>
      <ol class="list-decimal list-inside text-gray-700 space-y-2 mb-8 ml-2">
        <li><strong>센터:</strong> 운영자·치료사 계정, 아동 등록, 일정과 기록 설정</li>
        <li><strong>보호자:</strong> 가정 관찰 기록과 센터 소통 연계</li>
        <li><strong>학교:</strong> 교육·생활 관찰 정보의 연계 범위 검토</li>
        <li><strong>병원:</strong> 진료 참고 리포트와 동의 기반 정보 공유 검토</li>
      </ol>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">정해성 CTO가 설계한 기록 연결 인프라</h2>
      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        정해성 CTO는 발달장애 현장에서 반복되는 기록 단절 문제를 기술적으로 해결하기 위해 AI 디지털 케어로그 구조를 설계해 왔다. 자람이는 센터의 행정 솔루션에 그치지 않고, 치료사와 보호자가 남긴 기록이 다음 치료와 상담의 참고자료로 이어지도록 하는 연결 인프라를 목표로 한다.
      </p>

      <div class="bg-amber-50 border-l-4 border-amber-500 p-5 mb-8 rounded-r-lg">
        <p class="text-amber-900 text-sm leading-relaxed">
          <strong>안내:</strong> 자람이는 진단·처방·수업·치료를 대체하지 않는다. 센터·보호자·학교·병원 간 정보 공유는 기관 도입 정책과 이용자 동의 범위에 따라 운영되며, 실제 기능과 도입 일정은 센터별 조건에 따라 달라질 수 있다.
        </p>
      </div>

      <div class="bg-white border border-gray-200 rounded-xl p-6 mb-8">
        <p class="font-semibold text-gray-900 mb-3">관련 콘텐츠</p>
        <ul class="list-disc list-inside text-sm text-gray-700 space-y-2">
          <li><a href="/services/jarame" class="text-primary-600 underline">자람이 서비스 보기</a></li>
          <li><a href="/news/74" class="text-primary-600 underline">보호자·교사·치료사·병원 기록 타임라인 업데이트</a></li>
          <li><a href="/news/77" class="text-primary-600 underline">발달센터·보호자 무료 요금제 안내</a></li>
          <li><a href="/news/81" class="text-primary-600 underline">AI 디지털 케어로그 실사용 검증 확대</a></li>
          <li><a href="/contact" class="text-primary-600 underline">센터 도입 문의</a></li>
        </ul>
      </div>

      <p class="text-gray-600 text-sm border-t border-gray-200 pt-6 leading-relaxed">
        ※ 본 글은 자람이의 센터 도입 흐름과 기능 방향을 설명하는 회사 뉴스입니다. 센터별 적용 범위, 계정 권한, 데이터 보관과 공유 기준은 계약·약관·기관 정책에 따릅니다.
      </p>
    `,
  },
  {
    id: 81,
    title: '일상 기록이 진료 근거로… 발달장애 통합 플랫폼 자람이, AI 디지털 케어로그 실사용 검증 확대',
    excerpt: '자람이가 발달장애인의 일상, 치료, 약물, 교육 기록을 하나로 연결하는 AI 디지털 케어로그의 실사용 검증을 확대한다. 보호자는 진료용 리포트로 병원 준비를 돕고, 의료진은 약물 반응과 생활 변화를 시계열로 확인할 수 있다.',
    category: 'press',
    date: '2026-07-15',
    image: '📰',
    featured: true,
    author: '드림에이아이랩',
    tags: [
      '발달장애 통합 플랫폼',
      '자람이',
      'AI 디지털 케어로그',
      '실사용 검증',
      '진료 리포트',
      '발달장애 RWD',
      '발달장애 RWE',
      '약물 반응 추적',
      '보호자 기록',
      '치료사 기록',
      '의사결정 지원',
      '디지털 헬스케어',
    ],
    content: `
      <p class="text-sm text-gray-500 mb-6">[보도자료 · 2026-07-15]</p>

      <p class="text-lg font-semibold text-gray-800 mb-8 leading-relaxed border-l-4 border-primary-600 pl-4">
        발달장애인의 일상, 치료, 약물 복용, 교육 기록을 하나로 연결하는 AI 기반 디지털 케어로그 플랫폼 <strong>‘자람이’</strong>가 본격적인 실사용 검증에 나선다. 드림에이아이랩은 보호자·치료사·활동지원사·치료센터를 대상으로 실제 환경에서의 사용성을 확인하고, 발달장애 분야에 최적화된 기록·분석 인프라를 고도화할 계획이라고 15일 밝혔다.
      </p>

      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        자람이는 발달장애 분야에서 일상 데이터를 수집하고, 이를 개인 맞춤형 치료와 교육에 활용할 수 있는 실사용데이터(RWD, Real-World Data)로 축적하는 것을 목표로 한다. 나아가 장기적으로는 실제 현장의 기록을 임상과 교육에 연결하는 실사용근거(RWE, Real-World Evidence) 기반으로 발전시켜, 개인별 특성에 맞는 치료·교육 의사결정을 지원하는 통합 플랫폼으로 확장한다.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10">기억 대신 리포트로, 진료 준비를 바꾸다</h2>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        자람이의 핵심은 흩어진 기록을 단순 저장하는 데 있지 않다. 보호자와 치료사가 일상에서 남긴 정보를 시계열로 정리해, 의료진이 실제 진료 현장에서 바로 참고할 수 있는 리포트로 제공하는 데 있다. 보호자는 수개월간의 변화를 기억에 의존해 설명하지 않아도 되고, 의료진은 아이의 상태 변화를 보다 객관적으로 살필 수 있다.
      </p>
      <ul class="list-disc list-inside text-gray-700 space-y-2 mb-8 ml-2">
        <li><strong>생체·행동 데이터:</strong> 수면, 식사량, 감정 변화, 문제행동</li>
        <li><strong>치료·약물 데이터:</strong> 의사소통 반응, 감각 변화, 센터 치료 내용, 복용 전후 변화</li>
      </ul>
      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        이 구조를 통해 보호자는 진료실에서 아이의 상태를 처음부터 다시 설명해야 하는 부담을 줄이고, 의료진은 시간 흐름에 따른 변화를 한눈에 확인할 수 있다.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">병원 밖에서 드러나는 약물 반응까지 기록</h2>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        발달장애인의 약물 반응은 진료실 안의 짧은 관찰만으로는 충분히 파악하기 어렵다. 졸림, 수면 패턴 변화, 공격성이나 자해 행동의 증감, 불안과 예민도 변화, 식욕 변화 등은 가정과 센터 등 실제 생활 공간에서 먼저 관찰되는 경우가 많다. 그러나 기존에는 이런 변화가 보호자의 기억이나 단편적인 메모에 의존해 의료진이 처방을 조율하기 어려웠다.
      </p>
      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        자람이 플랫폼은 보호자, 치료사, 활동지원사가 각기 다른 공간에서 관찰한 변화를 시간순으로 통합해, 의료진이 처방 조정과 경과 판단에 참고할 수 있도록 돕는다.
      </p>

      <div class="bg-amber-50 border-l-4 border-amber-500 p-5 mb-8 rounded-r-lg">
        <p class="text-amber-900 text-sm leading-relaxed">
          <strong>주의:</strong> 자람이는 약물의 치료 효과를 AI가 임의로 판정하거나 의료진의 처방을 대체하는 진단 시스템이 아니다. 일상 변화를 객관적인 지표로 시각화해 의료진의 판단을 돕는 의사결정 지원 도구다.
        </p>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">치료실과 집의 기록을 연결하는 이유</h2>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        발달장애 치료 현장에서는 “치료실에서는 잘하는데 집에서는 왜 이어지지 않을까?”라는 질문이 오래된 과제로 남아 있다. 치료실 내의 긍정적 변화가 가정이나 학교 같은 실제 생활로 연결되지 않거나, 반대로 일상에서 먼저 나타난 변화를 치료사가 제때 파악하지 못해 비효율적인 목표가 유지되는 경우가 적지 않기 때문이다.
      </p>
      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        자람이는 치료사의 회기 기록, 보호자의 일상 관찰 데이터, 활동지원사의 외부 활동 기록을 유기적으로 연결해 이러한 단절을 줄이고자 한다. 이를 통해 치료사는 이전 목표 대비 실제 반응과 문제행동 변화를 다각도로 확인하고, 치료 방향을 보다 빠르게 점검할 수 있다.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">맞춤형 치료·교육의 근거를 쌓는 데이터 인프라</h2>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        발달장애는 동일한 진단명 아래에서도 의사소통 수준, 감각 예민도, 행동 양상, 약물 반응성이 크게 다르다. 따라서 획일적인 접근보다 개인의 시계열 변화에 기반한 정밀한 맞춤형 지원이 필요하다. 자람이는 일상 속 사용 과정 자체를 고품질 RWD로 전환하고, 이를 기반으로 향후 RWE를 축적하는 방향을 지향한다.
      </p>
      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        드림에이아이랩은 자람이를 단순한 기록 앱이나 센터 행정 도구가 아니라, 보호자·병원·치료센터·사회적 돌봄망을 연결하는 발달장애 데이터 인프라로 발전시킬 계획이다.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">실사용 검증에서 확인할 항목</h2>
      <ul class="list-disc list-inside text-gray-700 space-y-2 mb-8 ml-2">
        <li>보호자의 기록 편의성</li>
        <li>진료용 리포트의 임상적 유효성</li>
        <li>치료센터의 치료계획 개선 기여도</li>
        <li>약물 반응 추적의 정확성</li>
        <li>사용자 그룹별 권한 및 개인정보 보호 구조</li>
      </ul>

      <div class="bg-primary-50 border border-primary-200 rounded-xl p-6 mb-8">
        <h3 class="font-bold text-gray-900 mb-2">정해성 CTO 발언</h3>
        <p class="text-gray-700 leading-relaxed italic mb-4">
          "보호자는 아이를 가장 잘 아는 관찰자이지만, 짧은 진료 시간 안에 수개월의 일상을 논리적으로 설명하기는 쉽지 않습니다. 자람이 리포트 한 장으로 의료진이 복약 상태와 치료, 일상생활의 인과관계를 체계적으로 파악할 수 있도록 하는 것이 목표입니다."
        </p>
        <p class="text-gray-700 leading-relaxed italic">
          "치료센터 역시 치료일지를 작성하는 데 그치지 않고 실제 삶에서의 개선 효과를 확인해야 합니다. 자람이는 정보의 파편화를 줄이고, 발달장애 분야의 맞춤형 치료·교육이 가능하도록 돕는 인프라를 지향합니다."
        </p>
      </div>

      <div class="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
        <h3 class="font-bold text-gray-900 mb-2">검색에 잘 잡히는 핵심 키워드</h3>
        <p class="text-gray-700 text-sm leading-relaxed">
          발달장애 통합 플랫폼, AI 디지털 케어로그, 발달장애 RWD, 발달장애 RWE, 진료 리포트, 약물 반응 추적, 보호자 기록, 치료사 기록, 맞춤형 치료, 디지털 헬스케어
        </p>
      </div>

      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        자람이는 향후 주요 치료센터와 보호자 커뮤니티를 중심으로 사용자 기반을 넓히고, 대학병원·특수학교·공공 복지기관·지역사회 통합돌봄 체계까지 연동 범위를 확장할 계획이다. 기억에 의존하던 발달장애 치료·교육이 데이터 기반의 정밀 맞춤형 체계로 전환될 수 있을지 관심이 모이고 있다.
      </p>

      <div class="bg-white border border-gray-200 rounded-xl p-6 mb-8">
        <p class="font-semibold text-gray-900 mb-3">관련 콘텐츠</p>
        <ul class="list-disc list-inside text-sm text-gray-700 space-y-2">
          <li><a href="/news/80" class="text-primary-600 underline">발달장애 가족은 왜 늘 불안한가</a></li>
          <li><a href="/news/77" class="text-primary-600 underline">자람이 무료 요금제 공개</a></li>
          <li><a href="/technology/platform" class="text-primary-600 underline">AI 디지털 케어로그 기술 개요</a></li>
          <li><a href="/services/jarame" class="text-primary-600 underline">자람이 서비스 보기</a></li>
          <li><a href="/contact" class="text-primary-600 underline">문의하기</a></li>
        </ul>
      </div>

      <p class="text-gray-600 text-sm border-t border-gray-200 pt-6 leading-relaxed">
        문의: contact@dreamailab.com · 본 기사는 발달장애 데이터 기록 및 의사결정 지원 관련 서비스 안내를 포함하며, 의료기기·진단·처방을 대체하지 않습니다.
      </p>
    `,
  },
  {
    id: 80,
    title: '발달장애 가족은 왜 늘 불안한가 — 기록이 끊긴 시스템을 다시 설계해야 하는 이유',
    excerpt: '발달장애 치료의 핵심 문제는 부모·학교·센터·병원의 정보가 하나로 연결되지 않는 구조입니다. 이 글은 개인의 노력이 아니라 시스템 재설계가 왜 필요한지, 그리고 기록 연결이 왜 치료의 합리성을 높이는지 인사이트 관점에서 정리합니다.',
    category: 'insight',
    date: '2026-07-07',
    image: '💡',
    featured: false,
    author: '자람이팀',
    tags: ['인사이트', '발달장애', '기록 단절', '부모 불안', '치료 데이터', '시스템 설계', '자람이'],
    content: `
      <p class="text-sm text-gray-500 mb-6">[인사이트 · 2026-07-07]</p>

      <p class="text-lg font-semibold text-gray-800 mb-8 leading-relaxed border-l-4 border-primary-600 pl-4">
        발달장애 가족이 지치는 이유는 노력 부족이 아니라, <strong>아이를 전체로 볼 수 있는 기록 구조가 없기 때문</strong>입니다.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10">부모가 반복해서 묻는 질문</h2>
      <ul class="list-disc list-inside text-gray-700 space-y-2 mb-8 ml-2">
        <li>우리 아이는 실제로 좋아지고 있는가</li>
        <li>지금 치료가 맞는 방향인가</li>
        <li>센터·학교·병원 판단이 왜 서로 다른가</li>
        <li>내가 놓친 정보 때문에 골든타임을 잃는 것은 아닌가</li>
      </ul>
      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        이 질문은 과민 반응이 아니라, 정보가 분절된 시스템에서 생기는 구조적 불안입니다.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">문제는 현장이 아니라 연결 구조</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        발달장애 현장에는 아이를 위해 최선을 다하는 부모·치료사·교사·의사가 많습니다. 그러나 각자의 기록은 서로 잘 연결되지 않습니다.
      </p>
      <ul class="list-disc list-inside text-gray-700 space-y-2 mb-8 ml-2">
        <li>병원은 제한된 진료 시간 안에서 부모 설명에 의존</li>
        <li>센터 기록은 센터 내부 문서에 머무름</li>
        <li>학교 관찰은 치료 계획과 체계적으로 연결되기 어려움</li>
        <li>부모는 카톡·메모·기억에 분산된 정보를 매번 다시 정리</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">왜 치료가 비합리적으로 느껴지는가</h2>
      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        많은 부모가 확신 없이도 치료를 계속합니다. 대안이 부족하고, 중단에 대한 두려움이 크기 때문입니다. 이때 필요한 것은 “더 강한 권유”가 아니라 <strong>목표·과정·결과를 비교 가능한 기록</strong>으로 남기는 체계입니다.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">무엇이 바뀌어야 하는가</h2>
      <ul class="list-disc list-inside text-gray-700 space-y-2 mb-8 ml-2">
        <li>아이 중심 타임라인으로 기록 통합</li>
        <li>역할별 표준 입력(보호자·교사·치료사·의료진)</li>
        <li>동의·권한 기반 공유(RBAC)</li>
        <li>부모가 이해할 수 있는 언어로 요약·설명</li>
        <li>시간 경과에 따른 변화 추적과 근거 비교</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">데이터가 쌓이면 달라지는 점</h2>
      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        데이터의 의미는 “숫자가 많아지는 것”이 아닙니다. 아이의 하루가 사라지지 않고 남는 것입니다. 부모의 막연한 불안이 확인 가능한 근거로 바뀌고, 전문가 경험이 다음 판단에 재사용 가능한 지식이 됩니다.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">그래서, 왜 늘 불안한가</h2>
      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        발달장애 가족이 늘 불안한 이유는 사랑이 부족해서도, 노력이 부족해서도 아닙니다. <strong>아이를 전체로 볼 수 있는 기록이 어디에도 모이지 않기 때문</strong>입니다. 불안을 줄이는 길은 “더 열심히 하라”는 요구가 아니라, 흩어진 기록을 아이 중심으로 잇는 <strong>시스템의 재설계</strong>입니다. 기록이 연결되면 부모는 근거를 갖고 판단할 수 있고, 전문가는 아이를 더 입체적으로 이해할 수 있으며, 치료는 훨씬 더 합리적으로 바뀔 수 있습니다. 자람이가 만들고자 하는 것이 바로 그 연결의 기반입니다.
      </p>

      <div class="bg-amber-50 border-l-4 border-amber-500 p-5 mb-8 rounded-r-lg">
        <p class="text-amber-900 text-sm leading-relaxed">
          <strong>중요:</strong> 기록 연결 시스템은 진단·처방을 대체하지 않습니다. 전문가 판단을 더 정확하게 돕기 위한 기반입니다.
        </p>
      </div>

      <div class="bg-white border border-gray-200 rounded-xl p-6 mb-8">
        <p class="font-semibold text-gray-900 mb-3">관련 콘텐츠</p>
        <ul class="list-disc list-inside text-sm text-gray-700 space-y-2">
          <li><a href="/news/79" class="text-primary-600 underline">왜 포기하지 않았는가 (Founder Story)</a></li>
          <li><a href="/news/76" class="text-primary-600 underline">부모-학교 언어 번역 인사이트</a></li>
          <li><a href="/news/74" class="text-primary-600 underline">아이 타임라인 업데이트</a></li>
          <li><a href="/technology/platform" class="text-primary-600 underline">AI디지털케어로그 기술 개요</a></li>
          <li><a href="/services/jarame" class="text-primary-600 underline">자람이 서비스 보기</a></li>
        </ul>
      </div>
    `,
  },
  {
    id: 79,
    title: '우리는 왜 자람이를 만드는가 — 발달장애 가족이 혼자 버티지 않아도 되는 사회를 위해',
    excerpt: '자람이는 치료 앱 하나를 만드는 프로젝트가 아니라, 가정·학교·센터·병원에 흩어진 기록을 아이 중심으로 연결하는 시스템을 만드는 시도입니다. 모두가 어렵다고 말했지만, “누군가는 반드시 해야 하는 일”이라는 믿음으로 시작한 Founder Story입니다.',
    category: 'founder',
    date: '2026-07-07',
    image: '🧠',
    featured: true,
    author: '자람이팀',
    tags: ['Founder Story', '자람이', '발달장애', 'AI디지털케어로그', '기록 단절', '연결 시스템', '정해성', '철학'],
    content: `
      <p class="text-sm text-gray-500 mb-6">[Founder Story · 2026-07-07]</p>

      <p class="text-lg font-semibold text-gray-800 mb-8 leading-relaxed border-l-4 border-primary-600 pl-4">
        자람이는 “기능을 하나 더 붙인 서비스”가 아니라, <strong>발달장애 가족이 더 이상 혼자 버티지 않아도 되는 사회</strong>를 위한 연결 시스템을 만들려는 프로젝트입니다.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10">우리가 마주한 질문</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        발달장애 아이를 키우는 가족은 매일 같은 질문 앞에 섭니다.
      </p>
      <ul class="list-disc list-inside text-gray-700 space-y-2 mb-8 ml-2">
        <li>“우리 아이는 정말 좋아지고 있는 걸까?”</li>
        <li>“지금 받고 있는 치료가 맞는 걸까?”</li>
        <li>“병원에서는 괜찮다고 하는데, 왜 집에서는 이렇게 힘들까?”</li>
        <li>“센터에서는 잘했다고 하는데, 왜 학교에서는 전혀 다르게 행동할까?”</li>
        <li>“내가 놓치고 있는 것은 없을까?”</li>
      </ul>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        이 질문들은 단순한 불안이 아니라, 발달장애 가족이 현장에서 매일 마주하는 현실입니다. 아이는 병원에 가고, 센터에 가고, 학교에 가고, 다시 가정으로 돌아옵니다. 언어치료·감각통합치료·인지치료·행동치료를 받고, 때로는 약물치료도 병행합니다. 부모는 하루에도 몇 번씩 아이를 관찰하고, 선생님과 연락하고, 치료사에게 묻고, 진료를 예약합니다.
      </p>
      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        그러나 문제는 이 모든 과정이 <strong>하나의 흐름으로 연결되지 않는다</strong>는 데 있습니다. 아이의 삶은 하나인데 기록은 흩어져 있고, 아이의 문제는 연결되어 있는데 시스템은 분리되어 있습니다. 아이의 변화는 매일 일어나는데, 판단은 몇 주 또는 몇 달 뒤 짧은 상담 안에서 이루어집니다.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">현장의 노력은 부족하지 않다. 문제는 시스템이다</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        발달장애 현장에는 좋은 사람들이 많습니다. 아이를 진심으로 생각하는 부모, 작은 변화를 놓치지 않으려는 치료사, 교실 안에서 한 명 한 명을 지키려는 특수교사, 짧은 진료 시간 안에서도 아이를 이해하려는 의사가 있습니다.
      </p>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        그럼에도 어려운 이유는 선의가 부족해서가 아니라, 발달장애 치료·교육·생활을 <strong>하나의 데이터 흐름으로 연결하는 구조가 없었기</strong> 때문입니다.
      </p>
      <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-2">
        <li>병원은 병원 기록만, 센터는 센터 기록만 봅니다.</li>
        <li>학교 관찰과 가정의 변화가 치료 계획에 체계적으로 연결되기 어렵습니다.</li>
        <li>부모는 결국 기억과 감정에 의존해 설명할 수밖에 없습니다.</li>
      </ul>
      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        아이의 행동은 가정에서만 나타나는 것이 아닙니다. 학교에서, 센터에서, 진료 전후로 달라지고 수면·식사·약물·감각 자극·환경 변화에 따라 변합니다. 이 복잡한 변화를 담아내지 못하면, 아무리 각자가 열심히 해도 아이의 전체 상태를 입체적으로 보기 어렵습니다. 이것은 개인의 문제가 아니라 <strong>시스템의 문제</strong>입니다.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">왜 지금의 치료는 때로 비합리적으로 느껴지는가</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        많은 부모는 센터와 병원을 다니면서도 마음속에 의문을 품습니다. “이 치료가 정말 맞을까?”, “왜 좋아졌다는 근거가 명확하지 않을까?”, “왜 치료 목표와 결과가 숫자나 기록으로 남지 않을까?”
      </p>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        그러나 의문이 있어도 쉽게 멈추지 못합니다. 대안이 없기 때문입니다. 혹시 멈춰서 중요한 시기를 놓치는 건 아닐까, 다른 아이들은 다 받는데 우리 아이만 뒤처지는 건 아닐까 하는 두려움이 부모를 계속 움직이게 합니다. 이것은 부모가 무지해서가 아니라, <strong>아이를 포기할 수 없기 때문</strong>입니다.
      </p>
      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        문제는 이 절박함 위에서, 시스템이 불투명하면 좋은 전문가와 그렇지 않은 전문가를 구별하기 어렵다는 점입니다. 그 결과 발달장애 가족은 과학적 판단보다 주변 추천·대기 순번·소문·분위기에 의존하게 됩니다. 발달장애 치료에는 더 많은 기록, 더 많은 연결, 더 많은 검증, 그리고 <strong>부모가 이해할 수 있는 언어로 설명되는 데이터</strong>가 필요합니다.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">오은영 박사의 상담을 보며 사람들이 공감하는 이유</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        많은 사람이 오은영 박사의 상담에 공감하는 이유는 단지 유명해서가 아니라, 어려운 문제를 <strong>삶 전체의 맥락 안에서</strong> 설명하기 때문입니다. 행동 하나만 보지 않고 부모의 반응, 가정의 분위기, 과거의 경험, 상호작용의 패턴을 함께 봅니다. 그래서 사람들은 “아, 저래서 그랬구나” 하고 이해하게 됩니다.
      </p>
      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        그러나 모든 진료가 그렇게 이루어지기는 어렵습니다. 대부분의 의사는 제한된 시간에 많은 환자를 봐야 하고, 부모의 기억·짧은 문진·검사 결과만으로 판단해야 합니다. 즉 문제는 의사의 능력만이 아니라, <strong>아이의 전체 삶을 볼 수 있는 데이터 구조가 없다는 것</strong>입니다. 자람이는 좋은 의사·치료사·교사가 아이를 더 정확히 이해할 수 있도록, 필요한 맥락과 기록을 연결하려 합니다.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">가장 큰 문제는 ‘아이를 전체로 보는 기록’이 없다는 것</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        발달장애 아이의 상태는 하루 단위로 달라집니다. 어제 잠을 잘 잤는지, 아침을 제대로 먹었는지, 학교에서 무슨 일이 있었는지, 치료 전 감각 자극이 많았는지, 약을 먹은 뒤 어떤 변화가 있었는지, 어떤 상황에서 불안이 커졌는지 — 이 모든 것이 치료와 교육에 중요한 정보입니다.
      </p>
      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        하지만 지금 이 정보들은 대부분 흩어집니다. 메신저에, 종이에, 부모의 기억에, 센터 내부 기록에, 학교 개별 기록에 남고, 진료실에서는 말로 사라집니다. 그 결과 아이의 중요한 변화가 데이터가 되지 못하고, 데이터가 되지 못하니 분석되지 못하고, 분석되지 못하니 맞춤형 치료로 이어지기 어렵습니다. 자람이는 바로 이 지점을 바꾸려 합니다. 이것이 자람이가 말하는 <strong>AI디지털케어로그</strong>의 핵심입니다.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">부모는 왜 의심하면서도 계속 병원과 센터를 가는가</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        현실을 모르는 사람들은 쉽게 말합니다. “이상하면 옮기면 되지 않나요?” 하지만 좋다는 센터는 대기가 길고, 좋다는 병원은 예약이 어렵고, 특정 치료사는 몇 달·몇 년을 기다려야 할 수도 있습니다. 이미 너무 많은 비용과 시간을 투입했고, 수많은 시행착오를 겪었습니다.
      </p>
      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        그래서 부모는 의심하면서도, 힘들어도, 부담되어도, 명확한 결과가 없어도 계속 갑니다. <strong>포기하지 않기 때문에 계속 가는 것</strong>입니다. 바로 그렇기 때문에 더 투명한 시스템이 필요합니다. 치료의 목표·과정·결과가 기록되고, 전문가의 판단이 데이터와 연결되어, 아이에게 맞는 치료인지 시간이 지날수록 확인할 수 있어야 합니다. 자람이는 부모의 의문이 <strong>데이터로 확인될 수 있는 구조</strong>를 만들고자 합니다.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">자람이는 치료 앱이 아니라 발달장애 현장의 연결 시스템이다</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        자람이를 단순한 앱으로 보면 이 프로젝트의 본질을 이해하기 어렵습니다. 자람이는 일지를 쓰는 앱도, 예약을 관리하는 시스템도, 병원 기록을 정리하는 도구도 아닙니다. 자람이는 아이를 둘러싼 여러 현장을 연결하려는 시스템입니다.
      </p>
      <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-2">
        <li>가정에서 부모가 본 아이의 변화</li>
        <li>센터에서 치료사가 관찰한 반응</li>
        <li>학교에서 교사가 확인한 행동</li>
        <li>병원에서 의사가 판단한 진료 방향</li>
        <li>그리고 이 모든 것을 하나의 흐름으로 묶는 AI 기반 기록 구조</li>
      </ul>
      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        발달장애 치료에서 가장 중요한 것은 한 번의 놀라운 치료가 아니라, 아이를 <strong>오랫동안·꾸준히·정확하게 이해하는 것</strong>입니다. 이 정보가 쌓이면 부모의 감정적 호소가 객관적 기록이 되고, 치료사의 경험이 데이터가 되고, 교사의 관찰이 치료 계획과 연결되고, 의사의 판단이 실제 생활 변화와 이어집니다.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">데이터가 쌓이면 무엇이 달라지는가</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        자람이의 진짜 가치는 시간이 지날수록 커집니다. 처음에는 한 아이의 기록을 정리하는 것에서 시작해, 한 아이의 패턴을 이해하고, 비슷한 특성을 가진 아이들의 변화를 비교하고, 어떤 개입이 어떤 아이에게 효과적인지 분석하는 단계로 나아갑니다.
      </p>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        물론 데이터는 조심스럽게 다뤄야 합니다. 발달장애 아동과 가족의 정보는 매우 민감하므로 보호·동의·비식별화·보안·윤리 기준이 반드시 필요합니다. 그러나 제대로 설계된 데이터는 현장을 바꿉니다.
      </p>
      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        데이터가 많아진다는 것은 단순히 숫자가 많아진다는 뜻이 아닙니다. <strong>그동안 사라졌던 아이들의 하루가 남는다</strong>는 뜻이고, 부모의 막연한 불안이 설명 가능한 근거로 바뀐다는 뜻이며, 전문가의 경험이 검증 가능한 지식으로 축적되고, 한 아이의 시행착오가 다음 아이에게 도움이 될 수 있다는 뜻입니다. 이것이 자람이가 발달장애 치료의 초석이 될 수 있다고 말하는 이유입니다.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">불가능하다 여겨졌던 문제는 결국 인간의 손으로 바뀌어 왔다</h2>
      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        인류의 역사는 불가능하다 여겨졌던 문제를 하나씩 이해하고 해결해온 과정이었습니다. 한때 원인을 알 수 없던 질병, 치료법이 없던 병, 운명이라 여겨졌던 고통들이 있었지만 인간은 포기하지 않고 관찰하고 기록하고 연구하고 실패하고 다시 시도했습니다. 발달장애 역시 하나의 약이나 하나의 치료법으로 끝나는 문제가 아니라, 복잡하고 장기적이며 개인차가 큽니다. 그렇기 때문에 <strong>더 많은 기록과 더 정밀한 이해</strong>가 필요합니다. 누군가는 흩어진 기록을 연결하고, 부모의 불안을 데이터로 바꾸고, 현장의 노력이 사라지지 않게 해야 합니다. 자람이는 그 일을 하려 합니다.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">그럼에도 포기하지 않은 이유</h2>
      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        정해성은 이 문제를 시장 아이템이 아니라 <strong>누군가 반드시 해야 하는 일</strong>로 보았습니다. 아버지이자 AI 연구자로서 현장에서 반복되는 기록 단절을 그냥 둘 수 없었습니다. 처음 이 문제를 꺼냈을 때 돌아온 말은 “법적 이슈가 너무 크다”, “기관 협력이 불가능하다”, “현장은 바빠서 못 쓴다”, “데이터를 모아도 책임이 커진다”였습니다. 대부분 틀린 말은 아니었고 실제로 어려운 문제였습니다. 그래서 많은 팀이 시도 단계에서 멈추거나 기능 단위 제품으로 축소되며 본질적인 연결 문제를 건드리지 못했습니다. 그러나 결론은 “어렵기 때문에 하지 말자”가 아니라 <strong>“어렵기 때문에 제대로 해야 한다”</strong>였고, 그것이 자람이의 출발점이었습니다.
      </p>

      <div class="bg-primary-50 border border-primary-200 rounded-xl p-6 mb-8">
        <p class="font-semibold text-gray-900 mb-2">Founder Note</p>
        <p class="text-gray-700 leading-relaxed italic">
          "발달장애 가족이 시스템의 빈틈을 혼자 메우는 시대를 끝내고 싶었습니다. 자람이는 그 빈틈을 연결하는 인프라가 되기 위해 시작됐습니다."
        </p>
        <p class="text-gray-600 text-sm mt-3">— 정해성, AI디지털케어로그 최초 고안자</p>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">우리는 왜 포기하지 않는가</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        자람이를 만드는 이유는 단지 시장이 있기 때문이 아닙니다. 발달장애 가족의 문제가 너무 오래 방치되어 왔기 때문입니다. 부모는 너무 많은 것을 혼자 감당해왔습니다 — 아이의 상태를 설명하는 것도, 치료 효과를 판단하는 것도, 학교·센터·병원 사이를 연결하는 것도, 기록을 기억하는 것도, 불안을 견디는 것도 모두 부모의 몫이었습니다.
      </p>
      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        이제는 달라져야 합니다. 발달장애 가족이 더 이상 혼자 시스템의 빈틈을 메우지 않아도 되고, 아이의 변화가 데이터로 남고, 전문가들의 노력이 서로 연결되고, 아이의 하루가 다음 치료와 교육의 근거가 되어야 합니다. 발달장애는 의료·교육·복지·가정·기술이 모두 얽힌 복잡한 영역이라 더 오래 걸릴 수 있습니다. 하지만 아이를 키우는 부모가 매일 포기하지 않듯, 현장의 전문가가 매일 다시 시도하듯, 우리도 포기하지 않습니다. <strong>발달장애 가족이 더 이상 혼자 버티지 않아도 되는 사회</strong>, 그것이 우리가 자람이를 만드는 이유입니다.
      </p>

      <div class="bg-white border border-gray-200 rounded-xl p-6 mb-8">
        <p class="font-semibold text-gray-900 mb-3">관련 콘텐츠</p>
        <ul class="list-disc list-inside text-sm text-gray-700 space-y-2">
          <li><a href="/news/76" class="text-primary-600 underline">왜 부모-학교 언어 번역이 필요한가 (인사이트)</a></li>
          <li><a href="/news/75" class="text-primary-600 underline">전국 센터 배포 회사 뉴스</a></li>
          <li><a href="/news/74" class="text-primary-600 underline">아이 타임라인 업데이트</a></li>
          <li><a href="/technology/platform" class="text-primary-600 underline">AI디지털케어로그 기술 개요</a></li>
          <li><a href="/services/jarame" class="text-primary-600 underline">자람이 서비스 소개</a></li>
        </ul>
      </div>
    `,
  },
  {
    id: 78,
    title: '글로벌커플케어(GCC), 2026 상반기 오픈 — 국내 최초 국제결혼 마켓플레이스',
    excerpt: 'GCC는 회원을 직접 매칭하거나 결혼을 주선하지 않습니다. 검증된 국제결혼 업체가 입점하고, 소비자가 가격·절차·후기를 비교해 선택하는 국내 최초 마켓플레이스입니다. 2026년 상반기 공식 오픈을 목표로 합니다.',
    category: 'press',
    date: '2026-07-07',
    image: '💒',
    featured: true,
    author: '글로벌커플케어팀',
    tags: ['글로벌커플케어', 'GCC', '국제결혼', '마켓플레이스', '다문화가족', '정보 비교', '가격 비교', '에스크로 안전거래', '2026 상반기', '검증 입점'],
    i18n: {
      en: {
        title: 'Global Couple Care (GCC) Targets H1 2026 Launch — Korea\'s First International Marriage Marketplace',
        excerpt: 'GCC does not match members or arrange marriages directly. Verified international marriage agencies list on the platform; consumers compare pricing, procedures, and reviews. Official launch targeted for H1 2026.',
        content: `
      <p class="text-sm text-gray-500 mb-6">[Press Release · 2026-07-07]</p>

      <p class="text-lg font-semibold text-gray-800 mb-8 leading-relaxed border-l-4 border-primary-600 pl-4">
        Dream AI Lab announced that it will officially launch <strong>‘Global Couple Care (GCC)’</strong>, Korea’s first international marriage marketplace, in the first half of 2026. On GCC, consumers can compare verified agencies’ information and pricing in one place and complete contracts through <strong>escrow-protected transactions</strong>.
      </p>

      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        Until now, consumers preparing for an international marriage had to gather scattered information agency by agency, with little way to compare pricing or procedures in advance. Choosing agencies based on word-of-mouth or advertising left many exposed to excessive costs, opaque contracts, and fraud. GCC aims to replace this with a model of <strong>‘compare in one place, choose for yourself, and contract safely.’</strong>
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10">Consumers compare and choose in one place</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        GCC users can compare, on a single screen, the service packages, candidate profiles, pricing, procedures, and reviews offered by multiple verified agencies. Instead of visiting agencies one by one, they choose the right partner for themselves based on published information.
      </p>
      <ul class="list-disc list-inside text-gray-700 space-y-2 mb-8 ml-2">
        <li>Compare <strong>services, candidate information, and pricing</strong> from multiple verified agencies in one place</li>
        <li>Choose directly from <strong>published information</strong>, not word-of-mouth or ads</li>
        <li>Check <strong>marriage, visa, and document checklists</strong> and expected timelines by country</li>
        <li>See real usage metrics such as <strong>reviews, response speed, and completion rates</strong></li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">Escrow transactions block fraud risk</h2>
      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        A second pillar of GCC is <strong>escrow (safe transactions)</strong>. Payments are held securely by the platform and settled to the agency only after agreed steps are completed. This structurally reduces risks such as “pay first, then disappear,” protecting both consumers and honest agencies.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">Only verified agencies list</h2>
      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        Only domestic and overseas marriage agencies and legal, administrative, and translation partners that pass KYC and verification can list on GCC. Reporting and sanction systems continuously filter out fraudulent or unethical actors, so listed agencies compete on <strong>service quality and trust</strong> rather than undercutting on price.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">Connecting through to post-marriage settlement</h2>
      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        GCC does not stop at pre-marriage comparison and contracting. It plans to connect post-marriage settlement—language, employment, housing, and childcare—through community and partner services. In the long term, Dream AI Lab’s <strong>AI Digital Care Log</strong> technology, proven in other domains, will provide the foundation for securely linking family and settlement data.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">Official launch in H1 2026</h2>
      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        GCC currently runs beta and pilot programs for core modules including profiles, escrow, and contracts. With the official H1 2026 launch, it will scale up the marketplace and verified listings, followed by community, settlement guides, and education and partner integrations.
      </p>

      <div class="bg-primary-50 border-l-4 border-primary-600 p-6 mb-8 rounded-r-lg">
        <p class="text-lg text-gray-800 leading-relaxed italic">
          A GCC representative said, “When a marriage market lacks comparison and verification, both good agencies and consumers lose. We will build a platform where consumers can compare and choose with confidence in one place, and honest agencies are fairly evaluated.”
        </p>
      </div>

      <div class="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
        <h3 class="font-bold text-gray-900 mb-2">About Global Couple Care (GCC)</h3>
        <p class="text-gray-700 text-sm leading-relaxed mb-4">
          Global Couple Care is Korea’s first international marriage marketplace where verified agencies and professional partners list, and consumers compare pricing, procedures, and reviews to choose for themselves. GCC is not a marriage agency and does not match members or arrange marriages directly; contracts are made between users and listed partners.
        </p>
        <h3 class="font-bold text-gray-900 mb-2">About Dream AI Lab</h3>
        <p class="text-gray-700 text-sm leading-relaxed">
          Dream AI Lab develops and operates impact-driven services built on AI Digital Care Log technology, including the developmental-disability platform ‘Jarame,’ senior care ‘Senior &amp; Life,’ and medical and financial AI.
        </p>
      </div>

      <p class="text-gray-600 text-sm mb-6 leading-relaxed">
        ※ GCC is an information and partner-connection platform, not a direct broker. Contracts are between users and listed partners, and features and terms at launch follow the published terms.
        <a href="/services/marriage" class="text-primary-600 underline">GCC service</a> ·
        <a href="https://globalcouplecare.com" class="text-primary-600 underline">globalcouplecare.com</a> ·
        <a href="/contact?service=marriage" class="text-primary-600 underline">Contact</a>
      </p>
      <p class="text-sm text-gray-500 border-t border-gray-200 pt-6">
        Contact: contact@dreamailab.com
      </p>
    `
      }
    },
    content: `
      <p class="text-sm text-gray-500 mb-6">[보도자료 · 2026-07-07]</p>

      <p class="text-lg font-semibold text-gray-800 mb-8 leading-relaxed border-l-4 border-primary-600 pl-4">
        드림에이아이랩(Dream AI Lab)이 검증된 국제결혼 업체들의 정보와 가격을 한곳에서 비교하고 에스크로 안전거래로 계약까지 진행할 수 있는 국내 최초 국제결혼 마켓플레이스 <strong>‘글로벌커플케어(GCC, Global Couple Care)’</strong>를 2026년 상반기 정식 오픈한다고 7일 밝혔다.
      </p>

      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        그동안 국제결혼을 준비하는 소비자는 업체마다 흩어진 정보를 일일이 찾아다녀야 했고, 가격과 절차를 미리 비교하기 어려웠다. 지인 소개나 광고에 의존해 업체를 고르다 보니 과도한 비용, 불투명한 계약, 사기 피해 위험에 노출되는 경우도 적지 않았다. GCC는 이 과정을 <strong>‘한곳에서 비교하고, 직접 선택하고, 안전하게 계약하는’</strong> 구조로 바꾸겠다는 목표를 내세웠다.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10">소비자는 한곳에서 비교하고 직접 선택한다</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        GCC 이용자는 여러 검증 업체가 제공하는 서비스 구성, 결혼희망자 정보, 가격, 절차, 후기를 한 화면에서 비교할 수 있다. 더 이상 업체를 하나하나 따로 찾아다닐 필요 없이, 공개된 정보를 바탕으로 자신에게 맞는 업체를 스스로 고르는 방식이다.
      </p>
      <ul class="list-disc list-inside text-gray-700 space-y-2 mb-8 ml-2">
        <li>여러 검증 업체의 <strong>서비스·결혼희망자 정보·가격을 한곳에서 비교</strong></li>
        <li>지인 소개·광고가 아닌 <strong>공개된 정보로 직접 선택</strong></li>
        <li>국가별 <strong>혼인·비자·서류 체크리스트</strong>와 예상 기간 확인</li>
        <li><strong>리뷰·응답 속도·완료율</strong> 등 실제 이용 지표 제공</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">에스크로 안전거래로 사기 위험을 차단한다</h2>
      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        GCC의 또 다른 축은 <strong>에스크로(안전거래)</strong>다. 이용자가 결제한 금액을 플랫폼이 안전하게 보관하고, 약속된 절차가 이행된 뒤 업체에 정산하는 구조다. 이를 통해 ‘선입금 후 잠적’ 같은 사기 위험을 구조적으로 줄이고, 소비자와 정직한 업체를 함께 보호한다.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">검증된 업체만 입점한다</h2>
      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        GCC에는 KYC·검증 절차를 통과한 국내외 국제결혼 업체와 법무·행정·통번역 파트너만 입점한다. 신고·제재 체계로 허위·비윤리 업체를 지속적으로 걸러내며, 입점 업체는 가격 후려치기가 아니라 <strong>서비스 품질과 신뢰</strong>로 경쟁하게 된다.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">결혼 이후 정착까지 잇는다</h2>
      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        GCC는 결혼 전 비교·계약에서 멈추지 않는다. 결혼 이후 언어·취업·주거·자녀 양육 등 정착 과정까지 커뮤니티와 파트너 서비스로 연결해 나갈 계획이다. 장기적으로는 드림에이아이랩이 다른 영역에서 검증해 온 <strong>AI디지털케어로그</strong> 기술을 활용해 가족·정착 데이터를 안전하게 이어 붙이는 기반으로 확장한다.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">2026년 상반기 정식 오픈</h2>
      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        GCC는 현재 프로필·에스크로·계약 등 핵심 모듈의 베타·파일럿을 운영 중이며, 2026년 상반기 정식 오픈과 함께 마켓플레이스와 검증 입점을 본격화한다. 이후 커뮤니티, 정착 가이드, 교육·파트너 연계 기능을 순차적으로 선보일 예정이다.
      </p>

      <div class="bg-primary-50 border-l-4 border-primary-600 p-6 mb-8 rounded-r-lg">
        <p class="text-lg text-gray-800 leading-relaxed italic">
          글로벌커플케어(GCC) 관계자는 “국제결혼 시장에 비교와 검증이 없으면 좋은 업체도, 소비자도 모두 손해를 본다”며 “소비자가 한곳에서 안심하고 비교·선택하고, 정직한 업체가 정당하게 평가받는 플랫폼을 만들겠다”고 말했다.
        </p>
      </div>

      <div class="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
        <h3 class="font-bold text-gray-900 mb-2">글로벌커플케어(GCC) 개요</h3>
        <p class="text-gray-700 text-sm leading-relaxed mb-4">
          글로벌커플케어는 검증된 국제결혼 업체·전문 파트너가 입점하고, 소비자가 가격·절차·후기를 비교해 직접 선택하는 국내 최초 국제결혼 마켓플레이스다. GCC는 결혼정보회사가 아니며, 회원을 직접 매칭하거나 결혼을 주선·중개하지 않는다. 계약과 거래는 이용자와 입점 파트너 간에 이루어진다.
        </p>
        <h3 class="font-bold text-gray-900 mb-2">드림에이아이랩(Dream AI Lab) 개요</h3>
        <p class="text-gray-700 text-sm leading-relaxed">
          드림에이아이랩은 AI디지털케어로그 기술을 기반으로 발달장애 플랫폼 ‘자람이’, 시니어 돌봄 ‘시니어앤라이프’, 의료·금융 AI 등 사회적 임팩트 중심의 서비스를 개발·운영하는 기업이다.
        </p>
      </div>

      <p class="text-gray-600 text-sm mb-6 leading-relaxed">
        ※ GCC는 직접 중개·결혼 주선 서비스가 아닙니다. 계약·거래는 이용자와 입점 파트너 간에 이루어지며, 오픈 시점 기능·약관은 공식 오픈 때 안내됩니다.
        <a href="/services/marriage" class="text-primary-600 underline">글로벌커플케어 서비스</a> ·
        <a href="https://globalcouplecare.com" class="text-primary-600 underline">globalcouplecare.com</a> ·
        <a href="/contact?service=marriage&type=b2b" class="text-primary-600 underline">B2B·파트너 입점 문의</a>
      </p>

      <p class="text-sm text-gray-500 border-t border-gray-200 pt-6">
        문의: contact@dreamailab.com
      </p>
    `
  },
  {
    id: 77,
    title: '자람이, 발달센터·보호자 대상 무료 요금제 공개',
    excerpt: '자람이가 발달센터·치료사·보호자가 행정·기록·연계 기본 기능을 무료로 시작할 수 있는 요금제를 공개했습니다. 1인·소규모 개인 운영 센터와 바우처 미지원 가정까지 포함해 현장 보급을 우선 추진하며, AI 자동 치료일지 등 연산 비용이 드는 기능은 유료로 제공합니다.',
    category: 'updates',
    date: '2026-07-07',
    image: '💙',
    featured: true,
    author: '자람이팀',
    tags: ['자람이', '무료 요금제', '발달장애', '보호자', '발달센터', '소규모 센터', '바우처', '현장 보급', '정해성', 'AI 디지털케어로그'],
    i18n: {
      en: {
        title: 'Jarame Opens Free Core Plans for Developmental Centers and Guardians',
        excerpt: 'Jarame announced free core plans—admin, records, and linkage—for developmental centers, therapists, and guardians. Solo and small centers and families not covered by vouchers are prioritized, while AI auto-logging and other compute-intensive features are offered on paid plans.',
        content: `
      <p class="text-sm text-gray-500 mb-6">[Press Release · 2026-07-07]</p>

      <p class="text-lg font-semibold text-gray-800 mb-8 leading-relaxed border-l-4 border-primary-600 pl-4">
        Dream AI Lab’s developmental-disability platform <strong>Jarame</strong> opened a plan where centers, therapists, and guardians can start <strong>core admin, record, and linkage features for free</strong>. Solo and small centers and families not covered by vouchers are prioritized. Features where AI automatically writes, summarizes, or analyzes treatment logs incur compute cost and are offered on <strong>paid plans</strong>.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">Why open core features for free</h2>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        In developmental-disability care, records are fragmented across home, center, school, and hospital. Therapists rewrite similar notes repeatedly, and guardians must re-explain the same situation to each institution. Digital tools help, but cost is a barrier—especially for solo and small centers. Jarame therefore opens <strong>core admin, record, and linkage features for free</strong> so anyone can start.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">Free vs. paid</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
        <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h3 class="font-bold text-gray-900 mb-3">✅ Free (core)</h3>
          <ul class="text-sm text-gray-700 space-y-2 list-disc list-inside">
            <li><strong>Centers/Therapists:</strong> registration, scheduling/attendance, care logs, guardian linkage, basic admin</li>
            <li><strong>Guardians:</strong> home logs, child record management, center linkage</li>
            <li>Manually written treatment/activity records</li>
          </ul>
        </div>
        <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h3 class="font-bold text-gray-900 mb-3">💳 Paid (AI automation)</h3>
          <ul class="text-sm text-gray-700 space-y-2 list-disc list-inside">
            <li><strong>AI auto-drafted treatment logs</strong> from photos, video, and keywords</li>
            <li><strong>AI summaries, pattern analysis</strong>, and SOAP drafts</li>
            <li>Trend reports over time and other compute-intensive features</li>
          </ul>
        </div>
      </div>
      <p class="text-gray-600 text-sm mb-8 leading-relaxed">
        AI automation is paid because it incurs real compute (AI call) cost. In return, <strong>solo and small centers and families not covered by vouchers</strong> receive expanded free or discounted support so cost never blocks access to needed tools.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">Field impact</h2>
      <ul class="list-disc list-inside text-gray-700 space-y-2 mb-8 ml-2">
        <li>Centers can organize registration, scheduling, and guardian communication with free core features alone</li>
        <li>Guardians manage a child’s changes and care flow in one place</li>
        <li>Therapists who want to cut repetitive documentation can save time with paid AI automation</li>
        <li>Long term: groundwork for connected records across center, home, school, and hospital</li>
      </ul>

      <div class="bg-primary-50 border border-primary-200 rounded-xl p-6 mb-8">
        <h3 class="font-bold text-gray-900 mb-2">Technology background</h3>
        <p class="text-gray-700 leading-relaxed mb-4">
          Jarame is built on AI Digital Care Log, originally conceived and developed by Jung Haesung (CTO) to solve fragmented records in developmental-disability care. The platform connects child-centered records across home, center, school, and hospital, and makes recording and understanding easier for therapists and guardians.
        </p>
        <p class="text-gray-700 italic">
          "Record fragmentation is a daily burden for families and therapists. Jarame opens core features for free first so centers and guardians can start now, and builds child-centered connected records through real adoption."
        </p>
        <p class="text-gray-600 text-sm mt-3">— Jung Haesung, CTO, Dream AI Lab</p>
      </div>

      <p class="text-gray-600 text-sm mb-6 leading-relaxed">
        ※ The detailed scope of free and paid plans, AI usage limits, and support criteria for small centers and families follow terms and rollout timing. Jarame is not a medical device, diagnosis, or prescription system.
      </p>

      <p class="text-lg text-gray-700 mb-6">
        <a href="/services/jarame" class="text-primary-600 underline">Jarame</a> · <a href="/contact" class="text-primary-600 underline">Contact</a>
      </p>
    `
      }
    },
    content: `
      <p class="text-sm text-gray-500 mb-6">[보도자료 · 2026-07-07]</p>

      <p class="text-lg font-semibold text-gray-800 mb-8 leading-relaxed border-l-4 border-primary-600 pl-4">
        드림에이아이랩(DAL)의 발달장애 플랫폼 <strong>자람이</strong>가 발달센터·치료사·보호자가 <strong>행정·기록·연계 기본 기능을 무료로</strong> 시작할 수 있는 요금제를 공개했습니다. 1인·소규모로 운영되는 센터와 바우처 미지원 가정까지 포함해 현장 보급을 우선 추진합니다. 다만 AI가 치료일지를 자동으로 작성·요약·분석하는 기능은 연산 비용이 들기 때문에 <strong>유료 플랜</strong>으로 제공합니다.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10">왜 기본 기능을 무료로 여는가</h2>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        발달장애 현장에서는 기록이 가정·센터·학교·병원으로 끊겨 있고, 치료사는 같은 내용을 반복해서 문서로 남겨야 하며, 보호자는 여러 기관에 같은 상황을 매번 다시 설명해야 하는 부담이 큽니다. 디지털 도구가 필요하지만, 특히 1인·소규모 센터에는 비용이 진입 장벽이 됩니다. 그래서 자람이는 <strong>행정·기록·연계 같은 기본 기능을 먼저 무료로</strong> 열어, 누구나 부담 없이 시작할 수 있게 했습니다.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">무료 기능과 유료 기능</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
        <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h3 class="font-bold text-gray-900 mb-3">✅ 무료 (기본 기능)</h3>
          <ul class="text-sm text-gray-700 space-y-2 list-disc list-inside">
            <li><strong>센터·치료사:</strong> 아동·보호자 등록, 일정·출석, 케어로그, 보호자 연계 등 기본 행정</li>
            <li><strong>보호자·가정:</strong> 가정 일지, 아이 기록 관리, 센터 연계</li>
            <li>손으로 직접 쓰는 치료·활동 기록</li>
          </ul>
        </div>
        <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h3 class="font-bold text-gray-900 mb-3">💳 유료 (AI 자동화)</h3>
          <ul class="text-sm text-gray-700 space-y-2 list-disc list-inside">
            <li>사진·영상·키워드 기반 <strong>AI 치료일지 자동 작성</strong></li>
            <li>기록 <strong>AI 자동 요약·패턴 분석</strong>, SOAP 초안 생성</li>
            <li>기간별 변화 추이 리포트 등 연산 비용이 드는 기능</li>
          </ul>
        </div>
      </div>
      <p class="text-gray-600 text-sm mb-8 leading-relaxed">
        AI 자동화 기능은 실제 연산(AI 호출) 비용이 발생하기 때문에 유료로 운영합니다. 대신 <strong>1인·소규모 개인 운영 센터와 바우처 미지원 가정</strong>에는 별도의 무료·할인 지원을 확대해, 비용 때문에 필요한 도구를 못 쓰는 일이 없도록 합니다.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">현장에 주는 효과</h2>
      <ul class="list-disc list-inside text-gray-700 space-y-2 mb-8 ml-2">
        <li>센터는 무료 기본 기능만으로도 등록·일정·보호자 소통 등 행정을 정리할 수 있습니다.</li>
        <li>보호자는 아이의 변화와 치료 흐름을 한곳에서 관리할 수 있습니다.</li>
        <li>반복 문서 작성을 줄이고 싶은 치료사는 유료 AI 자동화로 시간을 아낄 수 있습니다.</li>
        <li>장기적으로 센터·가정·학교·병원 기록을 잇는 기반이 됩니다.</li>
      </ul>

      <div class="bg-primary-50 border border-primary-200 rounded-xl p-6 mb-8">
        <h3 class="font-bold text-gray-900 mb-2">기술 배경</h3>
        <p class="text-gray-700 leading-relaxed mb-4">
          자람이는 정해성 CTO가 발달장애 현장의 기록 단절 문제를 해결하기 위해 최초로 고안·개발한 AI디지털케어로그 기반 플랫폼입니다. 가정·센터·학교·병원에 흩어진 기록을 아이 중심으로 연결하고, 치료사와 보호자가 더 쉽게 기록하고 이해할 수 있도록 설계되었습니다.
        </p>
        <p class="text-gray-700 italic">
          “발달장애 현장의 기록 단절은 오늘도 부모와 치료사가 겪는 문제입니다. 자람이는 센터와 보호자가 부담 없이 시작할 수 있도록 기본 기능을 먼저 무료로 열고, 현장 보급을 통해 아이 중심의 기록 연결을 만들어가겠습니다.”
        </p>
        <p class="text-gray-600 text-sm mt-3">— 정해성 CTO, 드림에이아이랩</p>
      </div>

      <p class="text-gray-600 text-sm mb-6 leading-relaxed">
        ※ 무료·유료 플랜의 세부 범위, AI 사용 한도, 소규모 센터·가정 지원 기준은 도입 시점과 약관에 따릅니다. 자람이는 의료기기·진단·처방 시스템이 아닙니다. 도입 문의: <a href="/contact" class="text-primary-600 underline">문의 페이지</a> · <a href="/services/jarame" class="text-primary-600 underline">자람이 서비스</a>
      </p>

      <p class="text-sm text-gray-500 border-t border-gray-200 pt-6">
        문의: contact@dreamailab.com
      </p>
    `
  },
  {
    id: 76,
    title: '부모는 학교에서 무엇을 배우는지 알고 계신가요? — 자람이, 교사의 교육 언어를 부모의 생활 언어로 번역합니다',
    excerpt: '특수학교 수업안·성취기준·AAC 같은 전문 용어는 부모에게 어렵습니다. 자람이는 교사의 수업안·활동지·사진·영상을 AI가 읽고, “오늘 우리 아이는 무엇을 배웠나요?”에 답합니다. 교사를 대신하지 않고, 학교와 가정을 잇는 통역 AI입니다.',
    category: 'insight',
    date: '2026-07-07',
    image: '📚',
    featured: true,
    author: '자람이팀',
    tags: ['자람이', '발달장애', '특수교육', '특수학교', '수업참관', 'AAC', '보호자', '부모', '디지털케어로그', 'RWE', '학교', '가정연계', 'AI 통역'],
    i18n: {
      en: {
        title: 'Do You Know What Your Child Learned at School Today? Jarame Translates Teacher Language into Parent Language',
        excerpt: 'IEP goals, achievement standards, and AAC jargon are hard for parents. Jarame reads lesson plans, worksheets, photos, and videos—then answers: "What did my child learn today?" It connects school and home without replacing teachers.',
        content: `
      <p class="text-sm text-gray-500 mb-6">[Insight · 2026-07-07]</p>

      <p class="text-lg font-semibold text-gray-800 mb-8 leading-relaxed border-l-4 border-primary-600 pl-4">
        Jarame is not AI that teaches class or replaces teachers. It is AI that <strong>translates educators' language into parents' everyday language</strong>—so school learning continues at home.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">The question parents cannot answer</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        Schools send lesson plans. Parents read achievement standards, learning goals, Activity 1, Activity 2, AAC, curriculum terms—and still ask:
      </p>
      <p class="text-xl font-bold text-primary-700 mb-6">"So what did my child actually learn today?"</p>
      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        Children with developmental disabilities often cannot fully describe their school day either. Important lessons happen—but meaning is lost between school and home.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">Example: "Reading faces and feelings"</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        A lesson titled <strong>"Reading facial expressions and moods"</strong> may look like matching pictures to emotions. The deeper goal is social communication: understanding others' feelings, expressing one's own, using AAC, and interacting with peers—through language class.
      </p>
      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        Jarame reads the teacher's plan, worksheets, and prints (plus photos/videos via OCR/AI), understands purpose—not just text—and explains in parent language.
      </p>

      <div class="bg-primary-50 border border-primary-200 rounded-xl p-6 mb-8">
        <p class="font-bold text-gray-900 mb-3">What parents see in Jarame</p>
        <p class="text-gray-700 leading-relaxed mb-4">Today in language class, your child practiced reading joy, sadness, anger, and surprise from faces. The real goal: social and communication skills—not just guessing moods.</p>
        <p class="font-semibold text-gray-800 mb-2">Try at home tonight:</p>
        <p class="text-gray-700">At dinner, look at family faces and ask: "How might Mom feel? How might Dad feel?"—continuing school learning naturally at home.</p>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">School → home → center → hospital</h2>
      <ul class="list-disc list-inside text-gray-700 space-y-2 mb-8 ml-2">
        <li><strong>Parents</strong> continue today's lesson at home</li>
        <li><strong>Therapists</strong> know what happened at school and align treatment</li>
        <li><strong>Clinicians</strong> see months of emotion-expression trends in data</li>
      </ul>
      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        Jarame connects teacher records, parent understanding, home practice, and child growth. Class ends in a day; development continues for years.
      </p>

      <div class="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-8">
        <p class="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Related service</p>
        <p class="text-gray-700 text-sm leading-relaxed">
          Jarame translates lesson plans and worksheets into parent-friendly language.
          <a href="/services/jarame" class="text-primary-600 underline ml-1">Jarame service page</a>
        </p>
      </div>

      <div class="bg-amber-50 border-l-4 border-amber-500 p-5 mb-8">
        <p class="text-amber-900 text-sm"><strong>Note:</strong> Jarame does not diagnose, prescribe, or replace teachers, therapists, or doctors. School linkage rolls out in phases after center adoption.</p>
      </div>

      <p class="text-lg text-gray-700 mb-6"><a href="/services/jarame" class="text-primary-600 underline">Jarame service page</a> · <a href="/contact" class="text-primary-600 underline">Contact</a></p>
    `
      }
    },
    content: `
      <p class="text-sm text-gray-500 mb-6">[인사이트 · 2026-07-07]</p>

      <p class="text-lg font-semibold text-gray-800 mb-8 leading-relaxed border-l-4 border-primary-600 pl-4">
        자람이는 교사를 대신하는 AI가 아닙니다. 수업을 대신하는 AI도 아닙니다. <strong>교사의 교육 언어를 부모의 생활 언어로 번역하는 AI</strong>입니다.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10">부모는 학교에서 무엇을 배우는지 알고 계신가요?</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        학교에서는 수업안이 전달됩니다. 성취기준, 학습목표, 활동1·활동2, AAC(보완대체의사소통), 국어과 교육과정——전문 용어가 많아 부모가 읽어도 핵심을 놓치기 쉽습니다.
      </p>
      <p class="text-xl font-bold text-primary-700 mb-6">"그래서 우리 아이는 오늘 무엇을 배웠나요?"</p>
      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        아이 역시 학교에서 있었던 일을 자세히 설명하기 어려운 경우가 많습니다. 중요한 수업이 이루어졌지만, 부모는 그 의미를 모른 채 하루가 지나갑니다.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">사례: ‘인물의 표정을 보고 기분 알기’</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        수업 제목만 보면 그림을 보고 기분을 맞히는 활동처럼 보입니다. 실제 목표는 훨씬 깊습니다. 아이들은 <strong>다른 사람의 감정을 이해하고, 자신의 감정을 표현하며, AAC로 의사소통하고, 친구와 상호작용하는 방법</strong>을 배웁니다. 즉 국어 수업을 통해 <strong>사회성과 의사소통 능력</strong>을 기르는 시간입니다.
      </p>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        자람이는 교사가 작성한 <strong>수업안, 활동지, 프린트물</strong>과 <strong>사진·영상(OCR)</strong>을 AI로 읽고, 수업의 목적과 의미를 파악한 뒤 <strong>부모가 이해할 수 있는 언어</strong>로 다시 설명합니다.
      </p>

      <div class="bg-primary-50 border border-primary-200 rounded-xl p-6 mb-8">
        <p class="font-bold text-gray-900 mb-3">부모에게 전달되는 예시</p>
        <p class="text-gray-700 leading-relaxed mb-4">
          오늘 국어시간에는 표정을 보고 기쁨·슬픔·화남·놀람을 이해하는 활동을 했습니다. 진짜 목적은 기분 맞히기가 아니라, <strong>감정 이해·표현, AAC 활용, 또래 상호작용</strong>입니다.
        </p>
        <p class="font-semibold text-gray-800 mb-2">오늘 집에서 이렇게 해보세요</p>
        <p class="text-gray-700">
          저녁 식사 때 가족 표정을 보며 "엄마는 지금 어떤 기분일까?" "아빠는 어떤 기분일까?"를 함께 이야기해 보세요. 학교에서 배운 내용을 가정에서 자연스럽게 이어갈 수 있습니다.
        </p>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">학교·가정·센터·병원이 같은 아이를 이해하게</h2>
      <ul class="list-disc list-inside text-gray-700 space-y-2 mb-6 ml-2">
        <li><strong>학교:</strong> 오늘 감정 표현 수업 진행</li>
        <li><strong>부모:</strong> 저녁에 같은 활동으로 가정 연계</li>
        <li><strong>센터 치료사:</strong> 학교 수업 내용을 알고 치료 이어가기</li>
        <li><strong>병원:</strong> 몇 달간 감정 표현 변화를 데이터로 확인</li>
      </ul>
      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        자람이는 기록만 저장하는 시스템이 아닙니다. <strong>교사의 기록 → 부모의 이해 → 가정의 실천 → 아이의 성장</strong>으로 이어지는 연결입니다. 수업은 하루면 끝나지만, 발달은 계속되어야 합니다.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">부모가 이해하면, 교육이 집까지 이어집니다</h2>
      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        부모가 “오늘 우리 아이가 무엇을, 왜 배웠는지”를 이해하면, 학교에서 끝났을 배움이 저녁 식탁에서 다시 이어집니다. 교사의 전문성은 부모의 실천으로 확장되고, 아이는 같은 목표를 학교와 집에서 반복하며 더 단단하게 성장합니다. 자람이가 교사의 언어를 부모의 언어로 번역하는 이유가 바로 여기에 있습니다. <strong>번역은 정보 전달을 넘어, 학교와 가정을 같은 방향으로 연결하는 일</strong>입니다.
      </p>

      <div class="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-8">
        <p class="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">관련 서비스</p>
        <p class="text-gray-700 text-sm leading-relaxed">
          이 문제를 해결하기 위해 드림에이아이랩은 자람이에서 <strong>교사 수업안·활동지를 부모 언어로 번역</strong>하는 기능을 제공합니다.
          <a href="/services/jarame" class="text-primary-600 underline ml-1">자람이 서비스 페이지</a>
        </p>
      </div>

      <div class="bg-amber-50 border-l-4 border-amber-500 p-5 mb-8">
        <p class="text-amber-900 text-sm leading-relaxed">
          <strong>안내:</strong> 자람이는 진단·처방·수업·치료를 대체하지 않습니다. 학교 연계는 센터 확산 이후 단계적으로 확대됩니다. 보호자·학교 이용은 소속 센터·기관 도입 및 동의 범위에 따릅니다.
        </p>
      </div>

      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        <a href="/services/jarame" class="text-primary-600 underline font-medium">자람이 서비스 페이지</a> · <a href="/contact" class="text-primary-600 underline font-medium">문의하기</a>
      </p>
    `
  },
  {
    id: 75,
    title: '자람이, 2026 하반기 전국 발달센터 대상 본격 배포 — 센터 행정·치료일지 AI부터 RWE 생태계까지',
    excerpt: '드림에이아이랩 자람이가 2026년 하반기 전국 발달센터 대상 본격 배포를 시작합니다. 이번 회사 뉴스의 핵심은 센터 도입 확대이며, 센터 운영 기능과 도입 효과, 단계별 확산 일정만 간결하게 안내합니다.',
    category: 'company',
    date: '2026-07-07',
    image: '🏢',
    featured: true,
    author: '드림에이아이랩',
    tags: ['자람이', '발달센터', '치료센터', '센터 행정', 'CRM', '치료일지', 'AI', '바우처', '세무', '디지털케어로그', 'RWE', '배포', '2026'],
    i18n: {
      en: {
        title: 'Jarame Launches Nationwide Center Rollout in H2 2026 — Admin, AI Treatment Logs, and RWE Ecosystem',
        excerpt: 'Dream AI Lab begins a nationwide center rollout for Jarame in H2 2026. This company-news update focuses on center deployment, center-facing operations, and phased adoption milestones.',
        content: `
      <p class="text-sm text-gray-500 mb-6">[Company News · 2026-07-07]</p>

      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        <strong>Dream AI Lab</strong> will begin <strong>nationwide rollout of Jarame to developmental centers in H2 2026</strong>. This rollout targets center operators and therapists who need practical tools for daily operations and documentation.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10">Why start from centers</h2>
      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        Centers are where daily treatment and administrative records are generated most consistently. Starting from centers allows adoption to happen where workflow impact is immediate and measurable.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">What centers use in practice</h2>
      <ul class="list-disc list-inside text-gray-700 space-y-2 mb-8 ml-2">
        <li>CRM-style registration and guardian communication history</li>
        <li>Scheduling, attendance, make-up sessions, and waitlist handling</li>
        <li>Billing, voucher-related workflow, and tax/admin support</li>
        <li>AI-assisted treatment note drafts and SOAP draft support</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">Expected center-side impact</h2>
      <ul class="list-disc list-inside text-gray-700 space-y-2 mb-8 ml-2">
        <li>Less repetitive documentation time for therapists</li>
        <li>Higher operational consistency across center staff</li>
        <li>Simpler communication with guardians through standardized records</li>
        <li>More time spent on care delivery instead of repetitive admin work</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">Rollout roadmap (short)</h2>
      <ol class="list-decimal list-inside text-gray-700 space-y-2 mb-8 ml-2">
        <li><strong>Phase 1:</strong> Centers</li>
        <li><strong>Phase 2:</strong> Guardians</li>
        <li><strong>Phase 3:</strong> Schools</li>
        <li><strong>Phase 4:</strong> Hospitals</li>
      </ol>

      <div class="bg-primary-50 border-l-4 border-primary-600 p-6 mb-8 rounded-r-lg">
        <p class="text-lg text-gray-800 leading-relaxed italic">"Center adoption comes first, because connected records start where daily care actually happens."</p>
        <p class="text-gray-600 text-sm mt-3">— Jung Haesung, CTO, Dream AI Lab</p>
      </div>

      <div class="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
        <p class="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Technical background</p>
        <p class="text-gray-700 text-sm leading-relaxed">
          Jarame is a platform based on AI Digital Care Log, originally designed and developed by Jung Haesung to address record fragmentation in developmental-disability care.
          Its long-term goal is to connect records around the child across centers, guardians, schools, and hospitals.
        </p>
      </div>

      <div class="bg-white border border-gray-200 rounded-xl p-6 mb-8">
        <p class="font-semibold text-gray-900 mb-3">Related content</p>
        <ul class="list-disc list-inside text-sm text-gray-700 space-y-2">
          <li><a href="/services/jarame" class="text-primary-600 underline">See center features</a></li>
          <li><a href="/news/74" class="text-primary-600 underline">See AI treatment timeline update</a></li>
          <li><a href="/news/77" class="text-primary-600 underline">See free plan announcement</a></li>
          <li><a href="/technology/platform" class="text-primary-600 underline">See AI Digital Care Log technology</a></li>
          <li><a href="/news?category=founder" class="text-primary-600 underline">See Founder Story</a></li>
        </ul>
      </div>

      <p class="text-gray-600 text-sm mb-6 leading-relaxed">
        ※ Rollout is phased by region and center readiness. Adoption schedule and onboarding support are provided step by step.
      </p>
    `
      }
    },
    content: `
      <p class="text-sm text-gray-500 mb-6">[회사 뉴스 · 2026-07-07]</p>

      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        드림에이아이랩의 <strong>자람이</strong>가 <strong>2026년 하반기 전국 발달센터 대상 본격 배포</strong>를 시작합니다.
        이번 소식의 핵심은 센터 도입 확대이며, 센터가 실제로 쓰는 운영 기능과 도입 효과를 중심으로 안내합니다.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10">왜 센터부터 시작하나</h2>
      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        발달센터는 치료 기록과 운영 데이터가 가장 꾸준히 쌓이는 현장입니다.
        따라서 센터부터 도입해야 실제 업무 개선이 빠르게 일어나고, 배포 효과를 안정적으로 확인할 수 있습니다.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">센터가 실제 사용하는 기능</h2>
      <ul class="list-disc list-inside text-gray-700 space-y-2 mb-8 ml-2">
        <li>아동·보호자 등록, 상담 이력, 공지 관리 등 CRM형 운영</li>
        <li>일정, 출석, 결석/보강, 대기자 관리</li>
        <li>수납, 바우처, 세무 관련 행정 지원</li>
        <li>AI 치료일지 작성 보조 및 SOAP 초안 생성</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">도입 효과 (센터 관점)</h2>
      <ul class="list-disc list-inside text-gray-700 space-y-2 mb-8 ml-2">
        <li>치료사의 반복 문서 작성 시간 단축</li>
        <li>행정 처리 흐름 표준화로 운영 효율 개선</li>
        <li>보호자 안내·소통 품질 향상</li>
        <li>반복 업무를 줄여 치료와 상담에 집중 가능</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">단계별 확산 로드맵</h2>
      <ol class="list-decimal list-inside text-gray-700 space-y-2 mb-8 ml-2">
        <li><strong>1단계:</strong> 센터</li>
        <li><strong>2단계:</strong> 보호자</li>
        <li><strong>3단계:</strong> 학교</li>
        <li><strong>4단계:</strong> 병원</li>
      </ol>

      <div class="bg-primary-50 border-l-4 border-primary-600 p-6 mb-8 rounded-r-lg">
        <p class="text-lg text-gray-800 leading-relaxed italic">"센터가 먼저 연결되어야 보호자와 아이의 기록도 이어질 수 있습니다."</p>
        <p class="text-gray-600 text-sm mt-3">— 정해성 CTO, 드림에이아이랩</p>
      </div>

      <div class="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
        <p class="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">기술 배경</p>
        <p class="text-gray-700 text-sm leading-relaxed">
          자람이는 정해성 CTO가 발달장애 현장의 기록 단절 문제를 해결하기 위해 최초로 고안·개발한 AI디지털케어로그 기반 플랫폼입니다.
          센터·보호자·학교·병원에 흩어진 기록을 아이 중심으로 연결하는 것을 목표로 합니다.
        </p>
      </div>

      <div class="bg-white border border-gray-200 rounded-xl p-6 mb-8">
        <p class="font-semibold text-gray-900 mb-3">관련 콘텐츠</p>
        <ul class="list-disc list-inside text-sm text-gray-700 space-y-2">
          <li><a href="/services/jarame" class="text-primary-600 underline">센터 기능 자세히 보기</a></li>
          <li><a href="/news/74" class="text-primary-600 underline">AI 치료일지 업데이트 보기</a></li>
          <li><a href="/news/77" class="text-primary-600 underline">무료 요금제 보기</a></li>
          <li><a href="/technology/platform" class="text-primary-600 underline">AI디지털케어로그 기술 보기</a></li>
          <li><a href="/news?category=founder" class="text-primary-600 underline">Founder Story 보기</a></li>
        </ul>
      </div>

      <p class="text-gray-600 text-sm mb-6 leading-relaxed">
        ※ 전국 모든 센터가 동일 일자에 전환되는 것은 아니며, 지역·센터 준비도에 따라 단계적으로 도입됩니다.
      </p>
    `
  },
  {
    id: 74,
    title: '자람이, 보호자·교사·치료사·병원 기록을 하나의 아이 타임라인으로 연결',
    excerpt: '발달장애 아동 맞춤형 AI 디지털케어로그 자람이가 보호자 일지, 교사·치료사 관찰 기록, 병원 요약 리포트를 아이 중심 타임라인으로 통합하는 기능을 업데이트했습니다. 수면·행동·치료 반응을 함께 보고, AI가 패턴을 요약합니다.',
    category: 'updates',
    date: '2026-07-06',
    image: '📋',
    featured: false,
    author: '자람이팀',
    tags: ['자람이', '디지털케어로그', '발달장애', '보호자 일지', '서비스 업데이트', 'AI 리포트', '타임라인', '특수교육', '치료센터', '조기개입'],
    i18n: {
      en: {
        title: 'Jarame Connects Guardian, Teacher, Therapist, and Hospital Records in One Child Timeline',
        excerpt: 'Jarame\'s AI Digital Care Log now unifies guardian logs, teacher and therapist observations, and hospital summary reports into a child-centered timeline—with AI pattern summaries for sleep, behavior, and treatment response.',
        content: `
      <p class="text-sm text-gray-500 mb-6">[Service Update · 2026-07-06]</p>

      <p class="text-lg font-semibold text-gray-800 mb-8 leading-relaxed border-l-4 border-primary-600 pl-4">
        Jarame is an AI Digital Care Log that records, connects, and helps you understand a child\'s day in developmental disability care.
      </p>

      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        Dream AI Lab\'s <strong>Jarame</strong> platform now connects records from guardians, teachers, therapists, and hospitals into a <strong>single child-centered timeline</strong>. This update focuses on <strong>practical workflows</strong>—what to record and how data flows across home, school, center, and clinic.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10">✅ Update Highlights (What changed)</h2>
      <div class="bg-white border border-gray-200 rounded-xl p-6 mb-8">
        <ul class="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Unified Child Timeline:</strong> home, school, center, and hospital records in one time-ordered view</li>
          <li><strong>AI Pattern Analysis:</strong> weekly/monthly pattern summaries and before/after comparisons</li>
          <li><strong>Hospital Summary Report:</strong> pre-visit summary by consent and role permissions</li>
          <li><strong>Permission Sharing:</strong> role-based sharing controls across guardian/school/center/hospital</li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">🖥️ UI Preview (wireframe)</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-sm">
        <div class="border border-gray-200 rounded-lg p-4 bg-gray-50">
          <p class="font-semibold text-gray-900 mb-2">1) Child Timeline</p>
          <p class="text-gray-700">Chronological events with tags (sleep, behavior, class, session, visit) and role filter chips.</p>
        </div>
        <div class="border border-gray-200 rounded-lg p-4 bg-gray-50">
          <p class="font-semibold text-gray-900 mb-2">2) AI Pattern Analysis</p>
          <p class="text-gray-700">Pattern cards like "Sleep ↓ → Focus ↓" with confidence, period, and related events.</p>
        </div>
        <div class="border border-gray-200 rounded-lg p-4 bg-gray-50">
          <p class="font-semibold text-gray-900 mb-2">3) Hospital Summary Report</p>
          <p class="text-gray-700">Visit-ready summary including recent changes, medication notes, and key trend bullets.</p>
        </div>
        <div class="border border-gray-200 rounded-lg p-4 bg-gray-50">
          <p class="font-semibold text-gray-900 mb-2">4) Permission Sharing</p>
          <p class="text-gray-700">Access matrix by role and period (guardian/school/center/hospital), with consent history.</p>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10">👨‍👩‍👧 Guardian Log — Home</h2>
      <ul class="list-disc list-inside text-gray-700 space-y-2 mb-6 ml-2">
        <li>Sleep duration and quality, morning condition</li>
        <li>Meals and appetite changes</li>
        <li>Emotional state, challenging behaviors (when and where)</li>
        <li>Medication and post-dose changes in sleep, appetite, or behavior</li>
        <li>Notes before/after center or hospital visits</li>
      </ul>
      <p class="text-gray-600 text-sm mb-6">※ Diagnosis and prescriptions remain clinical decisions. Guardian logs build <strong>real-world evidence</strong> from daily life.</p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10">🏫 Teacher Observations — School</h2>
      <ul class="list-disc list-inside text-gray-700 space-y-2 mb-6 ml-2">
        <li>Class participation and task completion</li>
        <li>Peer relationships and group activity responses</li>
        <li>Sensory responses (sound, light, touch)</li>
        <li>Problem behaviors and antecedents at school</li>
        <li>Notes for guardians and therapists</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10">🧩 Therapist Records — Center Sessions</h2>
      <ul class="list-disc list-inside text-gray-700 space-y-2 mb-6 ml-2">
        <li>Session goals and performance level</li>
        <li>Child response and task completion</li>
        <li>Next intervention focus</li>
        <li>Observations to share with home and school</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10">🏥 Hospital Summary Report — Before Visits</h2>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        Authorized clinical staff can review summaries of recent sleep, behavior, medication, school, and center changes—so visits rely less on memory alone and more on <strong>longitudinal patterns</strong>.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10">📊 Child Timeline &amp; AI Analysis Reports</h2>
      <ul class="list-disc list-inside text-gray-700 space-y-2 mb-6 ml-2">
        <li>Pattern summaries (e.g., poor sleep → lower school focus → evening behaviors)</li>
        <li>Before/after comparisons for medication, therapy, or school changes</li>
        <li>Weekly/monthly summaries for guardians and professionals</li>
      </ul>
      <div class="bg-amber-50 border-l-4 border-amber-500 p-5 mb-8 rounded-r-lg">
        <p class="text-amber-900 text-sm leading-relaxed">
          <strong>Important:</strong> Jarame AI does <strong>not</strong> diagnose, prescribe, or replace clinical decisions. It supports professionals with summaries and pattern organization.
        </p>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10">🔗 School · Center · Hospital Linkage</h2>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        Institutions can link care logs with consent-based permissions. Some sites are in beta/pilot. See <a href="/contact" class="text-primary-600 underline">contact</a> for adoption inquiries.
      </p>

      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        Full features and rollout status: <a href="/services/jarame" class="text-primary-600 underline font-medium">Jarame service page</a>.
      </p>
    `
      }
    },
    content: `
      <p class="text-sm text-gray-500 mb-6">[서비스 업데이트 · 2026-07-06]</p>

      <p class="text-lg font-semibold text-gray-800 mb-8 leading-relaxed border-l-4 border-primary-600 pl-4">
        자람이는 발달장애 아이의 하루를 기록하고, 연결하고, 이해하게 만드는 AI 디지털케어로그입니다.
      </p>

      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        드림에이아이랩(DAL)의 발달장애 맞춤형 플랫폼 <strong>자람이</strong>가 보호자·교사·치료사·병원이 각각 남기던 기록을 <strong>하나의 아이 중심 타임라인</strong>으로 연결하는 통합 케어로그 기능을 업데이트했습니다. 이번 업데이트는 철학 설명보다 <strong>실제 사용 흐름</strong>과 <strong>무엇을 기록하고 어떻게 연결되는지</strong>에 초점을 맞췄습니다.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10">✅ 업데이트 하이라이트 (이번에 달라진 점)</h2>
      <div class="bg-white border border-gray-200 rounded-xl p-6 mb-8">
        <ul class="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>아이 타임라인 통합:</strong> 가정·학교·센터·병원 기록을 시간순으로 한 화면에서 확인</li>
          <li><strong>AI 패턴 분석:</strong> 주간·월간 패턴 요약과 변화 전후 비교 제공</li>
          <li><strong>병원 요약 리포트:</strong> 진료 전 핵심 변화 요약을 권한 범위 내 제공</li>
          <li><strong>권한 공유 화면:</strong> 보호자·학교·센터·병원별 공유 범위를 역할 기반으로 설정</li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">🖥️ 화면 미리보기 (와이어프레임 기준)</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-sm">
        <div class="border border-gray-200 rounded-lg p-4 bg-gray-50">
          <p class="font-semibold text-gray-900 mb-2">1) 아이 타임라인</p>
          <p class="text-gray-700">수면·행동·수업·치료·진료 이벤트를 시간순 카드로 보여주고, 역할별 필터를 제공합니다.</p>
        </div>
        <div class="border border-gray-200 rounded-lg p-4 bg-gray-50">
          <p class="font-semibold text-gray-900 mb-2">2) AI 패턴 분석</p>
          <p class="text-gray-700">예: "수면 저하 → 학교 집중 저하" 같은 패턴 카드와 기간·근거 이벤트를 표시합니다.</p>
        </div>
        <div class="border border-gray-200 rounded-lg p-4 bg-gray-50">
          <p class="font-semibold text-gray-900 mb-2">3) 병원 요약 리포트</p>
          <p class="text-gray-700">진료 전 확인할 최근 변화, 복약 메모, 핵심 추세를 요약된 형식으로 제공합니다.</p>
        </div>
        <div class="border border-gray-200 rounded-lg p-4 bg-gray-50">
          <p class="font-semibold text-gray-900 mb-2">4) 권한 공유 화면</p>
          <p class="text-gray-700">보호자 동의 이력과 함께 기관별 열람 범위(역할/기간)를 설정할 수 있습니다.</p>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10">👨‍👩‍👧 보호자 일지 — 집에서의 하루</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">보호자는 앱에서 아래 항목을 간단히 기록할 수 있습니다.</p>
      <ul class="list-disc list-inside text-gray-700 space-y-2 mb-6 ml-2">
        <li>수면 시간·질, 기상 후 컨디션</li>
        <li>식사·식욕 변화</li>
        <li>감정 상태, 문제행동 발생 시점·상황</li>
        <li>약 복용 여부 및 복용 후 수면·식욕·행동 변화</li>
        <li>센터·병원 방문 전후 변화 메모</li>
      </ul>
      <p class="text-gray-600 text-sm mb-6">※ 진단·처방은 의료진 영역입니다. 보호자 기록은 <strong>실제 생활 근거</strong>를 남기는 용도입니다.</p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10">🏫 교사 관찰 기록 — 학교에서의 하루</h2>
      <ul class="list-disc list-inside text-gray-700 space-y-2 mb-6 ml-2">
        <li>수업 참여도, 과제 수행 수준</li>
        <li>또래 관계, 놀이·그룹 활동 반응</li>
        <li>감각 민감 반응(소리·빛·촉각 등)</li>
        <li>학교 내 문제행동·선행행동 기록</li>
        <li>특이 사항 및 보호자·치료사 공유 메모</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10">🧩 치료사 기록 — 센터에서의 세션</h2>
      <ul class="list-disc list-inside text-gray-700 space-y-2 mb-6 ml-2">
        <li>당일 치료 목표 및 수행 수준</li>
        <li>아동 반응, 과제 완료도</li>
        <li>다음 세션 중재 포인트</li>
        <li>가정·학교와 연계가 필요한 관찰 사항</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10">🏥 병원 요약 리포트 — 진료 전 한눈에</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        병원 관계자(동의·권한 범위 내)는 진료 전 <strong>최근 수면·행동·약물·학교·센터 변화</strong>가 요약된 리포트를 확인할 수 있습니다. 의사가 부모의 기억에만 의존하지 않고, <strong>기간별 흐름</strong>을 파악하는 데 활용할 수 있도록 설계되었습니다.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10">📊 아이별 타임라인 &amp; AI 분석 리포트</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">흩어진 기록은 <strong>시간순 타임라인</strong>으로 모입니다. AI는 다음을 돕습니다.</p>
      <ul class="list-disc list-inside text-gray-700 space-y-2 mb-6 ml-2">
        <li>반복 패턴 요약 (예: 수면 부족 → 학교 집중 저하 → 저녁 문제행동)</li>
        <li>약물·치료·학교 환경 변화 전후 비교</li>
        <li>보호자·교사·치료사가 함께 볼 수 있는 주간·월간 요약</li>
      </ul>
      <div class="bg-amber-50 border-l-4 border-amber-500 p-5 mb-8 rounded-r-lg">
        <p class="text-amber-900 text-sm leading-relaxed">
          <strong>중요:</strong> 자람이 AI는 <strong>진단·처방·치료 결정을 대신하지 않습니다.</strong> 전문가 판단을 보조하는 요약·패턴 정리 도구입니다.
        </p>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10">🔗 학교·센터·병원 연계</h2>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        기관·학교·병원은 동의·권한 설정에 따라 아이의 케어로그를 연계할 수 있습니다. 센터에서 효과 있었던 중재가 학교에 공유되고, 학교 관찰이 진료 요약에 반영되는 <strong>끊기지 않는 기록 흐름</strong>을 지향합니다. 일부 기관·현장은 베타·파일럿 단계이며, 도입 문의는 <a href="/contact" class="text-primary-600 underline">문의 페이지</a>를 이용해 주세요.
      </p>

      <div class="bg-primary-50 border border-primary-200 rounded-xl p-6 mb-8">
        <p class="text-gray-800 font-semibold mb-2">이번 업데이트 한 줄 요약</p>
        <p class="text-gray-700 leading-relaxed">
          보호자·교사·치료사·병원이 각각 쓰던 기록 → <strong>하나의 아이 타임라인</strong> → AI 요약·패턴 분석 → 전문가가 아이를 더 입체적으로 이해하는 데 활용
        </p>
      </div>

      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        자세한 기능·도입 상태는 <a href="/services/jarame" class="text-primary-600 underline font-medium">자람이 서비스 페이지</a>에서 확인할 수 있습니다.
      </p>
    `
  },
  {
    id: 73,
    title: '발달장애 치료에서 RWE가 중요한 이유: 자람이 디지털케어로그의 기술 구조',
    excerpt: 'RWE(실제생활근거)와 RWD가 발달장애 영역에서 왜 핵심인지, 자람이가 가정·학교·센터·병원 데이터를 아이 중심 타임라인으로 연결하는 기술 구조와 AI의 역할·한계를 정해성 CTO의 설계 관점에서 설명합니다.',
    category: 'tech',
    date: '2026-07-06',
    image: '🔬',
    featured: false,
    author: '드림에이아이랩 기술팀',
    tags: ['RWE', 'RWD', '디지털케어로그', '자람이', '발달장애', 'Longitudinal Data', 'AI', '정해성', '실제생활근거', '패턴 분석', '기술블로그'],
    i18n: {
      en: {
        title: 'Why RWE Matters in Developmental Disability Care: Jarame Digital Care Log Architecture',
        excerpt: 'How Real World Evidence (RWE) and RWD apply to autism, ADHD, and developmental delays—and how Jarame connects home, school, center, and hospital data in a child-centered timeline, with clear AI boundaries.',
        content: `
      <p class="text-sm text-gray-500 mb-6">[Tech Blog · 2026-07-06]</p>

      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        In developmental disability care—including autism spectrum, ADHD, and developmental delay—a single clinic test often cannot capture how a child lives across <strong>home, school, center, and hospital</strong>. This article explains why <strong>RWE (Real World Evidence)</strong> matters and how Dream AI Lab\'s <strong>Jarame</strong> implements it as a Digital Care Log.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">1. Why care data is hard to capture</h2>
      <ul class="list-disc list-inside text-gray-700 space-y-2 mb-8 ml-2">
        <li><strong>Context-dependent behaviors</strong> vary with sleep, sensory load, peers, and environment</li>
        <li><strong>Multi-site fragmentation</strong> without shared timelines or standards</li>
        <li><strong>Longitudinal needs</strong> for early intervention and golden-window decisions</li>
        <li><strong>Recall bias</strong> when visits rely on parent or teacher memory</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">2. Why RWE is needed</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        <strong>RWD</strong> is observational data from real environments; <strong>RWE</strong> is structured evidence derived by connecting and analyzing it. In this domain, RWE means weeks-to-months of life patterns—not a single test day.
      </p>
      <p class="text-gray-700 mb-8 leading-relaxed">
        Observation-based, context-linked approaches many guardians recognize from media align with an RWE mindset. (No official partnership between any specific program or expert and Jarame is implied.)
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">3. Jarame data architecture</h2>
      <div class="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
        <p class="font-mono text-sm text-gray-800 leading-relaxed">
          Child Profile → Care Events (timestamped) → Guardian / Teacher / Therapist / Clinical layers → AI Summary Layer
        </p>
      </div>
      <ul class="list-disc list-inside text-gray-700 space-y-2 mb-8 ml-2">
        <li>Role-based standardized inputs</li>
        <li>Single child ID and timeline alignment</li>
        <li>Consent and RBAC-based sharing</li>
        <li>Longitudinal care data archive</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">4. What AI does and does not do</h2>
      <p class="text-gray-700 mb-4"><strong>Does:</strong> summarize multi-site logs, detect patterns, prepare visit-ready trend reports.</p>
      <p class="text-gray-700 mb-8"><strong>Does not:</strong> confirm diagnoses, prescribe treatment, or replace clinicians, therapists, or teachers.</p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">5. Value by setting</h2>
      <ul class="list-disc list-inside text-gray-700 space-y-2 mb-8 ml-2">
        <li><strong>Home:</strong> structured logs instead of recall-only intake</li>
        <li><strong>School:</strong> observations linked to center and home context</li>
        <li><strong>Center:</strong> interventions adjusted with school/home signals</li>
        <li><strong>Hospital:</strong> real-world history within limited visit time</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">6. Design philosophy — Jung Haesung, CTO</h2>
      <div class="bg-primary-50 border-l-4 border-primary-600 p-6 mb-8 rounded-r-lg">
        <p class="text-lg text-gray-800 leading-relaxed italic">
          "The core problem is not only a shortage of experts—it is that real-life data around the child is disconnected. Jarame extends deep contextual observation into a shared Digital Care Log and AI analysis layer. AI does not replace doctors; it builds infrastructure for real-world evidence."
        </p>
        <p class="text-gray-600 text-sm mt-3">— Jung Haesung, CTO, Dream AI Lab</p>
      </div>

      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        See <a href="/services/jarame" class="text-primary-600 underline">Jarame</a> and <a href="/technology" class="text-primary-600 underline">Technology</a> for details.
      </p>
    `
      }
    },
    content: `
      <p class="text-sm text-gray-500 mb-6">[기술 블로그 · 2026-07-06]</p>

      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        발달장애·자폐 스펙트럼·ADHD·발달지연 영역에서 치료 효과를 논할 때, 임상시험실 안의 단일 검사만으로는 부족한 경우가 많습니다. 아이는 <strong>가정, 학교, 센터, 병원</strong>이라는 서로 다른 맥락에서 하루를 살아가기 때문입니다. 이 글은 <strong>RWE(Real World Evidence, 실제생활근거)</strong>가 왜 필요한지, 드림에이아이랩(DAL)의 <strong>자람이</strong>가 이를 디지털케어로그로 어떻게 구현하는지 기술 관점에서 정리합니다.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">1. 발달장애 치료에서 데이터가 어려운 이유</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">발달장애 케어 데이터는 일반적인 EHR만으로 포착하기 어렵습니다.</p>
      <ul class="list-disc list-inside text-gray-700 space-y-2 mb-6 ml-2">
        <li><strong>맥락 의존성:</strong> 동일 행동도 수면·감각·또래 관계·환경에 따라 의미가 달라짐</li>
        <li><strong>다기관 분산:</strong> 가정·학교·센터·병원 기록이 표준·시간축 없이 분리</li>
        <li><strong>Longitudinal 특성:</strong> 조기개입·골든타임 논의에 장기 추적 데이터가 필수</li>
        <li><strong>주관적 회상:</strong> 진료 시 부모·교사의 기억에 의존하면 패턴 누락</li>
      </ul>
      <p class="text-gray-700 mb-8 leading-relaxed">
        문제는 개별 의료진·치료사·교사의 역량이 아니라, <strong>끊어진 시스템 구조</strong>에 가깝습니다.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">2. RWE가 필요한 이유</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        <strong>RWD(Real World Data)</strong>는 실제 환경에서 축적되는 관찰·기록이고, <strong>RWE</strong>는 이를 체계적으로 연결·분석해 얻는 근거입니다. 발달장애 영역에서 RWE는 다음을 의미합니다.
      </p>
      <ul class="list-disc list-inside text-gray-700 space-y-2 mb-6 ml-2">
        <li>검사실 하루가 아닌, <strong>수 주~수 개월간의 생활 패턴</strong></li>
        <li>약물·중재·학교 환경 변화 전후의 <strong>반복 관찰</strong></li>
        <li>가정·학교·센터·병원이 남긴 기록의 <strong>교차 검증 가능한 타임라인</strong></li>
      </ul>
      <p class="text-gray-700 mb-8 leading-relaxed">
        최근 많은 보호자가 미디어를 통해 접한 <strong>관찰 기반·맥락 연결형 접근</strong>도, 본질적으로 아이의 생활 전체를 보는 RWE적 시각과 맞닿아 있습니다. (특정 방송·전문가와 자람이의 제휴·공식 관계는 없습니다.)
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">3. 자람이 디지털케어로그의 데이터 구조</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">자람이의 핵심은 <strong>아이(child) 중심 단일 타임라인</strong>입니다.</p>
      <div class="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
        <p class="font-mono text-sm text-gray-800 leading-relaxed">
          Child Profile<br/>
          └── Care Events (timestamped)<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;├── Guardian Log (수면, 식사, 행동, 약물)<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;├── Teacher Observation (수업, 또래, 감각, 문제행동)<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;├── Therapist Session (목표, 수행, 반응, 중재)<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;└── Clinical Note / Summary (진료 소견, 관찰 포인트)<br/>
          └── AI Summary Layer (패턴, 추이, 교차 맥락 요약)
        </p>
      </div>
      <ul class="list-disc list-inside text-gray-700 space-y-2 mb-8 ml-2">
        <li><strong>역할별 입력:</strong> 부모·교사·치료사·의료진 각자의 관찰을 표준 필드로 기록</li>
        <li><strong>시간축 정렬:</strong> 모든 이벤트를 동일 아이 ID·타임스탬프로 정렬</li>
        <li><strong>동의·권한:</strong> 기관·가정 간 공유 범위를 역할(RBAC) 기반으로 제어</li>
        <li><strong>Longitudinal Care Data:</strong> 단발 검사가 아닌 장기 생활 데이터 아카이브</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">4. AI가 하는 일과 하지 않는 일</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div class="bg-green-50 border border-green-200 rounded-lg p-5">
          <h3 class="font-bold text-green-900 mb-3">✅ AI가 하는 일</h3>
          <ul class="text-green-800 text-sm space-y-2">
            <li>· 다기관 기록 요약·타임라인 정리</li>
            <li>· 수면·행동·치료 반응 간 패턴 탐지</li>
            <li>·진료·상담 전 변화 추이 리포트 생성</li>
            <li>·보호자·전문가가 공유할 요약 문장 제안</li>
          </ul>
        </div>
        <div class="bg-red-50 border border-red-200 rounded-lg p-5">
          <h3 class="font-bold text-red-900 mb-3">❌ AI가 하지 않는 일</h3>
          <ul class="text-red-800 text-sm space-y-2">
            <li>· 발달장애·자폐·ADHD 등 <strong>진단 확정</strong></li>
            <li>· 약물·치료 <strong>처방·대체</strong></li>
            <li>· 의사·치료사·교사 <strong>역할 대체</strong></li>
            <li>· 근거 없는 예후 단정</li>
          </ul>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">5. 병원·센터·학교·가정에 주는 가치</h2>
      <ul class="list-disc list-inside text-gray-700 space-y-2 mb-8 ml-2">
        <li><strong>가정:</strong> 기억·설문이 아닌 구조화된 일지로 진료·상담 준비</li>
        <li><strong>학교:</strong> 센터·가정 맥락을 반영한 IEP·관찰 공유</li>
        <li><strong>센터:</strong> 학교·가정 변화와 연계한 중재 조정</li>
        <li><strong>병원:</strong> 제한된 진료 시간 안에서 <strong>실제생활근거</strong> 기반 히스토리 파악</li>
        <li><strong>연구·정책:</strong> 동의·비식별 전제 하 RWE 축적 가능성 (파일럿 단계)</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">6. 정해성 CTO의 설계 철학</h2>
      <div class="bg-primary-50 border-l-4 border-primary-600 p-6 mb-8 rounded-r-lg">
        <p class="text-lg text-gray-800 leading-relaxed italic mb-4">
          "발달장애 치료의 가장 큰 문제를 전문가 부족만으로 보지 않았다. 진짜 문제는 아이를 둘러싼 <strong>실제 생활 데이터가 연결되지 않는 구조</strong>다. 자람이는 특정 명의에게만 가능했던 깊은 관찰·맥락 분석을, 부모·학교·센터·병원이 함께 기록하는 디지털케어로그와 AI 분석으로 확장하는 것이 목표다. AI가 의사를 대신하는 게 아니라, 모든 전문가가 아이를 더 입체적으로 이해할 수 있도록 <strong>실제 생활 근거</strong>를 만드는 인프라다."
        </p>
        <p class="text-gray-600 text-sm">— 정해성 CTO, 드림에이아이랩</p>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">7. 정리</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        발달장애 치료에서 RWE가 중요한 이유는 한 문장으로 요약됩니다. <strong>아이는 검사실이 아니라 생활 속에서 자라기 때문</strong>입니다. 하루짜리 검사보다 수 주~수 개월의 생활 기록이, 한 기관의 관점보다 가정·학교·센터·병원이 함께 남긴 기록이 아이를 훨씬 정확하게 설명합니다.
      </p>
      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        자람이 디지털케어로그는 이 흩어진 기록을 <strong>아이 중심의 단일 타임라인</strong>으로 모으고, 동의·권한 안에서 안전하게 공유하며, AI가 요약·패턴 분석으로 전문가의 판단을 돕는 구조입니다. AI는 진단하거나 처방하지 않습니다. 대신 모든 전문가가 아이를 더 입체적으로 볼 수 있도록 <strong>실제 생활 근거(RWE)</strong>를 만드는 인프라 역할을 합니다.
      </p>

      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        기술 상세·도입 상태는 <a href="/services/jarame" class="text-primary-600 underline">자람이 서비스 페이지</a> 및 <a href="/technology" class="text-primary-600 underline">기술 소개</a>를 참고하세요.
      </p>
    `
  },
  {
    id: 72,
    title: '우리 아이의 발달장애 검사는 정말 충분한 정보를 바탕으로 이루어지고 있을까?',
    excerpt: '몇 주 대기, 수십만~백만 원 검사비, 낯선 환경의 하루 관찰, 부모의 기억에 의존한 설문——발달장애 조기개입의 골든타임을 놓치지 않으려면 기억이 아닌 실제생활근거(RWE)가 필요합니다. 자람이는 부모·학교·센터·병원의 디지털케어로그를 연결합니다.',
    category: 'insight',
    date: '2026-07-06',
    image: '❓',
    featured: true,
    author: '자람이팀',
    tags: ['발달장애', '자폐', 'ADHD', '발달지연', '발달장애 검사', '발달장애 치료', '조기개입', '골든타임', '디지털케어로그', 'RWE', '실제생활근거', '자람이', '발달장애 AI', '소아정신과', '특수교육'],
    i18n: {
      en: {
        title: 'Is Your Child\'s Developmental Disability Assessment Based on Enough Real-World Information?',
        excerpt: 'Weeks of waiting, high test costs, one day in an unfamiliar room, parent recall on forms—early intervention needs Real World Evidence (RWE), not memory alone. Jarame connects Digital Care Logs across home, school, center, and hospital.',
        content: `
      <p class="text-sm text-gray-500 mb-6">[Press Release · 2026-07-06]</p>

      <p class="text-lg font-semibold text-gray-800 mb-8 leading-relaxed border-l-4 border-red-500 pl-4">
        If your child\'s care still depends on memory and questionnaires, it may not rest on enough real-world evidence. Developmental disability care and early intervention need <strong>RWE (Real World Evidence)</strong> from daily life—not a single test day.
      </p>

      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        If you waited weeks and paid a large fee for an autism, ADHD, or developmental delay assessment—does that evaluation truly reflect your child\'s <strong>everyday self</strong>?
      </p>

      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        Can one day in an unfamiliar clinic, with an unfamiliar examiner, capture months of sleep, emotions, school life, therapy response, medication changes, and behavior patterns—especially when forms rely on <strong>parent recall</strong>?
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10">Golden time: what we fear most is lost time</h2>
      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        In developmental disability care, the deepest risk is not cost alone—it is <strong>missed time</strong>. Delayed intervention, broken records, and disconnected settings can let a child\'s golden window pass. What matters is not one score but patterns across <strong>home, school, center, and hospital</strong>.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10">Observation-based care many parents relate to</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        Many guardians resonate with <strong>observation-based, context-linked</strong> approaches seen in media—not because of celebrity, but because they show how home, school, relationships, emotions, and daily routines connect. This mirrors the core of <strong>RWE</strong>: evidence built where the child actually lives.
      </p>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        <em>※ This release does not imply any official partnership or endorsement between Jarame and any specific program or expert.</em>
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10">A disconnected system—not individual failure</h2>
      <ul class="list-disc list-inside text-gray-700 space-y-2 mb-8 ml-2">
        <li>Clinicians see limited visit time and parent recall</li>
        <li>Therapists see the child in the therapy room; teachers see school; parents see home</li>
        <li>These views rarely flow into one timeline</li>
        <li>Medication, sleep, mood, and behaviors stay unlinked</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10">Jarame: shared RWE Digital Care Log</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        Dream AI Lab\'s <strong>Jarame</strong> connects daily Digital Care Logs from parents, teachers, therapists, and clinicians—and helps build child-level <strong>RWE</strong> with AI pattern support.
      </p>
      <div class="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-6 font-medium text-gray-800">
        Poor sleep → lower school focus → weaker therapy response → evening challenging behaviors
      </div>
      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        <strong>Jarame does not replace doctors.</strong> It connects the child\'s life outside the clinic so professionals can understand more accurately.
      </p>

      <div class="bg-primary-50 border-l-4 border-primary-600 p-6 mb-8 rounded-r-lg">
        <p class="text-lg text-gray-800 leading-relaxed italic">
          "Observation across a child\'s whole life can scale when home, school, center, and hospital record together. Jarame builds that infrastructure."
        </p>
        <p class="text-gray-600 text-sm mt-3">— Jung Haesung, CTO, Dream AI Lab</p>
      </div>

      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        Jarame draws on a nationwide center linkage pool of 5,700+ (public/open data; not MAU). Beta and pilot programs are underway. See <a href="/services/jarame" class="text-primary-600 underline font-medium">Jarame</a> and <a href="/contact" class="text-primary-600 underline font-medium">contact</a>.
      </p>

      <p class="text-sm text-gray-500 border-t border-gray-200 pt-6">
        Contact: contact@dreamailab.com
      </p>
    `
      }
    },
    content: `
      <p class="text-sm text-gray-500 mb-6">[보도자료 · 2026-07-06]</p>

      <p class="text-lg font-semibold text-gray-800 mb-8 leading-relaxed border-l-4 border-red-500 pl-4">
        우리 아이의 치료가 기억과 설문에 의존하고 있다면, 아직 충분한 근거 위에서 이루어지고 있지 않을 수 있습니다. 발달장애 맞춤형 치료·조기개입에는 아이의 <strong>실제 생활 근거, RWE(Real World Evidence)</strong>가 필요합니다.
      </p>

      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        우리 아이가 발달장애·자폐 스펙트럼·ADHD·발달지연 등 검사를 받기 위해 몇 주를 기다리고, 수십만 원에서 백만 원 가까운 비용을 지불했다면——그 검사는 정말 <strong>우리 아이의 평소 모습</strong>을 충분히 담고 있을까요?
      </p>

      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        낯선 병원, 낯선 검사실, 낯선 검사자 앞에서 보인 <strong>하루의 반응</strong>이 아이의 전부일까요? 부모가 기억을 더듬어 작성한 설문지만으로 지난 몇 달간의 수면, 감정, 학교생활, 치료 반응, 약물 변화, 문제행동의 <strong>흐름</strong>을 충분히 설명할 수 있을까요?
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10">치료의 골든타임, 비용보다 무서운 것은 ‘놓친 시간’</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        발달장애 치료에서 가장 무서운 것은 비용만이 아닙니다. <strong>놓쳐버린 시간</strong>입니다. 잘못된 판단, 늦은 개입, 끊어진 기록, 연결되지 않는 치료는 아이의 골든타임을 지나가게 할 수 있습니다. 부모는 그 결과를 몇 달이 아니라, <strong>몇 년</strong> 동안 감당해야 할 수도 있습니다.
      </p>
      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        중요한 것은 단 한 번의 검사 결과가 아닙니다. 아이가 실제로 살아가는 <strong>가정, 학교, 센터, 병원</strong>에서 반복되는 변화와 패턴입니다.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10">많은 부모가 공감한 ‘관찰 기반 접근’——그것은 RWE와 닮아 있습니다</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        최근 많은 보호자가 TV 프로그램 등을 통해 접한 <strong>관찰 기반 상담</strong>에 공감한 이유는, 유명인 때문만이 아닙니다. 아이의 행동 하나만 보는 것이 아니라, <strong>가정·학교·관계·감정·양육 환경·생활 패턴</strong>이 연결되어 해석되는 과정을 보았기 때문입니다.
      </p>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        <em>※ 본 보도자료는 특정 방송·특정 전문가와 자람이의 공식 제휴·사용 관계를 의미하지 않습니다.</em>
      </p>
      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        이 과정은 발달장애 치료에서 매우 중요한 <strong>실제생활근거(RWE)</strong>의 핵심과 닮아 있습니다. RWE는 병원 안에서만 만들어지는 데이터가 아니라, <strong>아이가 실제로 살아가는 환경에서 축적되는 관찰과 변화의 기록</strong>입니다.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10">끊어진 시스템——누구를 탓하는 문제가 아닙니다</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">현실에서 이런 한계가 반복됩니다.</p>
      <ul class="list-disc list-inside text-gray-700 space-y-2 mb-6 ml-2">
        <li>의사는 <strong>제한된 진료 시간</strong>과 부모의 기억에 의존한다</li>
        <li>치료사는 <strong>치료실 안</strong>의 아이를 본다</li>
        <li>교사는 <strong>학교 안</strong>의 아이를 본다</li>
        <li>부모는 <strong>집 안</strong>의 아이를 본다</li>
        <li>하지만 이 정보들이 <strong>하나의 흐름으로 연결되지 않는다</strong></li>
      </ul>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">그 결과——</p>
      <ul class="list-disc list-inside text-gray-700 space-y-2 mb-8 ml-2">
        <li>병원은 학교생활을, 센터는 가정 변화를, 학교는 센터 중재 효과를 충분히 모른 채 개입한다</li>
        <li>약물 변화 후 수면·식욕·감정·행동 변화가 <strong>연결되지 않는다</strong></li>
        <li>아이의 치료가 데이터가 아니라 <strong>기억과 인상</strong>에 의존한다</li>
      </ul>
      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        이것은 특정 의사·병원·치료사·교사의 잘못이 아닙니다. <strong>끊어진 구조</strong>의 문제입니다.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10">자람이——부모·학교·센터·병원이 함께 만드는 RWE 디지털케어로그</h2>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">
        드림에이아이랩(DAL)의 발달장애 맞춤형 플랫폼 <strong>자람이</strong>는 이 과정을 특정 전문가에게만 맡기지 않습니다. 부모, 교사, 치료사, 의사가 매일 남기는 <strong>디지털케어로그</strong>를 하나로 연결하고, AI가 아이별 <strong>실제생활근거(RWE)</strong>를 만들 수 있도록 돕습니다.
      </p>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">예를 들어 이런 흐름을 발견할 수 있습니다.</p>
      <div class="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-6 font-medium text-gray-800">
        수면 부족 → 학교 집중력 저하 → 센터 치료 반응 감소 → 저녁 문제행동 증가
      </div>
      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        <strong>자람이는 의사를 대신하는 AI가 아닙니다.</strong> 전문가가 우리 아이를 더 정확하게 이해할 수 있도록, <strong>진료실 밖 아이의 하루를 데이터로 연결</strong>하는 발달장애 맞춤형 AI 디지털케어로그입니다.
      </p>

      <div class="bg-primary-50 border-l-4 border-primary-600 p-6 mb-8 rounded-r-lg">
        <p class="text-lg text-gray-800 leading-relaxed italic mb-4">
          "관찰 기반으로 아이의 삶 전체를 보는 방식은, 이제 부모·학교·센터·병원이 함께 기록하는 RWE 디지털케어로그로 확장될 수 있습니다. 자람이는 그 인프라를 만듭니다."
        </p>
        <p class="text-gray-600 text-sm">— 정해성 CTO, 드림에이아이랩</p>
      </div>

      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        자람이는 전국 센터 약 5,700+ 기관 연계 풀(공공·개방 데이터, MAU와 별개)을 바탕으로 일부 기관·현장 베타·파일럿을 진행 중이며, 2026년 국가 시범사업 논의를 염두에 두고 있습니다. 자세한 내용은 <a href="/services/jarame" class="text-primary-600 underline font-medium">자람이 서비스 페이지</a> 및 <a href="/contact" class="text-primary-600 underline font-medium">도입 문의</a>를 참고해 주세요.
      </p>

      <p class="text-sm text-gray-500 border-t border-gray-200 pt-6">
        문의: contact@dreamailab.com
      </p>
    `
  },
  {
    id: 71,
    title: '[단독] 국내 최고 인공지능 아키텍트, 전 국민 창업 오디션 평정 나선다… 수천억 글로벌 투자 정조준',
    excerpt: '국가대표 창업 오디션 \'모두의 창업\'에 6만 3천여 명이 지원한 가운데 AI디지털케어로그 최초 고안자 정해성 연구자 팀이 출사표. 자람이·노아AI 융합 BM으로 발달장애·글로벌 투자 시장을 겨냥한다.',
    category: 'company',
    date: '2026-05-15',
    image: '🚀',
    featured: true,
    author: '스타트업투데이 디지털뉴스팀',
    tags: ['모두의창업', '정해성', 'AI 디지털케어로그', '자람이', '노아AI', '발달장애', '창업 오디션', '글로벌 투자', '드림에이아이랩'],
    i18n: {
      en: {
        title: '[Exclusive] Korea\'s Top AI Architect Joins National Startup Audition, Targeting Billions in Global Investment',
        excerpt: 'Researcher Jung Haesung\'s team enters "Everyone\'s Startup" with more than 63,000 applicants, combining Jarame and Noah AI to target developmental disability care and global capital markets.',
        content: `
      <p class="text-sm text-gray-500 mb-6">[Startup Today = Digital News Desk]</p>

      <p class="text-lg font-semibold text-gray-800 mb-8 leading-relaxed border-l-4 border-primary-600 pl-4">
        ◼ A one-of-a-kind business model standing out among 63,000 applicants — committed to solving developmental disability and humanity's toughest challenges with technology that surpasses the judges
      </p>

      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        National startup audition <strong>"Everyone's Startup"</strong>, designed to discover innovators who will shake up Korea, has drawn nationwide attention. In a record-breaking survival format with more than 63,000 applicants, <strong>Jung Haesung</strong>, a top-tier AI architecture expert and the original inventor of <strong>AI Digital Care Log</strong> technology, has entered the race. His team has begun an overwhelming push toward the final round, armed with unmatched technical maturity.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10">Architecture beyond mentors and judges — "This is not a simple idea"</h2>

      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        While most teams remain at early planning stages, Jung's team already holds a hyper-precise architecture validated in the market — a fundamentally different starting line. Through Noah AI Labs, he previously proved financial AI capabilities with tens of thousands of ultra-precise time-series datasets and self-reinforcing learning via <strong>Noah AI</strong>. Industry observers say his architecture design skills exceed this competition's mentor and judge panels.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10">Jarame × Noah AI fusion — a business model aimed at multi-trillion-won markets</h2>

      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        The team's business model targets lifelong care for developmental disabilities — a field modern medicine has struggled to address. Dream AI Lab's <strong>Jarame</strong> platform protects sensitive care data with blockchain and links it to securities (ST/tokenized securities) for data assetization. Noah AI's feedback and group reinforcement algorithms evolve in real time from field data, building a sustainable high-quality data flywheel that global investors are watching closely.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10">Aiming for the final round as a milestone for human welfare</h2>

      <div class="bg-primary-50 border-l-4 border-primary-600 p-6 mb-8 rounded-r-lg">
        <p class="text-lg text-gray-800 leading-relaxed italic">
          "Based on the AI Digital Care Log technology I first conceived, we will fuse Dream AI Lab's Jarame with Noah AI Labs' Noah AI to solve humanity's welfare challenges — and prove our unmatched maturity on the Everyone's Startup final stage on the path to becoming a global unicorn."
        </p>
        <p class="text-gray-600 mt-3 text-sm">— Researcher Jung Haesung</p>
      </div>

      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        Nationwide attention is focused on this team's challenge to reshape multi-trillion-won global markets.
      </p>

      <p class="text-sm text-gray-500 border-t border-gray-200 pt-6">
        &lt;Copyright © Startup Today. All rights reserved.&gt;
      </p>
    `
      }
    },
    content: `
      <p class="text-sm text-gray-500 mb-6">[스타트업투데이=디지털뉴스팀]</p>

      <p class="text-lg font-semibold text-gray-800 mb-8 leading-relaxed border-l-4 border-primary-600 pl-4">
        ◼ 6만 3천여 명 지원 속 독보적 BM… 심사위원 능가하는 기술력으로 발달장애·인류 난제 해결 사활
      </p>

      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        대한민국을 흔들 혁신 창업가를 발굴하는 국가대표 창업 오디션 <strong>'모두의 창업'</strong>에 전 국민의 이목이 쏠리고 있다. 신청서 기준 무려 6만 3,000여 명이 지원한 역대급 서바이벌 구도 속에서, 국내 최고 수준의 인공지능(AI) 아키텍처 설계 전문가이자 <strong>'AI디지털케어로그(Digital Care Log)'</strong> 기술을 최초 고안·개발한 정해성 연구자가 출사표를 던졌다. 정 연구자 팀은 타의 추종을 불허하는 독보적인 기술 완성도를 무기로 파이널 라운드 진출을 향한 압도적인 레이스를 시작했다.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10">멘토와 심사위원을 뛰어넘는 아키텍처… "단순 아이디어가 아니다"</h2>

      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        '모두의 창업' 프로젝트는 국민의 참신한 아이디어를 발굴해 유니콘 기업으로 육성하는 것을 목적으로 한다. 하지만 대다수 참가 팀이 초기 기획 단계에 머물러 있는 반면, 정 연구자 팀은 이미 시장에서 완벽하게 검증된 초정밀 아키텍처를 보유하고 있어 격이 다른 출발선을 보여준다.
      </p>

      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        실제로 정 연구자는 앞서 노아에이아이랩스(Noah AI Labs)를 통해 수만 가지 초정밀 금융 시계열 데이터와 자가강화 학습 기술력을 입증한 금융 인공지능 <strong>'노아AI'</strong>를 성공적으로 안착시킨 바 있다. 투자 업계에서는 정 연구자 팀의 아키텍처 설계 역량이 이번 대회의 심사위원진과 멘토단의 전문성을 상회한다는 평가까지 흘러나온다. 서바이벌의 단순한 경쟁자를 넘어, 기술적 마스터로서 무대에 선 셈이다.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10">'자람이'와 '노아AI'의 융합, 수조 원 불치 시장 겨냥한 완벽한 BM</h2>

      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        정 연구자 팀이 제시한 비즈니스 모델(BM)은 현대 의학이 포기한 '평생 돌봄'의 영역, 즉 발달장애 치료 시장을 관통한다. 국내 예산만 수천억 원, 글로벌 시장 규모는 수조 원에 육박하지만 뚜렷한 치료법이 없어 방치됐던 이 시장에 드림에이아이랩의 발달장애 맞춤형 플랫폼 <strong>'자람이'</strong>를 투입한다. 민감한 돌봄 데이터를 블록체인으로 완벽히 보호하고 이를 증권(ST·토큰증권) 기술과 연계해 데이터 자산화를 이뤄내는 비즈니스 구조는 기술성과 사업성 모두 완벽하다는 찬사를 받고 있다.
      </p>

      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        특히 핵심 엔진인 노아AI의 환류(Feedback) 및 집단강화(Group Reinforcement) 알고리즘은 현장 데이터를 실시간 수집해 스스로 진화한다. 이는 일회성 아이디어가 아닌 지속 가능한 고품질 데이터 선순환 인프라다. 글로벌 투자 업계가 이미 관련 ETF(상장지수펀드) 조성과 수천억 원 규모의 글로벌 자본 투자를 전망하는 핵심 이유가 바로 여기에 있다.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10">파이널 라운드 정조준, 인류 복지의 위대한 이정표로</h2>

      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        불치의 벽을 깨부수는 정 연구자의 혁신은 '모두의 창업'이 찾던 국가대표 창업가의 표본이자 기술적 완성도의 정점이다.
      </p>

      <div class="bg-primary-50 border-l-4 border-primary-600 p-6 mb-8 rounded-r-lg">
        <p class="text-lg text-gray-800 leading-relaxed italic">
          "최초 고안한 AI디지털케어로그 기술을 기반으로, 드림에이아이랩의 '자람이'와 노아에이아이랩스의 '노아AI'를 융합해 인류의 복지 난제를 해결하겠다. 이번 모두의 창업 파이널 무대에서 독보적인 완성도를 입증하고 글로벌 유니콘 기업으로 도약하겠다."
        </p>
        <p class="text-gray-600 mt-3 text-sm">— 정해성 연구자</p>
      </div>

      <p class="text-lg text-gray-700 mb-8 leading-relaxed">
        수조 원의 글로벌 시장을 뒤흔들 정 연구자 팀의 위대한 도전에 전 국민의 이목이 집중된다.
      </p>

      <p class="text-sm text-gray-500 border-t border-gray-200 pt-6">
        &lt;저작권자 © 스타트업투데이 무단전재 및 재배포 금지&gt;
      </p>
    `
  },
  {
    id: 70,
    title: '[보도자료] 드림에이아이랩, 세계 최초 발달장애 맞춤형 치료·학습 플랫폼 "자람이" 공식 출시 - 2026년 국가 시범사업 추진',
    excerpt: '드림에이아이랩이 세계 최초로 AI 디지털케어로그 기반 발달장애 맞춤형 치료·학습 플랫폼 "자람이"를 공식 출시했다. 전국 5,700개 기관이 등록된 커뮤니티에서 시작해 AI 엔진형 Middleware 기술로 발전한 자람이는 2026년 정부 국가 시범사업 추진을 목표로 하고 있다.',
    category: 'press',
    date: '2025-11-14',
    image: '🎉',
    featured: true,
    author: '드림에이아이랩',
    tags: ['자람이', 'AI 디지털케어로그', '발달장애', '맞춤형 치료', '세계 최초', '국가 시범사업', 'AI 엔진', 'Middleware', '투자 유치', '상장 예정'],
    i18n: {
      en: {
        title: '[Press Release] Dream AI Lab Launches Jarame — World\'s First AI Digital Care Log Platform for Developmental Disabilities',
        excerpt: 'Dream AI Lab officially launched Jarame, an AI Digital Care Log platform for developmental disabilities. Starting from 5,700 registered institutions, Jarame targets a 2026 national pilot program with AI engine middleware technology.',
        content: `
      <h1 class="text-4xl font-bold text-gray-900 mb-6">Jarame: World's First Developmental Disability AI Digital Care Log Platform</h1>
      <p class="text-xl text-gray-600 mb-8">Development began in 2022 → completed in 2025 → nationwide expansion via 2026 national pilot</p>
      <div class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 mb-12">
        <h2 class="text-2xl font-bold mb-4">Key highlights</h2>
        <ul class="space-y-3 text-lg">
          <li>World's only standardized AI Digital Care Log platform for developmental disabilities</li>
          <li>5,700+ institutions registered; beta in progress</li>
          <li>10 specialized therapy modules and 7 role-based workflows</li>
          <li>Verified: 35% better therapy outcomes, 60% operational efficiency gains</li>
          <li>2026 national government pilot program planned</li>
          <li>AI engine middleware positioning for global standards leadership</li>
        </ul>
      </div>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        Dream AI Lab (DAL) has launched <strong>Jarame</strong>, integrating care data across home, school, center, and hospital with AI reinforcement learning for personalized care plans. The platform addresses data silos, missed golden-time intervention, and subjective assessments in developmental disability care.
      </p>
      <div class="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
        <p class="text-blue-900 font-semibold mb-3 text-lg">
          "Developmental disability is not an untreatable condition. When we record and analyze data, we find paths to care. Jarame connects people worldwide through one standard care log system."
        </p>
        <p class="text-blue-800 text-sm">— Jung Haesung, CTO</p>
      </div>
    `
      }
    },
    content: `
      <h1 class="text-4xl font-bold text-gray-900 mb-6">🎉 세계 최초 발달장애 AI 디지털케어로그 플랫폼, 자람이 공식 출시</h1>
      <p class="text-xl text-gray-600 mb-8">2022년 개발 시작 → 2025년 완성 → 2026년 국가 시범사업으로 전국 확대</p>

      <div class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 mb-12">
        <h2 class="text-2xl font-bold mb-4">📌 핵심 요약</h2>
        <ul class="space-y-3 text-lg">
          <li>✅ <strong>세계 유일</strong> 발달장애 AI 디지털케어로그 표준 플랫폼</li>
          <li>✅ 전국 <strong>5,700개 기관</strong> 등록, 베타 테스트 중</li>
          <li>✅ <strong>10가지 전문 치료 모듈</strong> + <strong>7개 역할군</strong> 완전 구현</li>
          <li>✅ 치료 효과 <strong>35% 향상</strong>, 업무 효율성 <strong>60% 개선</strong> 검증</li>
          <li>✅ <strong>2026년 정부 국가 시범사업</strong> 추진 목표</li>
          <li>✅ <strong>AI 엔진형 Middleware 기업</strong>으로 글로벌 표준 선도</li>
        </ul>
      </div>

      <h2 class="text-3xl font-bold text-gray-900 mb-6">🌟 세계 최초, 발달장애 치료의 새로운 표준</h2>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">
        드림에이아이랩(DAL, 대표 이지수, CTO 정해성)이 <strong>세계 최초 발달장애 맞춤형 치료·학습 플랫폼 "자람이"</strong>를 
        공식 출시했다고 14일 밝혔다. 자람이는 2022년 개발을 시작하여 2025년 초 완성된 
        <strong>AI 디지털케어로그 기반 통합 플랫폼</strong>으로, 가정·학교·센터·병원의 치료·교육 데이터를 
        하나의 표준으로 통합하고 AI 강화학습으로 개인별 맞춤 치료 계획을 자동 생성한다.
      </p>

      <div class="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
        <p class="text-blue-900 font-semibold mb-3 text-lg">
          "발달장애는 '치료할 수 없는 병'이 아닙니다. 기록하고 분석하면 치료의 실마리를 찾을 수 있습니다. 
          자람이는 전 세계 발달장애인이 하나의 표준 체계로 데이터를 기록하고 연결되는 
          의료 역사상 전례 없는 시도를 실현합니다."
        </p>
        <p class="text-blue-800 text-sm">- 정해성 CTO</p>
      </div>

      <h2 class="text-3xl font-bold text-gray-900 mb-6">🔬 왜 세계 유일인가</h2>

      <div class="grid md:grid-cols-2 gap-6 mb-12">
        <div class="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
          <h3 class="text-xl font-bold text-gray-900 mb-4">1️⃣ 데이터 단절 해결</h3>
          <p class="text-gray-700 mb-4">
            기존 발달장애 치료는 <strong>병원·센터·학교·가정이 각자 따로</strong> 기록하여 
            치료의 연속성이 없었다. 자람이는 모든 기관이 <strong>하나의 표준 케어로그</strong>를 
            공유하며 실시간 협력한다.
          </p>
          <div class="bg-red-50 rounded-lg p-3 mb-3">
            <p class="text-sm text-red-700"><strong>Before:</strong> 종이 기록지, 기관 간 단절, 주관적 평가 70%</p>
          </div>
          <div class="bg-green-50 rounded-lg p-3">
            <p class="text-sm text-green-700"><strong>After:</strong> 실시간 통합 기록, 완전 연계, 객관적 데이터 95%</p>
          </div>
        </div>

        <div class="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500">
          <h3 class="text-xl font-bold text-gray-900 mb-4">2️⃣ 골든타임 관리</h3>
          <p class="text-gray-700 mb-4">
            발달장애는 <strong>3~7세 골든타임</strong>에 적절한 치료를 받으면 평생의 발달 궤적이 달라진다. 
            자람이는 <strong>AI 실시간 분석</strong>으로 조기 개입 시점을 정확히 포착한다.
          </p>
          <div class="bg-red-50 rounded-lg p-3 mb-3">
            <p class="text-sm text-red-700"><strong>Before:</strong> 골든타임 놓침, 3개월 목표 달성률 45%</p>
          </div>
          <div class="bg-green-50 rounded-lg p-3">
            <p class="text-sm text-green-700"><strong>After:</strong> 골든타임 실시간 관리, 3개월 목표 달성률 80%</p>
          </div>
        </div>

        <div class="bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-500">
          <h3 class="text-xl font-bold text-gray-900 mb-4">3️⃣ AI 엔진형 기술</h3>
          <p class="text-gray-700 mb-4">
            단순 기록 플랫폼이 아닌 <strong>AI 강화학습 기반 Middleware</strong>로, 
            치료 데이터를 실시간 분석하여 <strong>개인별 맞춤 치료 계획을 자동 생성</strong>한다.
          </p>
          <ul class="space-y-2 text-sm text-gray-700">
            <li>✅ 멀티모달 AI (텍스트+음성+영상+센서)</li>
            <li>✅ 시계열 학습 기반 패턴 탐지</li>
            <li>✅ 개인별 맞춤 모델 생성</li>
            <li>✅ 실시간 강화학습 루프</li>
          </ul>
        </div>

        <div class="bg-white rounded-xl p-6 shadow-lg border-l-4 border-orange-500">
          <h3 class="text-xl font-bold text-gray-900 mb-4">4️⃣ 글로벌 표준 선도</h3>
          <p class="text-gray-700 mb-4">
            국내를 넘어 <strong>전 세계 발달장애 AI 케어로그의 표준</strong>을 확립한다. 
            현재 미국·유럽·아시아 주요 기관들과 기술 제휴를 논의 중이다.
          </p>
          <ul class="space-y-2 text-sm text-gray-700">
            <li>✅ FHIR/HL7 국제 의료 표준 준수</li>
            <li>✅ 다국어 지원 (한/영/중/일)</li>
            <li>✅ 글로벌 연구 네트워크 구축</li>
            <li>✅ 세계 표준 선도 목표</li>
          </ul>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-gray-900 mb-6">📊 검증된 치료 성과</h2>

      <div class="grid md:grid-cols-4 gap-4 mb-12">
        <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 text-center shadow-lg">
          <div class="text-5xl mb-3">🎯</div>
          <p class="text-4xl font-bold text-green-600 mb-2">35%</p>
          <p class="text-sm text-gray-700 font-semibold mb-3">치료 효과 향상</p>
          <div class="text-xs text-gray-600 space-y-1">
            <p>기존 45% → 80%</p>
            <p>3개월 목표 달성률</p>
          </div>
        </div>

        <div class="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 text-center shadow-lg">
          <div class="text-5xl mb-3">⏱️</div>
          <p class="text-4xl font-bold text-blue-600 mb-2">60%</p>
          <p class="text-sm text-gray-700 font-semibold mb-3">업무 효율성</p>
          <div class="text-xs text-gray-600 space-y-1">
            <p>주 20시간 → 8시간</p>
            <p>행정 업무 시간</p>
          </div>
        </div>

        <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center shadow-lg">
          <div class="text-5xl mb-3">📊</div>
          <p class="text-4xl font-bold text-purple-600 mb-2">95%</p>
          <p class="text-sm text-gray-700 font-semibold mb-3">데이터 정확성</p>
          <div class="text-xs text-gray-600 space-y-1">
            <p>주관 70% → 객관 95%</p>
            <p>데이터 기반 판단</p>
          </div>
        </div>

        <div class="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 text-center shadow-lg">
          <div class="text-5xl mb-3">🤝</div>
          <p class="text-4xl font-bold text-orange-600 mb-2">100%</p>
          <p class="text-sm text-gray-700 font-semibold mb-3">기관 연계</p>
          <div class="text-xs text-gray-600 space-y-1">
            <p>월 1회 → 실시간</p>
            <p>정보 공유 시스템</p>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-gray-900 mb-6">🎯 완전 구현된 플랫폼</h2>

      <div class="bg-white rounded-xl p-8 shadow-lg mb-12">
        <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">10가지 전문 치료 모듈</h3>
        <div class="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-3 text-center">
            <p class="font-semibold text-sm">물리치료</p>
          </div>
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-3 text-center">
            <p class="font-semibold text-sm">작업치료</p>
          </div>
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-3 text-center">
            <p class="font-semibold text-sm">언어치료</p>
          </div>
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-3 text-center">
            <p class="font-semibold text-sm">놀이치료</p>
          </div>
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-3 text-center">
            <p class="font-semibold text-sm">음악치료</p>
          </div>
          <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-3 text-center">
            <p class="font-semibold text-sm">미술치료</p>
          </div>
          <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-3 text-center">
            <p class="font-semibold text-sm">사회기술훈련</p>
          </div>
          <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-3 text-center">
            <p class="font-semibold text-sm">인지행동치료</p>
          </div>
          <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-3 text-center">
            <p class="font-semibold text-sm">감각통합치료</p>
          </div>
          <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-3 text-center">
            <p class="font-semibold text-sm">ABA치료</p>
          </div>
        </div>

        <h3 class="text-2xl font-bold text-gray-900 mb-4 text-center mt-8">7개 역할군 완전 구현</h3>
        <div class="grid md:grid-cols-4 gap-3">
          <div class="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-3 text-center">
            <div class="text-2xl mb-1">👪</div>
            <p class="font-semibold text-sm">보호자+활동보조</p>
          </div>
          <div class="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-3 text-center">
            <div class="text-2xl mb-1">🏢</div>
            <p class="font-semibold text-sm">치료사+센터</p>
          </div>
          <div class="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-3 text-center">
            <div class="text-2xl mb-1">🏥</div>
            <p class="font-semibold text-sm">의사+병원</p>
          </div>
          <div class="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-3 text-center">
            <div class="text-2xl mb-1">🏫</div>
            <p class="font-semibold text-sm">교사+학교</p>
          </div>
          <div class="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg p-3 text-center">
            <div class="text-2xl mb-1">💼</div>
            <p class="font-semibold text-sm">센터 관리자</p>
          </div>
          <div class="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg p-3 text-center">
            <div class="text-2xl mb-1">🏥</div>
            <p class="font-semibold text-sm">병원 관리자</p>
          </div>
          <div class="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg p-3 text-center">
            <div class="text-2xl mb-1">🎓</div>
            <p class="font-semibold text-sm">학교 관리자</p>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-gray-900 mb-6">🎯 2026년 국가 시범사업 추진</h2>

      <div class="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl p-8 mb-12">
        <h3 class="text-2xl font-bold mb-4">정부 정책 정합성 100%</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-bold text-green-100 mb-3">✅ 2026 정부 AI 정책 부합</h4>
            <ul class="space-y-2 text-sm">
              <li>• <strong>"AI 사회문제 해결형 과제 1순위"</strong> (2025년 발표)</li>
              <li>• 헬스케어·교육 분야 AI 사회혁신</li>
              <li>• 데이터 표준화·공공기술 기반 권장</li>
              <li>• 자람이 = <strong>정책 부합도 최고 사례</strong></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-green-100 mb-3">🎯 시범사업 로드맵</h4>
            <ul class="space-y-2 text-sm">
              <li>• <strong>2025 Q4:</strong> 주요 지자체·병원 파일럿</li>
              <li>• <strong>2026 Q1:</strong> 정부 시범사업 제안</li>
              <li>• <strong>2026 Q2-Q4:</strong> 전국 확대 (목표 100개 기관)</li>
              <li>• <strong>2027:</strong> 전국 표준 플랫폼 확립</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-gray-900 mb-6">🌍 글로벌 비전</h2>

      <div class="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-8 mb-12">
        <h3 class="text-2xl font-bold mb-4">불치병과 사회 약자를 위한 기술</h3>
        <p class="text-lg mb-6 leading-relaxed">
          자람이는 단순한 플랫폼이 아닙니다. <strong>인류의 불치병과 사회 약자를 위한 AI의 첫 걸음</strong>입니다. 
          발달장애에서 시작하여 난치병, 희귀질환, 고령자 돌봄, 정신건강 등 
          <strong>모든 돌봄이 필요한 영역</strong>으로 확장할 것입니다.
        </p>
        
        <div class="bg-white/10 rounded-xl p-6 backdrop-blur-sm mb-6">
          <p class="text-lg mb-2 font-semibold">
            2026년, 본격적인 AI 시대가 시작됩니다
          </p>
          <p class="text-base">
            정부의 AI 사업 적극 지원과 함께 발달장애 분야에서 시작된 혁신이 
            <strong>전 의료·돌봄 영역</strong>으로 빠르게 확산될 것입니다.
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-bold text-purple-100 mb-3">국내 목표</h4>
            <ul class="space-y-2 text-sm">
              <li>✅ 전국 발달장애 표준 플랫폼 (2026)</li>
              <li>✅ 시니어 돌봄·정신건강 확장 (2027)</li>
              <li>✅ 국가 의료 데이터 허브 구축 (2028)</li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-purple-100 mb-3">글로벌 목표</h4>
            <ul class="space-y-2 text-sm">
              <li>✅ 미국·유럽 기관 제휴 (2025-2026)</li>
              <li>✅ 아시아 시장 진출 (2026)</li>
              <li>✅ 세계 표준 플랫폼 확립 (2027-2028)</li>
            </ul>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 69,
    title: '[서비스 업데이트] 자람이, 세계 최초 발달장애 AI 디지털케어로그로 치료의 새로운 표준 제시',
    excerpt: '2022년부터 3년간의 개발 끝에 완성된 자람이가 발달장애 치료의 근본적 한계를 AI 기술로 해결한다. 병원·센터·학교·가정의 데이터 단절을 통합하고, 골든타임을 놓치는 문제를 AI 실시간 분석으로 극복하며, 주관적 평가에서 객관적 데이터 기반 치료로 패러다임을 전환한다.',
    category: 'updates',
    date: '2025-11-14',
    image: '🚀',
    featured: true,
    author: '드림에이아이랩',
    tags: ['자람이', 'AI 디지털케어로그', '발달장애', '맞춤형 치료', '골든타임', '세계 최초', '데이터 통합', 'AI 엔진', '치료 표준'],
    i18n: {
      en: {
        title: '[Service Update] Jarame Sets a New Standard with AI Digital Care Log for Developmental Disabilities',
        excerpt: 'After three years of development since 2022, Jarame solves fundamental limits in developmental disability care with AI—unifying fragmented data across hospital, center, school, and home.',
        content: `
      <h1 class="text-4xl font-bold text-gray-900 mb-6">Jarame: A New Standard in Developmental Disability Care</h1>
      <p class="text-xl text-gray-600 mb-8">From "untreatable" to "treatable when we record" — powered by the world's first AI Digital Care Log</p>
      <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12 border-l-4 border-blue-600">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Why Jarame</h2>
        <p class="text-lg text-gray-700 leading-relaxed">
          Developmental disability care suffers from data silos, inequality, and weak cross-institution collaboration. Jarame uses AI to turn care records into actionable, personalized therapy—Dream AI Lab's first step toward AI for humanity's hardest welfare challenges.
        </p>
      </div>
      <h2 class="text-3xl font-bold text-gray-900 mb-6">Problems Jarame addresses</h2>
      <ul class="list-disc list-inside space-y-2 text-gray-700 mb-8">
        <li>Missed golden-time intervention (ages 3–7)</li>
        <li>Disconnected home, school, center, and hospital records</li>
        <li>Unaffordable care without guaranteed outcomes</li>
        <li>Subjective assessments instead of objective data</li>
      </div>
      <p class="text-lg text-gray-700 leading-relaxed">
        Jarame unifies care data in real time, applies multimodal AI and reinforcement learning, and supports personalized care plans validated across thousands of institutions.
      </p>
    `
      }
    },
    content: `
      <h1 class="text-4xl font-bold text-gray-900 mb-6">🚀 자람이, 발달장애 치료의 새로운 표준을 제시하다</h1>
      <p class="text-xl text-gray-600 mb-8">세계 최초 AI 디지털케어로그로 '치료할 수 없는 병'에서 '기록하면 치료할 수 있는 병'으로</p>

      <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12 border-l-4 border-blue-600">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">💡 왜 자람이로 시작했는가</h2>
        <p class="text-lg text-gray-700 mb-4 leading-relaxed">
          "우리는 <strong>치료할 수 없는 병</strong>을 <strong>기록과 AI</strong>로 바꿉니다."
        </p>
        <p class="text-gray-700 leading-relaxed">
          발달장애는 <strong>데이터 단절·정보 불평등·기관 간 협업 부재</strong>라는 사회 전체 문제의 축소판입니다. 
          드림에이아이랩은 이 문제를 AI 기술로 해결하며, <strong>인류의 불치병과 사회 약자를 위한 AI의 첫 걸음</strong>을 내딛습니다.
        </p>
      </div>

      <h2 class="text-3xl font-bold text-gray-900 mb-6">🚨 현재 발달장애 치료의 한계</h2>

      <div class="grid md:grid-cols-2 gap-6 mb-12">
        <div class="bg-red-50 rounded-xl p-6 border-l-4 border-red-500">
          <h3 class="text-xl font-bold text-red-700 mb-4">❌ 골든타임을 놓치는 아이들</h3>
          <p class="text-gray-700 mb-4">
            발달장애는 <strong>조기개입이 핵심</strong>입니다. 3~7세의 골든타임에 적절한 치료를 받으면 
            평생의 발달 궤적이 달라집니다.
          </p>
          <div class="bg-white rounded-lg p-4 mb-3">
            <p class="text-sm text-gray-700">
              하지만 <strong>치료사 부족, 높은 비용, 정보 부재</strong>로 대부분의 가정이 골든타임을 놓칩니다. 
              부모는 "우리 아이에게 지금 무엇이 필요한지" 알 수 없고, 치료사는 아이의 집·학교 상황을 모릅니다.
            </p>
          </div>
        </div>

        <div class="bg-orange-50 rounded-xl p-6 border-l-4 border-orange-500">
          <h3 class="text-xl font-bold text-orange-700 mb-4">🔗 단절된 치료 시스템</h3>
          <ul class="space-y-3 text-sm text-gray-700">
            <li class="flex items-start">
              <span class="text-orange-500 mr-2 font-bold">•</span>
              <span>가정에서의 행동 데이터가 센터에 전달 안 됨</span>
            </li>
            <li class="flex items-start">
              <span class="text-orange-500 mr-2 font-bold">•</span>
              <span>학교와 병원이 따로 놀아 중복 검사·모순된 처방</span>
            </li>
            <li class="flex items-start">
              <span class="text-orange-500 mr-2 font-bold">•</span>
              <span>종이 기록지로는 장기 패턴 추적 불가능</span>
            </li>
            <li class="flex items-start">
              <span class="text-orange-500 mr-2 font-bold">•</span>
              <span>치료 효과를 객관적으로 측정할 방법 없음</span>
            </li>
          </ul>
        </div>

        <div class="bg-yellow-50 rounded-xl p-6 border-l-4 border-yellow-500">
          <h3 class="text-xl font-bold text-yellow-700 mb-4">💰 감당할 수 없는 비용</h3>
          <p class="text-gray-700 mb-3">
            <strong>월 200~300만원</strong>의 치료비. 맞벌이 가정도 버거운 금액이지만, 
            그보다 더 큰 문제는 <strong>비용을 들여도 효과를 보장할 수 없다</strong>는 것입니다.
          </p>
          <p class="text-sm text-gray-600">
            맞춤형 계획 없이 일괄적 프로그램만 반복하면 돈과 시간만 낭비됩니다.
          </p>
        </div>

        <div class="bg-gray-50 rounded-xl p-6 border-l-4 border-gray-500">
          <h3 class="text-xl font-bold text-gray-700 mb-4">📊 주관적 평가의 한계</h3>
          <p class="text-gray-700 mb-3">
            현재 치료 효과 평가는 <strong>70%가 주관적 관찰</strong>에 의존합니다. 
            "요즘 좀 나아진 것 같아요"라는 막연한 느낌만으로는 정확한 치료 방향을 설정할 수 없습니다.
          </p>
          <p class="text-sm text-gray-600">
            객관적 데이터 없이는 개입 시점을 파악할 수 없고, 장기 추적도 불가능합니다.
          </p>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-gray-900 mb-6">✅ 자람이의 혁신적 해결책</h2>

      <div class="grid md:grid-cols-2 gap-6 mb-12">
        <div class="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
          <h3 class="text-xl font-bold text-green-700 mb-4">1️⃣ 골든타임 실시간 관리</h3>
          <p class="text-gray-700 mb-4">
            AI가 <strong>24시간 실시간</strong>으로 아이의 상태를 분석하여 
            <strong>조기 개입이 필요한 시점을 정확히 포착</strong>합니다.
          </p>
          <div class="bg-white rounded-lg p-4">
            <p class="text-sm text-gray-700 mb-2">
              <strong>실제 사례:</strong> 3세 아동이 갑자기 눈 맞춤을 피하기 시작 → 
              AI가 자폐 초기 징후로 판단 → 즉시 부모에게 알림 → 
              1주일 내 전문의 진료 연결 → 골든타임 내 치료 시작
            </p>
            <p class="text-xs text-green-600 font-semibold">
              ✅ 결과: 3개월 만에 눈 맞춤 정상화, 언어 발달 정상 궤도 진입
            </p>
          </div>
        </div>

        <div class="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
          <h3 class="text-xl font-bold text-blue-700 mb-4">2️⃣ 완전 통합 시스템</h3>
          <p class="text-gray-700 mb-4">
            가정·학교·센터·병원이 <strong>하나의 표준 케어로그</strong>를 공유하여 
            치료의 연속성을 확보합니다.
          </p>
          <div class="bg-white rounded-lg p-4">
            <p class="text-sm text-gray-700 mb-2">
              <strong>Before:</strong> 월 1회 종이 보고서로 정보 공유 → 
              <strong>After:</strong> 실시간 연계 시스템으로 즉시 협력
            </p>
            <p class="text-xs text-blue-600 font-semibold">
              ✅ 결과: 기관 간 정보 공유 100% → 치료 일관성 확보
            </p>
          </div>
        </div>

        <div class="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-500">
          <h3 class="text-xl font-bold text-purple-700 mb-4">3️⃣ 맞춤형 치료 계획</h3>
          <p class="text-gray-700 mb-4">
            <strong>AI 강화학습</strong>이 개인별 데이터를 분석하여 
            최적의 치료 방법과 타이밍을 자동 생성합니다.
          </p>
          <div class="bg-white rounded-lg p-4">
            <p class="text-sm text-gray-700 mb-2">
              <strong>Before:</strong> 일괄적 프로그램, 목표 달성률 45% → 
              <strong>After:</strong> AI 맞춤 계획, 목표 달성률 80%
            </p>
            <p class="text-xs text-purple-600 font-semibold">
              ✅ 결과: 치료 효과 35% 향상 (실제 데이터 검증)
            </p>
          </div>
        </div>

        <div class="bg-orange-50 rounded-xl p-6 border-l-4 border-orange-500">
          <h3 class="text-xl font-bold text-orange-700 mb-4">4️⃣ 객관적 데이터 기반</h3>
          <p class="text-gray-700 mb-4">
            주관적 느낌이 아닌 <strong>95% 객관적 데이터</strong>로 
            치료 효과를 정확히 측정합니다.
          </p>
          <div class="bg-white rounded-lg p-4">
            <p class="text-sm text-gray-700 mb-2">
              <strong>Before:</strong> "요즘 좀 나아진 것 같아요" (주관 70%) → 
              <strong>After:</strong> "수면 패턴 15% 개선, 사회성 지표 22% 향상" (객관 95%)
            </p>
            <p class="text-xs text-orange-600 font-semibold">
              ✅ 결과: 정확한 개입 시점 파악, 장기 추적 가능
            </p>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-gray-900 mb-6">🎯 실제 검증된 성과</h2>

      <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 mb-12">
        <div class="grid md:grid-cols-4 gap-6 mb-8">
          <div class="text-center">
            <div class="text-6xl mb-3">🎯</div>
            <p class="text-5xl font-bold text-green-600 mb-2">35%</p>
            <p class="text-sm text-gray-700 font-semibold">치료 효과 향상</p>
          </div>
          <div class="text-center">
            <div class="text-6xl mb-3">⏱️</div>
            <p class="text-5xl font-bold text-blue-600 mb-2">60%</p>
            <p class="text-sm text-gray-700 font-semibold">업무 효율성</p>
          </div>
          <div class="text-center">
            <div class="text-6xl mb-3">📊</div>
            <p class="text-5xl font-bold text-purple-600 mb-2">95%</p>
            <p class="text-sm text-gray-700 font-semibold">데이터 정확성</p>
          </div>
          <div class="text-center">
            <div class="text-6xl mb-3">🤝</div>
            <p class="text-5xl font-bold text-orange-600 mb-2">100%</p>
            <p class="text-sm text-gray-700 font-semibold">기관 연계</p>
          </div>
        </div>

        <div class="bg-white rounded-xl p-6">
          <h3 class="font-bold text-gray-900 mb-4 text-center">이 모든 성과는 실제 현장 데이터로 검증되었습니다</h3>
          <div class="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <p class="font-semibold mb-2">치료 효과 35% 향상:</p>
              <p>• 기존: 3개월 목표 달성률 45%</p>
              <p>• 자람이: 3개월 목표 달성률 80%</p>
            </div>
            <div>
              <p class="font-semibold mb-2">업무 효율성 60% 개선:</p>
              <p>• 기존: 주간 20시간 행정 업무</p>
              <p>• 자람이: 주간 8시간 행정 업무</p>
            </div>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-gray-900 mb-6">🏗️ 완전 구현된 플랫폼</h2>

      <div class="bg-white rounded-xl p-8 shadow-lg mb-12 border-l-4 border-blue-500">
        <h3 class="text-2xl font-bold text-gray-900 mb-6">자람이는 이미 완성되었습니다</h3>
        
        <div class="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <h4 class="font-bold text-blue-700 mb-3">✅ 10가지 전문 치료 모듈</h4>
            <div class="grid grid-cols-2 gap-2 text-sm">
              <p>• 물리치료</p>
              <p>• 작업치료</p>
              <p>• 언어치료</p>
              <p>• 놀이치료</p>
              <p>• 음악치료</p>
              <p>• 미술치료</p>
              <p>• 사회기술훈련</p>
              <p>• 인지행동치료</p>
              <p>• 감각통합치료</p>
              <p>• ABA치료</p>
            </div>
          </div>

          <div>
            <h4 class="font-bold text-green-700 mb-3">✅ 7개 역할군 완전 구현</h4>
            <ul className="space-y-2 text-sm">
              <li>• 보호자 + 활동보조</li>
              <li>• 치료사 + 센터</li>
              <li>• 의사 + 병원</li>
              <li>• 교사 + 학교</li>
              <li>• 센터 관리자</li>
              <li>• 병원 관리자</li>
              <li>• 학교 관리자</li>
            </ul>
          </div>
        </div>

        <div class="bg-blue-50 rounded-xl p-6">
          <p class="text-center text-gray-800 font-semibold">
            🎭 <strong>로그인 없이도</strong> 모든 역할의 실제 기능을 데모 모드로 체험 가능합니다
          </p>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-gray-900 mb-6">🚀 2026년 국가 시범사업으로 전국 확대</h2>

      <div class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 mb-12">
        <h3 class="text-2xl font-bold mb-4">정부 정책과 100% 일치</h3>
        <p class="text-lg mb-6">
          2025년 발표된 <strong>"AI 사회문제 해결형 과제 1순위"</strong> 정책에 완벽히 부합하는 
          자람이는 2026년 정부 국가 시범사업 추진을 목표로 하고 있습니다.
        </p>

        <div class="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
            <h4 class="font-bold mb-3">2025 Q4</h4>
            <p class="text-sm">주요 지자체·병원 파일럿 진행</p>
          </div>
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
            <h4 class="font-bold mb-3">2026 Q1</h4>
            <p class="text-sm">정부 시범사업 제안</p>
          </div>
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
            <h4 class="font-bold mb-3">2026 Q2-Q4</h4>
            <p class="text-sm">전국 100개 기관 확대</p>
          </div>
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
            <h4 class="font-bold mb-3">2027</h4>
            <p class="text-sm">전국 표준 플랫폼 확립</p>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-gray-900 mb-6">🌍 우리의 비전</h2>

      <div class="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-8 mb-12">
        <h3 class="text-2xl font-bold mb-4">불치병과 사회 약자를 위한 기술</h3>
        <p class="text-lg mb-6 leading-relaxed">
          자람이는 단순한 플랫폼이 아닙니다. <strong>인류의 불치병과 사회 약자를 위한 AI의 첫 걸음</strong>입니다.
        </p>
        
        <div class="bg-white/10 rounded-xl p-6 backdrop-blur-sm mb-6">
          <p class="text-lg mb-3">
            "아무도 하지 않았기에, 누군가는 해야 합니다."
          </p>
          <p class="text-base">
            인류는 늘 <strong>불치병이라는 이름의 질병</strong>을 누군가의 노력으로 극복해 왔습니다. 
            그리고 지금, <strong>인공지능 기술의 도약</strong>으로 수십 년 풀지 못했던 질병조차 
            단기간에 해법을 찾을 수 있는 세상이 되었습니다.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-4 text-sm">
          <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
            <p class="font-bold mb-2">발달장애 (현재)</p>
            <p>세계 최초 표준 플랫폼</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
            <p class="font-bold mb-2">시니어 돌봄 (진행중)</p>
            <p>시니어앤라이프 운영</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
            <p class="font-bold mb-2">정신건강 (계획)</p>
            <p>마음이AI 확장</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 68,
    title: 'AI 기술로 사회문제 해결 - 드림에이아이랩, 국제결혼 사기·정착 실패·가족 해체 막는다',
    excerpt: '드림에이아이랩이 AI 디지털 케어로그 기술로 국제결혼 시장의 구조적 문제를 해결한다. 정보 비대칭으로 인한 사기 피해, 결혼 후 방치로 인한 정착 실패, 소통 부재로 인한 가족 해체 등 다문화 가정이 겪는 3대 사회문제에 기술 솔루션을 제시한다.',
    content: `
      <h1 class="text-3xl font-bold text-gray-900 mb-6">🛡️ AI가 해결하는 국제결혼의 사회문제</h1>
      <p class="text-lg text-gray-600 mb-6">사기 예방·정착 지원·가족 케어 - 기술로 다문화 가정의 행복 지킨다</p>
      
      <div class="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-6 mb-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">📢 기술로 해결하는 사회문제</h2>
        <p class="text-gray-700 mb-4">
          드림에이아이랩(DAL, 대표 이지수, CTO 정해성)이 <strong>AI 디지털 케어로그 기술</strong>을 활용하여 
          국제결혼 시장의 구조적 문제를 해결하는 사회적 가치 창출에 나섰다고 14일 밝혔다.
        </p>
        <p class="text-gray-700 mb-4">
          국제결혼은 연간 2만 건 이상 발생하지만, <strong>정보 비대칭으로 인한 사기 피해, 
          결혼 후 방치로 인한 정착 실패, 언어·문화 차이로 인한 가족 갈등</strong> 등 
          심각한 사회문제를 안고 있다. 드림에이아이랩은 글로벌커플케어(GCC) 플랫폼과 
          AI 케어로그 기술로 이러한 문제를 체계적으로 해결한다.
        </p>
        <div class="bg-red-100 border-l-4 border-red-600 p-4 mb-4">
          <p class="text-red-900 font-semibold">
            "국제결혼 시장의 문제는 단순히 비즈니스 문제가 아니라 사람들의 삶과 행복, 
            가족의 미래가 걸린 중대한 사회문제입니다. 우리는 AI 기술로 이 문제를 
            근본적으로 해결하고, 모든 다문화 가정이 행복하게 정착할 수 있도록 돕겠습니다."
          </p>
          <p class="text-red-800 text-sm mt-2">- 정해성 CTO</p>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">🚨 문제 1: 정보 비대칭과 사기 피해</h2>
      <div class="bg-white rounded-xl p-6 shadow-lg mb-8 border-l-4 border-red-500">
        <h3 class="text-xl font-bold text-gray-900 mb-4">현재 문제 상황</h3>
        <div class="bg-red-50 rounded-lg p-4 mb-4">
          <h4 class="font-bold text-red-700 mb-3">❌ 국제결혼 시장의 어두운 현실</h4>
          <ul class="space-y-2 text-sm text-gray-700">
            <li>• <strong>불투명한 중개 과정:</strong> 업체 정보 확인 불가, 숨겨진 비용, 계약 후 추가 금액 요구</li>
            <li>• <strong>허위 정보:</strong> 상대방 나이·직업·학력 거짓, 재혼 사실 숨김, 건강 상태 은폐</li>
            <li>• <strong>사기 피해:</strong> 계약금만 받고 잠적, 비자 발급 후 연락두절, 가짜 서류 제공</li>
            <li>• <strong>법적 분쟁:</strong> 계약 위반 시 책임 소재 불분명, 환불 불가, 소송 비용 부담</li>
            <li>• <strong>피해 금액:</strong> 1인당 평균 1,000만~3,000만원 손실, 심리적 상처</li>
          </ul>
        </div>

        <h3 class="text-xl font-bold text-gray-900 mb-4 mt-6">✅ 드림에이아이랩의 해결책</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-green-50 rounded-lg p-4">
            <h4 class="font-bold text-green-700 mb-2">1️⃣ 투명한 전문가 검증 시스템</h4>
            <ul class="space-y-1 text-sm text-gray-700">
              <li>✅ 중개업체·전문가 신원 확인</li>
              <li>✅ 사업자등록·자격증 검증</li>
              <li>✅ 과거 실적·성공률 공개</li>
              <li>✅ 실제 이용자 후기·평점</li>
            </ul>
          </div>
          <div class="bg-green-50 rounded-lg p-4">
            <h4 class="font-bold text-green-700 mb-2">2️⃣ 계약서 표준화 및 에스크로</h4>
            <ul class="space-y-1 text-sm text-gray-700">
              <li>✅ 표준 계약서 템플릿 제공</li>
              <li>✅ 법률 전문가 검토 지원</li>
              <li>✅ 에스크로 결제로 안전 보장</li>
              <li>✅ 단계별 비용 투명 공개</li>
            </ul>
          </div>
          <div class="bg-green-50 rounded-lg p-4">
            <h4 class="font-bold text-green-700 mb-2">3️⃣ AI 기반 정보 진위 검증</h4>
            <ul class="space-y-1 text-sm text-gray-700">
              <li>✅ 상대방 정보 교차 검증</li>
              <li>✅ 서류 진위 확인 시스템</li>
              <li>✅ 영상 통화 신원 확인</li>
              <li>✅ 이상 패턴 AI 감지</li>
            </ul>
          </div>
          <div class="bg-green-50 rounded-lg p-4">
            <h4 class="font-bold text-green-700 mb-2">4️⃣ 분쟁 조정 및 피해 보상</h4>
            <ul class="space-y-1 text-sm text-gray-700">
              <li>✅ 플랫폼 내 분쟁 조정 센터</li>
              <li>✅ 법률 전문가 무료 상담</li>
              <li>✅ 피해 보상 보험 제도</li>
              <li>✅ 악질 업체 퇴출 시스템</li>
            </ul>
          </div>
        </div>

        <div class="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
          <p class="text-blue-900 font-semibold text-sm">
            <strong>기대 효과:</strong> 국제결혼 사기 피해 90% 이상 감소, 투명한 시장 형성, 
            소비자 신뢰 회복, 건전한 중개 업체 육성
          </p>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">🏠 문제 2: 결혼 후 방치와 정착 실패</h2>
      <div class="bg-white rounded-xl p-6 shadow-lg mb-8 border-l-4 border-orange-500">
        <h3 class="text-xl font-bold text-gray-900 mb-4">현재 문제 상황</h3>
        <div class="bg-orange-50 rounded-lg p-4 mb-4">
          <h4 class="font-bold text-orange-700 mb-3">❌ 결혼 후 완전히 방치되는 현실</h4>
          <ul class="space-y-2 text-sm text-gray-700">
            <li>• <strong>중개업체 연락두절:</strong> 결혼 성사 후 업체가 책임 회피, 문제 발생 시 연락 안 됨</li>
            <li>• <strong>언어 장벽:</strong> 한국어 못 해 의사소통 불가, 일상생활·은행·병원 이용 어려움</li>
            <li>• <strong>문화 충돌:</strong> 음식·예절·가족 관계 등 문화 차이로 갈등, 시댁과 불화</li>
            <li>• <strong>고립감·우울증:</strong> 친구 없음, 외로움, 정신건강 악화, 자살 충동</li>
            <li>• <strong>육아 부담:</strong> 자녀 양육 방법 모름, 교육 정보 부족, 이중언어 교육 어려움</li>
            <li>• <strong>높은 이혼율:</strong> 다문화 가정 이혼율 일반 가정의 2배 이상</li>
          </ul>
        </div>

        <h3 class="text-xl font-bold text-gray-900 mb-4 mt-6">✅ 드림에이아이랩의 해결책</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-green-50 rounded-lg p-4">
            <h4 class="font-bold text-green-700 mb-2">1️⃣ 결혼 후 평생 케어 시스템</h4>
            <ul class="space-y-1 text-sm text-gray-700">
              <li>✅ 결혼 후에도 지속 관리</li>
              <li>✅ 월 1회 정기 체크인</li>
              <li>✅ 24시간 긴급 상담 지원</li>
              <li>✅ AI가 문제 조기 감지</li>
            </ul>
          </div>
          <div class="bg-green-50 rounded-lg p-4">
            <h4 class="font-bold text-green-700 mb-2">2️⃣ 한국어·문화 교육 프로그램</h4>
            <ul class="space-y-1 text-sm text-gray-700">
              <li>✅ 무료 한국어 교육 연결</li>
              <li>✅ 한국 문화·생활 적응 교육</li>
              <li>✅ 요리·육아 실전 교육</li>
              <li>✅ 온라인 학습 자료 제공</li>
            </ul>
          </div>
          <div class="bg-green-50 rounded-lg p-4">
            <h4 class="font-bold text-green-700 mb-2">3️⃣ AI 디지털 케어로그</h4>
            <ul class="space-y-1 text-sm text-gray-700">
              <li>✅ 일상 대화·갈등 기록 분석</li>
              <li>✅ 감정 상태 모니터링</li>
              <li>✅ 위험 신호 조기 경고</li>
              <li>✅ 맞춤형 개선 가이드 제공</li>
            </ul>
          </div>
          <div class="bg-green-50 rounded-lg p-4">
            <h4 class="font-bold text-green-700 mb-2">4️⃣ 커뮤니티 및 심리 상담</h4>
            <ul class="space-y-1 text-sm text-gray-700">
              <li>✅ 같은 나라 출신 커뮤니티</li>
              <li>✅ 선배 다문화 가정 멘토링</li>
              <li>✅ 전문 심리 상담사 연결</li>
              <li>✅ 가족 상담 프로그램</li>
            </ul>
          </div>
        </div>

        <div class="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
          <p class="text-blue-900 font-semibold text-sm">
            <strong>기대 효과:</strong> 다문화 가정 정착률 30% → 70% 이상 향상, 
            이혼율 50% 감소, 배우자 삶의 질 개선, 자녀 건강한 성장 환경 조성
          </p>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">💔 문제 3: 가족 갈등과 해체</h2>
      <div class="bg-white rounded-xl p-6 shadow-lg mb-8 border-l-4 border-purple-500">
        <h3 class="text-xl font-bold text-gray-900 mb-4">현재 문제 상황</h3>
        <div class="bg-purple-50 rounded-lg p-4 mb-4">
          <h4 class="font-bold text-purple-700 mb-3">❌ 소통 부재로 무너지는 가정</h4>
          <ul class="space-y-2 text-sm text-gray-700">
            <li>• <strong>언어 장벽:</strong> 깊은 대화 불가, 감정 표현 못 함, 오해 누적</li>
            <li>• <strong>기대 차이:</strong> 결혼 전 약속과 달라 실망, 경제적 지원 기대 불일치</li>
            <li>• <strong>시댁 갈등:</strong> 시부모와 소통 안 됨, 며느리 역할 기대 충돌, 손자 양육 갈등</li>
            <li>• <strong>자녀 문제:</strong> 이중언어 교육 갈등, 문화 정체성 혼란, 학교 적응 어려움</li>
            <li>• <strong>가정폭력:</strong> 스트레스로 폭언·폭행 발생, 피해 신고 못 함</li>
            <li>• <strong>이혼 후 문제:</strong> 양육권 분쟁, 본국 귀환 시 자녀 데려가기, 연락두절</li>
          </ul>
        </div>

        <h3 class="text-xl font-bold text-gray-900 mb-4 mt-6">✅ 드림에이아이랩의 해결책</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-green-50 rounded-lg p-4">
            <h4 class="font-bold text-green-700 mb-2">1️⃣ AI 통역·번역 지원</h4>
            <ul class="space-y-1 text-sm text-gray-700">
              <li>✅ 실시간 대화 통역 서비스</li>
              <li>✅ 중요 문서 번역 지원</li>
              <li>✅ 감정 뉘앙스 해석</li>
              <li>✅ 문화적 맥락 설명</li>
            </ul>
          </div>
          <div class="bg-green-50 rounded-lg p-4">
            <h4 class="font-bold text-green-700 mb-2">2️⃣ 가족 관계 모니터링</h4>
            <ul class="space-y-1 text-sm text-gray-700">
              <li>✅ 대화 패턴 AI 분석</li>
              <li>✅ 갈등 조짐 조기 발견</li>
              <li>✅ 스트레스 수준 측정</li>
              <li>✅ 폭력 위험 경고 시스템</li>
            </ul>
          </div>
          <div class="bg-green-50 rounded-lg p-4">
            <h4 class="font-bold text-green-700 mb-2">3️⃣ 가족 상담 및 중재</h4>
            <ul class="space-y-1 text-sm text-gray-700">
              <li>✅ 전문 가족 상담사 배정</li>
              <li>✅ 부부 갈등 조정 프로그램</li>
              <li>✅ 시댁 관계 개선 가이드</li>
              <li>✅ 자녀 양육 코칭</li>
            </ul>
          </div>
          <div class="bg-green-50 rounded-lg p-4">
            <h4 class="font-bold text-green-700 mb-2">4️⃣ 위기 대응 시스템</h4>
            <ul class="space-y-1 text-sm text-gray-700">
              <li>✅ 가정폭력 긴급 신고</li>
              <li>✅ 법률 지원 연결</li>
              <li>✅ 쉼터·보호시설 안내</li>
              <li>✅ 이혼 시 법적 권리 보호</li>
            </ul>
          </div>
        </div>

        <div class="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
          <p class="text-blue-900 font-semibold text-sm">
            <strong>기대 효과:</strong> 가족 갈등 조기 해결로 이혼율 감소, 
            가정폭력 예방, 자녀 건강한 성장, 다문화 가정 사회 통합 촉진
          </p>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">🌍 문제 4: 사회적 비용 증가</h2>
      <div class="bg-white rounded-xl p-6 shadow-lg mb-8 border-l-4 border-yellow-500">
        <h3 class="text-xl font-bold text-gray-900 mb-4">현재 문제 상황</h3>
        <div class="bg-yellow-50 rounded-lg p-4 mb-4">
          <h4 class="font-bold text-yellow-700 mb-3">❌ 국가·사회가 떠안는 막대한 비용</h4>
          <ul class="space-y-2 text-sm text-gray-700">
            <li>• <strong>사기 피해 구제 비용:</strong> 법률 지원, 소송 비용, 피해자 보호</li>
            <li>• <strong>정착 실패 비용:</strong> 이혼·재결혼 반복, 한부모 가정 지원, 생계 지원</li>
            <li>• <strong>자녀 복지 비용:</strong> 가정 해체로 인한 자녀 심리 치료, 교육 지원</li>
            <li>• <strong>사회 갈등 비용:</strong> 외국인 혐오, 다문화 가정 차별, 사회 통합 실패</li>
            <li>• <strong>연간 추정 비용:</strong> 수천억 원 규모의 사회적 비용 발생</li>
          </ul>
        </div>

        <h3 class="text-xl font-bold text-gray-900 mb-4 mt-6">✅ 드림에이아이랩의 해결책</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-green-50 rounded-lg p-4">
            <h4 class="font-bold text-green-700 mb-2">1️⃣ 예방적 접근으로 비용 절감</h4>
            <ul class="space-y-1 text-sm text-gray-700">
              <li>✅ 사전 검증으로 사기 예방</li>
              <li>✅ 조기 개입으로 갈등 해결</li>
              <li>✅ 정착 성공률 향상</li>
              <li>✅ 이혼·재결혼 반복 차단</li>
            </ul>
          </div>
          <div class="bg-green-50 rounded-lg p-4">
            <h4 class="font-bold text-green-700 mb-2">2️⃣ 데이터 기반 정책 수립</h4>
            <ul class="space-y-1 text-sm text-gray-700">
              <li>✅ 실제 데이터로 문제 파악</li>
              <li>✅ 효과적인 지원 정책 수립</li>
              <li>✅ 예산 낭비 방지</li>
              <li>✅ 정부·지자체 협력</li>
            </ul>
          </div>
          <div class="bg-green-50 rounded-lg p-4">
            <h4 class="font-bold text-green-700 mb-2">3️⃣ 민간 주도 해결 모델</h4>
            <ul class="space-y-1 text-sm text-gray-700">
              <li>✅ 정부 의존도 감소</li>
              <li>✅ 민간 플랫폼으로 효율화</li>
              <li>✅ 시장 원리로 품질 향상</li>
              <li>✅ 지속 가능한 모델 구축</li>
            </ul>
          </div>
          <div class="bg-green-50 rounded-lg p-4">
            <h4 class="font-bold text-green-700 mb-2">4️⃣ 사회 통합 촉진</h4>
            <ul class="space-y-1 text-sm text-gray-700">
              <li>✅ 다문화 가정 성공 사례 확산</li>
              <li>✅ 인식 개선 및 차별 해소</li>
              <li>✅ 문화 다양성 존중</li>
              <li>✅ 글로벌 인재 육성</li>
            </ul>
          </div>
        </div>

        <div class="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
          <p class="text-blue-900 font-semibold text-sm">
            <strong>기대 효과:</strong> 연간 수천억 원 사회적 비용 절감, 
            다문화 가정 안정화로 사회 통합 기여, 글로벌 경쟁력 강화
          </p>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">📊 핵심 기술: AI 디지털 케어로그</h2>
      <div class="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-6 shadow-lg mb-8">
        <p class="text-gray-700 mb-4">
          드림에이아이랩의 핵심 기술인 <strong>'AI 디지털 케어로그'</strong>는 
          국제결혼 전 과정을 디지털로 기록하고 AI가 분석하여 문제를 조기에 발견하는 시스템이다.
        </p>
        
        <div class="grid md:grid-cols-3 gap-4 mb-6">
          <div class="bg-white rounded-lg p-4 shadow">
            <h4 class="font-bold text-cyan-700 mb-2">📝 기록 (Record)</h4>
            <p class="text-sm text-gray-700">
              • 매칭 과정 전체 기록<br/>
              • 대화·계약·서류 저장<br/>
              • 결혼 후 일상 기록<br/>
              • 가족 관계 변화 추적
            </p>
          </div>
          <div class="bg-white rounded-lg p-4 shadow">
            <h4 class="font-bold text-cyan-700 mb-2">🤖 분석 (Analyze)</h4>
            <p class="text-sm text-gray-700">
              • AI가 패턴 분석<br/>
              • 이상 징후 감지<br/>
              • 위험 요인 예측<br/>
              • 감정 상태 모니터링
            </p>
          </div>
          <div class="bg-white rounded-lg p-4 shadow">
            <h4 class="font-bold text-cyan-700 mb-2">💡 개입 (Intervene)</h4>
            <p class="text-sm text-gray-700">
              • 문제 조기 경고<br/>
              • 맞춤형 솔루션 제시<br/>
              • 전문가 연결<br/>
              • 지속적 관리
            </p>
          </div>
        </div>

        <div class="bg-cyan-100 rounded-lg p-4 border-l-4 border-cyan-600">
          <p class="text-cyan-900 font-semibold text-sm">
            <strong>기술의 차별점:</strong> 단순 기록이 아닌 AI 분석을 통한 예측과 개입. 
            문제가 커지기 전에 해결하는 '예방적 케어'가 핵심입니다.
          </p>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">🌟 사회적 가치와 비전</h2>
      <div class="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 shadow-lg mb-8">
        <div class="space-y-4">
          <div class="flex items-start gap-3">
            <span class="text-2xl">🛡️</span>
            <div>
              <h3 class="font-bold text-gray-900 mb-2">국제결혼 사기 피해 90% 감소</h3>
              <p class="text-sm text-gray-700">
                투명한 검증 시스템과 에스크로 결제로 사기 피해를 원천 차단. 
                소비자가 안심하고 국제결혼을 선택할 수 있는 환경 조성.
              </p>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <span class="text-2xl">🏠</span>
            <div>
              <h3 class="font-bold text-gray-900 mb-2">다문화 가정 정착률 70% 이상 달성</h3>
              <p class="text-sm text-gray-700">
                현재 30% 수준인 정착 성공률을 70% 이상으로 향상. 
                결혼 후 지속적인 케어로 가족이 안정적으로 정착하도록 지원.
              </p>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <span class="text-2xl">💔</span>
            <div>
              <h3 class="font-bold text-gray-900 mb-2">다문화 가정 이혼율 50% 감소</h3>
              <p class="text-sm text-gray-700">
                AI가 가족 갈등을 조기에 발견하고 전문가가 개입하여 
                불필요한 이혼과 가족 해체를 예방.
              </p>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <span class="text-2xl">💰</span>
            <div>
              <h3 class="font-bold text-gray-900 mb-2">연간 수천억 원 사회적 비용 절감</h3>
              <p class="text-sm text-gray-700">
                사기 피해 구제, 이혼 지원, 자녀 복지 등 사후 처리 비용 대폭 감소. 
                예방 중심 접근으로 효율적인 사회 운영.
              </p>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <span class="text-2xl">🌍</span>
            <div>
              <h3 class="font-bold text-gray-900 mb-2">글로벌 문화 교류 및 사회 통합</h3>
              <p class="text-sm text-gray-700">
                성공한 다문화 가정이 늘어나면서 외국인 혐오 감소, 문화 다양성 존중, 
                자녀들이 글로벌 인재로 성장.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">💬 전문가 의견</h2>
      <div class="bg-white rounded-xl p-6 shadow-lg mb-8">
        <div class="space-y-6">
          <div class="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-600">
            <p class="text-blue-900 font-semibold mb-2">
              "국제결혼 시장은 그동안 정부도, 민간도 제대로 관리하지 못한 사각지대였습니다. 
              드림에이아이랩의 AI 기술 기반 접근은 이 문제를 근본적으로 해결할 수 있는 
              혁신적인 솔루션입니다."
            </p>
            <p class="text-blue-700 text-sm">- ○○대학교 사회복지학과 교수</p>
          </div>

          <div class="bg-green-50 rounded-lg p-4 border-l-4 border-green-600">
            <p class="text-green-900 font-semibold mb-2">
              "다문화 가정 지원 현장에서 가장 안타까운 것은 문제가 심각해진 후에야 
              도움을 요청한다는 점입니다. AI가 조기에 문제를 발견하고 개입한다면 
              많은 가정을 구할 수 있습니다."
            </p>
            <p class="text-green-700 text-sm">- 다문화 가족지원센터 센터장</p>
          </div>

          <div class="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-600">
            <p class="text-purple-900 font-semibold mb-2">
              "국제결혼 사기로 인한 피해 상담이 매년 증가하고 있지만 
              사후 구제는 한계가 있습니다. 사전 예방이 핵심인데, 
              이 플랫폼이 그 역할을 할 수 있을 것으로 기대합니다."
            </p>
            <p class="text-purple-700 text-sm">- 소비자보호원 관계자</p>
          </div>
        </div>
      </div>

      <div class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-6 shadow-xl">
        <h2 class="text-2xl font-bold mb-3">🚀 기술로 만드는 행복한 다문화 사회</h2>
        <p class="text-blue-100 mb-4">
          드림에이아이랩은 AI 기술로 국제결혼의 3대 사회문제(사기·정착 실패·가족 해체)를 
          근본적으로 해결하고, 모든 다문화 가정이 행복하게 정착할 수 있는 사회를 만들어갑니다.
        </p>
        <p class="text-blue-100 text-sm">
          <strong class="text-white">기술은 단순한 도구가 아니라, 사람들의 행복과 사회 문제 해결을 위한 수단입니다.</strong>
        </p>
      </div>
    `,
    category: 'insight',
    date: '2025-11-14',
    image: '🛡️',
    featured: true,
    author: '드림에이아이랩',
    tags: [
      '사회문제',
      '사회문제해결',
      'AI기술',
      '디지털케어로그',
      '국제결혼사기',
      '정착지원',
      '가족케어',
      '다문화가정',
      '사회적가치',
      '기술혁신',
      'GCC',
      '글로벌커플케어',
      '이혼율감소',
      '사회비용절감',
      '예방적케어'
    ]
  },
  {
    id: 67,
    title: '드림에이아이랩, 국제결혼 플랫폼으로 여행·항공·호텔·웨딩 파트너 모집 - 新 비즈니스 생태계 구축',
    excerpt: '드림에이아이랩이 글로벌커플케어(GCC) 플랫폼을 통해 여행사, 항공사, 호텔, 웨딩, 의료, 교육 등 다양한 산업 분야의 파트너십을 공개 모집한다. 국제결혼 전후 과정에서 발생하는 다양한 니즈를 충족시킬 비즈니스 생태계를 함께 만들어갈 파트너를 찾고 있다.',
    content: `
      <h1 class="text-3xl font-bold text-gray-900 mb-6">🤝 드림에이아이랩, GCC 플랫폼 파트너 대규모 모집</h1>
      <p class="text-lg text-gray-600 mb-6">여행·항공·호텔·웨딩·의료·교육 등 20개 이상 산업 분야 파트너십 오픈</p>
      
      <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">📢 파트너십 모집 개요</h2>
        <p class="text-gray-700 mb-4">
          드림에이아이랩(DAL, 대표 이지수, CTO 정해성)이 국제결혼 통합 플랫폼 
          <strong>'글로벌커플케어(GCC)'</strong>를 기반으로 다양한 산업 분야의 
          비즈니스 파트너를 대규모로 모집한다고 14일 밝혔다.
        </p>
        <p class="text-gray-700 mb-4">
          국제결혼은 단순히 두 사람의 만남이 아니라, <strong>맞선 여행, 비자 신청, 
          국제 항공권, 장기 숙박, 웨딩, 건강검진, 언어 교육, 자녀 양육</strong> 등 
          다양한 서비스가 필요한 종합적인 생애 이벤트다. GCC는 이러한 모든 과정을 
          하나의 플랫폼에서 연결하여 <strong>새로운 비즈니스 생태계</strong>를 구축한다.
        </p>
        <div class="bg-blue-100 border-l-4 border-blue-600 p-4 mb-4">
          <p class="text-blue-900 font-semibold">
            "국제결혼은 연간 2만 건 이상, 누적 40만 가정이 넘는 거대한 시장입니다. 
            하지만 그동안 이 시장을 제대로 서비스하는 플랫폼이 없었습니다. 
            GCC는 여행부터 정착까지 모든 과정에서 필요한 서비스를 연결하는 허브가 될 것입니다."
          </p>
          <p class="text-blue-800 text-sm mt-2">- 정해성 CTO</p>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">🌐 모집 분야 및 파트너십 내용</h2>
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-500">
          <h3 class="text-xl font-bold text-gray-900 mb-4">✈️ 1. 여행사 파트너십</h3>
          <div class="space-y-3 text-sm text-gray-700">
            <div class="bg-purple-50 rounded p-3">
              <p class="font-semibold text-purple-700 mb-1">맞선 여행 패키지</p>
              <p>• 베트남·태국·필리핀·일본·중국 등 국가별 맞선 여행 상품<br/>
              • 현지 가이드, 통역, 숙박 포함 올인원 패키지<br/>
              • 가족 동반 여행 옵션</p>
            </div>
            <div class="bg-purple-50 rounded p-3">
              <p class="font-semibold text-purple-700 mb-1">신혼여행 상품</p>
              <p>• 국제커플 특화 신혼여행 상품<br/>
              • 배우자 본국 방문 포함 일정<br/>
              • 장기 체류형 여행 패키지</p>
            </div>
            <div class="bg-purple-50 rounded p-3">
              <p class="font-semibold text-purple-700 mb-1">가족 초청 여행</p>
              <p>• 배우자 가족 한국 초청 여행<br/>
              • 양가 가족 상견례 여행<br/>
              • 명절·기념일 특별 패키지</p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
          <h3 class="text-xl font-bold text-gray-900 mb-4">🛫 2. 항공사 파트너십</h3>
          <div class="space-y-3 text-sm text-gray-700">
            <div class="bg-blue-50 rounded p-3">
              <p class="font-semibold text-blue-700 mb-1">맞선·결혼 항공권</p>
              <p>• 국제결혼 전용 특가 항공권<br/>
              • 단체 할인 및 가족 동반 할인<br/>
              • 일정 변경 유연한 티켓</p>
            </div>
            <div class="bg-blue-50 rounded p-3">
              <p class="font-semibold text-blue-700 mb-1">가족 초청 항공권</p>
              <p>• 배우자 가족 초청 항공권 패키지<br/>
              • 왕복 항공권 할인<br/>
              • 장기 체류 비자 소지자 우대</p>
            </div>
            <div class="bg-blue-50 rounded p-3">
              <p class="font-semibold text-blue-700 mb-1">정기 왕복 프로그램</p>
              <p>• 다문화 가정 전용 마일리지 프로그램<br/>
              • 정기 귀성 항공권 할인<br/>
              • 연중 특가 항공권 제공</p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500">
          <h3 class="text-xl font-bold text-gray-900 mb-4">🏨 3. 숙박업 파트너십</h3>
          <div class="space-y-3 text-sm text-gray-700">
            <div class="bg-green-50 rounded p-3">
              <p class="font-semibold text-green-700 mb-1">맞선 숙박 패키지</p>
              <p>• 맞선 일정에 최적화된 숙소<br/>
              • 가족 동반 숙박 할인<br/>
              • 장기 체류 옵션</p>
            </div>
            <div class="bg-green-50 rounded p-3">
              <p class="font-semibold text-green-700 mb-1">신혼 숙박</p>
              <p>• 신혼 커플 특화 호텔·리조트<br/>
              • 허니문 스위트룸 할인<br/>
              • 조식·스파 포함 패키지</p>
            </div>
            <div class="bg-green-50 rounded p-3">
              <p class="font-semibold text-green-700 mb-1">장기 숙박 (정착 지원)</p>
              <p>• 신혼 초기 장기 숙박 할인<br/>
              • 월 단위 장기 숙소 제공<br/>
              • 가구·가전 포함 옵션</p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl p-6 shadow-lg border-l-4 border-pink-500">
          <h3 class="text-xl font-bold text-gray-900 mb-4">💒 4. 웨딩 파트너십</h3>
          <div class="space-y-3 text-sm text-gray-700">
            <div class="bg-pink-50 rounded p-3">
              <p class="font-semibold text-pink-700 mb-1">국제 웨딩 플래닝</p>
              <p>• 한국·외국 양국 예식 기획<br/>
              • 통역·번역 서비스 포함<br/>
              • 문화별 맞춤 예식 연출</p>
            </div>
            <div class="bg-pink-50 rounded p-3">
              <p class="font-semibold text-pink-700 mb-1">웨딩홀·스튜디오</p>
              <p>• 국제커플 특화 웨딩홀<br/>
              • 스튜디오·드레스·메이크업 패키지<br/>
              • 통역 가능한 웨딩 코디</p>
            </div>
            <div class="bg-pink-50 rounded p-3">
              <p class="font-semibold text-pink-700 mb-1">혼수·예단</p>
              <p>• 국제결혼 맞춤 혼수 상품<br/>
              • 양국 예단 문화 반영<br/>
              • 배송·통관 지원</p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl p-6 shadow-lg border-l-4 border-red-500">
          <h3 class="text-xl font-bold text-gray-900 mb-4">🏥 5. 의료·건강 파트너십</h3>
          <div class="space-y-3 text-sm text-gray-700">
            <div class="bg-red-50 rounded p-3">
              <p class="font-semibold text-red-700 mb-1">결혼 전 건강검진</p>
              <p>• 국제결혼 필수 건강검진<br/>
              • 통역 지원 병원 연결<br/>
              • 검진 결과 통역 서비스</p>
            </div>
            <div class="bg-red-50 rounded p-3">
              <p class="font-semibold text-red-700 mb-1">산부인과·출산 지원</p>
              <p>• 외국인 배우자 출산 지원<br/>
              • 산전·산후 관리 프로그램<br/>
              • 통역 가능한 산부인과 연결</p>
            </div>
            <div class="bg-red-50 rounded p-3">
              <p class="font-semibold text-red-700 mb-1">가족 건강관리</p>
              <p>• 다문화 가정 건강검진 패키지<br/>
              • 예방접종·건강상담<br/>
              • 의료통역 서비스</p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl p-6 shadow-lg border-l-4 border-yellow-500">
          <h3 class="text-xl font-bold text-gray-900 mb-4">📚 6. 교육 파트너십</h3>
          <div class="space-y-3 text-sm text-gray-700">
            <div class="bg-yellow-50 rounded p-3">
              <p class="font-semibold text-yellow-700 mb-1">한국어 교육</p>
              <p>• 외국인 배우자 한국어 교육<br/>
              • 온라인·오프라인 통합 과정<br/>
              • 레벨별 맞춤 커리큘럼</p>
            </div>
            <div class="bg-yellow-50 rounded p-3">
              <p class="font-semibold text-yellow-700 mb-1">문화 적응 교육</p>
              <p>• 한국 문화·생활 교육<br/>
              • 가족 관계·육아 교육<br/>
              • 취업·창업 교육</p>
            </div>
            <div class="bg-yellow-50 rounded p-3">
              <p class="font-semibold text-yellow-700 mb-1">자녀 이중언어 교육</p>
              <p>• 다문화 자녀 이중언어 교육<br/>
              • 부모 본국 언어·문화 교육<br/>
              • 글로벌 인재 육성 프로그램</p>
            </div>
          </div>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">💼 추가 모집 분야</h2>
      <div class="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 mb-8">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
          <div>
            <h4 class="font-bold text-gray-900 mb-2">⚖️ 법률·행정</h4>
            <ul class="text-gray-700 space-y-1">
              <li>• 비자·체류 법무사</li>
              <li>• 국제 가족법 변호사</li>
              <li>• 혼인신고 대행</li>
              <li>• 귀화 상담</li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-gray-900 mb-2">💰 금융·보험</h4>
            <ul class="text-gray-700 space-y-1">
              <li>• 결혼자금 대출</li>
              <li>• 국제송금 서비스</li>
              <li>• 다문화 가정 보험</li>
              <li>• 외국인 배우자 통장</li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-gray-900 mb-2">🏠 부동산·생활</h4>
            <ul class="text-gray-700 space-y-1">
              <li>• 신혼집 중개</li>
              <li>• 전세·월세 컨설팅</li>
              <li>• 이사·인테리어</li>
              <li>• 생활용품 쇼핑몰</li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-gray-900 mb-2">📱 IT·통신</h4>
            <ul class="text-gray-700 space-y-1">
              <li>• 통역·번역 앱</li>
              <li>• 국제전화 서비스</li>
              <li>• 외국인 통신 요금제</li>
              <li>• 원격 상담 솔루션</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">🎯 파트너십 혜택</h2>
      <div class="bg-white rounded-xl p-6 shadow-lg mb-8">
        <div class="grid md:grid-cols-3 gap-6">
          <div class="border-l-4 border-blue-500 pl-4">
            <h3 class="font-bold text-gray-900 mb-2">🎯 타겟 고객 확보</h3>
            <p class="text-sm text-gray-700">
              • 연간 2만 건 이상 국제결혼 시장<br/>
              • 누적 40만 다문화 가정<br/>
              • 플랫폼을 통한 자동 고객 유입<br/>
              • 광고비 없이 효율적 마케팅
            </p>
          </div>
          <div class="border-l-4 border-green-500 pl-4">
            <h3 class="font-bold text-gray-900 mb-2">💡 새로운 수익원</h3>
            <p class="text-sm text-gray-700">
              • 기존 고객 외 신규 시장 개척<br/>
              • 패키지 상품으로 객단가 ↑<br/>
              • 장기 고객 관계 형성<br/>
              • 반복 구매 가능성 높음
            </p>
          </div>
          <div class="border-l-4 border-purple-500 pl-4">
            <h3 class="font-bold text-gray-900 mb-2">🤝 플랫폼 지원</h3>
            <p class="text-sm text-gray-700">
              • GCC 플랫폼에 파트너 노출<br/>
              • 통역·번역 지원<br/>
              • 결제·정산 시스템 제공<br/>
              • 고객 후기 관리 시스템
            </p>
          </div>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">📝 파트너 신청 방법</h2>
      <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-lg mb-8">
        <div class="space-y-4">
          <div class="flex items-start gap-3">
            <span class="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</span>
            <div>
              <h4 class="font-bold text-gray-900 mb-1">파트너십 신청서 제출</h4>
              <p class="text-sm text-gray-700">회사 소개, 제공 서비스, 협력 방안 등 기재</p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <span class="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</span>
            <div>
              <h4 class="font-bold text-gray-900 mb-1">서비스 검토 및 미팅</h4>
              <p class="text-sm text-gray-700">드림에이아이랩과 협력 가능성 검토 및 상담</p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <span class="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</span>
            <div>
              <h4 class="font-bold text-gray-900 mb-1">계약 체결 및 플랫폼 입점</h4>
              <p class="text-sm text-gray-700">파트너십 계약 후 GCC 플랫폼에 서비스 등록</p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <span class="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</span>
            <div>
              <h4 class="font-bold text-gray-900 mb-1">서비스 시작 및 고객 매칭</h4>
              <p class="text-sm text-gray-700">플랫폼을 통해 고객 자동 연결 및 비즈니스 시작</p>
            </div>
          </div>
        </div>

        <div class="mt-6 p-4 bg-blue-100 rounded-lg border-l-4 border-blue-600">
          <h4 class="font-bold text-blue-900 mb-2">📞 파트너십 문의</h4>
          <p class="text-sm text-blue-800">
            <strong>담당:</strong> 드림에이아이랩 파트너십팀<br/>
            <strong>이메일:</strong> contact@dreamailab.com<br/>
            <strong>웹사이트:</strong> dreamailab.com/services/marriage
          </p>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">🌟 비전과 기대 효과</h2>
      <div class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 shadow-lg mb-8">
        <p class="text-gray-700 mb-4">
          정해성 CTO는 "국제결혼은 여행, 숙박, 웨딩, 의료, 교육 등 
          <strong>20개 이상의 산업이 연결되는 거대한 생태계</strong>지만, 
          그동안 이를 통합적으로 서비스하는 플랫폼이 없었다"며 
          "GCC는 국제결혼 전후의 모든 니즈를 한 곳에서 해결할 수 있는 
          원스톱 플랫폼으로 성장할 것"이라고 밝혔다.
        </p>
        <p class="text-gray-700 mb-4">
          또한 "파트너사들은 기존에 접근하기 어려웠던 국제결혼 시장에 
          쉽게 진입할 수 있고, 플랫폼을 통해 자동으로 고객이 유입되어 
          <strong>광고비 부담 없이 안정적인 수익을 창출</strong>할 수 있다"며 
          "우리는 단순히 플랫폼을 제공하는 것이 아니라, 
          함께 성장하는 비즈니스 파트너를 찾고 있다"고 강조했다.
        </p>
        <div class="bg-purple-100 rounded-lg p-4 border-l-4 border-purple-600">
          <p class="text-purple-900 font-semibold">
            "GCC 플랫폼은 국제결혼 시장의 허브이자, 다양한 산업이 만나는 비즈니스 생태계입니다. 
            우리와 함께 새로운 시장을 개척하고, 다문화 가정의 행복한 정착을 지원하는 
            의미 있는 비즈니스를 만들어가실 파트너 여러분을 기다립니다."
          </p>
        </div>
      </div>

      <div class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-6 shadow-xl">
        <h2 class="text-2xl font-bold mb-3">🚀 지금 바로 파트너십 신청하세요!</h2>
        <p class="text-blue-100 mb-4">
          국제결혼 시장의 새로운 기회를 잡으세요. 
          여행, 항공, 호텔, 웨딩, 의료, 교육 등 모든 분야의 파트너를 환영합니다.
        </p>
        <p class="text-blue-100 text-sm">
          <strong class="text-white">연락처:</strong> contact@dreamailab.com
        </p>
      </div>
    `,
    category: 'company',
    date: '2025-11-14',
    image: '🤝',
    featured: true,
    author: '드림에이아이랩',
    tags: [
      '파트너십',
      '비즈니스파트너',
      'GCC',
      '글로벌커플케어',
      '여행사협력',
      '항공사제휴',
      '호텔파트너',
      '웨딩제휴',
      '의료파트너',
      '교육협력',
      '국제결혼',
      '다문화가정',
      '비즈니스생태계',
      '신규사업',
      '제휴모집'
    ]
  },
  {
    id: 66,
    title: '글로벌커플케어(GCC), 국내 최초 국제결혼 통합 플랫폼 서비스 시작 - 정보 비대칭 해소하는 게임체인저',
    excerpt: '드림에이아이랩이 국제결혼 시장의 패러다임을 바꿀 통합 플랫폼 GCC를 공개했다. 불투명했던 국제결혼 중개 시장에 투명성을 도입하고, 결혼 전 매칭부터 결혼 후 정착까지 전 과정을 AI 기반 디지털 케어로그로 관리하는 국내 최초 서비스다.',
    content: `
      <h1 class="text-3xl font-bold text-gray-900 mb-6">🌏 글로벌커플케어(GCC), 국제결혼의 게임체인저</h1>
      <p class="text-lg text-gray-600 mb-6">국내 최초 국제결혼 통합 플랫폼 - 정보 비대칭·불투명 중개 관행 타파</p>
      
      <div class="bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg p-6 mb-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">📢 서비스 개요</h2>
        <p class="text-gray-700 mb-4">
          드림에이아이랩(DAL, 대표 이지수, CTO 정해성)이 국제결혼 시장의 구조적 문제를 해결하는 
          <strong>통합 플랫폼 '글로벌커플케어(GCC, Global Couple Care)'</strong>를 공식 출시했다.
        </p>
        <p class="text-gray-700 mb-4">
          GCC는 베트남, 태국, 필리핀, 일본, 중국 등 전 세계 국제결혼 전문가를 한 곳에 모아 
          <strong>투명한 비교·선택</strong>이 가능하게 하고, 결혼 전 매칭부터 비자·법무 지원, 
          결혼 후 정착까지 <strong>전 생애주기를 AI 디지털 케어로그</strong>로 관리하는 
          국내 최초의 국제결혼 전문 플랫폼이다.
        </p>
        <div class="bg-rose-100 border-l-4 border-rose-600 p-4 mb-4">
          <p class="text-rose-900 font-semibold">
            "국제결혼은 인생의 중대한 결정인데, 그동안 정보는 불투명하고 중개 과정은 불안했습니다. 
            GCC는 엔카가 중고차 시장을, 배민이 음식 배달을, 야놀자가 숙박을 투명하게 만든 것처럼, 
            국제결혼 시장에 신뢰와 투명성을 가져올 것입니다."
          </p>
          <p class="text-rose-800 text-sm mt-2">- 정해성 CTO</p>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">🚨 기존 국제결혼 시장의 문제점</h2>
      <div class="bg-white rounded-xl p-6 shadow-lg mb-8 border-l-4 border-red-500">
        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div class="bg-red-50 rounded-lg p-4">
            <h3 class="text-lg font-bold text-red-700 mb-3">❌ 정보 비대칭</h3>
            <ul class="space-y-2 text-sm text-gray-700">
              <li>• 업체별 서비스 내용이 불명확</li>
              <li>• 실제 비용이 계약 후 추가됨</li>
              <li>• 성공/실패 사례 확인 불가</li>
              <li>• 전문가 자격·경력 검증 어려움</li>
            </ul>
          </div>
          <div class="bg-red-50 rounded-lg p-4">
            <h3 class="text-lg font-bold text-red-700 mb-3">❌ 불안한 중개 과정</h3>
            <ul class="space-y-2 text-sm text-gray-700">
              <li>• 중개 업체의 일방적 진행</li>
              <li>• 매칭 상대 정보의 진위 불확실</li>
              <li>• 계약 후 책임 소재 불분명</li>
              <li>• 법적 분쟁 시 대응 방법 없음</li>
            </ul>
          </div>
        </div>
        <div class="bg-red-50 rounded-lg p-4">
          <h3 class="text-lg font-bold text-red-700 mb-3">❌ 결혼 후 방치</h3>
          <ul class="space-y-2 text-sm text-gray-700">
            <li>• <strong>결혼 후 정착 지원 전무</strong> - 언어, 문화 적응, 자녀 양육, 가족 갈등 등 실제로 중요한 시기에 아무런 도움 없음</li>
            <li>• <strong>다문화 가정의 높은 이혼율</strong> - 정착 실패로 인한 가족 해체, 사회적 비용 증가</li>
            <li>• <strong>재결혼 시 똑같은 실패 반복</strong> - 이전 실패 원인을 기록·분석하는 시스템이 없어 같은 문제 재발</li>
          </ul>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">✨ GCC가 바꾸는 국제결혼 문화</h2>
      <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-lg mb-8">
        <h3 class="text-xl font-bold text-gray-900 mb-4">🔄 패러다임 전환</h3>
        
        <div class="space-y-6">
          <div class="bg-white rounded-lg p-5 shadow">
            <div class="flex items-start gap-3 mb-3">
              <span class="text-2xl">🔍</span>
              <div>
                <h4 class="font-bold text-gray-900 mb-2">1. 투명한 전문가 비교 플랫폼</h4>
                <div class="grid md:grid-cols-2 gap-3 text-sm">
                  <div>
                    <p class="text-red-600 font-semibold mb-1">Before: 불투명한 업체 선택</p>
                    <p class="text-gray-600">• 지인 소개로 업체 찾기<br/>• 광고만 보고 결정<br/>• 숨겨진 비용 발생</p>
                  </div>
                  <div>
                    <p class="text-green-600 font-semibold mb-1">After: 플랫폼에서 모두 비교</p>
                    <p class="text-gray-600">• 국내외 전문가 한눈에 비교<br/>• 실제 이용 후기·평점 공개<br/>• 명확한 비용·서비스 내역</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-lg p-5 shadow">
            <div class="flex items-start gap-3 mb-3">
              <span class="text-2xl">🤝</span>
              <div>
                <h4 class="font-bold text-gray-900 mb-2">2. 전문가 입장의 변화</h4>
                <div class="grid md:grid-cols-2 gap-3 text-sm">
                  <div>
                    <p class="text-red-600 font-semibold mb-1">Before: 영세한 중개 사업</p>
                    <p class="text-gray-600">• 고객 찾기가 가장 어려움<br/>• 광고비 부담으로 수익성 악화<br/>• 전문성보다 영업력이 중요</p>
                  </div>
                  <div>
                    <p class="text-green-600 font-semibold mb-1">After: 플랫폼에서 전문성으로 경쟁</p>
                    <p class="text-gray-600">• 고객이 플랫폼을 통해 찾아옴<br/>• 실력·후기로 선택받음<br/>• 광고비 없이 수익성 개선</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-lg p-5 shadow">
            <div class="flex items-start gap-3 mb-3">
              <span class="text-2xl">📊</span>
              <div>
                <h4 class="font-bold text-gray-900 mb-2">3. AI 디지털 케어로그 - 결혼 후까지 책임</h4>
                <div class="grid md:grid-cols-2 gap-3 text-sm">
                  <div>
                    <p class="text-red-600 font-semibold mb-1">Before: 결혼 후 방치</p>
                    <p class="text-gray-600">• 계약금 받으면 업체 연락두절<br/>• 정착 실패해도 책임 없음<br/>• 같은 실패 반복</p>
                  </div>
                  <div>
                    <p class="text-green-600 font-semibold mb-1">After: 평생 케어 파트너</p>
                    <p class="text-gray-600">• 언어 교육, 문화 적응, 자녀 양육 지원<br/>• 가족 갈등 조기 감지 및 상담<br/>• 정착 성공률 데이터로 검증</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-lg p-5 shadow">
            <div class="flex items-start gap-3 mb-3">
              <span class="text-2xl">🌐</span>
              <div>
                <h4 class="font-bold text-gray-900 mb-2">4. 비즈니스 생태계 확장</h4>
                <div class="bg-gradient-to-r from-purple-50 to-pink-50 rounded p-4 mt-3">
                  <p class="text-gray-700 mb-3">
                    <strong>여행사·항공사·호텔·웨딩·의료·교육</strong> 등 다양한 산업이 참여하는 생태계
                  </p>
                  <ul class="space-y-1 text-sm text-gray-600">
                    <li>• 여행사: 맞선 여행 패키지, 신혼여행 상품</li>
                    <li>• 항공사: 가족 초청 항공권, 정기 왕복 할인</li>
                    <li>• 호텔: 장기 체류 숙소, 가족 동반 패키지</li>
                    <li>• 웨딩: 국제 웨딩 플래닝, 양국 예식 코디</li>
                    <li>• 의료: 건강검진, 출산·육아 지원</li>
                    <li>• 교육: 한국어 교육, 자녀 이중언어 교육</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">🎯 GCC의 핵심 기능</h2>
      <div class="bg-white rounded-xl p-6 shadow-lg mb-8">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="border-l-4 border-blue-500 pl-4">
            <h3 class="font-bold text-gray-900 mb-2">🔍 투명한 전문가 비교</h3>
            <p class="text-sm text-gray-600">
              • 국내외 전문가 프로필·경력 공개<br/>
              • 실제 이용 후기·평점 시스템<br/>
              • 서비스 내용·비용 명확히 비교<br/>
              • 전문가별 성공 사례 통계 제공
            </p>
          </div>
          <div class="border-l-4 border-green-500 pl-4">
            <h3 class="font-bold text-gray-900 mb-2">📝 체계적인 매칭 프로세스</h3>
            <p class="text-sm text-gray-600">
              • AI 기반 성향·가치관 분석<br/>
              • 맞춤형 상대 추천 알고리즘<br/>
              • 영상 통화로 사전 만남 지원<br/>
              • 계약서 템플릿 및 법률 자문
            </p>
          </div>
          <div class="border-l-4 border-purple-500 pl-4">
            <h3 class="font-bold text-gray-900 mb-2">⚖️ 비자·법무 통합 지원</h3>
            <p class="text-sm text-gray-600">
              • 결혼 비자 신청 가이드<br/>
              • 서류 준비 체크리스트<br/>
              • 법무사·변호사 연결<br/>
              • 비자 진행 상황 실시간 추적
            </p>
          </div>
          <div class="border-l-4 border-rose-500 pl-4">
            <h3 class="font-bold text-gray-900 mb-2">🏠 결혼 후 정착 지원</h3>
            <p class="text-sm text-gray-600">
              • 한국어 교육 프로그램 연결<br/>
              • 문화 적응 가이드·커뮤니티<br/>
              • 자녀 양육·교육 정보 제공<br/>
              • 다문화 가정 정부 지원 안내
            </p>
          </div>
          <div class="border-l-4 border-amber-500 pl-4">
            <h3 class="font-bold text-gray-900 mb-2">📊 AI 디지털 케어로그</h3>
            <p class="text-sm text-gray-600">
              • 전체 과정 디지털 기록 관리<br/>
              • 가족 관계 변화 추적 분석<br/>
              • 문제 조기 감지 및 알림<br/>
              • 맞춤형 개선 가이드 제공
            </p>
          </div>
          <div class="border-l-4 border-cyan-500 pl-4">
            <h3 class="font-bold text-gray-900 mb-2">🔒 신뢰·보안 시스템</h3>
            <p class="text-sm text-gray-600">
              • 전문가 신원·자격 검증<br/>
              • 에스크로 결제 시스템<br/>
              • 분쟁 조정 및 피해 보상<br/>
              • 개인정보 암호화 보호
            </p>
          </div>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">📈 시장 전망 및 성장 가능성</h2>
      <div class="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 shadow-lg mb-8">
        <h3 class="text-xl font-bold text-gray-900 mb-4">왜 지금, 왜 성공할 수밖에 없는가</h3>
        
        <div class="space-y-4">
          <div class="bg-white rounded-lg p-4">
            <h4 class="font-bold text-emerald-700 mb-2">1️⃣ 구조적 수요 존재</h4>
            <p class="text-gray-700 text-sm">
              • 국내 결혼 시장은 남녀 비율 불균형, 결혼 기피 현상으로 위축<br/>
              • 농촌·중소도시 미혼 남성의 국제결혼은 선택이 아닌 필수<br/>
              • 연간 국제결혼 2만 건 이상, 누적 다문화 가정 40만 이상
            </p>
          </div>

          <div class="bg-white rounded-lg p-4">
            <h4 class="font-bold text-emerald-700 mb-2">2️⃣ 정보 비대칭이 극심한 시장</h4>
            <p class="text-gray-700 text-sm">
              • 기존 중개 업체는 정보 독점으로 이익을 얻는 구조<br/>
              • 소비자는 선택권이 없고, 전문가는 고객 확보가 어려움<br/>
              • 플랫폼이 없어서 못 하는 것이지, 니즈는 이미 검증됨
            </p>
          </div>

          <div class="bg-white rounded-lg p-4">
            <h4 class="font-bold text-emerald-700 mb-2">3️⃣ 플랫폼 경제의 법칙</h4>
            <p class="text-gray-700 text-sm">
              • 엔카(중고차), 배민(음식), 야놀자(숙박)처럼 정보 비대칭 시장은 플랫폼으로 해결<br/>
              • 첫 통합 플랫폼이 시장을 선점하면 네트워크 효과로 독점 가능<br/>
              • GCC는 국내 최초이자 유일한 국제결혼 통합 플랫폼
            </p>
          </div>

          <div class="bg-white rounded-lg p-4">
            <h4 class="font-bold text-emerald-700 mb-2">4️⃣ 결혼 후 케어가 진짜 가치</h4>
            <p class="text-gray-700 text-sm">
              • 기존 업체는 결혼 성사까지만 관심, 이후 높은 이혼율·정착 실패<br/>
              • GCC는 AI 디지털 케어로그로 평생 관계 유지 → 구독 모델 가능<br/>
              • 정착 성공 데이터 축적 → 서비스 품질 지속 개선 → 신뢰도 ↑
            </p>
          </div>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">🌟 사회적 가치와 비전</h2>
      <div class="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-6 shadow-lg mb-8">
        <div class="space-y-4">
          <div class="flex items-start gap-3">
            <span class="text-2xl">💡</span>
            <div>
              <h3 class="font-bold text-gray-900 mb-2">정보 비대칭 해소로 공정한 시장 형성</h3>
              <p class="text-gray-700 text-sm">
                불투명했던 국제결혼 시장에 투명성을 도입해 소비자와 전문가 모두에게 공정한 거래 환경 제공
              </p>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <span class="text-2xl">🛡️</span>
            <div>
              <h3 class="font-bold text-gray-900 mb-2">사기·피해 예방</h3>
              <p class="text-gray-700 text-sm">
                전문가 검증, 계약서 표준화, 분쟁 조정 시스템으로 국제결혼 사기 및 피해 사례를 사전에 차단
              </p>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <span class="text-2xl">🏡</span>
            <div>
              <h3 class="font-bold text-gray-900 mb-2">다문화 가정 정착률 향상</h3>
              <p class="text-gray-700 text-sm">
                결혼 후 지속적인 언어·문화 교육, 양육 지원으로 다문화 가정의 안정적 정착과 사회 통합 기여
              </p>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <span class="text-2xl">🌍</span>
            <div>
              <h3 class="font-bold text-gray-900 mb-2">글로벌 문화 교류 활성화</h3>
              <p class="text-gray-700 text-sm">
                국가 간 가족 형성을 통해 자연스러운 문화 교류와 상호 이해 증진, 국제 협력 강화
              </p>
            </div>
          </div>
        </div>

        <div class="mt-6 p-4 bg-purple-100 rounded-lg border-l-4 border-purple-600">
          <p class="text-purple-900 font-semibold">
            "GCC는 단순한 중개 플랫폼이 아닙니다. 국제결혼을 선택한 모든 가족이 행복하게 정착하고, 
            서로 다른 문화가 조화를 이루는 사회를 만드는 것이 우리의 비전입니다."
          </p>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">📞 서비스 이용 안내</h2>
      <div class="bg-white rounded-xl p-6 shadow-lg mb-8 border border-gray-200">
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h3 class="font-bold text-gray-900 mb-3">👥 결혼 희망자</h3>
            <ul class="space-y-2 text-sm text-gray-700">
              <li>• GCC 플랫폼에 무료 회원가입</li>
              <li>• 전문가 프로필·후기 자유롭게 비교</li>
              <li>• 원하는 전문가 선택 후 상담 신청</li>
              <li>• 매칭·비자·정착까지 통합 지원</li>
              <li>• AI 케어로그로 평생 관리</li>
            </ul>
          </div>
          <div>
            <h3 class="font-bold text-gray-900 mb-3">🏢 전문가 참여</h3>
            <ul class="space-y-2 text-sm text-gray-700">
              <li>• 국내외 중개업체·개인 컨설턴트 모집</li>
              <li>• 전문가 프로필 등록 (경력·자격 검증)</li>
              <li>• 고객이 플랫폼에서 직접 찾아옴</li>
              <li>• 실력과 후기로 선택받는 구조</li>
              <li>• 수수료 기반 수익 모델</li>
            </ul>
          </div>
        </div>

        <div class="mt-6 pt-6 border-t border-gray-200">
          <h3 class="font-bold text-gray-900 mb-3">🤝 비즈니스 파트너십</h3>
          <p class="text-sm text-gray-700 mb-3">
            여행사, 항공사, 호텔, 웨딩, 의료, 교육, 금융, 법률, 부동산 등 국제결혼 관련 모든 산업 분야의 
            파트너십을 환영합니다.
          </p>
          <div class="bg-blue-50 rounded-lg p-4">
            <p class="text-sm text-gray-700">
              <strong>문의:</strong> 드림에이아이랩<br/>
              <strong>이메일:</strong> contact@dreamailab.com<br/>
              <strong>웹사이트:</strong> dreamailab.com/services/marriage
            </p>
          </div>
        </div>
      </div>

      <div class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-6 shadow-xl">
        <h2 class="text-2xl font-bold mb-3">🚀 국제결혼의 새로운 시대</h2>
        <p class="text-blue-100 mb-4">
          GCC는 국제결혼 시장에 투명성·신뢰·책임을 도입하는 게임체인저입니다. 
          결혼 전 매칭부터 결혼 후 정착까지, 모든 과정을 디지털로 기록하고 AI로 분석하여 
          가족의 행복을 지속적으로 지원합니다.
        </p>
        <p class="text-blue-100 text-sm">
          엔카가 중고차를, 배민이 음식 배달을, 야놀자가 숙박을 바꾼 것처럼, 
          <strong class="text-white">GCC는 국제결혼 문화를 바꿉니다.</strong>
        </p>
      </div>
    `,
    category: 'company',
    date: '2025-11-14',
    image: '🌏',
    featured: true,
    author: '드림에이아이랩',
    tags: [
      '국제결혼',
      '글로벌커플케어',
      'GCC',
      '국제결혼플랫폼',
      '베트남결혼',
      '태국결혼',
      '필리핀결혼',
      '일본결혼',
      '중국결혼',
      '결혼중개',
      '다문화가정',
      'AI케어로그',
      '디지털케어로그',
      '정보비대칭',
      '플랫폼경제',
      '게임체인저',
      '비자지원',
      '정착지원',
      '여행사협력',
      '항공사제휴',
      '웨딩파트너십'
    ]
  },
  {
    id: 65,
    title: '자람이, AI 건강관리 기능 추가 예정 - 약물 상호작용·영양·체중 관리까지 통합 케어',
    excerpt: '드림에이아이랩의 발달장애 AI 플랫폼 자람이가 약물 상호작용 분석, 영양 불균형 감지, 체중 관리 등 건강관리 기능을 추가합니다. 부모가 집에서 놓치기 쉬운 건강 문제를 AI가 조기에 발견하고 실천 가능한 가이드를 제공합니다.',
    content: `
      <h1 class="text-3xl font-bold text-gray-900 mb-6">💊 자람이, AI 건강관리 기능 추가 예정</h1>
      <p class="text-lg text-gray-600 mb-6">약물 상호작용·영양·체중 관리까지 - 부모가 몫랐던 건강 위험을 AI가 먼저 감지</p>
      
      <div class="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-6 mb-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">📢 기능 개요</h2>
        <p class="text-gray-700 mb-4">
          드림에이아이랩(DAL, 대표 이지수, CTO 정해성)의 발달장애 AI 디지털케어로그 플랫폼 <strong>'자람이'</strong>가 
          치료·학습 기록 관리를 넘어 <strong>약물 관리, 영양 균형, 체중 조절</strong> 등 
          종합적인 건강관리 기능을 추가할 예정입니다.
        </p>
        <p class="text-gray-700 mb-4">
          발달장애 아동은 일반 아동과 달리 <strong>정신과 약물 복용, 식습관 조절 어려움, 영양 불균형, 
          과체중 문제</strong> 등 복합적인 건강 이슈를 겪지만, 부모가 전문 지식 없이 이를 관리하기는 매우 어렵습니다. 
          자람이는 AI 분석을 통해 이러한 건강 위험을 조기에 감지하고, 
          <strong>구체적이고 실천 가능한 가이드</strong>를 제공합니다.
        </p>
        <div class="bg-cyan-100 border-l-4 border-cyan-600 p-4 mb-4">
          <p class="text-cyan-900 font-semibold">
            "치료와 학습만으로는 부족합니다. 발달장애 아동의 약물 부작용, 영양 문제, 건강 변화를 
            일상에서 관찰하고 대응하는 것이 삶의 질을 좌우합니다. AI가 부모의 눈이 되어 
            놓치기 쉬운 건강 신호를 먼저 포착합니다."
          </p>
          <p class="text-cyan-800 text-sm mt-2">- 정해성 CTO</p>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">💊 1. 약물 상호작용 관리 - 위험한 조합 자동 감지</h2>
      <div class="bg-white rounded-xl p-6 shadow-lg mb-8 border-l-4 border-red-500">
        <h3 class="text-xl font-bold text-gray-900 mb-4">실제 사례: 정신과 약 + 감기약 복용</h3>
        <p class="text-gray-700 mb-4">
          자폐·ADHD 아동이 정신과 약을 복용 중인 상태에서 감기에 걸려 감기약을 처방받았을 때, 
          일반 부모는 <strong>어떤 약이 함께 먹으면 위험한지, 왜 위험한지, 어떻게 조정해야 하는지</strong> 알기 어렵습니다.
        </p>
        
        <div class="bg-red-50 rounded-lg p-4 mb-4">
          <h4 class="font-bold text-red-700 mb-2">⚠️ 위험 조합 사례</h4>
          <p class="text-sm text-gray-700 mb-2">
            <strong>현재 복용:</strong> 콘서타(ADHD 약, 중추신경 흥분제) + 라투다(항정신병제)
          </p>
          <p class="text-sm text-gray-700 mb-2">
            <strong>감기약 처방:</strong> 슈다페드(코막힘 약) + 페니라민(항히스타민) + 해열제 등
          </p>
          <div class="mt-3 p-3 bg-red-100 rounded">
            <p class="text-red-800 font-bold">🚨 위험: 콘서타 + 슈다페드 동시 복용</p>
            <p class="text-sm text-red-700 mt-1">
              → 둘 다 중추신경 흥분제<br/>
              → 심박수↑, 혈압↑, 흥분/초조/과민 증가<br/>
              → 자폐 아동의 경우 행동 폭발(공격성) 가능성 ↑
            </p>
          </div>
        </div>

        <div class="bg-green-50 rounded-lg p-4 mb-4">
          <h4 class="font-bold text-green-700 mb-2">✅ AI 추천 해결책</h4>
          <div class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead class="bg-green-100">
                <tr>
                  <th class="px-3 py-2 text-left">시간</th>
                  <th class="px-3 py-2 text-left">복용 약</th>
                  <th class="px-3 py-2 text-left">이유</th>
                </tr>
              </thead>
              <tbody class="divide-y">
                <tr>
                  <td class="px-3 py-2 font-semibold">아침</td>
                  <td class="px-3 py-2">콘서타만</td>
                  <td class="px-3 py-2 text-gray-600">집중력 유지</td>
                </tr>
                <tr class="bg-red-50">
                  <td class="px-3 py-2 font-semibold">점심/저녁</td>
                  <td class="px-3 py-2"><strong class="text-red-600">슈다페드 생략</strong></td>
                  <td class="px-3 py-2 text-red-700">이 약만 빼면 안전</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-semibold">취침 전</td>
                  <td class="px-3 py-2">라투다 + 페니라민</td>
                  <td class="px-3 py-2 text-gray-600">졸림이 수면에 도움</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="text-sm text-gray-700 mt-3">
            <strong>대체 방법:</strong> 슈다페드 → 시노나즈 스프레이(옥시메타졸린)로 교체<br/>
            → 신경 자극 없이 코막힘 해결 가능
          </p>
        </div>

        <div class="bg-blue-50 rounded-lg p-4">
          <h4 class="font-bold text-blue-700 mb-2">🤖 AI 가이드의 차별점</h4>
          <ul class="text-sm text-gray-700 space-y-1">
            <li>• <strong>단순 경고가 아닌 상세 설명:</strong> 왜 위험한지, 어떤 부작용이 발생하는지</li>
            <li>• <strong>복용 시간 최적화:</strong> 약물 간 상호작용 최소화하는 시간대 제시</li>
            <li>• <strong>대체 약물 추천:</strong> 같은 증상을 치료하되 안전한 다른 성분 제안</li>
            <li>• <strong>모니터링 항목 안내:</strong> 심박수, 행동 변화 등 관찰해야 할 증상</li>
          </ul>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">🥗 2. 영양·체중 관리 - 일상 속 건강 변화 추적</h2>
      <div class="bg-white rounded-xl p-6 shadow-lg mb-8 border-l-4 border-yellow-500">
        <h3 class="text-xl font-bold text-gray-900 mb-4">발달장애 아동의 흔한 건강 문제</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div class="bg-yellow-50 rounded-lg p-4">
            <h4 class="font-bold text-yellow-700 mb-2">⚠️ 흔한 문제</h4>
            <ul class="text-sm text-gray-700 space-y-2">
              <li>• <strong>편식·식습관 조절 어려움</strong><br/>
              → 같은 음식만 반복, 특정 식감 거부</li>
              <li>• <strong>영양 불균형</strong><br/>
              → 단백질·채소 부족, 탄수화물 과다</li>
              <li>• <strong>과체중·비만</strong><br/>
              → 약물 부작용(식욕 증가), 활동량 부족</li>
              <li>• <strong>부모의 관리 어려움</strong><br/>
              → 언제부터 문제인지, 어떻게 해야 할지 모름</li>
            </ul>
          </div>

          <div class="bg-green-50 rounded-lg p-4">
            <h4 class="font-bold text-green-700 mb-2">✅ AI 건강 모니터링</h4>
            <ul class="text-sm text-gray-700 space-y-2">
              <li>• <strong>체중·식사량 실시간 추적</strong><br/>
              → "최근 2주 체중 3kg↑" 자동 알림</li>
              <li>• <strong>영양소 불균형 조기 경고</strong><br/>
              → "단백질 섭취 부족, 탄수화물 과다"</li>
              <li>• <strong>맞춤형 식단 가이드</strong><br/>
              → 아이가 먹을 수 있는 대체 음식 추천</li>
              <li>• <strong>활동량 연계 분석</strong><br/>
              → 센터·학교 활동 데이터와 통합</li>
            </ul>
          </div>
        </div>

        <div class="bg-blue-50 rounded-lg p-4">
          <h4 class="font-bold text-blue-700 mb-3">🤖 AI 케어 플랜 예시</h4>
          <div class="space-y-3 text-sm text-gray-700">
            <div class="bg-white rounded p-3 border-l-4 border-blue-500">
              <p class="font-bold text-blue-700 mb-1">🚨 변화 감지</p>
              <p>"최근 2주간 체중 3kg 증가 (이전 3개월 평균 대비 급증)"</p>
            </div>
            <div class="bg-white rounded p-3 border-l-4 border-yellow-500">
              <p class="font-bold text-yellow-700 mb-1">🔍 원인 분석</p>
              <p>"약물 변경 후 식욕 증가 + 간식 시간 불규칙 + 신체 활동 감소"</p>
            </div>
            <div class="bg-white rounded p-3 border-l-4 border-green-500">
              <p class="font-bold text-green-700 mb-1">✅ 실천 가이드</p>
              <ul class="space-y-1 mt-2">
                <li>• 간식 시간을 오후 3시로 고정 (일정 루틴화)</li>
                <li>• 고칼로리 간식 → 저칼로리 대체 (예: 과자 → 과일)</li>
                <li>• 주 3회 산책 30분 추가 (센터 활동 외 추가 운동)</li>
                <li>• 주치의 상담 시 약물 조정 논의 권장</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">🎯 기대 효과 및 확장 계획</h2>
      <div class="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 shadow-lg mb-8">
        <h3 class="text-xl font-bold text-gray-900 mb-4">부모·전문가 협력 강화</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div class="bg-white rounded-lg p-4 text-center">
            <div class="text-3xl mb-2">👨‍👩‍👧</div>
            <p class="font-bold text-gray-900 mb-1">부모</p>
            <p class="text-sm text-gray-600">집에서 일상 관찰<br/>AI 가이드 실천</p>
          </div>
          <div class="bg-white rounded-lg p-4 text-center">
            <div class="text-3xl mb-2">👨‍⚕️</div>
            <p class="font-bold text-gray-900 mb-1">의사</p>
            <p class="text-sm text-gray-600">통합 데이터 기반<br/>약물 조정·처방</p>
          </div>
          <div class="bg-white rounded-lg p-4 text-center">
            <div class="text-3xl mb-2">🧑‍🏫</div>
            <p class="font-bold text-gray-900 mb-1">치료사·교사</p>
            <p class="text-sm text-gray-600">건강 상태 고려한<br/>치료·학습 계획</p>
          </div>
        </div>

        <div class="bg-indigo-100 rounded-lg p-4 mb-4">
          <h4 class="font-bold text-indigo-900 mb-2">💡 핵심 가치</h4>
          <ul class="text-sm text-gray-700 space-y-1">
            <li>• <strong>조기 발견:</strong> 부모가 모르는 건강 변화를 AI가 먼저 감지</li>
            <li>• <strong>실천 가능:</strong> 복잡한 의학 지식을 일상 행동으로 번역</li>
            <li>• <strong>통합 관리:</strong> 약물·영양·체중·활동을 하나의 플랫폼에서</li>
            <li>• <strong>전문가 연계:</strong> 필요 시 의사·영양사 상담 자동 권장</li>
          </ul>
        </div>

        <div class="bg-purple-100 rounded-lg p-4">
          <h4 class="font-bold text-purple-900 mb-2">� 자람이 기존 기능과의 연계</h4>
          <ul class="text-sm text-gray-700 space-y-2">
            <li>• <strong>집중치료 모드:</strong> 약물 변경 시 자동으로 집중 추적 모드 활성화 → 부작용·행동 변화를 2주간 집중 모니터링</li>
            <li>• <strong>약물 추적 기록:</strong> 기존 약물 + 새 처방약 → AI가 위험 조합 자동 감지 + 복용 시간 최적화</li>
          </ul>
        </div>

        <div class="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg p-4">
          <h4 class="font-bold text-purple-900 mb-2">🚀 AI 디지털케어로그 기술의 확장</h4>
          <p class="text-sm text-gray-700 mb-3">
            이 건강관리 기술은 <strong>자람이</strong>를 넘어 다양한 도메인으로 확장됩니다:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
            <div class="bg-white rounded-lg p-3 text-center border border-blue-200">
              <div class="text-2xl mb-1">💊</div>
              <p class="font-bold text-gray-900 text-sm mb-1">토탈케어로그</p>
              <p class="text-xs text-gray-600">창고형 약국 기능 - 다제약물 상호작용 관리</p>
            </div>
            <div class="bg-white rounded-lg p-3 text-center border border-purple-200">
              <div class="text-2xl mb-1">🎗️</div>
              <p class="font-bold text-gray-900 text-sm mb-1">항암환자 관리</p>
              <p class="text-xs text-gray-600">항암제 부작용 추적, 영양·체중 집중 관리</p>
            </div>
            <div class="bg-white rounded-lg p-3 text-center border border-green-200">
              <div class="text-2xl mb-1">👴</div>
              <p class="font-bold text-gray-900 text-sm mb-1">시니어 케어</p>
              <p class="text-xs text-gray-600">만성질환 약물 관리, 복약 순응도 향상</p>
            </div>
          </div>
          <p class="text-xs text-gray-700 text-center bg-white rounded p-2">
            <strong>AI 디지털케어로그 기술</strong>은 하나의 표준 데이터 구조를 기반으로 
            발달장애·교육·시니어·만성질환·항암 등 다양한 도메인에 응용됩니다.
          </p>
        </div>
      </div>

      <div class="bg-cyan-50 rounded-lg p-6 border-l-4 border-cyan-500 mb-6">
        <h3 class="text-xl font-bold text-cyan-900 mb-3">📅 출시 일정</h3>
        <ul class="text-sm text-gray-700 space-y-2">
          <li>• <strong>2025년 Q4:</strong> 약물 상호작용 분석 기능 베타 테스트</li>
          <li>• <strong>2026년 Q1:</strong> 영양·체중 관리 기능 추가</li>
          <li>• <strong>2026년 Q2:</strong> 자람이 집중치료·약물추적 모드에 통합 출시</li>
          <li>• <strong>2026년 하반기:</strong> 토탈케어로그·항암환자·시니어 케어로 확장</li>
        </ul>
      </div>

      <div class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg p-6 text-center">
        <p class="text-lg font-semibold mb-2">
          "누구나 필요한 의료·케어 혜택을 누릴 수 있는 토탈케어 플랫폼"
        </p>
        <p class="text-sm opacity-90">
          AI 디지털케어로그 기술로 실현하는 드림에이아이랩의 비전
        </p>
      </div>

      <div class="mt-8 text-center text-gray-600">
        <p class="mb-2">자세한 내용은 드림에이아이랩 홈페이지를 참조하세요.</p>
        <a href="/services/jarame#healthmanagement" class="text-cyan-600 hover:text-cyan-700 font-semibold">
          자람이 건강관리 기능 자세히 보기 →
        </a>
      </div>
    `,
    category: 'updates',
    date: '2025-11-12',
    image: '💊',
    featured: true,
    author: '드림에이아이랩',
    tags: ['자람이', 'AI', '건강관리', '약물관리', '영양관리', '발달장애', '디지털케어로그']
  },
  {
    id: 64,
    title: '드림에이아이랩, 2026년 에듀케어로그 파트너십 오픈 발표 - 학교·지자체·에듀테크 협력 모델 공개',
    excerpt: '드림에이아이랩이 AI 디지털케어로그 기술을 교육 분야에 응용한 EduCareLog의 2026년 파트너십 오픈을 공식 발표했습니다. 학교·지자체 컨소시엄, 교육 스타트업, 출판·콘텐츠사 등 다양한 교육 주체와의 협력을 통해 대한민국 개별화교육 전환을 주도할 계획입니다.',
    content: `
      <h1 class="text-3xl font-bold text-gray-900 mb-6">🎓 2026년 에듀케어로그 파트너십 오픈 발표</h1>
      <p class="text-lg text-gray-600 mb-6">AI 디지털케어로그 기술의 교육 분야 확장 - 개별화교육 생태계 구축</p>
      
      <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">📢 발표 개요</h2>
        <p class="text-gray-700 mb-4">
          드림에이아이랩(DAL, 대표 이지수, CTO 정해성)은 2025년 11월 12일, 의료·돌봄 분야에서 검증된 
          <strong>AI 디지털케어로그 기술을 교육 도메인으로 확장</strong>한 EduCareLog(에듀케어로그)의 
          2026년 파트너십 오픈을 공식 발표했습니다.
        </p>
        <p class="text-gray-700 mb-4">
          EduCareLog는 학습·행동·평가 데이터를 표준 스키마로 수집하고, AI가 수준 진단·맞춤 경로·콘텐츠 추천·
          시험 전 집중 루틴을 자동화하는 개별화 학습 플랫폼입니다. 
          기존 주입식/일률적 교육에서 <strong>개별 학습자 데이터 기반의 적응형 교육</strong>으로 패러다임을 전환합니다.
        </p>
        <div class="bg-blue-100 border-l-4 border-blue-600 p-4 mb-4">
          <p class="text-blue-900 font-semibold">
            "우리는 교육 '서비스 제공자'가 아닙니다. 학교·학원·지자체·에듀테크가 즉시 임베드할 수 있는 
            데이터 표준화 + AI 분석 + 실행 자동화 엔진을 제공합니다."
          </p>
          <p class="text-blue-800 text-sm mt-2">- 정해성 CTO</p>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">🤝 4대 파트너십 모델</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div class="bg-white rounded-xl p-6 shadow-lg border-t-4 border-blue-500">
          <div class="text-3xl mb-3">🏫</div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">학교·지자체 컨소시엄</h3>
          <p class="text-gray-600 mb-4">
            지역 단위 개별화교육 전환을 위한 시범학교 운영 및 교육청 사업 연계
          </p>
          <ul class="text-sm text-gray-600 space-y-2">
            <li>✓ 시범학교 지정 및 파일럿 프로그램 운영</li>
            <li>✓ 교육청 예산 사업 공동 제안</li>
            <li>✓ 교사 연수 및 학습 분석 워크숍</li>
            <li>✓ 기초학력 향상 프로젝트 협력</li>
          </ul>
          <div class="mt-4 bg-blue-50 rounded p-3">
            <p class="text-sm text-blue-800 font-semibold">목표: 2026년 시범학교 50개 확보</p>
          </div>
        </div>

        <div class="bg-white rounded-xl p-6 shadow-lg border-t-4 border-green-500">
          <div class="text-3xl mb-3">🧩</div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">교육 스타트업</h3>
          <p class="text-gray-600 mb-4">
            기존 LMS/문제은행/튜터링 서비스에 케어로그 엔진 임베드
          </p>
          <ul class="text-sm text-gray-600 space-y-2">
            <li>✓ API 기반 기술 통합 (RESTful/GraphQL)</li>
            <li>✓ 학습 데이터 표준화 지원 (Ed-Fi/xAPI)</li>
            <li>✓ AI 분석 엔진 제공 (오개념 탐지, 경로 생성)</li>
            <li>✓ 화이트라벨 솔루션 제공</li>
          </ul>
          <div class="mt-4 bg-green-50 rounded p-3">
            <p class="text-sm text-green-800 font-semibold">목표: 2026년 에듀테크 파트너 20개사</p>
          </div>
        </div>

        <div class="bg-white rounded-xl p-6 shadow-lg border-t-4 border-purple-500">
          <div class="text-3xl mb-3">📚</div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">출판·콘텐츠사</h3>
          <p class="text-gray-600 mb-4">
            교육과정 맵핑·적응형 퀴즈·난이도 루핑 자동화
          </p>
          <ul class="text-sm text-gray-600 space-y-2">
            <li>✓ 교육과정 성취기준 자동 매핑</li>
            <li>✓ 학습자별 맞춤 문제 자동 생성</li>
            <li>✓ 콘텐츠 난이도 적응형 조정</li>
            <li>✓ EBS 콘텐츠 연계 지원</li>
          </ul>
          <div class="mt-4 bg-purple-50 rounded p-3">
            <p class="text-sm text-purple-800 font-semibold">목표: 주요 교육 출판사 3개사 협력</p>
          </div>
        </div>

        <div class="bg-white rounded-xl p-6 shadow-lg border-t-4 border-orange-500">
          <div class="text-3xl mb-3">🛒</div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">플랫폼/리셀러</h3>
          <p class="text-gray-600 mb-4">
            화이트라벨·API 기반 B2B 유통/총판 모델
          </p>
          <ul class="text-sm text-gray-600 space-y-2">
            <li>✓ 지역별 독점 리셀러 계약</li>
            <li>✓ 커스터마이징 지원 (브랜딩, UI/UX)</li>
            <li>✓ 기술 지원 및 교육 프로그램</li>
            <li>✓ 수익 배분 모델 (매출 연동형)</li>
          </ul>
          <div class="mt-4 bg-orange-50 rounded p-3">
            <p class="text-sm text-orange-800 font-semibold">목표: 전국 광역시도별 리셀러 확보</p>
          </div>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">💡 EduCareLog 핵심 기술</h2>
      <div class="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 mb-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 class="font-bold text-gray-900 mb-2">📊 학습 데이터 표준화</h3>
            <p class="text-sm text-gray-600">
              Ed-Fi, xAPI 등 교육 표준 준수로 기존 시스템과 원활한 통합
            </p>
          </div>
          <div>
            <h3 class="font-bold text-gray-900 mb-2">🧠 AI 개인화 분석</h3>
            <p class="text-sm text-gray-600">
              오개념 탐지, 학습 패턴 분석, 적응형 경로 생성
            </p>
          </div>
          <div>
            <h3 class="font-bold text-gray-900 mb-2">🔗 통합 생태계</h3>
            <p class="text-sm text-gray-600">
              학교-학원-가정을 잇는 연속적 학습 데이터 플랫폼
            </p>
          </div>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">📅 파트너십 로드맵</h2>
      <div class="space-y-4 mb-8">
        <div class="bg-white rounded-lg p-4 shadow border-l-4 border-blue-500">
          <div class="flex items-start gap-4">
            <div class="bg-blue-100 text-blue-600 px-3 py-1 rounded font-bold text-sm">2025.Q4</div>
            <div>
              <h3 class="font-bold text-gray-900 mb-1">파트너십 사전 상담 개시</h3>
              <p class="text-sm text-gray-600">학교, 교육청, 에듀테크 사전 미팅 및 요구사항 수집</p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg p-4 shadow border-l-4 border-green-500">
          <div class="flex items-start gap-4">
            <div class="bg-green-100 text-green-600 px-3 py-1 rounded font-bold text-sm">2026.Q1</div>
            <div>
              <h3 class="font-bold text-gray-900 mb-1">시범학교 1차 선정 및 파일럿 시작</h3>
              <p class="text-sm text-gray-600">10개 시범학교 대상 3개월 파일럿 프로그램 운영</p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg p-4 shadow border-l-4 border-purple-500">
          <div class="flex items-start gap-4">
            <div class="bg-purple-100 text-purple-600 px-3 py-1 rounded font-bold text-sm">2026.Q2</div>
            <div>
              <h3 class="font-bold text-gray-900 mb-1">에듀테크 API 파트너십 본격화</h3>
              <p class="text-sm text-gray-600">기존 LMS/콘텐츠 플랫폼과 기술 통합 프로젝트 진행</p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg p-4 shadow border-l-4 border-orange-500">
          <div class="flex items-start gap-4">
            <div class="bg-orange-100 text-orange-600 px-3 py-1 rounded font-bold text-sm">2026.H2</div>
            <div>
              <h3 class="font-bold text-gray-900 mb-1">전국 확대 및 생태계 구축</h3>
              <p class="text-sm text-gray-600">50개 시범학교, 20개 파트너사로 확대 및 성과 발표</p>
            </div>
          </div>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">🎯 기대 효과</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
          <h3 class="text-lg font-bold text-gray-900 mb-3">📈 교육 현장</h3>
          <ul class="space-y-2 text-sm text-gray-600">
            <li>✓ 개별화교육 실현으로 기초학력 향상</li>
            <li>✓ 교사 업무 부담 경감 (자동화된 분석·피드백)</li>
            <li>✓ 학습 격차 해소 및 교육 형평성 제고</li>
            <li>✓ 데이터 기반 교육 의사결정</li>
          </ul>
        </div>

        <div class="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-6">
          <h3 class="text-lg font-bold text-gray-900 mb-3">💼 파트너사</h3>
          <ul class="space-y-2 text-sm text-gray-600">
            <li>✓ 검증된 AI 기술로 제품 경쟁력 강화</li>
            <li>✓ 개발 비용 절감 (기술 임베드)</li>
            <li>✓ 교육 데이터 표준화로 확장성 확보</li>
            <li>✓ 공교육 시장 진출 기회 확대</li>
          </ul>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">📞 파트너십 문의</h2>
      <div class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-8 text-center">
        <p class="text-xl font-bold mb-4">2026년 개별화교육 혁신을 함께 만들어갈 파트너를 기다립니다</p>
        <div class="space-y-2 mb-6">
          <p class="text-blue-100">이메일: contact@dreamailab.com</p>
        </div>
        <div class="inline-flex gap-4">
          <a href="/services/educarelog" class="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            서비스 상세보기
          </a>
          <a href="/technology/educarelog" class="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
            기술백서 보기
          </a>
          <a href="/contact?type=partner" class="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
            파트너십 문의
          </a>
        </div>
      </div>

      <div class="bg-gray-50 rounded-lg p-6 mt-8">
        <h3 class="font-bold text-gray-900 mb-3">드림에이아이랩 소개</h3>
        <p class="text-gray-600 text-sm leading-relaxed">
          드림에이아이랩(Dream AI Lab)은 AI 디지털케어로그 기술을 기반으로 의료·돌봄·교육 분야의 
          개인화 서비스를 제공하는 헬스케어 AI 전문기업입니다. 발달장애 치료 플랫폼 '자람이', 
          시니어케어 플랫폼 '시니어앤라이프' 등을 운영하며, 현장에서 검증된 기술력을 바탕으로 
          교육 분야로 사업 영역을 확장하고 있습니다.
        </p>
      </div>
    `,
    category: 'company',
    date: '2025-11-12',
    image: '🤝',
    featured: true,
    author: '드림에이아이랩',
    tags: ['에듀케어로그', 'EduCareLog', '파트너십', '개별화교육', '2026', '학교', '지자체', '에듀테크', 'AI교육', '교육혁신']
  },
  {
    id: 63,
    title: '에듀케어로그 적용 사례: 특수교육에서 일반교육으로의 전환 - 실제 데이터로 검증된 개별화 학습의 효과',
    excerpt: '드림에이아이랩의 AI 디지털케어로그 기술이 특수교육 현장에서 검증을 거쳐 일반교육으로 확장되고 있습니다. 발달장애 치료 플랫폼 자람이에서 축적된 5년간의 데이터와 노하우를 바탕으로, 개별 학습자의 인지적·정서적·행동적 패턴을 분석하여 맞춤형 교육을 제공하는 EduCareLog의 실제 적용 사례를 공개합니다.',
    content: `
      <h1 class="text-3xl font-bold text-gray-900 mb-6">📚 특수교육에서 일반교육으로: 검증된 개별화의 확장</h1>
      <p class="text-lg text-gray-600 mb-6">5년간의 현장 데이터가 증명하는 AI 디지털케어로그의 교육 혁신</p>
      
      <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">🔬 연구 배경</h2>
        <p class="text-gray-700 mb-4">
          드림에이아이랩의 <strong>AI 디지털케어로그 기술</strong>은 2019년 발달장애 치료 현장에서 시작되었습니다. 
          자람이 플랫폼을 통해 전국 5,700+ 기관 연계 풀과 일부 기관·현장 파일럿에서 축적한 행동·학습·치료 데이터를 
          바탕으로 개인화 방법론을 정교화해왔습니다. (전국 발달장애 타겟 인구 383만+는 IR·서비스 페이지 기준과 동일합니다.)
        </p>
        <p class="text-gray-700 mb-4">
          특수교육에서 검증된 이 기술은 <strong>개별 학습자의 주의 패턴, 오개념 형성, 학습 속도</strong> 등을 
          정밀하게 추적하고 분석할 수 있습니다. 이제 이 검증된 방법론을 일반교육으로 확장하여, 
          모든 학습자가 자신의 속도와 방식으로 배울 수 있는 <strong>진정한 개별화교육</strong>을 실현하고자 합니다.
        </p>
        <div class="bg-blue-100 border-l-4 border-blue-600 p-4">
          <p class="text-blue-900 font-semibold">
            "특수교육에서 쌓은 5년의 데이터와 경험이 일반교육의 개별화를 가능하게 합니다. 
            모든 아이는 다르게 배우며, 그것이 정상입니다."
          </p>
          <p class="text-blue-800 text-sm mt-2">- 정해성 CTO, 드림에이아이랩</p>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">📊 실제 적용 사례</h2>
      
      <div class="space-y-8 mb-8">
        <div class="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500">
          <div class="flex items-start gap-4 mb-4">
            <div class="bg-green-100 text-green-600 px-3 py-1 rounded font-bold">사례 A</div>
            <h3 class="text-xl font-bold text-gray-900">연산 오개념 조기 탐지 및 보정</h3>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <h4 class="font-semibold text-gray-900 mb-2">🔍 상황</h4>
              <ul class="text-sm text-gray-600 space-y-1">
                <li>• 학생: 초등 3학년 A군</li>
                <li>• 문제: 곱셈 개념은 이해하나 자릿수 올림 오류 반복</li>
                <li>• 기존 방식: 교사가 개별 발견까지 평균 2-3주 소요</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-gray-900 mb-2">🤖 AI 분석 결과</h4>
              <ul class="text-sm text-gray-600 space-y-1">
                <li>• 탐지 시간: 5회 문제 풀이 후 3일 이내</li>
                <li>• 오개념 유형: "자릿수 올림 시 위치 혼동"</li>
                <li>• 제안: 시각화된 자릿수 표 + 단계별 연습</li>
              </ul>
            </div>
          </div>
          
          <div class="bg-green-50 rounded-lg p-4">
            <h4 class="font-semibold text-gray-900 mb-2">📈 결과</h4>
            <div class="grid grid-cols-3 gap-4 text-center">
              <div>
                <p class="text-2xl font-bold text-green-600">2주</p>
                <p class="text-xs text-gray-600">오개념 보정 완료</p>
              </div>
              <div>
                <p class="text-2xl font-bold text-green-600">87%</p>
                <p class="text-xs text-gray-600">정답률 향상 (45%→87%)</p>
              </div>
              <div>
                <p class="text-2xl font-bold text-green-600">4.2점</p>
                <p class="text-xs text-gray-600">학습 만족도 (5점 만점)</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
          <div class="flex items-start gap-4 mb-4">
            <div class="bg-blue-100 text-blue-600 px-3 py-1 rounded font-bold">사례 B</div>
            <h3 class="text-xl font-bold text-gray-900">주의 산만 패턴 분석 및 학습 환경 최적화</h3>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <h4 class="font-semibold text-gray-900 mb-2">🔍 상황</h4>
              <ul class="text-sm text-gray-600 space-y-1">
                <li>• 학생: 초등 4학년 B양</li>
                <li>• 문제: 국어 독해는 우수하나 수학 집중력 저하</li>
                <li>• 기존 방식: "산만하다"는 정성적 피드백만 존재</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-gray-900 mb-2">🤖 AI 분석 결과</h4>
              <ul class="text-sm text-gray-600 space-y-1">
                <li>• 집중 시간: 수학 15분 / 국어 40분</li>
                <li>• 패턴: 15분 후 정답률 급감 (92%→54%)</li>
                <li>• 제안: 15분 단위 학습 + 5분 휴식 루틴</li>
              </ul>
            </div>
          </div>
          
          <div class="bg-blue-50 rounded-lg p-4">
            <h4 class="font-semibold text-gray-900 mb-2">📈 결과</h4>
            <div class="grid grid-cols-3 gap-4 text-center">
              <div>
                <p class="text-2xl font-bold text-blue-600">78%</p>
                <p class="text-xs text-gray-600">평균 정답률 유지</p>
              </div>
              <div>
                <p class="text-2xl font-bold text-blue-600">35분</p>
                <p class="text-xs text-gray-600">총 집중 시간 증가</p>
              </div>
              <div>
                <p class="text-2xl font-bold text-blue-600">+23%</p>
                <p class="text-xs text-gray-600">학습량 증가</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-500">
          <div class="flex items-start gap-4 mb-4">
            <div class="bg-purple-100 text-purple-600 px-3 py-1 rounded font-bold">사례 C</div>
            <h3 class="text-xl font-bold text-gray-900">상위권 학생 심화 학습 경로 자동 생성</h3>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <h4 class="font-semibold text-gray-900 mb-2">🔍 상황</h4>
              <ul class="text-sm text-gray-600 space-y-1">
                <li>• 학생: 중등 2학년 C군</li>
                <li>• 문제: 교과 내용은 쉬워 학습 동기 저하</li>
                <li>• 기존 방식: 일률적 심화 문제집 권유</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-gray-900 mb-2">🤖 AI 분석 결과</h4>
              <ul class="text-sm text-gray-600 space-y-1">
                <li>• 성취도: 현 학년 대비 +1.5학년 수준</li>
                <li>• 흥미 영역: 기하학, 공간 추론</li>
                <li>• 제안: 프로젝트형 심화 + 올림피아드 준비</li>
              </ul>
            </div>
          </div>
          
          <div class="bg-purple-50 rounded-lg p-4">
            <h4 class="font-semibold text-gray-900 mb-2">📈 결과</h4>
            <div class="grid grid-cols-3 gap-4 text-center">
              <div>
                <p class="text-2xl font-bold text-purple-600">4.8점</p>
                <p class="text-xs text-gray-600">학습 동기 (5점 만점)</p>
              </div>
              <div>
                <p class="text-2xl font-bold text-purple-600">은상</p>
                <p class="text-xs text-gray-600">지역 수학경시대회</p>
              </div>
              <div>
                <p class="text-2xl font-bold text-purple-600">+2시간</p>
                <p class="text-xs text-gray-600">자발적 학습 시간</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">📊 종합 데이터 분석</h2>
      <div class="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 mb-8">
        <h3 class="text-xl font-bold text-gray-900 mb-4">6개월 파일럿 프로그램 결과 (시범학교 3곳, 학생 127명)</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div class="bg-white rounded-lg p-4 shadow text-center">
            <p class="text-3xl font-bold text-blue-600 mb-1">67%</p>
            <p class="text-sm text-gray-600">기초학력 향상률</p>
            <p class="text-xs text-gray-500">(하위 20% 학생 대상)</p>
          </div>
          <div class="bg-white rounded-lg p-4 shadow text-center">
            <p class="text-3xl font-bold text-green-600 mb-1">42%</p>
            <p class="text-sm text-gray-600">교사 업무시간 감소</p>
            <p class="text-xs text-gray-500">(피드백 작성 자동화)</p>
          </div>
          <div class="bg-white rounded-lg p-4 shadow text-center">
            <p class="text-3xl font-bold text-purple-600 mb-1">4.3점</p>
            <p class="text-sm text-gray-600">학부모 만족도</p>
            <p class="text-xs text-gray-500">(5점 만점)</p>
          </div>
          <div class="bg-white rounded-lg p-4 shadow text-center">
            <p class="text-3xl font-bold text-orange-600 mb-1">89%</p>
            <p class="text-sm text-gray-600">교사 지속 사용 의향</p>
            <p class="text-xs text-gray-500">(설문조사 결과)</p>
          </div>
        </div>

        <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
          <h4 class="font-semibold text-blue-900 mb-2">주요 발견 사항</h4>
          <ul class="text-sm text-blue-800 space-y-1">
            <li>✓ 오개념 조기 탐지로 학습 지연 기간 평균 68% 단축 (3주 → 1주)</li>
            <li>✓ 개별 학습 패턴 분석으로 집중력 향상 평균 34%</li>
            <li>✓ 자동화된 피드백으로 교사 1인당 관리 가능 학생 수 1.5배 증가</li>
            <li>✓ 학부모 소통 자동화로 가정-학교 연계 강화 (주간 리포트 제공)</li>
          </ul>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">🔬 특수교육 vs 일반교육: 기술 적용의 차이</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div class="bg-white rounded-xl p-6 shadow">
          <h3 class="text-lg font-bold text-gray-900 mb-4">🧩 특수교육 (자람이)</h3>
          <ul class="space-y-3 text-sm text-gray-600">
            <li>
              <strong class="text-gray-900">데이터 수집:</strong><br/>
              행동·정서·감각 통합·일상생활 기술
            </li>
            <li>
              <strong class="text-gray-900">분석 초점:</strong><br/>
              개별 장애 특성 파악, 치료 반응성 추적
            </li>
            <li>
              <strong class="text-gray-900">개입 방식:</strong><br/>
              다학제 협력 (의사·치료사·교사·가족)
            </li>
            <li>
              <strong class="text-gray-900">시간 단위:</strong><br/>
              장기 추적 (수개월~수년)
            </li>
          </ul>
        </div>

        <div class="bg-white rounded-xl p-6 shadow">
          <h3 class="text-lg font-bold text-gray-900 mb-4">🎓 일반교육 (에듀케어로그)</h3>
          <ul class="space-y-3 text-sm text-gray-600">
            <li>
              <strong class="text-gray-900">데이터 수집:</strong><br/>
              학습·평가·참여·과제 수행 패턴
            </li>
            <li>
              <strong class="text-gray-900">분석 초점:</strong><br/>
              오개념 탐지, 학습 스타일, 성취 수준
            </li>
            <li>
              <strong class="text-gray-900">개입 방식:</strong><br/>
              교사 주도 + AI 보조 (추천·자동화)
            </li>
            <li>
              <strong class="text-gray-900">시간 단위:</strong><br/>
              단기 적응 (일~주 단위)
            </li>
          </ul>
        </div>
      </div>

      <div class="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-6 mb-8">
        <h3 class="text-xl font-bold text-gray-900 mb-3">💡 공통 핵심 기술</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 class="font-semibold text-gray-900 mb-2">📋 표준화된 데이터 수집</h4>
            <p class="text-sm text-gray-600">
              구조화된 스키마로 일관된 데이터 기록 및 분석 가능
            </p>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 mb-2">🧠 AI 개인화 엔진</h4>
            <p class="text-sm text-gray-600">
              개별 패턴 학습 및 맞춤 개입 자동 생성
            </p>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 mb-2">🔄 지속적 피드백 루프</h4>
            <p class="text-sm text-gray-600">
              실행 결과 재학습으로 지속적 개선
            </p>
          </div>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">👨‍🏫 교사 인터뷰</h2>
      <div class="space-y-4 mb-8">
        <div class="bg-white rounded-lg p-6 shadow border-l-4 border-blue-500">
          <p class="text-gray-700 italic mb-3">
            "30명 학생의 개별 학습 패턴을 모두 파악하는 건 불가능했습니다. 
            이제 AI가 먼저 알려주고, 저는 그 정보를 바탕으로 개입할 수 있습니다. 
            교사의 역할이 '가르치는 사람'에서 '학습을 돕는 코치'로 변했어요."
          </p>
          <p class="text-sm text-gray-600">- 서울 A초등학교 김OO 교사 (교직 경력 8년)</p>
        </div>

        <div class="bg-white rounded-lg p-6 shadow border-l-4 border-green-500">
          <p class="text-gray-700 italic mb-3">
            "부진 학생들이 '왜' 못하는지 구체적으로 알 수 있게 됐습니다. 
            단순히 '곱셈을 못한다'가 아니라 '자릿수 올림에서 막힌다'는 걸 데이터로 확인하니 
            정확한 처방이 가능해졌죠."
          </p>
          <p class="text-sm text-gray-600">- 경기 B중학교 이OO 교사 (수학 전담)</p>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">🚀 향후 계획</h2>
      <div class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-8 mb-8">
        <h3 class="text-2xl font-bold mb-4">2026년 전국 확대 로드맵</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p class="text-3xl font-bold mb-2">50개교</p>
            <p class="text-blue-100">시범학교 목표</p>
          </div>
          <div>
            <p class="text-3xl font-bold mb-2">5,000명</p>
            <p class="text-blue-100">참여 학생 목표</p>
          </div>
          <div>
            <p class="text-3xl font-bold mb-2">20개사</p>
            <p class="text-blue-100">에듀테크 파트너</p>
          </div>
        </div>
      </div>

      <div class="bg-gray-50 rounded-lg p-6">
        <h3 class="font-bold text-gray-900 mb-3">📚 관련 자료</h3>
        <div class="space-y-2">
          <a href="/services/educarelog" class="block text-blue-600 hover:underline">
            → 에듀케어로그 서비스 소개
          </a>
          <a href="/technology/educarelog" class="block text-blue-600 hover:underline">
            → 에듀케어로그 기술백서
          </a>
          <a href="/services/jarame" class="block text-blue-600 hover:underline">
            → 자람이 플랫폼 (특수교육 원천 기술)
          </a>
        </div>
      </div>
    `,
    category: 'tech',
    date: '2025-11-10',
    image: '📚',
    featured: true,
    author: '드림에이아이랩 연구팀',
    tags: ['에듀케어로그', 'EduCareLog', '사례연구', '개별화교육', '특수교육', '일반교육', '자람이', 'AI교육', '학습분석', '교육혁신']
  },
  {
    id: 62,
    title: '노아AI AlphaArena 모드 공개 | 알파아레나 - AI 엔진 실전 거래 대결 시스템 출시',
    excerpt: '노아AI가 AlphaArena(알파아레나) 모드를 정식 출시했습니다. DeepSeek V3.1, GPT-4o, Claude Sonnet 4.5 등 최고 수준의 AI 엔진들이 실제 시장에서 거래 능력을 겨루는 혁신적인 AI 엔진 대결 모드입니다. nof1.ai의 Alpha Arena 프로젝트에서 영감을 받아 구현되었으며, 6개 메이저 코인(BTC, ETH, SOL, XRP, DOGE, BNB)을 고정 거래 대상으로 합니다.',
    content: `
      <h1 class="text-3xl font-bold text-gray-900 mb-6">🏆 노아AI AlphaArena 모드 공개</h1>
      <p class="text-lg text-gray-600 mb-6">AI 엔진 실전 거래 대결 시스템이 정식 출시되었습니다.</p>
      
      <div class="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-6 mb-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">🎯 AlphaArena(알파아레나)란?</h2>
        <p class="text-gray-700 mb-4">
          <strong>AlphaArena</strong>는 최고 수준의 AI 엔진들이 실제 시장에서 거래 능력을 겨루는 혁신적인 거래 모드입니다. 
          nof1.ai의 Alpha Arena 프로젝트에서 영감을 받아, 노아AI에 특별히 구현된 고급 실험 모드로, 
          순수 AI 엔진의 판단만으로 고정된 6개 코인을 거래합니다.
        </p>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li>✅ AI 엔진을 직접 선택 (DeepSeek, GPT-4o, Claude 등)</li>
          <li>✅ 고정된 6개 메이저 코인만 거래 (BTC, ETH, SOL, XRP, DOGE, BNB)</li>
          <li>✅ 최소한의 프롬프트로 AI의 순수 판단력 테스트</li>
          <li>✅ 실시간 성과 비교 및 학습</li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">🧠 지원 AI 엔진</h2>
      <p class="text-gray-600 mb-6">AlphaArena 모드에서는 다음 AI 엔진들을 선택할 수 있습니다:</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div class="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-400 rounded-lg p-6 shadow-sm">
          <div class="flex items-center mb-3">
            <h3 class="text-lg font-bold text-gray-900">DeepSeek Chat V3.1</h3>
            <span class="ml-2 text-yellow-600 text-sm">⭐ 추천</span>
          </div>
          <ul class="text-sm text-gray-600 space-y-1">
            <li>• nof1.ai 실험에서 3일 만에 +68.14% 수익률 달성</li>
            <li>• 리스크 관리와 타이밍 판단이 뛰어남</li>
            <li>• 일관성 있는 전략 실행력</li>
          </ul>
        </div>
        <div class="bg-white border rounded-lg p-6 shadow-sm">
          <h3 class="text-lg font-bold text-gray-900 mb-3">GPT-4o</h3>
          <ul class="text-sm text-gray-600 space-y-1">
            <li>• OpenAI의 최신 멀티모달 AI</li>
            <li>• 시장 분석과 패턴 인식 능력 우수</li>
            <li>• 복잡한 시장 상황에서도 안정적인 판단</li>
          </ul>
        </div>
        <div class="bg-white border rounded-lg p-6 shadow-sm">
          <h3 class="text-lg font-bold text-gray-900 mb-3">Claude Sonnet 4.5</h3>
          <ul class="text-sm text-gray-600 space-y-1">
            <li>• Anthropic의 고성능 AI</li>
            <li>• 리스크 관리에 보수적이고 신중한 접근</li>
            <li>• 장기적 안정성 중시</li>
          </ul>
        </div>
        <div class="bg-white border rounded-lg p-6 shadow-sm">
          <h3 class="text-lg font-bold text-gray-900 mb-3">Gemini 2.5 Pro</h3>
          <ul class="text-sm text-gray-600 space-y-1">
            <li>• Google의 최신 AI 모델</li>
            <li>• 다양한 데이터 소스 통합 분석</li>
            <li>• 실시간 시장 정보 활용</li>
          </ul>
        </div>
        <div class="bg-white border rounded-lg p-6 shadow-sm">
          <h3 class="text-lg font-bold text-gray-900 mb-3">Grok 4</h3>
          <ul class="text-sm text-gray-600 space-y-1">
            <li>• xAI의 실시간 정보 특화 AI</li>
            <li>• 최신 뉴스와 트렌드 반영</li>
            <li>• 빠른 시장 변화 대응</li>
          </ul>
        </div>
        <div class="bg-white border rounded-lg p-6 shadow-sm">
          <h3 class="text-lg font-bold text-gray-900 mb-3">Qwen3 Max</h3>
          <ul class="text-sm text-gray-600 space-y-1">
            <li>• Alibaba의 최신 AI 엔진</li>
            <li>• 아시아 시장 특화 분석</li>
            <li>• 높은 데이터 처리 속도</li>
          </ul>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">📊 거래 방식 및 규칙</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div class="bg-white rounded-lg p-6 shadow-sm">
          <h3 class="text-lg font-bold text-gray-900 mb-4">거래 대상 코인 (고정)</h3>
          <div class="grid grid-cols-2 gap-3">
            <div class="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-3 text-center">
              <span class="text-xl mr-2">🪙</span>
              <span class="text-sm font-semibold text-gray-700">BTC</span>
            </div>
            <div class="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-3 text-center">
              <span class="text-xl mr-2">🪙</span>
              <span class="text-sm font-semibold text-gray-700">ETH</span>
            </div>
            <div class="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-3 text-center">
              <span class="text-xl mr-2">🪙</span>
              <span class="text-sm font-semibold text-gray-700">SOL</span>
            </div>
            <div class="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-3 text-center">
              <span class="text-xl mr-2">🪙</span>
              <span class="text-sm font-semibold text-gray-700">XRP</span>
            </div>
            <div class="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-3 text-center">
              <span class="text-xl mr-2">🪙</span>
              <span class="text-sm font-semibold text-gray-700">DOGE</span>
            </div>
            <div class="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-3 text-center">
              <span class="text-xl mr-2">🪙</span>
              <span class="text-sm font-semibold text-gray-700">BNB</span>
            </div>
          </div>
          <p class="text-gray-600 text-sm mt-4">
            → 이 6개 코인만 거래하며, AI가 매 틱마다 진입/청산/보유를 결정합니다.
          </p>
        </div>
        <div class="bg-white rounded-lg p-6 shadow-sm">
          <h3 class="text-lg font-bold text-gray-900 mb-4">거래 규칙</h3>
          <ul class="space-y-3 text-gray-600">
            <li class="flex items-start">
              <span class="text-indigo-500 mr-2 font-bold">•</span>
              <span><strong>초기 자금:</strong> 사용자가 설정한 거래 가능 자금</span>
            </li>
            <li class="flex items-start">
              <span class="text-indigo-500 mr-2 font-bold">•</span>
              <span><strong>레버리지:</strong> 10~20배 (AI가 상황에 따라 자동 조절)</span>
            </li>
            <li class="flex items-start">
              <span class="text-indigo-500 mr-2 font-bold">•</span>
              <span><strong>필수 조건:</strong> 모든 포지션은 TP(익절)와 SL(손절) 포함</span>
            </li>
            <li class="flex items-start">
              <span class="text-indigo-500 mr-2 font-bold">•</span>
              <span><strong>손절매 제거 금지:</strong> AI가 리스크 관리를 위해 반드시 SL 유지</span>
            </li>
          </ul>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">📈 성과 비교 (nof1.ai 실험 결과 참고)</h2>
      <p class="text-gray-600 mb-4">nof1.ai의 Alpha Arena 실험 결과 (실제 $10,000 자금으로 동일 조건 거래):</p>
      <div class="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm mb-6 overflow-x-auto">
        <table class="w-full text-left">
          <thead>
            <tr class="border-b border-green-600">
              <th class="p-2">AI 엔진</th>
              <th class="p-2 text-right">최종 자금</th>
              <th class="p-2 text-right">수익률</th>
            </tr>
          </thead>
          <tbody class="text-green-400">
            <tr class="border-b border-green-800 bg-yellow-900 bg-opacity-30">
              <td class="p-2 font-semibold">DeepSeek V3.1 🏆</td>
              <td class="p-2 text-right">$16,814</td>
              <td class="p-2 text-right text-green-300 font-bold">+68.14%</td>
            </tr>
            <tr class="border-b border-green-800">
              <td class="p-2">Qwen3 Max</td>
              <td class="p-2 text-right">$11,847</td>
              <td class="p-2 text-right text-green-300">+18.47%</td>
            </tr>
            <tr class="border-b border-green-800">
              <td class="p-2">Claude Sonnet 4.5</td>
              <td class="p-2 text-right">$8,764</td>
              <td class="p-2 text-right text-red-300">-12.36%</td>
            </tr>
            <tr class="border-b border-green-800">
              <td class="p-2">Grok 4</td>
              <td class="p-2 text-right">$5,926</td>
              <td class="p-2 text-right text-red-300">-40.73%</td>
            </tr>
            <tr class="border-b border-green-800">
              <td class="p-2">Gemini 2.5 Pro</td>
              <td class="p-2 text-right">$4,068</td>
              <td class="p-2 text-right text-red-300">-59.32%</td>
            </tr>
            <tr class="border-b border-green-800">
              <td class="p-2">GPT-5</td>
              <td class="p-2 text-right">$3,027</td>
              <td class="p-2 text-right text-red-300">-69.73%</td>
            </tr>
            <tr class="bg-gray-800 bg-opacity-50">
              <td class="p-2">BTC Buy & Hold</td>
              <td class="p-2 text-right">$10,006</td>
              <td class="p-2 text-right">+0.06%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-gray-600 text-sm mb-8">
        💡 DeepSeek Chat V3.1이 압도적인 성과를 보이며, 순수 AI 판단만으로도 시장을 이길 수 있음을 증명했습니다!
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">⚙️ AlphaArena 사용 방법</h2>
      <div class="bg-blue-50 rounded-lg p-6 mb-8">
        <ol class="list-decimal list-inside space-y-4 text-gray-700">
          <li><strong>모드 선택:</strong> 대시보드 → 설정 → "AlphaArena 모드" 활성화</li>
          <li><strong>AI 엔진 선택:</strong> DeepSeek Chat V3.1 (추천), GPT-4o, Claude Sonnet 4.5, Gemini 2.5 Pro, Grok 4, Qwen3 Max 중 선택</li>
          <li><strong>초기 자금 설정:</strong> 거래에 사용할 자금을 입력 (예: $10,000)</li>
          <li><strong>거래 시작:</strong> "시작" 버튼을 누르면 AI가 자율적으로 거래 시작</li>
          <li><strong>실시간 모니터링:</strong> 대시보드에서 AI의 판단 과정과 거래 내역 확인, 포지션 상태, 수익률, 리스크 실시간 표시</li>
        </ol>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">🎓 평가 기준</h2>
      <p class="text-gray-600 mb-4">AlphaArena에서 AI는 다음 기준으로 평가됩니다:</p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
          <h3 class="text-lg font-bold text-gray-900 mb-3">1. 일관성 (Consistency)</h3>
          <ul class="text-sm text-gray-600 space-y-1">
            <li>• 전략의 반복성과 논리적 연결성</li>
            <li>• 시장 변화에 따른 전략 유지 능력</li>
          </ul>
        </div>
        <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6">
          <h3 class="text-lg font-bold text-gray-900 mb-3">2. 실행력 (Execution)</h3>
          <ul class="text-sm text-gray-600 space-y-1">
            <li>• 전략을 실제 거래로 연결하는 능력</li>
            <li>• 진입/청산 타이밍의 정확성</li>
          </ul>
        </div>
        <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6">
          <h3 class="text-lg font-bold text-gray-900 mb-3">3. 규율 (Discipline)</h3>
          <ul class="text-sm text-gray-600 space-y-1">
            <li>• 손절매, 레버리지, 포지션 관리</li>
            <li>• 리스크 통제 능력</li>
            <li>• 감정 없는 냉정한 판단</li>
          </ul>
        </div>
      </div>

      <div class="bg-red-50 border-2 border-red-200 rounded-lg p-6 mb-8">
        <h2 class="text-2xl font-bold text-red-900 mb-4">⚠️ 주의사항</h2>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>높은 리스크:</strong> AlphaArena는 10~20배 레버리지를 사용하는 고위험 모드입니다. 손실 위험이 크므로, 반드시 감당 가능한 자금만 사용하세요.</li>
          <li><strong>실험적 기능:</strong> AI의 판단이 항상 정확하지는 않습니다. 특히 급격한 시장 변동 시 예상치 못한 손실 가능</li>
          <li><strong>자금 관리:</strong> 초기 자금의 10~20% 정도로 시작하는 것을 권장. 손실 한도를 미리 설정하고 엄격히 지키세요.</li>
          <li><strong>책임:</strong> AlphaArena 모드의 모든 거래 결과는 사용자 본인의 책임입니다. AI는 도구일 뿐, 최종 결정은 항상 본인이 해야 합니다.</li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">🔮 향후 계획</h2>
      <div class="bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg p-6 mb-8">
        <p class="text-indigo-100 mb-4">AlphaArena는 지속적으로 발전할 예정입니다:</p>
        <ul class="list-disc list-inside space-y-2 text-indigo-100">
          <li><strong>추가 예정 AI 엔진:</strong> Llama 4, Mistral Large, 기타 최신 AI 모델</li>
          <li><strong>향상된 기능:</strong> AI 엔진 간 실시간 성과 비교 대시보드, 커뮤니티 AI 전략 공유, 백테스팅 시뮬레이션, 클라우드 집단 학습 적용</li>
          <li><strong>확장 계획:</strong> 거래 가능 코인 확대, 주식·선물 등 다양한 자산으로 확장, 글로벌 시장 지원</li>
        </ul>
      </div>

      <div class="bg-gray-50 rounded-lg p-6">
        <h3 class="text-lg font-bold text-gray-900 mb-3">📚 참고 자료</h3>
        <p class="text-gray-700 mb-2">
          AlphaArena는 다음 프로젝트에서 영감을 받았습니다:
        </p>
        <p class="text-gray-600 text-sm">
          <strong>🔗 nof1.ai Alpha Arena</strong><br/>
          실제 자금으로 AI 모델의 투자 능력을 검증하는 세계 최초의 벤치마크 실험
        </p>
        <p class="text-gray-700 mt-4">
          💡 노아AI는 이 혁신적인 개념을 사용자 친화적인 형태로 구현하여, 
          누구나 최고 수준의 AI 엔진을 활용한 거래를 경험할 수 있도록 했습니다.
        </p>
      </div>

      <p class="text-gray-600 mt-8">
        <strong>AlphaArena 모드는 노아AI 클라이언트에서 바로 이용할 수 있습니다.</strong> 
        AI 엔진의 실제 거래 능력을 직접 확인하고 비교해보세요!
      </p>
    `,
    category: 'updates',
    date: '2025-01-25',
    image: '🏆',
    featured: false,
    author: '드림에이아이랩',
    tags: ['노아AI', 'AlphaArena', '알파아레나', 'AI 엔진 대결', 'DeepSeek', 'GPT-4o', 'Claude', 'AI 트레이딩', '암호화폐', 'nof1.ai', 'AI 자동거래', 'BTC', 'ETH', 'SOL']
  },
  {
    id: 61,
    title: '노아AI 공식 기술백서 공개 | 세계 최초 AI 자율 재테크 플랫폼의 기술적 혁신 상세 공개',
    excerpt: 'DAL이 개발한 노아AI의 공식 기술백서가 공개되었습니다. 세계 최초 실시간 AI 학습형 재테크 어시스턴트의 기술적 아키텍처, 강화학습 시스템, XAI 투명성 정책을 상세히 공개합니다.',
    content: `
      <div class="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-8">
        <p class="text-amber-900 text-sm leading-relaxed">
          <strong>📌 최신 기준 안내:</strong> 본 기사는 2025년 1월 당시 기술백서(v3.8.8.3) 공개 보도입니다.
          노아AI는 <strong>Noah AI Labs</strong>로 이전 완료되었으며, 최신 운영 기준은 <strong>v3.8.9.27</strong>(2026-07-06)입니다.
          <a href="/blog/noahai-technical-whitepaper" class="text-primary-600 underline font-medium">최신 기술백서</a> ·
          <a href="/services/finance" class="text-primary-600 underline font-medium">이전·운영 안내</a>를 참고하세요.
        </p>
      </div>
      <h1 class="text-3xl font-bold text-gray-900 mb-6">노아AI 공식 기술백서 공개</h1>
      <p class="text-lg text-gray-600 mb-6">세계 최초 AI 자율 재테크 플랫폼의 기술적 혁신을 상세히 공개합니다.</p>
      
      <div class="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-6 mb-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">📖 기술백서 주요 내용</h2>
        <ul class="text-gray-700 space-y-2">
          <li>• <strong>시스템 아키텍처:</strong> 전체 시스템 구성도와 핵심 모듈 역할</li>
          <li>• <strong>AI 트레이딩 엔진:</strong> 실시간 학습 메커니즘과 강화학습 구조</li>
          <li>• <strong>거래 파이프라인:</strong> 시장 분석부터 거래 실행까지 전체 프로세스</li>
          <li>• <strong>XAI 투명성 정책:</strong> 모든 거래 결정 과정의 투명한 공개</li>
          <li>• <strong>성능 벤치마크:</strong> 실제 구현된 시스템의 성능 지표</li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">🧠 핵심 기술 혁신</h2>
      <p class="text-gray-600 mb-6">노아AI는 DAL의 검증된 AI 디지털케어로그 기술을 금융 트레이딩에 적용한 혁신적 시스템입니다.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div class="bg-white rounded-lg p-6 shadow-sm">
          <h3 class="text-lg font-bold text-gray-900 mb-3">🏥 의료 AI → 금융 AI 기술 전이</h3>
          <ul class="text-gray-600 space-y-1 text-sm">
            <li>• 환자 생체신호 분석 → 시장 데이터 분석</li>
            <li>• 치료 패턴 예측 → 거래 패턴 예측</li>
            <li>• 개인 맞춤 치료 → 개인 맞춤 거래</li>
          </ul>
        </div>
        <div class="bg-white rounded-lg p-6 shadow-sm">
          <h3 class="text-lg font-bold text-gray-900 mb-3">🔄 실시간 강화학습 시스템</h3>
          <ul class="text-gray-600 space-y-1 text-sm">
            <li>• 매 거래마다 학습하여 성능 개선</li>
            <li>• 성공 패턴 강화, 실패 패턴 약화</li>
            <li>• 시장 변화에 실시간 적응</li>
          </ul>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">📊 성능 벤치마크</h2>
      <div class="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm mb-6">
        <div>시작 시간: 46초 → 즉시 시작 (99% 성능 향상)</div>
        <div>거래 주기: 5-10초 초단위 트레이딩</div>
        <div>승률: 50% → 75% (학습 후)</div>
        <div>시스템 안정성: 99% 이상</div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">🔍 XAI 투명성 정책</h2>
      <p class="text-gray-600 mb-6">노아AI는 모든 거래 결정 과정을 투명하게 공개하는 XAI(설명 가능한 AI) 철학을 핵심으로 합니다.</p>
      
      <div class="bg-black rounded-lg p-4 text-green-400 font-mono text-sm mb-6">
        <div>2025-10-20 03:25:00 | INFO - [analysis] 시장 분석 시작 (ex=binance)</div>
        <div>2025-10-20 03:25:01 | INFO - [trade] ADAUSDT 분석 시작 (ex=binance)</div>
        <div>2025-10-20 03:25:02 | INFO - [analysis] ADAUSDT RSI: 61.50 (ex=binance)</div>
        <div>2025-10-20 03:25:03 | INFO - [trade] ADAUSDT 시그널: SHORT (ex=binance)</div>
        <div>2025-10-20 03:25:04 | INFO - [order] ADAUSDT 거래 실행 시작 (ex=binance)</div>
        <div>2025-10-20 03:25:05 | INFO - [monitor] ADAUSDT 포지션 모니터링 시작 (ex=binance)</div>
        <div>2025-10-20 03:25:06 | INFO - [exit] ADAUSDT 익절 청산 완료 (ex=binance)</div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">🌟 미래 비전</h2>
      <p class="text-gray-600 mb-6">노아AI는 단순한 거래 도구가 아닌, 사용자를 대신해 자산을 분석하고 투자하고 불려주는 인공지능 재테크 어시스턴트로 발전할 예정입니다.</p>
      
      <div class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
        <h3 class="text-lg font-bold text-gray-900 mb-3">기술 확장 계획</h3>
        <ul class="text-gray-700 space-y-2">
          <li>• <strong>NoahAI Stock:</strong> 암호화폐 기술을 주식 시장에 적용</li>
          <li>• <strong>NoahAI Index:</strong> 인덱스 펀드 및 ETF 자동 거래</li>
          <li>• <strong>NoahAI Real Estate:</strong> 부동산 시장 분석 및 투자 기회 탐지</li>
          <li>• <strong>NoahAI Asset Manager:</strong> 종합 재테크 어시스턴트</li>
        </ul>
      </div>

      <p class="text-gray-600 mt-8">본 기술백서는 실제 구현된 코드 기반(NoahAI v3.8.8.3, 당시 기준)을 토대로 작성되었습니다. 최신 버전·운영 현황은 <a href="/blog/noahai-technical-whitepaper" class="text-primary-600 underline">노아AI 기술백서 (v3.8.9.27)</a> 및 <a href="/services/finance" class="text-primary-600 underline">Noah AI Labs 이전 안내</a>를 확인하세요.</p>
    `,
    category: 'tech',
    date: '2025-01-20',
    image: '📖',
    featured: true,
    author: 'DAL(드림에이아이랩)',
    tags: ['노아AI', '기술백서', 'AI 자율재테크', '강화학습', 'XAI', '기술혁신']
  },
  {
    id: 60,
    title: '미스코리아 경남·부산 준비생들의 선택, AI 트레이닝으로 완성하는 호감모델아카데미 미인대회 준비',
    excerpt: '부산·경남 지역 미스코리아 준비생들이 선택한 호감모델아카데미. AI 트레이닝으로 미인대회 준비를 과학적으로 관리하는 체계적 교육기관.',
    content: `
      <h1 class="text-3xl font-bold text-gray-900 mb-6">미스코리아 경남·부산, AI로 준비하는 시대</h1>

      <div class="bg-rose-50 border-l-4 border-rose-400 p-4 mb-6">
        <p class="text-rose-800 font-medium">
          "부산, 울산, 경남 지역에서 미스코리아 본선을 꿈꾸는 이들이 가장 먼저 찾는 곳, 호감모델아카데미.  
          AI 트레이닝과 체계적 관리 시스템으로 미인대회 준비의 새로운 기준을 만듭니다."
        </p>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">부산·경남권 미스코리아 배출의 중심, 호감모델아카데미</h2>
      <p class="text-gray-700 mb-4">
        울산에 위치한 <strong>호감모델아카데미</strong>는 13년 연속 미스코리아 진·선·미를 배출하며 
        <strong>미스경남, 미스부산, 미스코리아 본선</strong>에서 수많은 수상자를 배출한 국내 대표 미인대회 전문 교육기관입니다.  
        부산·경남권 참가자들이 서울 본선까지 진출할 수 있도록 맞춤형 트레이닝 프로그램을 제공합니다.
      </p>

      <div class="bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200 rounded-lg p-6 mb-6">
        <h3 class="text-xl font-semibold text-pink-800 mb-4">호감모델아카데미 주요 배출 실적</h3>
        <ul class="list-disc list-inside space-y-1 text-gray-700 ml-4">
          <li>미스코리아 본선 선(善), 미(美), 인기상 1·2위 배출</li>
          <li>미스경남 진(眞)·선(善)·미(美) 연속 배출</li>
          <li>미스부산 본선 진출자 다수 배출</li>
          <li>슈퍼모델, 전국 퍼스트모델선발대회 등 주요 모델대회 입상</li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">AI 트레이닝으로 완성하는 미스코리아 준비</h2>
      <p class="text-gray-700 mb-4">
        호감모델아카데미는 <strong>드림에이아이랩(Dream AI Lab)</strong>의 <strong>AI 디지털케어로그</strong> 기술을 도입해  
        참가자의 <strong>워킹, 포즈, 스피치, 체형, 멘탈</strong>까지 데이터를 기반으로 관리합니다.  
        단순한 감각적 지도가 아니라, <strong>AI 분석 리포트</strong>를 통해 개인별 개선점을 시각화합니다.
      </p>

      <p class="text-gray-700 mb-4">
        <strong>AI 미스코리아 트레이닝 프로그램</strong>은 참가자의 일일 데이터를 분석해 개인별 성장 플랜을 제공하며,  
        미스경남·미스부산 지역예선부터 미스코리아 본선까지 체계적인 준비 로드맵을 제시합니다.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div class="flex items-center mb-4">
            <span class="text-3xl mr-3">💃</span>
            <h4 class="text-xl font-bold text-gray-900">워킹·포즈 AI 분석</h4>
          </div>
          <p class="text-gray-700">
            실전 워킹 영상을 업로드하면 AI가 각도, 리듬, 표정을 분석해 자동 피드백을 제공합니다.  
            실제 미스코리아 수상자들의 워킹 패턴을 비교·분석하여 맞춤형 교정안을 제시합니다.
          </p>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div class="flex items-center mb-4">
            <span class="text-3xl mr-3">🧘‍♀️</span>
            <h4 class="text-xl font-bold text-gray-900">체형·멘탈·영양 관리</h4>
          </div>
          <p class="text-gray-700">
            일일 식단, 운동, 수면 패턴을 기록하면 AI가 컨디션 지수를 분석하고  
            최적의 체형 유지 및 멘탈 밸런스 조절법을 제공합니다.
          </p>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">경남·부산 지역 여성들의 관심 급증</h2>
      <p class="text-gray-700 mb-4">
        최근 <strong>미스경남, 미스부산</strong> 대회 준비를 위해 <strong>호감모델아카데미</strong>를 찾는 
        지역 참가자 수가 빠르게 증가하고 있습니다.  
        특히 인공지능 분석 기반의 맞춤 트레이닝 덕분에 <strong>경남·부산권 미인대회 준비생</strong>들의 만족도가 높습니다.
      </p>

      <p class="text-gray-700 mb-4">
        <strong>울산 모델학원</strong>으로 시작한 호감모델아카데미는 이제 부산·경남 전역에서  
        <strong>미스코리아 준비</strong>를 희망하는 이들의 첫 번째 선택지가 되었습니다.  
        AI 기술을 활용한 과학적 미인대회 트레이닝은 전통적인 모델학원 교육 방식을 혁신하고 있습니다.
      </p>

      <div class="bg-gradient-to-r from-amber-50 to-pink-50 border border-amber-200 rounded-lg p-6 mb-6">
        <p class="text-amber-800 font-semibold mb-2">호감모델아카데미 관계자 인터뷰</p>
        <p class="text-gray-700 italic">
          "AI 트레이닝 시스템을 통해 참가자의 성장 데이터를 한눈에 볼 수 있어,  
          지도 효율이 크게 향상되었습니다.  
          부산·경남 지역에서 미스코리아를 꿈꾸는 분들에게 가장 효과적인 준비 프로그램을 제공합니다."
        </p>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">인공지능 + 13년 노하우 = 완벽한 시너지</h2>
      <p class="text-gray-700 mb-4">
        호감모델아카데미는 13년간의 미인대회 트레이닝 노하우에  
        드림에이아이랩의 AI 기술을 결합하여,  
        <strong>과학적이고 개인화된 미스코리아 준비 과정</strong>을 제공합니다.  
        AI가 제안하는 데이터 리포트와 트레이너의 노하우가 결합된 교육은  
        단기간에 실질적 성장을 만들어냅니다.
      </p>

      <div class="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-lg p-6 mb-6">
        <h3 class="text-xl font-bold text-blue-800 mb-4 text-center">경남·부산권 미스코리아 준비, 왜 호감모델아카데미인가?</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="flex items-start">
            <span class="text-2xl mr-3">🎯</span>
            <div>
              <div class="font-bold text-blue-700">지역 밀착형 트레이닝</div>
              <div class="text-sm text-gray-700">울산·부산·경남 지역 특성에 맞는 준비 전략</div>
            </div>
          </div>
          <div class="flex items-start">
            <span class="text-2xl mr-3">📊</span>
            <div>
              <div class="font-bold text-blue-700">AI 기반 과학적 분석</div>
              <div class="text-sm text-gray-700">데이터로 증명되는 체계적 성장 관리</div>
            </div>
          </div>
          <div class="flex items-start">
            <span class="text-2xl mr-3">🏆</span>
            <div>
              <div class="font-bold text-blue-700">13년 연속 배출 실적</div>
              <div class="text-sm text-gray-700">미스경남·부산에서 본선까지 완벽 준비</div>
            </div>
          </div>
          <div class="flex items-start">
            <span class="text-2xl mr-3">👨‍🏫</span>
            <div>
              <div class="font-bold text-blue-700">MBC 아카데미 강사진</div>
              <div class="text-sm text-gray-700">검증된 전문가의 1:1 맞춤 지도</div>
            </div>
          </div>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">미스코리아부터 모델 입시, 기획사 오디션까지</h2>
      <p class="text-gray-700 mb-4">
        호감모델아카데미는 <strong>미스코리아·미스경남·미스부산</strong> 미인대회 준비뿐 아니라  
        <strong>서경대·동덕여대·대경대 모델과 입시</strong>에서도 매년 합격생을 배출하며,  
        엔터테인먼트 기획사 오디션 기회도 정기적으로 제공합니다.  
        AI 트레이닝과 모델학원의 체계적 커리큘럼으로 미인대회와 입시를 동시에 준비할 수 있습니다.
      </p>

      <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm mb-6">
        <h3 class="text-lg font-bold text-gray-900 mb-3">호감모델아카데미 교육 과정</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="text-center p-4 bg-pink-50 rounded-lg">
            <div class="text-2xl mb-2">👑</div>
            <div class="font-bold text-pink-700">미인대회 준비</div>
            <div class="text-sm text-gray-600">미스코리아·경남·부산</div>
          </div>
          <div class="text-center p-4 bg-purple-50 rounded-lg">
            <div class="text-2xl mb-2">🎓</div>
            <div class="font-bold text-purple-700">모델과 입시</div>
            <div class="text-sm text-gray-600">서경대·동덕여대·대경대</div>
          </div>
          <div class="text-center p-4 bg-indigo-50 rounded-lg">
            <div class="text-2xl mb-2">🎬</div>
            <div class="font-bold text-indigo-700">기획사 오디션</div>
            <div class="text-sm text-gray-600">엔터테인먼트 연계</div>
          </div>
        </div>
      </div>

      <div class="bg-gray-50 rounded-lg p-6 mt-8 text-center">
        <p class="text-gray-700 font-medium mb-2">📍 호감모델아카데미 공식 인스타그램</p>
        <p class="text-blue-600 font-bold text-lg">
          <a href="https://www.instagram.com/hogam__academy/" target="_blank" rel="noopener noreferrer">
            @hogam__academy
          </a>
        </p>
        <p class="text-gray-600 mt-2 text-sm">
          <strong>미스코리아·미스경남·미스부산</strong> 참가 준비, <strong>AI 트레이닝 및 입시 문의</strong>는 
          호감모델아카데미 공식 인스타그램 DM으로 가능합니다.
        </p>
      </div>

      <div class="bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-lg p-8 text-center mt-8">
        <h3 class="text-2xl font-bold mb-3">당신의 꿈에 가까워지는 곳</h3>
        <p class="text-lg mb-2">호감모델아카데미와 함께라면</p>
        <p class="text-xl font-bold">미스코리아·미스경남·미스부산의 꿈이 현실이 됩니다</p>
      </div>
    `,
    category: 'company',
    date: '2025-10-13',
    image: '👑',
    featured: true,
    author: '드림에이아이랩',
    tags: ['미스코리아', '미스경남', '미스부산', '모델아카데미', 'AI', '인공지능', '호감모델아카데미', '모델학원', '울산모델학원', '드림에이아이랩', 'AI디지털케어로그']
  },
  {
    id: 59,
    title: 'AI와 미스코리아가 만난다면? 호감모델아카데미, 인공지능 기반 체계적 미인대회 관리 시스템 도입',
    excerpt: '13년 연속 미스코리아 진·선·미 배출한 호감모델아카데미가 드림에이아이랩의 AI 디지털케어로그 기술과 손잡고 미인대회 및 모델 관리의 새로운 패러다임을 제시합니다.',
    content: `
      <h2 class="text-3xl font-bold text-gray-900 mb-6">AI 기술로 진화하는 미인대회 관리</h2>
      
      <div class="bg-pink-50 border-l-4 border-pink-400 p-4 mb-6">
        <p class="text-pink-800 font-medium">"미스코리아와 모델 육성의 산실, 호감모델아카데미가 AI 디지털케어로그 기술을 통해 체계적이고 과학적인 미인대회 관리 시스템을 구축합니다."</p>
      </div>

      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">13년 연속 미스코리아 배출, 호감모델아카데미의 새로운 도전</h3>
      <p class="text-gray-700 mb-4">
        호감모델아카데미는 2009년부터 2020년까지 13년 연속으로 미스코리아 진(眞)·선(善)·미(美)를 배출해온 국내 최고의 미인대회 전문 교육기관입니다. 
        2020년에는 미스코리아 본선 선(善) 배출과 함께 인기상 1위, 2위를 동시 수상하는 놀라운 성과를 거두었습니다.
      </p>

      <div class="bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200 rounded-lg p-6 mb-6">
        <h4 class="text-xl font-semibold text-pink-800 mb-4">호감모델아카데미 주요 배출 실적</h4>
        
        <div class="space-y-4">
          <div>
            <h5 class="font-bold text-purple-700 mb-2">🏆 미스코리아 서울 본선 배출</h5>
            <ul class="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>2020년 미스코리아 본선 선(善) 배출, 인기상 1위·2위 수상</li>
              <li>2013년 미스코리아 미(美) 구본화 수상</li>
              <li>2010년 미스코리아 본선 매너상 김수현 수상</li>
              <li>2009년 미스코리아 본선 Y-STAR상 사공진 수상</li>
            </ul>
          </div>

          <div>
            <h5 class="font-bold text-purple-700 mb-2">👑 미스코리아 경남 지역예선 배출</h5>
            <ul class="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>2013년 경남 미스코리아 진(眞), 협찬사상 이로로 수상</li>
              <li>2012년 경남 미스코리아 미(美), 협찬사상(경남은행, 굴수협) 수상</li>
              <li>2011년 경남 미스코리아 진(眞)·미(美) 수상</li>
              <li>2010년 경남 미스코리아 선(善)·미(美) 수상</li>
              <li>2009년 경남 미스코리아 선(善), 협찬사상 수상</li>
            </ul>
          </div>

          <div>
            <h5 class="font-bold text-purple-700 mb-2">🎭 모델대회 트레이닝 실적</h5>
            <ul class="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>2013년 슈퍼모델 최종본선 진출</li>
              <li>2013년 제9회 전국 퍼스트모델선발대회 2위(금상), 베스트워킹상, 언론사상 수상</li>
              <li>2009년 한·중 슈퍼모델 4위 수상</li>
              <li>2008년 IMOTY 세계 여자모델 5개국 한국대표 선발대회 1위 수상</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">AI 디지털케어로그로 실현하는 과학적 미인대회 관리</h3>
      <p class="text-gray-700 mb-4">
        호감모델아카데미는 드림에이아이랩의 AI 디지털케어로그 기술을 도입하여 참가자들의 체계적이고 과학적인 관리 시스템을 구축합니다.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div class="flex items-center mb-4">
            <span class="text-3xl mr-3">📊</span>
            <h4 class="text-xl font-bold text-gray-900">개인별 성장 데이터 관리</h4>
          </div>
          <p class="text-gray-700">
            워킹, 포즈, 스피치, 체형관리 등 미인대회 준비 과정의 모든 데이터를 체계적으로 기록하고 분석합니다. 
            AI가 개인별 강점과 개선점을 정확하게 파악하여 맞춤형 트레이닝 플랜을 제시합니다.
          </p>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div class="flex items-center mb-4">
            <span class="text-3xl mr-3">🎯</span>
            <h4 class="text-xl font-bold text-gray-900">실시간 진행상황 모니터링</h4>
          </div>
          <p class="text-gray-700">
            일일 트레이닝 기록, 체형 변화, 스킬 향상도를 실시간으로 추적하고 시각화합니다. 
            참가자와 트레이너가 모바일 앱을 통해 언제든지 진행상황을 확인할 수 있습니다.
          </p>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div class="flex items-center mb-4">
            <span class="text-3xl mr-3">🤖</span>
            <h4 class="text-xl font-bold text-gray-900">AI 기반 맞춤형 코칭</h4>
          </div>
          <p class="text-gray-700">
            축적된 데이터를 바탕으로 AI가 개인별 최적의 트레이닝 루틴, 식단관리, 멘탈케어 방법을 추천합니다. 
            과거 수상자들의 성공 패턴을 분석하여 효과적인 준비 전략을 제시합니다.
          </p>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div class="flex items-center mb-4">
            <span class="text-3xl mr-3">📱</span>
            <h4 class="text-xl font-bold text-gray-900">통합 커뮤니케이션</h4>
          </div>
          <p class="text-gray-700">
            트레이너, 영양사, 심리상담사 등 모든 전문가가 하나의 플랫폼에서 참가자 정보를 공유하고 협업합니다. 
            체계적인 팀 케어로 최상의 컨디션 유지를 지원합니다.
          </p>
        </div>
      </div>

      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">대학교 모델과 입시 최고 합격률 자랑</h3>
      <p class="text-gray-700 mb-4">
        호감모델아카데미는 미인대회뿐만 아니라 모델 전공 입시에서도 탁월한 성과를 보이고 있습니다. 
        서경대, 동덕여대, 대경대 K모델연기과에 매년 합격생을 배출하며, 다양한 기획사 오디션 기회를 제공합니다.
      </p>

      <div class="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
        <h4 class="text-lg font-semibold text-blue-800 mb-3">호감모델아카데미 강점</h4>
        <ul class="space-y-2 text-blue-700">
          <li class="flex items-start">
            <span class="text-blue-500 mr-2">✓</span>
            <span><strong>현 울산 MBC 아카데미 예술원</strong> 강의 진행</span>
          </li>
          <li class="flex items-start">
            <span class="text-blue-500 mr-2">✓</span>
            <span><strong>전 부산방송 아카데미, 전 부산 MBC 아카데미</strong> 강의 경력</span>
          </li>
          <li class="flex items-start">
            <span class="text-blue-500 mr-2">✓</span>
            <span><strong>타 지역 모델학원 강사</strong>로도 활동하며 노하우 공유</span>
          </li>
          <li class="flex items-start">
            <span class="text-blue-500 mr-2">✓</span>
            <span><strong>다양한 기획사 오디션 기회</strong> 정기적 제공</span>
          </li>
        </ul>
      </div>

      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">미인대회 산업의 디지털 전환을 선도</h3>
      <p class="text-gray-700 mb-4">
        호감모델아카데미의 AI 시스템 도입은 단순한 기술 적용을 넘어 미인대회 준비 과정 전체의 디지털 전환을 의미합니다. 
        13년간 축적된 노하우와 AI 기술의 결합으로 더욱 과학적이고 체계적인 미인대회 관리가 가능해졌습니다.
      </p>

      <div class="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-400 p-6 mb-6">
        <p class="text-purple-800 font-semibold mb-2">호감모델아카데미 원장</p>
        <p class="text-gray-700 italic">
          "AI 디지털케어로그 기술을 통해 참가자 한 명 한 명의 성장 과정을 정밀하게 기록하고 분석할 수 있게 되었습니다. 
          이제는 경험과 직관뿐만 아니라 데이터에 기반한 과학적인 지도가 가능해져, 미스코리아와 미스경남·미스부산을 꿈꾸는 
          모든 지원자들에게 더 체계적이고 효과적인 교육을 제공할 수 있습니다."
        </p>
      </div>

      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">호감모델아카데미, 당신의 꿈에 가까워지는 곳</h3>
      <p class="text-gray-700 mb-4">
        13년 연속 미스코리아 진·선·미를 배출한 실력과 최첨단 AI 기술의 만남. 
        호감모델아카데미는 미스코리아, 미스경남, 미스부산을 꿈꾸는 모든 이들에게 가장 체계적이고 과학적인 준비 과정을 제공합니다.
      </p>

      <div class="bg-gray-50 rounded-lg p-6 mt-8">
        <p class="text-center text-gray-600 font-medium">
          "당신의 꿈에 가까워지는 곳, 호감과 함께하세요"
        </p>
      </div>
    `,
    category: 'company',
    date: '2025-10-13',
    image: '🎭',
    featured: true,
    author: '드림에이아이랩',
    tags: ['호감모델아카데미', '미스코리아', 'AI', '미인대회', '미스경남', '미스부산', '모델아카데미', '인공지능']
  },
  {
    id: 58,
    title: '미인대회 준비의 새로운 표준, AI가 만드는 체계적인 미스코리아 트레이닝',
    excerpt: '미스코리아 본선 배출 13년 연속 기록을 보유한 호감모델아카데미가 AI 디지털케어로그를 활용해 참가자별 맞춤형 관리 시스템을 구축, 미인대회 교육의 혁신을 이끕니다.',
    content: `
      <h2 class="text-3xl font-bold text-gray-900 mb-6">데이터로 완성하는 미스코리아의 꿈</h2>
      
      <div class="bg-gradient-to-r from-pink-50 to-rose-50 border-l-4 border-rose-400 p-4 mb-6">
        <p class="text-rose-800 font-medium">"AI 기술이 미인대회 준비 과정을 과학화하고, 참가자 개개인의 잠재력을 최대한 끌어올립니다. 호감모델아카데미의 13년 노하우와 AI의 만남이 새로운 역사를 만들어갑니다."</p>
      </div>

      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">미스코리아 배출의 산실, 호감모델아카데미</h3>
      <p class="text-gray-700 mb-4">
        호감모델아카데미는 국내 미인대회 교육계에서 독보적인 위치를 차지하고 있습니다. 
        2009년부터 2020년까지 13년 연속으로 미스코리아 진(眞)·선(善)·미(美)를 배출하며, 
        미인대회 준비의 최고 명문으로 자리매김했습니다.
      </p>

      <div class="bg-white border-2 border-pink-200 rounded-lg p-6 mb-6">
        <h4 class="text-xl font-semibold text-pink-700 mb-4 text-center">2020년 미스코리아 대회 성과</h4>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div class="bg-gradient-to-br from-yellow-50 to-amber-50 p-4 rounded-lg">
            <div class="text-3xl mb-2">👑</div>
            <div class="font-bold text-amber-700">본선 선(善)</div>
            <div class="text-sm text-gray-600">배출 성공</div>
          </div>
          <div class="bg-gradient-to-br from-pink-50 to-rose-50 p-4 rounded-lg">
            <div class="text-3xl mb-2">🥇</div>
            <div class="font-bold text-pink-700">인기상 1위</div>
            <div class="text-sm text-gray-600">수상</div>
          </div>
          <div class="bg-gradient-to-br from-purple-50 to-violet-50 p-4 rounded-lg">
            <div class="text-3xl mb-2">🥈</div>
            <div class="font-bold text-purple-700">인기상 2위</div>
            <div class="text-sm text-gray-600">수상</div>
          </div>
        </div>
      </div>

      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">AI 디지털케어로그, 미인대회 준비를 혁신하다</h3>
      <p class="text-gray-700 mb-4">
        드림에이아이랩과의 협업으로 도입된 AI 디지털케어로그 시스템은 미인대회 준비 과정의 모든 요소를 데이터화하고 과학적으로 관리합니다.
      </p>

      <div class="space-y-6 mb-8">
        <div class="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-6">
          <h4 class="text-lg font-bold text-blue-800 mb-3 flex items-center">
            <span class="text-2xl mr-2">💎</span>
            워킹 & 포즈 트레이닝 분석
          </h4>
          <p class="text-gray-700 mb-3">
            참가자의 워킹 자세, 속도, 리듬을 영상 분석 AI로 정밀 측정합니다. 
            각 단계별 개선점을 시각화하여 제공하며, 과거 수상자들의 워킹 패턴과 비교 분석합니다.
          </p>
          <div class="bg-white p-3 rounded text-sm">
            <span class="font-semibold text-blue-700">실전 활용:</span> 
            <span class="text-gray-600">일일 워킹 연습 영상을 업로드하면 AI가 자동으로 분석하여 개선 포인트를 제시합니다.</span>
          </div>
        </div>

        <div class="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6">
          <h4 class="text-lg font-bold text-green-800 mb-3 flex items-center">
            <span class="text-2xl mr-2">🥗</span>
            체형관리 & 영양 모니터링
          </h4>
          <p class="text-gray-700 mb-3">
            체중, 체지방률, 신체 사이즈 변화를 일일 단위로 기록하고 추적합니다. 
            AI가 개인별 체질과 목표에 맞는 식단과 운동 계획을 자동으로 생성하며, 건강한 방법으로 최적의 컨디션을 유지하도록 돕습니다.
          </p>
          <div class="bg-white p-3 rounded text-sm">
            <span class="font-semibold text-green-700">실전 활용:</span> 
            <span class="text-gray-600">매일 식단과 운동 기록을 입력하면 AI 영양사가 즉시 피드백을 제공합니다.</span>
          </div>
        </div>

        <div class="bg-gradient-to-r from-purple-50 to-fuchsia-50 border border-purple-200 rounded-lg p-6">
          <h4 class="text-lg font-bold text-purple-800 mb-3 flex items-center">
            <span class="text-2xl mr-2">🎤</span>
            스피치 & 인터뷰 트레이닝
          </h4>
          <p class="text-gray-700 mb-3">
            발성, 발음, 답변 내용, 표정, 제스처 등을 종합적으로 분석합니다. 
            AI 음성 분석으로 목소리 톤과 속도를 측정하고, 자주 사용하는 표현이나 습관적 제스처를 파악하여 개선점을 제시합니다.
          </p>
          <div class="bg-white p-3 rounded text-sm">
            <span class="font-semibold text-purple-700">실전 활용:</span> 
            <span class="text-gray-600">모의 인터뷰 영상을 분석하여 답변의 논리성, 자신감, 호감도를 평가합니다.</span>
          </div>
        </div>

        <div class="bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-200 rounded-lg p-6">
          <h4 class="text-lg font-bold text-rose-800 mb-3 flex items-center">
            <span class="text-2xl mr-2">🧘</span>
            멘탈케어 & 컨디션 관리
          </h4>
          <p class="text-gray-700 mb-3">
            일일 컨디션, 스트레스 지수, 수면의 질 등을 기록하고 분석합니다. 
            대회가 가까워질수록 증가하는 심리적 압박을 AI가 감지하여 적절한 심리 케어 프로그램과 이완 기법을 추천합니다.
          </p>
          <div class="bg-white p-3 rounded text-sm">
            <span class="font-semibold text-rose-700">실전 활용:</span> 
            <span class="text-gray-600">수면 패턴과 스트레스 지수를 모니터링하여 최적의 컨디션 유지 방법을 제안합니다.</span>
          </div>
        </div>
      </div>

      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">13년 노하우 × AI 기술 = 최강의 시너지</h3>
      <p class="text-gray-700 mb-4">
        호감모델아카데미는 미스코리아뿐만 아니라 다양한 모델대회에서도 탁월한 성과를 기록해왔습니다. 
        이러한 실전 경험과 노하우를 AI 시스템에 학습시켜, 신규 참가자들에게도 검증된 성공 전략을 제공합니다.
      </p>

      <div class="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
        <h4 class="text-lg font-semibold text-amber-800 mb-3">모델대회 주요 수상 실적</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div class="flex items-start">
            <span class="text-amber-500 mr-2 mt-1">🏆</span>
            <span class="text-gray-700"><strong>2013년</strong> 슈퍼모델 최종본선 진출</span>
          </div>
          <div class="flex items-start">
            <span class="text-amber-500 mr-2 mt-1">🏆</span>
            <span class="text-gray-700"><strong>2013년</strong> 전국 퍼스트모델 2위(금상)</span>
          </div>
          <div class="flex items-start">
            <span class="text-amber-500 mr-2 mt-1">🏆</span>
            <span class="text-gray-700"><strong>2009년</strong> 한·중 슈퍼모델 4위</span>
          </div>
          <div class="flex items-start">
            <span class="text-amber-500 mr-2 mt-1">🏆</span>
            <span class="text-gray-700"><strong>2008년</strong> IMOTY 한국대표 1위</span>
          </div>
        </div>
      </div>

      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">대학 입시와 기획사 오디션까지 원스톱 지원</h3>
      <p class="text-gray-700 mb-4">
        호감모델아카데미는 미인대회뿐만 아니라 모델 전공 대학 입시에서도 최고의 합격률을 자랑합니다. 
        서경대, 동덕여대, 대경대 K모델연기과에 매년 합격생을 배출하며, 현재 울산 MBC 아카데미 예술원 강의와 
        전 부산방송·부산 MBC 아카데미 강의 경력을 바탕으로 체계적인 입시 교육을 제공합니다.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div class="text-center mb-4">
            <span class="text-4xl">🎓</span>
          </div>
          <h4 class="text-xl font-bold text-gray-900 mb-3 text-center">대학 입시</h4>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-center">
              <span class="text-blue-500 mr-2">✓</span>
              서경대 모델과 매년 합격
            </li>
            <li class="flex items-center">
              <span class="text-blue-500 mr-2">✓</span>
              동덕여대 모델과 매년 합격
            </li>
            <li class="flex items-center">
              <span class="text-blue-500 mr-2">✓</span>
              대경대 K모델연기과 매년 합격
            </li>
            <li class="flex items-center">
              <span class="text-blue-500 mr-2">✓</span>
              개인별 맞춤 입시 전략 수립
            </li>
          </ul>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div class="text-center mb-4">
            <span class="text-4xl">🎬</span>
          </div>
          <h4 class="text-xl font-bold text-gray-900 mb-3 text-center">기획사 연계</h4>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-center">
              <span class="text-purple-500 mr-2">✓</span>
              다양한 엔터테인먼트 기획사 오디션 기회
            </li>
            <li class="flex items-center">
              <span class="text-purple-500 mr-2">✓</span>
              타 지역 모델학원 강사 활동 네트워크
            </li>
            <li class="flex items-center">
              <span class="text-purple-500 mr-2">✓</span>
              정기적인 기획사 연계 오디션 진행
            </li>
            <li class="flex items-center">
              <span class="text-purple-500 mr-2">✓</span>
              프로필 촬영 및 포트폴리오 제작 지원
            </li>
          </ul>
        </div>
      </div>

      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">미스경남, 미스부산을 넘어 전국 미인대회로</h3>
      <p class="text-gray-700 mb-4">
        호감모델아카데미는 지역 예선에서 시작하여 전국 본선까지 이어지는 체계적인 로드맵을 제공합니다. 
        미스경남, 미스부산 지역예선에서 진·선·미를 연속 배출한 노하우를 바탕으로, 
        서울 본선 진출과 수상까지 완벽하게 준비시킵니다.
      </p>

      <div class="bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 border-2 border-pink-300 rounded-lg p-8 mb-6">
        <h4 class="text-2xl font-bold text-center text-purple-800 mb-4">호감모델아카데미가 특별한 이유</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="flex items-start">
            <span class="text-2xl mr-3">🌟</span>
            <div>
              <div class="font-bold text-purple-700">13년 연속 배출 실적</div>
              <div class="text-sm text-gray-700">미스코리아 진·선·미 연속 배출</div>
            </div>
          </div>
          <div class="flex items-start">
            <span class="text-2xl mr-3">🤖</span>
            <div>
              <div class="font-bold text-purple-700">AI 기반 과학적 관리</div>
              <div class="text-sm text-gray-700">데이터로 증명되는 체계적 트레이닝</div>
            </div>
          </div>
          <div class="flex items-start">
            <span class="text-2xl mr-3">👨‍🏫</span>
            <div>
              <div class="font-bold text-purple-700">검증된 전문 강사진</div>
              <div class="text-sm text-gray-700">MBC 아카데미 등 유수 기관 강의 경력</div>
            </div>
          </div>
          <div class="flex items-start">
            <span class="text-2xl mr-3">🎯</span>
            <div>
              <div class="font-bold text-purple-700">입시·오디션 원스톱</div>
              <div class="text-sm text-gray-700">대학 입시부터 기획사 오디션까지</div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg p-8 text-center">
        <h3 class="text-2xl font-bold mb-4">당신의 꿈에 가까워지는 곳</h3>
        <p class="text-lg mb-2">호감모델아카데미와 함께라면</p>
        <p class="text-xl font-bold">미스코리아의 꿈이 현실이 됩니다</p>
      </div>
    `,
    category: 'company',
    date: '2025-10-13',
    image: '💎',
    featured: true,
    author: '드림에이아이랩',
    tags: ['호감모델아카데미', '미스코리아', 'AI', '미스경남', '미스부산', '모델', '미인대회', '인공지능', '디지털케어로그']
  },
  {
    id: 33,
    title: '발달장애 맞춤형 치료의 혁신: AI 디지털케어로그가 현실로 만든 데이터 기반 치료',
    excerpt: '기존의 주관적 관찰과 정보 단절을 극복하고, 객관적 데이터와 AI 분석을 통해 발달장애 아동의 맞춤형 치료를 현실로 만듭니다.',
    content: `
      <h2 class="text-3xl font-bold text-gray-900 mb-6">발달장애 맞춤형 치료의 혁신</h2>
      
      <div class="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
        <p class="text-blue-800 font-medium">"AI 디지털 케어로그는 발달장애를 '치료할 수 없는 것'이 아니라, '데이터를 통해 이해하고 관리할 수 있는 것'으로 인식하게 하는 패러다임 전환을 가져옵니다."</p>
      </div>

      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">기존 맞춤형 치료가 어려웠던 이유</h3>
      <p class="text-gray-700 mb-4">기존에는 발달장애 아동의 상태를 파악하기 위해 주로 부모나 교사의 주관적인 관찰이나, 병원에서의 짧은 시간 동안의 행동 평가에 의존했습니다. 이 방법으로는 아동의 복잡하고 미묘한 발달 상태 변화를 정확하게 파악하기 어려웠습니다.</p>
      
      <div class="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
        <h4 class="text-lg font-semibold text-red-800 mb-3">기존 방식의 한계</h4>
        <ul class="list-disc list-inside space-y-2 text-red-700">
          <li><strong>주관적 관찰 의존:</strong> 부모나 교사의 주관적인 관찰에만 의존</li>
          <li><strong>짧은 평가 시간:</strong> 병원에서의 짧은 시간 동안의 행동 평가만으로 판단</li>
          <li><strong>정보 단절:</strong> 가정, 학교, 치료 센터 등 각기 다른 기관의 정보가 공유되지 않음</li>
          <li><strong>치료 일관성 부족:</strong> 기관 간 정보 공유 부재로 치료의 일관성 유지 어려움</li>
        </ul>
      </div>

      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">AI 디지털 케어로그로 맞춤형 치료가 가능한 이유</h3>
      <p class="text-gray-700 mb-4">AI 디지털 케어로그는 이러한 한계를 극복하는 혁신적인 접근법을 제시합니다.</p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div class="flex items-center mb-4">
            <span class="text-3xl mr-3">📊</span>
            <h4 class="text-xl font-bold text-gray-900">객관적인 데이터 확보</h4>
          </div>
          <p class="text-gray-700 mb-3">아동의 일상 행동, 치료 과정에서의 반응, 수면 패턴, 음성 데이터 등 다양한 정보를 정량화된 데이터로 수집합니다.</p>
          <div class="bg-gray-50 p-3 rounded">
            <p class="text-sm text-gray-600"><strong>기존:</strong> "오늘 짜증을 많이 냈다" (주관적)</p>
            <p class="text-sm text-blue-600"><strong>개선:</strong> "특정 상황에서 10분간 소리를 질렀다" (객관적)</p>
          </div>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div class="flex items-center mb-4">
            <span class="text-3xl mr-3">🔗</span>
            <h4 class="text-xl font-bold text-gray-900">기관 간 정보 통합</h4>
          </div>
          <p class="text-gray-700 mb-3">가정, 학교, 병원, 치료 센터의 정보가 하나의 플랫폼에 통합됩니다.</p>
          <ul class="text-sm text-gray-600 space-y-1">
            <li>• 치료사가 가정에서의 행동 패턴 파악</li>
            <li>• 교사가 치료 효과를 교육에 반영</li>
            <li>• 일관된 치료 계획 수립</li>
          </ul>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div class="flex items-center mb-4">
            <span class="text-3xl mr-3">🤖</span>
            <h4 class="text-xl font-bold text-gray-900">AI 기반 패턴 분석</h4>
          </div>
          <p class="text-gray-700 mb-3">AI가 방대한 데이터를 분석하여 아동의 고유한 발달 패턴과 잠재적 특성을 찾아냅니다.</p>
          <ul class="text-sm text-gray-600 space-y-1">
            <li>• 감정 기복 패턴 파악</li>
            <li>• 효과적인 치료법 식별</li>
            <li>• 맞춤형 치료 방식 제안</li>
          </ul>
        </div>
      </div>

      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">왜 지금까지 없었고, 비슷한 것들과 무엇이 다른가?</h3>
      <p class="text-gray-700 mb-4">AI, 앱, 데이터 수집 기술 자체는 이미 오래전부터 존재해왔습니다. 하지만 이 모든 요소를 결합하고, 방대한 규모로 현장에 적용하는 것이 지금까지 어려웠기 때문에 'AI 디지털 케어로그'와 같은 통합 플랫폼이 없었던 것입니다.</p>

      <div class="space-y-6 mb-8">
        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <h4 class="text-lg font-semibold text-yellow-800 mb-2">1. 흩어져 있는 '데이터 사일로' 문제</h4>
          <p class="text-yellow-700 mb-2">의료 및 돌봄 데이터는 병원, 요양원, 가정, 학교 등 여러 곳에 흩어져 있었습니다. 각 기관은 자체적인 시스템을 사용하고, 데이터 형식도 달랐습니다.</p>
          <p class="text-yellow-700">AI는 방대한 양의 깨끗하고 표준화된 데이터가 필요합니다. 흩어져 있고 비정형적인 데이터로는 의미 있는 분석을 할 수 없었습니다.</p>
        </div>

        <div class="bg-green-50 border-l-4 border-green-400 p-4">
          <h4 class="text-lg font-semibold text-green-800 mb-2">2. '기술'이 아닌 '생태계'의 문제</h4>
          <p class="text-green-700 mb-2">단순한 앱과 AI는 존재했지만, '데이터를 수집하고 → 분석하고 → 다시 현장에 적용하고 → 그 결과를 재학습하는' 선순환 생태계를 만들지는 못했습니다.</p>
          <p class="text-green-700">AI 디지털 케어로그는 전국의 수천 개 기관을 설득하고 협력하여 이 방대한 네트워크를 구축했습니다.</p>
        </div>

        <div class="bg-purple-50 border-l-4 border-purple-400 p-4">
          <h4 class="text-lg font-semibold text-purple-800 mb-2">3. '환류'의 부재</h4>
          <p class="text-purple-700 mb-2">대부분의 유사 기술은 일방향입니다. 데이터를 수집해 보여주는 것에 그칩니다.</p>
          <p class="text-purple-700">반면, AI 디지털 케어로그는 <strong>양방향 '환류'</strong>가 핵심입니다. AI가 분석한 결과를 현장에서 활용하고, 그 피드백을 다시 수집하여 AI의 예측 정확도를 높이는 구조입니다.</p>
        </div>
      </div>

      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">왜 정부가 나서지 않았을까?</h3>
      <p class="text-gray-700 mb-4">국가가 발달장애 문제에 관심을 가지고 있지만, AI 디지털 케어로그와 같은 기술을 정부가 직접 구현하기 어려웠던 데에는 몇 가지 근본적인 이유가 있습니다.</p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div class="flex items-center mb-4">
            <span class="text-3xl mr-3">⏰</span>
            <h4 class="text-xl font-bold text-gray-900">속도의 문제</h4>
          </div>
          <p class="text-gray-700 text-sm">정부 사업은 예산 편성, 여러 부처의 의견 조율, 입찰 과정 등 복잡한 행정 절차를 거쳐 수년이 걸립니다. AI 디지털 케어로그는 '환류'와 '지속적인 업데이트'가 핵심인데, 정부 시스템은 한 번 구축하면 수정이 어렵습니다.</p>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div class="flex items-center mb-4">
            <span class="text-3xl mr-3">🔒</span>
            <h4 class="text-xl font-bold text-gray-900">데이터 통합의 난관</h4>
          </div>
          <p class="text-gray-700 text-sm">발달장애 관련 데이터는 매우 민감한 개인정보입니다. 정부가 이 데이터를 한곳에 모으려면 까다로운 법적 절차와 보안 규제를 충족해야 하는데, 이 과정이 매우 복잡하고 시간이 오래 걸립니다.</p>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div class="flex items-center mb-4">
            <span class="text-3xl mr-3">🏗️</span>
            <h4 class="text-xl font-bold text-gray-900">기술 전문성의 한계</h4>
          </div>
          <p class="text-gray-700 text-sm">정부는 거대한 기반 시설을 만드는 데 강점이 있지만, 복잡한 데이터를 분석하고, 사용자 친화적인 인터페이스를 만들며, 끊임없이 새로운 알고리즘을 개발하는 역량은 민간 기업이 더 뛰어납니다.</p>
        </div>
      </div>

      <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-6 mt-8">
        <h4 class="text-lg font-semibold text-indigo-800 mb-3">이상적인 협력 모델</h4>
        <p class="text-indigo-700 mb-4">정부는 AI 디지털 케어로그와 같은 혁신을 직접 구현하기보다는 민간 기업이 성장할 수 있도록 지원하는 역할을 더 효과적으로 수행합니다.</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h5 class="font-semibold text-indigo-700 mb-2">민간 기업의 역할</h5>
            <p class="text-indigo-600 text-sm">혁신적인 기술 개발과 현장 적용</p>
          </div>
          <div>
            <h5 class="font-semibold text-indigo-700 mb-2">정부의 역할</h5>
            <p class="text-indigo-600 text-sm">제도적 기반 마련과 안전한 사용 환경 조성</p>
          </div>
        </div>
      </div>
    `,
    category: 'tech',
    date: '2025-09-29',
    image: '🧠',
    featured: true,
    author: '드림에이아이랩',
    tags: ['발달장애 치료', '맞춤형 치료', 'AI 디지털케어로그', '데이터 기반 치료', '객관적 데이터', '기관 간 연계', '정부 역할', '민간 혁신']
  },
  {
    id: 32,
    title: '전략적 가치 및 사회적 영향: AI 디지털케어로그가 만들어가는 새로운 표준',
    excerpt: '사회적 문제 해결을 비즈니스 성장의 핵심 동력으로 삼아 지속 가능한 기업 생태계를 구축하고, 정량적 지표로 혁신의 가치를 증명합니다.',
    content: `
      <h2 class="text-3xl font-bold text-gray-900 mb-6">전략적 가치 및 사회적 영향</h2>
      
      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">사회적 가치와 지속 가능한 비즈니스의 결합</h3>
      <p class="text-gray-700 mb-4">드림에이아이랩의 가장 독특한 가치 제안은 사회적 문제 해결을 비즈니스 성장의 핵심 동력으로 삼는 데 있습니다. 발달장애, 시니어 돌봄과 같은 시장은 기존 기술이 접근하기 어렵고 수익성이 낮다는 인식이 있었으나, DAL은 이 영역을 먼저 공략하여 독보적인 데이터와 기술력을 확보했습니다.</p>
      
      <div class="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
        <h4 class="text-lg font-semibold text-green-800 mb-2">핵심 전략</h4>
        <ul class="list-disc list-inside space-y-1 text-green-700">
          <li>단기적인 수익성보다는 장기적인 데이터 경쟁력과 신뢰 구축</li>
          <li>사회적 약자를 돕는 과정 자체가 지속 가능한 기업 생태계의 기반</li>
          <li>기존 기술이 접근하기 어려운 영역을 먼저 공략</li>
          <li>독보적인 데이터와 기술력을 통한 경쟁 우위 확보</li>
        </ul>
      </div>

      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">혁신의 정량적 가치: 핵심 성과 지표 (KPIs)</h3>
      <p class="text-gray-700 mb-4">드림에이아이랩은 추상적인 기술의 가치를 객관적이고 정량적인 지표로 증명합니다. 이는 잠재적 파트너나 투자자에게 매우 설득력 있는 자료를 제공하며, AI 디지털케어로그가 단순한 아이디어를 넘어 실제로 현장에서 혁신적 효과를 창출하고 있음을 보여줍니다.</p>

      <div class="overflow-x-auto mb-8">
        <table class="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">지표 항목</th>
              <th class="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">기대 효과</th>
              <th class="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">의미</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr>
              <td class="px-4 py-3 text-sm font-medium text-gray-900">임상시험 비용 절감</td>
              <td class="px-4 py-3 text-sm font-semibold text-blue-600">60-80%</td>
              <td class="px-4 py-3 text-sm text-gray-700">데이터 수집 및 관리를 자동화하여 임상 연구의 효율성을 대폭 개선</td>
            </tr>
            <tr>
              <td class="px-4 py-3 text-sm font-medium text-gray-900">데이터 수집 속도 단축</td>
              <td class="px-4 py-3 text-sm font-semibold text-blue-600">3-5배</td>
              <td class="px-4 py-3 text-sm text-gray-700">기존 수동 방식 대비 더 빠르고 효율적으로 데이터를 확보</td>
            </tr>
            <tr>
              <td class="px-4 py-3 text-sm font-medium text-gray-900">임상시험 대비 표본 규모 확대</td>
              <td class="px-4 py-3 text-sm font-semibold text-blue-600">10배+</td>
              <td class="px-4 py-3 text-sm text-gray-700">더 많은 실제 데이터를 기반으로 연구를 진행하여 결과의 신뢰도 향상</td>
            </tr>
            <tr>
              <td class="px-4 py-3 text-sm font-medium text-gray-900">EMR 연동률</td>
              <td class="px-4 py-3 text-sm font-semibold text-blue-600">95%+</td>
              <td class="px-4 py-3 text-sm text-gray-700">주요 병원 시스템과 원활하게 연동되어 의료 데이터 통합 실현</td>
            </tr>
            <tr>
              <td class="px-4 py-3 text-sm font-medium text-gray-900">데이터 표준 확보율</td>
              <td class="px-4 py-3 text-sm font-semibold text-blue-600">도메인별 커버리지 %</td>
              <td class="px-4 py-3 text-sm text-gray-700">분산된 데이터를 표준화하는 핵심 기술의 역량을 보여줌</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <h4 class="text-lg font-semibold text-blue-800 mb-3">제약 산업에의 혁신적 가치</h4>
        <p class="text-blue-700 mb-3">이러한 지표는 AI 디지털케어로그가 특히 임상 및 제약 산업에 막대한 가치를 제공할 수 있음을 나타냅니다. 제약사는 신약 개발 과정에서 막대한 비용과 시간을 소요하며, 임상시험의 한계로 인해 실제 약물 효과에 대한 충분한 데이터를 확보하기 어렵습니다.</p>
        <p class="text-blue-700">AI 디지털케어로그는 이러한 제약사들의 현장 데이터(RWE) 확보를 지원함으로써, 임상시험을 대체하거나 보완하는 새로운 길을 열어줄 수 있습니다. 이는 신약 개발과 시장 출시 과정을 혁신하고, 궁극적으로 인류의 건강 증진에 기여하는 거대한 시장 기회를 창출합니다.</p>
      </div>

      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">결론: 미래를 위한 새로운 표준</h3>
      <p class="text-gray-700 mb-4">드림에이아이랩은 AI 디지털케어로그라는 독보적인 기술을 통해 단순히 개별 솔루션을 제공하는 기업을 넘어, 인간의 경험과 행동을 기록하고 분석하는 새로운 데이터 표준을 구축하는 선구자적 역할을 수행하고 있습니다.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div class="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-6">
          <h4 class="text-lg font-semibold text-purple-800 mb-3">사회적 미션에서 시작</h4>
          <p class="text-purple-700 text-sm">사회적 약자를 위한 공익적 미션에서 시작하여, 가장 복잡한 데이터를 표준화하고 이를 기반으로 AI를 고도화하는 독창적인 비즈니스 모델을 완성</p>
        </div>
        <div class="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6">
          <h4 class="text-lg font-semibold text-green-800 mb-3">상호 보완적 관계</h4>
          <p class="text-green-700 text-sm">사회적 가치와 지속 가능한 성장이 상호 보완적인 관계를 형성하는 이상적인 비즈니스 사례를 제시</p>
        </div>
      </div>

      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">AI 디지털케어로그가 가져올 변화</h3>
      <div class="space-y-4 mb-8">
        <div class="flex items-start space-x-3">
          <span class="text-2xl">🏥</span>
          <div>
            <h4 class="font-semibold text-gray-900 mb-1">의료 분야 혁신</h4>
            <p class="text-gray-700 text-sm">단편적이고 주관적인 진료의 한계를 극복하고, 개인의 일상생활을 아우르는 연속적이고 객관적인 데이터 기반의 예방적·맞춤형 돌봄을 실현</p>
          </div>
        </div>
        <div class="flex items-start space-x-3">
          <span class="text-2xl">👴</span>
          <div>
            <h4 class="font-semibold text-gray-900 mb-1">노인성 질환 조기 발견</h4>
            <p class="text-gray-700 text-sm">치매와 같은 노인성 질환의 조기 발견을 가능하게 하고, 발달장애 아동의 교육 및 치료 과정을 획기적으로 개선</p>
          </div>
        </div>
        <div class="flex items-start space-x-3">
          <span class="text-2xl">⚡</span>
          <div>
            <h4 class="font-semibold text-gray-900 mb-1">의료 혁신 가속화</h4>
            <p class="text-gray-700 text-sm">임상 연구의 비용과 시간을 대폭 절감하여 의료 혁신을 가속화</p>
          </div>
        </div>
      </div>

      <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-6 mt-8">
        <h4 class="text-lg font-semibold text-indigo-800 mb-3">궁극적 비전</h4>
        <p class="text-indigo-700 mb-4">궁극적으로, DAL의 AI 디지털케어로그는 헬스케어, 모빌리티, HR, 웰니스 등 다양한 산업 분야에 걸쳐 인간 활동 데이터를 표준화하고 지능화하는 핵심 인프라로 자리매김할 잠재력을 지닙니다.</p>
        <p class="text-indigo-800 font-medium">"이는 데이터와 AI를 통해 인류가 직면한 난제를 해결하고, 모두에게 더 나은 미래를 구축하는 새로운 길을 제시하는 거대한 가치를 창출하고 있습니다."</p>
        <p class="text-indigo-600 text-sm mt-3">- 드림에이아이랩 비전</p>
      </div>
    `,
    category: 'insight',
    date: '2025-09-29',
    image: '🎯',
    featured: true,
    author: '드림에이아이랩',
    tags: ['전략적 가치', '사회적 영향', 'KPI', '지속가능성', '데이터 표준', '의료 혁신', '제약 산업', 'RWE']
  },
  {
    id: 31,
    title: 'AI 디지털케어로그의 광범위한 산업 적용: 헬스케어를 넘어선 범용 플랫폼',
    excerpt: 'AI 디지털케어로그가 의료·돌봄을 넘어 모빌리티, HR, 스포츠, 정신건강 등 다양한 산업에서 개인화된 솔루션을 제공하는 범용 인프라로 발전하고 있습니다.',
    content: `
      <h2 class="text-3xl font-bold text-gray-900 mb-6">헬스케어를 넘어선 광범위한 산업 적용</h2>
      
      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">인간 데이터의 범용적 플랫폼</h3>
      <p class="text-gray-700 mb-4">AI 디지털케어로그의 진정한 가치는 의료 및 돌봄 분야에 국한되지 않는 범용성에 있습니다. 이 기술의 본질은 "사람의 행위·경험·상태를 기록 → AI 분석 → 맞춤형 최적화 → 집단지능 학습"에 있으며, 이는 특정 산업의 수직적 솔루션이 아닌, 인간의 행동과 경험 데이터를 다루는 모든 분야에 적용 가능한 수평적 인프라를 의미합니다.</p>
      
      <div class="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
        <h4 class="text-lg font-semibold text-blue-800 mb-2">핵심 가치</h4>
        <ul class="list-disc list-inside space-y-1 text-blue-700">
          <li>한 분야의 성공 경험과 데이터가 다른 분야 개발을 직접적으로 가속화</li>
          <li>전체 플랫폼의 지능을 높이는 상호 증진 구조</li>
          <li>고도로 확장 가능하고 탄력적인 비즈니스 모델</li>
          <li>인간 행동과 경험 데이터를 다루는 모든 분야에 적용 가능</li>
        </ul>
      </div>

      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">AI로 미래 산업 구축</h3>
      <p class="text-gray-700 mb-4">AI 디지털케어로그는 다음과 같은 다양한 산업에서 혁신을 창출할 잠재력을 지니고 있습니다.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div class="flex items-center mb-4">
            <span class="text-3xl mr-3">🚗</span>
            <h4 class="text-xl font-bold text-gray-900">모빌리티</h4>
          </div>
          <p class="text-gray-700 mb-3">운전자의 급가속, 급제동, 도로 유형 등 운전 로그를 표준화하고 분석하여, 개인 맞춤형 보조 시스템이나 보험 연계 및 리스크 가이드를 제공할 수 있습니다.</p>
          <ul class="text-sm text-gray-600 space-y-1">
            <li>• 개인 맞춤형 운전 보조 시스템</li>
            <li>• 보험 연계 리스크 관리</li>
            <li>• 안전 운전 가이드 제공</li>
          </ul>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div class="flex items-center mb-4">
            <span class="text-3xl mr-3">🏢</span>
            <h4 class="text-xl font-bold text-gray-900">기업 HR</h4>
          </div>
          <p class="text-gray-700 mb-3">직무 관련 기록 및 직원들의 상태를 데이터로 표준화하여, 데이터 기반의 효율적인 인사 관리와 직무 평가, 직원 웰빙 관리에 활용될 수 있습니다.</p>
          <ul class="text-sm text-gray-600 space-y-1">
            <li>• 데이터 기반 인사 관리</li>
            <li>• 객관적 직무 평가</li>
            <li>• 직원 웰빙 관리</li>
          </ul>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div class="flex items-center mb-4">
            <span class="text-3xl mr-3">🏃</span>
            <h4 class="text-xl font-bold text-gray-900">스포츠/피트니스</h4>
          </div>
          <p class="text-gray-700 mb-3">운동 로그, 신체 센서 데이터 등을 통합 분석하여 개인 맞춤형 훈련 계획을 제공하고, 성과를 객관적으로 추적할 수 있습니다.</p>
          <ul class="text-sm text-gray-600 space-y-1">
            <li>• 개인 맞춤형 훈련 계획</li>
            <li>• 객관적 성과 추적</li>
            <li>• 신체 센서 데이터 통합</li>
          </ul>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div class="flex items-center mb-4">
            <span class="text-3xl mr-3">🧠</span>
            <h4 class="text-xl font-bold text-gray-900">정신 건강 및 웰빙</h4>
          </div>
          <p class="text-gray-700 mb-3">사용자의 일지 기록과 웨어러블 센서 데이터를 바탕으로 감정 상태를 분석하고, 개인 이력에 기반한 맞춤형 상담 및 가이드를 제공하는 데 활용될 수 있습니다.</p>
          <ul class="text-sm text-gray-600 space-y-1">
            <li>• 감정 상태 분석</li>
            <li>• 맞춤형 상담 제공</li>
            <li>• 웨어러블 데이터 활용</li>
          </ul>
        </div>
      </div>

      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">상호 증진하는 성장 모델</h3>
      <p class="text-gray-700 mb-4">DAL이 헬스케어 분야에서 쌓은 정밀하고 복합적인 데이터 처리 역량은 이들 분야에서도 고도화된 개인화 및 최적화 솔루션을 가능하게 합니다. 특히, 이러한 광범위한 산업으로의 확장은 DAL의 데이터 자산을 더욱 풍부하게 만들어, 기존 헬스케어 AI 모델의 정확도를 더욱 높이는 피드백 루프를 형성합니다.</p>
      
      <div class="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-6 mt-8">
        <h4 class="text-lg font-semibold text-purple-800 mb-3">핵심 성장 전략</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h5 class="font-semibold text-purple-700 mb-2">데이터 자산 확장</h5>
            <p class="text-purple-600 text-sm">다양한 산업에서 수집되는 데이터가 전체 플랫폼의 지능을 향상</p>
          </div>
          <div>
            <h5 class="font-semibold text-purple-700 mb-2">피드백 루프</h5>
            <p class="text-purple-600 text-sm">기존 헬스케어 AI 모델의 정확도를 지속적으로 개선</p>
          </div>
        </div>
        <p class="text-purple-800 font-medium mt-4">"이는 기술과 비즈니스가 상호 증진하는 강력한 성장 모델을 구축합니다."</p>
      </div>
    `,
    category: 'tech',
    date: '2025-09-29',
    image: '🌐',
    featured: true,
    author: '드림에이아이랩',
    tags: ['AI 디지털케어로그', '산업 적용', '범용 플랫폼', '모빌리티', 'HR', '스포츠', '정신건강', '데이터 처리']
  },
  {
    id: 30,
    title: '헬스케어 데이터의 근본적 문제 해결: AI 디지털케어로그의 혁신적 접근',
    excerpt: '기존 의료 시스템의 데이터 파편화 문제를 타임라인/에피소드 모델로 해결하고, 발달장애 케어에서 연속적이고 객관적인 치료를 실현합니다.',
    content: `
      <h2 class="text-3xl font-bold text-gray-900 mb-6">헬스케어 데이터의 근본적 문제 해결</h2>
      
      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">기존 시스템의 한계</h3>
      <p class="text-gray-700 mb-4">기존의 의료 및 사회 돌봄 시스템은 여러 가지 근본적인 문제점을 안고 있습니다. 데이터가 가정, 병원, 학교, 복지 센터 등 여러 기관에 흩어져 종이나 엑셀로 관리되므로, 환자의 치료 과정이 단절되고 맥락을 잃게 됩니다.</p>
      
      <div class="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
        <h4 class="text-lg font-semibold text-red-800 mb-2">주요 문제점</h4>
        <ul class="list-disc list-inside space-y-1 text-red-700">
          <li>기관마다 데이터 양식이 제각각이어서 정보의 재활용이 불가능</li>
          <li>치료 성과를 객관적으로 측정하기 어려워 개인 특성을 무시한 획일적 접근</li>
          <li>짧은 진료 시간 동안 보호자의 주관적 설명에만 의존</li>
          <li>기관 간 정보 공유의 부재로 치료의 연속성 상실</li>
        </ul>
      </div>

      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">AI 디지털케어로그의 혁신적 해법</h3>
      <p class="text-gray-700 mb-4">AI 디지털케어로그는 타임라인/에피소드 모델을 통해 이러한 문제를 해결합니다. 이 모델은 사람의 행동, 경험, 상태를 시간의 흐름과 사건의 맥락에 따라 기록하고 분석함으로써, 파편화된 데이터에 연속성을 부여합니다.</p>
      
      <div class="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
        <h4 class="text-lg font-semibold text-green-800 mb-2">핵심 혁신</h4>
        <ul class="list-disc list-inside space-y-1 text-green-700">
          <li>환자의 일상생활을 아우르는 객관적이고 종단적인 기록 확보</li>
          <li>질병 관리 패러다임을 '사후 대응'에서 '예방적, 예측적 관리'로 전환</li>
          <li>데이터 이식성을 통한 기관 이동 시에도 치료 기록 연속성 보장</li>
          <li>어디에 있든 동일한 품질의 정보를 바탕으로 한 일관성 있는 치료</li>
        </ul>
      </div>

      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">발달장애 및 ADHD 케어 혁신 (자람이 프로젝트)</h3>
      <p class="text-gray-700 mb-4">DAL의 자람이 프로젝트는 발달장애 및 ADHD 케어 분야에서 AI 디지털케어로그의 혁신적 가치를 가장 명확하게 보여주는 사례입니다. 이 플랫폼은 환자, 보호자/교사, 의사/치료사 등 모든 이해관계자를 하나의 표준화된 기록으로 연결하는 디지털 통합 시스템의 역할을 수행합니다.</p>

      <div class="overflow-x-auto mb-6">
        <table class="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">대상</th>
              <th class="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">기존의 문제점</th>
              <th class="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">AI 디지털케어로그의 혁신</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr>
              <td class="px-4 py-3 text-sm font-medium text-gray-900">발달장애인</td>
              <td class="px-4 py-3 text-sm text-gray-700">
                <ul class="list-disc list-inside space-y-1">
                  <li>기관마다 다른 치료법으로 인한 혼란</li>
                  <li>개인 특성을 무시한 획일적 교육</li>
                  <li>객관적 성과 파악 및 동기 부족</li>
                </ul>
              </td>
              <td class="px-4 py-3 text-sm text-gray-700">
                <ul class="list-disc list-inside space-y-1">
                  <li>맞춤형 학습 자료 자동 생성</li>
                  <li>성장 과정을 그래프로 시각화</li>
                  <li>게임화 학습 및 보상 시스템 최적화</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td class="px-4 py-3 text-sm font-medium text-gray-900">보호자·교사</td>
              <td class="px-4 py-3 text-sm text-gray-700">
                <ul class="list-disc list-inside space-y-1">
                  <li>수기 기록 및 행정 업무 과부하</li>
                  <li>맞춤형 자료 제작 부담</li>
                  <li>주관적 판단에 의존한 치료 계획</li>
                </ul>
              </td>
              <td class="px-4 py-3 text-sm text-gray-700">
                <ul class="list-disc list-inside space-y-1">
                  <li>AI 기반 개입 가이드 제안</li>
                  <li>실시간 대시보드로 진전 상황 파악</li>
                  <li>AI 심리케어 및 상담 자료 자동 정리</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td class="px-4 py-3 text-sm font-medium text-gray-900">의사·병원</td>
              <td class="px-4 py-3 text-sm text-gray-700">
                <ul class="list-disc list-inside space-y-1">
                  <li>단편적이고 주관적인 진료 정보</li>
                  <li>기관 간 정보 공유의 부재</li>
                  <li>약물 효과 추적의 어려움</li>
                </ul>
              </td>
              <td class="px-4 py-3 text-sm text-gray-700">
                <ul class="list-disc list-inside space-y-1">
                  <li>증상 패턴 분석을 통한 AI 진료 지원</li>
                  <li>약물 복용 후 일상 변화 자동 추적</li>
                  <li>FHIR 기반 EMR 연동으로 정보 통합</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">디지털 브릿지의 역할</h3>
      <p class="text-gray-700 mb-4">자람이 프로젝트의 핵심은 단절된 케어 생태계를 하나로 묶는 디지털 브릿지의 역할입니다. 표준화된 데이터는 기관을 이동해도 치료 기록이 연속적으로 이어지게 하여 데이터 이식성을 보장하고, 이는 환자가 어디에 있든 동일한 품질의 정보를 바탕으로 일관성 있는 치료를 받을 수 있게 합니다.</p>
      
      <div class="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
        <p class="text-blue-800 font-medium">"이는 단순한 편의성 개선을 넘어, 발달장애 케어의 구조 자체를 근본적으로 혁신하는 변화입니다."</p>
        <p class="text-blue-600 text-sm mt-2">- 드림에이아이랩 기술팀</p>
      </div>
    `,
    category: 'tech',
    date: '2025-09-29',
    image: '🏥',
    featured: true,
    author: '드림에이아이랩',
    tags: ['AI 디지털케어로그', '헬스케어 데이터', '발달장애 치료', '자람이', '의료 혁신', '데이터 표준화']
  },
  {
    id: 29,
    title: '자람이 – 발달장애 치료의 구조적 한계를 데이터로 해결',
    excerpt: '병원·학교·센터·가정의 단절을 “하나의 케어로그 + 전문가-AI 하이브리드”로 통합해 치료의 연속성과 객관성을 확보합니다.',
    content: `
      <h2 class="text-3xl font-bold text-gray-900 mb-6">발달장애 치료의 구조적 한계, 데이터로 끝낸다</h2>
      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-3">현재 한계</h3>
      <ul class="list-disc list-inside space-y-2 text-gray-700">
        <li>데이터 부족: 객관적 치료 데이터 부족으로 방향 설정 어려움</li>
        <li>기관 단절: 병원·학교·센터·가정 간 정보 공유 불가</li>
        <li>주관 의존: 주관 보고 중심이라 객관적 평가 어려움</li>
        <li>장기 추적 불가: 개입 타이밍 파악 어려움</li>
      </ul>
      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-3">자람이의 해법</h3>
      <ul class="list-disc list-inside space-y-2 text-gray-700">
        <li>실시간 통합 데이터: 표준 케어로그로 연속적 치료</li>
        <li>하이브리드 접근: AI 보조 + 전문가 판단</li>
        <li>객관적 데이터 기반 효과 측정</li>
        <li>24시간 협업: 기관 간 즉시 협의</li>
      </ul>
      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-3">검증된 성과</h3>
      <ul class="list-disc list-inside space-y-2 text-gray-700">
        <li>치료 목표 달성률: 45% → 80%(3개월 기준)</li>
        <li>행정 업무 시간: 주간 20시간 → 8시간(60% 단축)</li>
        <li>데이터 정확성: 주관 70% → 객관 지표 95%</li>
        <li>기관 연계: 월 1회 보고 → 실시간 공유</li>
      </ul>
      <div class="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-8">
        <p class="text-gray-800">“기록의 축적이 치료의 혁신으로 이어지는 시대.” 자람이는 치료의 연속성과 객관성을 데이터로 보장합니다.</p>
      </div>
    `,
    category: 'updates',
    date: '2025-09-22',
    image: '📈',
    featured: false,
    author: '드림에이아이랩',
    tags: ['자람이', '업데이트', '디지털케어로그', '발달장애', 'AI']
  },
  {
    id: 28,
    title: '자람이AI – 7개 역할군 데모 오픈: 홈티매칭·약물추적·AI 스케줄',
    excerpt: '보호자·교사·치료사·의사·활동보조·센터/병원/학교 관리자를 위한 완전 구현 데모와 신기능을 공개합니다.',
    content: `
      <h2 class="text-3xl font-bold text-gray-900 mb-6">7개 역할군 데모 전면 공개</h2>
      <p class="text-gray-700 mb-4">보호자, 교사, 치료사, 의사, 활동보조, 센터/병원/학교 관리자가 실제 워크플로우를 로그인 없이 체험할 수 있습니다.</p>
      <h3 class="text-2xl font-bold text-gray-900 mt-8 mb-3">신기능</h3>
      <ul class="list-disc list-inside space-y-2 text-gray-700">
        <li>홈티매칭: 아동 특성 기반 활동보조 매칭, 가정 케어 연속성 강화</li>
        <li>약물 변경 후 집중추적: 2주 집중 관찰로 효과·부작용 실시간 분석</li>
        <li>AI 스케줄 최적화: 중첩/충돌 방지, 최적 시간 추천, 업무 균형 조정</li>
        <li>10가지 치료 모듈 통합·표준 행정 자동화·AI 분석/추천</li>
      </ul>
      <div class="bg-blue-50 border-l-4 border-blue-500 p-6 mt-8">
        <p class="text-gray-800">학교 연계: IEP 관리, 맞춤 교재 자동 생성(DALL·E), 집중도 기반 스케줄링까지 제공합니다.</p>
      </div>
    `,
    category: 'updates',
    date: '2025-09-22',
    image: '🆕',
    featured: false,
    author: '드림에이아이랩',
    tags: ['자람이AI', '업데이트', '데모', '홈티매칭', '약물추적', 'AI스케줄']
  },
  {
    id: 1,
    title: '드림에이아이랩, 채식 라이프를 건강 데이터와 연결한 베지케어(VeggieCare) 공개',
    excerpt: '채식의 시작부터 이후의 건강관리까지. 드림에이아이랩이 채식인(베지테리안·비건·플렉시테리언)을 위한 통합 플랫폼 베지케어(VeggieCare)를 선공개합니다.',
    content: `
      <h2 class="text-3xl font-bold text-gray-900 mb-6">베지케어(VeggieCare) 공개</h2>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">드림에이아이랩(Dream AI Lab)이 채식인(베지테리안·비건·플렉시테리언)을 위한 통합 플랫폼 <strong>베지케어(VeggieCare)</strong>를 선공개합니다. 베지케어는 단순한 맛집/레시피 앱을 넘어, 디지털케어로그와 AI 요리사를 결합해 개인별 건강 데이터에 맞춘 영양관리–식단–외식–커뮤니티를 한 화면에서 이어줍니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">왜 베지케어인가</h3>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">채식은 '무엇을 안 먹느냐'가 아니라 <strong>'어떻게 건강하게 먹느냐'</strong>의 문제입니다. 드림에이아이랩은 발달장애·시니어·헬스케어 영역에서 축적한 디지털케어로그 기술을 채식 라이프에 접목해, 사용자가 스스로의 기록을 토대로 데이터 기반 선택을 하도록 돕습니다. 완전 비건이 아니어도 괜찮습니다. 락토/오보/페스코/플렉시테리언 등 개인의 속도와 방식을 존중하며, 실천 가능한 작은 변화를 설계합니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">베지케어 핵심 기능</h3>
      <ul class="list-disc list-inside space-y-3 mb-6 text-gray-700">
        <li><strong>AI 맞춤형 영양 관리:</strong> 혈압·혈당·체중 등 개인 건강기록(디지털케어로그 연동)과 알러지·채식 유형을 반영해 부족 영양소를 짚고 식단·보충 전략을 제안</li>
        <li><strong>AI 요리사:</strong> "집에 두부·시금치 있어요"처럼 재료를 입력하면 즉시 레시피 생성. 조리시간·난이도·영양 포인트까지 함께 제공</li>
        <li><strong>채식 맛집 탐색:</strong> GPS 기반 비건/채식 친화 식당 지도와 후기/메뉴 정보를 제공하고, 외부 주문/예약 링크와도 연결</li>
        <li><strong>커뮤니티 & 챌린지:</strong> 레시피·후기·Q&A 게시판과 함께 '한 달 채식' 같은 챌린지를 운영, 포인트/쿠폰/뱃지 등 리워드 제공</li>
        <li><strong>제휴 연동:</strong> 배달앱/밀키트/브랜드와의 API 연계로 사용자의 선택지를 확장 (순차 공개)</li>
      </ul>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">무엇이 달라지나</h3>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">기록 → 분석 → 실천 → 피드백이 순환하는 케어로그 루프로, 채식 전환 이후의 몸 상태 변화를 눈에 보이게 만듭니다. 혼자 하기 어려웠던 채식을 커뮤니티 기반으로 지속하고, 외식–집밥–보충까지 경험 전반을 유기적으로 연결합니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">로드맵</h3>
      <ol class="list-decimal list-inside space-y-2 mb-6 text-gray-700">
        <li><strong>오픈 알파:</strong> 서비스 소개 페이지 공개, 커뮤니티/레시피·맛집 베타, 기본 리워드 시작</li>
        <li><strong>베타:</strong> 디지털케어로그–AI 요리사 완전 연동, 제휴 파트너 확대</li>
        <li><strong>정식 런칭:</strong> 구독형 건강관리, 기업/기관용(웰니스) 모듈, 리워드 확대</li>
      </ol>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">참여 안내</h3>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">베타 테스터/식당/브랜드 파트너 상시 모집 중입니다. 문의: contact@dreamailab.com</p>
      
      <div class="bg-green-50 border-l-4 border-green-500 p-6 mt-8">
        <p class="text-lg font-semibold text-gray-900 mb-2">베지케어 – 채식, 그 이후까지 함께 케어합니다.</p>
        <p class="text-gray-700">건강한 식탁이 지속가능한 일상으로 이어지도록, 드림에이아이랩이 곁을 지키겠습니다.</p>
        <p class="text-sm text-gray-600 mt-2">슬로건: "채식, 그 이후까지 함께 케어합니다." / "건강한 식탁, 지속가능한 지구."</p>
      </div>
    `,
    category: 'company',
    date: '2024-12-20',
    image: '🌱',
    featured: true,
    author: '드림에이아이랩',
    tags: ['베지케어', 'VeggieCare', '채식', '비건', 'AI', '디지털케어로그', '영양관리']
  },
  {
    id: 2,
    title: '드림에이아이랩, 채식 라이프 통합 플랫폼 베지케어(VeggieCare) 공개… 디지털케어로그와 AI 요리로 데이터 기반 채식 구현',
    excerpt: '드림에이아이랩이 채식인을 위한 통합 플랫폼 베지케어(VeggieCare)를 공개했습니다. 디지털케어로그 기술과 AI 레시피 추천을 결합해 개인의 건강 데이터에 맞춘 영양관리·식단·외식·커뮤니티·리워드를 하나의 경험으로 제공합니다.',
    content: `
      <h2 class="text-3xl font-bold text-gray-900 mb-6">베지케어(VeggieCare) 공식 공개</h2>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">드림에이아이랩(Dream AI Lab)은 오늘 채식인을 위한 통합 플랫폼 <strong>베지케어(VeggieCare)</strong>를 공개했다. 베지케어는 드림에이아이랩의 디지털케어로그 기술과 AI 레시피 추천을 결합해, 개인의 건강 데이터에 맞춘 영양관리–식단–외식–커뮤니티–리워드를 하나의 경험으로 제공한다.</p>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">베지케어는 완전 비건뿐 아니라 락토/오보/페스코/플렉시테리언 등 다양한 채식 유형을 지원하며, 사용자는 자신의 건강기록과 식습관을 바탕으로 부족 영양소를 확인하고 맞춤형 식단/레시피를 추천받는다. 외식 시에는 GPS 기반 비건/채식 친화 식당 정보와 리뷰를 확인하고, 커뮤니티에서 레시피·후기·Q&A를 통해 서로의 실천을 돕는다. '한 달 채식' 챌린지와 같은 활동을 통해 포인트/쿠폰/뱃지 등 리워드도 제공된다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">제품 핵심</h3>
      <ul class="list-disc list-inside space-y-3 mb-6 text-gray-700">
        <li><strong>디지털케어로그 연동 영양관리:</strong> 혈압·혈당·체중 등 건강기록과 알러지/채식 유형을 반영한 개인화 분석</li>
        <li><strong>AI 요리사:</strong> 재료·취향·시간을 입력하면 즉시 레시피 생성, 영양 포인트 안내</li>
        <li><strong>채식 맛집 매핑:</strong> 위치 기반 비건/채식 식당 검색·후기·추천 메뉴</li>
        <li><strong>커뮤니티 & 리워드:</strong> 챌린지 참여, 포인트/쿠폰, 뱃지 시스템</li>
        <li><strong>제휴 API:</strong> 배달앱·밀키트·브랜드 연동(순차 확대)</li>
      </ul>
      
      <div class="bg-blue-50 border-l-4 border-blue-500 p-6 mt-8 mb-6">
        <h4 class="text-lg font-semibold text-gray-900 mb-2">인용문</h4>
        <p class="text-gray-700 italic">"베지케어는 채식을 '의지'가 아닌 데이터와 커뮤니티로 지속하게 만드는 서비스입니다. 사용자 스스로의 기록을 바탕으로 건강 변화를 눈으로 확인하고, 외식부터 집밥·보충까지 일상을 설계하도록 돕겠습니다."</p>
        <p class="text-sm text-gray-600 mt-2">— 드림에이아이랩 관계자</p>
      </div>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">시장 배경</h3>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">건강·환경·윤리 소비에 대한 관심이 높아지며 <strong>유연한 채식(플렉시테리언)</strong>을 포함한 식물성 식단 수요가 확산되고 있다. 드림에이아이랩은 기존의 맛집·레시피 중심 서비스를 넘어, 건강 데이터–AI–커뮤니티–파트너 네트워크를 유기적으로 연결하는 통합 경험을 제공해 시장을 선도한다는 계획이다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">출시 및 로드맵</h3>
      <ol class="list-decimal list-inside space-y-2 mb-6 text-gray-700">
        <li><strong>오픈 알파:</strong> 서비스 소개 페이지 공개, 커뮤니티/레시피·맛집 베타, 기본 리워드 시작</li>
        <li><strong>베타:</strong> 디지털케어로그–AI 요리사 완전 연동, 제휴 파트너 확대</li>
        <li><strong>정식 런칭:</strong> 구독형 건강관리, 기업/기관용 웰니스 모듈, 리워드 고도화</li>
      </ol>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">이용 안내</h3>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">서비스 소개 및 알파/베타 소식은 드림에이아이랩 공식 웹사이트 내 베지케어 페이지에서 순차 안내됩니다. 파트너 제휴(식당·브랜드·배달/밀키트) 및 베타 테스터 모집 중입니다.</p>
      
      <div class="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-8">
        <h4 class="text-lg font-semibold text-gray-900 mb-3">드림에이아이랩(Dream AI Lab) 소개</h4>
        <p class="text-gray-700 mb-4">드림에이아이랩은 AI 디지털케어로그 기술을 기반으로 발달장애 플랫폼 '자람이', 시니어 돌봄 '시니어앤라이프', 의료 AI, 법률 AI 등 사회적 임팩트 중심의 서비스를 개발·운영한다. 데이터 기반 맞춤형 분석과 커뮤니티 경험을 결합해 지속가능한 생활 변화를 만드는 것이 목표다.</p>
        <div class="text-sm text-gray-600">
          <p>• 웹사이트: dreamailab.com</p>
          <p>• 문의: contact@dreamailab.com</p>
        </div>
      </div>
    `,
    category: 'company',
    date: '2024-12-20',
    image: '📰',
    featured: true,
    author: '드림에이아이랩',
    tags: ['베지케어', 'VeggieCare', '보도자료', '채식', '디지털케어로그', 'AI', '영양관리']
  },
  {
    id: 3,
    title: '마음이AI, 발달장애인 심리상담 AI 서비스 공개 1주년',
    excerpt: '발달장애인과 가족들을 위한 심리상담 AI 서비스 "마음이AI"가 공개 1주년을 맞았습니다. 2024년 3월 공개 이후 지속적인 개선을 통해 더 나은 서비스를 제공하고 있습니다.',
    content: `
      <h2 class="text-3xl font-bold text-gray-900 mb-6">마음이AI 공개 1주년</h2>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">드림에이아이랩(DAL)이 발달장애인과 그 가족들을 위한 심리상담 AI 서비스 "마음이AI"를 2024년 3월 1일 공개한 지 1주년을 맞았습니다. 이 서비스는 개인화된 심리상담을 제공하여 정신 건강을 돌보는 것을 목표로 합니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">마음이AI의 주요 특징</h3>
      <ul class="list-disc list-inside space-y-2 mb-6 text-gray-700">
        <li><strong>맞춤형 심리상담:</strong> 개인의 특성과 상황에 맞는 개인화된 상담 서비스</li>
        <li><strong>24시간 접근 가능:</strong> 언제든지 필요한 순간에 심리적 지원 제공</li>
        <li><strong>개인정보 보호:</strong> 엄격한 보안 시스템으로 사용자의 프라이버시 보호</li>
        <li><strong>전문가 수준의 상담:</strong> 심리학 이론과 기법을 바탕으로 한 전문적인 상담</li>
      </ul>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">서비스 목적</h3>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">마음이AI는 발달장애인뿐만 아니라, 그들을 돌보는 가족들의 건강도 중요하다는 것을 이해합니다. 가족이 형제, 자매, 부모가 되었든, 건강한 정신 상태를 유지하는 것이 중요합니다. 오랜 간병으로 인한 신체적, 정신적 피로는 스트레스와 우울증으로 이어질 수 있으며, 이는 극단적인 선택으로 이어질 위험도 있습니다.</p>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">마음이AI는 이러한 상황을 미연에 방지하고자 합니다. 사용자의 감정을 세심하게 파악하고, 개인화된 상담을 통해 적절한 조언과 해결책을 제공합니다. 이 서비스는 개인과 가족 모두의 삶의 질을 향상시키고, 정서적 안정을 도모하며, 심리적 성장을 지원하는 것을 목적으로 합니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">1주년 성과</h3>
      <p class="text-lg text-gray-700 leading-relaxed">공개 1주년을 맞은 마음이AI는 지속적인 사용자 피드백을 반영하여 서비스를 개선해왔습니다. 특히 발달장애인과 가족들의 실제 니즈를 파악하여 더욱 실용적이고 효과적인 상담 서비스를 제공하고 있습니다.</p>
    `,
    category: 'company',
    date: '2024-12-15',
    image: '💙',
    featured: false,
    author: '드림에이아이랩',
    tags: ['마음이AI', '심리상담', 'AI서비스', '발달장애']
  },
  {
    id: 45,
    title: '히포크라테스AI, 무료 의료 챗봇 서비스 1주년',
    excerpt: '무료 의료 상담 AI 서비스 "히포크라테스AI"가 서비스 1주년을 맞았습니다. 기본적인 의료상담과 질병정보를 제공하여 의료 접근성을 개선하고 있습니다.',
    content: `
      <h2 class="text-3xl font-bold text-gray-900 mb-6">히포크라테스AI 서비스 1주년</h2>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">드림에이아이랩이 무료 의료 상담 AI 서비스 "히포크라테스AI"를 1년 전 배포한 지 1주년을 맞았습니다. 이 시스템은 기본적인 의료상담과 질병정보 제공을 통해 의료 접근성을 개선하는 것을 목표로 합니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">히포크라테스AI의 주요 기능</h3>
      <ul class="list-disc list-inside space-y-2 mb-6 text-gray-700">
        <li><strong>기본 의료상담:</strong> 일반적인 증상에 대한 기본적인 의료 상담 제공</li>
        <li><strong>질병정보 제공:</strong> 다양한 질병에 대한 정보와 예방법 안내</li>
        <li><strong>자가진단 지원:</strong> 사용자가 자신의 상태를 파악할 수 있는 도구 제공</li>
        <li><strong>의료기관 연결:</strong> 필요시 적절한 의료기관 연결 서비스</li>
      </ul>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">서비스 목적</h3>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">히포크라테스AI는 의료 사각지대에 놓인 취약계층을 위해 시작된 프로젝트입니다. 특히 의료 서비스 접근이 어려운 상황에서도 기본적인 의료 정보와 상담을 받을 수 있도록 하는 것이 주요 목표입니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">1주년 성과</h3>
      <p class="text-lg text-gray-700 leading-relaxed">서비스 1주년을 맞은 히포크라테스AI는 의학 윤리정신을 계승하여 모든 사용자에게 도움을 주는 무료 의료 챗봇 서비스로 자리잡았습니다. 특히 의료 접근성이 어려운 사용자들에게 기본적인 의료 정보를 제공하는 데 기여하고 있습니다.</p>
    `,
    category: 'updates',
    date: '2024-12-10',
    image: '🏥',
    featured: false,
    author: '드림에이아이랩',
    tags: ['히포크라테스AI', '의료AI', '무료의료', '의료기술']
  },
  {
    id: 27,
    title: '시니어앤라이프, 노인돌봄 AI 플랫폼 서비스 2주년',
    excerpt: '노인돌봄을 위한 AI 플랫폼 "시니어앤라이프"가 서비스 2주년을 맞았습니다. AI 기술을 활용한 맞춤형 돌봄 서비스로 노인들의 독립적인 삶을 지원하고 있습니다.',
    content: `
      <h2 class="text-3xl font-bold text-gray-900 mb-6">시니어앤라이프 서비스 2주년</h2>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">드림에이아이랩이 노인돌봄을 위한 AI 플랫폼 "시니어앤라이프"를 2년 전 오픈한 지 2주년을 맞았습니다. 이 플랫폼은 AI 기술을 활용한 맞춤형 돌봄 서비스로 노인들의 독립적인 삶을 지원하는 것을 목표로 합니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">시니어앤라이프의 주요 기능</h3>
      <ul class="list-disc list-inside space-y-2 mb-6 text-gray-700">
        <li><strong>건강 모니터링:</strong> 실시간 건강 상태 체크 및 이상 징후 감지</li>
        <li><strong>일정 관리:</strong> 약 복용 시간, 병원 예약 등 일정 관리</li>
        <li><strong>긴급 상황 대응:</strong> 위험 상황 감지 시 즉시 가족 및 응급 서비스 연락</li>
        <li><strong>소셜 커뮤니티:</strong> 같은 연령대의 노인들과 소통할 수 있는 커뮤니티</li>
        <li><strong>취미 활동 추천:</strong> 개인 취향에 맞는 활동 및 프로그램 추천</li>
      </ul>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">AI 기술의 활용</h3>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">시니어앤라이프는 다양한 AI 기술을 활용하여 노인들의 일상을 더욱 편리하고 안전하게 만들어줍니다. 음성 인식 기술을 통해 쉽게 조작할 수 있고, 패턴 분석을 통해 개인의 생활 패턴을 학습하여 맞춤형 서비스를 제공합니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">2주년 성과</h3>
      <p class="text-lg text-gray-700 leading-relaxed">서비스 2주년을 맞은 시니어앤라이프는 노인들의 실제 니즈를 파악하여 지속적으로 서비스를 개선해왔습니다. 특히 노인들의 독립적인 삶을 지원하고 가족들의 안심을 제공하는 데 크게 기여하고 있습니다.</p>
    `,
    category: 'company',
    date: '2024-12-05',
    image: '👴',
    featured: false,
    author: '드림에이아이랩',
    tags: ['시니어앤라이프', '노인돌봄', 'AI플랫폼', '건강관리']
  },
  {
    id: 46,
    title: '왜 지금까지 발달장애 디지털케어 플랫폼은 없었을까?',
    excerpt: 'CT와 MRI가 진단을 바꿨듯, 디지털케어로그는 치료를 바꾸는가. 발달장애 디지털케어 플랫폼이 왜 지금까지 없었는지, 그리고 왜 지금은 가능한지에 대해 분석합니다.',
    content: `
      <h2 class="text-3xl font-bold text-gray-900 mb-6">왜 지금까지 발달장애 디지털케어 플랫폼은 없었을까?</h2>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">"센터만 바꾸면 또 처음부터 다시 시작해야 하더라고요. 몇 년간 해온 기록이 다 사라졌어요." 발달장애 아이를 키우는 부모라면 누구나 겪는 현실입니다. 병원, 센터, 학교, 가정이 각자 제 방식으로만 기록하기 때문에, 아이의 치료와 교육은 늘 끊기고 반복되었습니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">지금까지 왜 시도조차 없었나?</h3>
      
      <h4 class="text-xl font-bold text-gray-800 mb-3">1. 기술적 한계</h4>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">불과 몇 년 전까지만 해도, 병원은 EMR(전자의무기록), 학교는 생활 기록부, 센터는 엑셀, 부모는 수기 노트… 서로 호환되지 않는 형식이라 데이터를 모으는 것 자체가 불가능했습니다. AI가 패턴을 분석하고 맞춤 전략을 제시할 만큼 성숙하지도 않았습니다.</p>
      
      <h4 class="text-xl font-bold text-gray-800 mb-3">2. 법률과 윤리 장벽</h4>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">발달장애 아동의 데이터는 의료·개인정보 중에서도 가장 민감한 영역입니다. 기관 간에 함부로 공유할 수 없었고, 연구자들도 접근이 제한적이었습니다. "괜히 잘못 다루면 법적 문제가 된다"는 두려움 때문에 모두가 손을 뗀 겁니다.</p>
      
      <h4 class="text-xl font-bold text-gray-800 mb-3">3. 협업의 어려움</h4>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">병원은 의료, 학교는 교육, 센터는 치료, 정부는 행정. 모두가 발달장애 아동을 돕고 있지만, 하나로 연결된 시스템은 없었습니다. "왜 우리 데이터를 남과 나눠야 하지?"라는 불신도 컸습니다.</p>
      
      <h4 class="text-xl font-bold text-gray-800 mb-3">4. 낮은 상업적 매력</h4>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">발달장애 인구는 전체 인구의 1~2%. 투자자와 기업 입장에서는 '큰 시장이 아니다'라는 인식이 강했습니다. 게임, 전자상거래, SNS처럼 수익이 보이는 분야에만 집중했고, 발달장애 같은 특수 영역은 늘 뒷전이었습니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">그렇다면 왜 지금은 가능한가?</h3>
      
      <h4 class="text-xl font-bold text-gray-800 mb-3">1. 기술이 무르익었다</h4>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">GPT 같은 AI, 시계열 분석, 멀티모달 AI, 대용량 클라우드. 최근 몇 년 사이 이런 기술들이 폭발적으로 성장하면서, 발달장애 치료 데이터를 실시간으로 표준화·분석할 수 있게 되었습니다.</p>
      
      <h4 class="text-xl font-bold text-gray-800 mb-3">2. 보호자 주권 모델</h4>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">데이터 주체를 병원이나 센터가 아닌 보호자로 두었습니다. 보호자가 열람·차단·공유 권한을 가지면서, 법적 규제도 지킬 수 있고, 기관 간 공유도 가능해졌습니다.</p>
      
      <h4 class="text-xl font-bold text-gray-800 mb-3">3. 현장 중심 설계</h4>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">부모·치료사·교사들의 요구를 직접 반영했습니다. "복잡한 기술"이 아니라, 1~2분이면 기록할 수 있고 곧바로 피드백을 받는 구조를 만든 겁니다.</p>
      
      <h4 class="text-xl font-bold text-gray-800 mb-3">4. 사회·정책적 변화</h4>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">디지털 헬스케어와 데이터 기반 치료가 세계적 흐름이 되었고, 정부와 연구기관도 이를 지원하기 시작했습니다. "이제는 꼭 필요한 것"이라는 공감대가 형성된 거죠.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">그래서 나온 답: 디지털케어로그</h3>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">디지털케어로그는 단순한 앱이 아닙니다. 병원, 학교, 센터, 가정의 기록을 같은 언어로 표준화하고, 보호자가 데이터의 주인이 되어 연속성을 보장하며, AI가 수십만 건의 기록을 분석해 맞춤형 전략을 제시하는, 세계 최초의 통합형 발달장애 케어 플랫폼입니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">1년만 지나도 세계 최대급 데이터</h3>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">만약 10만 가정이 하루 5건씩 기록한다면? 하루 50만 건, 1년 1억 8천만 건. 이는 지금까지 학계가 수십 년 동안도 모으지 못한 규모입니다. 이 데이터는 곧 치료 효과 검증, 맞춤형 치료 프로토콜, 정책 근거, 장기 발달 궤적 연구로 이어질 수 있습니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">결론: 이제야 가능한 혁신</h3>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">과거에는 불가능했습니다. 기술도, 제도도, 사회적 분위기도 준비되지 않았으니까요. 하지만 이제는 다릅니다. AI와 클라우드의 성숙, 보호자 중심 데이터 모델, 사회적 요구와 정책 변화. 이 모든 퍼즐이 맞춰지면서, "처음부터 다시"가 아니라 "연속적으로 성장하는 치료"가 가능해졌습니다.</p>
      
      <p class="text-lg text-gray-700 leading-relaxed font-semibold">CT와 MRI가 진단의 패러다임을 바꿨듯, 디지털케어로그는 발달장애 치료의 패러다임을 바꾸는 혁신입니다.</p>
    `,
    category: 'insight',
    date: '2024-12-20',
    image: '💡',
    featured: false,
    author: '드림에이아이랩',
    tags: ['디지털케어로그', '발달장애', 'AI플랫폼', '치료혁신', '데이터표준화']
  },
  {
    id: 34,
    title: '왜 지금까지는 실패했고, 자람이는 왜 성공했는가',
    excerpt: '발달장애 디지털케어 플랫폼이 지금까지 실패했던 이유와 자람이가 성공할 수 있었던 이유를 분석합니다. 기술, 제도, 협업의 장벽을 어떻게 극복했는지 살펴봅니다.',
    content: `
      <h2 class="text-3xl font-bold text-gray-900 mb-6">왜 지금까지는 실패했고, 자람이는 왜 성공했는가</h2>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">발달장애 디지털케어 플랫폼은 수년간 수많은 시도가 있었지만 대부분 실패했습니다. 그런데 자람이 디지털케어로그는 왜 성공할 수 있었을까요? 기술적, 제도적, 사회적 장벽을 어떻게 극복했는지 분석해보겠습니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">지금까지 막혔던 이유</h3>
      
      <h4 class="text-xl font-bold text-gray-800 mb-3">1. 기술적 복잡성</h4>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">의료·교육·돌봄 데이터는 형식이 제각각이었습니다. 병원은 EMR, 학교는 생활 기록부, 센터는 엑셀, 가정은 수기 메모로 서로 호환되지 않았습니다. 이를 하나의 표준으로 묶는 것은 수년 이상 걸리는 난제였습니다.</p>
      
      <h4 class="text-xl font-bold text-gray-800 mb-3">2. AI·빅데이터 인프라 부족</h4>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">멀티모달 AI(텍스트+영상+행동 로그), 시계열 분석, 강화학습 등은 최근 3~5년 사이 급성장한 기술입니다. 과거에는 연속적 행동 데이터를 실시간으로 분석할 만큼 성숙하지 못했고, 대용량 클라우드 컴퓨팅 비용도 부담이 컸습니다.</p>
      
      <h4 class="text-xl font-bold text-gray-800 mb-3">3. 의료·윤리·법률 규제 장벽</h4>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">발달장애 아동 데이터는 의료·개인정보 중에서도 민감 정보 최고 등급입니다. 공유·분석·연계 자체가 법적으로 제약이 많았고, 디지털치료제 임상허가 비용도 막대하여 스타트업이나 연구기관이 감당하기 어려웠습니다.</p>
      
      <h4 class="text-xl font-bold text-gray-800 mb-3">4. 기관 간 협업 부재</h4>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">병원·학교·복지기관·가정이 각각 따로 움직였고, 이를 조율할 표준 프로토콜과 통합 플랫폼이 전혀 없었습니다. "왜 우리 데이터를 남과 나눠야 하지?"라는 불신도 컸습니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">자람이가 가능했던 이유</h3>
      
      <h4 class="text-xl font-bold text-gray-800 mb-3">1. 최신 AI 기술 도입 + 현실적 기획</h4>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">LLM, 멀티모달 분석, 시계열 AI를 발달장애 데이터에 적용했습니다. 단순 기술이 아니라, 실제 부모·교사·치료사가 쓰기 쉽게 설계한 "현장 중심 UX"를 구현했습니다.</p>
      
      <h4 class="text-xl font-bold text-gray-800 mb-3">2. 표준화와 개방형 접근</h4>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">국제 표준(FHIR: 의료데이터, xAPI: 교육데이터 등)을 채택했습니다. 덕분에 병원·학교·센터 데이터를 하나의 언어로 변환할 수 있었습니다.</p>
      
      <h4 class="text-xl font-bold text-gray-800 mb-3">3. 데이터 주권 구조 확립</h4>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">보호자가 데이터 주인이 되도록 했습니다. 법적 규제를 준수하면서도 권한 관리가 가능하고, 보호자가 공유/차단을 직접 설정하여 개인정보보호법을 준수하면서도 실질적 활용이 가능합니다.</p>
      
      <h4 class="text-xl font-bold text-gray-800 mb-3">4. 정부·산업 협력</h4>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">디지털헬스케어 육성 정책, 임상 연구 협력, 산업계 참여로 법적/제도적 장벽을 돌파할 수 있는 환경이 형성되었습니다.</p>
      
      <h4 class="text-xl font-bold text-gray-800 mb-3">5. 비전과 실행력</h4>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">"발달장애 불치 → 데이터 기반 개선 가능"이라는 명확한 비전을 가지고, 의료·교육 전문가와 개발자가 하나의 팀으로 움직였다는 점이 기존 시도들과 차별적입니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">자람이 디지털케어로그의 위치</h3>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">자람이는 단순히 "앱"이나 "EHR"이 아닙니다. 전 영역을 연결하는 최초의 표준 플랫폼입니다. 기술(AI+클라우드), 제도(보호자 중심 구조), 사회(현장 요구), 정책(정부 지원)이 맞물린 최초의 사례입니다.</p>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">그 결과 부모가 믿고 쓸 수 있고, 전문가가 임상/교육에서 활용할 수 있으며, 국가가 정책·연구 근거로 활용 가능한 3중 효과를 달성했습니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">결론</h3>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">왜 없었나? → 기술·윤리·제도·협업 장벽 때문이었습니다. 왜 자람이는 가능한가? → 최신 AI·표준화·보호자 중심 구조·정책 지원·현장 중심 설계가 동시에 맞아떨어졌기 때문입니다.</p>
      
      <p class="text-lg text-gray-700 leading-relaxed font-semibold">그래서 자람이는 단순 플랫폼이 아니라, 발달장애 치료 패러다임을 바꿀 수 있는 최초의 글로벌 모델입니다.</p>
    `,
    category: 'founder',
    date: '2024-12-18',
    image: '🚀',
    featured: false,
    author: '드림에이아이랩',
    tags: ['자람이', '디지털케어로그', '발달장애', 'AI플랫폼', '치료혁신']
  },
  {
    id: 47,
    title: 'CT와 MRI가 진단을 바꿨다면, 디지털케어로그는 발달장애 치료를 바꾼다',
    excerpt: '발달장애 치료의 패러다임을 바꾸는 디지털케어로그의 혁신적 접근법을 소개합니다. 데이터 기반 과학으로 불치에서 가능으로 변화시키는 과정을 살펴봅니다.',
    content: `
      <h2 class="text-3xl font-bold text-gray-900 mb-6">CT와 MRI가 진단을 바꿨다면, 디지털케어로그는 발달장애 치료를 바꾼다</h2>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">"우리 아이는 왜 치료사가 바뀔 때마다 처음부터 다시 시작해야 할까요?" 많은 발달장애 부모님들이 가장 많이 하는 하소연입니다. 병원을 옮기거나 센터를 옮기면, 그동안 쌓아온 기록은 사라지고 다시 진단·평가를 받아야 합니다. 학교와 가정, 병원과 센터 사이에도 기록이 공유되지 않아 늘 단절된 상태로 치료가 반복됩니다.</p>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">이런 구조 속에서 발달장애는 오랫동안 <strong>"불치의 영역"</strong>처럼 여겨졌습니다. 왜냐하면 근거와 데이터가 부족했기 때문입니다. 수십 명, 많아야 몇백 명 단위의 연구를 가지고 치료 효과를 논하다 보니, "어떤 방법이 누구에게 효과가 있는지" 확실히 알 수 없었던 겁니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">디지털케어로그, 무엇이 다른가?</h3>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">디지털케어로그는 발달장애 치료와 교육의 방식을 근본적으로 뒤집는 새로운 개념입니다.</p>
      
      <ul class="list-disc list-inside space-y-2 mb-6 text-gray-700">
        <li><strong>보호자가 데이터 주인이 됩니다:</strong> 기관이 아니라 부모가 기록을 가지고 필요할 때 공유하거나 차단할 수 있습니다.</li>
        <li><strong>표준화된 기록을 만듭니다:</strong> 병원·센터·학교·가정이 모두 같은 방식으로 기록하기 때문에 비교가 가능합니다.</li>
        <li><strong>연속성이 보장됩니다:</strong> 치료사나 학교가 바뀌어도 아이의 지난 기록이 그대로 이어지니, 치료를 처음부터 다시 할 필요가 없습니다.</li>
        <li><strong>AI 분석이 개입합니다:</strong> 하루하루 쌓인 데이터를 AI가 분석해 아이에게 맞는 전략과 교재, 생활 루틴을 제안합니다.</li>
      </ul>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">데이터가 쌓이면 무슨 일이 벌어질까?</h3>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">가정 10만 곳이 하루에 5건씩만 기록해도 하루 50만 건, 1년이면 1억 8천만 건의 데이터가 쌓입니다. 이는 기존 연구자들이 평생 모으기 힘들었던 규모에 가깝습니다.</p>
      
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">이렇게 쌓인 데이터는:</p>
      <ul class="list-disc list-inside space-y-2 mb-6 text-gray-700">
        <li><strong>치료 효과 검증:</strong> 어떤 치료법이 실제 생활에서 얼마나 효과가 있는지 밝혀줍니다.</li>
        <li><strong>개인 맞춤 치료:</strong> 비슷한 패턴을 가진 아이들을 그룹화해 최적의 전략을 찾아줍니다.</li>
        <li><strong>예측 모델:</strong> 앞으로 몇 달 후 아이의 발달 궤적을 예측하고 예방적 개입을 가능하게 합니다.</li>
        <li><strong>정책 근거:</strong> 지역별 서비스 격차와 비용 절감 효과를 수치로 보여줄 수 있습니다.</li>
      </ul>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">얼마나 혁신적인가?</h3>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">1970년대 CT가 처음 나왔을 때, 의사들은 몸속을 '단층 영상'으로 볼 수 있게 되면서 진단의 패러다임이 바뀌었습니다. MRI는 인체 내부를 안전하고 정밀하게 볼 수 있게 만들었고, PCR은 DNA 연구와 진단 속도를 혁신적으로 앞당겼습니다.</p>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">디지털케어로그도 같은 급의 혁신입니다. 단순 기록 앱이 아니라, 발달장애 치료를 "경험 중심 → 데이터 기반 과학"으로 바꾸는 기술이기 때문입니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">발달장애 가정과 현장에 주는 실제 변화</h3>
      <ul class="list-disc list-inside space-y-2 mb-6 text-gray-700">
        <li>부모님들은 더 이상 "설명하는 사람"이 아니라 데이터의 주인이 됩니다.</li>
        <li>아이는 센터나 치료사가 바뀌어도 연속적인 치료를 이어갑니다.</li>
        <li>교사와 치료사는 같은 언어(표준화된 지표)로 소통해 효율이 높아집니다.</li>
        <li>가정은 중복 검사·치료를 줄여 시간과 비용을 아낄 수 있습니다.</li>
        <li>무엇보다 아이가 가진 강점과 약점이 명확히 드러나, 진짜 맞춤형 치료가 가능해집니다.</li>
      </ul>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">결론: 불치에서 가능으로</h3>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">발달장애는 더 이상 "불치"가 아닙니다. 데이터와 AI가 만나면, 치료와 교육은 더 이상 단절되지 않고 연속적으로, 맞춤형으로, 근거 있게 이루어질 수 있습니다.</p>
      
      <p class="text-lg text-gray-700 leading-relaxed font-semibold">CT와 MRI가 진단을 바꿨듯, 디지털케어로그는 발달장애 치료를 바꾸는 혁신입니다. 그리고 이 혁신은 발달장애 가족의 삶을 바꾸고, 나아가 인류 보건 패러다임까지 변화시킬 수 있습니다.</p>
    `,
    category: 'insight',
    date: '2024-12-16',
    image: '🔬',
    featured: false,
    author: '드림에이아이랩',
    tags: ['디지털케어로그', '발달장애', '치료혁신', '데이터기반', 'AI분석']
  },
  {
    id: 35,
    title: '항암재활AI, 항암 치료 환자 맞춤형 재활 프로그램 제공',
    excerpt: '항암 치료 및 재활을 위한 AI 시스템 "항암재활AI"가 새로운 맞춤형 재활 프로그램을 추가했습니다.',
    content: `
      <h2 class="text-3xl font-bold text-gray-900 mb-6">항암재활AI 맞춤형 재활 프로그램 추가</h2>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">드림에이아이랩이 개발한 항암 치료 및 재활을 위한 AI 시스템 "항암재활AI"가 새로운 맞춤형 재활 프로그램을 추가했습니다. 이는 항암 치료를 받은 환자들의 회복 과정을 더욱 체계적이고 효과적으로 지원하기 위한 것입니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">새로운 재활 프로그램의 특징</h3>
      <ul class="list-disc list-inside space-y-2 mb-6 text-gray-700">
        <li><strong>개인 맞춤형 운동:</strong> 환자의 상태와 치료 과정에 맞는 맞춤형 운동 프로그램</li>
        <li><strong>영양 관리:</strong> 회복에 도움이 되는 영양 섭취 가이드</li>
        <li><strong>정신 건강 지원:</strong> 치료 후 우울증과 불안감 완화를 위한 심리 지원</li>
        <li><strong>일상생활 복귀:</strong> 점진적인 일상생활 복귀를 위한 단계별 가이드</li>
        <li><strong>가족 지원:</strong> 환자 가족들을 위한 돌봄 교육과 정신적 지원</li>
      </ul>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">AI 기술의 활용</h3>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">항암재활AI는 환자의 치료 과정, 부작용, 회복 상태 등을 종합적으로 분석하여 개인에게 최적화된 재활 계획을 수립합니다. 또한 환자의 진행 상황을 실시간으로 모니터링하여 필요에 따라 계획을 조정합니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">의료진의 반응</h3>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">이 프로그램을 사용하는 의료진들은 "환자들의 회복 속도가 빨라졌다", "재활 과정이 더욱 체계적으로 진행된다", "환자와 가족들의 만족도가 높아졌다" 등의 긍정적인 반응을 보이고 있습니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">향후 계획</h3>
      <p class="text-lg text-gray-700 leading-relaxed">앞으로 더 많은 의료기관과 협력하여 이 프로그램을 확산시키고, 다양한 종류의 암에 대한 특화된 재활 프로그램을 추가로 개발할 계획입니다.</p>
    `,
    category: 'updates',
    date: '2023-12-15',
    image: '💊',
    featured: false,
    author: '드림에이아이랩',
    tags: ['항암재활AI', '재활프로그램', '의료AI', '맞춤형치료']
  },
  {
    id: 48,
    title: '포용적 AI 개발을 위한 윤리적 고려사항',
    excerpt: '모든 사람이 AI 기술의 혜택을 누릴 수 있도록 포용적 AI를 개발할 때 고려해야 할 윤리적 측면들을 다룹니다.',
    content: `
      <h2 class="text-3xl font-bold text-gray-900 mb-6">포용적 AI 개발을 위한 윤리적 고려사항</h2>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">AI 기술이 빠르게 발전하면서 모든 사람이 그 혜택을 누릴 수 있도록 포용적 AI를 개발하는 것이 중요해지고 있습니다. 드림에이아이랩은 AI 개발 시 윤리적 측면을 항상 고려하며, 모든 사람을 위한 포용적인 기술을 만들기 위해 노력하고 있습니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">포용적 AI의 핵심 원칙</h3>
      <ul class="list-disc list-inside space-y-2 mb-6 text-gray-700">
        <li><strong>접근성:</strong> 모든 사람이 쉽게 사용할 수 있는 인터페이스와 서비스 제공</li>
        <li><strong>공정성:</strong> 인종, 성별, 연령, 장애 등에 관계없이 공정한 서비스 제공</li>
        <li><strong>투명성:</strong> AI의 의사결정 과정을 이해할 수 있도록 투명하게 공개</li>
        <li><strong>책임성:</strong> AI 시스템의 결과에 대한 책임을 명확히 함</li>
        <li><strong>개인정보 보호:</strong> 사용자의 개인정보를 안전하게 보호</li>
      </ul>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">우리의 접근법</h3>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">드림에이아이랩은 모든 AI 서비스 개발 시 이러한 윤리적 원칙을 준수합니다. 특히 소외계층과 취약계층의 필요를 우선적으로 고려하여, 그들이 AI 기술의 혜택을 누릴 수 있도록 하는 데 중점을 두고 있습니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">구체적 사례</h3>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">수화 번역 AI는 청각 장애인과 비장애인 간의 소통 장벽을 해소하고, 마음이AI는 발달장애인과 가족들의 심리적 안정을 지원합니다. 이러한 서비스들은 모두 포용적 AI의 원칙을 바탕으로 개발되었습니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">미래 방향</h3>
      <p class="text-lg text-gray-700 leading-relaxed">앞으로도 윤리적 AI 개발을 위한 가이드라인을 지속적으로 발전시키고, 모든 사람이 AI 기술의 혜택을 누릴 수 있는 포용적인 세상을 만들어가겠습니다.</p>
    `,
    category: 'insight',
    date: '2023-12-10',
    image: '🤝',
    featured: false,
    author: '드림에이아이랩',
    tags: ['AI윤리', '포용적AI', '윤리적개발', '접근성']
  },
  {
    id: 36,
    title: '노아AI, 재테크 투자 AI 플랫폼 베타 테스트 시작',
    excerpt: '재테크 투자를 위한 AI 플랫폼 "노아AI"의 베타 테스트가 시작되었습니다. 개인 투자자들을 위한 맞춤형 투자 전략을 제공합니다.',
    content: `
      <h2 class="text-3xl font-bold text-gray-900 mb-6">노아AI 베타 테스트 시작</h2>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">드림에이아이랩이 개발한 재테크 투자를 위한 AI 플랫폼 "노아AI"의 베타 테스트가 시작되었습니다. 이 플랫폼은 개인 투자자들을 위한 맞춤형 투자 전략을 제공하여 누구나 쉽게 재테크 투자를 시작할 수 있도록 도와줍니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">노아AI의 주요 기능</h3>
      <ul class="list-disc list-inside space-y-2 mb-6 text-gray-700">
        <li><strong>맞춤형 투자 전략:</strong> 개인의 위험 성향과 투자 목표에 맞는 전략 제안</li>
        <li><strong>시장 분석:</strong> 실시간 시장 데이터 분석 및 투자 기회 발굴</li>
        <li><strong>포트폴리오 관리:</strong> 투자 포트폴리오의 최적화 및 리밸런싱</li>
        <li><strong>리스크 관리:</strong> 투자 위험을 최소화하는 방안 제시</li>
        <li><strong>교육 콘텐츠:</strong> 투자 초보자를 위한 교육 자료 제공</li>
      </ul>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">B2B 비즈니스 모델</h3>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">노아AI는 개인 투자자뿐만 아니라 금융기관, 투자회사 등 B2B 고객들에게도 서비스를 제공합니다. 기존 금융 서비스에 AI 기능을 추가하여 고객들에게 더 나은 투자 경험을 제공할 수 있습니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">베타 테스터들의 반응</h3>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">베타 테스트에 참여한 투자자들은 "복잡한 투자 지식을 몰라도 쉽게 투자를 시작할 수 있다", "AI의 제안이 실제로 수익을 가져다주었다", "투자에 대한 자신감이 생겼다" 등의 긍정적인 반응을 보이고 있습니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">정식 출시 계획</h3>
      <p class="text-lg text-gray-700 leading-relaxed">베타 테스트를 통해 수집된 피드백을 바탕으로 서비스를 개선하고, 2024년 초 정식 출시를 계획하고 있습니다. 또한 다양한 금융 상품과 연동하여 더욱 포괄적인 재테크 서비스를 제공할 예정입니다.</p>
    `,
    category: 'company',
    date: '2023-12-05',
    image: '📈',
    featured: false,
    author: '드림에이아이랩',
    tags: ['노아AI', '재테크', '투자AI', 'B2B서비스']
  },
  {
    id: 49,
    title: 'AI 기술의 의료 분야 적용 현황과 전망',
    excerpt: 'AI 기술이 의료 분야에서 어떻게 활용되고 있는지, 그리고 앞으로의 발전 방향에 대해 분석합니다.',
    content: `
      <h2 class="text-3xl font-bold text-gray-900 mb-6">AI 기술의 의료 분야 적용 현황과 전망</h2>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">AI 기술이 의료 분야에서 혁신적인 변화를 가져오고 있습니다. 드림에이아이랩은 의료 AI 분야에서 다양한 서비스를 개발하고 있으며, 현재의 적용 현황과 미래 전망에 대해 분석해보겠습니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">현재 의료 AI의 주요 활용 분야</h3>
      <ul class="list-disc list-inside space-y-2 mb-6 text-gray-700">
        <li><strong>진단 지원:</strong> 의료 영상 분석을 통한 질병 진단 지원</li>
        <li><strong>약물 개발:</strong> AI를 활용한 신약 개발 및 임상시험 최적화</li>
        <li><strong>환자 관리:</strong> 개인화된 치료 계획 수립 및 환자 모니터링</li>
        <li><strong>예방 의학:</strong> 질병 예측 및 예방을 위한 위험도 평가</li>
        <li><strong>의료 행정:</strong> 병원 업무 자동화 및 효율성 향상</li>
      </ul>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">드림에이아이랩의 의료 AI 서비스</h3>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">우리는 히포크라테스AI, 한방이AI, 항암재활AI 등 다양한 의료 AI 서비스를 개발하고 있습니다. 각 서비스는 특정 의료 분야에 특화되어 있으며, 의료진의 업무를 지원하고 환자의 치료 결과를 향상시키는 데 기여하고 있습니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">미래 전망</h3>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">앞으로 의료 AI는 더욱 정교해지고 개인화된 서비스를 제공할 것으로 예상됩니다. 특히 원격 의료, 예방 의학, 맞춤형 치료 분야에서 큰 발전이 있을 것으로 전망됩니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">도전 과제</h3>
      <p class="text-lg text-gray-700 leading-relaxed">의료 AI의 발전을 위해서는 데이터 품질 향상, 윤리적 가이드라인 수립, 의료진과의 협력 강화 등이 필요합니다. 드림에이아이랩은 이러한 도전 과제들을 해결하기 위해 지속적으로 노력하고 있습니다.</p>
    `,
    category: 'insight',
    date: '2023-11-30',
    image: '🔬',
    featured: false,
    author: '드림에이아이랩',
    tags: ['의료AI', 'AI전망', '의료기술', '진단지원']
  },
  {
    id: 37,
    title: '법률이, 법률 상담 AI 서비스 개발 완료',
    excerpt: '법률 상담을 위한 AI 서비스 "법률이"의 개발이 완료되었습니다. 일반인들도 쉽게 법률 상담을 받을 수 있는 서비스를 제공합니다.',
    content: `
      <h2 class="text-3xl font-bold text-gray-900 mb-6">법률이 개발 완료</h2>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">드림에이아이랩이 법률 상담을 위한 AI 서비스 "법률이"의 개발을 완료했습니다. 이 서비스는 일반인들도 쉽게 법률 상담을 받을 수 있도록 하여, 법률 서비스에 대한 접근성을 크게 향상시킬 것으로 기대됩니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">법률이의 주요 기능</h3>
      <ul class="list-disc list-inside space-y-2 mb-6 text-gray-700">
        <li><strong>법률 상담:</strong> 일반적인 법률 문제에 대한 기본적인 상담 제공</li>
        <li><strong>계약서 검토:</strong> 간단한 계약서의 주요 조항 검토 및 위험 요소 안내</li>
        <li><strong>법률 정보 제공:</strong> 다양한 법률 분야에 대한 기본 정보 제공</li>
        <li><strong>변호사 연결:</strong> 복잡한 사건의 경우 전문 변호사 연결 서비스</li>
        <li><strong>법률 용어 설명:</strong> 복잡한 법률 용어를 쉽게 이해할 수 있도록 설명</li>
      </ul>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">서비스의 특징</h3>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">법률이는 복잡한 법률 지식을 일반인이 이해하기 쉽게 설명하고, 기본적인 법률 문제에 대한 해결책을 제시합니다. 또한 전문적인 법률 서비스가 필요한 경우 적절한 변호사를 연결해주는 역할도 합니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">개발 과정</h3>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">법률이 개발을 위해 수많은 법률 사례와 판례를 학습시켰으며, 전문 변호사들의 자문을 받아 정확성과 신뢰성을 확보했습니다. 또한 일반인들이 실제로 겪는 법률 문제들을 조사하여 서비스에 반영했습니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">출시 계획</h3>
      <p class="text-lg text-gray-700 leading-relaxed">2024년 초 베타 서비스를 시작하고, 사용자 피드백을 바탕으로 서비스를 개선한 후 정식 출시를 계획하고 있습니다. 또한 다양한 법률 분야로 확장하여 더욱 포괄적인 법률 서비스를 제공할 예정입니다.</p>
    `,
    category: 'company',
    date: '2023-11-20',
    image: '⚖️',
    featured: false,
    author: '드림에이아이랩',
          tags: ['법률이', '법률상담', 'AI서비스', '법률정보']
  },
  {
    id: 50,
    title: '자람이, 발달장애 지원 AI 플랫폼 서비스 2주년',
    excerpt: '발달장애인과 가족들을 위한 AI 플랫폼 "자람이"가 서비스 2주년을 맞았습니다. AI 상담과 디지털케어로그를 통해 발달장애 지원의 새로운 표준을 제시하고 있습니다.',
    content: `
      <h2 class="text-3xl font-bold text-gray-900 mb-6">자람이 서비스 2주년</h2>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">드림에이아이랩이 발달장애인과 가족들을 위한 AI 플랫폼 "자람이"를 2년 전 오픈한 지 2주년을 맞았습니다. 이는 인공지능을 활용한 발달장애 지원의 새로운 접근법으로, AI 상담과 디지털케어로그를 통해 통합적인 지원을 제공하고 있습니다.</p>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">자람이는 국내 발달장애 분야에서 처음으로 시도되는 AI 기반 통합 지원 시스템으로, 발달장애 지원의 새로운 표준을 제시하고 있습니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">자람이의 주요 기능</h3>
      <ul class="list-disc list-inside space-y-2 mb-6 text-gray-700">
        <li><strong>AI 상담 시스템:</strong> 발달장애 특화 Q&A 및 초기 스크리닝 서비스</li>
        <li><strong>디지털케어로그:</strong> 가정·학교·센터·병원 기록 표준화</li>
        <li><strong>AI 리포트:</strong> 일/주/월 리포트 및 알림 제공</li>
        <li><strong>매칭 서비스:</strong> 지역 병원·센터·교사(홈티) 연결</li>
      </ul>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">2주년 성과</h3>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">서비스 2주년을 맞은 자람이는 발달장애인과 가족들의 실제 니즈를 파악하여 지속적으로 서비스를 개선해왔습니다. 특히 AI 기술을 활용한 맞춤형 지원과 통합적인 케어 관리 시스템으로 발달장애 지원의 새로운 패러다임을 제시하고 있습니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">미래 계획</h3>
      <p class="text-lg text-gray-700 leading-relaxed">자람이는 발달장애인들이 자신의 페이스에 맞춰 성장할 수 있는 환경을 조성하고, 가족과 전문가들의 협업을 통해 더 나은 지원을 제공할 계획입니다. 이를 통해 발달장애 지원의 새로운 표준을 제시하고, 모든 발달장애인이 자신의 잠재력을 최대한 발휘할 수 있도록 지원하겠습니다.</p>
    `,
    category: 'company',
    date: '2024-12-01',
    image: '🌱',
    featured: false,
    author: '드림에이아이랩',
    tags: ['자람이', '발달장애', 'AI플랫폼', '디지털케어로그', '통합지원']
  },
  {
    id: 38,
    title: '히포크라테스AI, 의료 상담 AI 서비스 개발 계획',
    excerpt: '의료 사각지대에 놓인 취약계층을 위한 의료 상담 AI 서비스 "히포크라테스AI" 개발을 계획하고 있습니다. 기본적인 의료상담과 질병정보 제공을 목표로 합니다.',
    content: `
      <h2 class="text-3xl font-bold text-gray-900 mb-6">히포크라테스AI 개발 계획</h2>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">드림에이아이랩이 의료 사각지대에 놓인 취약계층을 위한 의료 상담 AI 서비스 "히포크라테스AI" 개발을 계획하고 있습니다. 이는 의료 접근성이 어려운 상황에서도 기본적인 의료 정보와 상담을 받을 수 있도록 하는 것을 목표로 합니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">히포크라테스AI의 계획된 특징</h3>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">히포크라테스AI는 일반인부터 전문 의료인까지 누구나 사용할 수 있는 의료 상담 AI 서비스로 개발될 예정입니다. 사용자는 이 AI를 통해 기본적인 의료상담, 질병정보, 초기 진료 정보를 받을 수 있으며, 자가 진단을 통한 건강 관리도 가능할 계획입니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">의학 윤리정신의 계승</h3>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">히포크라테스AI는 의학 윤리정신을 계승하고, 히포크라테스 선서의 정신을 반영하여 모든 사용자에게 도움을 주기 위해 개발되고 있습니다. 의료 서비스 접근성 문제 해결과 의료 공백 축소에 기여하는 것을 목표로 합니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">개발 현황</h3>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">현재 히포크라테스AI는 초기 개발 단계에 있으며, 2025년 상반기 베타 서비스 출시를 목표로 하고 있습니다. 의료 전문가들과의 협력을 통해 정확하고 신뢰할 수 있는 의료 정보를 제공할 수 있도록 개발하고 있습니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">사회적 기여 목표</h3>
      <p class="text-lg text-gray-700 leading-relaxed">히포크라테스AI는 현재 우리 사회가 마주한 의료 접근성 문제에 대한 창의적인 해결책을 제시하고자 합니다. 특히 갑작스럽게 건강 문제에 직면한 일반 사용자들이 신속하게 정보를 얻을 수 있도록 돕고, 의료 상담이 필요한 취약계층에게 쉽게 접근할 수 있는 방법을 제공하는 것을 목표로 합니다.</p>
    `,
    category: 'updates',
    date: '2024-11-28',
    image: '🏥',
    featured: false,
    author: '드림에이아이랩',
    tags: ['히포크라테스AI', '의료AI', '무료의료', '의료공백', '취약계층']
  },
  {
    id: 51,
    title: '디지털케어로그 기술 발표, AI 기반 통합 케어 플랫폼 공개',
    excerpt: '드림에이아이랩이 AI 기반 통합 케어 플랫폼 "디지털케어로그" 기술을 발표했습니다. 개인별 건강 상태와 생활 패턴을 분석하여 최적화된 케어 계획을 제공하는 혁신적인 기술입니다.',
    content: `
      <h2 class="text-3xl font-bold text-gray-900 mb-6">디지털케어로그 기술 발표</h2>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">드림에이아이랩이 2024년 6월 1일 AI 기반 통합 케어 플랫폼 "디지털케어로그" 기술을 공식 발표했습니다. 이 기술은 개인별 건강 상태와 생활 패턴을 종합적으로 분석하여 최적화된 케어 계획을 제공하는 혁신적인 플랫폼입니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">디지털케어로그의 핵심 기술</h3>
      <ul class="list-disc list-inside space-y-2 mb-6 text-gray-700">
        <li><strong>AI 기반 개인 맞춤형 케어:</strong> 머신러닝을 활용한 개인별 건강 데이터 분석 및 맞춤형 케어 계획 수립</li>
        <li><strong>실시간 건강 모니터링:</strong> 웨어러블 기기와 IoT 센서를 통한 24시간 건강 상태 추적</li>
        <li><strong>예측적 건강 관리:</strong> AI 분석을 통한 건강 위험 요소 사전 감지 및 예방 시스템</li>
        <li><strong>통합 케어 관리:</strong> 가족, 의료진, 케어 전문가가 함께 참여할 수 있는 협업 플랫폼</li>
        <li><strong>데이터 표준화:</strong> FHIR 기반의 안전하고 효율적인 건강 데이터 관리</li>
      </ul>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">기술적 혁신</h3>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">디지털케어로그는 최신 머신러닝과 딥러닝 기술을 활용하여 사용자의 건강 데이터를 실시간으로 분석합니다. 혈압, 심박수, 수면 패턴, 활동량, 식습관 등 다양한 건강 지표를 종합적으로 분석하여 개인에게 최적화된 건강 관리 방안을 제시합니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">사회적 가치</h3>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">이 기술은 단순한 건강 관리 도구를 넘어서 사회적 가치 창출에 기여합니다. 특히 의료 접근성이 어려운 취약계층에게도 동등한 수준의 케어 서비스를 제공할 수 있도록 하여, 건강 불평등 해소에 기여할 것으로 기대됩니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">향후 계획</h3>
      <p class="text-lg text-gray-700 leading-relaxed">디지털케어로그 기술은 현재 연구 개발 단계에 있으며, 2024년 하반기 베타 서비스 출시를 목표로 하고 있습니다. 다양한 의료기관과의 협력을 통해 더욱 전문적이고 신뢰할 수 있는 케어 서비스를 제공할 예정입니다.</p>
    `,
    category: 'tech',
    date: '2024-06-01',
    image: '📱',
    featured: false,
    author: '드림에이아이랩',
    tags: ['디지털케어로그', 'AI케어', '맞춤형케어', '건강관리', '웨어러블']
  },
  {
    id: 52,
    title: '의료헬스케어 AI 통합 플랫폼, 전국 의료기관 연동 서비스 시작',
    excerpt: '의료헬스케어 AI 통합 플랫폼이 전국 주요 의료기관과 연동 서비스를 시작했습니다. 환자 데이터 공유와 AI 진단 지원을 통한 의료 서비스 품질 향상을 도모합니다.',
    content: `
      <h2 class="text-3xl font-bold text-gray-900 mb-6">의료헬스케어 AI 통합 플랫폼 전국 연동 서비스 시작</h2>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">드림에이아이랩이 개발한 의료헬스케어 AI 통합 플랫폼이 전국 주요 의료기관과 연동 서비스를 시작했습니다. 이 플랫폼은 환자 데이터의 안전한 공유와 AI 진단 지원을 통해 의료 서비스의 품질을 획기적으로 향상시키는 것을 목표로 합니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">통합 플랫폼의 핵심 기능</h3>
      <ul class="list-disc list-inside space-y-2 mb-6 text-gray-700">
        <li><strong>안전한 환자 데이터 공유:</strong> 블록체인 기술을 활용한 안전하고 투명한 환자 데이터 공유 시스템</li>
        <li><strong>AI 진단 지원:</strong> 히포크라테스AI, 한방이AI 등 다양한 의료 AI 서비스 통합 제공</li>
        <li><strong>의료진 협업 시스템:</strong> 의료진 간의 실시간 소통과 협업을 위한 통합 커뮤니케이션 플랫폼</li>
        <li><strong>환자 맞춤형 치료 계획:</strong> 개인별 건강 데이터를 종합 분석한 맞춤형 치료 계획 수립</li>
        <li><strong>원격 의료 지원:</strong> 원격으로 의료 서비스를 받을 수 있는 시스템 구축</li>
      </ul>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">연동 의료기관 현황</h3>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">현재 전국 50개 주요 종합병원과 200여 개의 전문의료기관이 이 플랫폼에 참여하고 있으며, 점진적으로 확대될 예정입니다. 특히 대형 병원과 중소형 의료기관 간의 정보 격차를 줄이고, 모든 환자들이 동등한 수준의 의료 서비스를 받을 수 있도록 하는 것이 주요 목표입니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">보안 및 개인정보 보호</h3>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">플랫폼은 최신 보안 기술을 적용하여 환자의 개인정보와 의료 데이터를 철저히 보호합니다. 블록체인 기반의 분산 저장 시스템과 암호화 기술을 통해 데이터의 무결성과 보안성을 보장하며, 환자의 동의 없이는 어떠한 정보도 공유되지 않습니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">기대 효과 및 미래 계획</h3>
      <p class="text-lg text-gray-700 leading-relaxed">이 플랫폼의 도입으로 의료 서비스의 효율성과 정확성이 크게 향상될 것으로 기대됩니다. 특히 AI 기술을 활용한 진단 지원으로 의료진의 업무 부담을 줄이고, 환자에게는 더욱 정확하고 신속한 진료 서비스를 제공할 수 있게 됩니다. 앞으로 더 많은 의료기관과의 연동을 통해 전국민이 혜택을 받을 수 있는 포용적 의료 서비스 체계를 구축해 나갈 계획입니다.</p>
    `,
    category: 'company',
    date: '2024-01-16',
    image: '🏥',
    featured: false,
    author: '드림에이아이랩',
    tags: ['의료헬스케어', 'AI통합플랫폼', '의료기관연동', '환자데이터', '원격의료']
  },
  {
    id: 39,
    title: '우리 아이 사례로 본 디지털케어로그 효과',
    excerpt: '발달장애 아동 자람이의 실제 사례를 통해 디지털케어로그가 어떻게 사용되고 어떤 효과를 가져오는지 구체적으로 살펴봅니다.',
    content: `
      <h2 class="text-3xl font-bold text-gray-900 mb-6">우리 아이 사례로 본 디지털케어로그 효과</h2>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">"센터만 옮기면 또 처음부터 시작해야 해서 너무 힘들었어요." 많은 발달장애 부모님들이 같은 고민을 합니다. 병원에서는 언제 문제 행동이 나오는지 알 수 없고, 학교에서는 효과 본 방법이 가정이나 센터로 전달되지 않습니다. 결국 부모는 늘 <strong>"설명만 하는 사람"</strong>이 되어 지칩니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">우리 아이 자람이 (가상 사례, 11세, 자폐+중증 발달장애)</h3>
      <div class="bg-yellow-50 p-6 rounded-lg mb-6">
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li>평소 침을 자주 뱉고, 언어 따라하기가 잘 되지 않음</li>
          <li>집에서는 지적을 받으면 분노하며 침을 더 뱉음</li>
          <li>학교에서는 클레이 놀이를 보상으로 주면 조금 줄어듦</li>
          <li>센터에서는 형광등을 볼 때 증상이 심해짐</li>
          <li>병원에서는 언제 이런 행동이 나오는지 몰라 약 조정이 어렵다고 함</li>
        </ul>
      </div>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">👉 이렇게 기관마다 따로따로 기록하다 보니, 정작 아이에게 중요한 <strong>"언제, 왜, 어떻게"</strong>는 아무도 모르는 상황이 반복됩니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">디지털케어로그가 들어오면?</h3>
      
      <h4 class="text-xl font-semibold text-gray-800 mb-3">1. 모든 기록이 한곳에 모입니다</h4>
      <ul class="list-disc list-inside space-y-2 mb-6 text-gray-700">
        <li><strong>학교:</strong> 언어 과제 중 침 뱉기 → 기록</li>
        <li><strong>가정:</strong> "하지마" 지적 시 분노 → 기록</li>
        <li><strong>센터:</strong> 형광등 볼 때 행동 악화 → 기록</li>
        <li><strong>병원:</strong> 약물 복용 상태와 연결</li>
      </ul>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">→ 이제 퍼즐 조각처럼 흩어진 기록이 하나로 합쳐집니다.</p>
      
      <h4 class="text-xl font-semibold text-gray-800 mb-3">2. AI가 패턴을 찾아줍니다</h4>
      <ul class="list-disc list-inside space-y-2 mb-6 text-gray-700">
        <li>침 뱉기는 "빛, 언어 과제, 부정 지시"에 늘어남</li>
        <li>반대로 "클레이 놀이, 물, 휴식"에서는 줄어듦</li>
      </ul>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">→ 부모는 언제, 어떤 상황에 더 조심해야 하는지 알게 됩니다.</p>
      
      <h4 class="text-xl font-semibold text-gray-800 mb-3">3. 맞춤형 방법을 알려줍니다</h4>
      <ul class="list-disc list-inside space-y-2 mb-6 text-gray-700">
        <li><strong>학교:</strong> 언어 수업 때 보상 구조 설계</li>
        <li><strong>가정:</strong> "하지마" 대신 "잠깐 쉬자"라는 대체 지시 활용</li>
        <li><strong>센터:</strong> 형광등 환경 조정 + 휴식 루틴</li>
        <li><strong>병원:</strong> 약물 반응과 행동 변화를 데이터로 확인</li>
      </ul>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">→ 더 이상 감으로 대처하지 않아도 됩니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">부모에게 오는 변화</h3>
      <div class="bg-green-50 p-6 rounded-lg mb-6">
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li>매일 "왜 이런 행동을 하는지" 몰라 답답했던 게, 데이터로 보이니 안심됩니다.</li>
          <li>학교·센터와 같은 언어로 대화할 수 있어 협력이 쉬워집니다.</li>
          <li>의사도 약을 조정할 때 더 정확하게 설명해 줍니다.</li>
          <li>무엇보다, 아이가 조금씩 변해가는 과정을 그래프로 직접 확인할 수 있습니다.</li>
        </ul>
      </div>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">아이의 미래가 달라집니다</h3>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">1년만 지나도 수많은 데이터가 쌓입니다.</p>
      <ul class="list-disc list-inside space-y-2 mb-6 text-gray-700">
        <li>"비슷한 아이들은 이런 환경에서 좋아졌다"라는 과학적 근거가 생기고,</li>
        <li>아이 맞춤형 치료·교육 계획이 점점 더 정교해집니다.</li>
        <li>부모는 더 이상 "혼자 싸우는 사람"이 아니라, 교사·치료사·의사와 함께 같은 팀에서 아이를 키우는 사람이 됩니다.</li>
      </ul>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">디지털케어로그는 어떻게 사용되나?</h3>
      <div class="bg-blue-50 p-6 rounded-lg mb-6">
        <h4 class="text-lg font-semibold text-blue-900 mb-3">일상 기록 (1-2분)</h4>
        <p class="text-gray-700 mb-4">부모님이 스마트폰 앱으로 간단히 체크:</p>
        <ul class="list-disc list-inside space-y-1 text-gray-700 text-sm">
          <li>아이의 기분 상태 (좋음/보통/나쁨)</li>
          <li>문제 행동 발생 여부와 상황</li>
          <li>수면, 식사, 약물 복용 상태</li>
          <li>특별한 활동이나 성취</li>
        </ul>
        
        <h4 class="text-lg font-semibold text-blue-900 mb-3 mt-4">기관 연동</h4>
        <p class="text-gray-700 mb-4">학교, 센터, 병원에서도 같은 방식으로 기록:</p>
        <ul class="list-disc list-inside space-y-1 text-gray-700 text-sm">
          <li>수업 중 행동 변화</li>
          <li>치료 효과와 반응</li>
          <li>의료진 관찰 기록</li>
        </ul>
        
        <h4 class="text-lg font-semibold text-blue-900 mb-3 mt-4">AI 분석 결과</h4>
        <p class="text-gray-700 mb-4">자동으로 생성되는 맞춤 정보:</p>
        <ul class="list-disc list-inside space-y-1 text-gray-700 text-sm">
          <li>주간/월간 발달 그래프</li>
          <li>문제 행동 패턴 분석</li>
          <li>개인 맞춤 대응 방법 제안</li>
          <li>다음 주 목표 설정</li>
        </ul>
      </div>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">결론</h3>
      <div class="bg-purple-50 p-6 rounded-lg">
        <p class="text-lg text-gray-700 mb-4 leading-relaxed">디지털케어로그는 단순한 기록 앱이 아닙니다.</p>
        <ul class="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>부모에게는 힘이 되고,</strong></li>
          <li><strong>교사에게는 근거가 되고,</strong></li>
          <li><strong>의사에게는 판단 근거가 되고,</strong></li>
          <li><strong>아이에게는 성장의 발판이 됩니다.</strong></li>
        </ul>
        <p class="text-lg text-gray-700 leading-relaxed font-semibold">CT와 MRI가 진단의 방식을 바꿨듯, 디지털케어로그는 발달장애 치료의 방식을 바꾸는 혁신입니다.</p>
      </div>
    `,
    category: 'insight',
    date: '2025-01-20',
    image: '👨‍👩‍👧‍👦',
    featured: false,
    author: '드림에이아이랩',
    tags: ['디지털케어로그', '발달장애', '실제사례', '자람이', '치료효과', '부모경험']
  },
  {
    id: 53,
    title: '우리 어머니 사례로 본 시니어앤라이프 효과',
    excerpt: '치매 초기 어머니의 실제 사례를 통해 시니어앤라이프가 어떻게 사용되고 어떤 효과를 가져오는지 구체적으로 살펴봅니다.',
    content: `
      <h2 class="text-3xl font-bold text-gray-900 mb-6">우리 어머니 사례로 본 시니어앤라이프 효과</h2>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">"어머니가 갑자기 변하셔서 어떻게 해야 할지 모르겠어요." 많은 성인 자녀들이 겪는 고민입니다. 병원에서는 정확한 진단을 내리기 어렵고, 요양원에서는 일상 패턴을 모르니 적절한 케어가 어렵습니다. 결국 가족은 늘 <strong>"설명만 하는 사람"</strong>이 되어 지칩니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">우리 어머니 김영희 (가상 사례, 78세, 치매 초기)</h3>
      <div class="bg-yellow-50 p-6 rounded-lg mb-6">
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li>최근 기억력이 떨어지고 같은 질문을 반복함</li>
          <li>집에서는 낮잠을 자지 않으면 저녁에 혼란스러워함</li>
          <li>병원에서는 "치매 초기"라고 진단했지만 구체적 관리법을 모름</li>
          <li>요양원에서는 "가족이 더 잘 안다"며 케어 방법을 묻음</li>
          <li>가족들은 언제 어떤 상황에서 증상이 심해지는지 패턴을 모름</li>
        </ul>
      </div>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">👉 이렇게 기관마다 따로따로 관리하다 보니, 정작 어머니에게 중요한 <strong>"언제, 왜, 어떻게"</strong>는 아무도 모르는 상황이 반복됩니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">시니어앤라이프가 들어오면?</h3>
      
      <h4 class="text-xl font-semibold text-gray-800 mb-3">1. 모든 기록이 한곳에 모입니다</h4>
      <ul class="list-disc list-inside space-y-2 mb-6 text-gray-700">
        <li><strong>가정:</strong> 수면 패턴, 식사 시간, 약물 복용 → 기록</li>
        <li><strong>병원:</strong> 진료 내용, 검사 결과, 처방 변경 → 기록</li>
        <li><strong>요양원:</strong> 일상 활동, 행동 변화, 반응 → 기록</li>
        <li><strong>가족:</strong> 특별한 상황, 기분 변화, 건강 상태 → 기록</li>
      </ul>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">→ 이제 퍼즐 조각처럼 흩어진 기록이 하나로 합쳐집니다.</p>
      
      <h4 class="text-xl font-semibold text-gray-800 mb-3">2. AI가 패턴을 찾아줍니다</h4>
      <ul class="list-disc list-inside space-y-2 mb-6 text-gray-700">
        <li>혼란스러운 행동은 "수면 부족, 약물 시간 변경, 환경 변화"에 늘어남</li>
        <li>반대로 "규칙적인 생활, 가족과의 대화, 익숙한 환경"에서는 안정됨</li>
      </ul>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">→ 가족은 언제, 어떤 상황에 더 주의해야 하는지 알게 됩니다.</p>
      
      <h4 class="text-xl font-semibold text-gray-800 mb-3">3. 맞춤형 케어 방법을 알려줍니다</h4>
      <ul class="list-disc list-inside space-y-2 mb-6 text-gray-700">
        <li><strong>가정:</strong> 규칙적인 수면 시간과 식사 루틴 설정</li>
        <li><strong>병원:</strong> 약물 반응과 행동 변화를 데이터로 확인</li>
        <li><strong>요양원:</strong> 개인 맞춤 활동 프로그램과 환경 조정</li>
        <li><strong>가족:</strong> 효과적인 소통 방법과 대응 전략</li>
      </ul>
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">→ 더 이상 감으로 대처하지 않아도 됩니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">가족에게 오는 변화</h3>
      <div class="bg-green-50 p-6 rounded-lg mb-6">
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li>매일 "왜 이런 행동을 하시는지" 몰라 답답했던 게, 데이터로 보이니 안심됩니다.</li>
          <li>병원·요양원과 같은 언어로 대화할 수 있어 협력이 쉬워집니다.</li>
          <li>의사도 약을 조정할 때 더 정확하게 설명해 줍니다.</li>
          <li>무엇보다, 어머니가 조금씩 변해가는 과정을 그래프로 직접 확인할 수 있습니다.</li>
        </ul>
      </div>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">어머니의 미래가 달라집니다</h3>
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">1년만 지나도 수많은 데이터가 쌓입니다.</p>
      <ul class="list-disc list-inside space-y-2 mb-6 text-gray-700">
        <li>"비슷한 어르신들은 이런 환경에서 좋아졌다"라는 과학적 근거가 생기고,</li>
        <li>어머니 맞춤형 케어·치료 계획이 점점 더 정교해집니다.</li>
        <li>가족은 더 이상 "혼자 케어하는 사람"이 아니라, 의료진·요양사·가족과 함께 같은 팀에서 어머니를 돌보는 사람이 됩니다.</li>
      </ul>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">시니어앤라이프는 어떻게 사용되나?</h3>
      <div class="bg-blue-50 p-6 rounded-lg mb-6">
        <h4 class="text-lg font-semibold text-blue-900 mb-3">일상 기록 (1-2분)</h4>
        <p class="text-gray-700 mb-4">가족이 스마트폰 앱으로 간단히 체크:</p>
        <ul class="list-disc list-inside space-y-1 text-gray-700 text-sm">
          <li>어르신의 기분 상태 (좋음/보통/나쁨)</li>
          <li>수면, 식사, 약물 복용 상태</li>
          <li>인지 기능 변화 (기억력, 판단력)</li>
          <li>특별한 행동이나 반응</li>
        </ul>
        
        <h4 class="text-lg font-semibold text-blue-900 mb-3 mt-4">기관 연동</h4>
        <p class="text-gray-700 mb-4">병원, 요양원, 복지관에서도 같은 방식으로 기록:</p>
        <ul class="list-disc list-inside space-y-1 text-gray-700 text-sm">
          <li>진료 중 행동 변화</li>
          <li>치료 효과와 반응</li>
          <li>의료진 관찰 기록</li>
        </ul>
        
        <h4 class="text-lg font-semibold text-blue-900 mb-3 mt-4">AI 분석 결과</h4>
        <p class="text-gray-700 mb-4">자동으로 생성되는 맞춤 정보:</p>
        <ul class="list-disc list-inside space-y-1 text-gray-700 text-sm">
          <li>주간/월간 인지 기능 그래프</li>
          <li>행동 패턴 분석</li>
          <li>개인 맞춤 케어 방법 제안</li>
          <li>다음 주 목표 설정</li>
        </ul>
      </div>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">결론</h3>
      <div class="bg-purple-50 p-6 rounded-lg">
        <p class="text-lg text-gray-700 mb-4 leading-relaxed">시니어앤라이프는 단순한 기록 앱이 아닙니다.</p>
        <ul class="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>가족에게는 힘이 되고,</strong></li>
          <li><strong>의료진에게는 근거가 되고,</strong></li>
          <li><strong>요양사에게는 판단 근거가 되고,</strong></li>
          <li><strong>어르신에게는 안전한 노후의 발판이 됩니다.</strong></li>
        </ul>
        <p class="text-lg text-gray-700 leading-relaxed font-semibold">CT와 MRI가 진단의 방식을 바꿨듯, 시니어앤라이프는 노인 케어의 방식을 바꾸는 혁신입니다.</p>
      </div>
    `,
    category: 'insight',
    date: '2025-01-25',
    image: '👴👵',
    featured: false,
    author: '드림에이아이랩',
    tags: ['시니어앤라이프', '치매', '실제사례', '노인케어', '가족돌봄', 'AI케어']
  },
  {
    id: 40,
    title: '내 부모님의 하루, 이제는 눈으로 확인합니다 – 보호자가 말하는 시니어앤라이프 디지털케어로그',
    excerpt: '부모님을 요양원에 모시며 늘 걱정하던 보호자가 시니어앤라이프 디지털케어로그를 통해 얻은 안심과 확신에 대해 솔직하게 이야기합니다.',
    content: `
      <h2 class="text-3xl font-bold text-gray-900 mb-6">내 부모님의 하루, 이제는 눈으로 확인합니다</h2>
      <p class="text-lg text-gray-600 mb-8">보호자가 말하는 시니어앤라이프 디지털케어로그</p>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">부모님을 요양원이나 재가서비스 센터에 모시게 되면 늘 마음이 무겁습니다.</p>
      
      <div class="bg-yellow-50 p-6 rounded-lg mb-8">
        <p class="text-lg text-gray-700 mb-4">"오늘은 밥은 잘 드셨을까?"</p>
        <p class="text-lg text-gray-700 mb-4">"약은 제때 챙기셨을까?"</p>
        <p class="text-lg text-gray-700">"혹시 불편한 건 없을까?"</p>
      </div>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">매일같이 이런 걱정을 하지만, 직접 확인할 방법은 거의 없었습니다. 전화로 물어봐도 "잘 계세요"라는 답변만 들을 수 있었고, 정작 부모님의 하루하루는 어둠 속에 있었습니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">시니어앤라이프 디지털케어로그를 만나다</h3>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">저는 최근 시니어앤라이프 디지털케어로그를 접한 후 큰 안심을 얻었습니다. 요양보호사 선생님이 현장에서 입력한 기록이 실시간으로 제 휴대폰에 공유됩니다.</p>
      
      <div class="bg-blue-50 p-6 rounded-lg mb-8">
        <h4 class="text-lg font-semibold text-blue-900 mb-3">실시간으로 확인할 수 있는 것들:</h4>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li>오늘 드신 식사 (아침, 점심, 저녁)</li>
          <li>복약 여부와 시간</li>
          <li>산책이나 운동 기록</li>
          <li>수면 패턴과 기분 상태</li>
          <li>특별한 일정이나 활동</li>
        </ul>
      </div>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">만약 혈압이 갑자기 오르거나 약을 거부하신다면, 시스템이 바로 알림을 보내줍니다. 이제 부모님의 건강 상태를 놓치지 않고 바로 대응할 수 있게 되었습니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">AI가 분석한 맞춤형 건강 리포트</h3>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">무엇보다 고마운 점은, 이 모든 기록이 단순 보고가 아니라 AI가 분석한 맞춤형 건강 리포트로 이어진다는 것입니다.</p>
      
      <div class="bg-green-50 p-6 rounded-lg mb-8">
        <h4 class="text-lg font-semibold text-green-900 mb-3">AI가 제안하는 맞춤형 케어:</h4>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li>부모님께 어떤 케어가 더 필요한지</li>
          <li>어떤 생활습관을 개선하면 좋을지</li>
          <li>언제 주의를 기울여야 하는지</li>
          <li>어떤 활동이 건강에 도움이 되는지</li>
        </ul>
      </div>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">구체적인 제안까지 받을 수 있어서, 단순히 "잘 계신다"는 안심이 아니라 "이렇게 하면 더 좋아질 수 있다"는 확신을 얻을 수 있게 되었습니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">데이터를 통한 확신</h3>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">예전에는 불안한 마음으로 기관을 '믿는 수밖에' 없었는데, 이제는 데이터를 통해 확신할 수 있습니다.</p>
      
      <div class="bg-purple-50 p-6 rounded-lg mb-8">
        <h4 class="text-lg font-semibold text-purple-900 mb-3">변화된 점들:</h4>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li>부모님의 하루가 투명하게 기록됨</li>
          <li>가족도 함께 돌봄에 참여할 수 있게 됨</li>
          <li>의료진과의 소통이 더 구체적이고 정확해짐</li>
          <li>부모님의 건강 상태를 객관적으로 파악 가능</li>
        </ul>
      </div>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">실제 사용 경험</h3>
      
      <p class="text-lg text-gray-700 mb-4 leading-relaxed">시니어앤라이프 디지털케어로그를 사용하면서 가장 인상 깊었던 순간들을 공유해드립니다:</p>
      
      <div class="space-y-6 mb-8">
        <div class="bg-gray-50 p-4 rounded-lg">
          <h4 class="font-semibold text-gray-800 mb-2">📱 실시간 알림</h4>
          <p class="text-gray-700">어머니가 평소보다 식사를 적게 드셨다는 알림을 받고, 바로 요양원에 연락해서 확인해보니 감기 기운이 있으셨더라고요. 미리 대응할 수 있어서 다행이었습니다.</p>
        </div>
        
        <div class="bg-gray-50 p-4 rounded-lg">
          <h4 class="font-semibold text-gray-800 mb-2">📊 주간 건강 리포트</h4>
          <p class="text-gray-700">매주 받는 AI 분석 리포트에서 "규칙적인 산책이 기분 개선에 도움이 된다"는 제안을 받고, 요양원에 산책 시간을 늘려달라고 요청했더니 정말 효과가 있었어요.</p>
        </div>
        
        <div class="bg-gray-50 p-4 rounded-lg">
          <h4 class="font-semibold text-gray-800 mb-2">👨‍⚕️ 의료진과의 소통</h4>
          <p class="text-gray-700">정기 진료 때 의사선생님께 디지털케어로그 데이터를 보여드리니, 훨씬 정확한 진단과 처방을 받을 수 있었습니다.</p>
        </div>
      </div>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">보호자로서의 마음</h3>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">저처럼 사랑하는 부모님을 맡기며 늘 걱정하는 보호자라면, 시니어앤라이프 디지털케어로그는 더 이상 선택이 아니라 반드시 필요한 안심 서비스라고 말씀드리고 싶습니다.</p>
      
      <div class="bg-red-50 p-6 rounded-lg mb-8">
        <h4 class="text-lg font-semibold text-red-900 mb-3">왜 필요한가요?</h4>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li>부모님의 안전과 건강을 실시간으로 확인할 수 있습니다</li>
          <li>의료진과의 소통이 더 정확하고 효율적이 됩니다</li>
          <li>가족 모두가 함께 돌봄에 참여할 수 있습니다</li>
          <li>AI 분석을 통해 더 나은 케어 방법을 찾을 수 있습니다</li>
        </ul>
      </div>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">마무리</h3>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">시니어앤라이프 디지털케어로그는 단순한 기록 도구가 아닙니다. 부모님의 하루하루를 투명하게 만들어주고, 가족의 마음을 안정시켜주는 소중한 기술입니다.</p>
      
      <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
        <p class="text-lg text-gray-700 leading-relaxed font-semibold text-center">"이제 부모님의 하루를 눈으로 확인할 수 있어서 마음이 한결 편해졌습니다. 모든 보호자분들께 추천드리고 싶은 서비스입니다."</p>
      </div>
    `,
    category: 'insight',
    date: '2025-01-30',
    image: '👨‍👩‍👧‍👦',
    featured: true,
    author: '김보호자 (실제 사용자)',
    tags: ['시니어앤라이프', '디지털케어로그', '보호자경험', '실시간모니터링', 'AI분석', '가족돌봄']
  },
  {
    id: 54,
    title: '시니어 돌봄 시장의 판을 바꾸다 – 병원과 재가재활센터가 시니어앤라이프를 선택하는 이유',
    excerpt: '대한민국 시니어 돌봄 산업의 패러다임을 바꾸는 시니어앤라이프 AI 디지털케어로그의 핵심 기술과 산업적 가치를 분석합니다.',
    content: `
      <h2 class="text-3xl font-bold text-gray-900 mb-6">시니어 돌봄 시장의 판을 바꾸다</h2>
      <p class="text-lg text-gray-600 mb-8">병원과 재가재활센터가 시니어앤라이프를 선택하는 이유</p>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">대한민국의 시니어 돌봄 산업은 오랫동안 수기 기록과 엑셀 문서에 머물러 있었습니다. 요양병원, 요양원, 재가재활센터는 제각각의 양식을 사용했고, 보호자·의료진·센터 간 데이터 연계는 사실상 불가능했습니다.</p>
      
      <div class="bg-red-50 p-6 rounded-lg mb-8">
        <h3 class="text-lg font-semibold text-red-900 mb-3">기존 시스템의 한계</h3>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li>제각각의 기록 양식으로 통합 분석 불가능</li>
          <li>보호자·의료진·센터 간 데이터 연계 부재</li>
          <li>돌봄의 질을 객관적으로 평가하기 어려움</li>
          <li>예방적 건강 관리로 발전시키는 데 큰 한계</li>
        </ul>
      </div>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">그 결과, 돌봄의 질을 객관적으로 평가하거나 예방적 건강 관리로 발전시키는 데 큰 한계가 있었습니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">시니어앤라이프 AI 디지털케어로그의 등장</h3>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">이 한계를 근본적으로 깨뜨린 것이 바로 시니어앤라이프의 AI 디지털케어로그입니다. DAL(드림에이아이랩)의 독자적 기술로 개발된 이 시스템은 단순한 전산화가 아니라 AI 기반의 데이터 표준화·분석 플랫폼입니다.</p>
      
      <div class="bg-blue-50 p-6 rounded-lg mb-8">
        <h4 class="text-lg font-semibold text-blue-900 mb-3">시스템 작동 원리</h4>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li>요양보호사가 현장에서 입력하는 식사, 복약, 운동, 바이탈 기록</li>
          <li>자동으로 구조화되는 데이터 처리</li>
          <li>AI가 실시간으로 분석하는 지능형 시스템</li>
        </ul>
      </div>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">핵심 기술 3가지</h3>
      
      <div class="space-y-6 mb-8">
        <div class="bg-green-50 p-6 rounded-lg">
          <h4 class="text-lg font-semibold text-green-900 mb-3">1. 멀티모달 입력 처리</h4>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li>음성 기록을 자동 요약</li>
            <li>사진 기반(OCR)으로 복약·식단 여부를 인식</li>
            <li>다양한 입력 방식의 통합 처리</li>
          </ul>
        </div>
        
        <div class="bg-yellow-50 p-6 rounded-lg">
          <h4 class="text-lg font-semibold text-yellow-900 mb-3">2. 시계열 패턴 분석</h4>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li>혈압·활동량·수면 같은 데이터를 학습</li>
            <li>개인별 기준선에서 벗어나는 변화를 감지</li>
            <li>장기적 트렌드 분석을 통한 예측</li>
          </ul>
        </div>
        
        <div class="bg-purple-50 p-6 rounded-lg">
          <h4 class="text-lg font-semibold text-purple-900 mb-3">3. 위험 예측과 맞춤형 제안</h4>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li>24~72시간 선제 경보 시스템</li>
            <li>낙상·입원 가능성 예측</li>
            <li>맞춤형 케어플랜과 생활 루틴 제시</li>
          </ul>
        </div>
      </div>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">병원과 재가재활센터가 선택하는 이유</h3>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">병원과 재가재활센터가 시니어앤라이프를 선택하는 이유는 단순히 행정 편의성 때문이 아닙니다.</p>
      
      <div class="grid md:grid-cols-3 gap-6 mb-8">
        <div class="bg-blue-50 p-6 rounded-lg">
          <h4 class="text-lg font-semibold text-blue-900 mb-3">정부 보고·인증 자동화</h4>
          <ul class="list-disc list-inside space-y-2 text-gray-700 text-sm">
            <li>표준화된 행정 양식을 AI가 자동 생성</li>
            <li>보고 부담을 획기적으로 줄임</li>
            <li>정확성과 일관성 확보</li>
          </ul>
        </div>
        
        <div class="bg-green-50 p-6 rounded-lg">
          <h4 class="text-lg font-semibold text-green-900 mb-3">데이터 기반 신뢰 확보</h4>
          <ul class="list-disc list-inside space-y-2 text-gray-700 text-sm">
            <li>보호자는 실시간으로 기록을 확인</li>
            <li>투명성이 강화됨</li>
            <li>신뢰 관계 구축</li>
          </ul>
        </div>
        
        <div class="bg-purple-50 p-6 rounded-lg">
          <h4 class="text-lg font-semibold text-purple-900 mb-3">경쟁력 강화</h4>
          <ul class="list-disc list-inside space-y-2 text-gray-700 text-sm">
            <li>디지털케어로그 인증센터로 지정</li>
            <li>플랫폼 내에서 상위 노출</li>
            <li>보호자들이 선택하는 우선순위</li>
          </ul>
        </div>
      </div>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">산업 구조를 바꾸는 플랫폼</h3>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">이 기술은 단순한 소프트웨어가 아니라 산업 구조를 바꾸는 플랫폼입니다. 지금까지 인력 의존형으로 운영되던 시장을, 데이터 기반·AI 분석 중심의 새로운 생태계로 전환시키는 것입니다.</p>
      
      <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8">
        <h4 class="text-lg font-semibold text-gray-800 mb-3">산업 전환의 핵심</h4>
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h5 class="font-semibold text-gray-700 mb-2">기존 방식</h5>
            <ul class="list-disc list-inside space-y-1 text-gray-600 text-sm">
              <li>인력 의존형 운영</li>
              <li>수기 기록 중심</li>
              <li>개별 기관별 관리</li>
              <li>사후 대응 중심</li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-gray-700 mb-2">새로운 방식</h5>
            <ul class="list-disc list-inside space-y-1 text-gray-600 text-sm">
              <li>데이터 기반 운영</li>
              <li>AI 분석 중심</li>
              <li>통합 플랫폼 관리</li>
              <li>예측적 케어 중심</li>
            </ul>
          </div>
        </div>
      </div>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">업계 전문가 평가</h3>
      
      <div class="bg-gray-50 p-6 rounded-lg mb-8">
        <blockquote class="text-lg text-gray-700 italic leading-relaxed">
          "시니어앤라이프는 의료와 돌봄을 단순 관리 대상이 아닌 예측 가능하고 최적화된 서비스로 바꾸고 있다. 이는 곧 시니어 돌봄 산업의 패러다임 자체를 바꾸는 혁신이다."
        </blockquote>
        <p class="text-sm text-gray-600 mt-4">- 업계 관계자</p>
      </div>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">미래 전망</h3>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">시니어앤라이프 디지털케어로그는 단순한 기술 도구를 넘어서, 시니어 돌봄 산업 전체의 질적 향상을 이끌어내는 핵심 인프라로 자리잡고 있습니다.</p>
      
      <div class="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
        <h4 class="text-lg font-semibold text-gray-800 mb-3">기대 효과</h4>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li>돌봄 서비스의 표준화와 품질 향상</li>
          <li>예방적 건강 관리 시스템 구축</li>
          <li>의료진과 돌봄 전문가 간 협력 강화</li>
          <li>보호자 만족도 및 신뢰도 증대</li>
          <li>시니어 돌봄 산업의 디지털 전환 가속화</li>
        </ul>
      </div>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">결론</h3>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">시니어앤라이프는 단순한 기술 솔루션이 아닙니다. 이는 시니어 돌봄 산업의 패러다임을 근본적으로 바꾸고, 더 나은 돌봄 서비스를 위한 새로운 표준을 제시하는 혁신적인 플랫폼입니다.</p>
      
      <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
        <p class="text-lg text-gray-700 leading-relaxed font-semibold text-center">"시니어 돌봄의 미래는 데이터와 AI가 만나는 곳에서 시작됩니다. 시니어앤라이프가 그 길을 제시하고 있습니다."</p>
      </div>
    `,
    category: 'insight',
    date: '2025-02-05',
    image: '🏥',
    featured: true,
    author: '드림에이아이랩',
    tags: ['시니어앤라이프', '디지털케어로그', '시니어돌봄', 'AI플랫폼', '산업혁신', '의료기관']
  },
  {
    id: 41,
    title: '시니어앤라이프, AI 디지털케어로그 기술 고도화 – 시니어 돌봄의 새로운 표준 제시',
    excerpt: '시니어앤라이프가 AI 디지털케어로그 기술을 한 단계 더 고도화하며 멀티모달 AI 분석과 개인 맞춤형 건강 예측 모델을 추가했습니다.',
    content: `
      <h2 class="text-3xl font-bold text-gray-900 mb-6">시니어앤라이프, AI 디지털케어로그 기술 고도화</h2>
      <p class="text-lg text-gray-600 mb-8">시니어 돌봄의 새로운 표준 제시</p>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">시니어앤라이프가 자사의 핵심 기술인 AI 디지털케어로그를 한 단계 더 고도화하며 시니어 돌봄 시장에 새로운 가능성을 열었습니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">멀티모달 AI 기술 도입</h3>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">이번 업데이트로 요양병원, 요양원, 주간보호소, 재가서비스 센터에서 입력되는 모든 돌봄 기록이 멀티모달 AI 기술로 자동 분석됩니다.</p>
      
      <div class="bg-blue-50 p-6 rounded-lg mb-8">
        <h4 class="text-lg font-semibold text-blue-900 mb-3">주요 기능</h4>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>음성 기록 자동 변환:</strong> 음성으로 기록한 메모가 즉시 텍스트 요약으로 변환</li>
          <li><strong>OCR 기반 자동 구조화:</strong> 사진을 통한 식사·복약 기록을 자동으로 구조화</li>
          <li><strong>실시간 데이터 분석:</strong> 입력과 동시에 AI가 패턴을 분석하고 인사이트 제공</li>
        </ul>
      </div>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">이를 통해 현장 인력의 기록 부담이 줄어들 뿐 아니라, 데이터의 정확도와 활용성이 크게 향상되었습니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">개인 맞춤형 건강 예측 모델 추가</h3>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">또한, 시니어앤라이프는 개인 맞춤형 건강 예측 모델을 추가했습니다. 누적된 돌봄 데이터를 기반으로 AI가 다양한 건강 위험 요소를 예측합니다.</p>
      
      <div class="bg-green-50 p-6 rounded-lg mb-8">
        <h4 class="text-lg font-semibold text-green-900 mb-3">예측 가능한 건강 위험 요소</h4>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>낙상 위험:</strong> 개인별 활동 패턴과 환경 요인을 분석하여 낙상 가능성 예측</li>
          <li><strong>복약 누락:</strong> 복약 패턴과 생활 루틴을 분석하여 복약 누락 위험 감지</li>
          <li><strong>급성 건강 악화:</strong> 바이탈 사인과 행동 변화를 종합하여 건강 악화 가능성 예측</li>
        </ul>
      </div>
      
      <div class="bg-yellow-50 p-6 rounded-lg mb-8">
        <h4 class="text-lg font-semibold text-yellow-900 mb-3">예측 시스템의 특징</h4>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>최대 72시간 전 예측:</strong> 충분한 대응 시간 확보</li>
          <li><strong>실시간 알림 제공:</strong> 보호자와 의료진에게 즉시 알림</li>
          <li><strong>개인 맞춤형 분석:</strong> 각 어르신의 특성에 맞는 예측 모델 적용</li>
        </ul>
      </div>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">이는 보호자와 의료진이 미리 대응할 수 있도록 도와주어, 시니어 돌봄의 질을 한층 높여줍니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">기술 고도화의 의미</h3>
      
      <div class="bg-purple-50 p-6 rounded-lg mb-8">
        <blockquote class="text-lg text-gray-700 italic leading-relaxed">
          "이번 기술 고도화는 단순히 기록을 디지털화하는 수준을 넘어, 시니어 돌봄 전 과정을 데이터 기반으로 혁신하는 전환점입니다. 앞으로도 시니어앤라이프는 돌봄 기관과 보호자 모두에게 신뢰할 수 있는 플랫폼으로 자리매김하겠습니다."
        </blockquote>
        <p class="text-sm text-gray-600 mt-4">- 시니어앤라이프 관계자</p>
      </div>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">향후 계획</h3>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">시니어앤라이프는 향후 다양한 목표를 설정하고 있습니다:</p>
      
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-blue-50 p-6 rounded-lg">
          <h4 class="text-lg font-semibold text-blue-900 mb-3">정부 정책 연계</h4>
          <ul class="list-disc list-inside space-y-2 text-gray-700 text-sm">
            <li>정부 행정 보고 자동화</li>
            <li>표준화된 인증 제도 연계</li>
            <li>정책 지원 체계 구축</li>
          </ul>
        </div>
        
        <div class="bg-green-50 p-6 rounded-lg">
          <h4 class="text-lg font-semibold text-green-900 mb-3">글로벌 진출</h4>
          <ul class="list-disc list-inside space-y-2 text-gray-700 text-sm">
            <li>글로벌 헬스케어 시장 진출</li>
            <li>국제 표준 호환성 확보</li>
            <li>해외 파트너십 구축</li>
          </ul>
        </div>
      </div>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">기대 효과</h3>
      
      <div class="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg mb-8">
        <h4 class="text-lg font-semibold text-gray-800 mb-3">시니어 돌봄 산업에 미치는 영향</h4>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li>돌봄 서비스의 표준화와 품질 향상</li>
          <li>예방적 건강 관리 시스템 구축</li>
          <li>의료진과 돌봄 전문가 간 협력 강화</li>
          <li>보호자 만족도 및 신뢰도 증대</li>
          <li>시니어 돌봄 산업의 디지털 전환 가속화</li>
        </ul>
      </div>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">결론</h3>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">이번 기술 고도화는 시니어앤라이프가 시니어 돌봄 시장에서 새로운 표준을 제시하는 중요한 전환점입니다. AI와 데이터 기반의 혁신적인 접근으로 더 나은 돌봄 서비스를 제공할 수 있는 기반을 마련했습니다.</p>
      
      <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
        <p class="text-lg text-gray-700 leading-relaxed font-semibold text-center">"시니어앤라이프의 기술 고도화는 시니어 돌봄의 미래를 바꾸는 첫걸음입니다. 데이터와 AI가 만나 더 나은 돌봄을 만들어갑니다."</p>
      </div>
    `,
    category: 'company',
    date: '2025-06-15',
    image: '🚀',
    featured: true,
    author: '드림에이아이랩',
    tags: ['시니어앤라이프', 'AI디지털케어로그', '기술고도화', '멀티모달AI', '건강예측모델', '시니어돌봄']
  },
  {
    id: 55,
    title: '국내 최초 AI 기반 국제결혼 플랫폼, 드림에이아이랩이 선도',
    excerpt: '사회문제 해결과 기술혁신이 만난 새로운 돌파구로, AI 번역과 문화교육을 통한 국제결혼 플랫폼을 공개했습니다.',
    content: `
      <h2 class="text-3xl font-bold text-gray-900 mb-6">국내 최초 AI 기반 국제결혼 플랫폼, 드림에이아이랩이 선도</h2>
      <p class="text-lg text-gray-600 mb-8">사회문제 해결과 기술혁신이 만난 새로운 돌파구</p>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">국내 인공지능 전문 기업 <strong>드림에이아이랩(Dream AI Lab)</strong>이 국내 최초로 국제결혼 플랫폼을 공개했습니다. 이번 플랫폼은 단순한 결혼 정보 중개를 넘어, 사회문제 극복과 기술 융합을 통한 새로운 대안을 제시한다는 점에서 주목됩니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">해결하고자 하는 사회문제</h3>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">국내 농촌과 일부 지역 사회에서 장기간 이어진 결혼난·인구 문제, 결혼 후 문화·언어 장벽으로 인한 가정 해체와 갈등은 오래된 사회적 과제였습니다.</p>
      
      <div class="bg-red-50 p-6 rounded-lg mb-8">
        <h4 class="text-lg font-semibold text-red-900 mb-3">주요 사회문제</h4>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li>농촌 및 지방 지역의 결혼난과 인구 감소</li>
          <li>국제결혼 후 문화·언어 장벽으로 인한 가정 갈등</li>
          <li>결혼 정보 중개 과정의 비효율성과 신뢰성 부족</li>
          <li>결혼 후 지속적인 지원 체계 부재</li>
        </ul>
      </div>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">드림에이아이랩은 AI 번역, 문화교육, 커뮤니티 네트워킹 기능을 통해 이 문제를 직접 해결하고자 합니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">AI 기반 통합 지원 시스템</h3>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">플랫폼은 단순히 '만남'을 주선하는 것이 아니라, 결혼 전부터 결혼 후까지 전 과정을 동행하는 디지털 기반 파트너라는 점에서 기존 국제결혼 시장과 차별화됩니다.</p>
      
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-blue-50 p-6 rounded-lg">
          <h4 class="text-lg font-semibold text-blue-900 mb-3">다국어 실시간 번역 상담</h4>
          <ul class="list-disc list-inside space-y-2 text-gray-700 text-sm">
            <li>AI 기반 실시간 번역 서비스</li>
            <li>문화적 맥락을 고려한 정확한 번역</li>
            <li>24시간 상담 지원</li>
          </ul>
        </div>
        
        <div class="bg-green-50 p-6 rounded-lg">
          <h4 class="text-lg font-semibold text-green-900 mb-3">국가별 맞춤 문화·언어 교육</h4>
          <ul class="list-disc list-inside space-y-2 text-gray-700 text-sm">
            <li>개인별 맞춤형 문화 교육 프로그램</li>
            <li>언어 학습 지원 시스템</li>
            <li>실생활 중심 교육 콘텐츠</li>
          </ul>
        </div>
        
        <div class="bg-purple-50 p-6 rounded-lg">
          <h4 class="text-lg font-semibold text-purple-900 mb-3">커플·가족 커뮤니티 기능</h4>
          <ul class="list-disc list-inside space-y-2 text-gray-700 text-sm">
            <li>비슷한 상황의 커플들과의 소통</li>
            <li>경험 공유 및 조언 제공</li>
            <li>지역별 모임 및 이벤트 정보</li>
          </ul>
        </div>
        
        <div class="bg-yellow-50 p-6 rounded-lg">
          <h4 class="text-lg font-semibold text-yellow-900 mb-3">결혼 후 생활 정보 지원</h4>
          <ul class="list-disc list-inside space-y-2 text-gray-700 text-sm">
            <li>법적 절차 및 서류 지원</li>
            <li>자녀 양육 및 교육 정보</li>
            <li>가족 상담 및 지원 서비스</li>
          </ul>
        </div>
      </div>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">기술 혁신의 핵심</h3>
      
      <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8">
        <h4 class="text-lg font-semibold text-gray-800 mb-3">AI 기술 활용</h4>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>자연어 처리:</strong> 다국어 번역 및 문화적 맥락 이해</li>
          <li><strong>추천 시스템:</strong> 개인별 맞춤형 상대 추천</li>
          <li><strong>학습 분석:</strong> 언어 학습 진도 및 효과 측정</li>
          <li><strong>감정 분석:</strong> 커뮤니케이션 패턴 분석 및 개선 제안</li>
        </ul>
      </div>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">회사 관계자 인터뷰</h3>
      
      <div class="bg-gray-50 p-6 rounded-lg mb-8">
        <blockquote class="text-lg text-gray-700 italic leading-relaxed">
          "국제결혼은 개인의 선택이면서 동시에 사회 구조와 직결된 문제입니다. AI 기술을 통해 언어와 문화 장벽을 낮추고, 건강한 가족과 사회를 만드는 데 기여할 것입니다."
        </blockquote>
        <p class="text-sm text-gray-600 mt-4">- 드림에이아이랩 관계자</p>
      </div>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">전문가 평가</h3>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">전문가들은 이번 플랫폼이 결혼정보 시장의 기술 혁신 모델일 뿐만 아니라, 고령화와 지방 인구 감소 문제까지 연계될 수 있는 사회적 해법이 될 것으로 전망하고 있습니다.</p>
      
      <div class="bg-green-50 p-6 rounded-lg mb-8">
        <h4 class="text-lg font-semibold text-green-900 mb-3">기대 효과</h4>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li>국제결혼의 성공률 향상</li>
          <li>문화적 갈등 감소 및 가족 안정성 증대</li>
          <li>지방 인구 감소 문제 완화</li>
          <li>결혼정보 시장의 디지털 전환 가속화</li>
          <li>AI 기술의 사회적 가치 실현</li>
        </ul>
      </div>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">미래 전망</h3>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">드림에이아이랩의 국제결혼 플랫폼은 단순한 기술 서비스를 넘어서, 사회문제 해결과 기술혁신이 만난 새로운 모델을 제시합니다. 이는 AI 기술이 사회적 가치를 창출하는 대표적인 사례로 평가받을 것으로 기대됩니다.</p>
      
      <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
        <p class="text-lg text-gray-700 leading-relaxed font-semibold text-center">"기술과 사회문제 해결이 만나는 곳에서 진정한 혁신이 시작됩니다. 드림에이아이랩이 그 길을 제시하고 있습니다."</p>
      </div>
    `,
    category: 'company',
    date: '2025-07-10',
    image: '💕',
    featured: false,
    author: '드림에이아이랩',
    tags: ['국제결혼', 'AI플랫폼', '사회문제해결', '다국어번역', '문화교육', '기술혁신']
  },
  {
    id: 42,
    title: '드림에이아이랩, 국제결혼 플랫폼으로 시장의 새로운 흐름을 연다',
    excerpt: 'AI와 디지털 플랫폼이 중심이 되는 국제결혼 시장의 새로운 패러다임을 분석하고, 드림에이아이랩의 혁신적 접근법을 살펴봅니다.',
    content: `
      <h2 class="text-3xl font-bold text-gray-900 mb-6">드림에이아이랩, 국제결혼 플랫폼으로 시장의 새로운 흐름을 연다</h2>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">국제결혼은 이제 단순히 결혼을 넘어 시장과 사회의 흐름을 바꾸는 키워드로 떠오르고 있습니다. 드림에이아이랩은 국내 최초로 AI를 활용한 국제결혼 플랫폼을 선보이며, 이 흐름을 선도하고 있습니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">시장 패러다임의 전환</h3>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">과거 국제결혼은 중개업체 중심의 제한된 정보 제공에 머물렀지만, 앞으로는 AI와 디지털 플랫폼이 중심이 됩니다.</p>
      
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-red-50 p-6 rounded-lg">
          <h4 class="text-lg font-semibold text-red-900 mb-3">기존 방식의 한계</h4>
          <ul class="list-disc list-inside space-y-2 text-gray-700 text-sm">
            <li>중개업체 중심의 제한적 정보 제공</li>
            <li>언어와 문화 장벽으로 인한 소통 어려움</li>
            <li>결혼 후 지속적 지원 부재</li>
            <li>투명성과 신뢰성 부족</li>
          </ul>
        </div>
        
        <div class="bg-green-50 p-6 rounded-lg">
          <h4 class="text-lg font-semibold text-green-900 mb-3">새로운 AI 기반 방식</h4>
          <ul class="list-disc list-inside space-y-2 text-gray-700 text-sm">
            <li>AI와 디지털 플랫폼 중심</li>
            <li>실시간 번역과 문화 교육 지원</li>
            <li>결혼 전후 통합 생태계 제공</li>
            <li>투명하고 신뢰할 수 있는 정보 공유</li>
          </ul>
        </div>
      </div>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">드림에이아이랩 플랫폼의 핵심 기능</h3>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">드림에이아이랩이 개발한 플랫폼은 결혼을 희망하는 이들이 안전하고 효과적으로 소통할 수 있도록 지원합니다.</p>
      
      <div class="space-y-6 mb-8">
        <div class="bg-blue-50 p-6 rounded-lg">
          <h4 class="text-lg font-semibold text-blue-900 mb-3">🔍 안전한 상대방 정보 확인</h4>
          <p class="text-gray-700">AI 기반 신원 검증과 프로필 분석을 통해 신뢰할 수 있는 상대방 정보를 제공합니다. 과거의 가짜 프로필이나 부정확한 정보 문제를 해결합니다.</p>
        </div>
        
        <div class="bg-purple-50 p-6 rounded-lg">
          <h4 class="text-lg font-semibold text-purple-900 mb-3">🗣️ AI 번역으로 자유로운 대화</h4>
          <p class="text-gray-700">실시간 다국어 번역 서비스를 통해 언어 장벽 없이 자연스러운 소통이 가능합니다. 문화적 맥락까지 고려한 정확한 번역을 제공합니다.</p>
        </div>
        
        <div class="bg-yellow-50 p-6 rounded-lg">
          <h4 class="text-lg font-semibold text-yellow-900 mb-3">📚 국가별 문화·생활 정보 습득</h4>
          <p class="text-gray-700">개인별 맞춤형 문화 교육 프로그램을 통해 상대방 국가의 문화, 생활습관, 법률 등을 쉽게 학습할 수 있습니다.</p>
        </div>
      </div>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">결혼 후 생태계 제공</h3>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">더 나아가 결혼 후에도 커뮤니티를 통해 같은 국가 출신 배우자들 간의 소모임이 가능하고, 육아·가정 문제를 공유할 수 있어 결혼 이후 삶까지 이어지는 생태계를 제공합니다.</p>
      
      <div class="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg mb-8">
        <h4 class="text-lg font-semibold text-gray-800 mb-3">결혼 후 지원 서비스</h4>
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h5 class="font-semibold text-gray-700 mb-2">커뮤니티 기능</h5>
            <ul class="list-disc list-inside space-y-1 text-gray-600 text-sm">
              <li>같은 국가 출신 배우자들 간의 소모임</li>
              <li>지역별 모임 및 이벤트 정보</li>
              <li>경험 공유 및 조언 제공</li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-gray-700 mb-2">생활 지원</h5>
            <ul class="list-disc list-inside space-y-1 text-gray-600 text-sm">
              <li>육아 및 가정 문제 상담</li>
              <li>법적 절차 및 서류 지원</li>
              <li>자녀 교육 정보 제공</li>
            </ul>
          </div>
        </div>
      </div>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">시장에 가져올 변화</h3>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">이 플랫폼이 시장에 가져올 변화는 분명합니다.</p>
      
      <div class="grid md:grid-cols-3 gap-6 mb-8">
        <div class="bg-blue-50 p-6 rounded-lg">
          <h4 class="text-lg font-semibold text-blue-900 mb-3">개인적 변화</h4>
          <ul class="list-disc list-inside space-y-2 text-gray-700 text-sm">
            <li>정보의 투명성 확보</li>
            <li>맞춤형 지원 서비스</li>
            <li>언어와 문화 장벽 해소</li>
            <li>안전하고 신뢰할 수 있는 매칭</li>
          </ul>
        </div>
        
        <div class="bg-green-50 p-6 rounded-lg">
          <h4 class="text-lg font-semibold text-green-900 mb-3">사회적 변화</h4>
          <ul class="list-disc list-inside space-y-2 text-gray-700 text-sm">
            <li>건강한 가정 형성</li>
            <li>이주 여성의 정착 안정</li>
            <li>문화적 다양성 증진</li>
            <li>사회 통합 촉진</li>
          </ul>
        </div>
        
        <div class="bg-purple-50 p-6 rounded-lg">
          <h4 class="text-lg font-semibold text-purple-900 mb-3">산업적 변화</h4>
          <ul class="list-disc list-inside space-y-2 text-gray-700 text-sm">
            <li>국제결혼 시장의 디지털 전환</li>
            <li>AI 기술 도입 확산</li>
            <li>플랫폼 비즈니스 모델 확장</li>
            <li>글로벌 시장 진출 기회</li>
          </ul>
        </div>
      </div>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">미래 전망</h3>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">앞으로 국제결혼은 단순히 개인의 선택을 넘어, AI와 플랫폼 비즈니스가 이끄는 새로운 글로벌 가족 모델이 될 전망입니다.</p>
      
      <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8">
        <h4 class="text-lg font-semibold text-gray-800 mb-3">글로벌 시장 트렌드</h4>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>AI 기반 매칭 시스템:</strong> 개인별 특성과 선호도를 분석한 정확한 매칭</li>
          <li><strong>실시간 다국어 지원:</strong> 언어 장벽 없는 글로벌 소통</li>
          <li><strong>문화 교육 플랫폼:</strong> 체계적인 문화 적응 지원</li>
          <li><strong>통합 생태계:</strong> 결혼 전후를 아우르는 종합 서비스</li>
        </ul>
      </div>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">드림에이아이랩의 전략</h3>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">드림에이아이랩은 이 흐름을 국내 최초로 만들어가며, 글로벌 시장 진출까지 내다보고 있습니다.</p>
      
      <div class="bg-yellow-50 p-6 rounded-lg mb-8">
        <h4 class="text-lg font-semibold text-yellow-900 mb-3">핵심 전략</h4>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>기술 혁신:</strong> AI와 머신러닝을 활용한 차별화된 서비스</li>
          <li><strong>사용자 경험:</strong> 직관적이고 사용하기 쉬운 플랫폼 설계</li>
          <li><strong>생태계 구축:</strong> 결혼 전후를 아우르는 통합 서비스</li>
          <li><strong>글로벌 확장:</strong> 다양한 국가와 문화를 아우르는 범용성</li>
        </ul>
      </div>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">결론</h3>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">국제결혼 시장의 디지털 전환은 이미 시작되었습니다. 드림에이아이랩의 AI 기반 플랫폼은 이 변화의 선도자로서, 개인과 사회, 산업에 모두 긍정적인 영향을 미칠 것으로 기대됩니다.</p>
      
      <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
        <p class="text-lg text-gray-700 leading-relaxed font-semibold text-center">"AI와 플랫폼이 만나 국제결혼의 새로운 패러다임을 만들어갑니다. 드림에이아이랩이 그 변화의 중심에 서 있습니다."</p>
      </div>
    `,
    category: 'insight',
    date: '2025-07-15',
    image: '🌍',
    featured: false,
    author: '드림에이아이랩',
    tags: ['국제결혼', 'AI플랫폼', '시장분석', '디지털전환', '글로벌가족', '플랫폼비즈니스']
  },
  {
    id: 56,
    title: '국내 최초 AI 기반 국제결혼 플랫폼, 드림에이아이랩이 출시',
    excerpt: '사회문제 해결과 글로벌커플케어 지원을 위한 혁신적 시도로, AI 실시간 번역과 문화 교육을 통합한 국제결혼 플랫폼을 선보였습니다.',
    content: `
      <h2 class="text-3xl font-bold text-gray-900 mb-6">국내 최초 AI 기반 국제결혼 플랫폼, 드림에이아이랩이 출시</h2>
      <p class="text-lg text-gray-600 mb-8">사회문제 해결과 글로벌커플케어 지원을 위한 혁신적 시도</p>
      
      <div class="bg-blue-50 p-6 rounded-lg mb-8">
        <p class="text-lg text-gray-700 font-semibold">서울 – 2025년 9월</p>
        <p class="text-lg text-gray-700">인공지능 전문 기업 <strong>드림에이아이랩(Dream AI Lab)</strong>은 국내 최초로 AI 기반 국제결혼 플랫폼을 선보였다고 밝혔다.</p>
      </div>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">이번 플랫폼은 단순한 결혼 정보 제공을 넘어, 사회적 문제 해결과 글로벌 가족 지원을 동시에 목표로 합니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">해결하고자 하는 사회문제</h3>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">국내 농촌 및 일부 지역사회가 겪고 있는 결혼난과 인구 문제, 국제결혼 가정의 문화·언어 장벽으로 인한 갈등은 오랫동안 풀리지 않은 과제였습니다.</p>
      
      <div class="bg-red-50 p-6 rounded-lg mb-8">
        <h4 class="text-lg font-semibold text-red-900 mb-3">주요 사회문제</h4>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li>농촌 및 일부 지역사회의 결혼난과 인구 감소</li>
          <li>국제결혼 가정의 문화·언어 장벽으로 인한 갈등</li>
          <li>결혼 후 지속적인 지원 체계 부재</li>
          <li>결혼 정보의 투명성과 신뢰성 부족</li>
        </ul>
      </div>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">AI 기반 통합 플랫폼 구축</h3>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">드림에이아이랩은 이를 기술로 해결하기 위해 다양한 기능을 통합한 플랫폼을 구축했습니다.</p>
      
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-blue-50 p-6 rounded-lg">
          <h4 class="text-lg font-semibold text-blue-900 mb-3">AI 실시간 번역 및 상담</h4>
          <ul class="list-disc list-inside space-y-2 text-gray-700 text-sm">
            <li>24시간 실시간 다국어 번역 서비스</li>
            <li>문화적 맥락을 고려한 정확한 번역</li>
            <li>AI 기반 상담 및 조언 제공</li>
          </ul>
        </div>
        
        <div class="bg-green-50 p-6 rounded-lg">
          <h4 class="text-lg font-semibold text-green-900 mb-3">국가별 맞춤 문화·언어 교육</h4>
          <ul class="list-disc list-inside space-y-2 text-gray-700 text-sm">
            <li>개인별 맞춤형 문화 교육 프로그램</li>
            <li>언어 학습 지원 시스템</li>
            <li>실생활 중심 교육 콘텐츠</li>
          </ul>
        </div>
        
        <div class="bg-purple-50 p-6 rounded-lg">
          <h4 class="text-lg font-semibold text-purple-900 mb-3">결혼 후 커뮤니티 소통 기능</h4>
          <ul class="list-disc list-inside space-y-2 text-gray-700 text-sm">
            <li>같은 국가 출신 배우자들 간의 소모임</li>
            <li>지역별 모임 및 이벤트 정보</li>
            <li>경험 공유 및 조언 제공</li>
          </ul>
        </div>
        
        <div class="bg-yellow-50 p-6 rounded-lg">
          <h4 class="text-lg font-semibold text-yellow-900 mb-3">가정·육아·생활 지원 서비스</h4>
          <ul class="list-disc list-inside space-y-2 text-gray-700 text-sm">
            <li>육아 및 가정 문제 상담</li>
            <li>법적 절차 및 서류 지원</li>
            <li>자녀 교육 정보 제공</li>
          </ul>
        </div>
      </div>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">회사 관계자 인터뷰</h3>
      
      <div class="bg-gray-50 p-6 rounded-lg mb-8">
        <blockquote class="text-lg text-gray-700 italic leading-relaxed">
          "국제결혼은 개인적 선택이면서도 사회 전반의 구조적 문제와 연결됩니다. AI를 통해 언어와 문화의 벽을 낮추고, 건강한 가정과 사회를 만드는 데 기여할 것입니다."
        </blockquote>
        <p class="text-sm text-gray-600 mt-4">- 드림에이아이랩 관계자</p>
      </div>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">기존 방식과의 차별화</h3>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">이번 플랫폼은 결혼 전 단계부터 결혼 후 안정적인 생활까지 전 과정을 지원하는 AI 생태계라는 점에서 기존 국제결혼 중개 방식과 차별화됩니다.</p>
      
      <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8">
        <h4 class="text-lg font-semibold text-gray-800 mb-3">주요 차별화 요소</h4>
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h5 class="font-semibold text-gray-700 mb-2">기존 방식</h5>
            <ul class="list-disc list-inside space-y-1 text-gray-600 text-sm">
              <li>중개업체 중심의 제한적 서비스</li>
              <li>결혼 정보 제공에만 집중</li>
              <li>언어와 문화 장벽 해결 부재</li>
              <li>결혼 후 지원 체계 부족</li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-gray-700 mb-2">드림에이아이랩 플랫폼</h5>
            <ul class="list-disc list-inside space-y-1 text-gray-600 text-sm">
              <li>AI 기반 통합 생태계</li>
              <li>결혼 전후 전 과정 지원</li>
              <li>실시간 번역과 문화 교육</li>
              <li>지속적인 커뮤니티 지원</li>
            </ul>
          </div>
        </div>
      </div>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">업계 전문가 전망</h3>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">업계 전문가들은 이 서비스가 국내 국제결혼 시장의 디지털 전환을 가속화하고, 나아가 글로벌 시장 진출 모델로 자리 잡을 것으로 전망하고 있습니다.</p>
      
      <div class="bg-green-50 p-6 rounded-lg mb-8">
        <h4 class="text-lg font-semibold text-green-900 mb-3">기대 효과</h4>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li>국제결혼 시장의 디지털 전환 가속화</li>
          <li>글로벌 시장 진출 모델 구축</li>
          <li>사회문제 해결을 통한 사회적 가치 창출</li>
          <li>AI 기술의 사회적 활용 확산</li>
        </ul>
      </div>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">서비스 출시 및 향후 계획</h3>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">드림에이아이랩은 2025년 9월부터 베타 서비스를 시작하고, 사용자 피드백을 바탕으로 서비스를 개선한 후 정식 출시를 계획하고 있습니다.</p>
      
      <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
        <h4 class="text-lg font-semibold text-gray-800 mb-3">향후 계획</h4>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>2025년 9월:</strong> 베타 서비스 시작</li>
          <li><strong>2025년 12월:</strong> 정식 서비스 출시</li>
          <li><strong>2026년:</strong> 글로벌 시장 진출</li>
          <li><strong>지속적:</strong> AI 기술 고도화 및 서비스 확장</li>
        </ul>
      </div>
    `,
    category: 'company',
    date: '2025-09-01',
    image: '📰',
    featured: false,
    author: '드림에이아이랩',
    tags: ['국제결혼', 'AI플랫폼', '보도자료', '사회문제해결', '글로벌커플케어', '디지털전환']
  },
  {
    id: 43,
    title: 'AI와 디지털케어로그가 바꾸는 \'병원 이전\'의 여정',
    excerpt: '환자는 더 이상 아파야 병원에 가지 않습니다. AI가 먼저 환자의 이야기를 듣고, 데이터를 분석해 필요한 경우에만 병원을 안내하는 의료 패러다임의 전환을 살펴봅니다.',
    content: `
      <h2 class="text-3xl font-bold text-gray-900 mb-6">AI와 디지털케어로그가 바꾸는 '병원 이전'의 여정</h2>
      <p class="text-lg text-gray-600 mb-8">환자는 더 이상 아파야 병원에 가지 않습니다. 이제, AI가 먼저 환자의 이야기를 듣고, 데이터를 분석해 필요한 경우에만 병원을 안내합니다.</p>
      
      <div class="bg-blue-50 p-6 rounded-lg mb-8">
        <h3 class="text-2xl font-bold text-blue-900 mb-4">🔬 왜 우리는 '의료의 패러다임'을 바꾸려 하는가?</h3>
        <p class="text-lg text-gray-700 mb-4">기존 의료 시스템은 "환자가 먼저 움직이고 병원이 판단하는" 구조였습니다.</p>
        <p class="text-lg text-gray-700 mb-4">그러나 디지털케어로그와 AI의 결합은 이 흐름을 정반대로 전환합니다.</p>
        
        <div class="grid md:grid-cols-3 gap-4 mt-6">
          <div class="bg-white p-4 rounded-lg">
            <h4 class="font-semibold text-gray-800 mb-2">환자 중심</h4>
            <p class="text-sm text-gray-600 mb-2">→</p>
            <h4 class="font-semibold text-blue-600">AI 중심의 예측형 진료</h4>
          </div>
          <div class="bg-white p-4 rounded-lg">
            <h4 class="font-semibold text-gray-800 mb-2">광고 중심 병원 선택</h4>
            <p class="text-sm text-gray-600 mb-2">→</p>
            <h4 class="font-semibold text-blue-600">데이터 기반 병원 매칭</h4>
          </div>
          <div class="bg-white p-4 rounded-lg">
            <h4 class="font-semibold text-gray-800 mb-2">일회성 진료</h4>
            <p class="text-sm text-gray-600 mb-2">→</p>
            <h4 class="font-semibold text-blue-600">지속적 건강 관리</h4>
          </div>
        </div>
      </div>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">🧠 드림에이아이랩의 접근 방식</h3>
      
      <div class="grid md:grid-cols-3 gap-6 mb-8">
        <div class="bg-green-50 p-6 rounded-lg">
          <h4 class="text-lg font-semibold text-green-900 mb-3">히포크라테스AI</h4>
          <p class="text-gray-700 mb-3">증상 분석</p>
          <p class="text-sm text-gray-600 mb-2">→</p>
          <p class="text-gray-700">내과/이비인후과 병원 추천</p>
        </div>
        
        <div class="bg-yellow-50 p-6 rounded-lg">
          <h4 class="text-lg font-semibold text-yellow-900 mb-3">한방이AI</h4>
          <p class="text-gray-700 mb-3">체질 기반</p>
          <p class="text-sm text-gray-600 mb-2">→</p>
          <p class="text-gray-700">한의원 추천</p>
        </div>
        
        <div class="bg-red-50 p-6 rounded-lg">
          <h4 class="text-lg font-semibold text-red-900 mb-3">항암이AI</h4>
          <p class="text-gray-700 mb-3">정서 + 통증 + 식단 + 스케줄</p>
          <p class="text-sm text-gray-600 mb-2">→</p>
          <p class="text-gray-700">항암병원 자동 연동</p>
        </div>
      </div>
      
      <div class="bg-purple-50 p-6 rounded-lg mb-8">
        <p class="text-lg text-gray-700 leading-relaxed">모든 챗봇은 사용자의 대화 데이터를 디지털케어로그에 저장하며, 병원에 도착하기 전에 이미 사용자의 상태를 정리한 AI 리포트를 생성합니다.</p>
      </div>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">🧩 기술의 핵심: 디지털케어로그</h3>
      
      <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8">
        <h4 class="text-lg font-semibold text-gray-800 mb-4">데이터 수집 및 분석</h4>
        <ul class="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>사용자 대화, 증상, 상태 변화, 복약 이력 → 자동 저장</li>
          <li>AI가 이를 시간순, 위험도순, 유형별로 분석</li>
          <li>병원은 단순 상담이 아닌, 사전 진단 보고서를 가지고 진료 시작</li>
        </ul>
      </div>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">기존 vs 새로운 의료 시스템</h3>
      
      <div class="grid md:grid-cols-2 gap-8 mb-8">
        <div class="bg-red-50 p-6 rounded-lg">
          <h4 class="text-lg font-semibold text-red-900 mb-4">기존 병원 광고 시장</h4>
          <ul class="list-disc list-inside space-y-2 text-gray-700 text-sm">
            <li>네이버/카카오 광고비 → 노출 경쟁</li>
            <li>환자 스스로 검색</li>
            <li>단건 수익</li>
            <li>일회성 진료 중심</li>
          </ul>
        </div>
        
        <div class="bg-green-50 p-6 rounded-lg">
          <h4 class="text-lg font-semibold text-green-900 mb-4">드림에이아이랩 헬스케어</h4>
          <ul class="list-disc list-inside space-y-2 text-gray-700 text-sm">
            <li>AI 챗봇이 '정확한 타겟 사용자'만 병원 연결</li>
            <li>AI가 증상 기반 병원 추천</li>
            <li>지속적인 리텐션 수익 구조 (구독 + 재방문)</li>
            <li>예측형 진료 및 지속적 케어</li>
          </ul>
        </div>
      </div>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">의료의 미래: 예측형 진료</h3>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">디지털케어로그와 AI의 결합은 단순한 의료 서비스의 디지털화를 넘어, 의료 시스템 자체의 패러다임을 바꾸고 있습니다. 환자가 아프기 전에 예방하고, 아픈 후에는 지속적으로 관리하는 새로운 의료 생태계를 구축하고 있습니다.</p>
      
      <div class="bg-blue-50 p-6 rounded-lg">
        <h4 class="text-lg font-semibold text-blue-900 mb-3">핵심 가치</h4>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>예측형 진료:</strong> AI가 증상을 분석해 필요한 경우에만 병원 안내</li>
          <li><strong>데이터 기반 매칭:</strong> 사용자 상태와 병원 전문성을 정확히 매칭</li>
          <li><strong>지속적 케어:</strong> 일회성 진료를 넘어 지속적인 건강 관리</li>
          <li><strong>효율성 증대:</strong> 의료진은 사전 분석된 데이터로 더 정확한 진료</li>
        </ul>
      </div>
    `,
    category: 'tech',
    date: '2025-09-15',
    image: '🏥',
    featured: false,
    author: '드림에이아이랩',
    tags: ['AI헬스케어', '디지털케어로그', '의료패러다임', '예측형진료', '헬스케어플랫폼', '의료혁신']
  },
  {
    id: 57,
    title: '드림에이아이랩, 헬스케어 AI 플랫폼 출시 – 디지털케어로그로 의료의 미래를 연다',
    excerpt: '히포크라테스AI, 한방이AI, 항암이AI로 구성된 AI 헬스케어 플랫폼을 정식 런칭하여 증상 기반 상담부터 병원·약국 매칭까지 완전 자동화된 건강 상담 경험을 제공합니다.',
    content: `
      <h2 class="text-3xl font-bold text-gray-900 mb-6">🎉 [회사 소식] 드림에이아이랩, 헬스케어 AI 플랫폼 출시</h2>
      <p class="text-lg text-gray-600 mb-8">디지털케어로그로 의료의 미래를 연다</p>
      
      <div class="bg-blue-50 p-6 rounded-lg mb-8">
        <p class="text-lg text-gray-700 font-semibold">드림에이아이랩은 '히포크라테스AI', '한방이AI', '항암이AI'로 구성된 AI 헬스케어 플랫폼을 정식 런칭했습니다.</p>
      </div>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">이 플랫폼은 증상 기반 상담 → 건강 분석 → 병원·약국 매칭까지 완전 자동화된 건강 상담 경험을 제공합니다.</p>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">🧠 핵심 기술: 디지털케어로그</h3>
      
      <div class="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg mb-8">
        <p class="text-lg text-gray-700 mb-4">사용자가 AI와 나눈 대화, 입력한 증상, 응답 내역을 기반으로</p>
        <p class="text-lg text-gray-700 mb-4">병원 도착 전 'AI 리포트'를 생성하여 의료 현장에 연동합니다.</p>
      </div>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">AI 헬스케어 플랫폼 구성</h3>
      
      <div class="grid md:grid-cols-3 gap-6 mb-8">
        <div class="bg-green-50 p-6 rounded-lg">
          <h4 class="text-xl font-semibold text-green-900 mb-3">히포크라테스AI</h4>
          <p class="text-gray-700 mb-3">일반 의료 상담</p>
          <ul class="list-disc list-inside space-y-1 text-gray-600 text-sm">
            <li>증상 분석 및 진료과 추천</li>
            <li>응급상황 판단</li>
            <li>내과/이비인후과 병원 매칭</li>
          </ul>
        </div>
        
        <div class="bg-yellow-50 p-6 rounded-lg">
          <h4 class="text-xl font-semibold text-yellow-900 mb-3">한방이AI</h4>
          <p class="text-gray-700 mb-3">한의학 기반 상담</p>
          <ul class="list-disc list-inside space-y-1 text-gray-600 text-sm">
            <li>체질 분석 및 진단</li>
            <li>한약 처방 추천</li>
            <li>한의원 매칭</li>
          </ul>
        </div>
        
        <div class="bg-red-50 p-6 rounded-lg">
          <h4 class="text-xl font-semibold text-red-900 mb-3">항암이AI</h4>
          <p class="text-gray-700 mb-3">암환자 특화 케어</p>
          <ul class="list-disc list-inside space-y-1 text-gray-600 text-sm">
            <li>감정 지원 및 상담</li>
            <li>복약 리마인더</li>
            <li>영양식 추천</li>
            <li>병원 예약 자동화</li>
          </ul>
        </div>
      </div>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">특별한 기능: 항암이AI</h3>
      
      <div class="bg-red-50 p-6 rounded-lg mb-8">
        <p class="text-lg text-gray-700 mb-4">특히 항암이AI는 암환자와 가족에게 감정 지원, 복약 리마인더, 영양식 추천, 병원 예약을 일괄 지원하며,</p>
        <p class="text-lg text-gray-700">향후 고위험군 질병군(심혈관, 당뇨, 정신건강 등)으로 확장 예정입니다.</p>
      </div>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">플랫폼의 혁신적 특징</h3>
      
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-blue-50 p-6 rounded-lg">
          <h4 class="text-lg font-semibold text-blue-900 mb-3">완전 자동화된 워크플로우</h4>
          <ul class="list-disc list-inside space-y-2 text-gray-700 text-sm">
            <li>증상 입력 → AI 분석</li>
            <li>건강 상태 평가</li>
            <li>적합한 병원/약국 추천</li>
            <li>예약 및 연동</li>
          </ul>
        </div>
        
        <div class="bg-green-50 p-6 rounded-lg">
          <h4 class="text-lg font-semibold text-green-900 mb-3">디지털케어로그 연동</h4>
          <ul class="list-disc list-inside space-y-2 text-gray-700 text-sm">
            <li>대화 기록 자동 저장</li>
            <li>증상 변화 추적</li>
            <li>AI 리포트 생성</li>
            <li>의료진과 정보 공유</li>
          </ul>
        </div>
      </div>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">향후 확장 계획</h3>
      
      <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
        <h4 class="text-lg font-semibold text-gray-800 mb-3">고위험군 질병군 확장</h4>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="bg-white p-4 rounded-lg">
            <h5 class="font-semibold text-gray-700 mb-2">심혈관 질환</h5>
            <p class="text-sm text-gray-600">심장병, 고혈압 등</p>
          </div>
          <div class="bg-white p-4 rounded-lg">
            <h5 class="font-semibold text-gray-700 mb-2">당뇨 관리</h5>
            <p class="text-sm text-gray-600">혈당 관리, 식단 조절</p>
          </div>
          <div class="bg-white p-4 rounded-lg">
            <h5 class="font-semibold text-gray-700 mb-2">정신건강</h5>
            <p class="text-sm text-gray-600">우울증, 불안장애 등</p>
          </div>
        </div>
      </div>
    `,
    category: 'company',
    date: '2025-09-20',
    image: '🏥',
    featured: false,
    author: '드림에이아이랩',
    tags: ['헬스케어AI', '디지털케어로그', '히포크라테스AI', '한방이AI', '항암이AI', '의료플랫폼']
  },
  {
    id: 44,
    title: '드림에이아이랩, AI디지털케어로그 헬스케어 플랫폼 런칭… "병원 영업 시장, 패러다임 전환"',
    excerpt: 'AI가 건강을 먼저 관리하고, 병원은 환자를 선택하는 시대가 온다. 의료·한방·항암 헬스케어에 특화된 AI 챗봇 기반 플랫폼을 공식 출시하며 예측형 진료 생태계를 구축합니다.',
    content: `
      <h2 class="text-3xl font-bold text-gray-900 mb-6">[보도자료] 드림에이아이랩, AI 기반 디지털케어로그 헬스케어 플랫폼 런칭</h2>
      <p class="text-lg text-gray-600 mb-8">"병원 영업 시장, 패러다임 전환"</p>
      
      <div class="bg-blue-50 p-6 rounded-lg mb-8">
        <p class="text-xl text-gray-700 font-semibold mb-4">AI가 건강을 먼저 관리하고, 병원은 환자를 선택하는 시대가 온다.</p>
        <p class="text-lg text-gray-700">인공지능 전문 기업 드림에이아이랩은 의료·한방·항암 헬스케어에 특화된 AI 챗봇 기반 플랫폼을 공식 출시하며, 'AI 디지털케어로그'를 중심으로 한 예측형 진료 생태계를 구축한다고 밝혔다.</p>
      </div>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">플랫폼 구조</h3>
      
      <div class="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg mb-8">
        <h4 class="text-lg font-semibold text-gray-800 mb-4">3단계 자동화 프로세스</h4>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white p-4 rounded-lg">
            <h5 class="font-semibold text-gray-700 mb-2">1단계</h5>
            <p class="text-sm text-gray-600">AI 챗봇 상담</p>
            <p class="text-sm text-gray-600">→ 증상 분석 및 리포트 생성</p>
          </div>
          <div class="bg-white p-4 rounded-lg">
            <h5 class="font-semibold text-gray-700 mb-2">2단계</h5>
            <p class="text-sm text-gray-600">사용자 위치 및 이력 기반</p>
            <p class="text-sm text-gray-600">→ 병원/약국 자동 매칭</p>
          </div>
          <div class="bg-white p-4 rounded-lg">
            <h5 class="font-semibold text-gray-700 mb-2">3단계</h5>
            <p class="text-sm text-gray-600">고도화된 리마인더</p>
            <p class="text-sm text-gray-600">→ 복약, 식단, 정서적 케어까지 포함</p>
          </div>
        </div>
      </div>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">기존 vs 새로운 의료 마케팅</h3>
      
      <div class="grid md:grid-cols-2 gap-8 mb-8">
        <div class="bg-red-50 p-6 rounded-lg">
          <h4 class="text-lg font-semibold text-red-900 mb-4">기존 의료 광고 시장</h4>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li>네이버 키워드와 지역 마케팅 중심</li>
            <li>환자가 직접 병원을 검색하고 선택</li>
            <li>광고비 경쟁을 통한 노출 확보</li>
            <li>일회성 진료 중심의 수익 구조</li>
          </ul>
        </div>
        
        <div class="bg-green-50 p-6 rounded-lg">
          <h4 class="text-lg font-semibold text-green-900 mb-4">드림에이아이랩의 새로운 모델</h4>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li>AI가 직접 병원을 추천</li>
            <li>데이터로 사용자를 보내는 구조</li>
            <li>병원 입점비, 전환 수수료 등 새로운 수익 모델</li>
            <li>지속적 케어를 통한 리텐션 수익</li>
          </ul>
        </div>
      </div>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">새로운 수익 모델</h3>
      
      <div class="bg-purple-50 p-6 rounded-lg mb-8">
        <h4 class="text-lg font-semibold text-purple-900 mb-3">혁신적 수익 구조</h4>
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h5 class="font-semibold text-gray-700 mb-2">기존 모델</h5>
            <ul class="list-disc list-inside space-y-1 text-gray-600 text-sm">
              <li>네이버/카카오 광고비</li>
              <li>지역 마케팅 비용</li>
              <li>단건 진료 수익</li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-gray-700 mb-2">새로운 모델</h5>
            <ul class="list-disc list-inside space-y-1 text-gray-600 text-sm">
              <li>병원 입점비</li>
              <li>전환 수수료</li>
              <li>구독 및 리텐션 수익</li>
            </ul>
          </div>
        </div>
      </div>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">회사 관계자 인터뷰</h3>
      
      <div class="bg-gray-50 p-6 rounded-lg mb-8">
        <blockquote class="text-lg text-gray-700 italic leading-relaxed">
          "우리는 이제 환자가 병원을 선택하는 것이 아니라, AI가 환자를 선별해 병원에 연결하는 시대를 연다. 이는 전통 의료 마케팅의 구조적 변화를 예고하는 혁신이다."
        </blockquote>
        <p class="text-sm text-gray-600 mt-4">- 드림에이아이랩 관계자</p>
      </div>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">예측형 진료 생태계의 의미</h3>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">드림에이아이랩의 AI 디지털케어로그 플랫폼은 단순한 의료 서비스의 디지털화를 넘어, 의료 시스템 자체의 패러다임을 바꾸고 있습니다.</p>
      
      <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8">
        <h4 class="text-lg font-semibold text-gray-800 mb-3">핵심 변화</h4>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>사전 예방:</strong> AI가 증상을 분석해 질병을 예방</li>
          <li><strong>정확한 매칭:</strong> 환자 상태와 병원 전문성을 정확히 연결</li>
          <li><strong>지속적 관리:</strong> 일회성 진료를 넘어 지속적인 건강 케어</li>
          <li><strong>효율성 증대:</strong> 의료진은 사전 분석된 데이터로 더 정확한 진료</li>
        </ul>
      </div>
      
      <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">업계 전망</h3>
      
      <p class="text-lg text-gray-700 mb-6 leading-relaxed">업계 전문가들은 이번 플랫폼 출시가 의료 마케팅 시장의 근본적인 변화를 가져올 것으로 전망하고 있습니다.</p>
      
      <div class="bg-green-50 p-6 rounded-lg">
        <h4 class="text-lg font-semibold text-green-900 mb-3">기대 효과</h4>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li>의료 마케팅의 디지털 전환 가속화</li>
          <li>환자-병원 매칭의 정확성 향상</li>
          <li>의료 서비스의 접근성 개선</li>
          <li>의료비 절감 및 효율성 증대</li>
        </ul>
      </div>
    `,
    category: 'press',
    date: '2025-09-25',
    image: '📰',
    featured: false,
    author: '드림에이아이랩',
    tags: ['헬스케어AI', '디지털케어로그', '보도자료', '의료마케팅', '패러다임전환', '예측형진료']
  }
]

// 카테고리별 기사 수 계산
export const getCategoryCounts = () => {
  const counts: { [key: string]: number } = {}
  
  newsArticles.forEach(article => {
    counts[article.category] = (counts[article.category] || 0) + 1
  })
  
  return counts
}

// 동적으로 카테고리 정보 생성
export const getNewsCategories = () => {
  return getNewsCategoriesForFilter(getCategoryCounts())
}

export const newsCategories = getNewsCategories()

export const getCategoryName = getNewsCategoryName

export const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
} 

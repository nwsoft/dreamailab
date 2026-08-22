import type { Metadata } from 'next'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import CompanyPageHero from '../../../components/CompanyPageHero'
import PageClosingSection from '../../../components/PageClosingSection'
import {
  absoluteUrl,
  buildBreadcrumbJsonLd,
  buildPageMetadata,
  buildWebPageJsonLd,
} from '../../../lib/seo'

const projectName = 'DAL Vibe Architect'
const canonicalPath = '/services/vibe-architect'
const description =
  '프롬프트 작성법이나 개발 도구를 배우지 않아도, 만들고 싶은 것을 말하면 AI가 의도를 이해해 설계·구현·검증·배포·운영까지 연결하는 한국형 AI 소프트웨어 제작 서비스입니다.'

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: `${projectName} | 배울 필요 없는 AI 소프트웨어 제작 서비스`,
    description,
    path: canonicalPath,
    ogTitle: '만들고 싶은 것만 말하세요. 나머지는 AI가 설계합니다',
    ogDescription: '설정과 개발의 복잡성을 사용자에게 넘기지 않고 아이디어를 실제 운영 가능한 소프트웨어로 연결하는 DAL Vibe Architect',
    ogImageAlt: 'DAL Vibe Architect AI 소프트웨어 설계 흐름',
  }),
  alternates: {
    canonical: absoluteUrl(canonicalPath),
    languages: {
      'ko-KR': absoluteUrl(canonicalPath),
      'en-US': absoluteUrl('/en/services/vibe-architect'),
    },
  },
}

const architecture = [
  { step: '01', name: '말하기', desc: '만들고 싶은 것과 해결하려는 문제를 평소 말로 설명', engine: 'Intent AI' },
  { step: '02', name: '필요한 것만 확인', desc: '결과가 달라지는 사업·현장 결정만 한 번에 하나씩 질문', engine: 'Guided Decision' },
  { step: '03', name: '알아서 설계', desc: '화면·역할·데이터·권한·운영 규칙과 예외상황 자동 구성', engine: 'Product & System Architect' },
  { step: '04', name: '미리보기', desc: '코드 대신 실제로 눌러볼 수 있는 서비스 화면과 흐름 제공', engine: 'Build Agents' },
  { step: '05', name: '자동 검증', desc: '보안·개인정보·접근성·오류·변경 영향을 시스템이 검사', engine: 'Architecture Guardian' },
  { step: '06', name: '확인 후 배포', desc: '사용자가 결과를 확인하면 도메인과 운영환경에 안전하게 배포', engine: 'QA & Deploy' },
  { step: '07', name: '운영·개선', desc: '오류·성능·사용 결과를 관찰하고 검증된 수정으로 계속 관리', engine: 'Operations Loop' },
] as const

const noLearningPromises = [
  {
    title: '프롬프트를 배우지 않습니다',
    body: '명령문 공식이나 개발자처럼 질문하는 방법을 익힐 필요가 없습니다. 평소 말로 목적과 현장을 설명하면 됩니다.',
  },
  {
    title: '기술을 선택하지 않습니다',
    body: '프레임워크·DB·API·클라우드·모델을 먼저 고르게 하지 않습니다. 서비스 목적과 운영조건에 맞춰 시스템이 기본안을 만듭니다.',
  },
  {
    title: '설정을 떠안지 않습니다',
    body: '수십 개 옵션과 관리자 설정을 처음부터 노출하지 않습니다. 꼭 필요한 외부 계약·본인 확인·승인만 이유와 함께 요청합니다.',
  },
  {
    title: '완료 여부를 판단하지 않습니다',
    body: 'AI의 “완료했습니다”를 믿으라고 하지 않습니다. 빌드·테스트·보안·접근성·회귀검증 결과로 완료 여부를 보여줍니다.',
  },
] as const

const hiddenByDefault = [
  ['기술 스택', '서비스 특성·비용·확장성에 맞춰 구성'],
  ['데이터 구조', '사용자·업무·보유기간에 맞춰 모델링'],
  ['인증과 권한', '역할별로 볼 수 있는 정보와 행동을 분리'],
  ['보안·개인정보', '최소수집·암호화·동의·감사·삭제 기준 반영'],
  ['테스트·복구', '정상·실패·예외·회귀 시나리오와 되돌리기 준비'],
  ['배포·관측', '환경 분리·도메인·로그·알림·백업·상태 확인'],
] as const

const serviceCapabilities = [
  {
    title: '아이디어 대화',
    body: '사용자의 말에서 목적·대상·업무·성공 기준을 이해하고, 모호한 부분만 쉬운 선택 질문으로 확인합니다.',
  },
  {
    title: '제품 자동설계',
    body: '사용자 역할, 화면, 업무 흐름, 운영자 기능, 예외상황과 포함·제외 범위를 읽을 수 있는 설계로 제시합니다.',
  },
  {
    title: '전체 서비스 생성',
    body: '화면만 그리는 데서 끝나지 않고 프론트엔드·서버·DB·API·인증·관리자·외부연동을 하나의 구조로 만듭니다.',
  },
  {
    title: 'Architecture Guardian',
    body: '모든 생성과 변경 전에 영향 범위를 확인하고, 구현 뒤 승인된 설계와 다시 비교해 다른 기능이 깨지는 것을 막습니다.',
  },
  {
    title: '검증된 미리보기',
    body: '빌드·기능·권한·보안·접근성·모바일·회귀검사를 통과한 결과를 실제처럼 눌러보고 승인할 수 있게 합니다.',
  },
  {
    title: '배포와 지속관리',
    body: '배포 이후에도 오류·성능·외부서비스 상태를 관찰하고, 수정 제안·검증·안전 패치·복구까지 같은 흐름에서 관리합니다.',
  },
] as const

const speechCenterQuestions = [
  {
    step: '01',
    topic: '예약 방식',
    question: '센터가 예약 가능한 시간을 먼저 공개할까요, 보호자가 희망 시간을 요청할까요?',
    answer: '치료사별 가능한 시간을 센터가 등록하고, 보호자가 빈 시간을 바로 예약하게 해주세요.',
    translation: '치료사 일정·예약 가능 시간·예약 상태를 분리하고, 같은 시간의 중복 예약을 막는 규칙으로 바꿉니다.',
  },
  {
    step: '02',
    topic: '사용자와 권한',
    question: '보호자·치료사·센터 관리자는 각각 무엇을 보고 바꿀 수 있어야 하나요?',
    answer: '보호자는 자기 아이 예약만, 치료사는 자기 일정만, 원장은 센터 전체 일정과 운영 현황을 보게 해주세요.',
    translation: '보호자·치료사·관리자 역할과 화면, 조회 범위, 수정 권한을 RBAC 정책으로 설계합니다.',
  },
  {
    step: '03',
    topic: '개인정보 범위',
    question: '첫 버전에서 치료 기록이나 진단 정보도 저장해야 하나요?',
    answer: '아니요. 먼저 아동 이름·보호자 연락처·예약 정보만 다루고 치료 기록은 제외해 주세요.',
    translation: '최소수집 원칙, 보호자 동의, 보유·삭제 기준을 정의하고 치료·진단 데이터는 MVP 범위 밖으로 고정합니다.',
  },
  {
    step: '04',
    topic: '취소와 현장 운영',
    question: '취소·노쇼·휴진·일정 변경은 어떤 규칙으로 처리할까요?',
    answer: '24시간 전까지 직접 취소하고, 그 이후에는 센터가 승인해 주세요. 휴진과 변경은 보호자에게 알려주세요.',
    translation: '취소 마감시간, 관리자 예외처리, 휴진 차단, 변경 이력과 알림 발송 조건을 운영 규칙으로 만듭니다.',
  },
  {
    step: '05',
    topic: '한국형 접점',
    question: '로그인·알림·결제·관리자 업무는 첫 버전에서 어디까지 필요할까요?',
    answer: '보호자는 휴대전화로 간편하게 확인하고 예약 알림을 받아야 해요. 결제는 제외하고 관리자는 목록을 내려받게 해주세요.',
    translation: '휴대전화 인증, 문자·알림톡 연동 경계, 관리자 내보내기를 포함하고 결제는 후속 버전으로 분리합니다.',
  },
  {
    step: '06',
    topic: '성공 기준과 접근성',
    question: '누구에게 가장 쉬워야 하고, 완성 여부는 무엇으로 판단할까요?',
    answer: '보호자가 모바일에서 2분 안에 예약을 끝내고, 키보드나 스크린리더로도 전 과정을 이용할 수 있어야 해요.',
    translation: '모바일 우선 예약 흐름, 과업 완료시간, 키보드 조작, 초점 이동, 이름·역할·상태와 오류 안내를 검증 기준으로 바꿉니다.',
  },
] as const

const speechCenterBlueprint = [
  ['사용자·권한', '보호자 · 치료사 · 센터 관리자 역할과 데이터 접근 범위'],
  ['핵심 데이터', '센터 · 치료사 · 아동 · 보호자 · 가능시간 · 예약 · 동의 · 알림 · 변경이력'],
  ['주요 화면', '센터 검색 · 치료사/시간 선택 · 예약 확인 · 내 예약 · 치료사 일정 · 관리자 운영'],
  ['운영 규칙', '중복예약 방지 · 취소 마감 · 휴진 · 관리자 예외처리 · 알림 실패 재처리'],
  ['안전·접근성', '최소수집 · 보호자 동의 · 권한검사 · 감사로그 · 키보드/스크린리더 검증'],
  ['이번 버전 제외', '치료·진단 기록 · 온라인 결제 · 의료적 판단은 승인된 MVP 범위에 포함하지 않음'],
] as const

const speechCenterDelivery = [
  ['01', '의도 요약·승인', '대화 결과를 한 장의 제품 요구사항으로 정리합니다. 사용자가 빠진 내용과 잘못 이해한 내용을 먼저 고칩니다.'],
  ['02', '화면·업무 흐름 설계', '보호자 예약, 치료사 일정, 관리자 운영 흐름을 화면 단위로 보여주고 선택을 받습니다.'],
  ['03', '시스템·안전 설계', '데이터 모델, API, 인증·권한, 개인정보, 알림, 백업·복구 구조와 위험을 함께 제시합니다.'],
  ['04', '에이전트 구현', '승인된 설계를 기준으로 UI·서버·DB·연동 코드를 만들고 격리된 미리보기 환경에 올립니다.'],
  ['05', 'Guardian 검증', '중복예약·권한 우회·알림 실패·모바일·접근성·회귀 테스트를 실행하고 실패 항목을 수정합니다.'],
  ['06', '사용자 인수 확인', '실제 업무 시나리오로 센터 운영자가 확인합니다. 중요한 변경과 남은 위험은 사람이 승인합니다.'],
  ['07', '배포·운영 루프', '도메인·운영환경을 연결해 배포하고 상태·오류·백업·복구를 관측하며 실제 결과를 다음 개선에 반영합니다.'],
] as const

const guardianImpacts = [
  '현재 요구사항과 승인된 아키텍처',
  '변경되는 화면·컴포넌트·의존성',
  'DB 스키마·마이그레이션·복구 경로',
  'API·인증·권한·개인정보 영향',
  '접근성·보안·회귀 가능성',
  '변경 후 자동·수동 검증 범위',
] as const

const platformIntelligence = [
  {
    name: 'Architecture Guardian',
    role: '변경 안전성',
    body: '요구사항과 승인된 설계를 기준으로 DB·API·권한·보안·접근성·회귀·복구 영향을 모든 생성과 변경 전후에 추적합니다.',
  },
  {
    name: 'Project Knowledge Graph',
    role: '프로젝트 맥락',
    body: '제품 목적부터 요구사항·구성요소·의존성·의사결정·테스트·오류·배포 이력까지 프로젝트 자체의 관계와 이유를 보존합니다.',
  },
  {
    name: 'Software Engineering Outcome Dataset',
    role: '운영 결과 학습',
    body: '어떤 의도에 어떤 구조를 선택했고 실제 운영에서 무엇이 실패·수정·생존했는지를 권리와 개인정보를 보호하며 학습하는 데이터 기반을 지향합니다.',
  },
] as const

const koreanOperations = [
  {
    title: '한국 사용자 여정',
    body: '한국형 주소·휴대전화 흐름, 카카오·네이버 등 로그인, 문자·알림톡 같은 익숙한 접점을 서비스 성격에 맞게 설계합니다.',
  },
  {
    title: '결제·사업 운영',
    body: '국내 PG, 영수증·정산, 사업자·관리자 업무, 고객지원과 운영 로그를 처음부터 요구사항에 포함합니다.',
  },
  {
    title: '개인정보·동의',
    body: '수집 목적·보유기간·동의·철회·권한·감사로그를 설계 단계에서 다룹니다. 실제 출시 전에는 최신 법령과 전문가 검토를 별도 통과해야 합니다.',
  },
  {
    title: '현장형 템플릿',
    body: '센터·돌봄·교육·소상공인·협회·공공업무처럼 한국 현장의 역할과 문서 흐름을 반영한 산업별 블루프린트를 지향합니다.',
  },
] as const

const inclusionPrinciples = [
  {
    title: '만드는 도구부터 접근 가능하게',
    body: '키보드·스크린리더·음성·확대·스위치 입력을 고려하고, 드래그나 색상에만 의존하지 않는 제작 경험을 설계합니다.',
  },
  {
    title: '쉬운 말과 단계형 의사결정',
    body: '기술용어 대신 사업적 질문을 한 번에 하나씩 제시하고, 선택의 영향과 되돌리기 경로를 쉬운 한국어로 설명합니다.',
  },
  {
    title: '생성 결과도 접근성을 기본값으로',
    body: '시맨틱 구조, 초점 이동, 이름·역할·상태, 대비, 자막·대체텍스트를 빌드·QA 게이트에 포함합니다.',
  },
  {
    title: '당사자와 함께 검증',
    body: '자동 검사만으로 적합성을 선언하지 않습니다. 장애 당사자·보조기술 사용자의 공동설계와 실제 과업 테스트를 베타 전제조건으로 둡니다.',
  },
] as const

const serviceUseCases = [
  ['예약·상담 서비스', '센터·학원·병원·전문가의 일정, 신청, 변경, 취소, 알림과 관리자 운영'],
  ['회원·고객 업무', '가입, 권한, 문의, 문서, 알림, 통계와 반복되는 내부 업무를 하나의 서비스로 연결'],
  ['판매·신청 서비스', '상품·프로그램·행사·입점·결제·정산이 필요한 한국형 운영 흐름'],
  ['돌봄·교육·재활', '기록·동의·보호자 공유·기관 역할처럼 민감하고 복잡한 현장에 맞춘 서비스'],
  ['장애인 창작자·당사자 조직', '보조기술·의사소통·생활지원 아이디어를 당사자의 언어로 직접 구체화'],
  ['공공·비영리·협회', '접근성·개인정보·권한·감사 가능성을 기본으로 갖춘 신청·운영 서비스'],
] as const

const faqs = [
  {
    question: '기존 바이브코딩·AI 코딩 도구와 무엇이 다른가요?',
    answer:
      '기존 도구의 대표적 흐름인 Prompt → Code보다 앞과 뒤를 함께 다룹니다. 비개발자의 의도를 요구사항·아키텍처·보안·테스트·배포·운영·학습으로 연결하는 Software Creation Platform을 목표로 합니다.',
  },
  {
    question: '지금 바로 사용할 수 있나요?',
    answer:
      '현재 공개 가입형 서비스는 준비 중입니다. 우선 비개발자·현장 운영자와 실제 과제를 공동설계하고 제한된 파일럿에서 생성·검증·배포·운영 전 과정을 확인한 뒤 공개 범위를 넓힐 계획입니다.',
  },
  {
    question: '사용하려면 프롬프트나 개발 방법을 배워야 하나요?',
    answer:
      '배우지 않아도 되는 경험이 제품의 출발점입니다. 사용자는 만들고 싶은 것과 현장을 평소 말로 설명하면 됩니다. 기술 선택과 설정은 기본적으로 시스템이 처리하고, 결과가 달라지는 사업적 결정이나 외부 계약·본인 확인·최종 승인만 쉬운 말로 요청합니다.',
  },
  {
    question: '한국형이라는 것은 한국어 UI라는 뜻인가요?',
    answer:
      '한국어는 일부일 뿐입니다. 국내 인증·결제·메시징·개인정보·사업자 운영·관리자 업무와 산업별 현장 흐름을 아키텍처 단계에서 다루는 것을 의미합니다.',
  },
  {
    question: '장애인을 위한 기능도 포함되나요?',
    answer:
      '포함을 핵심 설계축으로 둡니다. 제작 도구 자체의 보조기술 호환, 쉬운 말·단계형 흐름, 생성 결과의 WCAG 기반 점검, 장애 당사자 공동설계를 제품 게이트에 포함할 계획입니다.',
  },
  {
    question: 'AI가 만든 서비스의 안전성을 보장하나요?',
    answer:
      '무조건적인 안전을 약속하지 않습니다. Architecture Guardian, 자동 테스트, 변경 영향 분석, 배포 전 승인, 복구 경로와 분야별 전문가 검토를 통해 위험을 낮추는 구조를 설계합니다.',
  },
  {
    question: '정말 한 줄만 입력하면 서비스가 바로 배포되나요?',
    answer:
      '한 줄은 시작점이지만 사용자가 개발을 배워야 한다는 뜻은 아닙니다. 시스템이 안전한 기본안을 만들고, 서비스 결과가 달라지는 최소한의 질문만 쉬운 선택지로 확인합니다. 미리보기·자동검증·사용자 승인과 필요한 계약·자격·법률 검토를 통과한 뒤 운영 배포로 넘어갑니다.',
  },
] as const

export default function VibeArchitectPage() {
  const pageUrl = absoluteUrl(canonicalPath)
  const schemas = [
    buildWebPageJsonLd({ name: `${projectName} AI 소프트웨어 제작 서비스`, description, url: pageUrl }),
    buildBreadcrumbJsonLd([
      { name: '홈', url: absoluteUrl('/') },
      { name: '서비스', url: absoluteUrl('/services') },
      { name: projectName, url: pageUrl },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      name: projectName,
      alternateName: ['DAL AI Software Architect', 'DAL 바이브 아키텍트'],
      description,
      url: pageUrl,
      serviceType: 'AI software architecture, creation, deployment, and operations service',
      areaServed: { '@type': 'Country', name: '대한민국' },
      provider: { '@id': 'https://dreamailab.com/#organization' },
      audience: [
        { '@type': 'Audience', audienceType: '비개발자·현장 운영자' },
        { '@type': 'Audience', audienceType: '장애인 창작자·당사자 조직' },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
  ]

  return (
    <div className="company-page">
      <Header />
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <main>
        <CompanyPageHero
          eyebrow={`${projectName} · AI Software Creation Service`}
          title={
            <>
              <span className="block sm:inline">배우지 않아도,</span>{' '}
              <span className="block sm:inline">설정하지 않아도</span>
              <span className="block">말하면 서비스가 됩니다</span>
            </>
          }
          description={
            <p>
              프롬프트 작성법, 개발 도구, 데이터베이스, 서버와 배포를 배우지 마세요. 만들고 싶은 것과 해결하려는
              문제를 평소 말로 설명하면 DAL이 의도를 이해해 설계·구현·검증·배포·운영까지 연결합니다.
            </p>
          }
          badges={['프롬프트 학습 없음', '설정 최소화', '검증·배포·운영', '한국형·접근성 우선']}
          status={
            <p>
              현재 <strong>서비스 개발 및 제한 파일럿 준비 단계</strong>입니다. 공개 가입은 아직 열리지 않았으며,
              실제 현장 과제를 함께 검증할 공동설계 파트너를 찾고 있습니다.
            </p>
          }
          actions={[
            { label: '서비스 이용 흐름', href: '#experience' },
            {
              label: '파일럿 참여 문의',
              href: '/contact?service=vibe-architect&type=partnership',
              variant: 'secondary',
            },
          ]}
        />

        <section id="experience" className="scroll-mt-20 bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-primary-700">Zero-learning experience</p>
              <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">AI를 쓰기 위해 AI를 다시 배워야 한다면, 장벽은 사라진 것이 아닙니다</h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                스마트폰 시대의 많은 서비스가 메뉴·인증·설정을 익숙한 사람에게 맞추면서 누군가에게는 새로운 장벽이 되었습니다.
                AI 시대에 프롬프트 공식과 개발 절차를 다시 배우게 해서는 안 됩니다. DAL은 사용법을 가르치는 대신
                <strong className="text-slate-900"> 사용자를 이해하고 복잡성을 시스템 안으로 가져갑니다.</strong>
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {noLearningPromises.map((item) => (
                <article key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <h3 className="text-lg font-black text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.body}</p>
                </article>
              ))}
            </div>

            <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-xl">
              <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
                <div className="p-7 text-white sm:p-9">
                  <p className="text-xs font-black uppercase tracking-widest text-cyan-300">사용자에게 보이는 것은 세 가지뿐</p>
                  <ol className="mt-6 space-y-5">
                    {[
                      ['01', '말하기', '“무엇을 만들고 싶다”고 평소 말로 설명합니다.'],
                      ['02', '확인하기', '실제로 눌러볼 수 있는 결과와 중요한 선택만 확인합니다.'],
                      ['03', '사용하기', '승인된 서비스를 배포하고 운영 상태를 한곳에서 봅니다.'],
                    ].map(([step, title, body]) => (
                      <li key={step} className="flex gap-4">
                        <span className="text-sm font-black text-cyan-300">{step}</span>
                        <div><h3 className="font-black">{title}</h3><p className="mt-1 text-sm leading-relaxed text-slate-300">{body}</p></div>
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="border-t border-slate-700 bg-white p-7 sm:p-9 lg:border-l lg:border-t-0">
                  <p className="text-xs font-black uppercase tracking-widest text-primary-700">나머지는 DAL이 기본으로 처리</p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {hiddenByDefault.map(([title, body]) => (
                      <div key={title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                        <h3 className="font-black text-slate-950">{title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-sm font-bold uppercase tracking-wider text-primary-700">What the service provides</p>
                <h2 className="mt-3 text-3xl font-black text-slate-950">아이디어 입력부터 운영까지 한곳에서</h2>
              </div>
              <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {serviceCapabilities.map((item, index) => (
                  <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <span className="text-xs font-black tracking-widest text-primary-700">{String(index + 1).padStart(2, '0')}</span>
                    <h3 className="mt-3 text-xl font-black text-slate-950">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.body}</p>
                  </article>
                ))}
              </div>
              <div className="mt-8 text-center">
                <a href="#scenario" className="inline-flex rounded-xl bg-primary-700 px-6 py-3 font-bold text-white transition hover:bg-primary-800">
                  언어치료센터 예시로 전체 과정 보기 →
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="scenario" className="scroll-mt-20 border-y border-blue-200 bg-blue-50/60 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-primary-700">One line → Questions → Working service</p>
              <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">한 줄의 아이디어가 실제 서비스가 되는 과정</h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-700">
                아래는 <strong className="text-slate-950">언어치료센터 예약 서비스</strong>를 가정한 설명용 시나리오입니다.
                질문은 개발 지식을 시험하거나 설정을 떠넘기는 절차가 아닙니다. DAL이 안전한 기본안을 먼저 만들고,
                서비스 결과가 달라지는 현장 결정만 쉬운 말로 확인합니다. 사용자는 언제든 “잘 모르겠어요”라고 답하고 추천안을 선택할 수 있습니다.
              </p>
            </div>

            <div className="mt-10 grid overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-xl lg:grid-cols-[1.05fr_0.95fr]">
              <div className="p-7 sm:p-9">
                <p className="text-xs font-black uppercase tracking-widest text-cyan-300">사용자의 첫 입력</p>
                <blockquote className="mt-5 text-2xl font-black leading-relaxed text-white sm:text-3xl">
                  “대전에 있는 언어치료센터 예약 서비스를 만들고 싶어요.”
                </blockquote>
                <p className="mt-5 text-sm leading-relaxed text-slate-300">
                  사용자는 React, DB, API, 인증 같은 기술을 결정하지 않아도 됩니다. 먼저 알고 있는 현장과 사업의 모습을 설명합니다.
                </p>
              </div>
              <div className="border-t border-slate-700 bg-slate-900 p-7 sm:p-9 lg:border-l lg:border-t-0">
                <p className="text-xs font-black uppercase tracking-widest text-emerald-300">DAL의 첫 응답</p>
                <p className="mt-5 text-lg font-bold leading-relaxed text-white">
                  좋습니다. 필요한 기술과 기본 구조는 제가 정할게요. 예약 결과가 달라지는 내용만 한 번씩 여쭤보겠습니다.
                </p>
                <ul className="mt-5 space-y-3 text-sm text-slate-300">
                  <li className="flex gap-3"><span className="font-black text-emerald-300">01</span><span>일반적인 선택은 안전한 추천안으로 먼저 채웁니다.</span></li>
                  <li className="flex gap-3"><span className="font-black text-emerald-300">02</span><span>결과가 달라지는 내용만 현장의 언어로 묻습니다.</span></li>
                  <li className="flex gap-3"><span className="font-black text-emerald-300">03</span><span>모르는 질문은 추천안을 설명하고 대신 결정할 수 있습니다.</span></li>
                </ul>
              </div>
            </div>

            <div className="mt-14">
              <div className="max-w-3xl">
                <p className="text-sm font-bold uppercase tracking-wider text-primary-700">Step 1 · Guided conversation</p>
                <h3 className="mt-2 text-2xl font-black text-slate-950 sm:text-3xl">AI가 묻고, 사용자는 현장의 언어로 답합니다</h3>
                <p className="mt-3 leading-relaxed text-slate-600">각 답변은 화면 문구가 아니라 실제 시스템의 구조와 검증 기준으로 번역됩니다.</p>
              </div>
              <ol className="mt-8 space-y-5">
                {speechCenterQuestions.map((item) => (
                  <li key={item.step} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                    <div className="grid lg:grid-cols-[110px_1fr_1fr]">
                      <div className="border-b border-slate-200 bg-slate-50 p-5 lg:border-b-0 lg:border-r">
                        <span className="text-sm font-black text-primary-700">{item.step}</span>
                        <p className="mt-2 text-sm font-bold text-slate-900">{item.topic}</p>
                      </div>
                      <div className="p-5 sm:p-6">
                        <p className="text-xs font-black uppercase tracking-wider text-primary-700">DAL 질문</p>
                        <p className="mt-2 font-bold leading-relaxed text-slate-950">{item.question}</p>
                        <div className="mt-4 rounded-xl bg-blue-50 p-4">
                          <p className="text-xs font-black text-blue-700">사용자 답변</p>
                          <p className="mt-2 text-sm leading-relaxed text-slate-700">“{item.answer}”</p>
                        </div>
                      </div>
                      <div className="border-t border-slate-200 bg-emerald-50/60 p-5 sm:p-6 lg:border-l lg:border-t-0">
                        <p className="text-xs font-black uppercase tracking-wider text-emerald-700">시스템 내부 번역</p>
                        <p className="mt-3 text-sm leading-relaxed text-slate-700">{item.translation}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-16 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="max-w-3xl">
                <p className="text-sm font-bold uppercase tracking-wider text-indigo-700">Step 2 · Approved blueprint</p>
                <h3 className="mt-2 text-2xl font-black text-slate-950 sm:text-3xl">대화가 끝나면, 만들기 전에 이 설계부터 확인합니다</h3>
                <p className="mt-3 leading-relaxed text-slate-600">
                  AI가 추측한 내용을 숨기지 않습니다. 포함할 범위와 제외할 범위, 권한과 운영 규칙을 사용자가 읽을 수 있는 말로 정리합니다.
                </p>
              </div>
              <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {speechCenterBlueprint.map(([title, body], index) => (
                  <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-xs font-black text-indigo-700">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h4 className="font-black text-slate-950">{title}</h4>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{body}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-relaxed text-amber-950">
                <strong>사용자 승인 지점:</strong> “이 설계로 미리보기를 만들어 주세요”라고 승인하기 전에는 구현 범위를 확정하지 않습니다.
                틀린 가정은 여기서 수정하고, 결제나 치료 기록처럼 보류한 기능은 임의로 추가하지 않습니다.
              </div>
            </div>

            <div className="mt-16">
              <div className="max-w-3xl">
                <p className="text-sm font-bold uppercase tracking-wider text-primary-700">Step 3 · Architecture to deployment</p>
                <h3 className="mt-2 text-2xl font-black text-slate-950 sm:text-3xl">승인된 설계를 구현하고, 검증한 뒤, 운영으로 연결합니다</h3>
              </div>
              <ol className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {speechCenterDelivery.map(([step, title, body], index) => (
                  <li key={step} className={`rounded-2xl border bg-white p-6 shadow-sm ${index === speechCenterDelivery.length - 1 ? 'border-emerald-300 md:col-span-2 xl:col-span-2' : 'border-slate-200'}`}>
                    <span className="text-xs font-black tracking-widest text-primary-700">{step}</span>
                    <h4 className="mt-3 text-lg font-black text-slate-950">{title}</h4>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{body}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              <div className="rounded-2xl border border-primary-200 bg-white p-7">
                <p className="text-xs font-black uppercase tracking-wider text-primary-700">사용자가 보는 결과</p>
                <h3 className="mt-3 text-xl font-black text-slate-950">예약 가능한 실제 서비스</h3>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-700">
                  <li>보호자용 모바일 예약·변경·취소 화면</li>
                  <li>치료사용 일정 확인과 휴진 설정</li>
                  <li>센터 관리자용 예약·사용자·운영 현황</li>
                  <li>접근 가능한 오류 안내와 예약 알림</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-950 p-7 text-white">
                <p className="text-xs font-black uppercase tracking-wider text-cyan-300">시스템이 대신 관리하는 복잡성</p>
                <h3 className="mt-3 text-xl font-black">코드 밖의 운영 기반</h3>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-300">
                  <li>DB·API·인증·권한과 개인정보 처리 경계</li>
                  <li>중복예약·알림실패·예외처리와 감사로그</li>
                  <li>자동 테스트·접근성 검사·보안 점검</li>
                  <li>환경 분리·배포·관측·백업·복구 계획</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-amber-300 bg-amber-50 p-6 text-sm leading-relaxed text-slate-700">
              <strong className="text-slate-950">중요:</strong> 이 사례는 DAL Vibe Architect가 지향하는 사용자 경험을 설명한 설계 시나리오이며,
              현재 사용할 수 있는 공개 빌더의 실행 화면이 아닙니다. 실제 배포에서는 도메인·외부 서비스 계약·자격이 필요한 업무·개인정보와 법률 검토·운영 책임자의 최종 승인을 생략하지 않습니다.
            </div>
          </div>
        </section>

        <section id="architecture" className="border-y border-slate-200 bg-slate-50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-wider text-primary-700">One service, whole lifecycle</p>
              <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">말한 순간부터 운영까지, 한곳에서 끝납니다</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                사용자는 단계마다 새로운 도구를 배우거나 계정을 옮겨 다니지 않습니다. DAL이 필요한 순서를 내부에서 연결하고,
                사용자는 이해할 수 있는 결과를 확인하고 승인합니다.
              </p>
            </div>
            <ol className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {architecture.map((item, index) => (
                <li key={item.name} className={`relative rounded-2xl border bg-white p-6 shadow-sm ${index === architecture.length - 1 ? 'border-secondary-300 xl:col-span-2' : 'border-slate-200'}`}>
                  <span className="text-xs font-black tracking-widest text-primary-700">{item.step}</span>
                  <h3 className="mt-3 text-lg font-bold text-slate-950">{item.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                  <p className="mt-4 text-xs font-semibold text-slate-400">DAL 내부 · {item.engine}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-rose-700">Architecture Guardian</p>
              <h2 className="mt-3 text-3xl font-black text-slate-950">“전화번호 하나 추가해 주세요”라고만 말하면 됩니다</h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                사용자가 스키마·API·개인정보 영향까지 알아야 할 이유는 없습니다. DAL은 요청 뒤에 연결된 데이터 변경, 화면, 권한,
                보안과 테스트 범위를 대신 추적하고 변경 전 확인부터 검증·승인·복구까지 하나의 작업으로 묶습니다.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {guardianImpacts.map((impact, index) => (
                <div key={impact} className="rounded-xl border border-rose-100 bg-rose-50 p-4 text-sm font-semibold leading-relaxed text-slate-800">
                  <span className="mr-2 text-rose-600">{String(index + 1).padStart(2, '0')}</span>{impact}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-primary-700">Service intelligence</p>
              <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">서비스를 지탱하는 세 가지 지능</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-700">
                사용자에게 기술 설정으로 보이지 않지만, 의도를 잃지 않고 안전하게 만들고 운영하기 위해 개발·파일럿에서 우선 검증하는 핵심 기반입니다.
              </p>
            </div>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {platformIntelligence.map((item) => (
                <article key={item.name} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                  <p className="text-xs font-black uppercase tracking-wider text-primary-700">{item.role}</p>
                  <h3 className="mt-3 text-xl font-black text-slate-950">{item.name}</h3>
                  <p className="mt-4 leading-relaxed text-slate-600">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-primary-700">Built for Korea</p>
              <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">한국어 UI가 아니라, 한국에서 바로 운영되는 구조</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-700">사용자가 국내 운영 방식을 따로 조사해 설정하지 않도록, 실제 사업 흐름과 책임을 설계 단계부터 포함합니다.</p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {koreanOperations.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-950">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-primary-700">Disability inclusion by design</p>
                <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">장애인을 위한 별도 옵션이 아니라, 처음부터 포함하는 제작 환경</h2>
                <p className="mt-5 text-lg leading-relaxed text-slate-600">
                  새로운 기술을 배우고 복잡한 화면에 적응하라고 요구하는 것 자체가 또 다른 접근 장벽이 될 수 있습니다.
                  DAL은 제작 도구와 생성 결과 모두에서 쉬운 언어, 보조기술 호환, 최소한의 조작과 실제 당사자 검증을 함께 다룹니다.
                </p>
                <div className="mt-6 space-y-2 text-sm">
                  <a href="https://www.microsoft.com/en-us/research/publication/the-impact-of-generative-ai-coding-assistants-on-developers-who-are-visually-impaired/" target="_blank" rel="noopener noreferrer" className="block font-semibold text-primary-700 underline underline-offset-4">Microsoft Research · 시각장애 개발자와 AI 코딩 도구 연구</a>
                  <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" rel="noopener noreferrer" className="block font-semibold text-primary-700 underline underline-offset-4">W3C · WCAG 2.2 국제 접근성 표준</a>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {inclusionPrinciples.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h3 className="font-bold text-slate-950">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-indigo-700">What you can create</p>
              <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">이런 서비스를 말로 시작할 수 있습니다</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-700">
                개발 용어가 아니라 해결하려는 현장 문제를 들려주세요. 복잡성이 큰 분야일수록 DAL이 대신 설계해야 할 이유가 분명해집니다.
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {serviceUseCases.map(([title, body]) => (
                <article key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <h3 className="text-lg font-black text-slate-950">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{body}</p>
                </article>
              ))}
            </div>

            <div className="mt-14 rounded-3xl bg-slate-950 p-7 text-white sm:p-10">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-cyan-300">Progressive disclosure</p>
                  <h3 className="mt-3 text-2xl font-black sm:text-3xl">기본은 알아서, 필요한 사람에게만 더 보여줍니다</h3>
                  <p className="mt-4 leading-relaxed text-slate-300">
                    초보자에게 전문가 화면을 강요하지 않고, 전문가에게 통제권을 막지도 않습니다. 처음에는 가장 쉬운 흐름으로 시작하고 원하는 경우에만 세부 정보를 엽니다.
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    ['기본 경험', '말하기 · 쉬운 질문 · 미리보기만으로 진행'],
                    ['확인할 때', '결정 요약 · 변경 영향 · 검증 결과를 읽기 쉽게 공개'],
                    ['원할 때만', '코드 · Git · 인프라 · 고급 정책을 선택적으로 개방'],
                  ].map(([title, body]) => (
                    <div key={title} className="rounded-2xl border border-white/15 bg-white/5 p-5">
                      <h4 className="font-black text-white">{title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-slate-300">{body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50 py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-indigo-700">Service availability</p>
              <h2 className="mt-3 text-3xl font-black text-slate-950">공개 전, 실제 현장에서 끝까지 검증합니다</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                기능 목록만 보여주는 데서 멈추지 않고, 한 사람의 아이디어가 실제 배포와 운영까지 이어지는지를 현장 파트너와 확인합니다.
              </p>
            </div>
            <ol className="mt-9 grid gap-4 md:grid-cols-3">
              {[
                ['01', '과제 제안', '만들고 싶은 서비스, 사용 대상, 현재의 불편을 평소 말로 들려주세요.'],
                ['02', '공동설계', 'DAL이 쉬운 질문과 기본안을 제시하고 실제 업무에 맞는 범위를 함께 확인합니다.'],
                ['03', '제한 파일럿', '미리보기·검증·배포·운영 전 과정을 실제 과제로 확인한 뒤 공개 범위를 넓힙니다.'],
              ].map(([step, title, body]) => (
                <li key={step} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <span className="text-xs font-black tracking-widest text-indigo-700">{step}</span>
                  <h3 className="mt-3 text-lg font-black text-slate-950">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{body}</p>
                </li>
              ))}
            </ol>
            <div className="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-7 sm:p-9">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-amber-200 px-3 py-1 text-xs font-bold text-amber-950">SERVICE DEVELOPMENT</span>
                <span className="text-sm font-semibold text-amber-900">공개 가입 준비 중 · 공동설계 및 제한 파일럿 단계</span>
              </div>
              <h3 className="mt-4 text-2xl font-black text-slate-950">이 페이지는 DAL이 만들고 있는 실제 서비스의 범위와 이용 경험을 설명합니다</h3>
              <p className="mt-3 leading-relaxed text-slate-700">
                현재 공개 가입형 빌더, 요금제와 확정 출시일은 준비 중입니다. 공동설계와 제한 파일럿에서는 생성·검증·배포·운영의 전체 흐름을 실제 과제로 검증하고,
                분야별 법률·자격·외부 계약과 최종 운영 승인이 필요한 단계는 생략하지 않습니다.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-black text-slate-950">자주 묻는 질문</h2>
            <div className="mt-9 space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="group rounded-2xl border border-slate-200 bg-white p-6 open:border-cyan-300 open:shadow-sm">
                  <summary className="cursor-pointer list-none pr-6 text-lg font-bold text-slate-950">{faq.question}</summary>
                  <p className="mt-4 leading-relaxed text-slate-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <PageClosingSection
        title="배우지 않고 만들고 싶은 서비스가 있나요?"
        description="아이디어와 현장의 불편을 평소 말로 들려주세요. DAL이 필요한 질문과 설계안을 준비해 공동설계·파일럿 가능성을 함께 확인합니다."
        primary={{ label: '파일럿 참여 문의', href: '/contact?service=vibe-architect&type=partnership' }}
        secondary={[{ label: '서비스 생태계 보기', href: '/services' }]}
      />
      <Footer />
    </div>
  )
}

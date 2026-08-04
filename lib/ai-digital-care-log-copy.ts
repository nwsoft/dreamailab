/**
 * AI디지털케어로그 대외 정의 SSOT.
 *
 * 기술 정의, 대중 설명, 작동 구조, 규제 경계를 서로 섞지 않는다.
 * 메타데이터·JSON-LD·llms.txt·연구자/기술/서비스 페이지는 이 계층을 기준으로 작성한다.
 */

/** 기술·연구·IR·구조화 데이터에 사용하는 정본 정의 */
export const AI_DIGITAL_CARE_LOG_CANONICAL_KO =
  'AI디지털케어로그는 일상생활과 행동·습관부터 돌봄·교육·의료·금융·재테크·소비·업무에 이르기까지 인간의 삶에서 발생하는 다양한 기록을 개인과 상황 중심의 시간축으로 연결하는 범용 AI 데이터·판단·학습 환류 아키텍처입니다. 축적된 맥락을 AI 판단 레이어가 분석하고, XAI로 판단 근거를 설명하며, 적합한 판단·권고·실행을 도출합니다. 그 결과는 다시 기록되어 다음 판단과 개인화 모델을 지속적으로 고도화합니다.'

/** 뉴스·블로그·서비스 소개 등 누구나 읽는 콘텐츠에 사용하는 쉬운 정의 */
export const AI_DIGITAL_CARE_LOG_PUBLIC_KO =
  '삶에서 발생하는 기록을 시간의 흐름에 따라 연결하고, AI가 그 맥락을 학습해 이유 있는 판단과 다음 행동을 제시하며, 결과를 다시 학습해 판단을 계속 발전시키는 기술입니다.'

/** 도식·카드·짧은 기술 설명에 사용하는 작동 구조 */
export const AI_DIGITAL_CARE_LOG_FLOW_KO =
  '기록 연결 → 맥락 이해 → AI 분석·판단 → 설명 가능한 실행 → 결과 기록 → 학습·환류'

/**
 * 규제 서비스에만 별도 표시하는 실행 권한 경계.
 * 기술 정의나 비전 문장에 결합하지 않는다.
 */
export const AI_DIGITAL_CARE_LOG_REGULATED_BOUNDARY_KO =
  '의료 진단·처방, 금융 거래 등 법적 자격과 책임이 요구되는 행위는 해당 법률과 권한 체계를 따릅니다. 이는 서비스별 실행 권한의 경계이며, AI디지털케어로그의 데이터·판단·학습 환류 구조를 정의하거나 제한하는 문장이 아닙니다.'

/** 현재 구현·검증 상태를 과장 없이 설명하는 공통 문장 */
export const AI_DIGITAL_CARE_LOG_STATUS_KO =
  '시간축 데이터 구조, AI 분석·판단 레이어, 실행 연결, 결과 기록과 학습·환류 아키텍처를 기반으로 운영하며, 도메인별 데이터·XAI·개인화 모델을 지속적으로 고도화합니다. 강화학습·연합학습 등 일부 모듈의 적용 범위는 서비스별 검증 단계에 따라 구분합니다.'

/** 연구자·기술 기원 정본 */
export const JUNG_HAESUNG_DAL_ATTRIBUTION_KO =
  'AI 연구자 정해성은 AI디지털케어로그를 최초로 고안·개발하고, 세계 최초 발달장애 맞춤형 치료·학습 플랫폼 자람이에 처음 적용했습니다. 이후 NoahAI 금융·재테크 인프라 OS, 시니어앤라이프, VeggieCare 등 서로 다른 삶의 영역에 직접 설계·적용하고 사업화하며 범용성을 현장에서 실증해 왔습니다.'

export const AI_DIGITAL_CARE_LOG_CANONICAL_EN =
  'AI Digital Care Log is a universal AI data, judgment, and learning-feedback architecture that connects records generated across human life—from daily activities, behavior, and habits to care, education, healthcare, finance, investing, consumption, and work—on timelines centered on each person and situation. Its AI judgment layer analyzes accumulated context, uses XAI to explain the grounds for its outputs, and derives appropriate judgments, recommendations, and actions. Outcomes are logged again to continuously improve subsequent judgments and personalized models.'

export const AI_DIGITAL_CARE_LOG_PUBLIC_EN =
  'AI Digital Care Log connects records from everyday life over time, learns their context, provides reasoned judgments and next actions, and learns from outcomes so that its judgments continue to improve.'

export const AI_DIGITAL_CARE_LOG_FLOW_EN =
  'Connect records → Understand context → AI analysis and judgment → Explainable action → Log outcomes → Learn and feed back'

export const AI_DIGITAL_CARE_LOG_REGULATED_BOUNDARY_EN =
  'Acts that require legal qualifications or accountable authority—such as medical diagnosis and prescribing or regulated financial transactions—remain subject to the applicable law and permission framework. This defines service-specific execution authority; it does not define or limit the AI Digital Care Log data, judgment, and learning-feedback architecture.'

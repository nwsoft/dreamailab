import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export const metadata: Metadata = {
  title: '법률이 서비스 운영 종료 안내 | 드림에이아이랩',
  description:
    '과거 법률이 서비스 페이지를 방문한 사용자를 위한 운영 종료 안내입니다. 드림에이아이랩은 현재 이 경로에서 법률 상담이나 변호사 연결을 제공하지 않습니다.',
  alternates: {
    canonical: 'https://dreamailab.com/services/law/',
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function LawServiceNoticePage() {
  return (
    <>
      <Header />
      <main className="min-h-[70vh] bg-slate-50 px-4 py-20">
        <section className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
          <p className="text-sm font-semibold text-slate-500">서비스 운영 안내</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
            법률이 독립 서비스 운영을 종료했습니다
          </h1>
          <div className="mt-6 space-y-4 text-base leading-7 text-slate-700">
            <p>
              이 주소는 과거 생활 법률 정보 탐색을 돕는 서비스 소개 페이지였습니다.
              현재 드림에이아이랩은 이 경로에서 법률 상담, 법률 자문 또는 변호사 연결을 제공하지 않습니다.
            </p>
            <p>
              구체적인 법률 문제는 대한법률구조공단 등 공공기관이나 자격을 갖춘 법률 전문가에게
              확인해 주세요. 긴급하거나 기한이 있는 사안은 온라인 정보만으로 판단하지 마세요.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/services/"
              className="rounded-lg bg-slate-900 px-5 py-3 font-semibold text-white hover:bg-slate-800"
            >
              현재 서비스 보기
            </Link>
            <Link
              href="/contact/"
              className="rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-800 hover:bg-slate-100"
            >
              사업 문의
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

/** 이 사이트는 경로 기반 다국어(/ko/)를 쓰지 않습니다. 북마크·히스토리 등으로 /ko/ 가 열릴 때 홈으로 보냅니다. */
export default function KoLegacyRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/')
  }, [router])

  return (
    <div className="min-h-[40vh] flex items-center justify-center bg-gray-50 text-gray-600 text-sm">
      홈으로 이동합니다…
    </div>
  )
}

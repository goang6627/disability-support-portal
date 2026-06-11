import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { policies } from '../data/policies'
import { services } from '../data/services'

const siteTitle = 'Cổng Thông Tin Hỗ Trợ Người Khuyết Tật'

function getRouteTitle(pathname: string) {
  const serviceMatch = pathname.match(/^\/dich-vu\/([^/]+)$/)
  const policyMatch = pathname.match(/^\/chinh-sach\/([^/]+)$/)

  if (serviceMatch) {
    const service = services.find((item) => item.id === serviceMatch[1])
    return service ? `${service.name} | ${siteTitle}` : `Không tìm thấy dịch vụ | ${siteTitle}`
  }

  if (policyMatch) {
    const policy = policies.find((item) => item.id === policyMatch[1])
    return policy ? `${policy.title} | ${siteTitle}` : `Không tìm thấy chính sách | ${siteTitle}`
  }

  const titles: Record<string, string> = {
    '/': siteTitle,
    '/dich-vu': `Dịch vụ hỗ trợ | ${siteTitle}`,
    '/chinh-sach': `Chính sách và quyền lợi | ${siteTitle}`,
    '/tro-ly': `Trợ lý tìm dịch vụ | ${siteTitle}`,
    '/gui-yeu-cau': `Gửi yêu cầu hỗ trợ | ${siteTitle}`,
    '/tiep-can': `Cam kết tiếp cận WCAG 2.2 | ${siteTitle}`,
    '/quyen-rieng-tu': `Quyền riêng tư và dữ liệu | ${siteTitle}`,
  }

  return titles[pathname] ?? `Không tìm thấy trang | ${siteTitle}`
}

export function RouteEffects() {
  const location = useLocation()
  const [announcement, setAnnouncement] = useState('')
  const title = useMemo(() => getRouteTitle(location.pathname), [location.pathname])

  useEffect(() => {
    document.title = title
    window.scrollTo({ top: 0, behavior: 'auto' })
    window.setTimeout(() => {
      document.getElementById('main-content')?.focus()
      setAnnouncement(`Đã mở trang ${title.replace(` | ${siteTitle}`, '')}`)
    }, 0)
  }, [title])

  return (
    <p className="sr-only" role="status" aria-live="polite">
      {announcement}
    </p>
  )
}

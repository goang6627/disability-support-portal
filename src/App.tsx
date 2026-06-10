import { NavLink, Route, Routes } from 'react-router-dom'
import {
  Accessibility,
  Building2,
  ClipboardCheck,
  FileText,
  HandHeart,
  Home,
  Search,
  Send,
} from 'lucide-react'
import { AccessibilityToolbar } from './components/AccessibilityToolbar'
import { RouteEffects } from './components/RouteEffects'
import { HomePage } from './pages/HomePage'
import { ServicesPage } from './pages/ServicesPage'
import { PoliciesPage } from './pages/PoliciesPage'
import { AssistantPage } from './pages/AssistantPage'
import { RequestPage } from './pages/RequestPage'
import { AccessibilityPage } from './pages/AccessibilityPage'
import { ServiceDetailPage } from './pages/ServiceDetailPage'
import { PolicyDetailPage } from './pages/PolicyDetailPage'
import { NotFoundPage } from './pages/NotFoundPage'
import './App.css'

const navigationItems = [
  { to: '/', label: 'Trang chủ', icon: Home },
  { to: '/dich-vu', label: 'Dịch vụ hỗ trợ', icon: HandHeart },
  { to: '/chinh-sach', label: 'Chính sách', icon: FileText },
  { to: '/tro-ly', label: 'Trợ lý tìm dịch vụ', icon: Search },
  { to: '/gui-yeu-cau', label: 'Gửi yêu cầu', icon: Send },
  { to: '/tiep-can', label: 'Cam kết tiếp cận', icon: ClipboardCheck },
]

function App() {
  return (
    <div className="app-shell">
      <RouteEffects />
      <a className="skip-link" href="#main-content">
        Bỏ qua điều hướng, tới nội dung chính
      </a>

      <header className="site-header">
        <div className="site-header__inner">
          <NavLink className="brand" to="/" aria-label="Về trang chủ">
            <span className="brand__mark" aria-hidden="true">
              <Accessibility size={26} strokeWidth={2.25} />
            </span>
            <span>
              <span className="brand__name">Cổng Thông Tin Hỗ Trợ</span>
              <span className="brand__sub">Người Khuyết Tật tại Huế</span>
            </span>
          </NavLink>

          <nav className="primary-nav" aria-label="Điều hướng chính">
            {navigationItems.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  isActive ? 'primary-nav__link is-active' : 'primary-nav__link'
                }
                end={to === '/'}
              >
                <Icon aria-hidden="true" size={18} strokeWidth={2} />
                <span>{label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <AccessibilityToolbar />

      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dich-vu" element={<ServicesPage />} />
          <Route path="/dich-vu/:serviceId" element={<ServiceDetailPage />} />
          <Route path="/chinh-sach" element={<PoliciesPage />} />
          <Route path="/chinh-sach/:policyId" element={<PolicyDetailPage />} />
          <Route path="/tro-ly" element={<AssistantPage />} />
          <Route path="/gui-yeu-cau" element={<RequestPage />} />
          <Route path="/tiep-can" element={<AccessibilityPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <div>
            <h2>Cổng Thông Tin Hỗ Trợ Người Khuyết Tật</h2>
            <p>
              Prototype dự thi WCAG 2.2. Thông tin chính sách trong bản mẫu chỉ
              dùng để tham khảo và luôn kèm nguồn chính thức.
            </p>
          </div>
          <div className="footer-contact" aria-label="Thông tin dự án">
            <Building2 aria-hidden="true" size={20} />
            <span>Thiết kế ưu tiên người khiếm thị/nhìn kém và người dùng bàn phím.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

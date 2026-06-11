import { Link } from 'react-router-dom'
import { ArrowLeft, Search } from 'lucide-react'

export function NotFoundPage() {
  return (
    <section className="page-section" aria-labelledby="not-found-title">
      <div className="page-intro">
        <p className="eyebrow">404</p>
        <h1 id="not-found-title">Không tìm thấy trang</h1>
        <p>
          Đường dẫn này không tồn tại trong ứng dụng. Bạn có thể quay lại trang chủ
          hoặc mở trợ lý tìm dịch vụ để tiếp tục.
        </p>
        <div className="hero-actions">
          <Link className="button button--primary" to="/tro-ly">
            <Search aria-hidden="true" size={18} />
            Dùng trợ lý tìm dịch vụ
          </Link>
          <Link className="button button--secondary" to="/">
            <ArrowLeft aria-hidden="true" size={18} />
            Về trang chủ
          </Link>
        </div>
      </div>
    </section>
  )
}

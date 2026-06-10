import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, FileText, HandHeart, Search } from 'lucide-react'
import { policies } from '../data/policies'
import { services } from '../data/services'

export function HomePage() {
  const verifiedPolicies = policies.filter((policy) => policy.verificationStatus === 'verified')

  return (
    <>
      <section className="hero-section">
        <div className="hero-section__content">
          <p className="eyebrow">Prototype WCAG 2.2 cho cuộc thi tiếp cận số</p>
          <h1>Cổng thông tin giúp người khiếm thị tìm hỗ trợ nhanh và rõ ràng.</h1>
          <p className="hero-section__lead">
            Tra cứu chính sách, dịch vụ, tổ chức hỗ trợ và gửi yêu cầu trợ giúp bằng
            giao diện ưu tiên screen reader, bàn phím và nội dung dễ hiểu.
          </p>
          <div className="hero-actions" aria-label="Hành động chính">
            <Link className="button button--primary" to="/tro-ly">
              <Search aria-hidden="true" size={20} />
              Dùng trợ lý tìm dịch vụ
            </Link>
            <Link className="button button--secondary" to="/chinh-sach">
              <FileText aria-hidden="true" size={20} />
              Xem chính sách
            </Link>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Tóm tắt khả năng tiếp cận">
          <div className="hero-panel__top">
            <HandHeart aria-hidden="true" size={34} />
            <p>Thiết kế cho người khiếm thị/nhìn kém trước, mở rộng cho cộng đồng.</p>
          </div>
          <dl className="metrics-grid">
            <div>
              <dt>{services.length}</dt>
              <dd>dịch vụ mẫu</dd>
            </div>
            <div>
              <dt>{verifiedPolicies.length}</dt>
              <dd>nguồn chính sách đã kiểm chứng</dd>
            </div>
            <div>
              <dt>100%</dt>
              <dd>luồng chính dùng được bằng bàn phím</dd>
            </div>
          </dl>
        </aside>
      </section>

      <section className="section-block" aria-labelledby="quick-start-title">
        <div className="section-heading">
          <p className="eyebrow">Bắt đầu</p>
          <h2 id="quick-start-title">Ba cách người dùng có thể tìm hỗ trợ</h2>
        </div>
        <div className="feature-grid">
          {[
            {
              title: 'Trợ lý hỏi từng bước',
              description:
                'Người dùng chọn nhu cầu, loại hỗ trợ và khu vực để nhận gợi ý phù hợp.',
              to: '/tro-ly',
            },
            {
              title: 'Danh sách dịch vụ có lọc',
              description:
                'Tra cứu dịch vụ theo chính sách, y tế, học tập, việc làm hoặc tổ chức hỗ trợ.',
              to: '/dich-vu',
            },
            {
              title: 'Form yêu cầu an toàn',
              description:
                'Bản demo lưu yêu cầu trong trình duyệt, tạo mã theo dõi và không gửi dữ liệu thật.',
              to: '/gui-yeu-cau',
            },
          ].map((item) => (
            <article className="feature-card" key={item.title}>
              <CheckCircle2 aria-hidden="true" size={24} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <Link to={item.to}>
                Mở mục này <ArrowRight aria-hidden="true" size={17} />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

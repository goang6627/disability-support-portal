import { Link } from 'react-router-dom'
import { ArrowRight, Database, ShieldCheck, Trash2 } from 'lucide-react'

const privacyPoints = [
  {
    icon: ShieldCheck,
    title: 'Không gửi dữ liệu cá nhân lên server',
    description:
      'Form yêu cầu trong bản dự thi chỉ tạo mã theo dõi và lưu trên trình duyệt hiện tại. Ứng dụng không có tài khoản, cơ sở dữ liệu server hoặc hệ thống gửi email.',
  },
  {
    icon: Database,
    title: 'Dữ liệu cục bộ có thể xóa',
    description:
      'Người dùng có thể xóa toàn bộ yêu cầu đã lưu ngay trong trang gửi yêu cầu. Khi đổi trình duyệt hoặc xóa dữ liệu website, nội dung này cũng mất.',
  },
  {
    icon: Trash2,
    title: 'Không dùng cho tình huống khẩn cấp thật',
    description:
      'Với tình huống y tế, an toàn hoặc pháp lý khẩn cấp, người dùng cần gọi cơ quan chức năng hoặc tổ chức phụ trách thay vì dựa vào form cục bộ.',
  },
]

export function PrivacyPage() {
  return (
    <section className="page-section" aria-labelledby="privacy-title">
      <div className="page-intro">
        <div>
          <p className="eyebrow">Quyền riêng tư & dữ liệu</p>
          <h1 id="privacy-title">Xử lý dữ liệu minh bạch từ bước đầu</h1>
          <p>
            Trang này giải thích cách bản dự thi bảo vệ người dùng khi họ thử luồng
            gửi yêu cầu hỗ trợ, đồng thời nêu rõ giới hạn của dữ liệu chưa kiểm chứng.
          </p>
        </div>
        <img
          className="page-intro__image"
          src="/images/request-support.jpg"
          alt="Người dùng nhìn kém và người chăm sóc xem form hỗ trợ với giao diện chữ lớn trên laptop."
          width="1280"
          height="960"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="commitment-grid">
        {privacyPoints.map(({ icon: Icon, title, description }) => (
          <article className="feature-card" key={title}>
            <Icon aria-hidden="true" size={24} />
            <h2>{title}</h2>
            <p>{description}</p>
          </article>
        ))}
      </div>

      <section className="section-block" aria-labelledby="data-rules-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Quy tắc dữ liệu</p>
            <h2 id="data-rules-title">Cách phân biệt nguồn chính thức và dữ liệu mẫu</h2>
          </div>
          <p>
            Chính sách phải có nguồn, ngày rà soát và trạng thái kiểm chứng. Dịch vụ
            địa phương chưa có nguồn chính thức được ghi rõ là cần xác minh trước khi
            sử dụng ngoài phạm vi bài dự thi.
          </p>
        </div>
        <div className="hero-actions">
          <Link className="button button--primary" to="/gui-yeu-cau">
            Mở form yêu cầu cục bộ <ArrowRight aria-hidden="true" size={18} />
          </Link>
          <Link className="button button--secondary" to="/chinh-sach">
            Xem nguồn chính sách
          </Link>
        </div>
      </section>
    </section>
  )
}

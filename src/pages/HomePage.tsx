import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, FileText, HandHeart, Search } from 'lucide-react'
import { policies } from '../data/policies'
import { services } from '../data/services'

const userStories = [
  {
    title: 'Tìm nơi hỏi thủ tục trợ cấp',
    description:
      'Người dùng có thể bắt đầu từ nhu cầu chính sách, xem nguồn đã kiểm chứng và biết nên liên hệ cấp xã/phường để xác nhận hồ sơ.',
    image: '/images/policy-access.jpg',
    alt: 'Người dùng và nhân viên hỗ trợ cùng xem tài liệu chính sách, bên cạnh có bảng chữ nổi và máy tính bảng chữ lớn.',
    to: '/chinh-sach/nghi-dinh-20-2021',
  },
  {
    title: 'Chọn dịch vụ phù hợp theo tình huống',
    description:
      'Danh sách dịch vụ phân biệt dữ liệu đã kiểm chứng và dữ liệu demo, giúp người dùng không nhầm thông tin mẫu là thông tin chính thức.',
    image: '/images/service-directory.jpg',
    alt: 'Bàn tư vấn dịch vụ hỗ trợ với laptop, các thẻ thông tin trực quan và gậy trắng cạnh ghế người dùng.',
    to: '/dich-vu',
  },
  {
    title: 'Nhận gợi ý qua trợ lý từng bước',
    description:
      'Wizard dùng radio group và live region, phù hợp cho người dùng bàn phím và screen reader khi không muốn đọc quá nhiều mục cùng lúc.',
    image: '/images/assistant-wizard.jpg',
    alt: 'Người nhìn kém cùng nhân viên hỗ trợ xem các bước lựa chọn dịch vụ trên máy tính bảng.',
    to: '/tro-ly',
  },
  {
    title: 'Gửi yêu cầu demo an toàn',
    description:
      'Form minh họa quy trình tiếp nhận yêu cầu, tạo mã theo dõi và chỉ lưu dữ liệu trong trình duyệt ở bản prototype.',
    image: '/images/request-support.jpg',
    alt: 'Người dùng nhìn kém cùng người chăm sóc xem thẻ yêu cầu hỗ trợ bên cạnh laptop có form chữ lớn.',
    to: '/gui-yeu-cau',
  },
]

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
          <img
            className="hero-panel__image"
            src="/images/hero-support.jpg"
            alt="Người nhìn kém dùng điện thoại có tai nghe tại bàn hỗ trợ, bên cạnh là nhân viên hướng dẫn trong bối cảnh thành phố Huế."
            width="1280"
            height="720"
            fetchPriority="high"
            decoding="async"
          />
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

      <section className="section-block" aria-labelledby="user-stories-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Tình huống sử dụng</p>
            <h2 id="user-stories-title">Thiết kế quanh việc người dùng cần làm</h2>
          </div>
          <p>
            Mỗi hình ảnh minh họa một ngữ cảnh thật: tra cứu chính sách, chọn dịch vụ,
            dùng trợ lý và gửi yêu cầu. Nội dung chính vẫn luôn nằm trong text.
          </p>
        </div>
        <div className="story-grid">
          {userStories.map((story) => (
            <article className="story-card" key={story.title}>
              <img
                className="story-card__image"
                src={story.image}
                alt={story.alt}
                width="1280"
                height="960"
                decoding="async"
              />
              <div className="story-card__body">
                <h3>{story.title}</h3>
                <p>{story.description}</p>
                <Link to={story.to}>
                  Mở luồng này <ArrowRight aria-hidden="true" size={17} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

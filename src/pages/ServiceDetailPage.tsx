import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ExternalLink, MapPin, Phone, Send } from 'lucide-react'
import { services } from '../data/services'

const categoryLabels = {
  policy: 'Chính sách',
  health: 'Y tế',
  education: 'Học tập',
  employment: 'Việc làm',
  organization: 'Tổ chức',
  urgent: 'Cần phản hồi sớm',
}

const userLabels = {
  visual: 'Người khiếm thị/nhìn kém',
  mobility: 'Người khuyết tật vận động',
  hearing: 'Người khiếm thính',
  cognitive: 'Người cần hỗ trợ nhận thức',
  caregiver: 'Người chăm sóc/đại diện',
}

export function ServiceDetailPage() {
  const { serviceId } = useParams()
  const service = services.find((item) => item.id === serviceId)

  if (!service) {
    return (
      <section className="page-section" aria-labelledby="service-not-found-title">
        <div className="page-intro">
          <p className="eyebrow">Không tìm thấy</p>
          <h1 id="service-not-found-title">Không tìm thấy dịch vụ này</h1>
          <p>Dịch vụ có thể đã được đổi tên hoặc chưa có trong dữ liệu prototype.</p>
          <Link className="button button--primary" to="/dich-vu">
            <ArrowLeft aria-hidden="true" size={18} />
            Quay lại danh sách dịch vụ
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="page-section" aria-labelledby="service-detail-title">
      <Link className="back-link" to="/dich-vu">
        <ArrowLeft aria-hidden="true" size={18} />
        Quay lại dịch vụ hỗ trợ
      </Link>

      <article className="detail-layout">
        <div className="detail-main">
          <p className="eyebrow">{categoryLabels[service.category]}</p>
          <h1 id="service-detail-title">{service.name}</h1>
          <p className="detail-lead">{service.description}</p>

          <section aria-labelledby="who-title">
            <h2 id="who-title">Phù hợp với ai?</h2>
            <ul className="tag-list">
              {service.targetUsers.map((targetUser) => (
                <li key={targetUser}>{userLabels[targetUser]}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="accessibility-note-title">
            <h2 id="accessibility-note-title">Ghi chú tiếp cận</h2>
            <p className="note-block">{service.accessibilityNotes}</p>
          </section>

          <section aria-labelledby="next-step-title">
            <h2 id="next-step-title">Bước tiếp theo</h2>
            <p>
              Nếu thông tin này phù hợp với nhu cầu của bạn, hãy ghi lại tên dịch vụ
              và gửi yêu cầu demo để hệ thống tạo mã theo dõi. Với tình huống thực tế,
              hãy xác nhận lại với cơ quan hoặc tổ chức phụ trách.
            </p>
            <Link className="button button--primary" to="/gui-yeu-cau">
              <Send aria-hidden="true" size={18} />
              Gửi yêu cầu hỗ trợ demo
            </Link>
          </section>
        </div>

        <aside className="detail-aside" aria-label="Thông tin liên hệ và nguồn">
          <div className="info-card">
            <h2>Thông tin liên hệ</h2>
            <dl className="definition-list">
              <div>
                <dt>Khu vực</dt>
                <dd>{service.district}</dd>
              </div>
              <div>
                <dt>Địa chỉ</dt>
                <dd>
                  <MapPin aria-hidden="true" size={17} />
                  {service.address}
                </dd>
              </div>
              <div>
                <dt>Điện thoại</dt>
                <dd>
                  <Phone aria-hidden="true" size={17} />
                  {service.phone}
                </dd>
              </div>
              {service.email && (
                <div>
                  <dt>Email</dt>
                  <dd>{service.email}</dd>
                </div>
              )}
            </dl>
          </div>

          <div className="info-card">
            <h2>Trạng thái dữ liệu</h2>
            <p className="verification-badge">
              {service.verificationStatus === 'verified'
                ? 'Đã kiểm chứng nguồn'
                : 'Dữ liệu demo cần kiểm chứng'}
            </p>
            {service.sourceUrl ? (
              <a href={service.sourceUrl} target="_blank" rel="noreferrer">
                Xem nguồn liên quan <ExternalLink aria-hidden="true" size={16} />
              </a>
            ) : (
              <p className="form-help">
                Chưa có nguồn chính thức trong prototype. Không dùng như dữ liệu thật.
              </p>
            )}
          </div>
        </aside>
      </article>
    </section>
  )
}

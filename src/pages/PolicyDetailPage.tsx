import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Send } from 'lucide-react'
import { policies } from '../data/policies'

export function PolicyDetailPage() {
  const { policyId } = useParams()
  const policy = policies.find((item) => item.id === policyId)

  if (!policy) {
    return (
      <section className="page-section" aria-labelledby="policy-not-found-title">
        <div className="page-intro">
          <p className="eyebrow">Không tìm thấy</p>
          <h1 id="policy-not-found-title">Không tìm thấy chính sách này</h1>
          <p>Chính sách có thể đã được đổi tên hoặc chưa có trong dữ liệu bản dự thi.</p>
          <Link className="button button--primary" to="/chinh-sach">
            <ArrowLeft aria-hidden="true" size={18} />
            Quay lại danh sách chính sách
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="page-section" aria-labelledby="policy-detail-title">
      <Link className="back-link" to="/chinh-sach">
        <ArrowLeft aria-hidden="true" size={18} />
        Quay lại chính sách
      </Link>

      <article className="detail-layout">
        <div className="detail-main">
          <p className="eyebrow">{policy.category}</p>
          <h1 id="policy-detail-title">{policy.title}</h1>
          <p className="detail-lead">{policy.summary}</p>

          <section aria-labelledby="eligible-title">
            <h2 id="eligible-title">Nhóm có thể liên quan</h2>
            <ul>
              {policy.eligibleGroups.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="documents-title">
            <h2 id="documents-title">Hồ sơ thường cần chuẩn bị</h2>
            <ul>
              {policy.requiredDocuments.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="apply-title">
            <h2 id="apply-title">Cách hỏi hoặc nộp hồ sơ</h2>
            <p className="note-block">{policy.howToApply}</p>
          </section>

          <section aria-labelledby="policy-next-title">
            <h2 id="policy-next-title">Cần hỗ trợ đọc hiểu chính sách?</h2>
            <p>
              Bạn có thể tạo yêu cầu cục bộ để mô tả trường hợp của mình. Trong sản
              phẩm thật, yêu cầu này sẽ được chuyển tới nhóm hỗ trợ hoặc cán bộ phụ trách.
            </p>
            <Link className="button button--primary" to="/gui-yeu-cau">
              <Send aria-hidden="true" size={18} />
              Tạo yêu cầu cục bộ
            </Link>
          </section>
        </div>

        <aside className="detail-aside" aria-label="Nguồn và trạng thái chính sách">
          <div className="info-card">
            <h2>Nguồn chính thức</h2>
            <p>{policy.sourceName}</p>
            <a href={policy.sourceUrl} target="_blank" rel="noreferrer">
              Mở văn bản nguồn <ExternalLink aria-hidden="true" size={16} />
            </a>
          </div>

          <div className="info-card">
            <h2>Thông tin kiểm chứng</h2>
            <dl className="definition-list">
              <div>
                <dt>Trạng thái</dt>
                <dd>
                  {policy.verificationStatus === 'verified'
                    ? 'Đã kiểm chứng nguồn'
                    : 'Cần kiểm chứng lại'}
                </dd>
              </div>
              <div>
                <dt>Ngày hiệu lực</dt>
                <dd>{policy.effectiveDate}</dd>
              </div>
              <div>
                <dt>Rà soát lần cuối</dt>
                <dd>{policy.lastReviewed}</dd>
              </div>
            </dl>
          </div>

          <div className="warning-card">
            <h2>Lưu ý</h2>
            <p>{policy.disclaimer}</p>
          </div>
        </aside>
      </article>
    </section>
  )
}

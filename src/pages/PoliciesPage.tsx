import { ExternalLink } from 'lucide-react'
import { policies } from '../data/policies'

export function PoliciesPage() {
  return (
    <section className="page-section" aria-labelledby="policies-title">
      <div className="page-intro">
        <p className="eyebrow">Chính sách & quyền lợi</p>
        <h1 id="policies-title">Thông tin chính sách có tóm tắt và nguồn chính thức</h1>
        <p>
          Mỗi mục được viết bằng ngôn ngữ dễ hiểu, có nguồn, ngày hiệu lực và ngày
          rà soát. Nội dung không thay thế tư vấn pháp lý hoặc xác nhận từ cơ quan
          có thẩm quyền.
        </p>
      </div>

      <div className="policy-list">
        {policies.map((policy) => (
          <article className="policy-card" key={policy.id}>
            <div className="policy-card__top">
              <p className="status-label">{policy.category}</p>
              <p className="source-status">
                {policy.verificationStatus === 'verified' ? 'Nguồn đã kiểm chứng' : 'Cần kiểm tra'}
              </p>
            </div>
            <h2>{policy.title}</h2>
            <p>{policy.summary}</p>

            <div className="two-column">
              <div>
                <h3>Nhóm có thể liên quan</h3>
                <ul>
                  {policy.eligibleGroups.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Hồ sơ thường cần chuẩn bị</h3>
                <ul>
                  {policy.requiredDocuments.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="note-block">
              <strong>Cách hỏi/nộp hồ sơ:</strong> {policy.howToApply}
            </div>
            <p className="disclaimer">{policy.disclaimer}</p>
            <div className="policy-card__footer">
              <span>Hiệu lực: {policy.effectiveDate}</span>
              <span>Rà soát: {policy.lastReviewed}</span>
              <a href={policy.sourceUrl} target="_blank" rel="noreferrer">
                {policy.sourceName} <ExternalLink aria-hidden="true" size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

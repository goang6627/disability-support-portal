import { CheckCircle2 } from 'lucide-react'

const commitments = [
  'Điều hướng chính, bộ lọc, wizard và form dùng được bằng bàn phím.',
  'Có skip link, heading theo thứ bậc và landmark rõ ràng.',
  'Form có label, hint, error summary và thông báo thành công bằng live region.',
  'Không dùng màu sắc làm tín hiệu duy nhất; trạng thái có text đi kèm.',
  'Màu, focus ring và cỡ chữ được thiết kế theo hướng đạt WCAG 2.2 AA.',
  'Có tùy chọn tăng cỡ chữ, tương phản cao và giảm chuyển động.',
]

export function AccessibilityPage() {
  return (
    <section className="page-section" aria-labelledby="accessibility-title">
      <div className="page-intro">
        <div>
          <p className="eyebrow">Cam kết tiếp cận</p>
          <h1 id="accessibility-title">Cách prototype đáp ứng WCAG 2.2</h1>
          <p>
            Trang này dùng làm bằng chứng thuyết minh cho cuộc thi: nêu các quyết
            định thiết kế, cách kiểm thử và ranh giới của bản prototype.
          </p>
        </div>
        <img
          className="page-intro__image"
          src="/images/wcag-audit.jpg"
          alt="Nhóm sinh viên kiểm tra giao diện tiếp cận với bảng chữ nổi, bảng màu tương phản và checklist WCAG."
          width="1280"
          height="960"
        />
      </div>

      <div className="commitment-grid">
        {commitments.map((item) => (
          <article className="feature-card" key={item}>
            <CheckCircle2 aria-hidden="true" size={24} />
            <p>{item}</p>
          </article>
        ))}
      </div>

      <section className="section-block" aria-labelledby="testing-title">
        <div className="section-heading">
          <p className="eyebrow">Kiểm thử đề xuất</p>
          <h2 id="testing-title">Checklist trước khi nộp bài</h2>
        </div>
        <ol className="checklist">
          <li>Chạy lint, typecheck và build.</li>
          <li>Chạy Playwright + axe trên các trang chính.</li>
          <li>Dùng Tab/Shift+Tab để hoàn thành luồng tìm dịch vụ và gửi form.</li>
          <li>Kiểm tra bằng NVDA hoặc Narrator trên Chrome/Edge.</li>
          <li>Chạy Lighthouse Accessibility trên URL deploy production.</li>
        </ol>
      </section>
    </section>
  )
}

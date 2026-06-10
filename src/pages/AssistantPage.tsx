import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { services } from '../data/services'
import type { DisabilityType, ServiceCategory } from '../data/types'

type WizardState = {
  needType: ServiceCategory
  disabilityType: DisabilityType
  urgency: 'normal' | 'soon'
}

const initialState: WizardState = {
  needType: 'policy',
  disabilityType: 'visual',
  urgency: 'normal',
}

export function AssistantPage() {
  const [answers, setAnswers] = useState<WizardState>(initialState)

  const matchedServices = useMemo(() => {
    return services
      .filter((service) => {
        const matchesNeed = service.category === answers.needType || service.category === 'urgent'
        const matchesUser = service.targetUsers.includes(answers.disabilityType)

        return matchesNeed && matchesUser
      })
      .slice(0, 3)
  }, [answers])

  return (
    <section className="page-section" aria-labelledby="assistant-title">
      <div className="page-intro">
        <div>
          <p className="eyebrow">Trợ lý tìm dịch vụ</p>
          <h1 id="assistant-title">Trả lời vài câu hỏi để nhận gợi ý phù hợp</h1>
          <p>
            Wizard dùng form chuẩn, không ẩn thông tin quan trọng trong hiệu ứng, và
            kết quả được thông báo bằng vùng live region cho screen reader.
          </p>
        </div>
        <img
          className="page-intro__image"
          src="/images/assistant-wizard.jpg"
          alt="Người nhìn kém cùng nhân viên hỗ trợ xem các bước lựa chọn dịch vụ trên máy tính bảng."
          width="1280"
          height="960"
        />
      </div>

      <form className="wizard-panel" aria-describedby="assistant-help">
        <p id="assistant-help" className="form-help">
          Chọn nhu cầu gần nhất. Đây là gợi ý demo, không thay thế tư vấn từ cơ quan
          hoặc tổ chức hỗ trợ.
        </p>

        <fieldset>
          <legend>1. Bạn đang cần hỗ trợ về việc gì?</legend>
          <div className="radio-grid">
            {[
              ['policy', 'Chính sách, trợ cấp'],
              ['health', 'Y tế, phục hồi chức năng'],
              ['education', 'Học tập, tài liệu dễ tiếp cận'],
              ['employment', 'Việc làm phù hợp'],
              ['organization', 'Kết nối tổ chức hỗ trợ'],
            ].map(([value, label]) => (
              <label className="choice-card" key={value}>
                <input
                  type="radio"
                  name="needType"
                  value={value}
                  checked={answers.needType === value}
                  onChange={(event) =>
                    setAnswers((current) => ({
                      ...current,
                      needType: event.target.value as ServiceCategory,
                    }))
                  }
                />
                <span>{label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend>2. Nhu cầu tiếp cận chính của bạn là gì?</legend>
          <div className="radio-grid">
            {[
              ['visual', 'Khiếm thị hoặc nhìn kém'],
              ['mobility', 'Khuyết tật vận động'],
              ['caregiver', 'Tôi là người chăm sóc'],
            ].map(([value, label]) => (
              <label className="choice-card" key={value}>
                <input
                  type="radio"
                  name="disabilityType"
                  value={value}
                  checked={answers.disabilityType === value}
                  onChange={(event) =>
                    setAnswers((current) => ({
                      ...current,
                      disabilityType: event.target.value as DisabilityType,
                    }))
                  }
                />
                <span>{label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend>3. Mức độ cần phản hồi</legend>
          <div className="radio-grid radio-grid--compact">
            {[
              ['normal', 'Bình thường'],
              ['soon', 'Cần phản hồi sớm'],
            ].map(([value, label]) => (
              <label className="choice-card" key={value}>
                <input
                  type="radio"
                  name="urgency"
                  value={value}
                  checked={answers.urgency === value}
                  onChange={(event) =>
                    setAnswers((current) => ({
                      ...current,
                      urgency: event.target.value as 'normal' | 'soon',
                    }))
                  }
                />
                <span>{label}</span>
              </label>
            ))}
          </div>
        </fieldset>
      </form>

      <section className="assistant-results" aria-labelledby="assistant-results-title">
        <div className="section-heading">
          <p className="eyebrow">Kết quả gợi ý</p>
          <h2 id="assistant-results-title">Dịch vụ phù hợp với lựa chọn của bạn</h2>
          <p aria-live="polite">Có {matchedServices.length} gợi ý đang hiển thị.</p>
        </div>

        <div className="service-list">
          {matchedServices.map((service) => (
            <article className="service-card" key={service.id}>
              <div className="service-card__header">
                <h3>{service.name}</h3>
                <CheckCircle2 aria-hidden="true" size={22} />
              </div>
              <p>{service.description}</p>
              <p className="note-block">{service.accessibilityNotes}</p>
            </article>
          ))}
        </div>

        <Link className="button button--primary" to="/gui-yeu-cau">
          Gửi yêu cầu hỗ trợ demo <ArrowRight aria-hidden="true" size={18} />
        </Link>
      </section>
    </section>
  )
}

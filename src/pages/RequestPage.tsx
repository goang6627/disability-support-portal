import { useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { Trash2 } from 'lucide-react'
import type { ServiceCategory, SupportRequest } from '../data/types'
import {
  clearStoredRequests,
  createRequestId,
  getStoredRequests,
  saveSupportRequest,
} from '../utils/requests'

type FormState = {
  fullName: string
  contactMethod: 'phone' | 'email' | 'caregiver'
  contactValue: string
  needType: ServiceCategory
  message: string
  urgency: 'normal' | 'soon'
  consent: boolean
}

const initialForm: FormState = {
  fullName: '',
  contactMethod: 'phone',
  contactValue: '',
  needType: 'policy',
  message: '',
  urgency: 'normal',
  consent: false,
}

export function RequestPage() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [errors, setErrors] = useState<string[]>([])
  const [latestRequest, setLatestRequest] = useState<SupportRequest | null>(null)
  const [storedRequests, setStoredRequests] = useState<SupportRequest[]>(() => getStoredRequests())
  const errorSummaryRef = useRef<HTMLDivElement>(null)

  const hasRequests = storedRequests.length > 0
  const updateField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((current) => ({ ...current, [key]: value }))
  }

  const validate = () => {
    const nextErrors: string[] = []

    if (form.fullName.trim().length < 2) {
      nextErrors.push('Vui lòng nhập họ tên hoặc tên đại diện ít nhất 2 ký tự.')
    }
    if (form.contactValue.trim().length < 5) {
      nextErrors.push('Vui lòng nhập thông tin liên hệ đủ rõ để phản hồi.')
    }
    if (form.message.trim().length < 12) {
      nextErrors.push('Vui lòng mô tả nhu cầu hỗ trợ cụ thể hơn.')
    }
    if (!form.consent) {
      nextErrors.push('Vui lòng xác nhận đây là bản demo và dữ liệu chỉ lưu trên trình duyệt.')
    }

    return nextErrors
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)

    if (nextErrors.length > 0) {
      window.setTimeout(() => errorSummaryRef.current?.focus(), 0)
      return
    }

    const request: SupportRequest = {
      id: createRequestId(),
      fullName: form.fullName.trim(),
      contactMethod: form.contactMethod,
      contactValue: form.contactValue.trim(),
      needType: form.needType,
      message: form.message.trim(),
      urgency: form.urgency,
      createdAt: new Date().toISOString(),
    }

    saveSupportRequest(request)
    setLatestRequest(request)
    setStoredRequests(getStoredRequests())
    setForm(initialForm)
  }

  const handleClear = () => {
    clearStoredRequests()
    setStoredRequests([])
    setLatestRequest(null)
  }

  return (
    <section className="page-section" aria-labelledby="request-title">
      <div className="page-intro">
        <div>
          <p className="eyebrow">Gửi yêu cầu demo</p>
          <h1 id="request-title">Form hỗ trợ an toàn, rõ lỗi và dùng được bằng bàn phím</h1>
          <p>
            Bản dự thi không gửi dữ liệu cá nhân lên server. Yêu cầu chỉ lưu trong
            trình duyệt bằng localStorage để minh họa quy trình xử lý.
          </p>
        </div>
        <img
          className="page-intro__image"
          src="/images/request-support.jpg"
          alt="Người dùng nhìn kém cùng người chăm sóc xem form hỗ trợ trên điện thoại và máy tính với giao diện chữ lớn."
          width="1280"
          height="960"
          loading="lazy"
          decoding="async"
        />
      </div>

      {errors.length > 0 && (
        <div
          className="error-summary"
          ref={errorSummaryRef}
          role="alert"
          tabIndex={-1}
          aria-labelledby="error-summary-title"
        >
          <h2 id="error-summary-title">Cần kiểm tra lại thông tin</h2>
          <ul>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      {latestRequest && (
        <div className="success-panel" role="status" aria-live="polite">
          <h2>Đã tạo yêu cầu demo</h2>
          <p>
            Mã yêu cầu của bạn là <strong>{latestRequest.id}</strong>. Trong sản phẩm
            thật, mã này sẽ được dùng để theo dõi phản hồi từ nhóm hỗ trợ.
          </p>
        </div>
      )}

      <form className="request-form" onSubmit={handleSubmit} noValidate>
        <div className="field">
          <label htmlFor="fullName">Họ tên hoặc tên đại diện</label>
          <input
            id="fullName"
            name="fullName"
            value={form.fullName}
            onChange={(event) => updateField('fullName', event.target.value)}
            aria-describedby="fullName-help"
            autoComplete="name"
          />
          <p id="fullName-help" className="form-help">
            Có thể nhập tên người chăm sóc nếu người cần hỗ trợ muốn nhờ đại diện.
          </p>
        </div>

        <div className="two-column two-column--form">
          <div className="field">
            <label htmlFor="contactMethod">Cách liên hệ ưu tiên</label>
            <select
              id="contactMethod"
              name="contactMethod"
              value={form.contactMethod}
              onChange={(event) =>
                updateField('contactMethod', event.target.value as FormState['contactMethod'])
              }
            >
              <option value="phone">Điện thoại</option>
              <option value="email">Email</option>
              <option value="caregiver">Thông qua người chăm sóc</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="contactValue">Thông tin liên hệ</label>
            <input
              id="contactValue"
              name="contactValue"
              value={form.contactValue}
              onChange={(event) => updateField('contactValue', event.target.value)}
              aria-describedby="contactValue-help"
              autoComplete={form.contactMethod === 'email' ? 'email' : 'tel'}
            />
            <p id="contactValue-help" className="form-help">
              Ví dụ: số điện thoại, email hoặc tên/số điện thoại người đại diện.
            </p>
          </div>
        </div>

        <div className="two-column two-column--form">
          <div className="field">
            <label htmlFor="needType">Loại hỗ trợ cần tìm</label>
            <select
              id="needType"
              name="needType"
              value={form.needType}
              onChange={(event) => updateField('needType', event.target.value as ServiceCategory)}
            >
              <option value="policy">Chính sách, trợ cấp</option>
              <option value="health">Y tế</option>
              <option value="education">Học tập</option>
              <option value="employment">Việc làm</option>
              <option value="organization">Tổ chức hỗ trợ</option>
              <option value="urgent">Cần phản hồi sớm</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="urgency">Mức độ phản hồi</label>
            <select
              id="urgency"
              name="urgency"
              value={form.urgency}
              onChange={(event) => updateField('urgency', event.target.value as FormState['urgency'])}
            >
              <option value="normal">Bình thường</option>
              <option value="soon">Cần phản hồi sớm</option>
            </select>
          </div>
        </div>

        <div className="field">
          <label htmlFor="message">Mô tả nhu cầu hỗ trợ</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={(event) => updateField('message', event.target.value)}
            aria-describedby="message-help"
          />
          <p id="message-help" className="form-help">
            Mô tả ngắn gọn bạn cần tìm thông tin gì, đang ở khu vực nào và cần định
            dạng hỗ trợ ra sao.
          </p>
        </div>

        <label className="checkbox-row">
          <input
            type="checkbox"
            checked={form.consent}
            onChange={(event) => updateField('consent', event.target.checked)}
          />
          <span>Tôi hiểu đây là bản demo; dữ liệu chỉ lưu trên trình duyệt hiện tại.</span>
        </label>

        <button className="button button--primary" type="submit">
          Tạo yêu cầu demo
        </button>
      </form>

      {hasRequests && (
        <section className="stored-requests" aria-labelledby="stored-requests-title">
          <div className="section-heading">
            <h2 id="stored-requests-title">Yêu cầu demo đã lưu trên trình duyệt</h2>
            <button className="button button--danger" type="button" onClick={handleClear}>
              <Trash2 aria-hidden="true" size={18} />
              Xóa dữ liệu demo
            </button>
          </div>
          <ul className="clean-list request-list">
            {storedRequests.map((request) => (
              <li key={request.id}>
                <strong>{request.id}</strong> - {request.fullName} - {request.needType}
              </li>
            ))}
          </ul>
        </section>
      )}
    </section>
  )
}

import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Filter, MapPin, Phone } from 'lucide-react'
import { services } from '../data/services'
import type { ServiceCategory } from '../data/types'

const categories: Array<{ value: 'all' | ServiceCategory; label: string }> = [
  { value: 'all', label: 'Tất cả' },
  { value: 'policy', label: 'Chính sách' },
  { value: 'health', label: 'Y tế' },
  { value: 'education', label: 'Học tập' },
  { value: 'employment', label: 'Việc làm' },
  { value: 'organization', label: 'Tổ chức' },
  { value: 'urgent', label: 'Cần phản hồi sớm' },
]

export function ServicesPage() {
  const [category, setCategory] = useState<'all' | ServiceCategory>('all')
  const [query, setQuery] = useState('')

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const matchesCategory = category === 'all' || service.category === category
      const matchesQuery = [service.name, service.description, service.district]
        .join(' ')
        .toLowerCase()
        .includes(query.trim().toLowerCase())

      return matchesCategory && matchesQuery
    })
  }, [category, query])

  return (
    <section className="page-section" aria-labelledby="services-title">
      <div className="page-intro">
        <div>
          <p className="eyebrow">Tra cứu dịch vụ</p>
          <h1 id="services-title">Dịch vụ hỗ trợ dễ lọc và đọc được bằng screen reader</h1>
          <p>
            Dữ liệu mẫu ưu tiên bối cảnh Huế. Mục đã có nguồn chính thức được đánh dấu
            “đã kiểm chứng”; mục demo cần kiểm tra lại trước khi sử dụng thật.
          </p>
        </div>
        <img
          className="page-intro__image"
          src="/images/service-directory.jpg"
          alt="Bàn tư vấn dịch vụ hỗ trợ với laptop, thẻ thông tin trực quan và gậy trắng đặt cạnh người dùng."
          width="1280"
          height="960"
          loading="lazy"
          decoding="async"
        />
      </div>

      <form className="filter-panel" role="search" aria-label="Lọc dịch vụ hỗ trợ">
        <div className="field">
          <label htmlFor="service-search">Tìm theo tên, mô tả hoặc khu vực</label>
          <input
            id="service-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Ví dụ: trợ cấp, học tập, việc làm"
          />
        </div>
        <div className="field">
          <label htmlFor="service-category">Loại dịch vụ</label>
          <select
            id="service-category"
            value={category}
            onChange={(event) => setCategory(event.target.value as 'all' | ServiceCategory)}
          >
            {categories.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
      </form>

      <p className="result-count" aria-live="polite">
        Tìm thấy {filteredServices.length} dịch vụ phù hợp.
      </p>

      <div className="service-list">
        {filteredServices.map((service) => (
          <article className="service-card" key={service.id}>
            <div className="service-card__header">
              <div>
                <p className="status-label">
                  {service.verificationStatus === 'verified'
                    ? 'Đã kiểm chứng nguồn'
                    : 'Dữ liệu demo'}
                </p>
                <h2>{service.name}</h2>
              </div>
              <Filter aria-hidden="true" size={22} />
            </div>
            <p>{service.description}</p>
            <ul className="clean-list service-meta">
              <li>
                <MapPin aria-hidden="true" size={18} />
                {service.district} - {service.address}
              </li>
              <li>
                <Phone aria-hidden="true" size={18} />
                {service.phone}
              </li>
            </ul>
            <p className="note-block">{service.accessibilityNotes}</p>
            <Link to={`/dich-vu/${service.id}`}>
              Xem chi tiết dịch vụ <ArrowRight aria-hidden="true" size={17} />
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}

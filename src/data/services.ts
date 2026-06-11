import type { Organization, Service } from './types'

export const services: Service[] = [
  {
    id: 'huong-dan-tro-cap-xa-hoi',
    name: 'Hướng dẫn thủ tục trợ cấp xã hội',
    category: 'policy',
    description:
      'Hỗ trợ người dùng hiểu bước chuẩn bị hồ sơ, nơi nộp và cách hỏi lại thông tin khi cần xác nhận quyền lợi.',
    targetUsers: ['visual', 'mobility', 'caregiver'],
    district: 'Toàn thành phố Huế',
    address: 'UBND phường/xã nơi cư trú',
    phone: '0234 000 000',
    sourceUrl: 'https://vanban.chinhphu.vn/?docid=202811&pageid=27160',
    verificationStatus: 'verified',
    accessibilityNotes:
      'Nên gọi trước để hỏi giờ tiếp nhận, nhờ người thân chuẩn bị giấy tờ bản giấy nếu cần.',
  },
  {
    id: 'ket-noi-hoi-nkt-hue',
    name: 'Kết nối hội/nhóm hỗ trợ người khuyết tật',
    category: 'organization',
    description:
      'Gợi ý kênh liên hệ cộng đồng để hỏi kinh nghiệm tiếp cận dịch vụ, học tập, việc làm và sinh hoạt độc lập.',
    targetUsers: ['visual', 'mobility', 'hearing', 'caregiver'],
    district: 'Thành phố Huế',
    address: 'Dữ liệu mẫu - cần cập nhật theo nguồn địa phương',
    phone: '0234 111 111',
    verificationStatus: 'sample',
    accessibilityNotes:
      'Dữ liệu cần xác minh. Khi dùng thật cần thay bằng thông tin từ hội/cơ quan địa phương đã xác minh.',
  },
  {
    id: 'tu-van-hoc-tap-tiep-can',
    name: 'Tư vấn học tập và tài liệu dễ tiếp cận',
    category: 'education',
    description:
      'Hỗ trợ tìm tài liệu đọc được bằng screen reader, hướng dẫn yêu cầu định dạng tài liệu và điều chỉnh học tập hợp lý.',
    targetUsers: ['visual', 'cognitive', 'caregiver'],
    district: 'Thành phố Huế',
    address: 'Dữ liệu mẫu - cơ sở giáo dục hoặc nhóm tình nguyện',
    phone: '0234 222 222',
    email: 'hotrohoctap@example.org',
    verificationStatus: 'sample',
    accessibilityNotes:
      'Ưu tiên tài liệu HTML, DOCX có heading đúng, PDF có text layer và mô tả hình ảnh.',
  },
  {
    id: 'tu-van-viec-lam-phu-hop',
    name: 'Tư vấn việc làm phù hợp',
    category: 'employment',
    description:
      'Gợi ý chuẩn bị hồ sơ, trao đổi nhu cầu hỗ trợ khi phỏng vấn và tìm môi trường làm việc phù hợp với người khiếm thị/nhìn kém.',
    targetUsers: ['visual', 'mobility'],
    district: 'Thành phố Huế',
    address: 'Dữ liệu mẫu - trung tâm việc làm hoặc tổ chức hỗ trợ',
    phone: '0234 333 333',
    email: 'vieclam@example.org',
    verificationStatus: 'sample',
    accessibilityNotes:
      'Người dùng có thể yêu cầu thông tin tuyển dụng ở định dạng text, không chỉ poster ảnh.',
  },
  {
    id: 'ho-tro-y-te-phuc-hoi',
    name: 'Hướng dẫn tiếp cận y tế và phục hồi chức năng',
    category: 'health',
    description:
      'Tổng hợp bước chuẩn bị khi đi khám, cách ghi chú nhu cầu hỗ trợ và thông tin cần hỏi nhân viên y tế.',
    targetUsers: ['visual', 'mobility', 'caregiver'],
    district: 'Thành phố Huế',
    address: 'Dữ liệu mẫu - cơ sở y tế địa phương',
    phone: '0234 444 444',
    verificationStatus: 'sample',
    accessibilityNotes:
      'Nên có bản ghi chú nhu cầu hỗ trợ, số điện thoại người liên hệ và mô tả thuốc/tài liệu ở dạng đọc được.',
  },
  {
    id: 'yeu-cau-ho-tro-khan',
    name: 'Gửi yêu cầu hỗ trợ khẩn hoặc cần phản hồi sớm',
    category: 'urgent',
    description:
      'Luồng cục bộ giúp người dùng mô tả nhu cầu cần hỗ trợ nhanh và nhận mã yêu cầu để theo dõi nội bộ.',
    targetUsers: ['visual', 'mobility', 'caregiver'],
    district: 'Toàn thành phố Huế',
    address: 'Form cục bộ trong hệ thống',
    phone: 'Không áp dụng trong bản dự thi',
    verificationStatus: 'sample',
    accessibilityNotes:
      'Form không gửi dữ liệu thật. Người dùng cần gọi cơ quan chức năng trong tình huống khẩn cấp thực tế.',
  },
]

export const organizations: Organization[] = [
  {
    id: 'ubnd-dia-phuong',
    name: 'UBND phường/xã nơi cư trú',
    role: 'Tiếp nhận và hướng dẫn thủ tục trợ giúp xã hội tại địa phương.',
    contact: 'Liên hệ trực tiếp bộ phận một cửa nơi cư trú.',
    verificationStatus: 'verified',
  },
  {
    id: 'cong-thong-tin-hue',
    name: 'Cổng thông tin điện tử thành phố Huế',
    role: 'Nguồn tra cứu thông tin địa phương và thông báo hành chính.',
    contact: 'https://hue.gov.vn/',
    verificationStatus: 'verified',
  },
  {
    id: 'nhom-tinh-nguyen-mau',
    name: 'Nhóm tình nguyện hỗ trợ tiếp cận số',
    role: 'Dữ liệu mẫu cho luồng kết nối cộng đồng và hỗ trợ đọc tài liệu.',
    contact: 'sample@example.org',
    verificationStatus: 'sample',
  },
]

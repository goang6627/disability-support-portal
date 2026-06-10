import type { Policy } from './types'

export const policies: Policy[] = [
  {
    id: 'luat-nguoi-khuyet-tat-2010',
    title: 'Luật Người khuyết tật 2010',
    category: 'Quyền và nguyên tắc hỗ trợ',
    summary:
      'Xác lập quyền của người khuyết tật trong chăm sóc sức khỏe, giáo dục, dạy nghề, việc làm, văn hóa, thể thao và tiếp cận công trình, giao thông, công nghệ thông tin.',
    eligibleGroups: [
      'Người khuyết tật được xác định theo quy định pháp luật',
      'Gia đình, người chăm sóc và tổ chức hỗ trợ người khuyết tật',
    ],
    requiredDocuments: [
      'Giấy xác nhận khuyết tật khi thực hiện thủ tục cụ thể',
      'Giấy tờ cá nhân theo yêu cầu của cơ quan tiếp nhận',
    ],
    howToApply:
      'Liên hệ UBND cấp xã/phường hoặc cơ quan chuyên môn tại địa phương để được hướng dẫn theo từng thủ tục.',
    sourceName: 'Thư viện Pháp luật - Luật Người khuyết tật 2010',
    sourceUrl:
      'https://thuvienphapluat.vn/van-ban/Van-hoa-Xa-hoi/Luat-nguoi-khuyet-tat-2010-108081.aspx',
    effectiveDate: '2011-01-01',
    lastReviewed: '2026-06-11',
    verificationStatus: 'verified',
    disclaimer:
      'Bản tóm tắt không thay thế văn bản pháp luật hoặc hướng dẫn của cơ quan có thẩm quyền.',
  },
  {
    id: 'nghi-dinh-20-2021',
    title: 'Chính sách trợ giúp xã hội theo Nghị định 20/2021/NĐ-CP',
    category: 'Trợ giúp xã hội',
    summary:
      'Quy định chính sách trợ giúp xã hội đối với đối tượng bảo trợ xã hội, bao gồm một số nhóm người khuyết tật đủ điều kiện hưởng trợ cấp và hỗ trợ liên quan.',
    eligibleGroups: [
      'Người khuyết tật thuộc nhóm đối tượng bảo trợ xã hội theo quy định',
      'Người cần hỗ trợ chăm sóc xã hội tại cộng đồng hoặc cơ sở trợ giúp xã hội',
    ],
    requiredDocuments: [
      'Tờ khai đề nghị trợ giúp xã hội theo mẫu địa phương',
      'Giấy xác nhận khuyết tật hoặc hồ sơ chứng minh điều kiện liên quan',
      'Giấy tờ cá nhân và thông tin cư trú theo hướng dẫn nơi tiếp nhận',
    ],
    howToApply:
      'Nộp hồ sơ tại UBND cấp xã/phường nơi cư trú để được kiểm tra điều kiện và chuyển xử lý theo quy trình.',
    sourceName: 'Cổng Thông tin điện tử Chính phủ - Nghị định 20/2021/NĐ-CP',
    sourceUrl: 'https://vanban.chinhphu.vn/?docid=202811&pageid=27160',
    effectiveDate: '2021-07-01',
    lastReviewed: '2026-06-11',
    verificationStatus: 'verified',
    disclaimer:
      'Mức hưởng và điều kiện cụ thể cần xác nhận với UBND cấp xã/phường hoặc cơ quan lao động - thương binh và xã hội.',
  },
  {
    id: 'chuong-trinh-tro-giup-2021-2030',
    title: 'Chương trình trợ giúp người khuyết tật giai đoạn 2021-2030',
    category: 'Chương trình quốc gia',
    summary:
      'Định hướng trợ giúp người khuyết tật giai đoạn 2021-2030, gồm phục hồi chức năng, giáo dục, dạy nghề, việc làm, tiếp cận công trình, giao thông và công nghệ thông tin.',
    eligibleGroups: [
      'Người khuyết tật trên phạm vi toàn quốc',
      'Cơ quan, tổ chức triển khai hoạt động trợ giúp người khuyết tật',
    ],
    requiredDocuments: [
      'Tùy theo chương trình, dự án hoặc thủ tục cụ thể tại địa phương',
    ],
    howToApply:
      'Theo dõi thông báo của cơ quan địa phương, hội người khuyết tật hoặc đơn vị triển khai chương trình để đăng ký hoạt động phù hợp.',
    sourceName: 'Cổng Thông tin điện tử Chính phủ - Quyết định 1190/QĐ-TTg',
    sourceUrl: 'https://vanban.chinhphu.vn/default.aspx?docid=200676&pageid=27160',
    effectiveDate: '2020-08-05',
    lastReviewed: '2026-06-11',
    verificationStatus: 'verified',
    disclaimer:
      'Đây là chương trình định hướng; quyền lợi cụ thể phụ thuộc kế hoạch và thủ tục triển khai tại từng địa phương.',
  },
]

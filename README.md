# Cổng Thông Tin Hỗ Trợ Người Khuyết Tật

Prototype web dự thi theo chuẩn WCAG 2.2, ưu tiên người khiếm thị/nhìn kém cần tìm thông tin hỗ trợ, chính sách, tổ chức và gửi yêu cầu trợ giúp.

## Đối tượng

- Primary audience: người khiếm thị/nhìn kém.
- Secondary audience: người khuyết tật vận động, người chăm sóc, sinh viên tình nguyện, tổ chức hỗ trợ.

## Stack

- React + Vite + TypeScript
- React Router
- CSS variables/CSS thuần
- ESLint + eslint-plugin-jsx-a11y
- Playwright + axe-core

## Chạy local

```bash
npm install
npm run dev
```

## Kiểm tra

```bash
npm run typecheck
npm run lint
npm run build
npm run test:a11y
```

Nếu chạy Playwright lần đầu trên máy mới:

```bash
npx playwright install chromium
```

## Deploy Vercel

- Build command: `npm run build`
- Output directory: `dist`
- Production branch: `main`

## Ghi chú dữ liệu

Các chính sách hỗ trợ phải có `sourceUrl`, `sourceName`, `lastReviewed` và trạng thái kiểm chứng. Bản prototype không gửi dữ liệu form lên server; yêu cầu demo chỉ lưu trong `localStorage`.

import { expect, test } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

const routes = [
  '/',
  '/dich-vu',
  '/dich-vu/huong-dan-tro-cap-xa-hoi',
  '/chinh-sach',
  '/chinh-sach/nghi-dinh-20-2021',
  '/tro-ly',
  '/gui-yeu-cau',
  '/tiep-can',
  '/quyen-rieng-tu',
  '/khong-ton-tai',
]

for (const route of routes) {
  test(`has no critical accessibility violations on ${route}`, async ({ page }) => {
    await page.goto(route)

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze()

    expect(results.violations).toEqual([])
  })
}

test('support request form reports errors and accepts a valid local request', async ({ page }) => {
  await page.goto('/gui-yeu-cau')
  await page.getByRole('button', { name: 'Tạo yêu cầu cục bộ' }).click()
  await expect(page.getByRole('alert')).toContainText('Cần kiểm tra lại thông tin')

  await page.getByLabel('Họ tên hoặc tên đại diện').fill('Nguyễn Văn A')
  await page.getByLabel('Thông tin liên hệ').fill('0900000000')
  await page.getByLabel('Mô tả nhu cầu hỗ trợ').fill('Tôi cần tìm thông tin về chính sách trợ cấp xã hội.')
  await page.getByLabel('Tôi hiểu dữ liệu chỉ lưu trên trình duyệt hiện tại').check()
  await page.getByRole('button', { name: 'Tạo yêu cầu cục bộ' }).click()

  await expect(page.locator('.success-panel')).toContainText('Đã tạo yêu cầu cục bộ')
})

test('internal detail navigation updates page title and content', async ({ page }) => {
  await page.goto('/dich-vu')
  await page.getByRole('link', { name: 'Xem chi tiết dịch vụ' }).first().click()

  await expect(page).toHaveTitle(/Hướng dẫn thủ tục trợ cấp xã hội/)
  await expect(page.getByRole('heading', { name: 'Ghi chú tiếp cận' })).toBeVisible()

  await page.getByRole('link', { name: 'Quay lại dịch vụ hỗ trợ' }).click()
  await expect(page).toHaveURL(/\/dich-vu$/)
})

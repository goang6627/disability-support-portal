import { expect, test } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

const routes = ['/', '/dich-vu', '/chinh-sach', '/tro-ly', '/gui-yeu-cau', '/tiep-can']

for (const route of routes) {
  test(`has no critical accessibility violations on ${route}`, async ({ page }) => {
    await page.goto(route)

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze()

    expect(results.violations).toEqual([])
  })
}

test('support request form reports errors and accepts a valid demo request', async ({ page }) => {
  await page.goto('/gui-yeu-cau')
  await page.getByRole('button', { name: 'Tạo yêu cầu demo' }).click()
  await expect(page.getByRole('alert')).toContainText('Cần kiểm tra lại thông tin')

  await page.getByLabel('Họ tên hoặc tên đại diện').fill('Nguyễn Văn A')
  await page.getByLabel('Thông tin liên hệ').fill('0900000000')
  await page.getByLabel('Mô tả nhu cầu hỗ trợ').fill('Tôi cần tìm thông tin về chính sách trợ cấp xã hội.')
  await page.getByLabel('Tôi hiểu đây là bản demo').check()
  await page.getByRole('button', { name: 'Tạo yêu cầu demo' }).click()

  await expect(page.getByRole('status')).toContainText('Đã tạo yêu cầu demo')
})

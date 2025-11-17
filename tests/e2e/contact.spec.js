const { test, expect } = require('@playwright/test')

test('Join form validates and submits', async ({ page }) => {
  await page.goto('/')
  await page.click('text=Join Now')
  await page.waitForSelector('#contact')
  // Submit empty should show validation errors
  await page.click('text=Send')
  await expect(page.locator('#err-name')).toBeVisible()
  await expect(page.locator('#err-email')).toBeVisible()
  // Fill valid data
  await page.fill('input[name="name"]', 'Jane Doe')
  await page.fill('input[name="email"]', 'jane@example.com')
  await page.fill('textarea[name="message"]', 'I would like to join the network')
  // Intercept the submission and stub response
  await page.route('https://formspree.io/f/your-form-id', route => {
    route.fulfill({ status: 200, body: 'OK' })
  })
  await page.click('text=Send')
  await expect(page.locator('.toast')).toBeVisible()
})
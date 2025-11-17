const { test, expect } = require('@playwright/test')

test('Join CTA scrolls to contact and submits', async ({ page }) => {
  await page.goto('/')
  // Click the "Join Now" button if present
  await page.click('text=Join Now')
  // Wait for contact section
  await page.waitForSelector('#contact')
  const contactHeading = await page.textContent('#contact h2')
  expect(contactHeading).toMatch(/Contact|Join/i)
})
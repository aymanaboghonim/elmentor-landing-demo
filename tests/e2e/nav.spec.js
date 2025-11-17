const { test, expect } = require('@playwright/test')

test('Menu toggle opens and i18n toggle switches direction', async ({ page }) => {
  await page.goto('/')
  // On mobile simulate smaller viewport
  await page.setViewportSize({ width: 480, height: 800 })
  // Menu should not be visible initially
  const menu = await page.locator('#main-menu')
  await expect(menu).not.toBeVisible()
  // Click burger
  await page.click('.menu-toggle')
  await expect(menu).toBeVisible()
  // Toggle language
  const langButton = page.locator('.lang-toggle button')
  await expect(langButton).toBeVisible()
  await langButton.click()
  // Document dir should change
  await expect(page.locator('html')).toHaveAttribute('dir', 'rtl')
})
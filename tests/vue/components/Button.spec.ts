import { expect, test } from '@playwright/test'

test('Button renders correctly in Storybook', async ({ page }) => {
  // Navigate to the Storybook iframe for the Primary button story
  // Storybook URL structure: /iframe.html?id=components-button--primary&viewMode=story
  await page.goto('/iframe.html?id=components-button--primary&viewMode=story')

  const button = page.locator('button', { hasText: 'Button' })
  await expect(button).toBeVisible()

  // Check if primary color is applied (using the variable we defined or the class)
  // Since we use utility classes, we might check for computed style or class presence
  // Note: Tailwind v4 compiles down, so checking exact class name is safer if we trust the output
  await expect(button).toHaveClass(/bg-primary/)
})

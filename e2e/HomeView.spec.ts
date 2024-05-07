import { test, expect } from '@playwright/test'

test('slideshow navigation', async ({ page }) => {
  await page.goto('/')

  const imageSlider = page.locator('.slideshow-container')

  await expect(imageSlider.getByRole('img', { name: 'image 1' })).toBeVisible()
  await expect(imageSlider.getByRole('img', { name: 'image 2' })).toBeHidden()

  // click the next slide button
  await imageSlider.locator('.next').click()

  await expect(imageSlider.getByRole('img', { name: 'image 2' })).toBeVisible()
  await expect(imageSlider.getByRole('img', { name: 'image 1' })).toBeHidden()

  // click the previous slide button
  await imageSlider.locator('.prev').click()

  await expect(imageSlider.getByRole('img', { name: 'image 1' })).toBeVisible()
  await expect(imageSlider.getByRole('img', { name: 'image 2' })).toBeHidden()
})

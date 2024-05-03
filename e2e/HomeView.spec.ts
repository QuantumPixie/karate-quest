import { test, expect } from '@playwright/test'
import { PlaywrightTestArgs } from '@playwright/test'
import { toHaveAttribute } from 'playwright/test-expect/matchers' // Importing toHaveAttribute explicitly

test('slideshow navigation', async ({ page }: PlaywrightTestArgs) => {
  await page.goto('/')

  // Get the initial image src
  const initialSrc = await page.locator('.slide img').getAttribute('src')

  // Click the next slide button
  await page.click('.next')

  // Get the new image src after clicking next
  const newSrc = await page.locator('.slide img').getAttribute('src')

  // Assert that the new image src is different from the initial one
  expect(newSrc).not.toEqual(initialSrc)

  // Click the previous slide button
  await page.click('.prev')

  // Get the image src after clicking previous
  const prevSrc = await page.locator('.slide img').getAttribute('src')

  // Assert that the new image src is the same as the initial one
  expect(prevSrc).toEqual(initialSrc)

  // Example usage of toHaveAttribute matcher
  await expect(page.locator('.slide img')).toHaveAttribute('src', newSrc) // Asserting the src attribute of the image
}).extend(expect.with(toHaveAttribute))

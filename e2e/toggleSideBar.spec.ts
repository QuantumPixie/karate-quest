import { test, expect } from '@playwright/test'

test('menu toggles when button is clicked', async ({ page }) => {
  // go to page where the component is rendered
  await page.goto('http://localhost:8080')

  // get menu button element
  const menuToggleButton = await page.$('.menu-toggle')

  // click  menu button to toggle menu
  await menuToggleButton?.click()

  // wait for menu animation to complete
  await page.waitForTimeout(200)

  // check if  menu is expanded
  const isExpanded = await page.$eval('aside', (element) =>
    element.classList.contains('is-expanded')
  )
  expect(isExpanded).toBeTruthy()

  // click menu button again to toggle menu back
  await menuToggleButton?.click()

  // wait for menu animation to complete
  await page.waitForTimeout(200)

  // check if menu is collapsed
  const isCollapsed = await page.$eval(
    'aside',
    (element) => !element.classList.contains('is-expanded')
  )
  expect(isCollapsed).toBeTruthy()
})

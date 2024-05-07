import { test, expect } from '@playwright/test'

test('menu toggles when button is clicked', async ({ page }) => {
  await page.goto('/')

  const menu = page.getByRole('navigation')
  const menuToggle = menu.getByRole('button')

  // open the menu
  await menuToggle.click()
  await expect(menu.getByText(' KarateQuest Dojo')).toBeVisible()

  // close menu
  await menuToggle.click()
  await expect(menu.getByText(' KarateQuest Dojo')).toBeHidden()
})

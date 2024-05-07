import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/karate-origins-and-principles')
})

test('Correct quiz', async ({ page }) => {
  // asnwer all 5 questions
  await page.getByLabel('Okinawa', { exact: true }).check()
  await page
    .locator('li')
    .filter({ hasText: 'Who is believed to have' })
    .getByLabel('Bodhidharma')
    .check()
  await page.getByLabel("Japanese Satsuma Clan's march").check()
  await page
    .locator('ul')
    .filter({ hasText: 'BodhidharmaKing SattoGichin' })
    .getByLabel('Gichin Funakoshi')
    .check()
  await page.getByLabel('Respect (礼儀 reigi)').check()

  // submit answers
  await page.getByRole('button', { name: 'Submit' }).click()

  const scoreText = 'Your Score: 5/5'
  const markAsCompleteText =
    /Mark this section as complete and unlock your next challenge here: Go to Fundamentals Page/

  await expect(page.getByText(scoreText)).toBeVisible()
  await expect(page.getByText(markAsCompleteText)).toBeVisible()
})

test('Incorrect quiz', async ({ page }) => {
  // asnwer all 5 questions
  await page.getByRole('radio', { name: 'Japan', exact: true }).check()
  await page
    .locator('li')
    .filter({ hasText: 'Who is believed to have' })
    .getByLabel('Gichin Funakoshi')
    .check()
  await page.getByLabel("Japanese Satsuma Clan's march").check()
  await page
    .locator('ul')
    .filter({ hasText: 'BodhidharmaKing SattoGichin' })
    .getByLabel('Bodhidharma')
    .check()
  await page.getByLabel('Respect (礼儀 reigi)').check()

  // submit answers
  await page.getByRole('button', { name: 'Submit' }).click()

  const scoreText = 'Your Score: 2/5'
  const incompleteQuizText =
    /Oops! Looks like you didn't answer all questions correctly. Please click on redo the quiz and try again./

  await expect(page.getByText(scoreText)).toBeVisible()
  await expect(page.getByText(incompleteQuizText)).toBeVisible()

  await page.getByRole('button', { name: 'Redo Quiz' }).click()

  await expect(page.getByText(scoreText)).toBeHidden()
  await expect(page.getByText(incompleteQuizText)).toBeHidden()
})

test('Incomplete quiz', async ({ page }) => {
  await page.getByRole('radio', { name: 'Japan', exact: true }).click()
  await page.getByRole('button', { name: 'Submit' }).click()

  const scoreText = 'Your Score: 0/5'
  const incompleteQuizText =
    /Oops! Looks like you didn't answer all questions correctly. Please click on redo the quiz and try again./

  await expect(page.getByText(scoreText)).toBeVisible()
  await expect(page.getByText(incompleteQuizText)).toBeVisible()

  await page.getByRole('button', { name: 'Redo Quiz' }).click()

  await expect(page.getByText(scoreText)).toBeHidden()
  await expect(page.getByText(incompleteQuizText)).toBeHidden()
  await expect(page.getByRole('radio', { name: 'Japan', exact: true })).not.toBeChecked()
})

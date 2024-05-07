import { describe, expect, test } from 'vitest'
import { createPinia } from 'pinia'
import { useCompletedQuizzesStore } from '@/stores/CompletedQuizzesStore'

describe('useCompletedQuizzesStore', () => {
  test('adds completed quiz to the store', async () => {
    const pinia = createPinia()
    const store = useCompletedQuizzesStore(pinia)

    // Ensure initial state
    expect(store.completedQuizzes.values).toEqual([])

    // Add a completed quiz
    store.addCompletedQuiz('quiz1')
    store.addCompletedQuiz('quiz2')

    // Check if quiz1 and quiz2 were added
    expect(store.completedQuizzes.values).toContain('quiz1')
    expect(store.completedQuizzes.values).toContain('quiz2')
  })

  test('saves completed quizzes to local storage', async () => {
    const pinia = createPinia()
    const store = useCompletedQuizzesStore(pinia)

    // Add a completed quiz
    store.addCompletedQuiz('quiz2')

    // Check if completed quizzes are saved to local storage
    const storedData = localStorage.getItem('completedQuizzes')
    expect(storedData).not.toBeNull()

    // Convert stored data back to array
    const completedQuizzes = JSON.parse(storedData!)
    expect(completedQuizzes).toContain('quiz2')
  })
})

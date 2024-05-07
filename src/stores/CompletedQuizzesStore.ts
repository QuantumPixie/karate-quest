import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import type { Ref } from 'vue'

interface CompletedQuizzesStore {
  completedQuizzes: Ref<string[]>
  addCompletedQuiz: (quizName: string) => void
}

export const useCompletedQuizzesStore = defineStore('completedQuizzes', () => {
  // Initialize completedQuizzes with data from local storage
  const storedData: string | null = localStorage.getItem('completedQuizzes')
  const initialCompletedQuizzes: string[] = storedData ? JSON.parse(storedData) : []

  const completedQuizzes: Ref<string[]> = ref(initialCompletedQuizzes)

  // Watch for changes in completedQuizzes and update local storage accordingly
  watch(completedQuizzes, () => {
    saveToLocalStorage()
  })

  function addCompletedQuiz(quizName: string) {
    // Ensure completedQuizzes is always treated as an array
    completedQuizzes.value = [...completedQuizzes.value, quizName]
  }

  function saveToLocalStorage() {
    localStorage.setItem('completedQuizzes', JSON.stringify(completedQuizzes.value))
  }

  return { addCompletedQuiz, completedQuizzes } as CompletedQuizzesStore
})

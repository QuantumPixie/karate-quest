import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import type { Ref } from 'vue'

interface CompletedSectionsStore {
  completedSections: Ref<string[]>
}

export const useCompletedSectionsStore = defineStore('completedSections', () => {
  // Initialize completedSections with data from local storage
  const storedData: string | null = localStorage.getItem('completedSections')
  const initialCompletedSections: string[] = storedData ? JSON.parse(storedData) : []
  console.log('Initial completed sections:', initialCompletedSections)

  const completedSections: Ref<string[]> = ref(initialCompletedSections)

  // Watch for changes in completedSections and update local storage accordingly
  watch(completedSections, (newValue) => {
    saveToLocalStorage()
    console.log('Updated completed sections stored in local storage:', newValue)
  })

  // Function to add a completed section
  function addCompletedSection(sectionName: string) {
    console.log('>>>> section name', sectionName)
    // Ensure completedSections is always treated as an array
    completedSections.value = [...completedSections.value, sectionName]
  }

  function saveToLocalStorage() {
    localStorage.setItem('completedSections', JSON.stringify(completedSections.value))
  }

  return { addCompletedSection, completedSections } as CompletedSectionsStore
})

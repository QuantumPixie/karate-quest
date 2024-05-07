import { describe, expect, test } from 'vitest'
import { createPinia } from 'pinia'
import { useCompletedSectionsStore } from '@/stores/CompletedSectionsStore'

describe('useCompletedSectionsStore', () => {
  test('adds completed section to the store', async () => {
    const pinia = createPinia()
    const store = useCompletedSectionsStore(pinia)

    // Ensure initial state
    expect(store.completedSections).toEqual([])

    // Add a completed section
    store.addCompletedSection('section1')
    store.addCompletedSection('section2')

    // Check if section1 and section2 were added
    expect(store.completedSections).toContain('section1')
    expect(store.completedSections).toContain('section2')
  })

  test('saves completed sections to local storage', async () => {
    const pinia = createPinia()
    const store = useCompletedSectionsStore(pinia)

    // Add a completed section
    store.addCompletedSection('section2')

    // Check if completed sections are saved to local storage
    const storedData = localStorage.getItem('completedSections')
    expect(storedData).not.toBeNull()

    // Convert stored data back to array
    const completedSections = JSON.parse(storedData!)
    expect(completedSections).toContain('section2')
  })
})

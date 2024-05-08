<script setup lang="ts">
import { useCompletedSectionsStore } from '@/stores/CompletedSectionsStore'
import { useCompletedQuizzesStore } from '@/stores/CompletedQuizzesStore'

interface Section {
  name: string
  displayName: string
  description: string
}

const completedSectionsStore = useCompletedSectionsStore()
const completedQuizzesStore = useCompletedQuizzesStore()

const requiredSections: Section[] = [
  {
    name: 'karate-origins-and-principles',
    displayName: 'Karate Origins and Principles',
    description: 'Here you can learn about the origins of karate and its fundamental principles.'
  },
  {
    name: 'elements-of-karate',
    displayName: 'Elements of Karate',
    description: 'Understand the elements of Karate: Kihon, Kata, and Kumite.'
  },
  {
    name: 'karate-basic-stances',
    displayName: 'Karate Basic Stances',
    description: 'Everything you need to know about basic Karate stances.'
  },
  {
    name: 'karate-basic-blocks',
    displayName: 'Karate Basic Blocks',
    description: 'Everything you need to know about basic Karate blocks.'
  },
  {
    name: 'karate-basic-punches',
    displayName: 'Karate Basic Punches',
    description: 'Everything you need to know about basic Karate punches.'
  }
]

const isSectionCompleted = (section: string): boolean =>
  completedSectionsStore.completedSections.includes(section)

const completeSection = (section: string): void => {
  // Check if the quiz is completed and all answers are correct
  if (completedQuizzesStore.completedQuizzes.indexOf(section) > -1) {
    completedSectionsStore.addCompletedSection(section)
  } else {
    alert(
      'Please complete the quiz at the end of the section  successfully before marking this section as complete.'
    )
  }
}

const isSectionDisabled = (section: string): boolean => {
  const index = requiredSections.findIndex(
    (requiredSection) => requiredSection.displayName === section
  )

  return (
    index > 0 &&
    !completedSectionsStore.completedSections.includes(requiredSections[index - 1].displayName)
  )
}
</script>

<template>
  <div class="container">
    <div
      v-for="section in requiredSections"
      :key="section.name"
      class="card required-section"
      :style="{ opacity: isSectionDisabled(section.displayName) ? 0.3 : 1 }"
    >
      <router-link
        :to="`/${section.name}`"
        class="link"
        :style="{
          'pointer-events': isSectionDisabled(section.displayName) ? 'none' : 'auto'
        }"
      >
        <h2>{{ section.displayName }}</h2>
        <p v-if="section.description">
          {{ section.description }}
        </p>
      </router-link>

      <div class="button-container">
        <button
          v-if="isSectionCompleted(section.displayName)"
          class="complete-button completed"
          :disabled="isSectionCompleted(section.displayName)"
          aria-disabled="true"
        >
          Completed
        </button>

        <img
          v-else-if="isSectionDisabled(section.displayName)"
          class="lock-icon"
          src="@/assets/lock_1828471.png"
          alt="Lock Icon"
        />

        <button v-else class="complete-button" @click="completeSection(section.displayName)">
          Mark as complete
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 3rem;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.complete-button {
  margin-left: 1rem;
  align-self: center;
  border: 2px solid #4ade80;
  border-radius: 8px;
  background-color: black;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
}

.complete-button.completed {
  background-color: #4ade80;
  border: 2px solid black;
  color: black;
}
.complete-button.disabled {
  opacity: 0.5;
}

.card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: inherit;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding: 20px;
  text-decoration: none;
}

.link {
  text-decoration: none;
  color: inherit;
  pointer-events: none;
}
.lock-icon {
  width: 50px;
  height: 50px;
}

@media screen and (max-width: 768px) {
  .container {
    padding: 1rem;
    max-width: 100%;
  }

  .card {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
  }
  .complete-button {
    margin-top: 2rem;
    margin-left: 2rem;
    align-self: center;
    border: 2px solid #4ade80;
    border-radius: 8px;
    background-color: black;
    color: white;
    font-size: 16px;
    padding: 10px 20px;
    margin-top: 2rem;
  }

  .button-container {
    flex-direction: column-reverse;
    align-items: flex-end;
  }
  .p {
    text-align: left;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
  .lock-icon {
    margin-left: 5rem;
    margin-top: 2rem;
  }
}
.complete-button.completed {
  margin-top: 2rem;
  margin-left: 3rem;
}
</style>

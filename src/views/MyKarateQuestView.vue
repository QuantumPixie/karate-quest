<script setup lang="ts">
import { ref, watch } from 'vue'
import type { Ref } from 'vue'
import { useCompletedSectionsStore } from '@/stores/CompletedSectionsStore'

const completedSectionsStore = useCompletedSectionsStore()
const completedSections = completedSectionsStore.completedSections

// Hardcoded total number of sections
const totalSections: Ref<number> = ref(5)

// Count the number of completed sections
const completedSectionsCount: Ref<number> = ref(completedSections.length)

// Calculate the progress percentage
const progressPercentage: Ref<number> = ref<number>(
  totalSections.value === 0 ? 0 : (completedSectionsCount.value / totalSections.value) * 100
)

// Watch for changes in completedSections and recalculate progress
watch(completedSections, (newCompletedSections: string[]) => {
  completedSectionsCount.value = newCompletedSections.length
  progressPercentage.value =
    totalSections.value === 0 ? 0 : (completedSectionsCount.value / totalSections.value) * 100
})
</script>

<template>
  <main class="my-quest">
    <div>
      <h1>My KarateQuest</h1>
      <h2>My Quest Progress</h2>
      <div class="progress-container">
        <div class="progress-bar">
          <div class="progress-outline"></div>
          <div class="progress" :style="{ width: progressPercentage + '%' }"></div>
          <div class="progress-label">{{ Math.round(progressPercentage) }} %</div>
        </div>
      </div>
      <h2>Completed Quests</h2>
      <ul>
        <li v-for="(section, index) in completedSections" :key="index">
          <div class="completed-section">
            <img src="@/assets/star_3115215.png" alt="Section Icon" class="star-icon" />
            <span class="section-name">{{ section }}</span>
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>

<style scoped>
.my-quest {
  padding: 4rem;
  max-width: 71%;
}
h2 {
  margin-top: 4rem;
}
.completed-section {
  display: flex;
  align-items: flex-start;
  margin: 1rem;
  color: #666;
  font-size: bolder;
}
li {
  list-style: none;
}

.star-icon {
  width: 40px;
  height: 40px;
  margin-right: 0.5rem;
  margin-top: 0.7rem;
}

.section-name {
  font-size: 1.5rem;
  margin-top: 1.1rem;
}

ul {
  font-size: 1.1rem;
  margin-top: 2rem;
  margin-bottom: 4rem;
}

.progress-bar {
  margin-top: 2rem;
  position: relative;
  width: 100%;
  height: 30px;
  border-radius: 15px;
}

.progress-outline {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  border: 2px solid black;
  box-sizing: border-box;
}

.progress {
  height: 100%;
  background-color: #4ade80;
  border-radius: 15px;
}

.progress-label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  font-weight: bold;
}
@media screen and (max-width: 768px) {
  .my-quest {
    padding: 1rem;
    max-width: 85%;
  }

  h2 {
    margin-top: 2rem;
    font-size: 24px;
  }

  .completed-section {
    margin: 0.5rem;
  }

  .star-icon {
    width: 30px;
    height: 30px;
    margin-right: 0.3rem;
    margin-top: 0.5rem;
  }

  .section-name {
    font-size: 1.2rem;
    margin-top: 0.7rem;
  }

  ul {
    font-size: 1rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  .progress-bar {
    margin-top: 2rem;
    height: 20px;
  }

  .progress-outline {
    border-radius: 10px;
    border-width: 1px;
  }

  .progress {
    border-radius: 10px;
  }

  .progress-label {
    font-size: 14px;
  }
}
</style>

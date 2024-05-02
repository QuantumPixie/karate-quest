<script setup lang="ts">
import { ref, watch } from 'vue'
import type { Ref } from 'vue'
import { useCompletedSectionsStore } from '@/stores/CompletedSectionsStore'

const completedSectionsStore = useCompletedSectionsStore()
const completedSections = completedSectionsStore.completedSections

// Count the number of completed sections
const completedSectionsCount: Ref<number> = ref(completedSections.length)

// Calculate the progress percentage
const progressPercentage: Ref<number> = ref<number>(
  completedSections.length === 0 ? 0 : (completedSectionsCount.value / 5) * 100
)

// Watch for changes in completedSections and recalculate progress
watch(completedSections, (newCompletedSections: string[]) => {
  completedSectionsCount.value = newCompletedSections.length
  progressPercentage.value =
    completedSections.length === 0 ? 0 : (completedSectionsCount.value / 5) * 100
})
</script>

<template>
  <main class="my-quest">
    <div class="header">
      <h1>My KarateQuest</h1>
      <img src="@/assets/ancient-scroll_4191666.png" alt="Scroll" class="icon" />
    </div>

    <h2>My Quest Progress</h2>
    <div class="progress-container">
      <div class="progress-bar">
        <div class="progress-outline"></div>
        <div class="progress" :style="{ width: progressPercentage + '%' }"></div>
        <div class="progress-label">{{ Math.round(progressPercentage) }} %</div>
      </div>
    </div>
    <div class="completed-quests-card">
      <div class="card">
        <div class="card-header">
          <h2>My Completed Quests</h2>
        </div>
        <div class="card-body">
          <div v-if="completedSections.length > 0" class="fundamentals-card">
            <h3>Fundamentals</h3>
            <div class="fundamentals-sections">
              <div v-for="(section, index) in completedSections" :key="index" class="section-card">
                <img src="@/assets/star_3115215.png" alt="Section Icon" class="star-icon" />
                <span class="section-name">{{ section }}</span>
              </div>
            </div>
          </div>
          <div v-else class="no-sections">No sections completed yet</div>
        </div>
      </div>
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
  margin-bottom: -1rem;
  text-align: center;
}

.completed-quests-card {
  margin-bottom: 2rem;
}

.card {
  border: 2px solid var(--dark);
  border-radius: 8px;
  overflow: hidden;
  margin-top: 4rem;
  text-align: left;
  background-color: #fff;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background-color: var(--dark);
}

.card-header h2,
.card-header h3 {
  margin: 0;
  color: white;
}
.icon {
  width: 60px;
  height: 60px;
  margin-left: 1rem;
}

.no-sections {
  margin: 2rem;
  text-align: center;
}

.star-icon {
  width: 30px;
  height: 30px;
  margin-right: 0.5rem;
}
.section-card {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
}

.section-name {
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
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
  border: 2px solid #4ade80;
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

.fundamentals-card {
  background-color: var(--dark);
  border: 12px solid white;
  padding: 1rem;
  border-radius: 23px;
  margin-top: 1rem;
}

.fundamentals-card h3 {
  font-size: 1.5em;
  margin: 1rem;
  color: white;
  padding-left: 2.5rem;
  text-align: center;
}

.fundamentals-sections {
  padding: 1rem;
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

  .star-icon {
    width: 25px;
    height: 25px;
    margin-right: 0.3rem;
  }

  .section-name {
    font-size: 1rem;
    margin-top: 0.3rem;
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

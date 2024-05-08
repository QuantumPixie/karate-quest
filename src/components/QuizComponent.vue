<script setup lang="ts">
import { useCompletedQuizzesStore } from '@/stores/CompletedQuizzesStore'
import { computed, defineProps, ref, watch } from 'vue'
import { RouterLink } from 'vue-router'

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: string
  selectedAnswer: string | null
}

// props for the component
const { questions, quizName } = defineProps({
  questions: {
    type: Array as () => Array<Question>,
    required: true
  },
  quizName: {
    type: String as () => string,
    required: true
  }
})

const completedQuizzesStore = useCompletedQuizzesStore()

// reactive variables
const quizCompleted = ref<boolean>(false)
const totalQuestions = computed<number>(() => questions.length)
const score = ref<number>(0)

const selectedAnswer = ref({})

// watch for changes in selectedAnswer to determine if the quiz is completed
watch(selectedAnswer, () => {
  const answeredQuestions = questions.filter((question) => question.selectedAnswer)
  quizCompleted.value = answeredQuestions.length === totalQuestions.value
})

const checkAnswers = (): void => {
  if (quizCompleted.value) return

  questions.forEach((question) => {
    if (question.selectedAnswer === question.correctAnswer) {
      score.value++
    }
  })

  // if user scored full marks, mark quiz as completed and add to completed quizzes store
  if (score.value === totalQuestions.value) {
    quizCompleted.value = true
    completedQuizzesStore.addCompletedQuiz(quizName)
  }
}

const resetQuiz = (): void => {
  score.value = 0
  quizCompleted.value = false
  questions.forEach((question) => {
    question.selectedAnswer = null
  })
}
</script>

<template>
  <main class="quiz">
    <div v-if="questions.length > 0">
      <h2>Quiz</h2>
      <p>
        Welcome, young warrior, to the KarateQuiz. Here, you will test your knowledge and wisdom.
        <br />But heed my words: only by answering all questions correctly can you truly master this
        section.
      </p>
      <ol>
        <li v-for="(question, index) in questions" :key="index">
          <h4>{{ question.question }}</h4>

          <ul>
            <li v-for="(option, i) in question.options" :key="i">
              <input
                :id="`q${question.id}-o${i + 1}`"
                :name="`q${question.id}`"
                :value="option"
                type="radio"
                :checked="question.selectedAnswer === option"
                @change="question.selectedAnswer = option"
              />
              <label :for="`q${question.id}-o${i + 1}`" class="question-label">{{ option }}</label>
            </li>
          </ul>
        </li>
      </ol>

      <button class="submit-button" @click="checkAnswers">Submit</button>

      <div class="score" v-if="quizCompleted">
        <p>Your Score: {{ score }}/{{ totalQuestions }}</p>
      </div>
    </div>
    <div v-if="quizCompleted">
      <div v-if="score === totalQuestions">
        <p>
          Congratulations! <br />
          You've answered all questions correctly. <br />
          Mark this section as complete and unlock your next challenge here:
          <router-link class="button" to="/fundamentals">Go back to Fundamentals Page</router-link>
        </p>
      </div>
      <div v-else>
        <p>
          Oops! Looks like you didn't answer all questions correctly. Please click on redo the quiz
          and try again.
        </p>
        <button class="redo-quiz-button" @click="resetQuiz">Redo Quiz</button>
      </div>
    </div>
  </main>
</template>

<style scoped>
.button-container {
  margin-top: 1.6rem;
  margin-bottom: 1rem;
  display: flex;
  flex-wrap: inherit;
  justify-content: normal;
}
button {
  margin: 5px;
  border: 2px solid black;
  border-radius: 8px;
  color: black;
  font-size: 16px;
  padding: 10px 20px;
}
button.selected {
  background-color: #4ade80;
  color: white;
}
h4 {
  margin-top: 1.7rem;
}
li {
  margin-top: 1rem;
  list-style-type: none;
}
ol {
  margin-top: 1rem;
}
next-section-link {
  margin-top: 1rem;
}
ul {
  margin: 1rem;
}
.submit-button {
  margin-top: 2rem;
  border: 2px solid #4ade80;
  border-radius: 8px;
  background-color: black;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
}

.submit-button:disabled {
  background-color: grey;
  cursor: not-allowed;
}

.submit-button.submitted {
  background-color: #4ade80;
  border: 2px solid black;
  color: black;
}

.question-label {
  margin-left: 1rem;
}

.quiz {
  font-size: 1.2rem;
  padding: 0;
}
.redo-quiz-button {
  margin-top: 20px;
  border: 2px solid #4ade80;
  border-radius: 8px;
  background-color: #4ade80;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
}
@media screen and (max-width: 768px) {
  .submit-button {
    margin-left: 4.3rem;
  }
}
</style>

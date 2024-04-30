<script setup lang="ts">
import { ref, computed } from 'vue'

const videoId = ref<string>('QcRnV8VFYVo')
const videoUrl = computed(() => `https://www.youtube.com/embed/${videoId.value}`)
</script>
<template>
  <main class="stances">
    <h1>Karate Basic Stances</h1>
    <p>
      Each stance in Karate serves a distinct purpose, contributing significantly to the
      practitioner's movement, defense, and offense strategies. These stances are not just mere
      positions; they are the core of Karate's effectiveness and efficiency, both in self-defense
      scenarios and in the biomechanics of the martial art.
    </p>
    <p>
      For students of Karate, mastering these stances is essential and should be a primary focus
      early in their training. Stances are the foundation upon which other techniques are built,
      including strikes, blocks, and kicks. Understanding and being able to properly execute these
      stances ensure that students can move with balance, stability, and power - three critical
      components in Karate. It's important to note that while the core principles of these stances
      are consistent across Karate, there can be slight variations in their execution from one style
      to another.
    </p>
    <p>
      Different schools or styles of Karate might emphasize certain aspects of a stance or modify it
      slightly to suit their specific approach to the martial art. These variations reflect the rich
      diversity and adaptability of Karate as a discipline.
    </p>
    <p>
      Watch the tutorial below to become familiar with 8 karate stances every beginner should know:
    </p>
    <div class="video-container">
      <iframe
        :src="videoUrl"
        width="560"
        height="315"
        frameborder="0"
        title="Karate stances tutorial"
        allowfullscreen
      ></iframe>
    </div>
  </main>
</template>

<style scoped>
iframe {
  position: relative;
  margin-top: 2rem;
  margin-bottom: 4rem;
}
.stances {
  padding: 4rem;
  max-width: 71%;
}
p {
  margin-top: 2rem;
  text-align: justify;
}
</style>

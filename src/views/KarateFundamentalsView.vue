<script setup lang="ts">
import IntroductionSection from './IntroductionSection.vue'
</script>

<template>
  <main class="fundamentals-page">
    <div class="header">
      <h1>Welcome to your first Quest: Fundamentals</h1>
      <img src="@/assets/jiaozi_5417172.png" alt="Karate Icon" class="icon" />
    </div>
    <p>
      Ah, young grasshopper, I see you have come seeking the ancient secrets of karate, eager to
      embark on a journey of self-discovery and butt-kicking excellence. <br />
      But before we dive into the mystical world of flying kicks and fierce chops, let me introduce
      you to the fundamentals of karate.
    </p>

    <p>
      In this dojo of digital enlightenment, you will learn not only the physical techniques of
      karate but also the virtues that underpin its practice.
    </p>
    <p>
      <b
        >Each section of your journey will unlock new knowledge and skills, but heed this wisdom: to
        progress to the next challenge, you must first conquer the quiz at the end of each
        section.</b
      >
    </p>

    <p>
      Together, we shall learn the art of the
      <b>front stance, the back stance, the horse stance, </b>and all the other funky stances that
      will make you look like a badass ninja turtle.
    </p>
    <p>
      So, grab your gi, tie on your belt, and
      <b>prepare to unleash your inner karate kid!</b>
    </p>
    <IntroductionSection />
  </main>
</template>

<style scoped>
.fundamentals-page {
  padding: 4rem;
  max-width: 71%;
}
.complete-button {
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
.header {
  display: flex;
  align-items: center;
  font-size: 36px;
  color: #333;
  margin-bottom: 10px;
}
img {
  margin-left: 2rem;
}
.header .link {
  text-decoration: none;
  color: inherit;
}
p {
  font-size: 18px;
  color: #666;
  text-align: left;
  margin-top: 1rem;
  line-height: 1.7rem;
}
</style>

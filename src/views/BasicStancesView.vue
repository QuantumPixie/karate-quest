<script setup lang="ts">
import { ref, computed } from 'vue'

const videoId = ref<string>('QcRnV8VFYVo')
const videoUrl = computed(() => `https://www.youtube.com/embed/${videoId.value}`)
</script>
<template>
  <main class="stances">
    <div class="header">
      <h1>Karate Basic Stances</h1>
      <img src="@/assets/judo_3903767.png" alt="Stance" class="icon" />
    </div>
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
    <div class="stance-container">
      <div class="stance-description">
        <h2>Zenkutsu-dachi (Front stance)</h2>
        <p>
          This is the most practiced shotokan stance and is used extensively in most Shotokan karate
          kata. One of the most common mistakes is when karateka push the front knee outwards, the
          knee should remain straight forward and once again it's the muscles that keep the knee in
          position.
        </p>
        <ol>
          <li>
            Weight distribution for front stance is 70% of your weight on your front leg and 30% on
            the back leg.
          </li>
          <li>
            Feet should be hip width to shoulder width apart and this width will decrease as you
            advance in your karate.
          </li>
          <li>
            Stance length depends on the length of your legs, but one shoulder width and a half is a
            good guide to start.
          </li>
          <li>Feet should be both facing forward as much as possible.</li>
          <li>
            There are two hip positions when first practicing front stance, they are square and side
            on.
          </li>
          <li>Roll the hips up and try not to let your hips stick out.</li>
          <li>Keep your back straight</li>
          <li>
            Try not to lock the back leg straight. Your back knee should be very slightly bent.
          </li>
          <li>
            Your front knee should be heavily bent and you should not be able to see the toes of
            your front foot.
          </li>
          <li>Try not to let the front knee fall inwards, keep it facing forward.</li>
          <li>
            If you drop a line down from your front knee it should come down just above the ball of
            the foot.
          </li>
        </ol>
      </div>
      <img src="@/assets/zenkutsu-dachi.webp" alt="Zenkutsu-Dachi" class="stance-image" />
    </div>
    <div class="stance-container">
      <div class="stance-description">
        <h2>Kokustu-dachi (Back stance)</h2>
        <p>
          This stance is used extensively in many Shotokan karate kata. Of all the shotokan karate
          stances this is the most technically challenging and hardest to master.
        </p>
        <ol>
          <li>
            Weight distribution for front stance is 70% of your weight on your front leg and 30% on
            the back leg.
          </li>
          <li>Feet should be at a 90% angle to each other and heels in line.</li>
          <li>Push the back hip forwards at a 45% angle and pul the front hip back</li>
          <li>Roll the hips up and try not to let your hips stick out.</li>
          <li>Keep your back straight.</li>
          <li>
            Your back knee should be heavily bent and if you drop a line down it should just come
            inside your back legs big toe.
          </li>
          <li>
            Try not to let the back knee fall inwards, keep it facing 90 degrees to the front and
            just above the back legs big toe.
          </li>
          <li>Your front knee should be slightly bent at all times.</li>
          <li>Try not to let the front knee fall inwards, keep it facing forward.</li>
        </ol>
      </div>
      <img src="@/assets/kokutsu-dachi.webp" alt="Kokotsu-Dachi" class="stance-image" />
    </div>
    <div class="stance-container">
      <div class="stance-description">
        <h2>Kiba-dachi (Horse riding stance)</h2>
        <p>
          This stance is used extensively in many Shotokan karate kata. Many karateka put to much
          force on pushing the knees out, the knees should bend naturally and your leg muscles
          should keep the knees in the correct position.
        </p>
        <ol>
          <li>Weight distribution for kiba dachi is weight central.</li>
          <li>
            Stance length depends on the length of your legs, but one shoulder width and a half is a
            good guide to start.
          </li>
          <li>Feet should be both facing forward as much as possible.</li>
          <li>Bend the knees naturally, do not push the knees out or let them collapse inwards.</li>
          <li>Roll the hips up and try not to let your hips stick out.</li>
          <li>Keep your back straight</li>
          <li>Tighten the inside of the thighs.</li>
          <li>If you drop a line down from either knee it should come down inside the big toe.</li>
        </ol>
      </div>
      <img src="@/assets/kiba-dachi.webp" alt="Kiba Dachi" class="stance-image" />
    </div>
  </main>
</template>

<style scoped>
iframe {
  position: relative;
  margin-top: 2rem;
  margin-bottom: 4rem;
}
ol {
  margin-top: 1rem;
}
li {
  margin-top: 0.5rem;
}
.stances {
  padding: 4rem;
  max-width: 71%;
}
p {
  margin-top: 2rem;
  text-align: justify;
}
.stance-container {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}

.stance-description {
  flex: 1;
}

.stance-image {
  width: 250px;
  margin-left: 7rem;
  margin-top: 8rem;
}
</style>

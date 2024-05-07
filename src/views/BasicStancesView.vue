<script setup lang="ts">
import { ref, computed } from 'vue'
import QuizComponent from '@/components/QuizComponent.vue'
import quizData from '@/quizData.json'

interface QuizQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: string
  selectedAnswer: string | null
}

interface QuizData {
  stances: QuizQuestion[]
}

const typedQuizData = quizData as QuizData

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
    <div class="stance-container">
      <div class="stance-description">
        <h2>Fudo-dachi or Sochin Dachi (Immovable stance)</h2>
        <p>
          This stance is used in the Shotokan karate kata Sochin. So from the side, this karate
          stance looks like half a front stance and half kiba dachi, with the body weight forward as
          in zenkutsu dachi. This is one of the strongest and most phisically demanding shotokan
          karate stances, hence the name immovable stance.
        </p>
        <ol>
          <li>Stand in zenkutsu dachi (front stance), with the right leg in front.</li>
          <li>
            Now turn the right foot inside slightly (some Shotokan Dojo have the foot pointing
            straight forward).
          </li>
          <li>Put the back left leg into a kiba dachi (horse riding) position.</li>
        </ol>
      </div>
      <img src="@/assets/fudo-dachi.webp" alt="Fudo Dachi" class="stance-image" />
    </div>
    <div class="stance-container">
      <div class="stance-description">
        <h2>Heiko dachi (Parallel stance)</h2>
        <p>
          This stance is used after you bow (rei), in kihon, kumite and most kata. Heiko dachi is
          the stance karate go into when making the Yoi (ready position). Shizen-tai or yoi dachi
          also translate as “natural stance” (literally, ‘natural body,’ or ‘natural body stance’).
          While in heiko dachi, the karateka is usually in the yoi (ready) position, arms slightly
          in front of the thighs, fists clenched. The way the arms move into the yoi position varies
          from Dojo to Dojo.
        </p>
        <ol>
          <li>Weight distribution for Heiko Dachi is central.</li>
          <li>Feet should be hip width to shoulder width apart.</li>
          <li>Feet should be facing straight forwards.</li>
          <li>Keep both feet flat but have a little more pressure on the big toes.</li>
          <li>Keep your back straight</li>
          <li>Keep the shoulders relaxed</li>
        </ol>
      </div>
      <img src="@/assets/heiko-dachi1.webp" alt="Heiko Dachi" class="stance-image" />
    </div>
    <div class="stance-container">
      <div class="stance-description">
        <h2>Musubi-dachi (Heels together, feet turned out at 45 degrees)</h2>
        <p>
          This stance is used when you bow (rei). Many shotokan karate dojo bow in musubi dachi then
          move into the Yoi (ready position).
        </p>
        <ol>
          <li>Place the feet together, side by side.</li>
          <li>Keeping the heels together, turn the toes out at roughly 45 degrees.</li>
          <li>Keep your back straight.</li>
          <li>Keep the shoulders relaxed.</li>
        </ol>
      </div>
      <img src="@/assets/musubi-dachi.webp" alt="Musubi Dachi" class="stance-image" />
    </div>
    <div class="stance-container">
      <div class="stance-description">
        <h2>Heisoku-dachi (Feet Together Stance)</h2>
        <p>
          This stance is used by some Shotokan Dojo when you bow (rei). This is also the position of
          many shotokan kata, tekki shodan, bassai dai, jion, jitte, Jiin, chinte and Unsu. Many
          shotokan karate dojo bow in mosubi dachi or heisoku dachi, then move into the Yoi (ready
          position).
        </p>
        <ol>
          <li>Place the feet together, side by side.</li>
          <li>Keep your back straight.</li>
          <li>Keep the shoulders relaxed.</li>
        </ol>
      </div>
      <img src="@/assets/heisoku-dachi.webp" alt="Heisoku Dachi" class="stance-image" />
    </div>
    <QuizComponent :questions="typedQuizData.stances" />
  </main>
</template>

<style scoped>
.stances {
  padding: 4rem;
  max-width: 71%;
}
.header {
  display: flex;
  align-items: center;
  font-size: 36px;
  color: #333;
  margin-bottom: 10px;
}
iframe {
  position: relative;
  margin-top: 2rem;
  margin-bottom: 4rem;
}
ol {
  margin-top: 2rem;
}
li {
  margin-top: 0.6rem;
  color: #666;
  font-size: 1.1rem;
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
@media screen and (max-width: 768px) {
  .stances {
    padding: 1rem;
    max-width: 85%;
  }

  .header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .video-container {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
    margin-top: 2rem;
    margin-bottom: 4rem;
  }

  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .icon {
    margin-bottom: 1rem;
  }

  .stance-image {
    width: 70%;
    margin-left: 0;
    margin-top: 2rem;
  }

  .stance-container {
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
  }

  .stance-description {
    text-align: justify;
    margin-top: 1rem;
  }
  h2 {
    text-align: center;
    text-wrap: pretty;
  }

  p {
    margin-top: 1rem;
    text-align: left;
  }

  ol {
    margin-top: 1rem;
  }

  li {
    margin-top: 0.5rem;
    margin-left: 1rem;
  }
}
</style>

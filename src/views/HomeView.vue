<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'

import image1 from '@/assets/leslie-jones-urBiLDuUhMU-unsplash.jpeg'
import image2 from '@/assets/thao-lee-1IPV7Slrz7w-unsplash.jpeg'
import image3 from '@/assets/thao-lee-dBAPRX9RdhQ-unsplash.jpeg'
import image4 from '@/assets/thao-lee-HHechVrIhf8-unsplash.jpeg'
import image5 from '@/assets/thao-lee-igLzPKOvZNw-unsplash.jpeg'
import image6 from '@/assets/thao-lee-P033elIfs2M-unsplash.jpeg'
import image7 from '@/assets/thao-lee-pFhIoamEens-unsplash.jpeg'
import image8 from '@/assets/thao-lee-w29-TNxFaGg-unsplash.jpeg'
import image9 from '@/assets/thao-lee-Xl-ilWBKJNk-unsplash.jpeg'

interface Image {
  src: string
  alt: string
}

const images: Ref<Image[]> = ref([
  { src: image1, alt: 'Image 1' },
  { src: image2, alt: 'Image 2' },
  { src: image3, alt: 'Image 3' },
  { src: image4, alt: 'Image 4' },
  { src: image5, alt: 'Image 5' },
  { src: image6, alt: 'Image 6' },
  { src: image7, alt: 'Image 7' },
  { src: image8, alt: 'Image 8' },
  { src: image9, alt: 'Image 9' }
])

const currentIndex: Ref<number> = ref(0)

function nextSlide(): void {
  currentIndex.value = (currentIndex.value + 1) % images.value.length
}

function prevSlide(): void {
  currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length
}
</script>

<template>
  <main class="home-page">
    <div class="header">
      <h1>Welcome to KarateQuest Dojo - Path to Mastery</h1>
      <img src="@/assets/75_12508649.png" alt="Karate Icon" class="icon" />
    </div>
    <p class="intro">
      Ah, young grasshopper, behold the wonders of the dojo in the digital realm! <br />
      Within the hallowed halls of our karate app,
      <b>you shall embark on a journey of enlightenment and martial arts mastery.</b>
    </p>

    <p>
      <b>Here's how it works: </b> <br />
      first, you must traverse through the sections <b>chronologically</b>. <br />As you delve into
      each section, absorbing its wisdom and techniques, you have the power to mark them as
      complete, like etching your progress onto the scroll of destiny.
      <b>But wait, there's more!</b>
    </p>
    <p>
      <b>At the end of each part, a quiz awaits,</b> testing your newfound knowledge and skills.
      <br />Once you have conquered the fundamentals, the path shall diverge,
      <b>guiding you through the realms of belts and their specific requirements.</b>
    </p>
    <p>
      Like a budding warrior ascending through the ranks,
      <b>you shall track your journey in your personal dashboard,</b> witnessing your growth and
      triumphs unfold before your very eyes.
    </p>
    <p>
      So, my apprentice, heed the call of the digital dojo, for within its virtual walls lies the
      key to unlocking your true potential.
      <b
        >Prepare yourself, for the journey ahead shall be as epic as the rising sun and as thrilling
        as a showdown between rival dojos. Hi-yah!</b
      >
    </p>
    <div class="slideshow-container">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="slide"
        v-show="index === currentIndex"
      >
        <img :src="image.src" :alt="image.alt" style="width: 100%" />
      </div>

      <a class="prev" @click="prevSlide">&#10094;</a>
      <a class="next" @click="nextSlide">&#10095;</a>
    </div>
  </main>
</template>
<style>
.home-page {
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

.icon {
  width: 70px;
  height: 70px;
  margin-left: 1rem;
  margin-right: 1rem;
}
.intro {
  margin-top: 2rem;
}

h1 {
  font-size: 36px;
  color: #333;
  margin-bottom: 10px;
}

p {
  font-size: 18px;
  color: #666;
  text-align: justify;
  margin-top: 1rem;
}

.home-view {
  margin-top: 3rem;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.slideshow-container {
  position: relative;
  max-width: 1000px;
  margin: auto;
  margin-top: 2rem;
}
.slideshow-container .slide {
  border-radius: 25px;
  overflow: hidden;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

.prev {
  left: 0;
  border-radius: 3px 0 0 3px;
}

.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

@media screen and (max-width: 768px) {
  .home-page {
    padding: 1rem;
    max-width: 85%;
  }
  .header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  h1 {
    text-wrap: balance;
  }

  .icon {
    margin-top: 1rem;
  }

  .slideshow-container {
    max-width: 100%;
    overflow: hidden;
  }

  .slide img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }
  p {
    text-align: left;
  }
}
</style>

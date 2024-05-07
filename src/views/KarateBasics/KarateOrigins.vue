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
  origins: QuizQuestion[]
}

const typedQuizData = quizData as QuizData

const videoId = ref<string>('n1qcwI111UQ')
const videoUrl = computed<string>(() => `https://www.youtube.com/embed/${videoId.value}`)
</script>
<template>
  <main class="origins">
    <div class="header">
      <h2>Karate Origins</h2>
      <img src="@/assets/my-location_7837695.png" alt="Location" class="icon" />
    </div>
    <p>
      Karate is a martial art developed in Japan from a system used on the island of Okinawa.
      Okinawa is the Principle Island of the Ryukyu Archipelago, laying three hundred miles to the
      south of Japan and three miles east of main land China. Although the roots of Martial Arts can
      be traced back thousands of years to India, the evolution of karate as we know it today began
      in the seventeenth century. Legend has it that an Indian Buddhist monk named Bodhidharma, the
      originator of Zen Buddhism, brought Chuan-Fa to the Shaolin temple in China during the Sung
      Dynasty.
    </p>

    <p>
      Some historians claim this to be false, yet it remains a popular view. Until records of the
      practice of Chuan-Fa in Okinawa in 1372, very little is known from that period, when King
      Satto declared allegiance to China’s Ming Emperor. In the centuries to follow, Chuan-Fa gained
      a strong foothold in Okinawa and was practised along side an indigenous, unarmed fighting
      system known as Tode.
    </p>

    <p>
      In 1609, the Japanese Satsuma Clan marched on the Ryukyu Islands, ending their independence
      and banning all weaponry. This brought a bond between the Chuan-Fa and Tode, leading to the
      development of a fighting method designed to strengthen the physical and spiritual body in a
      bid to survive. The union came to be known as ‘Te’ (hand). Te was practised in secret in three
      main centres around the towns of Shuri, Naha and Tomari. These local variations were later
      known as Shuri-Te, Naha-Te and Tomari-Te. Between 1784 and 1903, karate replaced the word Te
      to describe the fighting system. In 1875, the Satsuma occupation of the Ryukyu Islands ended
      and they officially became part of the Japanese Empire. By 1903 karate was practiced openly in
      schools.
    </p>
    <p>
      Here is a short dcoumentary about the origins of Karate and why it is valuable to learn it
      today:
    </p>
    <div class="video-container">
      <iframe
        :src="videoUrl"
        width="560"
        height="315"
        frameborder="0"
        title="History of Karate and what it is today"
        allowfullscreen
      ></iframe>
    </div>
    <div class="principles">
      <h2>The Dojo Kun</h2>
      <p>
        The ‘dojo kun’ are, basically, the rules of the Dojo. These rules were laid down by the
        Okinawan master of Karate, Sakugawa Shungo. He based these rules on the Chinese rules, which
        date back to the era of Bodhidharma. The rules were recited at the end of every training
        session by the highest grade student, then repeated by the other students.
      </p>
      <dl>
        <dt>一つ、 人格 完成 に 務める こと。</dt>
        <dd>To seek the perfection of character</dd>

        <dt>一つ、 真 の 道 お 守る こと。</dt>
        <dd>To follow the path of truth</dd>

        <dt>一つ、 努力 の 精神 お 養う こと。</dt>
        <dd>To cultivate the spirit of effort</dd>

        <dt>一つ、 礼儀 お 重んずる こと。</dt>
        <dd>To esteem etiquette</dd>

        <dt>一つ、 決起 の 湯 お 今シムル こと。</dt>
        <dd>To admonish brute courage</dd>
      </dl>
      <h2>THE 20 PRECEPTS OF GICHIN FUNAKOSHI</h2>
      <p>
        Gichin Funakoshi is commonly known as the father of modern-day karate and is probably the
        best-known name in karate history. He was born in the city of Shuri on the island of Okinawa
        in 1868 and by the age of eleven, was training with the great Okinawan teachers Anko Itosu
        and Yasutsune Azato. Before he established the JKA( Japanes Karate Association), Master
        Funakoshi Gichin laid out the Twenty Precepts of Karate, which form the foundations of the
        art. Within these twenty principles, based heavily on Bushido and Zen, lies the philosophy
        of the JKA.
      </p>
      <ol>
        <li>Karate begins with courtesy and ends with courtesy</li>
        <li>There is no first attack in Karate</li>
        <li>Karate is an aid to justice</li>
        <li>First control yourself before attempting to control others</li>
        <li>Spirit first, technique second</li>
        <li>Always be ready to release your mind</li>
        <li>Accidents arise from negligence</li>
        <li>Do not think that Karate training is only in the dojo</li>
        <li>It will take your entire life to learn Karate; there is no limit</li>
        <li>Put your everyday living into Karate and you will find “Myo” (subtle secrets)</li>
        <li>Karate is like boiling water. If you do not heat it constantly, it will cool</li>
        <li>Do not think that you have to win, think rather that you do not have to lose</li>
        <li>
          Victory depends on your ability to distinguish vulnerable points from invulnerable ones
        </li>
        <li>
          The battle is according to how you move guarded and unguarded (move according to your
          opponent)
        </li>
        <li>Think of your hands and feet as swords</li>
        <li>
          When you leave home, think that you have numerous opponents waiting for you. It is your
          behaviour that invites trouble from them.
        </li>
        <li>
          Beginners must master low stance and posture, natural body positions are for the advanced.
        </li>
        <li>Practicing a kata is one thing, engaging in a real fight is another</li>
        <li>
          Do not forget to correctly apply: strength and weakness of power, stretching and
          contraction of the body and slowness and speed of techniques.
        </li>
        <li>Always think and devise ways to live the precepts every day.</li>
      </ol>
      <h2>The seven virtues of bushido - The way of the Samurai</h2>

      <p>
        Bushido has been the samurai code of conduct in Japan for centuries. Based firmly on the
        teachings of Zen, Bushido was intended to help the samurai master their nature and
        understand their minds and the universe through direct experience — as well as through
        fostering strength, self-control and wisdom.
      </p>

      <p>
        Martial spirit and courage were, of course, essential aspects of Bushido. But for the
        samurai, Bushido‘s highest goal was complete virtue in thought and action. Each samurai
        followed a carefully-designed regimen of polite ceremony and etiquette intended to promote
        such virtue. With its emphasis on prescribed form, Bushido helped the samurai harmonize mind
        with body, enabling them to maintain a certain calmness, or heijoshin (literally, “ordinary
        everyday mind”), even in the face of hardship. Sincerity, kindness, honesty, filial piety
        and honor all formed part of the core of Bushido. And they were the seed from which the
        karate tradition grew. These attributes, and the wisdom, understanding and peaceful strength
        they promote, are some of karate’s greatest benefits. They are also among Japan’s greatest
        gifts to the world.
      </p>
      <dl>
        <dt>Righteousness (義 gi):</dt>
        <dd>
          Justice is the most important virtue for the samurai. It involves making moral decisions
          and standing up for what is right.
        </dd>

        <dt>Loyalty (忠義 chūgi):</dt>
        <dd>
          The samurai were expected to be loyal to their lord, their family, and their friends. This
          virtue emphasizes the importance of keeping one’s promises and being faithful.
        </dd>

        <dt>Honor (名誉 meiyo):</dt>
        <dd>
          Honor is closely tied to righteousness and loyalty. It involves living a life that is
          worthy of respect and maintaining a good reputation.
        </dd>

        <dt>Respect (礼儀 reigi):</dt>
        <dd>
          The samurai were expected to show respect to others, especially those in positions of
          authority. This virtue emphasizes the importance of treating others with courtesy and
          consideration.
        </dd>

        <dt>Honesty (誠実 makoto):</dt>
        <dd>
          The samurai were expected to be truthful and sincere in their dealings with others. This
          virtue emphasizes the importance of being genuine and transparent.
        </dd>

        <dt>Courage (勇気 yūki):</dt>
        <dd>
          The samurai were expected to be brave in the face of danger and adversity. This virtue
          emphasizes the importance of facing one's fears and standing up for one's beliefs.
        </dd>

        <dt>Benevolence (仁 jin):</dt>
        <dd>
          The samurai were expected to be compassionate and kind to others. This virtue emphasizes
          the importance of empathy and helping those in need.
        </dd>
      </dl>
    </div>

    <QuizComponent :questions="typedQuizData.origins" />
  </main>
</template>

<style scoped>
.origins {
  padding: 4rem;
  max-width: 71%;
}
p {
  margin-top: 2rem;
  text-align: justify;
}
iframe {
  position: relative;
  margin-top: 2rem;
  margin-bottom: 4rem;
}
dt {
  font-weight: bold;
  margin-top: 2rem;
}
dl {
  margin-bottom: 4rem;
}

dl,
dd {
  font-size: 1.1rem;
}

dd {
  margin-left: 4rem;
  margin-bottom: 1em;
}
ol {
  font-size: 1.1rem;
  margin-top: 2rem;
  margin-bottom: 4rem;
}
li {
  margin: 1rem;
  color: #666;
}

@media screen and (max-width: 768px) {
  .origins {
    padding: 1rem;
    max-width: 85%;
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
  p {
    margin-top: 2rem;
    text-align: left;
  }
  .submit-button {
    margin-left: 4rem;
  }
}
</style>

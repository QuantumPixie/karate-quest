<template>
  <main class="home-page">
    <div class="header">
      <img src="@/assets/75_12508649.png" alt="Karate Icon" class="icon" />
      <h1>Welcome to KarateQuest: Path to Mastery</h1>
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
</style>

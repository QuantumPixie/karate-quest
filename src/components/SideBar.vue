<script setup lang="ts">
import { ref } from 'vue'

const isExpanded = ref<boolean>(false)
const ToggleMenu = (): void => {
  isExpanded.value = !isExpanded.value
}
</script>

<template>
  <aside :class="`${isExpanded && 'is-expanded'}`">
    <div class="logo">
      <img src="../assets/vue.svg" alt="Vue Logo" />
    </div>

    <div class="menu-toggle-wrap">
      <button type="button" class="menu-toggle" @click="ToggleMenu">
        <span class="material-icons"> keyboard_double_arrow_right </span>
      </button>
    </div>

    <h3>Menu</h3>
    <div class="menu">
      <router-link class="button" to="/">
        <span class="material-icons">temple_buddhist</span>
        <span class="text"> KarateQuest Dojo</span>
      </router-link>
      <router-link class="button" to="/fundamentals">
        <span class="material-icons">sports_mma</span>
        <span class="text">Karate Fundamentals</span>
      </router-link>
      <router-link class="button" to="/quest">
        <span class="material-icons">spa</span>
        <span class="text">My KarateQuest</span>
      </router-link>
      <router-link class="button" to="/belts">
        <span class="material-icons">sports_martial_arts</span>
        <span class="text">Belts</span>
      </router-link>
      <router-link class="button sublink" to="/belts/white">
        <span class="text">White Belt</span>
      </router-link>
      <router-link class="button sublink" to="/belts/yellow">
        <span class="text">Yellow Belt</span>
      </router-link>
      <router-link class="button sublink" to="/belts/orange">
        <span class="text">Orange Belt</span>
      </router-link>
      <!-- More belts to follow -->
    </div>
  </aside>
</template>

<style lang="scss" scoped>
aside {
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  width: calc(2rem + 32px);
  overflow: hidden;
  min-height: 100vh;
  padding: 1rem;

  background: var(--dark);
  color: var(--light);

  transition: 0.2s ease-out;

  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
    position: relative;
    top: 0;
    transition: 0.2s ease-out;

    .menu-toggle {
      transition: 0.2s ease-out;

      .material-icons {
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-out;
      }

      &:hover {
        .material-icons {
          color: var(--primary);
          transform: translateX(0.5rem);
        }
      }
    }
  }

  h3,
  .button .text {
    opacity: 0;
    transition: 0.3s ease-out;
  }

  h3 {
    color: var(--grey);
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  .menu {
    margin: 0 -1rem;

    .button {
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: 0.5rem 1rem;
      transition: 0.2s ease-out;

      .material-icons {
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-out;
      }

      .text {
        color: var(--light);
        transition: 0.2s ease-out;
      }

      &:hover,
      &.router-link-exact-active {
        background-color: var(--dark-alt);

        .material-icons,
        .text {
          color: var(--primary);
        }
      }
      &.router-link-exact-active {
        border-right: 5px solid var(--primary);
      }
    }
  }

  &.is-expanded {
    width: var(--sidebar-width);

    .menu-toggle-wrap {
      top: -3rem;

      .menu-toggle {
        transform: rotate(-180deg);
      }
    }
    h3,
    .button .text {
      opacity: 1;
    }

    .button {
      .material-icons {
        margin-right: 1rem;
      }
    }
  }

  @media (max-width: 768px) {
    //  for future styles
  }
}
</style>

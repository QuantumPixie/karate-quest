<script setup lang="ts">
import SideBar from './components/SideBar.vue'
</script>

<template>
  <div class="app">
    <SideBar />
    <router-view />
  </div>
</template>

<style lang="scss">
:root {
  --primary: #4ade80;
  --primary-alt: #22c55e;
  --grey: #64748b;
  --dark: #1e293b;
  --dark-alt: #334155;
  --light: #f1f5f9;
  --sidebar-width: 300px;
  --white-belt-color: #ffffff;
  --yellow-belt-color: #ffff00;
  --orange-belt-color: #ffa500;
  --green-belt-color: #008000;
  --blue-belt-color: #0000ff;
  --purple-belt-color: #800080;
  --brown-belt-color: #a52a2a;
  --red-belt-color: #ff0000;
  --black-belt-color: #000000;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira sans';
}

body {
  background: var(--light);
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app {
  display: flex;

  main {
    flex: 1 1 0;
    padding: 4rem;
  }
}

@media screen and (max-width: 768px) {
  .app main {
    flex: 1 1 0;
    padding: 1rem;
  }
}
</style>

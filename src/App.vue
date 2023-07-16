<script setup lang="ts">
import Navbar from '@/components/NavbarLayout.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <Navbar></Navbar>
  </header>
  <main class="app">
    <RouterView />
  </main>
</template>

<style scoped lang="scss">
.app {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>

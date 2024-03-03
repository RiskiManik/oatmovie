<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <h1>NavBar</h1>
  </header>

  <RouterView />
  <VueQueryDevtools />
</template>

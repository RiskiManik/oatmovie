<script setup lang="ts">
import { RouterView } from 'vue-router'
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'

import NavbarItem from './components/NavbarItem.vue'
</script>

<template>
  <NavbarItem />

  <RouterView />
  <VueQueryDevtools />
</template>

<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import LoginFormVue from '@/features/auth/components/LoginForm.vue'
import SignForm from '@/features/auth/components/SignForm.vue'
import { useUserStore } from '@/features/auth/stores/user'
import MovieList from '@/features/movie/components/MovieList.vue'
import { onMounted, ref } from 'vue'
const isLoginPage = window.location.pathname === '/login'
const isRegisterPage = window.location.pathname === '/register'

const user = useUserStore()

onMounted(() => {
  user.init()
})
</script>

<template>
  <main>
    <LoginFormVue v-if="isLoginPage" />
    <SignForm v-else-if="isRegisterPage" />
    <MovieList v-else />
  </main>
</template>

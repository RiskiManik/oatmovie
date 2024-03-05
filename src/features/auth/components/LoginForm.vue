<script setup lang="ts">
import logo from '/bg-movie.jpg'
import { useLoginMutate } from '../hooks/useAuth.mutate'
import { ref } from 'vue'
const { mutate, isPending, isSuccess } = useLoginMutate()
const email = ref('')
const password = ref('')

const handleSubmit = (e: Event) => {
  e.preventDefault()
  try {
    mutate({ email: email.value, password: password.value })
  } catch (err) {
    console.log(err)
  } finally {
    if (isSuccess && isSuccess.value) {
      window.location.replace('/')
    }
  }
}
</script>

<template>
  <div class="w-full flex">
    <div class="w-3/5">
      <img :src="logo" alt="movie" class="h-screen w-full object-cover" />
    </div>
    <div class="w-2/5 px-6 pt-8 bg-base-100/70 backdrop-blur-md relative overflow-hidden z-20">
      <div class="absolute -top-8 -left-6 w-24 h-24 p-4 bg-primary/70 blur-2xl z-0"></div>
      <div class="absolute -top-8 -right-0 w-24 h-24 p-4 bg-primary/70 blur-3xl z-0"></div>
      <div class="absolute -top-8 -right-6 w-24 h-24 p-4 bg-warning/70 blur-2xl z-0"></div>
      <div class="absolute -bottom-8 -left-6 w-24 h-24 p-4 bg-accent/70 blur-3xl z-0"></div>
      <div class="absolute -bottom-8 -left-6 w-24 h-24 p-4 bg-secondary/70 blur-2xl z-0"></div>
      <div class="divider"></div>
      <h1 class="text-4xl font-semibold text-neutral-content relative z-10">Sign In to OatMovie</h1>
      <p class="text-base pt-3">
        Don't have an account? <a href="/register" class="link link-primary">Sign up</a>
      </p>
      <div class="divider"></div>

      <form :onsubmit="handleSubmit" class="flex flex-col gap-4 px-2 pt-8 pb-4">
        <label class="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="w-4 h-4 opacity-70"
          >
            <path
              d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
            />
            <path
              d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
            />
          </svg>
          <input type="text" class="grow" placeholder="Email" v-model="email" />
        </label>
        <label class="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="w-4 h-4 opacity-70"
          >
            <path
              fill-rule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clip-rule="evenodd"
            />
          </svg>
          <input type="password" class="grow" value="password" v-model="password" />
        </label>
        <button type="submit" class="btn btn-primary mt-4" :disabled="isPending">
          {{ isPending ? 'Loading...' : 'Login' }}
        </button>
      </form>
      <div class="divider"></div>
    </div>
  </div>
</template>

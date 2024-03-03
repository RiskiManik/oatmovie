<template>
  <div class="w-full flex">
    <div class="w-3/5">
      <img :src="logo" alt="movie" class="h-screen w-full object-cover" />
    </div>
    <div class="w-2/5 px-6 pt-8 bg-base-200/20 backdrop-blur-md relative overflow-hidden z-20">
      <div class="absolute -top-8 -left-6 w-24 h-24 p-4 bg-primary/70 blur-2xl z-0"></div>
      <div class="divider"></div>
      <h1 class="text-3xl font-semibold text-neutral-content relative z-10">Sign In to OatMovie</h1>
      <p class="text-sm pt-2">
        Don't have an account? <a href="#/signup" class="link link-primary">Sign up</a>
      </p>
      <div class="divider"></div>

      <form class="flex flex-col gap-4 px-2">
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
          <input type="text" class="grow" placeholder="Email" />
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
          <input type="password" class="grow" value="password" />
        </label>
        <button type="submit" class="btn btn-primary mt-4">Login</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import logo from '/bg-movie.jpg'
</script>

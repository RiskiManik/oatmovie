<template>
  <section class="px-6 space-y-6">
    <div class="flex gap-2 items-center w-full">
      <div class="w-2/5 overflow-hidden rounded-2xl shadow-xl relative z-0">
        <img
          :src="baseImageUrl + data?.results[1].backdrop_path"
          alt="movie-home"
          class="h-72 w-2/3 ml-auto object-cover object-center"
        />
        <div
          class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-base-300 from-45% to-transparent px-4"
        >
          <h3 class="text-5xl font-semibold w-1/2 pt-8">{{ data?.results[1].title }}</h3>
          <p class="w-1/2 line-clamp-2 text-base pt-2 font-medium text-base-content/70">
            {{ data?.results[1].overview }}
          </p>
          <div class="flex items-center gap-2 pt-6">
            <button class="btn btn-base-300 rounded-full w-12 h-12 pl-5 shadow-lg">
              <v-icon name="co-media-play" />
            </button>
            <p class="text-lg font-medium">Let Play Movie</p>
          </div>
        </div>
      </div>
      <div class="w-3/5 overflow-hidden rounded-2xl shadow-xl relative">
        <img
          :src="baseImageUrl + data?.results[8].backdrop_path"
          alt="movie-home"
          class="h-72 w-2/3 ml-auto object-cover"
        />
        <div
          class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-base-300 from-35% to-transparent px-4"
        >
          <h3 class="text-5xl font-semibold w-1/2 pt-8">{{ data?.results[8].title }}</h3>
          <p class="w-1/2 line-clamp-2 text-base pt-2 font-medium text-base-content/70">
            {{ data?.results[8].overview }}
          </p>
          <div class="flex items-center gap-2 pt-6">
            <button class="btn btn-base-300 rounded-full w-12 h-12 pl-5 shadow-lg">
              <v-icon name="co-media-play" />
            </button>
            <p class="text-lg font-medium">Let Play Movie</p>
          </div>
        </div>
      </div>
    </div>
    <swiper-container
      :slides-per-view="3"
      :slides-per-group="3"
      :space-between="spaceBetweenBadge"
      :centered-slides="false"
      :pagination="{
        hideOnClick: true
      }"
      :breakpoints="{
        768: {
          slidesPerView: 7
        }
      }"
      @swiperprogress="onProgress"
      @swiperslidechange="onSlideChange"
    >
      <swiper-slide>
        <div
          class="p-5 bg-base-200 rounded-xl shadow-lg flex items-center gap-1 text-base justify-center"
        >
          <v-icon name="ri-fire-fill" />
          <span>Trending</span>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="p-5 bg-base-200 rounded-xl shadow-lg flex items-center gap-1 text-base justify-center"
        >
          <v-icon name="fc-like-placeholder" />
          <span>Romance</span>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="p-5 bg-base-200 rounded-xl shadow-lg flex items-center gap-1 text-base justify-center"
        >
          <v-icon name="ri-sword-fill" />
          <span>Action</span>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="p-5 bg-base-200 rounded-xl shadow-lg flex items-center gap-1 text-base justify-center"
        >
          <v-icon name="fa-hat-cowboy" />
          <span>Adventure</span>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="p-5 bg-base-200 rounded-xl shadow-lg flex items-center gap-1 text-base justify-center"
        >
          <v-icon name="fa-star" />
          <span>Comedy</span>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="p-5 bg-base-200 rounded-xl shadow-lg flex items-center gap-1 text-base justify-center"
        >
          <v-icon name="bi-tv" />
          <span>TV </span>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="p-5 bg-base-200 rounded-xl shadow-lg flex items-center gap-1 text-base justify-center"
        >
          <v-icon name="ri-bear-smile-fill" />
          <span>Animation </span>
        </div>
      </swiper-slide>
    </swiper-container>
    <div class="flex items-center justify-between">
      <h1 class="text-2xl">Popular in Movie</h1>
      <ul class="menu menu-horizontal bg-base-200 rounded-box shadow-lg">
        <li>
          <a class="tooltip" data-tip="List Filter">
            <v-icon name="co-list-filter" />
          </a>
        </li>
        <li>
          <a class="tooltip" data-tip="Filter">
            <v-icon name="co-filter" />
          </a>
        </li>
      </ul>
    </div>
    <swiper-container
      :slides-per-view="3"
      :slides-per-group="3"
      :space-between="spaceBetween"
      :centered-slides="false"
      :pagination="{
        hideOnClick: true
      }"
      :breakpoints="{
        768: {
          slidesPerView: 7
        }
      }"
      @swiperprogress="onProgress"
      @swiperslidechange="onSlideChange"
    >
      <swiper-slide
        v-for="(item, index) in data?.results"
        :key="index"
        @click="$router.push(`/movie/${item.id}`)"
      >
        <div class="card card-compact w-44 bg-base-100">
          <figure>
            <img :src="baseImageUrl + item.poster_path" alt="Shoes" class="rounded-2xl shadow-lg" />
          </figure>
          <div class="pt-2">
            <h2 class="card-title font-medium">{{ item.title }}</h2>
            <div class="flex items-center pt-2">
              <v-icon name="fa-star" />
              <p>{{ item.vote_average.toFixed(1) }}</p>
              <div class="divider lg:divider-horizontal m-0"></div>
              <p>{{ item.release_date.trim().slice(0, 4) }}</p>
            </div>

            <div class="card-actions justify-end"></div>
          </div>
        </div>
      </swiper-slide>
    </swiper-container>
  </section>
</template>

<script lang="ts">
import { register } from 'swiper/element/bundle'
import { useGetPopularMovie } from '../hooks/useGetPopularMovie'
import { baseImageUrl } from '@/env'
import MovieBadge from './MovieBadge.vue'

register()
export default {
  setup() {
    const { data } = useGetPopularMovie()
    const spaceBetween = 8
    const spaceBetweenBadge = 18

    const onProgress = (e: any) => {
      const [swiper, progress] = e.detail
      console.log(progress)
    }

    const onSlideChange = (e: any) => {
      console.log('slide changed')
    }

    return {
      spaceBetween,
      onProgress,
      onSlideChange,
      data,
      MovieBadge,
      baseImageUrl,
      spaceBetweenBadge
    }
  }
}
</script>

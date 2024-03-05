<template>
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
      <div class="card card-compact w-44 bg-base-100 rounded-none">
        <figure>
          <img :src="baseImageUrl + item.poster_path" alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{ item.title }}</h2>
          <p>{{ item.release_date }}</p>
          <div class="card-actions justify-end"></div>
        </div>
      </div>
    </swiper-slide>
  </swiper-container>
</template>

<script lang="ts">
import { register } from 'swiper/element/bundle'
import { useGetPopularMovie } from '../hooks/useGetPopularMovie'
import { baseImageUrl } from '@/env'

register()
export default {
  setup() {
    const { data } = useGetPopularMovie()
    const spaceBetween = 8
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
      baseImageUrl
    }
  }
}
</script>

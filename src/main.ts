import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from '@tanstack/vue-query'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import {
  BiSearch,
  CoAccountLogout,
  CoMediaPlay,
  CoListFilter,
  CoFilter,
  FaStar,
  RiFireFill,
  RiSwordFill,
  FcLikePlaceholder,
  RiBearSmileFill,
  FaHatCowboy,
  BiTv
} from 'oh-vue-icons/icons'
import App from './App.vue'
import router from './router'

addIcons(
  BiSearch,
  CoAccountLogout,
  CoMediaPlay,
  CoListFilter,
  CoFilter,
  FaStar,
  RiFireFill,
  RiSwordFill,
  FcLikePlaceholder,
  RiBearSmileFill,
  FaHatCowboy,
  BiTv
)

const app = createApp(App)

app.use(createPinia())
app.use(VueQueryPlugin)
app.use(router)
app.component('v-icon', OhVueIcon)
app.mount('#app')

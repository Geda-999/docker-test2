import { createMemoryHistory, createRouter } from 'vue-router'

// import HomeView from '@/pages/home.vue'
import HomeView from '../pages/home.vue'
// import AboutView from './AboutView.vue'

const routes = [
  { path: '/test', component: HomeView },
  // { path: '/about', component: AboutView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
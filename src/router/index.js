import { createRouter, createWebHistory } from 'vue-router'
import DasboardView from '../views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DasboardView,
    }
  ],
})

export default router

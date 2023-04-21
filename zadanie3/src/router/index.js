// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  }, 
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
  },
  {
    path: '/card1',
    name: 'CardInfo',
    component: () => import('@/views/CardTextView.vue'),
  }
]

const router = createRouter({
  history: createWebHistory('/NAZWAREPO'),
  routes,
})

export default router
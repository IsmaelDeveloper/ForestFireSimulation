import { createRouter, createWebHistory } from 'vue-router'
import ForestFire from '@/views/ForestFire.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'forestFire',
      component: ForestFire,
      meta: { title: 'Forest fire simulation' }, // meta title
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

export default router

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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      // Route de redirection pour les chemins non connus
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

export default router

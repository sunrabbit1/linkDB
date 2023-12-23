import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
        path: '/gamelist',
        name: 'gamelist',
        component: () => import('../views/GameListView.vue')
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('../views/NotFound.vue')
    }
  ]
})

export default router

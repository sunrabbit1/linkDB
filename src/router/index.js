import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import GameListView from '../views/GameListView.vue'
import NotFound from '../views/NotFound.vue'

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
            // component: () => import('../views/AboutView.vue')
            component: AboutView
        },
        {
            path: '/gamelist',
            name: 'gamelist',
            // component: () => import('../views/GameListView.vue')
            component: GameListView
        },
        {
            path: '/:pathMatch(.*)',
            // component: () => import('../views/NotFound.vue')
            component: NotFound
        }
    ]
})

export default router

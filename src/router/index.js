import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import GameListView from '../views/GameListView.vue'
import GameWallView from '../views/GameWallView.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'gamelist',
            component: GameListView
        },
        {
            path: '/about',
            name: 'about',
            // component: () => import('../views/AboutView.vue')
            component: AboutView
        },
        {
            path: '/home',
            name: 'home',
            // component: () => import('../views/GameListView.vue')
            component: HomeView
        },
        {
            path: '/gamewall',
            name: 'gamewall',
            // component: () => import('../views/GameListView.vue')
            component: GameWallView
        },
        {
            path: '/:pathMatch(.*)',
            // component: () => import('../views/NotFound.vue')
            component: NotFound
        }
    ]
})

export default router

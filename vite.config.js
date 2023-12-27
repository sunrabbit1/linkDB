import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
    ],
    base: '/linkDB/',
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
        cors: true,
        proxy: {
            '/smmsApi': {
                target: "https://sm.ms/api/v2/",
                changeOrigin: true,
                rewrite: (path) =>path.replace(/^\/smmsApi/, '')
            }
        }
    }
})

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


export default defineConfig({
    base: '/',
    plugins: [vue()],
    define: {
        'procces.env': process.env
    },
    ssgOptions: {
        script: 'async',
        formatting: 'minify'
    }
})

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


export default defineConfig({
    base: '/TransporteALTO/',
    plugins: [vue()],
    define: {
        'procces.env': process.env
    }
})

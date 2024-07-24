
import { createHead } from '@vueuse/head'
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

const head = createHead()


createApp(App)
        .use(head)
        .use(router)
        .mount('#app')


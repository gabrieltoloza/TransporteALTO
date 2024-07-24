
// import { createHead } from '@vueuse/head'
// no se usa ya que vitessg recolecta los metaheads para el SEO

import { ViteSSG } from 'vite-ssg'
import './style.css'
import App from './App.vue'
import { routes } from './router'




export const createApp = ViteSSG(
        App,
        { routes },
        ({ app, router, isClient}) => {


        }
)


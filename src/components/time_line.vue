<script setup>
    import { computed, onMounted, ref, watch } from 'vue';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Autoplay, EffectFade, Navigation} from 'swiper/modules';
    import { useRoute } from 'vue-router';
    import { observer, observerTimeLine } from '../../utils';
    import 'swiper/css';
    import 'swiper/swiper-bundle.css';
    import 'swiper/css/effect-fade';
    import { useHead } from '@vueuse/head';

    //SEO y posicionamiento
    useHead({
        
        meta: [
            {
                property: 'description',
                content: 'Transporte de cargas pesadas y ligeras. Flota diversa de corta y larga distancia'
            },
            {
                property: 'og:title',
                content: 'Transporte ALTO - Acerca de nosotros'
            },
            {
                property: 'og:description',
                content: 'Transporte de cargas pesadas y ligeras. Flota diversa de corta y larga distancia.'
            },
            {
                property: 'twitter:card',
                content: 'summary_large_image'
            }
        ]
    })
    //SEO y posicionamiento
    
    
    // Registro de modulos Swiper
    const modules = ref([EffectFade, Autoplay])


    onMounted(() => {
        
        const swiperEl = document.querySelectorAll('.swip')
        const screenWidth = window.innerWidth
        
        if(screenWidth > 920) {
            swiperEl.forEach(element => {
            
                element.addEventListener('mouseenter', () => {
                    element.swiper.params.autoplay.delay = 800
                    element.swiper.autoplay.start()
                    console.log("Se disparo el evento 'start' ")
                })

                element.addEventListener('mouseleave', () => {
                    element.swiper.autoplay.stop()
                    element.swiper.slideTo(0)
                    console.log("Se disparo el evento 'stop' ")
                })
            })
        } else {
            
            swiperEl.forEach(element => {
                observerTimeLine.observe(element) // Observador para dispositivos mobiles de la seccion time_line
            })
        }
        
    })

    // RESOLVER EL EFECTO FADE A FUTURO
    // RESOLVER EL EFECTO FADE A FUTURO
    // RESOLVER EL EFECTO FADE A FUTURO


    onMounted(() => {
        console.log("Componente 'time_line' montado!")
        const route = useRoute()
        const isHome = computed(() => route.path === '/')
        const nodeTimeLine = document.querySelectorAll('.lazy-effect')
        
        console.log("isHome: ", isHome.value)
        
        if (!isHome.value) {
            nodeTimeLine.forEach(element => {
            observer.observe(element)
        })
        }      


    })

</script>

<template>

    <ul class="time-line-customize timeline timeline-snap-icon max-md:timeline-compact timeline-vertical p-10 pt-20">
        <li class="py-10 sm:py-0">
            <div class="timeline-middle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="h-5 w-5">
                    <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd" />
                </svg>
            </div>
            <div class="timeline-start mb-10 md:text-end">
                <time class="font-mono italic time-text lazy-effect">16.3mts x 4.5mts</time>
                <div class="text-lg font-black title-text pb-6 lazy-effect">Transporte de cargas con barandas volcables</div>


                <div class="carousel rounded-box">
                    <swiper :autoplay="false" :modules="modules"
                            class="mySwiper swip lazy-effect" >
                        <swiper-slide class="carousel-item w-full">
                            <img class="w-full img-timeline" src="/public/time-line-img/baranda-volcable1.webp" alt="camion baranda voclable transportes transporte ruta pallets contenedores chasis acoplado">
                            <!-- <div class="swiper-lazy-preloader"></div> -->
                        </swiper-slide>
                        <swiper-slide class="carousel-item w-full">
                            <img class="w-full img-timeline" src="/public/time-line-img/baranda-volcable2.jpg" alt="camion baranda voclable transportes transporte ruta pallets contenedores chasis acoplado">
                        </swiper-slide>
                        <swiper-slide class="carousel-item w-full">
                            <img class="w-full img-timeline" src="/public/time-line-img/baranda-volcable3.webp" alt="camion baranda voclable transportes transporte ruta pallets contenedores chasis acoplado">
                        </swiper-slide>
                    </swiper>
                </div>

                <div>
                    <p class="description-text py-6 lazy-effect">
                        Transporte de cargas generales en baranda voclable, capacidad 15mt. x 4.1mt.
                        Se puede llevar al aire libre, enlonado, etc .
                    </p>

                </div>
            </div>
            <hr />
        </li>

        <li class="py-10 sm:py-0">
            <hr />
            <div class="timeline-middle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="h-5 w-5">
                    <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd" />
                </svg>
            </div>
            <div class="timeline-end mb-10">
                <time class="font-mono italic time-text lazy-effect">16.3mts x 4.5mts</time>
                <div class="text-lg font-black title-text pb-6 lazy-effect">Transporte de carga enlonado largo y ancho completo.</div>
                
                <div class="carousel rounded-box">
                    <swiper :autoplay="false" ref="swiperRef" :modules="modules" 
                            class="mySwiper swip lazy-effect" >
                        <swiper-slide class="carousel-item w-full">
                            <img class="w-full img-timeline" src="/public/time-line-img/camion-enlonado1.png" alt="camion baranda voclable lona enlonado transportes transporte ruta pallets contenedores chasis acoplado">
                        </swiper-slide>
                        <swiper-slide class="carousel-item w-full">
                            <img class="w-full img-timeline" src="/public/time-line-img/camion-enlonado2.webp" alt="camion baranda voclable lona enlonado transportes transporte ruta pallets contenedores chasis acoplado">
                        </swiper-slide>
                        <swiper-slide class="carousel-item w-full">
                            <img class="w-full img-timeline" src="/public/time-line-img/camion-enlonado3.jpg" alt="camion baranda voclable lona enlonado transportes transporte ruta pallets contenedores chasis acoplado">
                        </swiper-slide>
                    </swiper>
                </div>

                <div>
                    <p class="description-text py-6 lazy-effect">
                        iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has
                        been the primary part of Apple's consumer desktop offerings since its debut in August 1998,
                        and has evolved through seven distinct forms
                    </p>
                </div>
            </div>
            <hr />
        </li>

        <li class="py-10 sm:py-0">
            <hr />
            <div class="timeline-middle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="h-5 w-5">
                    <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd" />
                </svg>
            </div>
            <div class="timeline-start mb-10 md:text-end">
                <time class="font-mono italic time-text lazy-effect">7.5mts x 4.5mts</time>
                <div class="text-lg font-black title-text pb-6 lazy-effect">Transporte de carga en chasis cerrado</div>
                <div class="carousel rounded-box">
                    <swiper :autoplay="false" ref="swiperRef" :modules="modules" 
                            class="mySwiper swip lazy-effect" >
                        <swiper-slide class="carousel-item w-full">
                            <img class="w-full img-timeline" src="/public/time-line-img/camion-chasis1.jpg" alt="camion baranda voclable lona enlonado transportes transporte ruta pallets contenedores chasis acoplado">
                        </swiper-slide>
                        <swiper-slide class="carousel-item w-full">
                            <img class="w-full img-timeline" src="/public/time-line-img/camion-chasis2.jpg" alt="camion baranda voclable lona enlonado transportes transporte ruta pallets contenedores chasis acoplado">
                        </swiper-slide>
                        <swiper-slide class="carousel-item w-full">
                            <img class="w-full img-timeline" src="/public/time-line-img/camion-chasis3.webp" alt="camion baranda voclable lona enlonado transportes transporte ruta pallets contenedores chasis acoplado">
                        </swiper-slide>
                    </swiper>
                </div>

                <div>
                    <p class="description-text py-6 lazy-effect">
                        The iPod is a discontinued series of portable media players and multi-purpose mobile devices
                        designed and marketed by Apple Inc. The first version was released on October 23, 2001, about
                        8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450
                        million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At
                        over 20 years, the iPod brand is the oldest to be discontinued by Apple
                    </p>

                </div>
            </div>
            <hr />
        </li>

        <li class="py-10 sm:py-0">
            <hr />
            <div class="timeline-middle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="h-5 w-5">
                    <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd" />
                </svg>
            </div>
            <div class="timeline-end mb-10">
                <time class="font-mono italic time-text lazy-effect">16.3mts x 4.5mts</time>
                <div class="text-lg font-black title-text pb-6 lazy-effect">Transporte de contenedores</div>
                <div class="carousel rounded-box">
                    <swiper :autoplay="false" ref="swiperRef" :modules="modules" 
                            class="mySwiper swip lazy-effect" >
                        <swiper-slide class="carousel-item w-full">
                            <img class="w-full img-timeline" src="/public/time-line-img/camion-container1.jpg" alt="camion baranda voclable lona enlonado transportes transporte ruta pallets contenedores chasis acoplado">
                        </swiper-slide>
                        <swiper-slide class="carousel-item w-full">
                            <img class="w-full img-timeline" src="/public/time-line-img/camion-container2.jpg" alt="camion baranda voclable lona enlonado transportes transporte ruta pallets contenedores chasis acoplado">
                        </swiper-slide>
                        <swiper-slide class="carousel-item w-full">
                            <img class="w-full img-timeline" src="/public/time-line-img/camion-container3.jpg" alt="camion baranda voclable lona enlonado transportes transporte ruta pallets contenedores chasis acoplado">
                        </swiper-slide>
                    </swiper>
                </div>
                <div>
                    <p class="description-text py-6 lazy-effect">
                        iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile
                        operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on
                        January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As
                        of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone
                        accounts for 15.6% of global smartphone market share
                    </p>

                </div>

            </div>
            <hr />
        </li>
        
    </ul>
</template>

<style scoped>

    .time-line-customize {
        background: linear-gradient(to bottom , rgb(29, 28, 28), rgb(59, 58, 58), rgb(25, 21, 21));
        color: beige;
    }

    hr {
        color: rgba(24,145,172,255);
    }

    .title-text {
        font-size: 1.65em;
    }

    .description-text {
        
    }

    .carousel {
        height: 10em;
        width: 15em;
    }


    .lazy-effect {
        transform: translateY(100px);
        opacity: 0;
        transition: 1.2s;
    }

    .lazy-effect.show {
        transform: translateY(0);
        opacity: 1;
    }



    @media  (min-width: 640px ) {
        .carousel {
            height: 15em;
            width: 25em;
        }
    }
    
    @media  (min-width: 768px ) {
        .carousel {
            height: 10em;
            width: 20em;
        }
    }

    @media  (min-width: 1024px ) {
        .carousel {
            height: 10em;
            width: 20em;
        }
    }

    @media  (min-width: 1280px ) {
        .carousel {
            height: 15em;
            width: 25em;
        }

        /* Chequear esta animacion CSS */
        /* Chequear esta animacion CSS */
        /* Chequear esta animacion CSS */

        /* @keyframes show {
            from {
                opacity: 0;
                scale: 25%;
            }
            to {
                opacity: 1;
                scale: 100%;
            }
        }

        .img-timeline {
            view-timeline-name: --image;
            view-timeline-axis: block;

            animation-timeline: --image;
            animation-name: show;

            animation-range: entry 25% cover 30%;
            animation-fill-mode: both;

        } */
    }
</style>
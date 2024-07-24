<script setup>

    import WhatsappIcon from './iconos/whatsapp.vue'
    import ContactIcon from './iconos/contact.vue';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';
    import 'swiper/css/pagination';
    import { Pagination, Autoplay } from 'swiper/modules';
    import { ref } from 'vue';
    import { RouterLink } from 'vue-router';


    const pagination = ref({
        clickable: true,
        renderBullet: (index, className) => `
        <span class="${className}">
        </span>`,
    });
    
    const modules = ref([Pagination, Autoplay]);

    
    const observer = new IntersectionObserver(entries => {
        
    })

</script>

<template>
    <div class="hero bg-base-200 min-h-screen relative">

        
        <div class="carousel w-full h-full absolute top-0 left-0 z-0">
            <swiper :pagination="pagination" :loop="true" :autoplay="{ delay: 4000, disableOnInteraction: false}" :modules="modules" class="mySwiper ">
                <swiper-slide><img class="carousel-item w-full h-full blur-sm" src="/public/img-carousel/camion-carousel-ruta1.avif" alt="camion ruta cargas Argentina Provincia de Buenos Aires contenedores camion semirremolque baranda volcable lona ruedas carretera"></swiper-slide>
                <swiper-slide><img class="carousel-item w-full h-full blur-sm" src="/public/img-carousel/container3.jpg" alt="camion ruta cargas Argentina Provincia de Buenos Aires contenedores camion semirremolque baranda volcable lona ruedas carretera"></swiper-slide>
                <swiper-slide><img class="carousel-item w-full h-full blur-sm" src="/public/img-carousel/container2.png" alt="camion ruta cargas Argentina Provincia de Buenos Aires contenedores camion semirremolque baranda volcable lona ruedas carretera"></swiper-slide>
                <swiper-slide><img class="carousel-item w-full h-full blur-sm" src="/public/img-carousel/camion-ruta-amanecer.webp" alt="camion ruta cargas Argentina Provincia de Buenos Aires contenedores camion semirremolque baranda volcable lona ruedas carretera"></swiper-slide>
                <swiper-slide><img class="carousel-item w-full h-full blur-sm" src="/public/img-carousel/camion-carousel-main2.avif" alt="camion ruta cargas Argentina Provincia de Buenos Aires contenedores camion semirremolque baranda volcable lona ruedas carretera"></swiper-slide>
                <swiper-slide><img class="carousel-item w-full h-full blur-sm" src="/public/img-carousel/camion-carousel-main1.webp" alt="camion ruta cargas Argentina Provincia de Buenos Aires contenedores camion semirremolque baranda volcable lona ruedas carretera"></swiper-slide>
            </swiper>
        </div>

        
        
        <div class="hero-content flex-col lg:flex-row-reverse lg:items-center z-10 relative">

            <div class="card glass w-96 mockup-card">
                <figure>
                    <img
                    src="/public/card-main/mapa-argentina-animado4.jpg"
                    class="w-full img-main"
                    alt="envios Argentina fletes mapa cargas generales terrestres ruta pallets contenedores" />
                </figure>
                <div class="card-body">
                    <h2 class="text-center text-xl font-bold">Envios a todo el pais.</h2>
                    <p class="text-center font-bold">Completa el formulario para una cotizacion personalizada</p>
                </div>
            </div>

            <div class="lg:w-3/5 text-center container-text-main lg:mr-10">
                <h1 class="text-5xl font-bold">Transportes de cargas generales</h1>
                <p class="py-10 parrafo-main font-bold">
                    Cargas sueltas o paletizadas. Cotizamos tu translado en el instante. Contactanos
                </p>
                <div class="btn-group space-x-0 md:space-x-2 gap-2">
                    <RouterLink to="/cotizacion">
                        <a href="#" class="btn btn-ghost mx-1 text-sm md:text-base btn-blue"><ContactIcon />Contacto</a>
                    </RouterLink>
                    <a href="https://wa.me/1150172832" class="btn btn-success text-sm md:text-base btn-whatsapp" target="_blank"><WhatsappIcon class="wp-icon"/>Whatsapp</a> 
                </div>
            </div>
        </div>
    </div>


</template>

<style scoped>

    .mySwiper {
        width: 100%;
        height: 100%;
    }

    .btn-blue {
        background: rgba(24,145,172,255);
    }

    .btn-blue:hover {
        background: rgb(42, 23, 119);
        color: beige;
    }

    .mockup-card {
        display: none;
        color: beige;
    }
   
    
    .img-main {
        height: 30em;
        width: 100%;
    }

    .btn-whatsapp:hover {
        background: rgb(0, 94, 0);
        color: beige;
    }

    .wp-icon {
        color: green;
        object-fit: cover;
    }

    .wp-icon:hover {
        color: beige;
    }

    .parrafo-main {
        font-size: 1.5em;
    }

    .container-text-main {
        color: black;
    }

    @media  (min-width: 768px ) {

    }

    @media  (min-width: 1024px ) {
        .mockup-card {
            display: none;
            min-height: 100%;
        }
    }

    @media  (min-width: 1225px ) {
        
    }

</style>

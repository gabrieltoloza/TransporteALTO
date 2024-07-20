<script setup>

    // Componentes
    // Componentes
    import nav_bar from './components/nav_bar.vue';
    import main_section_carousel from './components/main_section_carousel.vue';
    import contact_form from './components/contact_form.vue';
    import footer_page from './components/footer_page.vue';
    import timeLine from './components/time_line.vue'
    import { ref } from 'vue';
    // Componentes
    // Componentes
    
    const eventoNavbar = (e) => {
        console.log(e)
        const drawerStats = document.querySelector('.drawer-side')
        console.log(drawerStats)
    }

    const switchSideBar = ref(true)
    


</script>

<template>

    <div class="drawer">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
            <!-- Seccion Navbar ( Header) -->
            <nav_bar @evento-drawer="eventoNavbar"/>
            
            <!-- Seccion Main-Carousel content -->
            <main_section_carousel/>
            
            <!-- Time Line -->
            <timeLine />

            
            <!-- Seccion Contacto -->
            <contact_form />

            
            <!-- Seccion Footer -->
            <footer_page />
            
        </div>
        <div v-show="switchSideBar" class="drawer-side">
            <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
            
            <ul class="ul-drawer menu bg-base-200 text-base-content min-h-full w-full p-4 lg:w-80" >
                <!-- Sidebar content here -->
                <!-- <div class="container-sidebar flex-1 lg:ml-10">
                </div> -->
                <div class="flex mb-10">
                    <img class="img-navbar" src="/public/logo/TransporteAlto-copia.png" alt="">
                    <li class="text-end ml-auto"><label for="my-drawer" id="btn-close" class="btn btn-ghost w-10 ">X</label></li>
                </div>
                <li><a>1 - Inicio</a></li>
                <li><a>2 - Cotiza tu viaje</a></li>
                <li><a href="https://api.whatsapp.com/send/?phone=1150172832&text&type=phone_number&app_absent=0" target="_blank">3 - Enviar Whatsapp</a></li>
                <li><a>4 - Acerca de nosotros</a></li>
            </ul>
        </div>
    </div>
    
    
</template>

<style scoped>

    .img-navbar {
        width: 10em;
        height: 100%;
        border-radius: 1em;
    }

    .drawer-side {
        z-index: 100;
        transition: 1s ease-in-out
    }

    .ul-drawer {
        background: linear-gradient(to right , rgb(29, 28, 28), rgb(59, 58, 58));
    }

    .ul-drawer li {
        color: beige;
        font-size: 1.5em;
        gap: 3em;
    }

    #btn-close {
        background: rgba(24,145,172,255);
        font-size: 1.3em;

    }

    /* @media  (min-width: 1225px ) {
        .drawer-side {
            width: 10em;
        }
    } */


</style>

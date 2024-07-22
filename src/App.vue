<script setup>

    // Componentes
    // Componentes
    import nav_bar from './components/nav_bar.vue';
    import { observer } from '../utils';
    import footer2 from './components/footer2.vue';
    import footer_page from './components/footer_page.vue';

    import { computed, onMounted, ref, watch } from 'vue';
    import { RouterLink, RouterView, useRoute } from 'vue-router';

    const inputDrawer = ref(false)


    const setDrawer = () => {
        inputDrawer.value = false
    }


    const eventoNavbar = (e) => {
        console.log(e)
        const drawerStats = document.querySelector('.drawer-side')
        
        console.log(drawerStats)
    }


    onMounted(() => {

        const nodeTimeLine = document.querySelectorAll('.lazy-effect')

        nodeTimeLine.forEach(element => {
            observer.observe(element)
        })
        
    })

    

    

</script>

<template>
        
    
    <div class="drawer">
        <input id="my-drawer" v-model="inputDrawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
            <!-- Seccion Navbar ( Header) -->
            <nav_bar @evento-drawer="eventoNavbar"/>
            
            <RouterView />
            
            <!-- Seccion footer -->
            <footer2 />
            <footer_page />
        </div>
        <div class="drawer-side">
            <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay" ></label>
            
            <ul class="ul-drawer menu bg-base-200 text-base-content min-h-full w-full p-4 lg:w-80" >
                <!-- Sidebar content here -->

                <div class="flex mb-10">
                    <img class="img-navbar" src="/public/logo/TransporteAlto-copia.png" alt="">
                    <li class="text-end ml-auto"><label for="my-drawer" id="btn-close" class="btn btn-ghost w-10 ">X</label></li>
                </div>
                <RouterLink to="/">
                    <li><a @click="setDrawer">1 - Inicio</a></li>
                </RouterLink>
                <RouterLink to="/cotizacion">
                    <li><label @click="setDrawer" aria-label="close sidebar" class="drawer-overlay">2 - Cotiza tu viaje</label></li>
                </RouterLink>
                <li><a @click="setDrawer" href="https://api.whatsapp.com/send/?phone=1150172832&text&type=phone_number&app_absent=0" target="_blank">3 - Enviar Whatsapp</a></li>
                <RouterLink to="/Nosotros">
                    <li><a @click="setDrawer">4 - Acerca de nosotros</a></li>
                </RouterLink>
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

    .lazy-effect {
        transform: translateY(100px);
        opacity: 0;
        transition: 1.2s;
    }

    .lazy-effect.show {
        transform: translateY(0);
        opacity: 1;
    }

    /* @media  (min-width: 1225px ) {
        .drawer-side {
            width: 10em;
        }
    } */


</style>

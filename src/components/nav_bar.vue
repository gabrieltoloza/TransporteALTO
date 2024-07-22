<script setup>
    import { onMounted, ref } from 'vue';

    

    const emits = defineEmits(['eventoDrawer'])

    
    const activarDrawer = () => {
        emits('eventoDrawer')
    }


</script>

<template>

    <div class="h-6 p-0 navbar-info navbar-top">
        <p class="text-center py-1">correo_electronico@gmail.com - Tel: 0220-4858257/ 011-1150172832</p>
    </div>

    <div class="navbar bg-base-100 p-1 pt-0 navbar-main">
        <div class="flex-1 lg:ml-10">
             <img class="img-navbar" src="/public/logo/TransporteAlto-copia.png" alt="">
        </div>

        <label @click="activarDrawer" for="my-drawer" class="btn btn-ghost btn-menu-drawer mr-3 p-0">
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="32" 
                height="32" 
                viewBox="0 0 16 16"
                class="svg-large">
                <path fill="currentColor" 
                      fill-rule="evenodd" 
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
        </label>
        <label @click="activarDrawer" ref="inputDrawer" for="my-drawer" id="probando-drawer" class="btn btn-ghost btn-menu-drawer2 mr-3 p-3 text-center">
            <span class="abrir-menu text-end">Abrir Menu</span>
        </label>

        
    </div>

    
</template>

<style scoped>

    .navbar-info {
        background: linear-gradient(to right , rgb(29, 28, 28), rgb(59, 58, 58), rgb(25, 21, 21));
        color: white;
    }


    .navbar-main {
        background: linear-gradient(to right , rgb(29, 28, 28), rgb(59, 58, 58), rgb(25, 21, 21));
    }

    .img-navbar {
        width: 10em;
        height: 100%;
        border-radius: 1em;
    }

    .navbar-info p {
        font-size: 0.7em
    }

    .btn-menu-drawer {
        background-color: rgba(24,145,172,255);
        height: 1.5em;
        width: 3.3em;
    }

    .svg-large {
        width: 2em;
    }
    .btn-menu-drawer2 {
        display: none;
    }

    @media  (min-width: 768px ) {
        .img-navbar {
            width: 13.5em;
            height: 4.3em;
            margin-left: 2em;
        }
        .btn-menu-drawer {
            display: none;
        }
        .btn-menu-drawer2 {
            display: inline-block;
            width: 10em;
            background: rgba(24,145,172,255);
        }
        .abrir-menu {
            font-size: 1.27em
        }
    }

    @media  (min-width: 1024px ) {

    }

    @media  (min-width: 1225px ) {
        
    }

</style>

<script setup>
    import { onMounted } from 'vue';
    import camionPlayo from './iconos/camion_playo.vue';
    import { observer } from '../../utils';

    const fecha = new Date().getFullYear()


    // onMounted(() => {

    //     const footer = document.querySelectorAll('.lazy-effect')
    //     console.log(footer)

    //     footer.forEach(foot => {
    //         observer.observe(foot)
    //     })
    // })
    
</script>

<template>

    <footer class="footer footer-center bg-primary text-primary-content p-10 pt-20 custom-footer">
    <aside>
        <camionPlayo class="chasis lazy-effect"/>
        <p class="font-bold lazy-effect">
            Tranporte A.L.T.O.
        <br />
            Servicio de calidad y confianza desde 2015
        </p>
        <p class="lazy-effect">Copyright © {{ fecha }} - Derechos reservados</p>
    </aside>
    
    </footer>
    
</template>

<style scoped>

    .footer {
        color: beige;
    }

    .chasis {
        font-size: 4em;
    }

    .custom-footer {
        background: rgb(25, 21, 21);
    }

    .lazy-effect {
        opacity: 0;
        transition: 4.5s;
    }

    .lazy-effect.show {
        opacity: 1;
    }
</style>

<script setup>
    import camionPlayo from './iconos/camion_playo.vue';

    const fecha = new Date().getFullYear()
    
</script>

<template>
    <footer class="footer footer-center bg-primary text-primary-content p-10 pt-20 custom-footer">
    <aside>
        <camionPlayo class="chasis"/>
        <p class="font-bold">
            Tranporte A.L.T.O.
        <br />
            Servicio de calidad y confianza desde 2015
        </p>
        <p>Copyright © {{ fecha }} - Derechos reservados</p>
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
        background: linear-gradient(to top , rgb(25, 21, 21), rgb(59, 58, 58));
    }
</style>

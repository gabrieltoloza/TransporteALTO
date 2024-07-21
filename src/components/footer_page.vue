<script setup>
    import { onMounted } from 'vue';
import camionPlayo from './iconos/camion_playo.vue';

    const fecha = new Date().getFullYear()

    
    onMounted(() => {

        const footer = document.querySelectorAll('.lazy-effect')

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                entry.target.classList.toggle("show", entry.isIntersecting)
                if (entry.isIntersecting) observer.unobserve(entry.target)
            }) 
        }, 
        {
            threshold: 0,
            rootMargin: "100px"
        })
        

        footer.forEach(foot => {
            observer.observe(foot)
        })

    })


    
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
        transform: translateX(100px);
        opacity: 0;
        transition: 1.2s;
    }

    .lazy-effect.show {
        transform: translateX(0);
        opacity: 1;
    }
</style>

<script setup>
    import main_section_carousel from './main_section_carousel.vue';
    import contact_form from './contact_form.vue';
    import timeLine from './time_line.vue'
    import footer2 from './footer2.vue';
    import footer_page from './footer_page.vue';
    import { computed, onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import { observer } from '../../utils';



    onMounted(() => {
        console.log("Componente App.vue montado!")

        const nodeTimeLine = document.querySelectorAll('.lazy-effect')
        
        nodeTimeLine.forEach(element => {
            observer.observe(element)
        })
        
    })


</script>


<template>

    <!-- Seccion Main-Carousel content -->
    <main_section_carousel/>
    
    <!-- Time Line -->
    <timeLine />
    
    <!-- Seccion Contacto -->
    <contact_form />



</template>



<style scoped>

    .lazy-effect {
        opacity: 0;
        transition: 4.5s;
    }

    .lazy-effect.show {
        opacity: 1;
    }
</style>
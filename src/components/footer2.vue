<script setup>

  import { onBeforeUnmount } from 'vue';



</script>

<template>

<footer class="custom-footer footer bg-base-200 text-base-content p-10 lg:h-96 lg:justify-evenly lg:items-end">
  <nav>
    <h6 class="footer-title lazy-effect">Servicios</h6>
    <a class="link link-hover lazy-effect">Empresa</a>
    <a class="link link-hover lazy-effect">Diseño</a>
    <a class="link link-hover lazy-effect">Nosotros</a>

  </nav>
  <nav>
    <h6 class="footer-title lazy-effect">Viajes</h6>
    <a class="link link-hover lazy-effect">Nosotros</a>
    <a class="link link-hover lazy-effect">Contacto</a>
    <a class="link link-hover lazy-effect">Viajes</a>
  </nav>
  <nav>
    <h6 class="footer-title lazy-effect">Legal</h6>
    <a class="link link-hover lazy-effect">Términos de uso</a>
    <a class="link link-hover lazy-effect">Política de privacidad</a>
    <a class="link link-hover lazy-effect">Política de cookies</a>
  </nav>
</footer>


</template>


<style scoped>
    .footer {
        background: linear-gradient(to bottom , rgb(59, 58, 58), rgb(25, 21, 21) );
        color: beige;
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
</style>
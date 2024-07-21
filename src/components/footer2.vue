<script setup>

</script>

<template>

<footer class="custom-footer footer bg-base-200 text-base-content p-10 lg:h-96 lg:justify-evenly lg:items-end">
  <nav>
    <h6 class="footer-title lazy-effect">Services</h6>
    <a class="link link-hover lazy-effect">Branding</a>
    <a class="link link-hover lazy-effect">Design</a>
    <a class="link link-hover lazy-effect">Marketing</a>

  </nav>
  <nav>
    <h6 class="footer-title lazy-effect">Company</h6>
    <a class="link link-hover lazy-effect">About us</a>
    <a class="link link-hover lazy-effect">Contact</a>
    <a class="link link-hover lazy-effect">Jobs</a>
  </nav>
  <nav>
    <h6 class="footer-title lazy-effect">Legal</h6>
    <a class="link link-hover lazy-effect">Terms of use</a>
    <a class="link link-hover lazy-effect">Privacy policy</a>
    <a class="link link-hover lazy-effect">Cookie policy</a>
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

<script setup>

</script>


<template>

    <div class="drawer">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
            <!-- Page content here -->
            <label for="my-drawer" class="btn btn-primary drawer-button">Open drawer</label>
        </div>
        <div class="drawer-side">
            <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
            <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                <!-- Sidebar content here -->
                <li><a>Inicio</a></li>
                <li><a>Cotiza tu viaje</a></li>
                <li><a>Enviar Whatsapp</a></li>
                <li><a>Acerca de nosotros</a></li>
            </ul>
        </div>
    </div>
</template>

<style scoped>

</style>
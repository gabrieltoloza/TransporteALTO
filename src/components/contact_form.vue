<script setup>

</script>

<template>
    <div class="hero min-h-screen pt-20">
        <div class="hero-content flex-col lg:flex-row-reverse gap-10 ">

            <div class=" text-xl lg:w-2/5 text-start lg:order-last">
                <h1 class="text-5xl font-bold">Cotiza tu viaje</h1>
                <p class="p-6 sm:px10 lg:pl-0">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
            </div>
            
            <div class="card bg-slate-300 w-full max-w-sm shrink-0 shadow-2xl lg:w-3/5 lg:order-first">
                <form class="card-body">
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Nombre:</span>
                        </label>
                        <input type="text" class="input input-bordered" required />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Email:</span>
                        </label>
                        <input type="email" class="input input-bordered" required />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Ingrese su consulta aqui:</span>
                        </label>
                        <textarea
                            placeholder="Ingrese aqui su consulta"
                            class="textarea textarea-bordered textarea-lg w-full max-w-xs"
                            required>
                        </textarea>
                    </div>

                    <div class="form-control mt-6">
                        <button class="btn btn-ghost btn-blue">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>

    .hero {
        background: linear-gradient(to bottom , rgb(25, 21, 21), rgb(59, 58, 58));
        color: beige;
    }

    .card {

    }

    p {
        font-size: .8em;
        
    }

    .btn-blue {
        background: rgba(24,145,172,255);
    }
    
    .btn-blue:hover {
        background: rgba(60,145,172,255);
    }
</style>

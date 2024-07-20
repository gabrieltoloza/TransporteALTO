<script setup>
    import { onMounted } from 'vue';
    import { ref } from 'vue';
    import emailjs from '@emailjs/browser';


    const formData = ref(null);
    const userName = ref('');
    const userCompany = ref('')
    const userEmail = ref('');
    const messageContent = ref('');
    const statusMessage = ref('');


    const initEmailJs = () => {
        emailjs.init({
            publicKey: import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        })
    };


    onMounted(() => {
        try {
            initEmailJs()
        } catch (err) {
            statusMessage.value = "Temporalmente inhabilitado :("
            console.error(err.text)
        }
    });


    const sendEmail = async () => {
        try {

            let params = {
                name: userName.value,
                email: userEmail.value,
                subject: 'Presupuesto',
                company: userCompany.value,
                message: messageContent.value
            }

            const result = await emailjs.send(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID, 
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID, 
                params
            );

            if (result.status === 200) {
                userName.value = ''
                userEmail.value = ''
                userCompany.value = ''
                messageContent.value = ''
            } else {
                throw new Error(`Error al enviar el formulario, "Codigo: ${result.status}"`)
            }
            
            statusMessage.value = 'Se envio el formulario con exito';

        } catch (error) {
            console.error(error.message)
            statusMessage.value = `Fallo el envio del email`
        }
    };


    
</script>

<template>
    <div class="hero min-h-screen w-full p-0 pt-20">
        <div class="hero-content flex-col lg:flex-row-reverse gap-10 p-0 w-full h-full">

            <div class="card image-full h-full w-full lg:order-last p-0 m-0">
                <figure class="w-full">
                    <img
                        class="w-96 h-96 img-contact"
                        src="/public/card-main/mapa-argentina-animado1.png"
                        alt="argentina-todoelpais-mapa-provincias"/>

                    <img
                        id="img-2"
                        class="w-96 h-96 img-contact"
                        src="/public/card-main/mapa-argentina-animado5.png"
                        alt="argentina-todoelpais-mapa-provincias"/>
                </figure>
                <div class="card-body flex justify-center items-center pb-20">
                    <h2 class="card-title title-contact lg:font-bold py-5">Cotizá tu viaje</h2>
                        <label class="py-1">
                            <p id="parrafo-contact" class="text-center lg:py-10 lg:px-20 font-bold">
                                Hablemos!! Llamanos al +54 011-1150172832 para una cotizacion o completa
                                el formulario para una cotizacion personalizada. Tambien podes comunicarte
                                con el boton de Whatsapp!
                            </p>
                        </label>
                        <div class="card bg-transparent max-w-sm lg:w-full shrink-0 shadow-2xl">
                            <form class="p-4 bg-transparent" @submit.prevent="sendEmail" ref="formData">
                                <div class="space-y-12">

                                    <div class="border-b border-gray-900/10 pb-6">
                                        
                                        <p class="mt-1 text-sm leading-6 text-white-600 font-bold">Utilice una dirección permanente donde pueda recibir correo.</p>

                                        <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                            <div class="sm:col-span-3">
                                                <label for="first-name" class="block text-sm font-medium leading-6 text-white-900 font-bold">Nombre y Apellido:</label>
                                                <div class="mt-2">
                                                    <input v-model="userName" type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 bg-transparent p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6">
                                                </div>
                                            </div>

                                            <div class="sm:col-span-3">
                                                <label for="last-name" class="block text-sm font-medium leading-6 text-white-900 font-bold">Nombre empresa:</label>
                                                <div class="mt-2">
                                                    <input v-model="userCompany" type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 bg-transparent p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6">
                                                </div>
                                            </div>

                                            <div class="sm:col-span-4">
                                                <label for="email" class="block text-sm font-medium leading-6 text-white-900 font-bold">Correo electronico:</label>
                                                <div class="mt-2">
                                                    <input v-model="userEmail" id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 bg-transparent p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6">
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="border-b border-gray-900/10 pb-6">

                                        <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                            <div class="col-span-full">
                                                <label for="about" class="block text-sm font-medium leading-6 text-white-900 font-bold">Consulta:</label>
                                                <div class="mt-2">
                                                    <textarea v-model="messageContent" id="about" name="about" rows="5" class="block w-full rounded-md border-0 bg-transparent p-5 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6"></textarea>
                                                </div>
                                                <p class="mt-3 ml-2 text-sm leading-6 text-white-600 font-bold">Describa su consulta.</p>
                                            </div>
                                        </div>
                                        <label class="label text-center">
                                            <span v-if="statusMessage" class="label-text text-green-500 text-xl">{{ statusMessage }}</span>
                                        </label>
                                    </div>
                                </div>

                                <div class="mt-0 flex items-center justify-center gap-x-6">
                                    <button type="submit" class="rounded-md btn-blue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                        Enviar
                                    </button>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
            
            
        </div>
    </div>
</template>


<style scoped>

    .hero {
        background: linear-gradient(to bottom , rgb(25, 21, 21), rgb(59, 58, 58));
        color: beige;
    }

    .img-contact {
        width: 50em;
    }

    .card {

    }

    .form-contact {
        background: transparent;
        color: beige;
    }

    .input,
    .textarea {
        color: black
    }


    .btn-blue {
        background: rgba(24,145,172,255);
        width: 10em;
        height: 3.2em;
    }
    
    .btn-blue:hover {
        background: rgba(60,145,172,255);
    }

    .title-contact {

        font-size: 2em;
    }

    #img-2 {
        display: none
    }

    #parrafo-contact {
        height: 8em;
        font-size: .9em;
    }

    @media  (min-width: 1024px ) {
        #parrafo-contact {
            font-size: 1.2em;
        }

        #img-2 {
            display: block;
        }
    }
</style>




<!-- <div class="card bg-slate-300 max-w-sm shrink-0 shadow-2xl">
    <form @submit.prevent="sendEmail" ref="formData" id="contact-form" class="card-body">
        <div class="form-control">
            <label class="label">
                <span class="label-text">Nombre:</span>
            </label>
            <input v-model="userName" name="nombre" type="text" class="input input-bordered" required />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">Email:</span>
            </label>
            <input v-model="userEmail" name="email" type="email" class="input input-bordered" required />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">Ingrese su consulta aqui:</span>
            </label>
            <textarea
                v-model="messageContent"
                name="consulta"
                placeholder=""
                class="textarea textarea-bordered textarea-lg w-full max-w-xs"
                required>
            </textarea>
            <label class="label text-center">
                <span v-if="statusMessage" class="label-text text-green-500 text-xl">{{ statusMessage }}</span>
            </label>
        </div>

        <div class="form-control mt-6">
            <button class="btn btn-ghost btn-blue">Enviar</button>
        </div>
    </form>
</div> -->
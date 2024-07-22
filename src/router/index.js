import { createRouter, createWebHistory } from 'vue-router';
import Contact_form from '../components/contact_form.vue';
import Time_line from '../components/time_line.vue';
import Home from '../components/Home.vue';



const routes = [

    {
        path: '/',
        name: 'Home', 
        component: Home
    },

    {
        path: '/cotizacion',
        name: 'cotizacion', 
        component: Contact_form
    },

    {
        path: '/Nosotros',
        name: 'Nosotros', 
        component: Time_line
    }
];


const router = createRouter({
    history: createWebHistory('/TransporteALTO/'),
    routes: routes
});



export default router;
import { createRouter, createWebHistory } from 'vue-router';
import TheWelcome from "@/components/TheWelcome.vue";
import ListEpreuves from "@/components/ListEpreuves.vue";
import AdminPanel from "@/components/AdminPanelEpreuve.vue";


const routes = [
    {
        path: '/',
        component: TheWelcome
    },
    {
        path: '/admin',
        component: AdminPanel
    },
    {
        path: '/epreuves',
        component: ListEpreuves
    },
    {
        path: '/admin',
        component: AdminPanel
    }
    // Ajoutez d'autres routes ici au besoin
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

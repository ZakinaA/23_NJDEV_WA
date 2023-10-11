import { createRouter, createWebHistory } from 'vue-router';
import TheWelcome from "@/components/TheWelcome.vue";
import ListEpreuves from "@/components/ListEpreuves.vue";
import AdminPanelResultat from "@/components/AdminPanelResultat.vue";

const routes = [
    {
        path: '/',
        component: TheWelcome
    },
    {
        path: '/admin',
        component: AdminPanelResultat
    },
    {
        path: '/epreuves',
        component: ListEpreuves
    }
    // Ajoutez d'autres routes ici au besoin
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

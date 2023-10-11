import { createRouter, createWebHistory } from 'vue-router';
import TheWelcome from "@/components/TheWelcome.vue";
import ResultTab from "@/components/ResultTab.vue";
import ListEpreuves from "@/components/ListEpreuves.vue";
import DashboardResult from "@/components/DashboardResult.vue";

const routes = [
    {
        path: '/',
        component: TheWelcome
    },
    {
        path: '/Dashboard',
        component: DashboardResult
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

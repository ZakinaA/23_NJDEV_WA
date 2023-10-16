import { createRouter, createWebHistory } from 'vue-router';
import TheWelcome from "@/components/TheWelcome.vue";
import ResultTab from "@/components/ResultTab.vue";
import ListEpreuves from "@/components/ListEpreuves.vue";
import AdminPanel from "@/components/AdminPanelEpreuve.vue";

const routes = [
    {
        path: '/',
        component: TheWelcome
    },
    {
        path: '/test',
        component: ResultTab
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

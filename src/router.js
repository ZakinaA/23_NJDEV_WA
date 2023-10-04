import { createRouter, createWebHistory } from 'vue-router';
import TheWelcome from "@/components/TheWelcome.vue";
import ResultTab from "@/components/ResultTab.vue";
import ListEpreuve from "@/components/ListEpreuve.vue";

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
        path: '/epreuve',
        component: ListEpreuve
    }
    // Ajoutez d'autres routes ici au besoin
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

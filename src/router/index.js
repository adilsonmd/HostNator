import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('../components/paginas/SolucoesHospedagem.vue')
    },
    {
        path: '/planos',
        component: () => import('../components/paginas/Planos.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

export default router;
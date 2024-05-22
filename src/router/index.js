
import {createRouter,createWebHistory} from 'vue-router'

const routes = [
    {
        path:'/',
        name:'TodoHome',
        component:() => import('../components/TodoHome.vue')
    },
    {
        path:'/tasks',
        name:'AddedTasks',
        component:() => import('../components/AddedTasks.vue')
    }
]

const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})

export default router
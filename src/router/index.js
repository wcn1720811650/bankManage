import {createRouter,createWebHistory} from "vue-router";

const [] = [

];
const routes = [
    {
        path:'/',
        name:'Home',
        component:()=>import('../views/welCome.vue')
    },
    {
        path:'/login',
        name:'Login',
        component:()=>import('../views/Login.vue')
    },
    {
        path: '/main',
        name:'Main',
        component:()=>import('../views/Main/main.vue'),
    },
    {
        path: '/manage',
        name:'Manage',
        component:()=>import('../views/Manage/manage.vue'),
    },
    {
        path: '/teller',
        name:'Teller',
        component:()=>import('../views/Tellers/Tellers.vue'),
    },
    {
        path: '/depositors',
        name:'Depositors',
        component:()=>import('../views/Depositors/depositors.vue'),
    }
]
const router =createRouter({
    history:createWebHistory(),
    routes,
})
export default router
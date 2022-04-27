import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import Login from "../components/Login.vue"
import auth from '../components/auth.js'


Vue.use(VueRouter);



const routes = [

    {
        path: '/',
        name: 'home',
        component: Home,
        beforeResolve: (to, from, next) => {
            if (!auth.authenticated()) {
                next('/login', () => {})
            } else {
                next();
            }

        }
    },
    { path: '/login', name: 'login', component: Login }, {
        path: '/logout',
        name: 'logout',
        component: Login,
        beforeEnter: (to, from, next) => {
            auth.logout();
            next({ path: '/login' });
        }
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage"
import Login from "../views/LoginPage"
import Register from "../views/RegisterPage"
import DefaultLayout from "../components/DefaultLayout"
import AboutPage from "../views/AboutPage"
import ProfilePage from "../views/ProfilePage"
import store from "../store";

const routes = [
    {
        path: '/',
        redirect: '/home',
        component: DefaultLayout,
        children: [
            {path: '/home', name: 'Home', component: Home},
            {path: '/about', name: 'About', component: AboutPage},
        ]
    },
    {
        path: '/profile',
        redirect: '/profile',
        component: DefaultLayout,
        meta: { requiresAuth: true },
        children: [
            {path: '/profile', name: 'Profile', component: ProfilePage},
        ]
    },
    {
        path: '/auth',
        redirect: '/login',
        component: DefaultLayout,
        meta: { isGuest: true },
        children: [
            {path: '/login', name: 'Login', component: Login},
            {path: '/register', name: 'Register', component: Register}
        ]
    }

];

const router = createRouter({
    history: createWebHistory(),
    mode: "history",
    routes
})

router.beforeEach((to,from,next)=>{
    if(to.meta.requiresAuth && !store.state.user.token){
        next({name: 'Login'})
    } else if (store.state.user.token && (to.meta.isGuest)) {
        next({name: 'Profile'});
    } else{
        next();
    }
})

export default router;
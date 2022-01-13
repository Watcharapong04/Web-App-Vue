import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./components/Home.vue"
import Order from "./components/Order.vue"
import Checkout from "./components/Checkout.vue"
import CheckoutProcess from "./components/CheckoutProcess.vue"
import Login from "./components/Login.vue"
import Sign from "./components/Sign.vue"
import Profile from "./components/Profile.vue"

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/order/:id",
        component: Order
    },
    {
        path: "/checkout",
        component: Checkout
    },
    {
        path: "/checkout-process",
        component: CheckoutProcess
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/sign",
        component: Sign
    },
    {
        path: "/profile",
        component: Profile
    }
];

const router = new VueRouter({
    routes
});

Vue.use(VueRouter);

export default router 
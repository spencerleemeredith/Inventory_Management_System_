require("./bootstrap");

import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

// Imported Routes
import { routes } from "./routes";

const router = new VueRouter({
    routes,
    mode: "history"
});

// Connected to Welcome.blade.php
const app = new Vue({
    el: "#app",
    router
});

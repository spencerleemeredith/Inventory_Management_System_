let login = require("./components/auth/login.vue").default;
let register = require("./components/auth/register.vue").default;
let forgot = require("./components/auth/forgot.vue").default;
let home = require("./components/home.vue").default;

export const routes = [
    { path: "/", component: login, name: "/" },
    { path: "/register", component: register, name: "register" },
    { path: "/forgot", component: forgot, name: "forgot" },
    { path: "/home", component: home, name: "home" }


];

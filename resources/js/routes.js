let login = require("./components/auth/login.vue").default;
let register = require("./components/auth/register.vue").default;
let forgot = require("./components/auth/forgot.vue").default;
let logout = require("./components/auth/logout.vue").default;

// End  Authentication
let home = require("./components/home.vue").default;

// Employee Component
let storeemployee = require("./components/employee/create.vue").default;

export const routes = [
    { path: "/", component: login, name: "/" },
    { path: "/register", component: register, name: "register" },
    { path: "/forgot", component: forgot, name: "forgot" },
    { path: "/home", component: home, name: "home" },
    { path: "/logout", component: logout, name: "logout" },
    { path: "/store-employee", component: storeemployee, name: "store-employee" }
];

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

// Import User Class 
    import User from  './Helpers/User'
    window.User = User


    // Import User Class 
    import Notification from  './Helpers/Notification'
    window.User = Notification


// Sweet Alert Start

import Swal from 'sweetalert2'
window.Swal = Swal;


const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  });


  window.Toast = Toast;

// Sweet Alert End

const app = new Vue({
    el: "#app",
    router
});


require('./bootstrap');


import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)



// Imported Routes
import {router} from './router';


const router = new VueRouter({
    routes // short for `routes: routes`
  })



// Connected to Welcome.blade.php
const app = new Vue({
    el: '#app',
});

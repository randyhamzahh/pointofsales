require('./bootstrap');
window.Vue = require('vue');

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Index from './components/Index.vue';
import Create from './components/Create.vue';
import Read from './components/Read.vue';
import Update from './components/Update.vue';

// Vue.component('example-component',require('./components/ExampleComponent.vue'));

const routes = [
    { path: '/', component: Index },
    { path: '/create', component: Create },
    { path: '/read/:id', component: Read , name:'readPost'},
    { path: '/:id/edit', component: Update , name:'editPost'}
]

const router = new VueRouter({
routes // short for `routes: routes`
})

const app = new Vue({
    router
  }).$mount('#app')
  
// const app = new Vue({
    // el : '#app'
// })
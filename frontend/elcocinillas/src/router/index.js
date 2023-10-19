import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login.vue'
import HelloWorld from "@/components/HelloWorld.vue";
import Recipe from "@/components/Recipe.vue";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/userlogin',
      name: 'Login',
      component: Login
    },
    {
      path:'/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/recetas',
      name: 'Recipe',
      component: Recipe
    },
  ]
})

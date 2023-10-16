import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import HelloWorld from "@/components/HelloWorld.vue";

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
    }
  ]
})

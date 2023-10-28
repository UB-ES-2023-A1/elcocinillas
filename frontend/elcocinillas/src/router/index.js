import Vue from "vue";
import Router from "vue-router";
import Login from "@/components/Login.vue";
import Recipe from "@/components/Recipe.vue";
import MainView from "@/views/HomeView.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: MainView,
    },
    {
      path: "/userlogin",
      name: "Login",
      component: Login,
    },
    {
      path: "/recetas",
      name: "Recipe",
      component: Recipe,
    },
  ],
});

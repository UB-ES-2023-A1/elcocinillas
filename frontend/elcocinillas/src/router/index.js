import Vue from "vue";
import Router from "vue-router";
import Login from "../components/Login.vue";
import Perfil from  "../components/Perfil.vue";
import Recipe from "../components/Recipe.vue";
import MainView from "../views/HomeView.vue";
import RecipesView from "@/views/RecipesView.vue";

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
      name: "RecipesView",
      component: RecipesView,
    },
    {
      path: "/recetas/:nombreReceta",
      name: "Recipe",
      props: true,
      component: Recipe,
    },
    {
      path: "/perfil",
      name: "Perfil",
      component: Perfil,
    }
  ],
});

import Vue from "vue";
import Router from "vue-router";
import Login from "../components/Login.vue";
import Registro from "../components/Registre.vue";
import Perfil from  "../components/Perfil.vue";
import Recipe from "../components/Recipe.vue";
import MainView from "../views/HomeView.vue";
import RecipesView from "@/views/RecipesView.vue";
import TermsView from "@/views/TermsView.vue";
import AboutView from "@/views/AboutView.vue"

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
      path: "/registre",
      name: "Registro",
      component: Registro,
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
    },
    {
      path: "/t&c",
      name: "T&C",
      component: TermsView,
    },
    {
      path: "/about",
      name: "About",
      component: AboutView,
    }
  ],
});

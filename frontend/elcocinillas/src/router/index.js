import Vue from "vue";
import Router from "vue-router";
import Login from "@/components/Login.vue";
import Perfil from "@/components/Perfil.vue";
import RecipesView from "@/views/RecipesView.vue";
import MainView from "@/views/HomeView.vue";
import Recipe from "@/components/Recipe.vue";
import Registre from "@/components/Registre.vue";
import AboutView from "@/views/AboutView.vue";
import TermsView from "@/views/TermsView.vue";
import UploadRecipeView from "@/views/UploadRecipeView.vue";

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
      path: "/registre",
      name: "Registre",
      component: Registre,
    },
    {
      path: "/userlogin",
      name: "Login",
      component: Login,
    },
    {
      path:"/perfil",
      name: "Perfil",
      component: Perfil,
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
      path: "/about",
      name: "About",
      component: AboutView,
    },
    {
      path: "/t&c",
      name: "Terms",
      component: TermsView,
    },
    {
      path: "publicarReceta",
      name: "UploadRecipe",
      component: UploadRecipeView,
    }
  ],
});

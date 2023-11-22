<template>
  <div id="app">
    <h2 id="title">RECETAS</h2>
    <div class="d-flex flex-row flex-wrap">
      <recipe-card v-for="rp in this.recipes"
                   v-bind:key="rp.id"
                   v-bind:recipeName="rp.nombre"
                   v-bind:imageUrl="rp.images">
      </recipe-card>
    </div>
    <button id="boton-flotante" @click="goToUploadRecipe">+</button>
  </div>

</template>

<style>
#app {
  font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-left: 10%;
  margin-top: 5%;
}

#title {
  font-weight: bold;
  margin-bottom: 80px;
  color: #5c5540;
  text-align: center;
  font-size: xxx-large;
  margin-right: 10%;
}

#boton-flotante {
  position: fixed;
  height: 55px;
  width: 55px;
  bottom: 8%;
  right: 8%;
  padding: 10px;
  background-color: #73694F;
  border: none;
  border-radius: 50%;
  font-size: x-large;
}
</style>

<script>
import RecipeCard from "@/components/RecipeCard.vue";
import axios from "axios";
import { store } from '../store'
export default {
  components: {RecipeCard},
  props : {
    filtros : {
      type : Object
    }
  },
  data() {
    return {
      usuarioLogeado : store.state.initSession,
      recipes: []
    }
  },

  created() {
    console.log("Creadted recipes: " , this.usuarioLogeado);
    if (this.filtros == null){
      this.getAllRecipesFromDB();
    } else{
      this.getRecipesFromDB();
    }
  },

  methods : {
    getRecipesFromDB() {
      const path = "http://localhost:8000/recetas/";

      axios.get(path, {
        params: {
          "classe": 'Vegetariana'
        }
      })
      .then(response => {
        console.log("metodo todasRecetas() llamada OK");
        this.recipes = response.data;
      })
      .catch(error => {
        console.error("Error fetching recipes:", error);
      });
    },

    getAllRecipesFromDB() {
      const path = "http://localhost:8000/todasrecetas/";
      axios.get(path)
          .then((response) => {
            console.log("metodo todasRecetas() llamada OK");
            this.recipes = response.data;
          })
          .catch((error) => {
            console.error("Error fetching recipes:", error);
          })
    },

    goToUploadRecipe() {
      console.log("isLogged click: ", this.usuarioLogeado != null);
      if(this.usuarioLogeado){
        console.log("ir a recetas");
        this.$router.push('/publicarReceta')
      } else{
        alert("Inicia sesión para poder publicar una receta");
      }
    }
  }
};
</script>

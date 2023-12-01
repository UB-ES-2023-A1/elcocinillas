<template>
  <div id="app">
    <div id="filters" @click="getRecipesFromDB()">
      <Filters style="float:left"/>
    </div>
    <div id="recipes">
      <h2 id="title">Recetas</h2>
      <div class="d-flex flex-row flex-wrap" :key="$globalData.recipesKey">
        <recipe-card v-for="rp in this.recipes"
                    v-bind:key="rp.id"
                    v-bind:recipeName="rp.nombre"
                    v-bind:imageUrl="rp.images">
        </recipe-card>
      </div>
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
  overflow: hidden;
}

#filters{
  text-align: left;
  border-left: 20px;
  width:25vh;
  border-radius: 10px;
}

#recipes {
  font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 5%;
  display: grid;
  overflow: hidden;
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

#boton-flotante-inner{
  color: #ffffff;
  font-size: 24px;
  text-decoration: none;
}
</style>

<script>
import RecipeCard from "@/components/RecipeCard.vue";
import Filters from "@/components/FiltersComp.vue";
import axios from "axios";
import { store } from '../store';
import { bus } from '../main';

export default {
  components: {RecipeCard, Filters},
  data() {
    return {
      usuarioLogeado : store.state.initSession,
      recipes: [],

    }
  },

  mounted() {
    this.getRecipesFromDB();
    bus.$on('busqueda', this.handleBusqueda);
  },

  methods : {
    login(){
      this.$globalData.logged = !this.$globalData.logged;
    },
    getRecipesFromDB() {
      if (this.$chosen.diet === null && this.$chosen.dishes.length === 0 && this.$chosen.time === 0){
        this.getAllRecipesFromDB();
        return;
      }
      //const path = "http://localhost:8000/recetas/";
      const path = "https://elcocinillas-api.kindglacier-480a070a.westeurope.azurecontainerapps.io/recetas/";
      const classes = this.$chosen.dishes;
      const listaComoCadena = classes.join(',');
      if (this.$chosen.dishes.length === 0){
        axios.get(path, {
          params: {
            "tipo": this.$chosen.diet,
            "time": this.$chosen.time,
          }
          })
          .then(response => {
            console.log("Llamada con filtros a recetas existosa.");
            this.recipes = response.data;
          })
          .catch(error => {
            console.error("Error fetching recipes:", error);
          });
      }
      else{
        axios.get(path, {
          params: {
            "tipo": this.$chosen.diet,
            "classe": encodeURI(listaComoCadena),
            "time": this.$chosen.time,
          }
        })
        .then(response => {
          console.log("Llamada con filtros a recetas existosa.");
          this.recipes = response.data;
        })
        .catch(error => {
          console.error("Error fetching recipes:", error);
        });
      }

    },

    getAllRecipesFromDB() {
      //const path = "http://localhost:8000/todasrecetas/";
      const path = "https://elcocinillas-api.kindglacier-480a070a.westeurope.azurecontainerapps.io/todasrecetas/";
      axios.get(path)
          .then((response) => {
            console.log("metodo todasRecetas() llamada OK");
            this.recipes = response.data;
          })
          .catch((error) => {
            console.error("Error fetching recipes:", error);
          })
    },

    uploadRecipe() {
      this.$router.push('/publicarReceta')
    },
    handleBusqueda() {
      //const path = "http://localhost:8000/recetas/";
      const path = "https://elcocinillas-api.kindglacier-480a070a.westeurope.azurecontainerapps.io/recetas/";
      axios.get(path + this.$globalData.searchQuery)
      .then((response) => {
        console.log("metodo búsqueda llamada OK");
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

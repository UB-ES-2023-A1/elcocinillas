<template>
  <div id="app">
    {{ this.$chosen}}
    <div id="filters" @click="getRecipesFromDB()">
      <Filters style="float:left"/>
    </div>
    <div id="recipes">
      <h1 id="title">Recetas</h1>
      <div class="d-flex flex-row flex-wrap" :key="$globalData.recipesKey">
        <recipe-card v-for="rp in this.recipes"
                    v-bind:key="rp.id"
                    v-bind:recipeName="rp.nombre">
        </recipe-card>
      </div>
    </div>
    <button id="boton-flotante" @click="uploadRecipe">
        <router-link to="/publicarReceta" id="boton-flotante-inner">+</router-link>
    </button>
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
  width:25%;
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
export default {
  components: {RecipeCard, Filters},
  data() {
    return {
      recipes: []
    }
  },

  created() {
    if (this.filtros == null){
      this.getAllRecipesFromDB();
    } else{
      this.getRecipesFromDB();
    }
    console.log("isUserlogged : ", this.$globalData.logged)
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

    uploadRecipe() {
      this.$router.push('/publicarReceta')
    }
  }
};
</script>

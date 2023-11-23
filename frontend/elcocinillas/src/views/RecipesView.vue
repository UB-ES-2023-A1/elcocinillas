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

  mounted() {
  },

  methods : {
    login(){
      this.$globalData.logged = !this.$globalData.logged;
    },
    getRecipesFromDB() {
      if (this.$chosen.diet === null && this.$chosen.dishes.length === 0){
        this.getAllRecipesFromDB();
        return;
      }
      const path = "http://localhost:8000/recetas/";

      const classes = this.$chosen.dishes;
      const listaComoCadena = classes.join(',');
      axios.get(path, {
        params: {
          "tipo": this.$chosen.diet,
          "classe": encodeURI(listaComoCadena),
          //"time": this.$chosen.time,
        }
      })
      .then(response => {
        console.log("Llamada con filtros a recetas existosa.");
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
    },

    getSearchedRecipe(){
      const path = "http://localhost:8000/receta/" + 'Sush';
      axios.get(path)
      .then(response => {
        console.log("Llamada por nombre exitosa.");
        this.recipes = response.data;
      })
      .catch(error => {
        console.error("Error fetching recipes:", error);
      });
    }
  }
};
</script>

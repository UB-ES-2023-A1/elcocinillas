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
  place-items: left;
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
      recipes: [],
    }
  },
  created() {
    this.getRecipesFromDB();
  },
  methods : {
    login(){
      this.$globalData.logged = !this.$globalData.logged;
    },
    getRecipesFromDB() {
      const path = "http://localhost:8000/recetas/";
      axios.get(path, {
        params: {
          "classe": this.$chosen.diet,
          "tipo": this.$chosen.dishes,
          //"time": this.$chosen.time,
        }
      })
      .then(response => {
        console.log("Llamada con filtros a recetas existosa.");
        this.recipes = response.data;
        this.$globalData.recipesKey += 1;
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
  }
};
</script>

<template>
  <div id="app">
    <h1 id="title">RECETAS</h1>
    <div class="d-flex flex-row flex-wrap">
      <recipe-card v-for="rp in this.recipes"
                   v-bind:key="rp.id"
                   v-bind:recipeName="rp.nombre">
      </recipe-card>
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
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 5%;
}

#title {
  font-weight: bold;
  margin-bottom: 80px;
}

</style>

<script>
import RecipeCard from "@/components/RecipeCard.vue";
import axios from "axios";
export default {
  components: {RecipeCard},
  props : {
    filtros : {
      type : Object
    }
  },
  data() {
    return {
      recipes: []
    }
  },

  created() {
    /*if (this.filtros == null){
      this.getAllRecipesFromDB();
    } else{*/
      this.getRecipesFromDB();
   // }
  },

  methods : {
    getRecipesFromDB() {
      const path = "http://localhost:8000/recetas/";

      axios.get(path, {
        params: {
          "classe": 'vegetariana'
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
    }
  }
};
</script>

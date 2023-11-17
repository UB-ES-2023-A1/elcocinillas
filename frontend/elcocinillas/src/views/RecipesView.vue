<template>
  <div id="app" >
    <div id="filters">
      <Filters style="float:left"/>
    </div>
    <div id="recipes">
      <h1 id="title" @click="login()">RECETAS</h1>
      <div class="d-flex flex-row flex-wrap">
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
  background-repeat: repeat;
  background-size: 200px;
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
    this.diets = this.$chosen.diets;
    this.dishes = this.$chosen.dishes;
      /*
    if (this.filtros == null){
      this.getAllRecipesFromDB();
    } else{*/
      this.getRecipesFromDB();
   // }
  },

  methods : {
    login(){
      this.$globalData.logged = !this.$globalData.logged;
    },
    getRecipesFromDB() {
      const path = "http://localhost:8000/recetas/";

      axios.get(path, {
        params: {
          "user": 'Guillem',
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

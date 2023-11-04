<template>
  <div id="app">
    <h1 id="title">RECETAS</h1>
    <div class="d-flex flex-row flex-wrap">
      <recipe-card v-for="rp in this.recipes"
                   v-bind:key="rp.id"
                   v-bind:recipeName="rp.title">
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
  /*props : {
    filtros : FiltroReceta //TODO: recoger filtros del primer grupo
  },*/
  data() {
    return {
      recipes: [
        /*{ id: 1, title: 'Macarrones con tomate' },
        { id: 2, title: 'Arroz con huevo' },
        { id: 3, title: 'Berenjena rellena' },
        { id: 4, title: 'Berenjena rellena' },
        { id: 5, title: 'Salsa de boletus y ceps' },
        { id: 6, title: 'Berenjena rellena' },
        { id: 7, title: 'Berenjena rellena' },
        { id: 8, title: 'Berenjena rellena' },
        { id: 9, title: 'Berenjena rellena' },
        { id: 10, title: 'Berenjena rellena' }*/
      ]
    }
  },

  created() {
    this.getRecipesFromDB();
  },

  methods : {
    getRecipesFromDB() {
      const path = "http://localhost:8000/recetas/";
      const filtro = {
        user: null,
        classe: null,
        tipo: null,
        ingredientes: [],
        time: null,
        dificultad: 3,
      };

      axios.get(path, { params: filtro})
          .then((response) => {
            console.log("metodo get_recetas() llamada OK");
            this.recipes = response.data;
          })
          .catch((error) => {
            console.error("Error fetching recipes:", error);
          });
    }
  }
};
</script>

<template>
  <div id="app">
    <h1 id="title">RECETAS</h1>
    <recipe-card v-for="rp in this.recipes"
                 v-bind:key="rp.id"
                 v-bind:recipeTitle="rp.title">
    </recipe-card>
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
export default {
  components: {RecipeCard},
  data() {
    return {
      recipes: [
        { id: 1, title: 'Macarrones con tomate' },
        { id: 2, title: 'Arroz con huevo' },
        { id: 3, title: 'Berenjena rellena' }
      ]
    }
  }
};
</script>

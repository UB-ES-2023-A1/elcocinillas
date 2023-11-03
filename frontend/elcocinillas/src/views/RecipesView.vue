<template>
  <div id="app">
    <h1 id="title">RECETAS</h1>
    <div class="d-flex flex-row flex-wrap">
      <recipe-card v-for="rp in this.recipes"
                   v-bind:key="rp.id"
                   v-bind:recipeTitle="rp.title">
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
export default {
  components: {RecipeCard},
  data() {
    return {
      recipes: [
        { id: 1, title: 'Macarrones con tomate' },
        { id: 2, title: 'Arroz con huevo' },
        { id: 3, title: 'Berenjena rellena' },
        { id: 4, title: 'Berenjena rellena' },
        { id: 5, title: 'Berenjena rellena' },
        { id: 6, title: 'Berenjena rellena' },
        { id: 7, title: 'Berenjena rellena' },
        { id: 8, title: 'Berenjena rellena' },
        { id: 9, title: 'Berenjena rellena' },
        { id: 10, title: 'Berenjena rellena' }
      ]
    }
  }
};
</script>

<template>
  <div id="app">
    <h1 id="title">RECETAS</h1>
    <recipe-card :recipe-title=title />
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
      title: 'macarrones con tomate'
    }
  }
};
</script>

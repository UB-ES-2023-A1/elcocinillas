<template>
  <div class="card text-left border-light cardStyle">
    <img class="card-img-top" src="./defaultRecipePhoto.jpg">
    <div class="card-body">
      <p class="card-text">{{recipeTitle}}</p>
    </div>
  </div>
</template>

<style scoped>
  .cardStyle{
    width: 18rem;
    margin: 2%;
    border-radius: 3%;
  }

  .cardStyle img{
    border-radius: 3%;
  }

  .card:hover{
    width: 20rem;
  }

</style>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "RecipeCard",
  props: {
    recipeTitle : String
  }
};

</script>
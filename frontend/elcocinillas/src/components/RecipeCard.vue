<template>
  <div class="card text-left border-light cardStyle"  @click="openRecipe">
    <img class="card-img-top" src="./defaultRecipePhoto.jpg">
    <div class="card-body">
      <p class="card-text">{{ recipeName }}</p>
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

</style>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "RecipeCard",
  props: {
    recipeName : String
  },

  methods : {
    openRecipe() {
      this.$router.push('/recetas/'+this.recipeName)
    }
  }
};

</script>
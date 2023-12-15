<template>
  <div class="card text-left border-light cardStyle"  @click="openRecipe">
    <img class="card-img-top"  :src=imageUrl v-if="imageUrl !== '' && imageUrl !== undefined">
    <img class="card-img-top"  src="../img/default_img_recipe.jpg" v-if="imageUrl === '' || imageUrl === undefined">
    <div class="card-body">
      <p class="card-text">{{ recipeName }}</p>
    </div>
  </div>
</template>

<style scoped>
  .cardStyle{
    color: black;
    width: 24vh;
    margin: 2%;
    border: 2px solid lightgray;
    border-radius: 5%;
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
    recipeName : String,
    imageUrl: String
  },

  methods : {
    openRecipe() {
      console.log(this.imageUrl)
      this.$router.push('/recetas/'+this.recipeName)

    }
  }
};

</script>
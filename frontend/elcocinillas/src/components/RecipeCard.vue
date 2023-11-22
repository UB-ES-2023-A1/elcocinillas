<template>
  <div class="card text-left border-light cardStyle"  @click="openRecipe">
    <!--<img class="card-img-top" v-if="NotImage" src="../img/defaultRecipePhoto.png">-->
    <img class="card-img-top"  src="imageUrl">
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
import axios from "axios";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "RecipeCard",
  props: {
    recipeName : String
  },
  data(){
      return{
          imageUrl: ''
      }
  },
  created() {
      const path = "http://localhost:8000/imgReceta/" + this.props.recipeName();
      axios.get(path).then(response => {
          this.imageUrl = response.data
      }).catch(error => {
        console.error("Error fetching image:", error);
      })
  },

    methods : {
    openRecipe() {
      this.$router.push('/recetas/'+this.recipeName)
    }
  }
};

</script>
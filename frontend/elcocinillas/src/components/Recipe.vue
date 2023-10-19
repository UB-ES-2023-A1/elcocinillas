<template>
  <div id="app">
    <section id="headerSection">
      <h1 id="title">Macarrones a la boloñesa</h1>
      <div class="container">
        <div class="row">
          <div class="col-sm border-right">
            <h2>{{getIngredientsLength()}}</h2>
            <h4>ingredientes</h4>
          </div>
          <div class="col-sm border-right">
            <h2>40</h2>
            <h4>minutos</h4>
          </div>
          <div class="col-sm">
            <h2>3 / 5</h2>
            <h4>Dificultad</h4>
          </div>
        </div>
      </div>
    </section>

    <section class="sections">
      <h4>INGREDIENTES (4 personas):</h4>
      <hr id="solidDividerYellow">
      <ul v-for="(ingrediente) in this.getIngredients()" :key="ingrediente.name">
        <li>{{ ingrediente.name }}</li>
      </ul>
    </section>

    <section class="sections">
      <h4>ELABORACIÓN DE LA RECETA</h4>
      <hr id="solidDividerYellow">
      <p>Estos son los pasos que tienes que seguir</p>
      <ul v-for="(step) in pasos" :key="step.name">
        <li>{{ step.name }}</li>
      </ul>
    </section>


  </div>
</template>

<style scoped>
#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 5%;
}

#headerSection {
  color: #5C5540;
  margin-bottom: 10%;
}

#title {
  font-weight: bold;
  margin-bottom: 80px;
}

.sections {
  color: #5C5540;
  margin-bottom: 10%;
  text-align: left;
}

#solidDividerYellow {
  border: 4px solid #EEF2B6;
  width: 100%;
  opacity: 1;
  margin-bottom: 30px;
}
</style>

<script>
import axios from 'axios'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Recipe",
  data() {
    return {
      recipes : [],
      ingredientes: [],
      steps: [],
      time : 0
    }
  },
  created() {
    this.updateData()
  },

  methods: {
    updateData () {
      this.getRecipes()
      this.getIngredients()
      this.getSteps()
      this.getTime()
    },
    getRecipes(){
      const pathReceta = 'http://localhost:8080/receta/leuis123'
      axios.get(pathReceta)
          .then(response => {
            print(response.data);
            this.recipes = response.data;
            this.ingredientes = response.data.ingredientes
          })
      .catch(error => {
        console.error('Error fetching recipes:', error);
      });
    },
    getIngredients(){
      return this.ingredientes;
    },
    getIngredientsLength() {
      return this.getIngredients().length;
    },

    getSteps(){
      this.steps = this.recipes.pasos
    },

    getTime(){
      this.time = this.recipes.time
    }
  }
}


</script>
<template>
  <div class="filtros">
    <div class="section">
      <h2>Tiempo: {{ time }} minutos</h2>
      <input type="range" min="0" max="60" value="30" 
      class="slider" id="slider" v-model="time" style="margin-bottom: 10px;"
      @input="updateTime(time)">
    </div>
    <div class="section">
      <h2>Dietas:</h2>
      <ul>
        <li v-for="diet in this.$globalData.diets" v-bind:key="diet.id"
        :style="[$chosen.diets.includes(diet) ? 
        {'background-color': clicked} :
        {'background-color': notClicked}]"
        @click="addDiet(diet)">
          {{ diet }}
        </li>
      </ul>
    </div>
    <div class="section">
      <h2>Tipos de Plato:</h2>
      <ul>
        <li v-for="dish in this.$globalData.dishes" v-bind:key="dish.id"
        :style="[$chosen.dishes.includes(dish) ? 
        {'background-color': clicked} :
        {'background-color': notClicked}]"
        @click="addDish(dish)">
          {{ dish }}
        </li>
      </ul>
    </div>
  </div>
</template>
  
<style scoped>
.filtros{
  height: 100%;
  width: fit-content;
  text-align:center;
  margin-right: 50px;
}
.section{
  background-image: linear-gradient(to bottom right, lightblue, lightblue);
  border-radius: 2px;
  border-style: solid;
  height: 33%;
}

h2{
  filter:blur(1.1);
  width: 200px;
  font-size: larger;
  text-align: center;
  text-shadow: 1px 1px 2px white;
  border-radius: 5px;
  margin-top: 20px;
}
ul{
  height: 100px;
  list-style-type: none;
  text-align: center;
  place-content: center;
}
li{
  height:fit-content;
  color: white;
  background-color: bisque;
  place-content: center;
  margin: 2px;
  border-radius: 20px;
  box-shadow: 2px 2px black;
  cursor: pointer;
  transition: 0.2s;
  transform: translateX(-15px);
}
li:hover{
  margin-bottom: 5px;
  box-shadow: 5px 5px black;
  transition: 0.2s;
}

img{
  height: 50px;
}
</style>

<script>
export default {
  data () {
    return {
      clicked: '#44d9de',
      notClicked: 'lightgray',
      time: 0,
      diets: [],
      dishes: []
    }
  },
  created(){
    if (this.$chosen.diets.length === 0) this.$chosen.diets = this.$globalData.diets;
    if (this.$chosen.dishes.length === 0) this.$chosen.dishes = this.$globalData.dishes;
    this.diets = this.$chosen.diets;
    this.dishes = this.$chosen.dishes;
    this.time = this.$chosen.time;
  },
  methods: {
    addDiet(diet){
      if (this.$chosen.diets.includes(diet)){
        this.$chosen.diets = this.$chosen.diets.filter((d) => d !== diet)
      } else {
        this.$chosen.diets.push(diet);
      }
    },
    addDish(dish){
      if (this.$chosen.dishes.includes(dish)){
        this.$chosen.dishes = this.$chosen.dishes.filter((d) => d !== dish)
      } else {
        this.$chosen.dishes.push(dish);
      }
    },
    updateTime(t){
      this.$chosen.time = t;
    }
  }
}
</script> 

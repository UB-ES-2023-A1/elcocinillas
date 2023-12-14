<template>
  <div id="filtros">
    <h3>Filtros</h3>
    <div class="section">
      <h2>Tiempo: {{ time }} minutos</h2>
      <input type="range" min="0" max="60" value=30
      class="slider" id="slider" v-model="time" style="margin-bottom: 10px;"
      @input="updateTime(time);">
    </div>
    <div class="section">
      <h2>Dietas:</h2>
      <ul>
        <li v-for="diet in this.$globalData.diets" v-bind:key="diet.id"
        :style="[$chosen.diet === diet ? 
        {'background-color': clicked} :
        {'background-color': notClicked, 'color': 'black'}]"
        @click="addDiet(diet);">
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
        {'background-color': notClicked, 'color': 'black'}]"
        @click="addDish(dish);">
          {{ dish }}
        </li>
      </ul>
    </div>
  </div>
</template>
  
<style scoped>
#filtros{
  margin-top: 4vh;
  border-right: 0.5vh solid lightgray;
  text-align:center;
}
#filters{
  margin-top: 4vh;
  height: 85vh;
  width: fit-content;
  text-align:center;
  align-content: center;
  border-right: 0.5vh solid lightgray;
  font-size: 2.5vh;
}
.section{
  padding: 2vh;
  margin-bottom: 2vh;
}
h2{
  font-size: 3vh;
  text-align: center;
  border-radius: 2vh;
  margin-top: 2vh;
}
h3{
  font-size: 4vh;
  font-weight: bold;
  margin: 2vh;
}
ul{
  list-style-type: none;
  padding: 0;
  align-content: center;
}
li{
  height: 4vh;
  width: 30vh;
  font-size: 2.5vh;
  color: white;
  margin: 2px;
  border-radius: 20vh;
  border-style: solid;
  border-width: 1px;
  border-color: black;
  box-shadow: 2px 2px black;
  cursor: pointer;
  transition: 0.2s;
  display: grid;
  align-items: center;
}
li:hover{
  margin-bottom: 2vh;
  box-shadow: 5px 5px black;
  transition: 0.2s;
}
input[type="range"] {
  accent-color: #76ded9;
  width: 30vh;
}
</style>

<script>
export default {
  data () {
    return {
      clicked: '#76ded9',
      notClicked: 'white',
      time: 0,
      diet: null,
      dishes: [],
    }
  },
  created(){
    this.diet = this.$chosen.diet;
    this.dishes = this.$chosen.dishes;
    this.time = this.$chosen.time;
  },
  methods: {
    addDiet(diet){
        if (this.$chosen.diet === diet) this.$chosen.diet = null;
        else this.$chosen.diet = diet;
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
    },
  }
}
</script> 

<template>
  <div class="pos">
    <div>
      <div class="column left">
        <ColumnComp>
          <template #heading>Tiempo Cocción</template>
          <template #image>
            <img src="../assets/clock.png" alt="Health Icon" />
          </template>
          <template #description>
            Tiempo máximo (minutos): {{ time }}
            <input type="range" min="0" max="60" value="30" 
            class="slider" id="slider" v-model="time">
          </template>
        </ColumnComp>
      </div>
      <div class="column center">
        <ColumnComp>
          <template #heading>Dieta</template>
          <template #image>
            <img src="../assets/diet.png" alt="Health Icon" />
          </template>
          <template #description> 
            <ul>
              <li v-for="diet in optionsDiets" v-bind:key="diet.id"
              :style="[$chosen.diet === diet ? 
              {'background-color': clicked} :
              {'background-color': notClicked, 'color': 'black'}]"
              @click="addDiet(diet)">
              {{ diet }}
              </li>
            </ul>
          </template>
        </ColumnComp>
      </div>
      <div class="column right">
        <ColumnComp>
          <template #heading>Plato</template>
          <template #image>
            <img src="../assets/food-plate-1.png" alt="Health Icon"/>
          </template>
          <template #description>
            <ul>
              <li v-for="dish in optionsDishes" v-bind:key="dish.id"
              :style="[$chosen.dishes.includes(dish) ? 
              {'background-color': clicked} :
              {'background-color': notClicked, 'color': 'black'}]"
              @click="addDish(dish)">
              {{ dish }}
              </li>
            </ul>
          </template>
        </ColumnComp>
      </div>
    </div>
    <button class="to-recipes">
      <router-link to="/recetas">
        <h2>
          Ver Recetas
        </h2>
      </router-link>
    </button>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
}
img{
  margin-bottom: 30px;
}
.pos{
  display: grid;
}
h1 {
  font-size: 10vh;
  text-shadow: 2px 2px lightsteelblue;
  color: black;
}
h2 {
  font-size: 5vh;
  color: black;
  text-shadow: 2px black;
}
.column {
  width: 33.3333%;
  float: left;
  height: 75vh;
}
#slider{
  width: 30vh;
}
.left {
  background-color: white;
}
.center {
  background-color: white;
}
.right {
  background-color: white;
}
img {
  height: 30vh;
  transition: 1s;
}
img:hover {
  transform: scale(1.1);
  transition: 1s;
}
.to-recipes {
  color: white;
  background-color: '#73694f';
  font-size: 16px;
  padding: 10px 20px 10px;
  height: 12vh;
  width: 50vh;
  text-align: center;
  margin: auto;
  margin-top: 20px;
  border-radius: 10px;
  top: -20px;
}
.to-recipes:hover{
  filter: brightness(1.1);
  transform: rotate(-3deg);
  transition: 0.2s;
}
ul{
  height: 100px;
  list-style-type: none;
  padding: 0;
}
li{
  height: 4vh;
  width: 30vh;
  font-size: 2.5vh;
  color: white;
  margin: 2px;
  border-radius: 20px;
  border-style: solid;
  border-width: 1px;
  border-color: black;
  box-shadow: 2px 2px black;
  cursor: pointer;
  transition: 0.2s;
}
li:hover{
  margin-bottom: 5px;
  box-shadow: 5px 5px black;
  transition: 0.2s;
}
</style>

<script>
import ColumnComp from "../components/ColumnComp.vue"

export default {  
    components: { ColumnComp },
    data(){
      return {
        // Options:
        optionsDiets: this.$globalData.diets,
        optionsDishes: this.$globalData.dishes,

        // Options chosen:
        time: 0,
        diets: [],
        dishes: [],

        clicked: '#76ded9',
        notClicked: 'white',
      }
    },
    methods: {
      addDiet(diet){
        this.$chosen.diet = diet;
      },
      addDish(dish){
        if (this.$chosen.dishes.includes(dish)){
          this.$chosen.dishes = this.$chosen.dishes.filter((d) => d !== dish)
        } else {
          this.$chosen.dishes.push(dish);
        }
      },
    }
  };
</script>

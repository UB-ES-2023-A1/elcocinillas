<template>
  <div class="pos" @mouseover="updateData">
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
              :style="[$chosen.diets.includes(diet) ? 
              {'background-color': clicked} :
              {'background-color': notClicked}]"
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
              {'background-color': notClicked}]"
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
  color: inherit;
}
img{
  margin-bottom: 30px;
}
.pos{
  display: grid;
}
h1 {
  font-size: 35px;
  text-shadow: 2px 2px lightsteelblue;
  color: black;
}
h2 {
  font-size: 35px;
  color: white;
  text-shadow: 2px black;
}
.column {
  width: 33.3333%;
  float: left;
  height: 450px;
}
#slider{
  width: 50%;
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
  height: 180px;
  transition: 1s;
}
img:hover {
  transform: scale(1.1);
  transition: 1s;
}
.to-recipes {
  position: relative;
  background-image: url("../assets/food-mural-2.jpg");
  color: white;
  background-size: 400px;
  font-size: 16px;
  padding: 10px 20px 10px;
  height: 75px;
  width: 300px;
  text-align: center;
  margin: auto;
  margin-top: 20px;
  border-radius: 10px;
  top: -20px;
}
.to-recipes:hover{
  filter: brightness(1.1);
  background-size: 250px;
  background-repeat: repeat;
  transform: rotate(-3deg);
  transition: 0.2s;
}
ul{
  height: 100px;
  list-style-type: none;
}
li{
  height:fit-content;
  width: 150px;
  color: white;
  background-color: bisque;
  text-align: center;
  margin: 2px;
  border-radius: 20px;
  box-shadow: 2px 2px black;
  cursor: pointer;
  transition: 0.2s;
  transform: translateX(-15px)
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

        clicked: '#44d9de',
        notClicked: 'lightgray',
      }
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
      updateData() {

      },
      /*toLink(link){
        window.location = encodeURI(link
            + '%' + this.time
            + '%' + this.diets
            + '%' + this.dishes);
      }*/
      }
  };
</script>

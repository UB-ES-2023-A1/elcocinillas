<template>
  <div id="main" data-cy="main-HomeView">
    <div>
      <div class="column left">
        <ColumnComp>
          <template #heading>Tiempo</template>
          <template #image>
            <img src="../assets/clock.png" alt="Health Icon" class="image"/>
          </template>
          <template #description>
            <div id="time-desc">
              <div>
                <h4 style="font-size: 2.5vh;">Tiempo máximo (minutos): {{ time }}</h4>
              </div>
              <input type="range" min="0" max="60" value=30
              class="slider" id="slider" v-model="time" style="margin-bottom: 10px;"
              @input="updateTime(time);">
            </div>
          </template>
        </ColumnComp>
      </div>
      <div class="column center">
        <ColumnComp>
          <template #heading>Dieta</template>
          <template #image>
            <img src="../assets/diet.png" alt="Health Icon" class="image"/>
          </template>
          <template #description> 
            <ul class="main-ul">
              <li class="main-li" v-for="diet in optionsDiets" v-bind:key="diet.id"
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
            <img src="../assets/food-plate-1.png" alt="Health Icon" class="image"/>
          </template>
          <template #description>
            <ul class="main-ul">
              <li class="main-li" v-for="dish in optionsDishes" v-bind:key="dish.id"
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
    <router-link to="/recetas">
      <button class="to-recipes">
        Ver Recetas
      </button>
    </router-link>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
}
#main{
  display: grid;
}
.column {
  width: 33.3333%;
  float: left;
  height: 75vh;
}
#slider{
  width: 30vh;
}
.image {
  height: 30vh;
  margin-bottom: 30px;
  transition: 1s;
}
.image:hover {
  transform: scale(1.1);
  transition: 1s;
}
.time-desc{
  display: grid;
  font-size: 4vh;
}
.to-recipes {
  background-color: lightgray;
  text-decoration: none;
  font-size: 4vh;
  color: black;
  text-shadow: 2px black;
  height: 12vh;
  width: 50vh;
  margin: auto;
  margin-bottom: 8vh;
  border-radius: 10vh;
  transition: 0.2s;
}
.to-recipes:hover{
  background-color: #76ded9;
  box-shadow: 5px 5px black;
  color: white;
  transition: 0.2s;
}
.main-ul{
  height: 100px;
  list-style-type: none;
  padding: 0;
}
.main-li, button{
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
  display: grid;
  align-items: center;
}
.main-li:hover{
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
    },
    created(){
      this.time = this.$chosen.time;
    }
  };
</script>

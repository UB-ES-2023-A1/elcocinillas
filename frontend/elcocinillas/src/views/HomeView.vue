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
            class="slider" id="myRange" v-model="time">
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
            <div>
              <input type="checkbox" id="dietVega" value="Vegana" v-model="diets">
              <label for="dietVega">Vegana</label>
            </div>
            <div>
              <input type="checkbox" id="dietVege" value="Vegetariana" v-model="diets">
              <label for="dietVege">Vegetariana</label>
            </div>
            <div>
              <input type="checkbox" id="dietOmni" value="Omnívora" v-model="diets">
              <label for="dietOmni">Omnívora</label>
            </div>
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
            <div>
              <input type="checkbox" id="dishSala" value="Ensalada" v-model="dishes">
              <label for="dishSala">Ensalada</label>
            </div>
            <div>
              <input type="checkbox" id="dishBurg" value="Hamburguesa" v-model="dishes">
              <label for="dishBurg">Hamburguesa</label>
            </div>
            <div>
              <input type="checkbox" id="dishDess" value="Postre" v-model="dishes">
              <label for="dishDess">Postre</label>
            </div>
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
.pos{
  display: grid;
  background-size: 200px;
  background-repeat: repeat;
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
.choices {
  max-height: 100px;
  text-align: center;
  border-radius: 25px;
  cursor: pointer;
  overflow: hidden;
}
.choices {
  overflow: visible;
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
</style>

<script>
import ColumnComp from "../components/ColumnComp.vue"

export default {  
    components: { ColumnComp },
    data(){
      return {
        // Options chosen:
        time: 0,
        diets: [],
        dishes: []
      }
    },
    methods: {
      updateData() {
        this.$globalData.time = this.time;
        this.$globalData.diets = this.diets;
        this.$globalData.dishes = this.dishes;
      },
      toLink(link){
        window.location = encodeURI(link);
        /*
        window.location = encodeURI(link
            + '%' + this.time
            + '%' + this.diets
            + '%' + this.dishes);
        */
      }
    }
  };
</script>

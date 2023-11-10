<template>
  <div class="pos" @click="updateData">
    <div>
      <div class="column left">
        <ColumnComp>
          <template #heading>Tiempo Cocción</template>
          <template #image>
            <img src="../assets/clock.png" alt="Health Icon" />
          </template>
          <template #description>
            <v-app class="choices" style="padding-top: 25px;">
              Tiempo Máximo (minutos):
              <v-slider
                v-model="time"
                :min="0"
                :max="60"
                :step="15"
                thumb-label="always"
              ></v-slider>
            </v-app>
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
            <v-app class="choices">
              <v-container>
                <v-select
                  v-model="diets"
                  chips
                  label="Escoge tu dieta"
                  :items="dataDiets"
                  multiple
                ></v-select>
              </v-container>
            </v-app>
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
            <v-app class="choices">
              <v-container>
                <v-select
                  v-model="dishes"
                  chips
                  label="Escoge tipo de comida"
                  :items="dataDishes"
                  multiple
                ></v-select>
              </v-container>
            </v-app>
          </template>
        </ColumnComp>
      </div>
    </div>
    <button class="to-recipes" @click="toLink('/recetas')">
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
        // Data:
        dataDiets: ['Vegana', 'Vegetariana', 'Omnívora'],
        dataDishes: ['Ensalada', 'Hamburguesa', 'Pizza', 'Postre'],
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

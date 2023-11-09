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
                  v-model="diet"
                  chips
                  label="Escoge tu dieta"
                  :items="diets"
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
                  v-model="dish"
                  chips
                  label="Escoge tipo de comida"
                  :items="dishes"
                  multiple
                ></v-select>
              </v-container>
            </v-app>
          </template>
        </ColumnComp>
      </div>
    </div>
    <button class="to-recipes" @click="toLink('/recetas')">
      <h2>
        Ver Recetas
      </h2>
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
  background-color: #cc9966;
  color: white;
  background-size: 300px;
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
        diets: ['Vegana', 'Vegetariana', 'Omnívora'],
        dishes: ['Ensalada', 'Hamburguesa', 'Pizza', 'Postre'],
        // Options chosen:
        time: 0,
        diet: [],
        dish: []
      }
    },
    methods: {
      toLink(link){
        window.location = encodeURI(link
            + '%' + this.time
            + '%' + this.diet
            + '%' + this.dish);
      }
    }
  };
</script>

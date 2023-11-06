<template>
  <div class="rel">
    <div>
      <div class="column left">
        <ColumnComp>
          <template #heading>Tiempo Cocción</template>
          <template #image>
            <img src="../assets/clock.png" alt="Health Icon" />
          </template>
          <template #description>
            <v-app class="slider">
              Minutos:
              <v-slider
                v-model="value"
                :min="0"
                :max="60"
                :step="15"
                thumb-label
              ></v-slider>
            </v-app>
            {{ value }}
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
                  chips
                  label="Escoge tu dieta"
                  :items="['Vegana', 'Vegetariana', 'Omnívora']"
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
            <img src="../assets/foodtypes.png" alt="Health Icon"/>
          </template>
          <template #description>
            <v-app class="choices">
              <v-container>
                <v-select
                  chips
                  label="Escoge tipo de comida"
                  :items="['Ensalada', 'Hamburguesa', 'Pizza', 'Postre']"
                  multiple
                ></v-select>
              </v-container>
            </v-app>
          </template>
        </ColumnComp>
      </div>
    </div>
    <div class="link">
      <router-link to='recetas/${}'>
        <div>
          <h2>
            Ver Recetas!
          </h2>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.link:hover{
  scale: 1.1;
}

.toRecipes{
  text-align: center;
  place-content: center;
}
.h2{
  margin: 20px;
  font-size: 100px;
  color: black;
  text-shadow: 2px 2px white;
}
.rel {
  width: 100%;
  text-align: center;
  place-content: center;
}
.column {
  width: 33%;
  float: left;
  height: 450px;
}
.choices {
  max-height: 100px;
  place-content: center;
  text-align: center;
  border-radius: 25px;
  position: relative;
  cursor: pointer;
}
.slider {
  max-height: 60px;
  text-align: center;
  border-radius: 15px;
  position: relative;
  cursor: pointer;
}
.left {
  background-color: #13cfb9;
  transition: filter 1s;
}
.left:hover {
  filter: brightness(120%);
  transition: filter 1s;
  cursor: pointer;
}
.center {
  background-color: #76ded9;
  filter: brightness(100%);
  transition: filter 1s;
}
.center:hover {
  filter: brightness(130%);
  transition: filter 1s;
  cursor: pointer;
}
.right {
  background-color: #13cfb9;
  transition: filter 1s;
}
.right:hover {
  filter: brightness(120%);
  transition: filter 1s;
  cursor: pointer;
}

img {
  height: 180px;
  place-items: center;
  place-content: center;
  transition: 1s;
  position: relative;
}

img:hover {
  transform: scale(1.1);
  transition: 1s;
}
</style>

<script setup>
import ColumnComp from "../components/ColumnComp.vue"

</script>

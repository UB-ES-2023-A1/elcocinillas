<template>
  <div id="app">
    <section id="headerSection">
      <p id="titleReceta">{{ this.name }}</p>
      <div class="container">
        <div class="row">
          <div class="col-sm border-right">
            <p style="font-size: xx-large">{{ this.user }}</p>
            <p style="font-size: x-large">usuario</p>
          </div>
          <div class="col-sm border-right">
            <p style="font-size: xx-large">{{ this.time }}</p>
            <p style="font-size: x-large">minutos</p>
          </div>
          <div class="col-sm">
            <p style="font-size: xx-large">{{ this.dificultad }} / 5</p>
            <p style="font-size: x-large">Dificultad</p>
          </div>
        </div>
      </div>
    </section>

    <section class="sectionsReceta">
      <p style="font-size: x-large">INGREDIENTES (4 personas):</p>
      <hr id="solidDividerYellow" />
      <p>{{ this.ingredientes }}</p>

    </section>

    <section class="sectionsReceta">
      <p style="font-size: x-large">ELABORACIÓN DE LA RECETA</p>
      <hr id="solidDividerYellow" />
      <p>Estos son los pasos que tienes que seguir</p>
      <p>{{ this.steps }}</p>
    </section>
  </div>
</template>

<style scoped>
#app {
  font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5%;
  padding-left: 10%;
  padding-right: 10%;
}

#headerSection {
  color: #5c5540;
  margin-bottom: 10%;
}

#titleReceta {
  font-weight: bold;
  margin-top: 12px;
  margin-bottom: 80px;
  color: #5c5540;
  text-align: center;
  font-size: xxx-large;
}

.sectionsReceta {
  color: #5c5540;
  margin-bottom: 10%;
  text-align: left;
}

#solidDividerYellow {
  border: 4px solid #eef2b6;
  width: 100%;
  opacity: 1;
  margin-bottom: 30px;
}
</style>

<script>
import axios from "axios";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Recipe",
  props: {
    nombreReceta : String
  },
  data() {
    return {
      ingredientes: null,
      steps: null,
      time: 0,
      name: null,
      dificultad: 0,
      urlImagen: null,
      user: null
    };
  },
  created() {
    this.getRecipe();
  },

  methods: {
    getRecipe() {
      const pathReceta = "http://localhost:8000/receta/"+this.nombreReceta;
      const urlCodificada = encodeURI(pathReceta);
      axios
        .get(urlCodificada)
        .then((response) => {
          console.log("metodo getRecipe() llamada OK");
          this.ingredientes = response.data.ingredientes;
          this.steps = response.data.pasos;
          this.time = response.data.time;
          this.name = response.data.nombre;
          this.dificultad = response.data.dificultad;
          this.urlImagen = response.data.images.toString();
          this.user = response.data.user;
        })
        .catch((error) => {
          console.error("Error fetching recipes:", error);
        });
    },
  },
};
</script>

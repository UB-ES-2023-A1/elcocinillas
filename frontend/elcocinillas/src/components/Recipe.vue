<template>
  <div id="app">
    <section id="headerSection">
      <h1 id="title">{{ this.name }}</h1>
      <div class="container">
        <div class="row">
          <div class="col-sm border-right">
            <h2>{{ this.ingredientes.length }}</h2>
            <h4>ingredientes</h4>
          </div>
          <div class="col-sm border-right">
            <h2>{{ this.time }}</h2>
            <h4>minutos</h4>
          </div>
          <div class="col-sm">
            <h2>{{ this.dificultad }} / 5</h2>
            <h4>Dificultad</h4>
          </div>
        </div>
      </div>
    </section>

    <section class="sections">
      <h4>INGREDIENTES (4 personas):</h4>
      <hr id="solidDividerYellow" />
      <ul v-for="ingrediente in this.ingredientes" :key="ingrediente.id">
        <li>{{ ingrediente }}</li>
      </ul>
    </section>

    <section class="sections">
      <h4>ELABORACIÓN DE LA RECETA</h4>
      <hr id="solidDividerYellow" />
      <p>Estos son los pasos que tienes que seguir</p>
      <ul v-for="step in steps" :key="step.id">
        <li>{{ step }}</li>
      </ul>
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
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 5%;
}

#headerSection {
  color: #5c5540;
  margin-bottom: 10%;
}

#title {
  font-weight: bold;
  margin-bottom: 80px;
}

.sections {
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
  data() {
    return {
      ingredientes: ["Manzana", "Pera"],
      steps: ["Picar la fruta", "Meter fruta en boca"],
      time: 0,
      name: null,
      dificultad: 0,
      urlImagen: null,
    };
  },
  created() {
    console.log("metodo created()");
    this.getRecipe();
  },

  methods: {
    getRecipe() {
      console.log("metodo getRecipe() antes de la llamada");
      const pathReceta = "http://localhost:8000/receta/Salsa de boletus y ceps";
      const urlCodificada = encodeURI(pathReceta);
      axios
        .get(urlCodificada)
        .then((response) => {
          console.log("metodo getRecipe() llamada OK");
          //TODO: setear los datos correctamente a partir de la respuesta de la llamada
          this.ingredientes = response.data.ingredientes;
          this.steps = response.data.pasos;
          this.time = response.data.time;
          this.name = response.data.nombre;
          this.dificultad = response.data.dificultad;
          this.urlImagen = response.data.images.toString();
          console.log(this.urlImagen);
        })
        .catch((error) => {
          console.error("Error fetching recipes:", error);
        });
    },
  },
};
</script>

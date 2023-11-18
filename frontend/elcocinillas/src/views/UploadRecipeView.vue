<template>
  <div id="app">
    <h1 id="title">Publicar Receta</h1>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary" @click="uploadRecipe">Submit</button>
  </div>
</template>

<style>
#app {
  font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 5%;
  text-align: left;
}

#title {
  font-weight: bold;
  margin-bottom: 80px;
  color: #5c5540;
  margin-bottom: 8%;
  text-align: center;
}

</style>

<script>
import axios from "axios";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  data() {
    return {
      user: null, //TODO: recoger usuario de vuex
      nombre: null,
      classe: null,
      tipo: null,
      ingredientes: [],
      pasos: [],
      images: null,
      time: null,
      dificultad: 0
    };
  },

  methods: {
    uploadRecipe() {
      console.log("Click en submit");

      const path = "http://localhost:8000/receta/";

      try {
        // Realiza la solicitud POST utilizando this.datos
        const respuesta = axios.post(path, this.getDatosReceta());

        // Maneja la respuesta
        console.log('Respuesta del servidor:', respuesta.data);
      } catch (error) {
        // Maneja los errores
        console.error('Error al realizar la solicitud POST:', error);
      }
    },

    getDatosReceta() {
      return {
          user: "Marc",
          nombre: "Hamburguesa de garbanzos",
          classe: "Vegetariana",
          tipo: "Ensalada",
          ingredientes: ["500 g de garbanzos cocidos (naturales o de bote)", "2 cucharadas de aceite de oliva", "1 cebolla picada", "3 apios picados", "1 manzana picada", "60gr de almendras picadas"],
          pasos: ["Trituramos los garbanzos cocidos de manera que formen una pasta más o menos homogénea y reservamos.",
            "Doramos la cebolla, y cuando esté más o menos dorada, incorporamos el apio, la manzana y las  almendras picadas. Lo salpimentamos al gusto (también podemos añadir algo de albahaca).",
            "Lo añadimos a la mezcla de los garbanzos junto a las 2 cucharadas de harina de garbanzos y volvemos a batir.",
            "Una vez preparada la mezcla, pasamos las hamburguesas por un poco más de harina de garbanzos",
            "En una sartén con aceite caliente, se doran las hamburguesas a un fuego medio, 5 minutos por cada lado."],
          images: [],
          time: 45,
          dificultad: 2
      };
    }

  },
};

</script>
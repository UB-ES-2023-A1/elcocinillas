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
      axios.post(path, {
            user: "Alejandro",
            nombre: "Ensalada césar",
            classe: "Omnivora",
            tipo: "Ensalada",
            ingredientes: ["lechuga", "pollo", "salsa", "tomate", "picatostes"],
            pasos: ["Prepararamos primero los picatostes caseros. Para ello calentamos el horno a 180º. Mientras se calienta, frotamos el pan con un diente de ajo y lo cortamos en dados. Aliñamos el pan con un poco de aceite de oliva y los horneamos durante 5 minutos hasta que estén dorados.",
            "Para hacer el aliño o salsa César, hacemos puré el diente de ajo que habíamos usado para frotar el pan y lo mezclamos con el aceite, la salsa Perrins, el zumo de limón, una cucharada de vinagre y la yema de huevo. Batimos bien hasta emulsionar y lo reservamos. Como podéis ver, en la salsa original, no se utilizan anchoas, pero sí en la salsa de la ensalada Cesar de pollo.",
            "Lavamos y secamos las hojas de lechuga romana y las salpimentamos con esmero. Después echamos el aliño o salsa César por encima de las barcas u hojas de lechuga romana. Completamos rellenando las hojas con algunos picatostes y rallamos en el momento el queso parmesano por encima para que sea bien visible."],
            images: [],
            time: 15,
            dificultad: 0
          })
          .then(function (response) {
            console.log("Receta publicada", response);
          })
          .catch(function (error) {
            console.log("Error en la publicacion", error.toString());
          });

    },
  },
};

</script>
<template>
  <body>
    <div class="testbox">
      <form action="/">
        <div class="banner">
          <h1 style="font-weight: bold;">Publicar receta</h1>
        </div>
        <div class="item">
          <label for="name">Nombre receta<span> *</span></label>
          <input id="name" type="text" name="name" required/>
        </div>

        <div class="item">
          <p>Escoge la dieta<span> *</span></p>
          <select>
            <option selected value="" disabled selected></option>
            <option value="Vegana" >Vegana</option>
            <option value="Vegetariana">Vegetariana</option>
            <option value="Omnívora">Omnívora</option>
          </select>
        </div>

        <div class="item">
          <p>¿De qué clase dirías que es tu plato?<span> *</span></p>
          <select>
            <option selected value="" disabled selected></option>
            <option value="Hamburguesa" >Hamburguesa</option>
            <option value="Postre">Postre</option>
            <option value="Ensalada">Ensalada</option>
          </select>
        </div>

        <div class="item">
          <label for="visit">¿Cuáles son los ingredientes necesarios?<span> *</span></label>
          <textarea id="visit" rows="4" required></textarea>
        </div>
        <div class="item">
          <label for="visit">Describe los pasos para elaborar la receta<span> *</span></label>
          <textarea id="visit" rows="6" required></textarea>
        </div>

        <div id="photoPicker">
          <label for="exampleFormControlFile1">¿Quieres acompañar tu receta con alguna foto?</label>
          <input type="file" class="form-control-file" id="exampleFormControlFile1">
        </div>

        <div id="timeSlider">
          <label for="phone">Tiempo máximo (minutos): {{ time }} <span>minutos</span></label>
          <input type="range" min="0" max="120" value="60"
                 class="slider" id="myRange" v-model="time">
        </div>

        <div class="btn-block">
          <button type="submit" href="/">SUBMIT</button>
        </div>
      </form>
    </div>
  </body>
</template>

<style>
#app {
  font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-left: 10%;
  margin-right: 10%;
  text-align: left;
}

body {
  min-height: 100%;
}
body, div, form, input, select, textarea, label {
  padding: 0;
  margin: 0;
  outline: none;
  font-family: Roboto, Arial, sans-serif;
  font-size: 14px;
  color: #666;
  line-height: 22px;
}
h1 {
  position: absolute;
  margin: 0;
  font-size: 40px;
  color: #fff;
  z-index: 2;
  line-height: 83px;
}
.testbox {
  display: flex;
  justify-content: center;
  align-items: center;
  height: inherit;
  padding: 20px;
}
form {
  width: 100%;
  padding: 20px;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0 0 8px  #73694F;
}
.banner {
  position: relative;
  height: 400px;
  background-image: url("../img/defaultPhotoForm.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.banner::after {
  content: "";
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  width: 100%;
  height: 100%;
}
input, select, textarea {
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}
input {
  width: calc(100% - 10px);
  padding: 5px;
}

textarea {
  width: calc(100% - 12px);
  padding: 5px;
}
.item:hover p, input:hover::placeholder {
  color: #73694F;
}
.item input:hover, .item select:hover, .item textarea:hover {
  border: 1px solid transparent;
  box-shadow: 0 0 3px 0 #73694F;
  color: #73694F;
}

.item select {
  min-width: 150px;
}

.item {
  position: relative;
  margin: 10px 0;
}
.item span {
  color: red;
}

.btn-block {
  margin-top: 10px;
  text-align: center;
}
button {
  width: 150px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background: #EEF2B6;
  font-size: 16px;
  cursor: pointer;
}
button:hover {
  background: #eef2b6;
  opacity: 70%;
}

#timeSlider {
  margin: 25px 0;
}

input[type="range"] {
  accent-color: #13CFB9;
}

@media (min-width: 568px) {
  .name-item {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .name-item input, .name-item div {
    width: calc(50% - 20px);
  }
  .name-item div input {
    width:97%;}
  .name-item div label {
    display:block;
    padding-bottom:5px;
  }
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
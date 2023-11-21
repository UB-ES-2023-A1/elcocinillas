<template>
  <body>
    <div class="testbox">
      <form @submit.prevent="uploadRecipe">
        <div class="banner">
          <h1 style="font-weight: bold;">Publicar receta</h1>
        </div>
        <div class="item">
          <label for="name">Nombre receta<span> *</span></label>
          <input id="name" type="text" required v-model="nombreReceta"/>
        </div>

        <div class="item">
          <p>Escoge la dieta<span> *</span></p>
          <select v-model="tipoReceta">
            <option selected value=""></option>
            <option value="Vegana" >Vegana</option>
            <option value="Vegetariana">Vegetariana</option>
            <option value="Omnívora">Omnívora</option>
          </select>
        </div>

        <div class="item">
          <p>¿De qué clase dirías que es tu plato?<span> *</span></p>
          <select v-model="classeReceta">
            <option selected value=""></option>
            <option value="Hamburguesa" >Hamburguesa</option>
            <option value="Postre">Postre</option>
            <option value="Ensalada">Ensalada</option>
          </select>
        </div>

        <div class="item">
          <label for="visit">¿Cuáles son los ingredientes necesarios?<span> *</span></label>
          <textarea id="visit" rows="4" required v-model="ingredientesReceta"></textarea>
        </div>
        <div class="item">
          <label for="visit">Describe los pasos para elaborar la receta<span> *</span></label>
          <textarea id="visit" rows="6" required v-model="pasosReceta"></textarea>
        </div>

        <div class="item">
          <p>Dificultad<span> *</span></p>
          <select v-model="dificultadReceta">
            <option selected value="0">0</option>
            <option value="1" >1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div id="timeSlider">
          <label for="phone">Tiempo máximo (minutos): {{ timeReceta }} <span>minutos</span></label>
          <input type="range" min="0" max="120" class="slider" id="myRange" v-model="timeReceta">
        </div>

        <div id="photoPicker">
          <label for="exampleFormControlFile1">¿Quieres acompañar tu receta con alguna foto?</label>
          <input type="file" class="form-control-file" id="exampleFormControlFile1" @change="handleFileChange($event)">
        </div>

        <div class="btn-block">
          <button type="submit">Publicar</button>
        </div>
      </form>
    </div>
  </body>
</template>

<style>
body {
  min-height: 100%;
  font-family: "Lato", sans-serif;
}
body, div, form, input, select, textarea, label {
  padding: 0;
  margin: 0;
  outline: none;
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
  margin-top: 7%;
}
button:hover {
  background: #eef2b6;
  opacity: 70%;
}

#timeSlider {
  margin: 25px 0;
}

input[type="range"] {
  accent-color: #73694F;
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
      usuario: null, //TODO: recoger usuario de vuex
      nombreReceta: null,
      classeReceta: "",
      tipoReceta: "",
      ingredientesReceta: "",
      pasosReceta: "",
      imagesReceta: "",
      timeReceta: 15,
      dificultadReceta: 0
    };
  },

  methods: {
    uploadRecipe() {
      console.log("Click en submit", this.getDatosReceta());

      const path = "http://localhost:8000/receta/";

      axios.post(path, this.getDatosReceta())
          .then((response) => {
            console.log('Ok publicar receta:', response.data);
            this.recipes = response.data;
            alert("¡Felicidades! Tu receta se ha publicado")
          })
          .catch((error) => {
            console.error('KO publicar receta:', error);
            alert("Se ha producido un error. Inténtalo de nuevo más tarde")
          })
    },

    getDatosReceta() {
      return {
          user: "Marcos",
          nombre: this.nombreReceta,
          classe: this.classeReceta,
          tipo: this.tipoReceta,
          ingredientes: this.ingredientesReceta,
          pasos: this.pasosReceta,
          images: "",
          time: this.timeReceta,
          dificultad: this.dificultadReceta
      };
    },
    handleFileChange(event) {
      this.file = event.target.files[0];

      // Crea un objeto FormData para enviar el archivo y otros datos
      const formData = new FormData();
      formData.append('nombre', this.nombreReceta);
      formData.append('file', this.file);
      const path = "http://localhost:8000/imgUpload/";

      axios.post(path,formData).then((response) => {
          console.log('Foto seleccionada:', this.images);
          this.imagesReceta = response.data;
      }).catch ((error) =>{
          console.error(error);
      })
    },

  },
};

</script>
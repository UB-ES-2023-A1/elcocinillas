<template>
  <body class="univ">
    <div class="univ testbox">
      <form id="form" class="univ" @submit.prevent="uploadRecipe">
        <div class="univ banner">
          <h1 id="title" style="font-weight: bold;">Publicar receta</h1>
        </div>
        <div class="univ item">
          <label class="univ" for="name">Nombre receta<span> *</span></label>
          <input class="univ bordered ur-input" id="name" type="text" required v-model="nombreReceta"/>
        </div>

        <div class="univ item">
          <p>Escoge la dieta<span> *</span></p>
          <select class="univ bordered" v-model="tipoReceta">
            <option selected value=""></option>
            <option value="Vegana" >Vegana</option>
            <option value="Vegetariana">Vegetariana</option>
            <option value="Omnívora">Omnívora</option>
          </select>
        </div>

        <div class="univ item">
          <p>¿De qué clase dirías que es tu plato?<span> *</span></p>
          <select class="univ bordered" v-model="classeReceta">
            <option selected value=""></option>
            <option value="Hamburguesa" >Hamburguesa</option>
            <option value="Postre">Postre</option>
            <option value="Ensalada">Ensalada</option>
          </select>
        </div>

        <div class="univ item">
          <label class="univ" for="visit">¿Cuáles son los ingredientes necesarios?<span> *</span></label>
          <textarea class="univ bordered" id="visit" rows="4" required v-model="ingredientesReceta"></textarea>
        </div>
        <div class="item">
          <label class="univ" for="visit">Describe los pasos para elaborar la receta<span> *</span></label>
          <textarea lcass="univ" id="visit" rows="6" required v-model="pasosReceta"></textarea>
        </div>

        <div class="univ item">
          <p>Dificultad<span> *</span></p>
          <select class="univ bordered" v-model="dificultadReceta">
            <option selected value="0">0</option>
            <option value="1" >1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div class="univ" id="timeSlider">
          <label class="univ" for="phone">Tiempo máximo (minutos): {{ timeReceta }} <span>minutos</span></label>
          <input class="univ bordered slider ur-input" type="range" min="0" max="120" id="myRange" v-model="timeReceta">
        </div>

        <div class="univ" id="photoPicker">
          <label class="univ" for="exampleFormControlFile1">¿Quieres acompañar tu receta con alguna foto?</label>
          <input class="univ bordered ur-input form-control-file" type="file" id="exampleFormControlFile1" @change="handleFileChange">
        </div>

        <div class="univ btn-block">
          <button class="ur-button" type="submit">Publicar</button>
        </div>
      </form>
    </div>
  </body>
</template>

<style>
.univ{
  font-family: "Lato", sans-serif;
  padding: 0;
  margin: 0;
  outline: none;
  font-size: 14px;
  color: #666;
  line-height: 22px;
}

#title{
  position: absolute;
  margin: 0;
  font-size: 40px;
  color: #fff;
  z-index: 2;
  line-height: 83px;
}
#form {
  width: 100%;
  padding: 20px;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0 0 8px  #73694F;
}
.bordered{
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}
.ur-input {
  width: calc(100% - 10px);
  padding: 5px;
}
.ur-textarea {
  width: calc(100% - 12px);
  padding: 5px;
}
.ur-button {
  width: 150px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background: #73694f;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin-top: 7%;
}
.ur-button:hover {
  opacity: 70%;
}
input[type="range"] {
  accent-color: #73694F;
}
.testbox {
  display: flex;
  justify-content: center;
  align-items: center;
  height: inherit;
  padding: 20px;
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
#timeSlider {
  margin: 25px 0;
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
      imagesReceta: null,
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
      this.images = event.target.files[0];

      console.log('Foto seleccionada:', this.images);
    },

  },
};

</script>
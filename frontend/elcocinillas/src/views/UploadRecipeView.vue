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
          <p>Escoge la dieta</p>
          <select v-model="tipoReceta" data-cy="escoge_dieta"> 
            <option selected value=""></option>
            <option value="Vegana" >Vegana</option>
            <option value="Vegetariana">Vegetariana</option>
            <option value="Omnívora">Omnívora</option>
          </select>
        </div>

        <div class="item">
          <p>¿De qué clase dirías que es tu plato?</p>
          <select v-model="classeReceta" data-cy="escoge_plato">
            <option selected value=""></option>
            <option value="Hamburguesa" >Hamburguesa</option>
            <option value="Postre">Postre</option>
            <option value="Ensalada">Ensalada</option>
          </select>
        </div>

        <div class="item" id="ingredientesContainer">
          <label for="visit">¿Cuáles son los ingredientes necesarios? (Clica el botón para añadir más ingredientes)<span> *</span></label>
          <textarea id="visit" rows="1" required data-cy="ingredientes"></textarea>
          <textarea id="visit" rows="1" required data-cy="ingredientes"></textarea>
          <button type="button" @click="agregarCampoIngrediente()" id="botonIngredientes">Añadir ingrediente</button>
        </div>
        <div class="item" id="pasosContainer">
          <label for="visit">Describe los pasos para elaborar la receta<span> *</span></label>
          <textarea id="visit" rows="2" required data-cy="descripcion"></textarea>
          <textarea id="visit" rows="2" required data-cy="descripcion"></textarea>
          <button type="button" @click="agregarCampoPaso()" id="botonIngredientes">Añadir paso</button>
        </div>

        <div class="item">
          <p>Dificultad<span> *</span></p>
          <select v-model="dificultadReceta" data-cy="dificultad">
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

        <div id="divBotonFormulario">
          <button id="botonFormulario" type="submit">Publicar</button>
        </div>
      </form>
    </div>
  </body>
</template>

<style scoped>
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
#botonIngredientes{
  background-color: #EEF2B6;
  border: none;
  border-radius: 5px;
  padding: 10px;
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

#divBotonFormulario{
  text-align: center;
}

#botonFormulario{
  text-align: center;
  width: 150px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 7%;
  background-color: #73694F;
  color: white;
}
#botonFormulario:hover {
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
import {store} from "@/store";
import router from "@/router";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  data() {
    return {
      usuario: store.state.userName,
      nombreReceta: null,
      classeReceta: "",
      tipoReceta: "",
      ingredientesReceta: [],
      pasosReceta: [],
      imagesReceta: "",
      timeReceta: 15,
      dificultadReceta: 0
    };
  },

  methods: {
    uploadRecipe() {
      this.updateIngredientes();
      this.updatePasos();
      console.log("Click en submit", this.getDatosReceta());

      //const path = "http://localhost:8000/receta/";
      const path = "https://elcocinillas-api.kindglacier-480a070a.westeurope.azurecontainerapps.io/receta/";

      axios.post(path, this.getDatosReceta())
          .then((response) => {
            console.log('Ok publicar receta:', response.data);
            this.recipes = response.data;
            alert("¡Felicidades! Tu receta se ha publicado")
            router.push("/recetas");
          })
          .catch((error) => {
            console.error('KO publicar receta:', error);
            alert("Se ha producido un error. Inténtalo de nuevo más tarde")
          })
    },

    getDatosReceta() {
      return {
          user: this.usuario,
          nombre: this.nombreReceta,
          classe: this.classeReceta,
          tipo: this.tipoReceta,
          ingredientes: this.ingredientesReceta,
          pasos: this.pasosReceta,
          images: this.imagesReceta,
          time: this.timeReceta,
          dificultad: this.dificultadReceta,
          valoracion_media: 0,
          num_valoraciones: 0
      };
    },
    handleFileChange(event) {
      this.file = event.target.files[0];

      // Crea un objeto FormData para enviar el archivo y otros datos
      const formData = new FormData();
      formData.append('nombre', this.nombreReceta);
      formData.append('file', this.file);
      const path = "https://elcocinillas-api.kindglacier-480a070a.westeurope.azurecontainerapps.io/imgUpload/";

      axios.post(path,formData).then((response) => {
          console.log('Foto seleccionada:', this.images);
          this.imagesReceta = response.data;
      }).catch ((error) =>{
          console.error(error);
      })
    },

    agregarCampoIngrediente() {
      var camposDiv = document.getElementById('ingredientesContainer');
      var nuevoCampo = document.createElement('textarea');
      nuevoCampo.rows = 1
      nuevoCampo.style.width = 'calc(100% - 12px)';
      nuevoCampo.style.border = '1px solid #ccc'
      nuevoCampo.style.padding = '5px'
      nuevoCampo.style.marginBottom = '10px'
      nuevoCampo.style.borderRadius = '3px'
      nuevoCampo.style.color = '#666'
      nuevoCampo.name = 'nextIngredientes';
      camposDiv.insertBefore(nuevoCampo, camposDiv.lastChild);
      camposDiv.insertBefore(document.createElement('br'), nuevoCampo);
    },

    agregarCampoPaso() {
      var camposDiv = document.getElementById('pasosContainer');
      var nuevoCampo = document.createElement('textarea');
      nuevoCampo.rows = 2
      nuevoCampo.style.width = 'calc(100% - 12px)';
      nuevoCampo.style.border = '1px solid #ccc'
      nuevoCampo.style.padding = '5px'
      nuevoCampo.style.marginBottom = '10px'
      nuevoCampo.style.borderRadius = '3px'
      nuevoCampo.style.color = '#666'
      nuevoCampo.name = 'nextPaso';
      camposDiv.insertBefore(nuevoCampo, camposDiv.lastChild);
      camposDiv.insertBefore(document.createElement('br'), nuevoCampo);
    },

    updateIngredientes(){
      var ingredientesContainer = document.getElementById('ingredientesContainer');
      var textAreas = ingredientesContainer.getElementsByTagName('textarea');

      for (var i = 0; i < textAreas.length; i++) {
        var valorTextArea = textAreas[i].value;
        if(valorTextArea !== "" && valorTextArea.length !== 0){
          this.ingredientesReceta.push(valorTextArea);
        }
      }
    },

    updatePasos(){
      var pasosContainer = document.getElementById('pasosContainer');
      var textAreas = pasosContainer.getElementsByTagName('textarea');

      for (var i = 0; i < textAreas.length; i++) {
        var valorTextArea = textAreas[i].value;
        if(valorTextArea !== "" && valorTextArea.length !== 0){
          this.pasosReceta.push(valorTextArea);
        }
      }
    },
  },
};

</script>
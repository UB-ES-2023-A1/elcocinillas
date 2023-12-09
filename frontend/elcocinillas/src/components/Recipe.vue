<template>
  <div id="app">
    <section id="headerSection">
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <h2 id="title">{{ this.name }}</h2>
            <div class="container" id="columnasDebajoTitulo">
              <div class="row">
                <div class="col border-right" style="padding-left: 0">
                  <h2>{{ this.time }}</h2>
                  <h4>minutos</h4>
                </div>
                <div class="col-6 border-right">
                  <div id="rate">
                    <!-- First loop for yellow stars -->
                    <span v-for="n in rating" :key="'yellow-' + n">
                <img src="../assets/star1.png" style="width: 6vh;"
                     @mouseover="stars(n)" @click="rate(n)">
              </span>
                    <!-- Second loop for black stars -->
                    <span v-for="m in 5-rating" :key="'black-' + (m + rating)">
                <img src="../assets/star0.png" style="width: 6vh;"
                     @mouseover="stars(m + rating)">
              </span>
                  </div>
                  <h4 v-if="!rated">¡Valora la receta!</h4>
                  <button class="button" id="delRating"
                          v-if="rated" @click="rated = false">
                    Borrar valoración
                  </button>
                </div>
                <div class="col-sm">
                  <h2>{{ this.dificultad }} / 5</h2>
                  <h4>Dificultad</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm" id="imagenHeader">
            <img src="../img/defaultRecipePhoto.png" class="img-fluid rounded">
          </div>
        </div>
      </div>
    </section>

    <section class="sections">
      <h4>INGREDIENTES (4 personas):</h4>
      <hr id="solidDividerYellow" />
      <p>{{ this.ingredientes }}</p>
    </section>

    <section id="circulosSection">
      <div class="container">
        <div class="row">
          <div class="col-sm d-flex justify-content-center">
            <CirculoComp v-bind:texto-superior="this.user" textoInferior="Usuario" colorFondo="#76DED9"/>
          </div>
          <div class="col-sm d-flex justify-content-center">
            <CirculoComp v-bind:texto-superior="this.valoracionMedia" textoInferior="Valoracion" colorFondo="#EEF2B6"/>
          </div>
          <div class="col-sm d-flex justify-content-center">
            <CirculoComp v-bind:texto-superior="this.tipo" textoInferior="Dieta" colorFondo="#73694F"/>
          </div>
        </div>
      </div>
    </section>

    <section class="sections">
      <h4>ELABORACIÓN DE LA RECETA</h4>
      <hr id="solidDividerYellow" />
      <p>Estos son los pasos que tienes que seguir</p>
      <p>{{ this.steps }}</p>
    </section>

    <section class="sections">
      <h4>Comentar Receta:</h4>
      <textarea id="comment" rows="3" v-model="v"></textarea>
      <button class="button" id="cannotComment" 
      v-if="v == null || v == ''">
        Añadir Comentario
      </button>
      <button class="button" id="canComment" 
      v-if="v != null && v != ''" @click="comment(v)">
        Añadir Comentario
      </button>
    </section>
  </div>
</template>

<style scoped>
#rate{
  cursor: pointer;
  margin-bottom: 2vh;
}
#delRating{
  color: grey;
}
#delRating:hover{
  box-shadow: 5px 5px black;
  transition: 0.2s;
}
#app {
  font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 7%;
  padding-left: 5%;
  padding-right: 5%;
}

#headerSection {
  color: #5c5540;
  margin-bottom: 8%;
}

#title {
  font-weight: bold;
  margin-bottom: 80px;
  color: #5c5540;
  font-size: xxx-large;
  text-align: left;
  margin-left: 4%;
}
.sections {
  color: #5c5540;
  text-align: left;
  margin-left: 3%;
}

#circulosSection{
  margin-top: 7%;
  margin-bottom: 7%;
}

#solidDividerYellow {
  border: 4px solid #eef2b6;
  width: 100%;
  opacity: 1;
  margin-bottom: 30px;
}
.button{
  margin:auto;
  height: 4vh;
  width: 30vh;
  font-size: 2.5vh;
  color: white;
  border-radius: 20px;
  border-style: solid;
  border-width: 1px;
  border-color: grey;
  cursor: pointer;
  transition: 0.2s;
  display: grid;
  align-items: center;
  margin-bottom: 0;
}
textarea{
  padding: 0;
  margin: 0;
  outline: none;
  font-size: 14px;
  color: #666;
  line-height: 22px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: calc(100% - 12px);
  padding: 5px;
}
#cannotComment{
  background-color: lightgray;
}
#canComment{
  background-color: #76ded9;
  box-shadow: 2px 2px black;
  transition: 0.2s;
}
#canComment:hover{
  box-shadow: 5px 5px black;
  transition: 0.2s;
}
</style>

<script>
import CirculoComp from "@/components/CirculoComp.vue";
import axios from "axios";
export default {
  components: {
    CirculoComp,
  },
  //eslint-disable-next-line vue/multi-word-component-names
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
      user: null,
      classe:null,
      tipo:null,
      valoracionMedia:null,

      v: null,
      blueish: '#76ded9',

      // Rating
      rating: 0,
      rated: false, 


    };
  },
  created() {
    this.getRecipe();
  },

  methods: {
    getRecipe() {
      //const pathReceta = "http://localhost:8000/receta/"+this.nombreReceta;
      const pathReceta = "https://elcocinillas-api.kindglacier-480a070a.westeurope.azurecontainerapps.io/receta/" + this.nombreReceta;
      const urlCodificada = encodeURI(pathReceta);
      axios
        .get(urlCodificada)
        .then((response) => {
          console.log("metodo getRecipe() llamada OK", response.data);
          this.ingredientes = response.data.ingredientes;
          this.steps = response.data.pasos;
          this.time = response.data.time;
          this.name = response.data.nombre;
          this.dificultad = response.data.dificultad;
          this.urlImagen = response.data.images;
          this.user = response.data.user;
          this.tipo = response.data.tipo;
          this.classe = response.data.classe;
          this.valoracionMedia = response.data.valoracion_media;
          console.log(this.urlImagen[0])
        })
        .catch((error) => {
          console.error("Error fetching recipes:", error);
        });
    },
    stars(n){
      if (!this.rated) this.rating = n;
    },
    rate(n){
      alert('Valoración añadida: ' + n + ' estrellas!');
      this.rated = true;
    },
    comment(v){
      alert('Comentario añadido: "' + v + '"');
    },
  },
};
</script>

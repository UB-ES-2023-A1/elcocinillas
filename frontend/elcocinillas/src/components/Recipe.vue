<template>
  <div id="app" data-cy="main-Recipe">
    <section id="headerSection">
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <div id="contenedorNombre">
              <h2 id="title" data-cy="recipe-title">{{ this.name }}</h2>
              <img src="../img/mark.png" v-if="this.$globalData.logged" data-cy="imagenGuardarReceta"
              style="height: 30px;"
              :style="{ filter: this.receptaSeguida ? 
              'invert(27%) sepia(99%) saturate(715%) hue-rotate(346deg) brightness(112%) contrast(104%)' : 'grayscale(100%)',
              'filter' : 'invert(50%)'}"
              @click="seguirReceta()">
            </div>
            <div id="contenedorUsuario">
              <h5 id="subtitulo" data-cy="recipe-subtitle">by {{this.user}}</h5>
              <img src="../img/person_add.png" v-if="this.$globalData.logged"
              :style="{ filter: this.userSeguid ? 'invert(27%) sepia(99%) saturate(715%) hue-rotate(346deg) brightness(112%) contrast(104%)' : 'grayscale(100%)',
              'filter' : 'invert(50%)'}"
              @click="seguirAmigo()">
            </div>
            <div class="container" id="columnasDebajoTitulo" data-cy="recipe-data">
              <div class="row">
                <div class="col border-right" style="padding-left: 0">
                  <h2>{{ this.time }}</h2>
                  <h4>minutos</h4>
                </div>
                <div class="col border-right" v-if="this.valoracionMedia !== undefined && this.valoracionMedia > 0">
                  <h2>{{ this.valoracionMedia }} puntos</h2>
                  <h4>{{ this.numValoraciones }} valoraciones</h4>
                </div>
                <div class="col-sm">
                  <h2>{{ this.dificultad }} / 5</h2>
                  <h4>Dificultad</h4>
                </div>
              </div>
            </div>
            <section id="circulosSection">
              <div class="container">
                <div class="row">
                  <div class="col-sm d-flex justify-content-center" v-if="this.tipo !== '' && this.tipo !== undefined">
                    <CirculoComp v-bind:texto-superior="this.tipo" textoInferior="Tipo" colorFondo="#EEF2B6"/>
                  </div>
                  <div class="col-sm d-flex justify-content-center" v-if="this.classe !== '' && this.classe !== undefined ">
                    <CirculoComp v-bind:texto-superior="this.classe" textoInferior="Dieta" colorFondo="#73694F"/>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div class="col-sm" id="imagenHeader" v-if="this.urlImagen !== undefined && this.urlImagen !== null && this.urlImagen !==''">
            <img class="img-fluid rounded" :src=this.urlImagen>
          </div>
          <div class="col-sm" id="imagenHeaderBis" v-if="this.urlImagen === undefined || this.urlImagen === null || this.urlImagen ===''">
            <img class="img-fluid rounded" src="../img/default_img_recipe.jpg">
          </div>
        </div>
      </div>
    </section>

    
    <section class="sections" data-cy="ingredientes">
      <h4>INGREDIENTES (4 personas):</h4>
      <hr id="solidDividerYellow" />
      <ul v-for="ingrediente in this.ingredientes" :key="ingrediente.id">
        <li>{{ ingrediente }}</li>
      </ul>
    </section>

    <section class="sections" id="pasosText" data-cy="pasos">
      <h4>ELABORACIÓN DE LA RECETA</h4>
      <hr id="solidDividerYellow" />
      <p>Estos son los pasos que tienes que seguir</p>
      <ul v-for="step in steps" :key="step.id">
        <li>{{ step }}</li>
      </ul>
    </section>
    

    <section id="valoracion" class="sections">
      <div id="rate">
        <!-- First loop for yellow stars -->
        <span v-for="n in rating" :key="'yellow-' + n">
                      <img src="../assets/star1.png" style="width: 6vh;"
                           @mouseover="stars(n)" @click="addRating()">
                    </span>
        <!-- Second loop for black stars -->
        <span v-for="m in 5-rating" :key="'black-' + (m + rating)">
                      <img src="../assets/star0.png" style="width: 6vh;"
                           @mouseover="stars(m + rating)">
                    </span>
      </div>
      <h4 v-if="!rated" data-cy="valoracion">¡Valora la receta!</h4>
      <button class="button" id="delRating"
              v-if="rated" @click="rated = false">
        Borrar valoración
      </button>
    </section>

    <section class="sections">
      <h4 data-cy="comentario">Comentar Receta:</h4>
      <textarea class="comment" rows="3" v-model="cText"></textarea>
      <button class="button" id="cannotComment" 
      v-if="cText == null || cText == ''">
        Añadir Comentario
      </button>
      <button class="button" id="canComment" 
      v-if="cText != null && cText != ''" @click="addComment()">
        Añadir Comentario
      </button>
    </section>

    <section class="sections" data-cy="comentarios">
      <h4>Comentarios:</h4>
      <div v-for="c in this.comments" v-bind:key="c.id">
        <!--
        <span v-for="n in userRating" :key="'yellow-' + n">
          <img src="../assets/star1.png" style="width: 3vh;">
        </span>
        <span v-for="m in 5-userRating" :key="'black-' + (m + rating)">
          <img src="../assets/star0.png" style="width: 3vh;">
        </span>
        -->
        <span style="font-weight: 600; padding-left: 2vh;">{{ c.User }}</span>
        <p>{{ c.Texto }}</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
p{
  padding-top: 1vh;
  padding-left: 2vh;
}
#valoracion{
  margin-top: 8%;
  margin-bottom: 5%;
}
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
  margin-top: 7%;
  padding-left: 5%;
  padding-right: 5%;
}

#headerSection {
  margin-bottom: 8%;
}

#contenedorNombre{
  display: flex;
  align-items: center;
}

#title {
  font-weight: bold;
  font-size: xxx-large;
  text-align: left;
  margin-left: 4%;
  margin-right: 10px;
  margin-bottom: 0;
}

#contenedorUsuario{
  display: flex;
  align-items: center;
  margin-bottom: 10%;
}

#subtitulo{
  text-align: left;
  margin-left: 4%;
  margin-right: 10px;
  margin-bottom: 0;
}
#columnasDebajoTitulo{
  text-align: center;
}
.sections {
  text-align: left;
  margin-left: 3%;
}

#circulosSection{
  margin-top: 15%;
  margin-bottom: 7%;
}

#solidDividerYellow {
  border: 4px solid #eef2b6;
  width: 100%;
  opacity: 1;
  margin-bottom: 30px;
}
#pasosText{
  margin-top: 5%;
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
      path: "https://elcocinillas-api.kindglacier-480a070a.westeurope.azurecontainerapps.io/",
      //path: "http://localhost:8000/",
      userName: this.$cookies.username(),
      recipe: null,

      ingredientes: null,
      steps: null,
      time: 0,
      name: null,
      dificultad: 0,
      urlImagen: null,
      user: null,
      classe:null,
      tipo:null,
      valoracionMedia: 0,
      numValoraciones: 0,
      
      //seguir user o recepta
      userSeguid: false,
      receptaSeguida: false,

      v: null,
      blueish: '#76ded9',

      // Rating
      rating: 0,
      rated: false,
      userRating: 3,

      // Comments (getting)
      comments: null,

      // Comment (setting)
      cUser: null,
      cText: null,
      cReci: null,
    };
  },
  created() {
    this.recipe = window.location.href.substr(this.path.length + 'elcocinillas/recetas/'.length);
    this.getRecipe();
    this.getComments();
    this.sigoUser();
    this.sigoReceta();
  },
  methods: {
    addRating(){
      if(this.$globalData.logged == false){
        alert('Debes iniciar sesión para añadir una valoración.');
      } else {
        axios.put(this.path + 'valorar/' + this.name + '/' + this.rating + '/')
          .then((response) => {
            console.log('Rating added successfully', response.data);
            alert("¡Felicidades! Tu valoración se ha añadido.")
            this.getRecipe();
          })
          .catch((error) => {
            console.error('Error adding rating:', error);
            alert("Se ha producido un error. Inténtalo de nuevo más tarde.")
          })
      }
    },
    getCommentData(){
      return {
        Receta: this.name,
        Texto: this.cText,
        User: this.userName,
      };
    },
    addComment(){
      if(this.$globalData.logged == false){
        alert('Debes iniciar sesión para añadir un comentario.');
      } else {
        axios.post(this.path + 'comment/', this.getCommentData())
            .then((response) => {
              console.log('Comment added successfully', response.data);
              alert("¡Felicidades! Tu comentario se ha añadido.")
              this.getComments();
            })
            .catch((error) => {
              console.error('Error adding comment:', error);
              alert("Se ha producido un error. Inténtalo de nuevo más tarde.")
            })
      }
    },
    getComments(){
      const path = "https://elcocinillas-api.kindglacier-480a070a.westeurope.azurecontainerapps.io/comments_by_recipe/" + this.nombreReceta + "/";
      axios.get(path)
          .then((response) => {
            console.log("Comments fetched successfully.");
            this.comments = response.data;
          })
          .catch((error) => {
            console.error("Error fetching comments:", error);
          })
    },
    getRecipe() {
      //const pathReceta = "http://localhost:8000/receta/"
      const pathReceta = "https://elcocinillas-api.kindglacier-480a070a.westeurope.azurecontainerapps.io/receta/" + this.nombreReceta + "/";
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
          this.numValoraciones = response.data.num_valoraciones;
          this.valoracionMedia = response.data.valoracion_media;
          console.log(this.urlImagen[0])

          if(this.valoracionMedia !== null && this.valoracionMedia !== undefined){
            this.valoracionMedia = this.valoracionMedia.toFixed(2);
          }
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
    sigoUser(){
      const url = 'https://elcocinillas-api.kindglacier-480a070a.westeurope.azurecontainerapps.io/siguiendo/' + this.user + '/';
      axios.get(url)
        .then((response) => {
          const usersSeguidos = response.data;
          const usuarioBuscado = this.user;

          usersSeguidos.forEach((usuario) => {
            if (usuario === usuarioBuscado) {
              alert('working');
              // Si se encuentra el usuario, actualiza la propiedad a true
              this.userSeguid = true;
            }
          });
        })
        .catch((error) => {
            alert("Error al actualizar lista de amigos")
            console.error('KO modificar datos:', error);
        })
    },
    sigoReceta(){
      const url = 'https://elcocinillas-api.kindglacier-480a070a.westeurope.azurecontainerapps.io/guardadas/' + this.user + '/';
      axios.get(url)
        .then((response) => {
          const recetasSeguidas = response.data;
          const recetaBuscada = this.name;

          recetasSeguidas.forEach((receta) =>{
            if(receta === recetaBuscada){
              this.receptaSeguida = true;
            }
          });
        })
        .catch((error) => {
          alert("Error al actualizar lista de recetas")
          console.error('KO modificar datos:', error);
        })
    },
    seguirReceta(){
      if (this.receptaSeguida){
        const receta = '/' + this.name;
        const url = 'https://elcocinillas-api.kindglacier-480a070a.westeurope.azurecontainerapps.io/dejar_de_guardar/' + this.userName + receta + '/';
        axios.put(url)
          .then((response) => {
            console.log('Ok modificar datos:', response.data);
            window.alert('Se ha eliminado la receta: '+ this.name + ' de tu lista de recetas');
            this.receptaSeguida = false;
          })
          .catch((error) => {
            console.error('KO modificar datos:', error);
            alert("Se ha producido un error. Inténtalo de nuevo más tarde")
          })
      }else{
        const receta = '/' + this.name;
        const url = 'https://elcocinillas-api.kindglacier-480a070a.westeurope.azurecontainerapps.io/guardar/' + this.userName + receta + '/';
        axios.put(url)
          .then((response) => {
            console.log('Ok modificar datos:', response.data);
            window.alert('Se ha añadido la receta: '+ this.name + ' a tu lista de recetas');
            this.receptaSeguida = true;
          })
          .catch((error) => {
            console.error('KO modificar datos:', error);
            alert("Se ha producido un error. Inténtalo de nuevo más tarde")
          })
      }
    },
    seguirAmigo(){
      if(this.userSeguid){
        const unfollow = '/' + this.user;
        const url = 'https://elcocinillas-api.kindglacier-480a070a.westeurope.azurecontainerapps.io/dejar_seguir/' + this.userName + unfollow + '/';
        axios.put(url)
        .then((response) => {
          console.log('Ok modificar datos:', response.data);
          window.alert('Se ha eliminado a: '+ this.user + ' de tu lista de amigos');
          this.userSeguid = false;
        })
        .catch((error) => {
          console.error('KO modificar datos:', error);
          alert("Se ha producido un error. Inténtalo de nuevo más tarde")
        })
      }else{
        const follow = '/' + this.user;
        const url = 'https://elcocinillas-api.kindglacier-480a070a.westeurope.azurecontainerapps.io/seguir/' + this.userName + follow + '/';
        axios.put(url)
        .then((response) => {
            window.alert('Has empezado a seguir a: '+ this.user);
            console.log(response);
            this.userSeguid = true;
        })
        .catch((error) => {
            console.error('KO modificar datos:', error);
            alert("Se ha producido un error. Inténtalo de nuevo más tarde");
        })
      }
    },
  },
};
</script>

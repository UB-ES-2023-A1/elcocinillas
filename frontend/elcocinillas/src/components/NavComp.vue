<template>
  <div id="nav" :key="$globalData.navKey">
    <div style="float: left; display: flex;">
      <div class="link" @mouseenter="logoStart()" @mouseleave="logoEnd()">
        <router-link to="/">
          <img class="image" src="../assets/cheff.png" id="logo">
          El Cocinillas
        </router-link>
      </div>
      <div id="search" style="display: flex;">
        <input type="search" id="search" v-model="searchQuery" >
        <img class="image imgUp" src="../assets/search.png" @click="realizarBusqueda">
      </div>
    </div>
    <div style="float: right;">
      <div class="link">
        <router-link to="/recetas">
          <img class="image imgUp" src="../assets/recipe.png">
          Recetas
        </router-link>
      </div>
      <div class="link" v-if="getInit()" data-cy="clic_perfil">
        <router-link to="/perfil">
          <img class="image imgUp" src="../assets/perfil.png">
          Perfil
        </router-link>
      </div>
      <div class="link" v-if="getInit()" @click="logoff()">
        <router-link to="/">
          <img class="image imgUp" src="../assets/exit.png">
          Cerrar Sesión
        </router-link>
      </div>
      <div class="link" data-cy="iniciar_sesion" v-if="!getInit()">
        <router-link to="/userlogin">
          <img class="image imgUp" src="../assets/enter.png">
          Iniciar Sesión
        </router-link>
      </div>
      <div class="link" v-if="!getInit()">
        <router-link to="/registre">
          <img class="image imgUp" src="../assets/enter.png">
          Registrarse
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
  font-size: 2.5vh;
}
#logo{
  width: 5vh;
  transform: scale(1.1);
  margin-left: 2vh;
  margin-right: 1vh;
  position: relative;
  top: -2px;
  transition: 0.2;
}
#logo:hover{
  transform: rotate(30deg) scale(1.1) translate(2vh);
  transition: 0.2s;
}
#nav {
  height: 5.5vh;
  background-color: #73694f;
  width: 100%;
  z-index: 1;
}
.link {
  line-height: 5vh;
  width: fit-content;
  margin-left: 1vh;
  margin-right: 2vh;
  display: inline-block;
  text-align: center;
  border-radius: 15px;
  color:white;
  cursor: pointer;
  padding-right: 2vh;
  padding-left: 2vh;
}
.link:hover{
  color:black;
  font-weight: bold;
  background-color: white;
}
.image{
  height: 5vh;
  filter: invert(95%);
}
.link:hover img{
  filter: invert(5%);
}
#search{
  height: 90%; 
  width: 25vh;
  margin: auto;
  border-radius: 20px;
  border: none;
  background-color: white;
}
#settings{
  float: right;
  position: relative;
  top: 5px;
  margin-right: 10px;
  cursor: pointer;
}
.rotate:hover{
  transform: rotate(90deg);
  transition: 1s;
}
.imgUp{
  position: relative;
  transform: scale(0.7);
  top: -0.25vh;
}

@media only screen and (max-width: 1154px) {
  #nav {
    height: 150px;
  }
}
</style>

<script>
import { store } from '../store'
import { bus } from '../main';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  data(){
    return {
      showingSettings: false,
      usuarioLogeado : store.state.initSession,
      searchQuery: '',
    }
  },
  methods: {
    logoff(){
      this.$globalData.logged = false;
      store.state.initSession = false;
    },
    logoStart(){
      document.getElementById("logo").style.transform = "rotate(40deg) scale(1.2) translate(5px)";
      document.getElementById("logo").style.transition = "0.2s";
    },
    logoEnd(){
      document.getElementById("logo").style.transform = "scale(1)";
      document.getElementById("logo").style.transition = "0.2s";
    },
    getInit(){
      return store.state.initSession;
    },
    realizarBusqueda() {
      this.$globalData.searchQuery = this.searchQuery;
      bus.$emit('busqueda');
    },
  },
}
</script>
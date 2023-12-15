<template>
  <div id="nav" :key="$globalData.navKey" @mouseleave="showNut = false">
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
      <div class="link" v-if=getInit() data-cy="clic_perfil">
        <router-link to="/perfil">
          <img class="image imgUp" src="../assets/perfil.png">
          Perfil
        </router-link>
      </div>
      <div class="link" v-if=getInit() @click="logoff()">
        <router-link to="/">
          <img class="image imgUp" src="../assets/exit.png">
          Cerrar Sesión
        </router-link>
      </div>
      <div class="link" data-cy="iniciar_sesion" v-if=!getInit()>
        <router-link to="/userlogin">
          <img class="image imgUp" src="../assets/enter.png">
          Iniciar Sesión
        </router-link>
      </div>
      <div class="link" v-if=!getInit()>
        <router-link to="/registre">
          <img class="image imgUp" src="../assets/enter.png">
          Registrarse
        </router-link>
      </div>
      <div id="nut" @mouseenter="showNut = true">
        <img class="image" src="../assets/settings.png">
      </div>
    </div>
    <ul id="settings" v-if="showNut == true">
      <li class="category">Tema:</li>
      <li v-for="s in $settings.themes" v-bind:key="s"
      @click="theme(s)" class="setting">
        <img id="check" src="../assets/check.png" v-if="$settings.chosen == s">
        {{ s }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
#check{
  height: 2vh;
}
#settings{
  position: fixed;
  right: -81vh;
  margin-top: 4.75vh;
}
.category{
  border-bottom: 1px solid black;
}
.setting:hover{
  background-color: #76ded9;
  color: white;
}
li{
  list-style-type: none;
  background-color: lightgrey;
  padding-left: 2vh;
  padding-right: 2vh;
}
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
  position: fixed;
  height: 5.5vh;
  background-color: #73694f;
  width: 100%;
  z-index: 1;
}
#nut {
  position: relative;
  transform: scale(0.75);
  top: -0.1vh;
  display: inline-block;
  color:white;
  cursor: pointer;
  padding-right: 2vh;
  padding-left: 2vh;
  transition: 0.4s;
}
#nut:hover{
  transform: rotate(45deg);
  transition: 0.4s;
}
.link {
  line-height: 5vh;
  width: fit-content;
  display: inline-block;
  text-align: center;
  border-radius: 15px;
  color:white;
  cursor: pointer;
  padding-right: 3vh;
  padding-left: 3vh;
  transition: 0.2s;
}
.link:hover{
  color:black;
  background-color: white;
  transition: 0.2s;
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
  border-radius: 10vh;
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
import { bus } from '../main';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  data(){
    return {
      showingSettings: false,
      usuarioLogeado: this.$cookies.username(),
      searchQuery: '',
      showNut: false,
      username: "",
      correo: "",
    }
  },
  methods: {
    theme(s){
      this.$settings.chosen = s;
    },
    logoff(){
      this.$cookies.deleteAll();
      this.$globalData.updateSession();
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
      return this.$globalData.logged;
    },
    realizarBusqueda() {
      this.$globalData.searchQuery = this.searchQuery;
      bus.$emit('busqueda');
    },
  },
}
</script>
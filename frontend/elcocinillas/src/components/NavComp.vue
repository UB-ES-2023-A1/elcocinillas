<template>
  <div id="nav">
    <div style="float: left; width: 33%;">
      <div id="search" style="display: flex;">
        <router-link to="/">
          <img src="../assets/cheff.png" id="logo">
        </router-link>
        <input type="search" id="search">
        <img class="imgUp" src="../assets/search.png">
      </div>
    </div>
    <div style="float: right; width: 33%; overflow: visible;">
      <div class="link">
        <router-link to="/recetas">
          <img class="imgUp" src="../assets/recipe.png">
          Recetas
        </router-link>
      </div>
      <div class="link" v-if="$globalData.logged">
        <router-link to="/perfil">
          <img class="imgUp" src="../assets/perfil.png">
          Perfil
        </router-link>
      </div>
      <div class="link" v-if="$globalData.logged" @click="logoff()">
        <router-link to="/">
          <img class="imgUp" src="../assets/exit.png">
          Cerrar Sesión
        </router-link>
      </div>
      <div class="link" v-if="!$globalData.logged">
        <router-link to="/userlogin">
          <img class="imgUp" src="../assets/enter.png">
          Iniciar Sesión
        </router-link>
      </div>
      <div class="link" v-if="!$globalData.logged">
        <router-link to="/registre">
          <img class="imgUp" src="../assets/enter.png">
          Registrarse
        </router-link>
      </div>
      <!--
      <div id="settings" v-show="false">
        <img src="../assets/settings.png" class="rotate" @click="settings()">
        <ul id="setts" class="dropdown-content" v-if="false">
          <li>Dark mode <input type="checkbox"></li>
        </ul>
      </div>
      -->
    </div>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}
#logo{
  width: fit-content;
  margin-left: 30px;
  margin-right: 5px;
  position: relative;
  top: 5px;
  transition: 0.2;
}
#logo:hover{
  transform: rotate(30deg) scale(1.1) translate(5px);
  transition: 0.2s;
}
#nav {
  height: fit-content;
  background-color: #73694f;
  width: 100%;
  overflow: visible;
}
.link {
  line-height: 40px;
  width: 150px;
  margin-left: 5px;
  margin-right: 5px;
  display: inline-block;
  text-align: center;
  border-radius: 15px;
  color:white;
  cursor: pointer;
}
.link:hover{
  color:black;
  font-weight: bold;
  background-color: white;
}
img{
  height: 30px;
  filter: invert(95%);
}
.link:hover img{
  filter: invert(5%);
}
#search{
  height: 90%; 
  width: 140px;
  margin: auto;
  margin-left: 10px;
  border-radius: 20px;
  border: none;
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
  top: -2px;
}
ul{
  list-style-type: none;
  background-color: lightgray;
  box-shadow: 0px 5px 5px 0px lightgray;
}
li{
  width: 180px;
}
li:hover{
  filter: scale(1.1);
}
.dropdown-content {
  position: absolute;
  left: -140px;
  top: 35px;
}
</style>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  data(){
    return {
      showingSettings: false
    }
  },
  methods: {
    logoff(){
      this.$globalData.logged = false;
    },
    settings(){
      this.showingSettings = !this.showingSettings;
      document.getElementById("setts").style.display = "block";
    },
    darkMode(){
      if(this.globalData.darkMode) this.$globalData.background = this.$globalData.backgroundDark;
      else this.$globalData.background = this.globalData.backgroundlight;
    }
  }
}
</script>
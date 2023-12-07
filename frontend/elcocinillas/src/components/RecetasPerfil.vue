<template>
    <div class="background-container">
        <div class="c-container">
            <div class="navdisplay">
                <NavPerfil/>
            </div>
            <div class="center">
                <div class="c-header">
                    <div class="c-h1">
                        Lista de Recetas
                    </div>
                    <div class="c-input">
                        <input type="Busqueda Receta">
                        <button>Buscar Receta</button>
                    </div>
                </div>
                <div class="c-body">
                    <ul>
                        <div class="c-receta" v-for="(receta, index) in recetas" :key="index">
                            <li>
                                {{ receta }}
                            </li>
                            <button id="button" type="button" class="btn btn-danger" @click="delReceta(index)">
                                <span>Eliminar Receta</span>
                            </button>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.background-container {
  background-image: url('../assets/background.avif');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0;
  height: 100vh;
  width: 100%;
}
.navdisplay {
  margin-left: 5%;
  margin-top: 5%;
  margin-bottom: 10%;
  width: 13%;

}
.c-container {
  display: flex;
  height: 91vh;
  margin-top: 5%;
}
.c-receta button {
    height: 99%;
    background-color: red !important;
}
.center {
  margin-bottom: 10%;
  margin-top: 5%;
  width: 60%;
  background-color: rgba(255, 255, 255, 0.6); 
  border: 5px solid #EEF2B6;
  border-radius: 5px;
  padding: 5%;
  margin-left: 10%;
  
}
.c-header {
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
}
h1 {
  color: black;
}
.c-input {
  width: 100%;
  height: 50%;
  text-align: center;
  align-items: center;
  margin-left: 5%;
}
.c-h1 {
  width: 100%;
  height: 50%;
  font-size: 45px;
  text-align: center;
  font-weight: bold;
  color: black;
  align-items: center;
  padding: 2%;

}
button {
  margin: 0;
}
input {
  width: 40%;
  margin-right: 5%;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin-left: 10%;
  margin-right: 10%;
  width: 75%;
  font-size: 20px;
  font-weight: bold;
  color: black;
  background-color:rgba(210, 180, 140, 0.6);
  margin-bottom: 10px;
  padding: 8px;
  padding-left: 5%;
  box-sizing: border-box;
}
ul li:hover {
background-color: rgba(210, 180, 140, 1);
border: 3px solid rgba(160, 0, 0, 0.1);
cursor: pointer;
}
ul li:last-child {
border-bottom: none; /* No agrega borde inferior al último elemento li */
}
.c-body {
  height: 60%;
  width: 100%;
  padding: 5%;
  overflow-y: auto;
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: 5px 0 5px -5px rgba(0, 0, 0, 0.5), 0 5px 5px -5px rgba(0, 0, 0, 0.5);
}
.c-receta {
    display: flex;
}
#button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

#button span:after {
  content: 'X';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -25px;
  transition: 0.5s;
}

#button:hover span {
  padding-right: 17px;
}

#button:hover span:after {
  opacity: 1;
  right: 0;
}
</style>
<script>
// eslint-disable-next-line vue/multi-word-component-names
import NavPerfil from "./NavPerfil";
export default {
  name: "RecetasPerfil",
  components: { NavPerfil },
    data() {
        return {
            recetas: ["Pollo con arroz", "Hamburguesa", 
            "Patatas Bravas", "Pollo con Champiñones", 
            "Setas a la brasa"]
        }
    },
    methods:{
        delReceta(index) {
            this.recetas.splice(index, 1);
            alert("Se ha actualizado la lista de Recetas");
        }
    }
}
</script>
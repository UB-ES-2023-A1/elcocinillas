<template>
    <div class="background-container">
        <div class="c-container">
            <div class="navdisplay">
                <NavPerfil/>
            </div>
            <div class="center">
                <div class="c-header">
                    <div class="c-h1">
                        Lista de Amigos
                    </div>
                    <div class="c-input">
                        <input v-model="nombreAmigo" type="text" placeholder="Busqueda Amigo">
                        <button @click="busqueda()">Añadir Amigo</button>
                    </div>
                </div>
                <div class="c-body">
                    <ul>
                        <div class="c-amigo" v-for="(user, index) in users" :key="index">
                            <li>
                                {{ user }}
                            </li>
                            <button @click="eliminarAmigo(user, index)" id="button" type="button" class="btn btn-danger">
                                <span>Eliminar amigo</span>
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
.c-amigo button {
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
  border-bottom: none;
}
.c-body {
    height: 60%;
    width: 100%;
    padding: 5%;
    overflow-y: auto;
    background-color: rgba(255, 255, 255, 0.4);
    box-shadow: 5px 0 5px -5px rgba(0, 0, 0, 0.5), 0 5px 5px -5px rgba(0, 0, 0, 0.5);
}
.c-amigo {
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
  right: -20px;
  transition: 0.5s;
}

#button:hover span {
  padding-right: 25px;
}

#button:hover span:after {
  opacity: 1;
  right: 0;
}
</style>
<script>
// eslint-disable-next-line vue/multi-word-component-names
import axios from 'axios';
import { store } from '../store';
import NavPerfil from "./NavPerfil";
export default {
    name: "AmigosPerfil",
    components: { NavPerfil },
    data() {
        return {
            nombreAmigo: "",
            users: this.listarAmigos(),
            usuariosFiltrados: [],
        }
    },
    created() {
        this.listarAmigos();
    },
    methods:{
        eliminarAmigo(nombre, index){
            const unfollow = '/' + nombre
            const url = 'https://elcocinillas-api.kindglacier-480a070a.westeurope.azurecontainerapps.io/dejar_seguir/' + store.state.userName + unfollow + '/';
            axios.put(url)
            .then((response) => {
                console.log('Ok modificar datos:', response.data);
                window.alert('Datos modificados correctamente');
                this.users.splice(index, 1);
            })
            .catch((error) => {
                console.error('KO modificar datos:', error);
                alert("Se ha producido un error. Inténtalo de nuevo más tarde")
            })
        },
        listarAmigos(){
            const url = 'https://elcocinillas-api.kindglacier-480a070a.westeurope.azurecontainerapps.io/siguiendo/' + store.state.userName + '/';
            axios.get(url)
            .then((response) => {
                this.users = response.data;
            })
            .catch((error) => {
                alert("Error al actualizar lista de amigos")
                console.error('KO modificar datos:', error);
            })
        },
        seguirAmigo(nombre){
            const follow = '/' + nombre;
            const url = 'https://elcocinillas-api.kindglacier-480a070a.westeurope.azurecontainerapps.io/seguir/' + store.state.userName + follow + '/';
            axios.put(url)
            .then((response) => {
                window.alert('Has empezado a seguir a: ', nombre);
                console.log("Respuesta: ", response.data)
                this.listarAmigos()
            })
            .catch((error) => {
                console.error('KO modificar datos:', error);
                alert("Se ha producido un error. Inténtalo de nuevo más tarde")
            })
        },
        busqueda(){
            if(this.nombreAmigo !== ""){
                this.usuariosFiltrados = this.users.filter(usuario =>
                usuario.toLowerCase().includes(this.nombreAmigo.toLowerCase())

            );
            this.users = this.usuariosFiltrados;
            }else{
                this.usuariosFiltrados = [];
                this.listarAmigos();
            }
        },
    }
}
</script>
<template>
  <div class="main-container">
    <aside class="left-aside">
    </aside>
  <!-- 
    <aside class="left-aside">
      <p> Amigos </p>
      <p> Seguidores </p>
      <p> Recetas guardadas </p>
    </aside>
  --> 
    <div class="center">
      <div class="container">
        <img src="../assets/user.png" alt="User imagen">
        <h2>{{ this.userName }}</h2>
        <form @submit.prevent="modificarInformacion">
          <label for="newcorreo">Correo:</label> <br>
          <input type="email" v-model="correo" required> <br>

          <label for="contrasena">Contraseña:</label><br>
          <input type="password" v-model="contrasena" required><br>

          <button type="submit">Modificar Información</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  display: flex; /* Utilizamos Flexbox para la disposición */
  margin-top: 10vh;
}

.center {
  flex-basis: 70%; /* Define el ancho del centro (ajusta según tus necesidades) */
  display: flex;
  justify-content: center;
  align-items: center; /* Centra verticalmente el contenido del centro */

}
.left-aside {
  padding-top: 10px;
  background-color: #76DED9;
  flex-basis: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.left-aside p {
  margin-top: 10px; /* Ajusta el valor según la cantidad de margen deseada */
}
input {
  margin: 10px;
}
img, h2 {
  margin-bottom: 15px;
}
button {
  margin-top: 25px;
}
.container {
  display: block;
  text-align: center;
  padding: 20px; /* Añade relleno al contenedor si es necesario */

}

</style>

<script>
import { store } from '../store'
import axios from 'axios';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Perfil",
  data() {
    return {
      userName: store.state.userName,
      correo: '',
      contrasena: '',
      newcorreo: store.state.correo,

    }
  },
  methods: {
    modificarInformacion() {
      const obj = {
        userID: "leuis123",
        email: this.correo,
        password: this.contrasena,
      };
      try {
        
        const url = 'http://localhost:8000/user/'+ this.newcorreo
        console.error(url);
        const respuesta = axios.put(url, {data: obj});
        window.alert('Datos modificados correctamente');
        
        console.log(respuesta.data);
      } catch (error) {
        console.error('Error al modificar la información:', error);
      }
    }
  },
};
</script>
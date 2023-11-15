<template>
  <div class="background-container">
    <div class="container">
      <div class="center">
        <div>
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
  </div>
</template>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
  overflow: hidden;
}
@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
    grid-template-rows: 10% 30% 30% 10%;
    grid-template-areas: 
          "header"
          "sidebar"
          "main"
          "section"
          "content"
          "footer";
  }
}
.center {
    background-color: rgba(255, 255, 255, 0.6); 
    border-radius: 10px; 
    padding: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
.background-container {
  min-height: 96vh;
  background-image: url('../assets/background.avif');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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
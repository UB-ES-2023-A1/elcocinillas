<template>
  <div class="background-container">
    <div class="background-wraper">
      <div class="navdiplay">
          <NavPerfil class="sidebar"/>
      </div>
      <div class="container">
        <div class="center">
          <div class="userImage">
            <img src="../assets/user.png" alt="User imagen">
          </div>
          <div class="userName">
            <h2>{{ this.userName }}</h2>
          </div>
          <form @submit.prevent="modificarInformacion">
            <div class="inputBox">
              <input class="input" type="email" v-model="correo" required data-cy="email_modificar">
              <label class="label" for="newcorreo">Correo:</label>
            </div>
            <div class="inputBox">
              <input class="input" type="password" v-model="contrasena" required data-cy="psswd_modificar">
              <label class="label" for="contrasena">Contraseña:</label>
            </div>
            <div class="botonContainer">
              <button class="boton" type="submit">Modificar Información</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
    grid-template-rows: 25% 55% 20%;
    grid-template-areas: 
      "sidebar"
      "main"
      "footer";
  }
}
.background-wraper {
  display: flex;
  margin-top: 3%;
  height: 95vh;
}
.navdiplay {
  flex: 0 1 auto;
  margin-left: 5%;
  margin-top: 5%;
  margin-bottom: 10%;
}
.container {
  margin-top: 5%;
  margin-bottom: 10%;
  margin-left: 15%;
}
.center {
  background-color: rgba(255, 255, 255, 0.6); 
  border: 5px solid #EEF2B6;
  border-radius: 5px;
  padding: 10%;
  flex: 1 1 50%;
  text-align: center;
  align-items: center;
  justify-content: center;
}
.inputBox {
  margin: 2rem;
  font-size: 1.25rem;
  position: relative;
  --primary: #13CFB9;
}
.input {
  all: unset;
  color: black;
  padding: 1rem;
  border: 1px solid #9e9e9e;
  border-radius: 10px;
  transition: 150ms
    cubic-bezier(0.4, 0, 0.2, 1);

}
.label {
  position: absolute;
  top: 0.5rem;
  left: 35%;
  color: black;
  pointer-events: none;
  transition: 150ms
    cubic-bezier(0.4, 0, 0.2, 1);
}
.input:focus {
  border: 1px solid
    var(--primary);
}
.input:is(:focus, :valid) ~ label {
  transform: translateY(-160%)
  scale(1.2);
  padding-inline:  0.3rem;
  color: var(--primary);
  font-weight: bold;

}
.userImage {
  display: flex;
  align-items: center;
  justify-content: center;
}
.userName {
  text-align: center;
}
.background-container {
  background-image: url('../assets/background.avif');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0;
}
.botonContainer {
  display: flex;
  align-items: center;
  justify-content: center;

}
.boton {
  font-size: 16px;
  margin-top: 1rem;
  padding: 15px 30px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border: 2px solid;
  color: #73694F;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

/* Cambio de estilos al pasar el ratón por encima */
.boton:hover {
  background-color: #6F4E40;
  color: #ffffff;
}
  
</style>

<script>
import { store } from '../store';
import axios from 'axios';
import router from "@/router";
import NavPerfil from "./NavPerfil";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Perfil",
  components: { NavPerfil },
  data() {
    return {
      /*
      userName: this.$cookies.find('userName'),
      correo: '',
      contrasena: '',
      newcorreo: '',
      */
      
      userName: store.state.userName,
      correo: '',
      contrasena: '',
      newcorreo: store.state.correo,
      
    }
  },

  created() {
    console.log("perfil", this.userName);
  },
  methods: {
    modificarInformacion() {
      const url = 'https://elcocinillas-api.kindglacier-480a070a.westeurope.azurecontainerapps.io/user/' + store.state.userName + '/';
      axios.put(url, this.getDatosPerfilUsuario())
          .then((response) => {
            console.log('Ok modificar datos:', response.data);
            window.alert('Datos modificados correctamente');
            router.push("/recetas");
          })
          .catch((error) => {
            console.error('KO modificar datos:', error);
            alert("Se ha producido un error. Inténtalo de nuevo más tarde")
          })
    },

    getDatosPerfilUsuario() {
      return {
        userID: store.state.userName,
        email: this.correo,
        password: this.contrasena
      };
    },
  },
};
</script>
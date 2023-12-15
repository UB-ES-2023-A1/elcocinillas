<template>
  <div class="background-container">
    <div class="background-wraper">
      <div class="navdiplay">
        <NavPerfil id="sidebar"/>
      </div>
      <div class="container center">
        <div>
          <img id="userImage" src="../assets/user.png" alt="User imagen">
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
          <div class="botonContainer" data-cy="modificarInformacionBtn">
            <button class="boton" type="submit">Modificar Información</button>
          </div>
        </form>
        <div class="delete">
              <button @click="deleteAccount" class="boton" >Eliminar cuenta</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2{
  font-size: 4vh;
  color: #2f2f2f;
}
#sidebar{
  width: 30vh;
  height: 70vh;
  font-size: 2vh;
  margin-left: 30vh;
}
.background-wraper {
  display: flex;
  margin-top: 5vh;
}
#userImage{
  height: 25vh;
  margin-bottom: 2vh;
}
.container {
  height: 85vh;
  width: 90vh;
  margin-bottom: 2vh;
  margin-left: 4vh;

  background-color: rgba(255, 255, 255, 0.6); 
  border: 5px solid #EEF2B6;
  border-radius: 5px;
  padding: 2vh;
  text-align: center;
  align-items: center;
}
.inputBox {
  margin: 2vh;
  font-size: 3vh;
  --primary: #13CFB9;
}
.input {
  all: unset;
  color: black;
  padding: 2vh;
  border: 1px solid #9e9e9e;
  border-radius: 10px;
}
.label {
  position: absolute;
  left: 100vh;
  color: black;
  transition: 150ms
    cubic-bezier(0.4, 0, 0.2, 1);
}
.input:focus {
  border: 1px solid
    var(--primary);
}
.input:is(:focus, :valid) ~ label {
  transform: translateX(-30vh)
  scale(1.2);
  padding-inline:  0.3vh;
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
  font-size: 3vh;
  margin-top: 1vh;
  padding: 1.5vh 3vh;
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
import axios from 'axios';
import router from "@/router";
import NavPerfil from "./NavPerfil";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Perfil",
  components: { NavPerfil },
  data() {
    return {      
      userName: this.$cookies.username(),
      correo: '',
      contrasena: '',
      newcorreo: '', 
    }
  },

  created() {
    console.log("perfil", this.userName);
  },
  methods: {
    modificarInformacion() {
      const url = 'https://elcocinillas-api.kindglacier-480a070a.westeurope.azurecontainerapps.io/user/' + this.userName + '/';
      axios.put(url, this.getDatosPerfilUsuario())
          .then((response) => {
            console.log('Ok modificar datos:', response.data);
            window.alert('Datos modificados correctamente');
            router.push("/recetas");
          })
          .catch((error) => {
            console.error('KO modificar dato:', error);
            alert("Se ha producido un error. Inténtalo de nuevo más tarde")
          })
    },

    getDatosPerfilUsuario() {
      return {
        userID: this.username,
        email: this.correo,
        password: this.contrasena
      };
    },
    deleteAccount(){
      const url = 'https://elcocinillas-api.kindglacier-480a070a.westeurope.azurecontainerapps.io/eliminar_cuenta/' + this.userName + '/';
      axios.delete(url)
          .then((response) => {
              console.log('Ok eliminar usuario:', response.data);
              window.alert('Usuario eliminado correctamente');
              router.push("/recetas");
              this.$cookies.deleteAll();
              this.$globalData.updateSession();
          })
          .catch((error) => {
            console.error('KO eliminar usuario:', error);
            alert("Se ha producido un error. Inténtalo de nuevo más tarde")
          })
    },
  },
};
</script>
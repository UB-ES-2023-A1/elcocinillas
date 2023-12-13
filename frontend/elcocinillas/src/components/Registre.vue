<template>
  <body id="granContainerRegistre">
    <div>
      <form @submit.prevent="checkRegistro" class="formcontainer">
        <h2 id="title">Registro</h2>
        <div>
          <div class="inner-container">
            <label for="mail"><strong>Nombre de usuario</strong></label>
            <input type="text" placeholder="Introduce tu nombre de usuario" required autofocus v-model="userName">
            <label for="mail"><strong>Email</strong></label>
            <input type="text" placeholder="Introduce el correo" name="mail" required v-model="userEmail">
            <label for="psw"><strong>Contraseña</strong></label>
            <input type="password" placeholder="Introduce la contraseña" name="psw" required v-model="userPassword">
            <label for="psw"><strong>Repite la contraseña</strong></label>
            <input type="password" placeholder="Introduce de nuevo la contraseña" name="psw" required v-model="userPasswordBis">
            <a @click="goToLogin" style="color: #73694F">¿Ya tienes cuenta? Inicia sesión</a>
          </div>
          <button type="submit"><strong>Crear cuenta</strong></button>
        </div>
      </form>
    </div>
  </body>
</template>

<style scoped>
#granContainerRegistre {
  height: 100vh;
  background-image: url('../img/defaultRecipePhoto.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: block;
  text-align: center;
}

#title {
  font-weight: bold;
  color: #5c5540;
  text-align:center;
}

input[type=text], input[type=password] {
  width: 100%;
  padding: 16px 8px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.formcontainer {
  text-align: center;
  border: 5px solid #EEF2B6;
  opacity: 95%;
  width: 80%;
  display: inline-block;
  margin: 5%;
}
.inner-container {
  padding: 16px 0;
  text-align:left;
}
span.psw {
  float: right;
  padding-top: 0;
  padding-right: 15px;
}
button {
  background-color: #73694F !important;
  color: white !important;
  padding: 14px 0;
  margin: 10px 0;
  border: none;
  cursor: grab;
  width: 48%;
  opacity: 100% !important;
}
button:hover {
  opacity: 0.8;
}

/* Change styles for span on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
}

</style>

<script>
import router from "@/router";
import axios from "axios";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Registro",
  data() {
    return {
      userName: null,
      userEmail: null,
      userPassword: null,
      userPasswordBis: null
    };
  },
  methods: {
    async checkRegistro() {
      if (this.userPassword != this.userPasswordBis) {
        alert("Las contraseñas no coinciden");
      } else if(this.userPassword.length < 6){
        alert("La contraseña debe tener 6 caracteres como mínimo");
      } else {
        const path = "http://localhost:8000/register/";
        //const path = "https://elcocinillas-api.kindglacier-480a070a.westeurope.azurecontainerapps.io/register/";
        console.log("registro: ")

        axios.post(path, this.getDatosUsuario())
            .then((response) => {
              console.log('OK crear usuario:', response.data);
              this.recipes = response.data;
              alert("¡Felicidades! Te has registrado en El Cocinillas")
            })
            .catch((error) => {
              console.error('KO registro:', error);
              alert("Se ha producido un error. Inténtalo de nuevo más tarde")
            })
      }
    },

    getDatosUsuario() {
      return {
        userID: this.userName,
        email: this.userEmail,
        password: this.userPassword
      };
    },

    goToLogin(){
      router.push("/userlogin");
    },
  },
};
</script>

<template>
  <body id="granContainerRegistre">
    <div>
      <form @submit.prevent="checkLogin" class="formcontainer">
        <h2 id="title">Registro</h2>
        <div>
          <div class="inner-container">
            <label for="mail"><strong>Email</strong></label>
            <input type="text" placeholder="Introduce el correo" name="mail" required autofocus v-model="email">
            <label for="psw"><strong>Contraseña</strong></label>
            <input type="password" placeholder="Introduce la contraseña" name="psw" required v-model="password">
            <label for="psw"><strong>Repite la contraseña</strong></label>
            <input type="password" placeholder="Introduce de nuevo la contraseña" name="psw" required v-model="passwordBis">
            <a @click="goToLogin" style="color: #73694F">¿Ya tienes cuenta? Inicia sesión</a>
          </div>
          <button type="submit"><strong>Crear cuenta</strong></button>
        </div>
      </form>
    </div>
  </body>
</template>

<style>
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
  background-color: white;
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
import { getAuth, createAccount } from "firebase/auth";
import router from "@/router";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Registro",
  data() {
    return {
      actual_path: "http://localhost:8000/",
      email: "",
      password: "",
      passwordBis: "",
      addUserForm: {
        username: null,
        password: null,
      },
    };
  },
  methods: {
    async checkRegistro() {
      if (this.email == "") {
        alert("Se necesita email del usuario.");
      } else if (this.password == "") {
        alert("Se necesita contraseña");
      } else {
        try {
          await createAccount(getAuth(), this.email, this.password);
          alert("Sesión iniciada con éxito");
          // Manejar el éxito del inicio de sesión (redirección, etc.)
        } catch (error) {
          alert(error.message);
          // Manejar el error del inicio de sesión
        }
      }
    },

    goToLogin(){
      router.push("/userlogin");
    },
  },
};
</script>

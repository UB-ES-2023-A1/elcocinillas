<template>
  <body class="granContainerRegistre">
    <div>
      <form @submit.prevent="checkLogin">
        <h1 id="title">Registro</h1>
        <div class="formcontainer">
          <div class="container">
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
body {
  justify-content: center;
  font-family: Lato, sans-serif;
}

.granContainerRegistre {
  height: 100vh;
  background-image: url('defaultRecipePhoto.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow-y: hidden;
}

form {
  border: 5px solid #EEF2B6;
  background-color: white;
  opacity: 95%;
  margin: 5%;
  padding: 2%;
}

#title {
  font-weight: bold;
  color: #5c5540;
}

input[type=text], input[type=password] {
  width: 100%;
  padding: 16px 8px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: #73694F;
  color: white !important;
  padding: 14px 0;
  margin: 10px 0;
  border: none;
  cursor: grab;
  width: 48%;
}
h1 {
  text-align:center;
}
button:hover {
  opacity: 0.8;
}
.formcontainer {
  text-align: center;
}
.container {
  padding: 16px 0;
  text-align:left;
}
span.psw {
  float: right;
  padding-top: 0;
  padding-right: 15px;
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

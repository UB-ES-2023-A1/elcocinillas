<template>
  <body class="granContainerLogin">
    <form @submit.prevent="checkLogin">
      <h1 id="title">Inicio de sesión</h1>
      <div class="formcontainer">
        <div class="container">
          <label for="mail"><strong>Email</strong></label>
          <input type="text" placeholder="Introduce el correo" name="mail" required autofocus v-model="email">
          <label for="psw"><strong>Contraseña</strong></label>
          <input type="password" placeholder="Introduce la contraseña" name="psw" required v-model="password">
          <a @click="createAccount" style="color: #73694F">¿No tienes cuenta? Regístrate</a>
        </div>
        <button type="submit"><strong>Iniciar sesión</strong></button>
      </div>
    </form>
  </body>
</template>

<style>
.granContainerLogin {
  height: 100vh;
  background-image: url('defaultRecipePhoto.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow-y: hidden;
}

.granContainerLogin form {
  border: 5px solid #EEF2B6;
  background-color: white;
  opacity: 95%;
  margin: 10%;
}

</style>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import router from "@/router";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  data() {
    return {
      actual_path: "http://localhost:8000/",
      email: "",
      password: "",
      addUserForm: {
        username: null,
        password: null,
      },
    };
  },
  methods: {
    async checkLogin() {
      if (this.email == "") {
        alert("Se necesita email del usuario.");
      } else if (this.password == "") {
        alert("Se necesita contraseña");
      } else {
        try {
          await signInWithEmailAndPassword(
            getAuth(),
            this.email,
            this.password
          );
          alert("Sesión iniciada con éxito");
          // Manejar el éxito del inicio de sesión (redirección, etc.)
          this.$globalData.logged = true;
          router.push("/recetas");
        } catch (error) {
          this.$globalData.logged = false;
          alert("Error en el inicio de sesión: email o contraseñas incorrectos");
          // Manejar el error del inicio de sesión
        }
      }
    },

    createAccount(){
      router.push("/registre");
    },
  },
};
</script>



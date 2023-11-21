<template>
  <body id="granContainerRegistre">
    <form @submit.prevent="checkLogin" class="formcontainer">
      <h2 id="title">Inicio de sesión</h2>
      <div>
        <div class="inner-container">
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



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
        <button type="submit" class="reg-button"><strong>Iniciar sesión</strong></button>
      </div>
    </form>
  </body>
</template>

<style>

</style>

<script>
import { store } from '../store'
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
        signInWithEmailAndPassword(getAuth(), this.email, this.password)
            .then((userCredential) => {
              // El inicio de sesión fue exitoso
              const user = userCredential.user;
              console.log("Usuario autenticado:", user);
              const uid = user.uid;
              store.state.userName = uid;
              store.state.initSession = true;
              alert("Sesión iniciada con éxito");
              this.$globalData.navKey += 1;
              this.$globalData.logged = true;
              router.push("/recetas");
              console.log("userName: ", store.state.userName)
            })
            .catch((error) => {
              // Maneja errores de inicio de sesión
              console.error("Error de inicio de sesión:", error.message);
              store.commit('setinitSession', {isLogged: false})
              alert("Error en el inicio de sesión: email o contraseñas incorrectos");
            });
      }
    },

    createAccount(){
      router.push("/registre");
    },
  },
};
</script>



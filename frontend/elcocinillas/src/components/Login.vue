<template>
  <body id="granContainerLogin">
    <form @submit.prevent="checkLogin">
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

<style scoped>

body{
  height: 100vh;
  background-image: url('../img/defaultRecipePhoto.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: block;
  text-align: center;
}

form {
  width: 90%;
  padding: 20px;
  border-radius: 6px;
  box-shadow: 0 0 8px  #73694F;
  text-align: center;
  border: 5px solid #EEF2B6;
  background-color: white;
  opacity: 95%;
  display: inline-block;
  margin-top: 10%;
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
              alert("Sesión iniciada con éxito");
              router.push("/recetas");
              console.log("userName: ", uid)

              // Cookies:
              this.$cookies.update(uid, true);
            })
            .catch((error) => {
              // Maneja errores de inicio de sesión
              console.error("Error de inicio de sesión:", error.message);
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



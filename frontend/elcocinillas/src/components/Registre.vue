<template>
  <div>
    <section class="h-100 gradient-form" style="background-color: #76ded9">
      <header>
        <div class="p-3 text-left">
          <h1 class="mb-3">El Cocinillas</h1>
        </div>
        <div class="mb-6 text-md-right">
          <button
            class="btn btn-outline-info"
            style="background-color: #13cf89"
            type="button"
          >
            Volver a inicio
          </button>
        </div>
      </header>
    </section>
    <section class="h-100 gradient-form" style="background-color: #eef2b6">
      <div class="row h-100">
        <div class="col">
          <div
            class="card rounded-3 text-black"
            style="background-color: #eef2b6"
          >
            <div class="row g-0 justify-content-center">
              <div class="col-lg-6">
                <div
                  class="card-body p-md-5 mx-md-4"
                  style="background-color: #eef2b6"
                >
                  <div class="text-center">
                    <h4 class="mt-1 mb-5 pb-1">Registro</h4>
                  </div>
                  <form>
                    <p>Nombre de usuario</p>
                    <div class="form-outline mb-4">
                      <input
                        id="form2Example22"
                        class="form-control"
                        required=""
                        type="password"
                        placeholder="Nombre de usuario"
                      />
                    </div>
                    <p>Email</p>
                    <div class="form-outline mb-4">
                      <input
                        id="form2Example11"
                        class="form-control"
                        required=""
                        type="email"
                        autofocus=""
                        placeholder="Email"
                      />
                    </div>
                    <p>Contrase&ntilde;a</p>
                    <div class="form-outline mb-4">
                      <input
                        id="form2Example22"
                        class="form-control"
                        required=""
                        type="password"
                        placeholder="Contrase&ntilde;a"
                      />
                    </div>
                    <p>Confirmar contrase&ntilde;a</p>
                    <div class="form-outline mb-4">
                      <input
                        id="form2Example22"
                        class="form-control"
                        required=""
                        type="password"
                        placeholder="Contrase&ntilde;a"
                      />
                    </div>
                    <div class="text-center pt-1 mb-5 pb-1">
                      <button
                        class="btn btn-success btn-block"
                        style="background-color: #5c5540"
                        type="button"
                      >
                        Crear cuenta
                      </button>
                    </div>
                    <p>
                      <span style="text-decoration: underline; color: #0000ff"
                        >&iquest;Ya tienes una cuenta?</span
                      >
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
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
    goBackToMain() {
      router.push("/");
    },
  },
};
</script>

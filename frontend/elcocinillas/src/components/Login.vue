<template>
<div>
<section class="h-100 gradient-form" style="background-color: #76ded9;">
  <header>
    <div class="p-3 text-left">
      <h1 class="mb-3">El Cocinillas</h1>
    </div>
    <div class="text-right pt-1 mb-5 pb-1">
      <button class="btn btn-primary btn-block" @click="goBackToMain" type="button" style="background-color: #73694f;">Volver a inicio</button>
    </div>
  </header>
</section>
<section class="h-100 gradient-form" style="background-color: #eef2b6;">
  <div class="row h-100">
    <div class="col">
      <div class="card rounded-3 text-black" style="background-color: #eef2b6;">
        <div class="row g-0 justify-content-center">
          <div class="col-lg-6">
            <div class="card-body p-md-5 mx-md-4" style="background-color: #eef2b6;">

              <div class="text-center">
                <h4 class="mt-1 mb-5 pb-1">Sign In</h4>
              </div>

              <form>
                <p>Username</p>

                <div class="form-outline mb-4">
                  <input type="email" id="form2Example11" class="form-control"
                    placeholder="Username" required autofocus v-model="username" />
                </div>
                <p>Pasword</p>
                <div class="form-outline mb-4">
                  <input type="password" id="form2Example22" class="form-control"
                  placeholder="Password" required v-model="password"/>
                </div>

                <div class="text-center pt-1 mb-5 pb-1">
                  <button class="btn btn-primary btn-block" @click="checkLogin()" type="button" style="background-color: #73694f;">Sign
                    in</button>
                  <button class="btn btn-success btn-block" @click="createAccount" type="button" style="background-color: #5c5540;">Create
                    Account</button>
                </div>
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
import axios from 'axios'
import router from '@/router'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Login",
    data () {
    return {
      actual_path: 'http://localhost:8000/',
      username: '',
      password: '',
      addUserForm: {
        username: null,
        password: null
      }
    }
  },
  methods:{
    checkLogin(){
        if (this.username == ''){
          alert('Se necesita nombre de usuario.')
        }
        else if(this.password == ''){
          alert('Se necesita contraseña')
        }
        else{
          const parameters = 'username=' + this.username + '&password=' + this.password
          const config = {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }
          const path = this.actual_path + 'login'
          axios.post(path, parameters, config)
            .then((res) => {
              this.logged = true
              this.token = res.data.access_token
              alert('Successfully Logged In')
              this.$router.push({ path: '/', query: { username: this.username, logged: this.logged, token: this.token } })
            })
            .catch((error) => {
              // eslint-disable-next-line
              console.error(error)
              alert('Username or Password incorrect')
            })
        }
    },
    goBackToMain () {
      router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
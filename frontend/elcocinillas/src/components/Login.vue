<template>
<div>
<section class="h-100 gradient-form" style="background-color: #76ded9;">
  <header>
    <div class="p-3 text-left">
      <h1 class="mb-3">El Cocinillas</h1>
    </div>
  </header>
</section>
<section class="h-100 gradient-form" style="background-color: #eef2b6;">
  <div class="row h-100">
    <div class="col">
      <div class="card rounded-3 text-black">
        <div class="row g-0 justify-content-center">
          <div class="col-lg-6">
            <div class="card-body p-md-5 mx-md-4">

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
                  <button class="btn btn-primary btn-block" @click="checkLogin()" type="button">Sign
                    in</button>
                  <button class="btn btn-success btn-block" @click="createAccount" type="button">Create
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
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Login"
}
</script>

<style scoped>

</style>
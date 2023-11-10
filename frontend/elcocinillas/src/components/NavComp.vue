<template>
  <nav>
    {{ filterDiet }}
    <a href="#">
      <router-link to="/">Home</router-link>
    </a>
    <a href="#">
      <router-link to="/recetas">Recetas</router-link>
    </a>
    <a href="#">
      <router-link to="/userlogin">Log In</router-link>
    </a>
    <a href="#">
      <router-link to="/about">Help</router-link>
    </a>
    <div class="animation start-home"></div>
  </nav>
</template>

<style scoped>
nav {
  position: relative;
  text-align: center;
  height: fit-content;
  width: 100%;
  background-color: #73694f;
}
nav a {
  line-height: 40px;
  display: inline-block;
  position: relative;
  z-index: 1;
  text-decoration: none;
  text-align: center;
  color: white;
}
nav .animation {
  position: absolute;
  height: 100%;
  top: 0;
  border-radius: 5px;
  transition: 0.2s;
}
a:nth-child(1) {
  width: 100px;
}
a:nth-child(2) {
  width: 100px;
}
a:nth-child(3) {
  width: 100px;
}
a:nth-child(4) {
  width: 100px;
}
a:nth-child(5) {
  width: 100px;
}
a:nth-child(1):hover ~ .animation {
  width: 100px;
  left: 432px;
  background-color: #76ded9;
}
a:nth-child(2):hover ~ .animation {
  width: 100px;
  left: 530px;
  background-color: #13cfb9;
}
a:nth-child(3):hover ~ .animation {
  width: 100px;
  left: 630px;
  background-color: #76ded9;
}
a:nth-child(4):hover ~ .animation {
  width: 100px;
  left: 730px;
  background-color: #13cfb9;
}
a:nth-child(5):hover ~ .animation {
  width: 100px;
  left: 400px;
  background-color: #e67e22;
}
span {
  color: #2bd6b4;
}
</style>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  props: [
    'filterDiet'
  ]
}
</script>
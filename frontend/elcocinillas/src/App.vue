<template>
  <div
  :style="[$settings.chosen == 'Dark Mode' ?
  {'background-color': '#2b2b2b', 'color': 'white', 'transition' : '0.2s'} :
  {'background-color': 'white', 'color': '#2b2b2b', 'transition' : '0.2s'}]"
  >
    <button @click="cookies()">Cookies</button>
    <NavComp/>
    <router-view id="router"/>
    <FooterComp/>
  </div>
</template>

<style scoped>
#router{
  padding-top: 5vh;
  min-height: 81vh;
}
button{
  position: fixed;
  z-index: 100;
}
</style>

<script>
import NavComp from "./components/NavComp.vue";
import FooterComp from "./components/FooterComp.vue";

/* eslint-disable vue/no-unused-components */
export default {
  components: { NavComp, FooterComp },
  methods: {
    cookies(){
      alert(document.cookie);
    }
  }
};
</script>

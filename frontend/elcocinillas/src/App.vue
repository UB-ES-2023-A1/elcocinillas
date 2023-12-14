<template>
  <div
  :style="[$settings.chosen == 'Dark Mode' ?
  {'background-color': '#2b2b2b', 'color': 'white', 'transition' : '0.2s'} :
  {'background-color': 'white', 'color': '#2b2b2b', 'transition' : '0.2s'}]"
  >
    <div>
      <button @click="cookies()">Cookies</button>
      <button @click="username()">Username</button>
      <button @click="session()">Session</button>
      <button @click="logged()">Logged</button>
    </div>
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
#buttons{
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
  created() {
    this.$globalData.updateSession();
  },
  methods: {
    cookies(){
      alert(document.cookie);
    },
    username(){
      alert(this.$cookies.username());
    },
    session(){
      alert(this.$cookies.session());
    },
    logged(){
      this.$globalData.updateSession();
      alert(this.$globalData.logged);
    }
  }
};
</script>

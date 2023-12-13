<template>
  <div
  :style="[$settings.chosen == 'Dark Mode' ?
  {'background-color': '#2b2b2b', 'color': 'white', 'transition' : '0.2s'} :
  {'background-color': 'white', 'color': '#2b2b2b', 'transition' : '0.2s'}]"
  >
    <NavComp/>
    <router-view id="router"/>
    <FooterComp/>
  </div>
</template>

<style scoped>
#router{
  padding-top: 5vh;
}
</style>

<script>
import NavComp from "./components/NavComp.vue";
import FooterComp from "./components/FooterComp.vue";

export default {
  components: { NavComp, FooterComp },
};
</script>

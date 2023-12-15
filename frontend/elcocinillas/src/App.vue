<template>
  <div>
    <NavComp id="nav"></NavComp>
    <router-view id="router"/>
    <FooterComp/>
  </div>
</template>

<style scoped>
#router{
  padding-bottom: 2vh;
}
</style>

<script>
import NavComp from "./components/NavComp.vue";
import FooterComp from "./components/FooterComp.vue";

export default {
  components: { NavComp, FooterComp },
};
</script>

<template>
  <div style="position: flex; direction: column">
    <NavComp/>
    <router-view/>
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

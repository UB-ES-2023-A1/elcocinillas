<template>
  <div>
    <NavComp id="nav"></NavComp>
    <router-view id="router"/>
  </div>
</template>

<style scoped>
#router{
  padding-bottom: 2vh;
}
</style>

<script>
import NavComp from "./components/NavComp.vue";

export default {
  components: { NavComp },
};
</script>

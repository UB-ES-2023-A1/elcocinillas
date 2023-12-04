<template>
  <div>
    <NavComp style="position: absolute;"></NavComp>
    <router-view class="router"/>
  </div>
</template>

<style scoped>
.router{
  position: absolute;
  margin-top: 40px;
  width: 100%;
}
</style>

<script>
import NavComp from "./components/NavComp.vue";
import FooterComp from "./components/FooterComp.vue";

export default {
  components: { NavComp, FooterComp },
};
</script>

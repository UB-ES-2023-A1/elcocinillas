<template>
  <div>
    <NavComp></NavComp>
    <router-view />
  </div>
</template>

<script>
import NavComp from "./components/NavComp.vue";

export default {
  components: { NavComp },
};
</script>

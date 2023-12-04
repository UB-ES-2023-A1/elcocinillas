<template>
  <div style="position: flex; direction: column">
    <NavComp/>
    <router-view/>
    <FooterComp/>
  </div>
</template>

<script>
import NavComp from "./components/NavComp.vue";
import FooterComp from "./components/FooterComp.vue";

export default {
  components: { NavComp, FooterComp },
};
</script>

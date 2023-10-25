<template>
  <div class="home">
    <NavComp></NavComp>
    <div class="columns">
      <div class="column left">
        <ColumnComp>
          <template #heading>Veggie</template>
          <template #image>
            <img src="../assets/diet.png" alt="Health Icon" />
          </template>
          <template #description>Some text</template>
        </ColumnComp>
      </div>
      <div class="column center">
        <ColumnComp>
          <template #heading>Diets</template>
          <template #image>
            <img src="../assets/dieting.png" alt="Health Icon" />
          </template>
          <template #description> Some text </template>
        </ColumnComp>
      </div>
      <div class="column right">
        <ColumnComp>
          <template #heading>Time</template>
          <template #image>
            <img src="../assets/clock.png" alt="Health Icon" />
          </template>
          <template #description>Some text</template>
        </ColumnComp>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  position: relative;
}
.columns {
  width: 100%;
}
.column {
  width: 33%;
  float: left;
}
.left {
  background-color: #13cfb9;
  transition: filter 1s;
}
.left:hover {
  filter: brightness(120%);
  transition: filter 1s;
  cursor: pointer;
}
.center {
  background-color: #76ded9;
  filter: brightness(100%);
  transition: filter 1s;
}
.center:hover {
  filter: brightness(130%);
  transition: filter 1s;
  cursor: pointer;
}
.right {
  background-color: #13cfb9;
  transition: filter 1s;
}
.right:hover {
  filter: brightness(120%);
  transition: filter 1s;
  cursor: pointer;
}

img {
  height: 200px;
  place-items: center;
  place-content: center;
  transition: 1s;
}

img:hover {
  transform: scale(1.1);
  transition: 1s;
}
</style>

<script>
import ColumnComp from "../components/ColumnComp.vue";

export default {
  components: { ColumnComp },
};
</script>

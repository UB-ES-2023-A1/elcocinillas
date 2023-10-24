<template>
  <section>
    <section class="hidden">
      <h1>
        <slot name="heading"></slot>
      </h1>
      <p class="image">
        <slot name="image"></slot>
      </p>
      <p>
        <slot name="description"></slot>
      </p>
    </section>
    <router-link to="/diary/1">
      <section class="hidden link">
        <h2>Recipes</h2>
        <img class="diaryImg" src="../assets/diary.png" />
      </section>
    </router-link>
  </section>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.link {
  transition: 1s;
}
.link:hover {
  transform: scale(1.05);
  transition: 1s;
}

h1 {
  font-size: 50px;
  color: black;
  text-shadow: 2px 2px white;
}
h2 {
  font-size: 40px;
  color: black;
  text-shadow: 2px 2px white;
  text-decoration: none;
}
.diaryImg {
  height: 150px;
  width: 200px;
}
section {
  display: grid;
  place-items: center;
  align-content: center;
  min-height: 100vh;
}
.hidden {
  opacity: 0;
  filter: blur(5px);
  transform: translateX(-100%);
  transition: all 1s;
}
.show {
  opacity: 1;
  filter: blur(0);
  transform: translateX(0);
}
</style>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));
});
</script>

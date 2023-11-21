<template>
  <div>
    <section>
      <section class="hidden">
        <h1 class="heading">
          <slot name="heading"></slot>
        </h1>
        <p class="image">
          <slot name="image"></slot>
        </p>
      </section>
    </section>
    <div class="description">
      <slot name="description"></slot>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 1vh;
}
.image{
  margin-top: 4vh;
}
.description {
  display: flex;
  margin: auto;
  place-content: center;
  text-align: center;
  position: relative;
  font-size: 2.5vh;
}
h1 {
  font-size: 7.5vh;
  color: black;
  text-shadow: 2px 2px white;
}
section {
  display: grid;
  place-items: center;
}
.hidden {
  opacity: 0;
  filter: blur(5px);
  transform: translate(-100%);
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

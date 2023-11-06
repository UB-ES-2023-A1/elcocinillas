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
  padding: 0;
  margin: 5px;
}
.image{
  margin-top: 20px;
}
.description {
  place-items: center;
  align-content: center;
  width: 75%;
  position: relative;
  left: 50px;
}
.max-height {
  height: 50px;
}
.heading {
  position: relative;
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
section {
  display: grid;
  place-items: center;
  align-content: center;
  position: relative;
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

<template>
  <div style="margin: 1vh">
    <section class="col-section">
      <section class="hidden col-section">
        <p class="heading">
          <slot name="heading"></slot>
        </p>
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

.description {
  display: flex;
  margin: auto;
  place-content: center;
  text-align: center;
  position: relative;
  font-size: 2.5vh;
}
.heading {
  margin-top: 5%;
  font-size: 7.5vh;
}
.col-section {
  text-align: center;
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

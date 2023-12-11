<template>
  <div class="circulo" :style="{ backgroundColor: colorFondo }">
    <p class="texto-superior">{{ textoSuperior }}</p>
    <p class="texto-inferior">{{ textoInferior }}</p>
  </div>
</template>

<style scoped>
.circulo {
  width: 130px; /* Ajusta el tamaño según tus necesidades */
  height: 130px; /* Ajusta el tamaño según tus necesidades */
  border-radius: 50%; /* Hace que el elemento sea redondo */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
}

.texto-superior{
  font-size: 20px;
  margin: 0;
}
.texto-inferior {
  font-size: 14px;
  margin: 0;
}
</style>

<script>
export default {
  props: {
    textoSuperior: String,
    textoInferior: String,
    colorFondo: String
  },
};
</script>

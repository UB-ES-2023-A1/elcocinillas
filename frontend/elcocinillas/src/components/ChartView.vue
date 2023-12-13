<template>
  <Doughnut :data="data" :options="options" />
</template>

<style scoped></style>

<script setup>
import { Doughnut } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
} from "chart.js";

ChartJS.register(
  Title, 
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement
);

const data = {
  labels: ["Carbs", "Fat", "Protein"],
  datasets: [{
    data: [30, 30, 40],
    backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
      borderWidth: 1,
  }]
}
const options = {
  cutout: "60%",
  radius: "90%",
  plugins: {
    legend: {
      display: true,
      position: 'bottom',
      align: 'start',
      labels: {
        padding: 14,
      }
    },
  },
  responsive: true,
}
</script>

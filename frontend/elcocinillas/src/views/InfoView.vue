<template>
  <div id="main">
    <h1>{{ view.name }}</h1>
    <!--<img :src="`../assets/{$view.img}`">-->
    <p v-for="p in view.paragraphs" v-bind:key="p">{{ p }}</p>
    <ul>
      <li v-for="l in view.list" v-bind:key="l">{{ l }}</li>
    </ul>
  </div>
</template>

<style scoped>
#main{
  align-content: center;
  text-align: center;
  width: 100%;
}
h1{
  text-align: center;
  padding-top: 3vh;
}
p{
  text-align: center;
  margin: auto;
  margin-top: 2vh;
  width: 40%;
}
ul{
  text-align: left;
  width: 40%;
  margin: auto;
}
</style>

<script>
import info from '../info.json'

export default {
  computed: {
    view(){
      return info.views.find(view => view.id === parseInt(this.$route.params.id));
    }
  }
}
</script>

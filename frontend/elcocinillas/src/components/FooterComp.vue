<template>
  <div id="footer">
    <div id="views">
      <div class="view" v-for="v in views" v-bind:key="v">
        <h1 @click="view(v.id)">{{ v.name }}</h1> | 
      </div>
    </div>
    <p>© 2023 El Cocinillas es propiedad de El Cocinillas inc.</p>
  </div>
</template>

<style scoped>
*{
    color: white;
}
#footer{
    background-color: #73694f;
    text-align: center;
    padding-top: 2vh;
    padding-bottom: 2vh;
}
#views{
  margin: auto;
  width: 60vh;
}
.view{
  display: inline-block;
}
h1{
    display: inline;
    font-size: 2vh;
    cursor: pointer;
}
h1:hover{
  color: black;
}
p{
  font-size: 1.5vh;
  padding-top: 3vh;
}
</style>

<script>
import info from '../info.json'

export default {
  data(){
    return {
      views: info.views,
    }
  },
  methods: {
    view(v){
      const path = '/info/' + v;
      if(this.$router.history.current.path != path) {
        this.$router.push(path);
      }
    }
  }
}
</script>

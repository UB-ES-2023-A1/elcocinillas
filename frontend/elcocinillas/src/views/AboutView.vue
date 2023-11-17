<template>
  <div id="nav">
    <div style="float: right; width: 33%; overflow: hidden;">
      <div id="settings" class="dropdown" v-if="true">
        <img src="../assets/settings.png" class="dropbtn rotate">
        <div class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
  overflow: visible;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: black;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 5;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #f1f1f1}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}
a {
  text-decoration: none;
  color: inherit;
}
#logo{
  width: fit-content;
  margin-left: 30px;
  position: relative;
  top: 5px;
  transition: 0.2;
}
#logo:hover{
  transform: rotate(30deg) scale(1.1) translate(5px);
  transition: 0.2s;
}
#nav {
  height: fit-content;
  background-color: #73694f;
  width: 100%;
}
.link {
  line-height: 40px;
  width: 140px;
  margin-left: 5px;
  margin-right: 5px;
  display: inline-block;
  text-align: center;
  border-radius: 15px;
  color:white;
  cursor: pointer;
}
.link:hover{
  color:black;
  font-weight: bold;
  background-color: white;
}
img{
  height: 30px;
  filter: invert(95%);
}
.link:hover img{
  filter: invert(5%);
}
#search{
  height: 90%; 
  width: 140px;
  margin: auto;
  margin-left: 10px;
  border-radius: 20px;
  border: none;
}
#settings{
  float: right;
  position: relative;
  top: 5px;
  margin-right: 10px;
  cursor: pointer;
}
.rotate:hover{
  transform: rotate(90deg);
  transition: 1s;
}
.imgUp{
  position: relative;
  transform: scale(0.7);
  top: -2px;
}
</style>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  methods: {
    logoff(){
      this.$globalData.logged = false;
    }
  }
}
</script>
<template>
    <div class="containerNav">
        <ul>
            <li><a href="#" @click.prevent="recetas()">Recetas Guardadas</a></li>
            <li><a href="#" @click.prevent="amigos()">Lista de Amigos</a></li>
        </ul>
    </div>
</template>
  
<style scoped>
.containerNav {
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7); 
    border: 5px solid #EEF2B6;
    border-radius: 5px;
    justify-content: center;
}
ul {
    list-style-type: none;
    padding: 0;
    height: 100%;
    margin-top: 5%;
}

li {
    width: 100%;
    height: 6%;
    padding: 5px;
    margin-bottom: 8px;
    text-align: center;
    background-color:rgba(210, 180, 140, 0.6);
}

ul li:hover {
  background-color: rgba(210, 180, 140, 1);
  border: 3px solid rgba(160, 0, 0, 0.1);
  cursor: pointer;
}

a {
    display: block;
    padding: 10px;
    text-decoration: none;
    color: #000;
    font-size: 18px;
    font-weight: bold;
    transition: background-color 0.3s;
}

</style>
<script>
// eslint-disable-next-line vue/multi-word-component-names
import router from "@/router";
export default {
    name: "NavPerfil",
    methods: {
        recetas(){
            if (this.$route.path !== "/recetasPerfil") {
                router.push("/recetasPerfil");
            }
        },
        amigos(){
            if (this.$route.path !== "/amigosPerfil") {
                router.push("/amigosPerfil");
            }
        }
            
    },
}
</script>
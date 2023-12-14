import BootstrapVue from "bootstrap-vue";
import "@/../bootstrap/css/bootstrap.css";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import store from "./store";

// Configura tus credenciales de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCellSmTsQmrbM4idiIlLuR7s2kqXGuPh8",
  authDomain: "elcocinillas-93ebe.firebaseapp.com",
  projectId: "elcocinillas-93ebe",
  storageBucket: "elcocinillas-93ebe.appspot.com",
  messagingSenderId: "890714843628",
  appId: "1:890714843628:web:80ef1f936c23ee4593f8c9",
  measurementId: "G-E0L8KN62TW",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
// Obtener el objeto de autenticación
const auth = getAuth(app);
export { auth };

Vue.use(BootstrapVue);
Vue.config.productionTip = false;
export const bus = new Vue();

Vue.prototype.$settings = Vue.observable({
  themes: ['Dark Mode', 'Light Mode'],
  chosen: 'Light Mode',
})

Vue.prototype.$globalData = Vue.observable({
  diets: ['Vegana', 'Vegetariana', 'Omnívora'],
  dishes: ['Ensalada', 'Hamburguesa', 'Postre'],
  searchQuery:''
});
Vue.prototype.$chosen = Vue.observable({
  time: 0,
  diet: null,
  dishes: [],
  logged: false,
});

// Cookies
/*
Vue.prototype.$cookies = Vue.observable({
  update: function(userName, initSession){
    document.cookie = "username = " + userName;
    document.cookie = "initSession = " + initSession;
    document.cookie = "Path = /" ;
  },
  deleteAll: function() {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
    document.cookie = "initSession = false";
  },
  find: function(name){
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  },
  logged: function(){
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${'initSession'}=`);
    if (parts.length === 2 && parts.pop().split(';').shift() === 'true') return true;
    else return false;
  },
  test(){
    return 2 + 2;
  }
});
*/

/* eslint-disable no-new */
new Vue({
  el: "#app",
  store,
  router,
  components: { App },
  template: "<App/>",
})



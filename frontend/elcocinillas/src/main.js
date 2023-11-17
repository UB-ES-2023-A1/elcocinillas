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

Vue.prototype.$globalData = Vue.observable({
  y: 0,
  diets: ['Vegana', 'Vegetariana', 'Omnívora'],
  dishes: ['Ensalada', 'Hamburguesa', 'Postre'],
  logged: false,
  darkMode: false,
});
Vue.prototype.$chosen = Vue.observable({
  time: 0,
  diets: [],
  dishes: []
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  store,
  router,
  components: { App },
  template: "<App/>",
})

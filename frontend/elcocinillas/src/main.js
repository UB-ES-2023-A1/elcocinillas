import BootstrapVue from 'bootstrap-vue'
import '@/../bootstrap/css/bootstrap.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Configura tus credenciales de Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCellSmTsQmrbM4idiIlLuR7s2kqXGuPh8',
  authDomain: 'elcocinillas-93ebe.firebaseapp.com',
  projectId: 'elcocinillas-93ebe',
  storageBucket: 'elcocinillas-93ebe.appspot.com',
  messagingSenderId: '890714843628',
  appId: '1:890714843628:web:80ef1f936c23ee4593f8c9',
  measurementId: 'G-E0L8KN62TW'
}

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
// Obtener el objeto de autenticación
const auth = getAuth(app);
export { auth };

Vue.use(BootstrapVue)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

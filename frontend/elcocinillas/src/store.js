import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store =  new Vuex.Store({
  state: {
    initSession: false,
    userName: null,
    correo: null,
  },
  mutations: {
    setUsername(state, name) {
        state.userName = name;
      },
    setinitSession(state, init) {
        state.initSession = init;
      },
  },
  actions: {
    // Define tus acciones aquí
  },
  getters: {
    isLoggedIn(state) {
      // Comprueba si el usuario está autenticado en función del token de sesión
      return state.initSession;
    },
    getUsername(state) {
      return state.userName;
    },
  },
});
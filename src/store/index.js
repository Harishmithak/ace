import { createStore } from 'vuex';
import axios from 'axios';
import { router } from '../router'; 
const state = {
    user: null,
    isAuthenticated: false,
  };
  
  const mutations = {
    setUser(state, user) {
      state.user = user;
    },
    setAuthenticated(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
    clearUser(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
  };
  
  const getters = {
    isAuthenticated(state) {
      return state.isAuthenticated;
    },
    getUser(state) {
      return state.user;
    },
  };
  
  const actions = {
    login({ commit }, { username, password }) {

  
      axios
        .post('https://acecraft-product-details.onrender.com/login', { username, password })
        .then(response => {
          const user = response.data.user;
  
         
          commit('setUser', user);
          commit('setAuthenticated', true);
  
  

          router.push('/cart');
        })
        .catch(error => {
         
          console.error('Error logging in:', error);
        });
    },
  

  

  };
  
export default createStore({
    state,
    mutations,
    getters,
    actions,
  });
  
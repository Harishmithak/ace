// import { createStore } from 'vuex';
// import axios from 'axios';
// import { router } from '../router';
// const state = {
//   user: null,
//   isAuthenticated: false,

// };

// const mutations = {
//   setUser(state, user) {
//     state.user = user;
//   },
//   setAuthenticated(state, isAuthenticated) {
//     state.isAuthenticated = isAuthenticated;
//   },
//   // setLoginStatus(state, status) {
//   //   state.login = status;
//   // },
  

// };

// const getters = {
//   isAuthenticated(state) {
//     return state.isAuthenticated;
//   },
//   getUser(state) {
//     return state.user;
//   },
// };

// const actions = {
//   login({ commit }, { username, password }) {


//     axios
//       .post('https://acecraft-product-details.onrender.com/login', { username, password })
//       .then(response => {
//         const user = response.data.user;


//         commit('setUser', user);
//         commit('setAuthenticated',true);
//         commit('isAuthenticated',true);


//         router.push('/cart');
//       })
//       .catch(error => {

//         console.error('Error logging in:', error);
//       });
//   },



import { createStore } from 'vuex';

export default createStore({
  state: {
    isLoggedIn: false,
  },
  mutations: {
    SET_LOGIN_STATUS(state, status) {
      state.isLoggedIn = status;
    },
  },
  actions: {
    login({ commit }) {
     
      commit('SET_LOGIN_STATUS', true);
    },
    logout({ commit }) {
   
      commit('SET_LOGIN_STATUS', false);
    },
  },
  getters: {
    isLoggedIn: state => state.isLoggedIn,
  },
});




// };

// export default createStore({
//   state,
//   mutations,
//   getters,
//   actions,
// });

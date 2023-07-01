


<script>

import Nav from './views/mainfolder/NavView.vue'
import Footer from './views/mainfolder/FooterView.vue'
// import Home from './views/HomeView.vue'

export default{
  
components:{
  Nav,
  Footer
}

}
</script>

<template>
<Nav> </Nav>
<router-view> </router-view>

<Footer> </Footer>
<!-- <Home> </Home> -->

</template>
<!-- 

<template>
  <div id="app">
    <Nav> </Nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);


import Nav from './views/NavView.vue'
import Home from './views/HomeView.vue'

const routes = [
  { path: '/', component: Home }

];

const router = new VueRouter({ routes });

export default {
  name: 'App',
  router,
components:{
  Nav
}
};
</script> -->

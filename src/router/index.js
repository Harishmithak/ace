import { createRouter, createWebHistory } from 'vue-router'
import store from '../store';

// import axios from 'axios';


const routes = [
  {
    path: '/',
    name: 'home',

    component: () => import('../views/home/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',

    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/arien',
    name: 'arien',
    component: () => import('../views/arienmask/ArienView.vue')
  },
  {
    path: '/notes',
    name: 'notes',
    component: () => import('../views/notes/NotesView.vue')
  },
  {
    path: '/college',
    name: 'college',
    component: () => import('../views/college/CollegeView.vue')
  },
  {
    path: '/enterprise',
    name: 'enterprise',
    component: () => import('../views/enterprise/EnterpriseView.vue')
  },
  {
    path: '/school',
    name: 'school',
    component: () => import('../views/school/SchoolView.vue'),

  },
  {
    path: '/product',
    name: 'product',
    component: () => import('../views/products/ProductView.vue')
  },
  {
    path: '/display/:id',
    name: 'display',
    component: () => import('../views/products/ProductdisplayView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/cart/CartView.vue'),
    beforeEnter: (to, from, next) => {
      if (store.getters.isLoggedIn) {
        next( );
      } else {
        next('/login');
      }
    }
  },


  

  {
    path: '/register',
    name: 'register',
    component: () => import('../views/signin/RegisterView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/signin/LoginView.vue')
  },
  {
    path: '/reg',
    name: 'reg',
    component: () => import('../views/signin/Register1View.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/admin/AdminView.vue')
  },
  {
    path: '/add',
    name: 'add',
    component: () => import('../views/slot/SlotView.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router

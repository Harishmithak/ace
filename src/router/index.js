import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/home/HomeView.vue'
// import ArienView from '../views/arienmask/ArienView.vue'
// import NotesView from '../views/notes/NotesView.vue'
// import CollegeView from '../views/college/CollegeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
 
    component: () => import( '../views/home/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
 
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/arien',
    name: 'arien',
    component: () => import( '../views/arienmask/ArienView.vue')
  },
  {
    path: '/notes',
    name: 'notes',
    component: () => import( '../views/notes/NotesView.vue')
  },
  {
    path: '/college',
    name: 'college',
    component: () => import( '../views/college/CollegeView.vue')
  },
  {
    path: '/enterprise',
    name: 'enterprise',
    component: () => import( '../views/enterprise/EnterpriseView.vue')
  },
  {
    path: '/school',
    name: 'school',
    component: () => import( '../views/school/SchoolView.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: () => import( '../views/products/ProductView.vue')
  },
  {
    path: '/display/:id',
    name: 'display',
    component: () => import( '../views/products/ProductdisplayView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import( '../views/main/CartView.vue')
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

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
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

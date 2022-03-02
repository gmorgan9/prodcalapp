import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/About',
    name: 'About',
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/Calendar',
    name: 'Calendar',
    component: () => import( '../views/CalendarView.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import( '../views/Login.vue')
  },
  {
    path: '/Register',
    name: 'Register',
    component: () => import( '../views/Register.vue')
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: () => import( '../views/Admin.vue')
  },
  {
    path: '/Event',
    name: 'Event',
    component: () => import( '../views/EventView.vue')
  },
  {
    path: '/Logout',
    name: 'Logout',
    component: () => import( '../views/Logout.vue')
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
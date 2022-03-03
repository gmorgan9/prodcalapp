import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import 'mdb-vue-ui-kit/css/mdb.min.css'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/event/:id',
    name: 'event',
    component: () => import('../views/EventView.vue')
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('../views/CreateEvent.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

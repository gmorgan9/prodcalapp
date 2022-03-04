import { createRouter, createWebHistory } from 'vue-router'

const checkAuth = function(to, _, next) {
  const token = getJwtToken();
  if (token === undefined || token === "undefined" || token === null) {
    // redirect to login because we don't have token yet
    next({
      path: "/login",
      params: { nextUrl: to.fullPath },
    });
  } else {
    next();
  }
};

// import App from "./App.vue";
import HomeView from "../views/HomeView.vue";
import Login from "../views/LoginView.vue";
import Logout from "../views/LogoutView.vue";
import Register from "../views/RegisterView.vue";
import Event from "../views/EventView.vue";
// import AdminArticleAdd from "./components/AdminArticleAdd";
// import AdminArticleList from "./components/AdminArticleList";
// import AdminArticleEdit from "./components/AdminArticleEdit";
import Admin from "../views/AdminView.vue";
import AdminCreateEvent from "../components/AdminCreateEvent.vue";


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/event/:id',
    name: 'event',
    component: Event
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    beforeEnter: checkAuth,
    childern: [
      { path: "event", component: AdminCreateEvent}
    ],
  },
  // {
  //   path: '/create',
  //   name: 'create',
  //   component: () => import('../views/CreateEvent.vue')
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

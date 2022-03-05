import { createRouter, createWebHistory } from 'vue-router'
import { getJwtToken } from "../auth";
import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

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
Vue.config.productionTip = false;
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

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
    component: HomeView
  },
  {
    path: '/event/:event_id',
    component: Event
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/logout',
    component: Logout
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/admin',
    beforeEnter: checkAuth,
    component: Admin,
      
    },
  {
    path: '/create',
    beforeEnter: checkAuth,
    component: AdminCreateEvent
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

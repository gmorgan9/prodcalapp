import { createRouter, createWebHistory } from 'vue-router'
import { getJwtToken } from "../auth";
import Api from "../api";

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

const checkAdmin = function(to, _, next) {
  const userid = Api.getUserID();
  console.log(String(userid));
  const getuser = Api.getUsersDetail(String(userid));
  console.log("query return:" + getuser);
  if (getuser.isadmin === 0) {
    // redirect to login because we don't have token yet
    next({
      path: "/",
      params: { nextUrl: to.fullPath },
    });
  } else {
    next();
  }
};


import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// import App from "./App.vue";
import HomeView from "../views/HomeView.vue";
import Login from "../views/LoginView.vue";
import Logout from "../views/LogoutView.vue";
import Register from "../views/RegisterView.vue";
import Event from "../views/EventView.vue";
import AdminViewUsers from "../components/AdminViewUsers.vue";
import AdminViewEvents from "../components/AdminViewEvents.vue";
import Admin from "../views/AdminView.vue";
import AdminCreateEvent from "../components/AdminCreateEvent.vue";
import AdminUpdateEvent from "../components/AdminUpdateEvent.vue";
import AdminUpdateUser from "../components/AdminUpdateUser.vue";
import SuperAdmin from "../views/SuperAdmin.vue";



const routes = [
  {
    path: '/',
    beforeEnter: checkAuth,
    component: HomeView
  },
  {
    path: '/event/:event_id',
    beforeEnter: checkAuth,
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
      path: '/superadmin',
      beforeEnter: checkAdmin,
      component: SuperAdmin,
      },
  {
    path: '/create',
    beforeEnter: checkAuth,
    component: AdminCreateEvent
  },
  {
    path: '/updateevents/:event_id',
    beforeEnter: checkAuth,
    component: AdminUpdateEvent
  },
  {
    path: '/adminusers',
    beforeEnter: checkAuth,
    component: AdminViewUsers
  },
  {
    path: '/adminevents',
    beforeEnter: checkAuth,
    component: AdminViewEvents
  },
  {
    path: '/updateusers/:user_id',
    beforeEnter: checkAuth,
    component: AdminUpdateUser
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

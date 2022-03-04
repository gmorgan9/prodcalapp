import { createRouter, createWebHistory } from 'vue-router'
import { getJwtToken } from "../auth";

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
    component: HomeView
  },
  // {
  //   path: '/event/:id',
  //   component: Event
  // },
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
    component: Admin,
    beforeEnter: checkAuth,
    childern: [
      { path: "event", component: AdminCreateEvent}
    ],
  },
  {
    path: '/create',
    name: 'create',
    component: AdminCreateEvent
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

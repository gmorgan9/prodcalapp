// import Vue from "vue";
// import VueRouter from "vue-router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import App from "./App.vue";
import Home from "./views/HomeView";
import Admin from "./views/Admin";
import Login from "./views/Login";
// import Logout from "./views/Logout";
import Register from "./views/Register";
// import Article from "./views/Article";
// import AdminArticleAdd from "./components/AdminArticleAdd";
// import AdminArticleList from "./components/AdminArticleList";
// import AdminArticleEdit from "./components/AdminArticleEdit";

Vue.config.productionTip = false;

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { getJwtToken } from "./auth";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);

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

const router = new VueRouter({
  routes: [
    { path: "/", component: Home },
    // { path: "/article/:id", component: Article },
    { path: "/login", component: Login },
    // { path: "/logout", component: Logout },
    { path: "/register", component: Register },
    {
      path: "/admin",
      component: Admin,
      beforeEnter: checkAuth,
      children: [
        { path: "add", component: AdminArticleAdd },
        { path: "edit/:id", component: AdminArticleEdit },
        { path: "", component: AdminArticleList },
      ],
    },
  ],
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
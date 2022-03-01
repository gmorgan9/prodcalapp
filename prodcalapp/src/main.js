import Vue from "vue";
import VueRouter from "vue-router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import App from "./App.vue";
import Home from "./pages/Home_page";
import Admin from "./pages/Admin_page";
import Login from "./pages/Login_page";
import Logout from "./pages/Logout_page";
import Register from "./pages/Register_page";
import Article from "./pages/Article_page";
import AdminArticleAdd from "./components/AdminArticleAdd";
import AdminArticleList from "./components/AdminArticleList";
import AdminArticleEdit from "./components/AdminArticleEdit";

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
    { path: "/article_page/:id", component: Article },
    { path: "/login_page", component: Login },
    { path: "/logout_page", component: Logout },
    { path: "/register_page", component: Register },
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
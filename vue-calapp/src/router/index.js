import Vue from "vue";
import Router from "vue-router";
import HomeView from "./views/HomeView.vue";
import 'fullcalendar/dist/fullcalendar.css'
Vue.use(Router);
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    }
  ]
});

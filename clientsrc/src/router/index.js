import Vue from "vue";
import VueRouter from "vue-router";
// @ts-ignore
import Home from "../Pages/Home.vue";
// @ts-ignore
import Profile from "../Pages/Profile.vue";
// @ts-ignore
import CustDashboard from "../Pages/CustDashboard.vue"
// @ts-ignore
import ProvDashboard from "../Pages/ProvDashboard.vue"
// @ts-ignore
import ActiveJob from "../Pages/ActiveJob.vue"
import { authGuard } from "@bcwdev/auth0-vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    beforeEnter: authGuard,
  },
  {
    path: "/custdashboard",
    name: "CustDashboard",
    component: CustDashboard,
    beforeEnter: authGuard,
  },
  {
    path: "/provdashboard",
    name: "ProvDashboard",
    component: ProvDashboard,
    beforeEnter: authGuard,
  },
  {
    path: "/activejob",
    name: "ActiveJob",
    component: ActiveJob,
    beforeEnter: authGuard,
  }
];

const router = new VueRouter({
  routes,
});

export default router;

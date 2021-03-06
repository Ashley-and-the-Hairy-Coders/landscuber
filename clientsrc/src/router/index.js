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
import JobDetails from "../Pages/JobDetails.vue"
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
    path: "/custdashboard/:customerId",
    name: "CustDashboard",
    component: CustDashboard,
    beforeEnter: authGuard,
  },
  {
    path: "/provdashboard/:providerId",
    name: "ProvDashboard",
    component: ProvDashboard,
    beforeEnter: authGuard,
  },
  {
    path: "/jobdetails/:jobId",
    name: "JobDetails",
    component: JobDetails,
    beforeEnter: authGuard,
  }
];

const router = new VueRouter({
  routes,
});

export default router;

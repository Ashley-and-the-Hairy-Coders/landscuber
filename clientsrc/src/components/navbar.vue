<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-plat">
    <router-link class="navbar-brand" :to="{ name: 'Home' }"
      ><img src="../assets/logo.png" width="160" height="130" class="img-fluid"></router-link
    >
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item ml-auto" :class="{ active: $route.name == 'Home' }">
          <router-link :to="{ name: 'Home' }" class="nav-link"
            >Home</router-link
          >
        </li>
        <li
          class="nav-item ml-auto"
          v-if="$auth.isAuthenticated"
          :class="{ active: $route.name == 'Profile' }"
        >
          <router-link class="nav-link ml-auto" :to="{ name: 'Profile' }"
            >Profile</router-link
          >
        </li>
        <li
          class="nav-item ml-auto"
          v-if="$auth.isAuthenticated "
          :class="{ active: $route.name == 'CustDashboard' }"
        >
          <router-link class="nav-link ml-auto" :to="{ name: 'CustDashboard', params: { customerId: profile.customerProfile._id } }"
            >Dashboard</router-link
          >
        </li>
      </ul>
      <span class="navbar-text d-flex ml-auto">
        <img :src="this.profile.picture" height="50px" class="mx-2 ml-auto rounded rounded-circle">
        <button
          class="btn text-info btn-link nav-button"
          @click="login"
          v-if="!$auth.isAuthenticated"
        >
          Login
        </button>
        <button class="btn btn-link nav-button" @click="logout" v-else>logout</button>
      </span>
    </div>
  </nav>
</template>

<script>
import axios from "axios";
import { getUserData } from "@bcwdev/auth0-vue";
export default {
  name: "Navbar",
  computed: {
    profile() {
      return this.$store.state.profile;
    }
  },
  methods: {
    async login() {
      await this.$auth.loginWithPopup();
      this.$store.dispatch("setBearer", this.$auth.bearer);
      console.log("this.$auth.user: ");
      console.log(this.$auth.user);
      this.$store.dispatch("getProfile");
    },
    async logout() {
      this.$store.dispatch("resetBearer");
      await this.$auth.logout({returnTo: window.location.origin});
    }
  }
};
</script>

<style scoped>
.bg-plat{
  background-color: #E8E9EB;
}
.nav-button {
  margin: 0;
  padding: 0;
}
</style>

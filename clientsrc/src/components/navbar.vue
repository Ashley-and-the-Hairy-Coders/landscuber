<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-plat">
    <router-link class="navbar-brand" :to="{ name: 'Home' }">
      <img src="../assets/logo.png" width="160" height="130" class="img-fluid" />
    </router-link>
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
          <router-link :to="{ name: 'Home' }" class="nav-link">Home</router-link>
        </li>
        <li
          class="nav-item ml-auto"
          v-if="$auth.isAuthenticated"
          :class="{ active: $route.name == 'Profile' }"
        >
          <router-link class="nav-link ml-auto" :to="{ name: 'Profile' }">Profile</router-link>
        </li>
        <li
          class="nav-item ml-auto"
          v-if="$auth.isAuthenticated "
          :class="{ active: $route.name == 'CustDashboard' }"
        >
          <router-link
            v-if="profile.customerProfile"
            class="nav-link ml-auto"
            :to="{ name: 'CustDashboard', params: { customerId: profile.customerProfile._id } }"
          >Customer Dashboard</router-link>
        </li>
        <li
          class="nav-item ml-auto"
          v-if="$auth.isAuthenticated && profile.providerProfile"
          :class="{ active: $route.name == 'ProvDashboard' }"
        >
          <router-link
            class="nav-link ml-auto"
            :to="{ name: 'ProvDashboard', params: { providerId: profile.providerProfile._id } }"
          >Provider Dashboard</router-link>
        </li>
      </ul>
      <span class="navbar-text d-flex ml-auto">
        <img :src="this.profile.picture" height="50px" class="mx-2 ml-auto rounded rounded-circle" />
        <button
          class="btn text-info btn-link nav-button"
          @click="login(`customer`)"
          v-if="!$auth.isAuthenticated"
        >Login</button>
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
  data() {
    return {
      Toast: this.$swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        onOpen: toast => {
          toast.addEventListener("mouseenter", this.$swal.stopTimer);
          toast.addEventListener("mouseleave", this.$swal.resumeTimer);
        }
      })
    };
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    }
  },
  methods: {
    async login(regType) {
      await this.$auth.loginWithPopup();
      this.$store.dispatch("setBearer", this.$auth.bearer);
      if (this.$auth.user) {
        this.Toast.fire({
          icon: "success",
          title: "Signed in successfully"
        });
      }
      console.log("this.$auth.user: ");
      console.log(this.$auth.user);
      this.$store.dispatch("getProfile");
      setTimeout(this.toggleModal(regType), 2000)
    },
    async logout() {
      this.$store.dispatch("resetBearer");
      await this.$auth.logout({ returnTo: window.location.origin });
    },
    toggleModal(registration) {
      console.log("toggled", registration);
      console.log(this.profile.providerProfile);
      if (this.$auth.user && !this.profile.customerProfile.nickname && registration == "customer") {
        console.log("customer condition met");
        $("#customerRegModal").modal("toggle");
      } else if (this.$auth.user && !this.profile.providerProfile.nickname && registration == "provider") {
        $("#providerRegModal").modal("toggle");
        console.log("provider condition met");
      }
    }
  }
};
</script>

<style scoped>
.bg-plat {
  background-color: #e8e9eb;
}
.nav-button {
  margin: 0;
  padding: 0;
}
</style>

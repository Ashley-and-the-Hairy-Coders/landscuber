<template>
  <div class="home container-fluid bg-home">
    <!-- Top Home Row -->
    <div class="row top-row justify-content-center mb-0">
      <div class="col-12 col-md-8 col-lg-5 align-middle text-center my-auto">
        <button type="button" @click="landscaper = false" class="btn mx-2 btn-link">
          <h3>Hire a Landscüber</h3>
        </button>
        <button type="button" @click="landscaper = true" class="btn mx-2 btn-link">
          <h3>Find Clients</h3>
        </button>

        <div v-if="!landscaper">
          <h4 class="mx-5">We take the worry out of yard work!</h4>
          <button class="btn mx-2 btn-lg btn-success" @click="CustomerReg">Join Now</button>
        </div>

        <div v-if="landscaper">
          <h4 class="mx-5">Find new clients in your area!</h4>
          <!-- This btn takes user to the landscaper sign up -->
          <button type="button" @click="ProviderReg" class="btn mx-2 btn-lg btn-success">Get Started</button>
        </div>
      </div>

      <div class="col-8 col-lg-5 align-self-end text-center mt-2">
        <img class="img-fluid text-bottom mt-lg-5 mb-0 mx-auto" src="../assets/Home-Landscuber.png" />
      </div>
    </div>

    <!-- Customer/Partner Join Now Row -->
    <div class="row bg-home-mid justify-content-around bg-secondary py-5">
      <div class="col-12 col-md-8 col-lg-5 text-center py-4">
        <h4>Need your lawn mowed today? Join as a customer!</h4>
        <p>Landscüber gives you the power to name your price and immediately connect with a local lawn care professional. Whether you’ve got a small backyard or a large commercial property, Landscüber will get the job done.</p>
        <button @click="CustomerReg" class="btn btn-success">Join Now</button>
        <Modal title="Sign up as a customer" id="customerRegModal">
          <CustomerReg></CustomerReg>
        </Modal>
      </div>
      <div class="col-12 col-md-8 col-lg-5 text-center py-4">
        <h4>Ready to accept a job? Become a provider!</h4>
        <p>Landscüber allows you to view all active jobs in your area, and earn money on your own schedule. As long as you’ve got the equipment and transportation, there is unlimited potential for individual success.</p>
        <button class="btn btn-success" @click="ProviderReg">Get Started</button>
        <Modal title="Sign up as a provider" id="providerRegModal">
          <ProviderReg></ProviderReg>
        </Modal>
      </div>
    </div>

    <!-- Landing Page Reviews -->
    <LPR></LPR>
  </div>
</template>

<script>
import LPR from "../components/LandingPageReviews";
import Modal from "../components/Modal";
import CustomerReg from "../components/CustomerReg";
import ProviderReg from "../components/ProviderReg";
import axios from "axios";
import { getUserData } from "@bcwdev/auth0-vue";
export default {
  name: "home",
  data() {
    return {
      landscaper: false,
      Toast : this.$swal.mixin({
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
    CustomerReg() {
      if (!this.$auth.isAuthenticated) {
        this.login("customer");
      } else if (this.$auth.isAuthenticated && this.profile.customerProfile) {
        this.goToCustomerDash();
      } else if (this.$auth.isAuthenticated && this.profile.providerProfile) {
        $("#customerRegModal").modal("toggle");
      } else if (
        this.$auth.isAuthenticated &&
        !this.profile.customerProfile &&
        !this.profile.providerProfile
      ) {
        $("#customerRegModal").modal("toggle");
      }
    },
    ProviderReg() {
      if (!this.$auth.isAuthenticated) {
        let RegType = "provider";
        this.login(RegType);
      } else if (this.$auth.isAuthenticated && this.profile.providerProfile) {
        this.goToProviderDash();
      } else if (this.$auth.isAuthenticated && this.profile.customerProfile) {
        $("#providerRegModal").modal("toggle");
      } else if (
        this.$auth.isAuthenticated &&
        !this.profile.customerProfile &&
        !this.profile.providerProfile
      ) {
        $("#providerRegModal").modal("toggle");
      }
    },
    goToCustomerDash() {
      this.$router.push({
        name: "CustDashboard",
        params: { customerId: this.profile.customerProfile._id }
      });
    },
    goToProviderDash() {
      this.$router.push({
        name: "ProvDashboard",
        params: { providerId: this.profile.providerProfile._id }
      });
    },
    async login(regType) {
      await this.$auth.loginWithPopup();
      this.$store.dispatch("setBearer", this.$auth.bearer);
      if (this.$auth.user) {
        this.Toast.fire({
          icon: "success",
          title: "Signed in successfully"
        });
      }
      let modal = regType
      console.log("this.$auth.user: ");
      console.log(this.$auth.user);
      this.$store.dispatch("getProfile");
      setTimeout(this.toggleModal(modal), 2000)
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
  },
  components: {
    Modal,
    CustomerReg,
    ProviderReg,
    LPR
  }
};
</script>


<style>
.bg-home {
  background-color: #e8e9eb;
}
.bg-home-mid {
  background: rgb(232, 233, 235);
  background: linear-gradient(
    0deg,
    rgba(232, 233, 235, 1) 0%,
    rgba(224, 223, 213, 1) 38%
  );
}
.btn-link:focus {
  color: #85cf4b;
}
</style>
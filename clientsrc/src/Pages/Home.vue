<template>
  <div class="home container-fluid bg-home">
    <!-- Top Home Row -->
    <div class="row top-row justify-content-center mb-0">
      <div class="col-12 col-md-8 col-lg-5 align-middle text-center my-auto">
        <button type="button" @click="landscaper = false" class="btn mx-2 btn-link">
          <strong>Hire a Landscüber</strong>
        </button>
        <button type="button" @click="landscaper = true" class="btn mx-2 btn-link">
          <strong>Find Clients</strong>
        </button>

        <div v-if="!landscaper">
          <h4 class="mx-5">We take the worry out of yard work!</h4>
          <form class="my-2">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Enter your zip to find a mower"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <div class="input-group-append">
                <button class="btn btn-outline-success" type="button" id="button-addon2">Search</button>
              </div>
            </div>
          </form>
        </div>

        <div v-if="landscaper">
          <h3 class="mx-5">Find new clients in your area!</h3>
          <!-- This btn takes user to the landscaper sign up -->
          <button type="button" class="btn mx-2 btn-sm btn-success">Get Started</button>
        </div>
      </div>

      <div class="col-8 col-lg-5 align-self-end text-center mt-2">
        <img class="img-fluid text-bottom mt-lg-5 mb-0 mx-auto" src="../assets/Home-Landscuber.png" />
      </div>
    </div>

    <!-- Customer/Partner Join Now Row -->
    <div class="row bg-home-mid justify-content-around bg-secondary py-5">
      <div class="col-12 col-md-8 col-lg-6 text-center py-4">
        <h4>When you need your lawn mowed today, Landscüber will get it done!</h4>
        <p>Name your price and immediately connect with local lawn care professionals.</p>
        <button
          v-if="!this.$store.state.profile.customerProfile"
          class="btn btn-success"
          data-toggle="modal"
          data-target="#customerRegModal"
        >Join Now</button>
        <button v-else class="btn btn-success" @click="goToCustomerDash()">Go to Dashboard</button>

        <Modal title="Join Today!" id="customerRegModal">
          <CustomerReg></CustomerReg>
        </Modal>
      </div>
      <div class="col-12 col-md-8 col-lg-6 text-center py-4">
        <h4>Ready to get a job now? Join as a provider</h4>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex reprehenderit aut incidunt. Sapiente tenetur unde corrupti dolorum, placeat officiis praesentium, perferendis at, illum architecto aspernatur accusamus distinctio fugiat iste alias.</p>
        <button
          class="btn btn-success"
          v-if="!this.$store.state.profile.providerProfile"
          data-toggle="modal"
          data-target="#providerRegModal"
        >Get Started</button>
        <button v-else class="btn btn-success" @click="goToProviderDash()">Make some $$$</button>
        <Modal title="Sign up to start Scübing!" id="providerRegModal">
          <ProviderReg></ProviderReg>
        </Modal>
      </div>
    </div>

    <!-- Customer Review Row -->
    <!-- NOTE Do we want to make this a separate component? -->
    <LPR></LPR>
  </div>
</template>

<script>
import LPR from "../components/LandingPageReviews";
import Modal from "../components/Modal";
import CustomerReg from "../components/CustomerReg";
import ProviderReg from "../components/ProviderReg";
export default {
  name: "home",
  data() {
    return {
      landscaper: false
    };
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    }
  },
  methods: {
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
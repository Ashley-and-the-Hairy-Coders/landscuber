<template>
  <div class="about container-fluid">
    <div class="row my-3">
      <div class="col-12 text-center">
        <img class="rounded mb-2" :src="profile.picture" alt />
        <h5 v-if="profile.customerProfile">{{ this.customerRating }} Star Customer Rating</h5>
        <h5 v-if="profile.providerProfile">{{ this.providerRating }} Star Provider Rating</h5>
      </div>
    </div>

    <div v-if="profile.customerProfile" class="row mt-3 pb-3 pt-3 bg-grey">
      <div class="col-md-4">
        <h3>Customer Info</h3>
        <h6>First: {{ profile.customerProfile.firstName }}</h6>
        <h6>Last: {{ profile.customerProfile.lastName }}</h6>
        <p class="mb-0">Email: {{ profile.email }}</p>
        <p class="mb-0">Cell Phone: {{ profile.customerProfile.cellPhone }}</p>
        <p class="mb-0">Primary Phone: {{ profile.customerProfile.primaryPhone }}</p>
      </div>

      <div class="col-md-4">
        <h3>Customer Address(es)</h3>
        <div v-for="Address in Addresses" :key="Address._id" class="mb-4">
          <h6>Contact: {{ Address.contactName}}</h6>
          <p class="mb-0">Yard Size: {{ Address.yardSize}}</p>
          <p class="mb-0">{{ Address.streetAddress}}</p>
          <p class="mb-0">{{Address.city }}, {{Address.state }} {{ Address.zipCode}}</p>
        </div>
      </div>

      <div class="col-md-4">
        <h3>Customer Billing Info</h3>
        <p>{{ profile.customerProfile.billingInfo }}</p>
      </div>

      <div class="col-12 d-flex justify-content-center">
        <button
          data-toggle="modal"
          data-target="#editCustomerModal"
          class="btn btn-outline-success"
        >Edit Customer Profile</button>

        <Modal title="Edit Customer Profile" id="editCustomerModal">
          <editCustomer></editCustomer>
        </Modal>
      </div>
    </div>

    <div v-if="profile.providerProfile" class="row mt-4 mb-4 pb-3 pt-3 bg-tan">
      <div class="col-md-4">
        <h3>Provider Info</h3>
        <h6>First: {{ profile.providerProfile.firstName }}</h6>
        <h6>Last: {{ profile.providerProfile.lastName }}</h6>
        <p class="mb-0">Email: {{ profile.email }}</p>
        <p>Cell Phone: {{ profile.providerProfile.phone }}</p>
      </div>

      <div class="col-md-4">
        <h3>Provider Service(s)</h3>
        <h6>By selecting options below, you are confirming you are able to provide the transportation, equipment, and labor necessary to complete these tasks.</h6>
        <p>{{ profile.providerProfile.services }}</p>
      </div>

      <div class="col-md-4">
        <h3>Provider Billing Info</h3>
        <p>{{ profile.providerProfile.paymentInfo }}</p>
      </div>

      <div class="col-12 d-flex justify-content-center">
        <button
          data-toggle="modal"
          data-target="#editProviderModal"
          class="btn btn-outline-success"
        >Edit Provider Profile</button>

        <Modal title="Edit Provider Profile" id="editProviderModal">
          <editProvider></editProvider>
        </Modal>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "../components/Modal";
// import editCustomer from "../components/editCustomer";
// import editProvider from "../components/editProvider";
export default {
  name: "Profile",
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    providerRating() {
      let arr = this.$store.state.profile.providerProfile.ratings;
      let sum = arr.reduce(function(a, b) {
        return a + b;
      }, 0);
      return sum;
      let avgProviderRate = sum / arr.length;
      return avgProviderRate;
    },
    customerRating() {
      let arr = this.$store.state.profile.customerProfile.ratings;
      let sum = arr.reduce(function(a, b) {
        return a + b;
      }, 0);
      return sum;
      let avgCustomerRate = sum / arr.length;
      return avgCustomerRate;
    },
    Addresses() {
      if (this.$store.state.profile.customerProfile) {
        return this.$store.state.profile.customerProfile.addresses;
      }
      return [];
    }
  },
  methods: {},
  components: {
    Modal
    // editCustomer,
    // editProvider
  }
};
</script>

<style scoped>
img {
  max-width: 100px;
}
.bg-grey {
  background-color: #e8e9eb;
}
.bg-tan {
  background-color: #e6e5db;
}
</style>

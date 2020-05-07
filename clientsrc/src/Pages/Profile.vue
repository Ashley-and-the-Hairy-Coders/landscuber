<template>
  <div class="about container-fluid">
    <div class="row my-3">
      <div class="col-12 text-center">
        <img class="rounded mb-2" :src="profile.picture" alt />
        <h5 v-if="profile.customerProfile">{{ this.customerRating }} Star Customer Rating</h5>
        <h5 v-if="profile.providerProfile">{{ this.providerRating }} Star Provider Rating</h5>
      </div>
    </div>

    <div v-if="profile.customerProfile" class="row mt-5 mb-5">
      <div class="col-md-4">
        <h3 class="text-success">Customer Account Settings</h3>
        <h6>First Name: {{ profile.customerProfile.firstName }}</h6>
        <h6>Last Name: {{ profile.customerProfile.lastName }}</h6>
        <p class="mb-0">Email: {{ profile.email }}</p>
        <p class="mb-0">Cell Phone: {{ profile.customerProfile.cellPhone }}</p>
        <p class="mb-0">Primary Phone: {{ profile.customerProfile.primaryPhone }}</p>
      </div>

      <div class="col-md-4">
        <h3 class="text-success">Customer Address(es)</h3>
        <div v-for="Address in Addresses" :key="Address._id" class="mb-4">
          <h6>Contact: {{ Address.contactName}}</h6>
          <p class="mb-0">Yard Size: {{ Address.yardSize}}</p>
          <p class="mb-0">{{ Address.streetAddress}}</p>
          <p class="mb-0">{{Address.city }}, {{Address.state }} {{ Address.zipCode}}</p>
        </div>
      </div>

      <div class="col-md-4">
        <h3 class="text-success">Customer Billing Info</h3>
        <p>{{ profile.customerProfile.billingInfo }}</p>
      </div>
    </div>

    <div v-if="profile.providerProfile" class="row mt-5 mb-5">
      <div class="col-md-4">
        <h3 class="text-success">Provider Account Settings</h3>
        <h6>First Name: {{ profile.providerProfile.firstName }}</h6>
        <h6>Last Name: {{ profile.providerProfile.lastName }}</h6>
        <p class="mb-0">Email: {{ profile.email }}</p>
        <p>Cell Phone: {{ profile.providerProfile.phone }}</p>
      </div>

      <div class="col-md-4">
        <h3 class="text-success">Provider Services</h3>
        <h6>By selecting options below, you are confirming you are able to provide the transportation, equipment, and labor necessary to complete these tasks.</h6>
        <p>{{ profile.providerProfile.services }}</p>
      </div>

      <div class="col-md-4">
        <h3 class="text-success">Provider Billing Info</h3>
        <p>{{ profile.providerProfile.paymentInfo }}</p>
      </div>
    </div>
  </div>
</template>

<script>
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
  methods: {}
};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>

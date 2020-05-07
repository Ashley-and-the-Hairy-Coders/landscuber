<template>
  <div class="about container-fluid">
    <div class="row my-3">
      <div class="col-12 text-center">
        <img class="rounded" :src="profile.picture" alt />
        <h5 v-if="profile.customerProfile">{{ profile.customerProfile.ratings }} Star Customer</h5>
        <h5 v-if="profile.providerProfile">{{ profile.providerProfile.ratings }} Star Provider</h5>
      </div>
    </div>

    <div v-if="profile.customerProfile" class="row mt-5">
      <div class="col-md-4">
        <h3 class="text-success">Customer Account Settings</h3>
        <p>First Name: {{ profile.customerProfile.firstName }}</p>
        <p>Last Name: {{ profile.customerProfile.lastName }}</p>
        <p>Email: {{ profile.email }}</p>
        <p>Cell Phone: {{ profile.customerProfile.cellPhone }}</p>
        <p>Primary Phone: {{ profile.customerProfile.primaryPhone }}</p>
      </div>

      <div class="col-md-4">
        <h3 class="text-success">Customer Address(es)</h3>
        <!-- I think this needs to be a v-for for each address -->
        <p>Address Contact: {{ }}</p>
        <p>Yard Size: {{ }}</p>
        <p>Street: {{ }}</p>
        <p>City: {{ }}</p>
        <p>State: {{ }}</p>
        <p>Zip: {{ }}</p>
      </div>

      <div class="col-md-4">
        <h3 class="text-success">Customer Billing Info</h3>
        <p>{{ profile.customerProfile.billingInfo }}</p>
      </div>
    </div>

    <div v-if="profile.providerProfile" class="row mt-5">
      <div class="col-md-4">
        <h3 class="text-success">Provider Account Settings</h3>
        <p>First Name: {{ profile.providerProfile.firstName }}</p>
        <p>Last Name: {{ profile.providerProfile.lastName }}</p>
        <p>Email: {{ profile.email }}</p>
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
    }
  }
};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>

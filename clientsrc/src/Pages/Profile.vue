<template>
  <div class="about container-fluid bg-secondary">
    <div class="row my-3">
      <div class="col-12 text-center">
        <img class="rounded mb-2" :src="profile.picture" alt />
        <!-- <h5 v-if="profile.customerProfile">{{ this.customerRating }} Star Customer Rating</h5> -->
        <h5 v-if="profile.providerProfile">{{ providerRating }} Star Provider Rating</h5>
      </div>
    </div>

    <div v-if="profile.customerProfile" class="row justify-content-lg-around mt-3 py-5 mx-2">
      <div class="col-md-4">
        <h3>Customer Info</h3>
        <h6>First: {{ profile.customerProfile.firstName }}</h6>
        <h6>Last: {{ profile.customerProfile.lastName }}</h6>
        <p class="mb-0">Email: {{ profile.email }}</p>
        <p class="mb-0">Cell Phone: {{ profile.customerProfile.cellPhone }}</p>
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

      <div class="col-12 pt-5 d-flex justify-content-center">
        <button
          data-toggle="modal"
          data-target="#editCustomer"
          class="btn btn-outline-info"
        >Edit Customer Profile</button>

        <Modal title="Edit Customer Profile" id="editCustomer">
          <editCustomer :customer="this.profile.customerProfile"></editCustomer>
        </Modal>
      </div>
    </div>

    <div v-if="profile.providerProfile" class="row bg-tan mt-4 py-5 mx-2">
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
        <ul>
          <li>Mowing</li>
          <li>Trimming</li>
          <li>Edging</li>
        </ul>
      </div>

      <div class="col-md-4">
        <h3>Provider Billing Info</h3>
        <p>{{ profile.providerProfile.paymentInfo }}</p>
      </div>

      <div class="col-12 pt-5 d-flex justify-content-center">
        <button
          data-toggle="modal"
          data-target="#editProvider"
          class="btn btn-outline-info"
        >Edit Provider Profile</button>

        <Modal title="Edit Provider Profile" id="editProvider">
          <editProvider :provider="this.profile.providerProfile"></editProvider>
        </Modal>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "../components/Modal";
import editCustomer from "../components/editCustomer";
import editProvider from "../components/editProvider";
export default {
  name: "Profile",
  data() {
    return {};
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    providerRating() {
      let ratings = this.$store.state.profile.providerProfile.ratings;
      let avgRating = 0;
      let newArr = [];
      if (ratings.length <= 0) {
        return (avgRating = 5);
      } else {
        ratings.forEach(r => {
          newArr.push(r.providerRating);
        });
        avgRating = newArr.reduce((a, b) => a + b, 0) / newArr.length;
        return avgRating.toFixed(1);
      }
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
    Modal,
    editCustomer,
    editProvider
  }
};
</script>

<style scoped>
img {
  max-width: 100px;
}

.bg-tan {
  background-color: #e6e5db;
}
</style>

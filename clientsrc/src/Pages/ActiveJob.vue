<template>
  <div class="activejob">
    <div class="container-fluid bg-home">
      <div class="row">
        <div class="col-12 pt-3">
          <h5>Customer Name:</h5>
          <!-- NOTE <h5> {{activeJob.contactName}}</h5>  -->
        </div>
      </div>
      <div class="row">
        <div class="col-12 pt-5 ml-5">
          <h5>Job Details:</h5>
          <!-- NOTE <h5> {{activeJob.contactName}}</h5>  -->
        </div>
      </div>
      <div class="row pb-5 m-auto justify-content-center">
        <div class="col-12 col-md-2 m-2 pt-3 card">
          <p>Address:</p>
          <!-- NOTE <h6> {{activeJob.streetAddress}}</h6>  -->
          <!-- NOTE <h6> {{activeJob.city}}, {{activeJob.state}} {{activeJob.zipCode}}</h6>  -->
        </div>
        <div class="col-12 col-md-2 pt-3 m-2 card">
          <p>Date & Time:</p>
          <!-- NOTE <h6> {{activeJob.timeWindow}}</h6>  -->
          <!-- NOTE <h6> {{activeJob.confirmedTime}} || </h6>  -->
        </div>
        <div class="col-12 col-md-2 pt-3 m-2 card">
          <p>Yard Size:</p>
          <!-- NOTE <h6> {{activeJob.yardSize.enum}}</h6>  -->
        </div>
        <div class="col-12 col-md-2 pt-3 m-2 card">
          <p>Rate:</p>
          <!-- NOTE <h6> {{activeJob.price}}</h6>  -->
        </div>
      </div>
      <div class="row bg-blend"></div>
      <div class="row pt-5 bg-message">
        <div class="col-12">
          <h4 class="text-center">Message Center:</h4>
        </div>
        <!--NOTE insert message table -->
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "ActiveJob",
  data() {
    return {};
  },
  computed: {
    profile() {
      this.$store.state.profile.customerProfile;
      this.$store.state.profile.providerProfile; //NOTE need to work on how manage this if they have both a customer profile AND provider profile
    },
    job() {
      this.$store.state.activeJob;
    }
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
.bg-home {
  background-color: #e8e9eb;
}
.bg-blend {
  background: rgb(232, 233, 235);
  background: linear-gradient(
    180deg,
    rgba(232, 233, 235, 1) 0%,
    rgba(224, 223, 213, 1) 38%
  );
  height: 80px
}
.bg-message {
    background: rgba(224, 223, 213, 1);
    height: 50vh
}
</style>
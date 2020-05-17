<template>
  <!-- Card(formerly a table) to to display each job in  -->
  <div class="col-md-3 m-2">
    <div class="card">
      <div class="card-header bg-info">
        <p class="text-white p-0 m-0 display-6">
          <strong>{{jobData.contactName}}</strong>
        </p>
      </div>
      <div class="card-body text-capitalize text-info">
        <p>{{jobData.streetAddress}}, {{jobData.city}}, {{jobData.state}} {{jobData.zipCode}}</p>
        <p>Date: {{jobData.timeWindow}}</p>
        <p>Job Price: ${{jobData.price}}</p>
        <p>Yard Size: {{jobData.yardSize}}</p>
      </div>
      <button
        @click="setJobForRating()"
        class="btn btn-success btn-sm m-1 mt-3"
        data-toggle="modal"
        data-target="#jobRatingModal"
      >Leave feedback!</button>
    </div>
  </div>
</template>


<script>
export default {
  name: "custCompleteTable",
  props: ["jobData"],
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {
    setJobForRating() {
      this.$store.commit("setJobToBeRated", this.jobData);
      $('#jobRatingModal').modal('hide');
    }
  },
  components: {}
};
</script>


<style scoped>
</style>
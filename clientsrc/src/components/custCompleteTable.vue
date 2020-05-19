<template>
  <!-- Card(formerly a table) to to display each job in  -->
  <div class="col-md-3 m-2">
    <div class="card">
      <div class="card-header bg-info">
        <p class="text-white display-6">
          <strong>{{jobData.contactName}}</strong>
        </p>
      </div>
      <div class="card-body text-capitalize text-danger text-left">
        <p><strong>Addr: </strong>{{jobData.streetAddress}}, {{jobData.city}}, {{jobData.state}} {{jobData.zipCode}}</p>
        <p><strong>Date: </strong>{{jobData.timeWindow}}</p>
        <p><strong>Price: </strong>${{jobData.price}}</p>
        <p><strong>Yard Size: </strong>{{jobData.yardSize}}</p>
      </div>
      <button
        @click="setJobForRating()"
        class="btn btn-success btn-sm m-1"
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
p{
  margin: 0;
}
</style>
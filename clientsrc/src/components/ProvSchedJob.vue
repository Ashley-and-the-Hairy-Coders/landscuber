<template>
  <div class="col-md-3 my-2">
    <div class="card">
      <div class="card-header bg-info">
        <p class="text-white p-0 m-0 display-6">
          <strong>{{jobData.contactName}}</strong>
        </p>
      </div>
      <div class="card-body text-capitalize text-danger text-left">
        <p>
          <strong>Addr:</strong>
          {{jobData.streetAddress}}, {{jobData.city}}, {{jobData.state}} {{jobData.zipCode}}
        </p>
        <a
          :href="`http://google.com/maps/dir/${coords.latitude},${coords.longitude}/${jobData.streetAddress}+${jobData.city}+${jobData.state}+${jobData.zipCode}`"
          target="_blank"
          rel="noopener noreferrer"
        >Get Directions!</a>
        <p>
          <strong>Service Date:</strong>
          {{jobData.timeWindow}}
        </p>
        <p>
          <strong>Price:</strong>
          ${{jobData.price}}
        </p>
        <p class="text-capitalize">
          <strong>Yard Size:</strong>
          {{jobData.yardSize}}
        </p>
      </div>
      <button class="btn btn-success btn-sm mx-2 my-1" @click="startJob()">Start Job</button>
      <button class="btn btn-danger btn-sm mx-2 my-1" @click="goToJobDetails()">View Job Details</button>
    </div>
  </div>
  <!-- <tbody class="ProviderScheduledJobs">
    <tr>
        <td @click.prevent="goToJobDetails"
          scope="row"
        >{{jobData.streetAddress}} {{jobData.city}}, {{jobData.state}} {{jobData.zipCode}}</td>
        <td @click.prevent="goToJobDetails">
          {{jobData.timeWindow}}
        </td>
        <td @click.prevent="goToJobDetails">{{jobData.price}}</td>
        <td @click.prevent="goToJobDetails">{{jobData.yardSize}}</td>
      <td>
        <button class="btn btn-success btn-sm" @click="startJob()">Start Job</button>
      </td>
    </tr>
  </tbody>-->
</template>


<script>
export default {
  name: "ProviderScheduledJobs",
  props: ["jobData"],
  data() {
    return {
      coords: {}
    };
  },
  mounted() {
    this.getCurrentLocation();
  },
  computed: {},
  methods: {
    startJob() {
      this.jobData.jobStatus = "active";
      this.$store.dispatch("editJob", this.jobData);
    },
    goToJobDetails() {
      this.$store.commit("setActiveJob", this.jobData);
      this.$router.push({
        name: "JobDetails",
        params: { jobId: this.jobData._id }
      });
    },
    getCurrentLocation() {
      navigator.geolocation.getCurrentPosition(a => {
        this.coords = a.coords;
      });
    },
  },
  components: {}
};
</script>


<style scoped>
p {
  margin: 0;
}
a {
  color: blue;
}
</style>
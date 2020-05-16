<template>
  <div class="card">
    <div class="card-header bg-info">
      <p class="text-white p-0 m-0 display-6">
        <strong>{{jobData.contactName}}</strong>
      </p>
    </div>
    <div class="card-body">
      <p>{{jobData.streetAddress}}, {{jobData.city}}, {{jobData.state}} {{jobData.zipCode}}</p>
      <p>{{jobData.timeWindow}}</p>
      <p>${{jobData.price}}</p>
      <p>{{jobData.yardSize}}</p>
    </div>
    <button class="btn btn-success btn-sm mx-2 my-1" @click="startJob()">Start Job</button>
    <button class="btn btn-danger btn-sm mx-2 my-1" @click="goToJobDetails()">View Job Details</button>
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
    return {};
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
    }
  },
  components: {}
};
</script>


<style scoped>
</style>
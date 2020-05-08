<template>
  <tbody class="ProviderScheduledJobs" @click.prevent="goToJobDetails">
    <tr>
      <td
        scope="row"
      >{{jobData.streetAddress}} {{jobData.city}}, {{jobData.state}} {{jobData.zipCode}}</td>
      <td>
        <button class="btn btn-success" @click="startJob()">Start Job</button>
      </td>
      <td>{{jobData.price}}</td>
      <td>{{jobData.yardSize}}</td>
    </tr>
  </tbody>
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
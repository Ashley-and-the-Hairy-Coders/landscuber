<template>
  <tbody class="ProviderScheduledJobs">
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
<template>
  <tbody class="ProvActiveJob" @click.prevent="goToJobDetails">
    <tr>
      <td
        scope="row"
      >{{jobData.streetAddress}} {{jobData.city}}, {{jobData.state}} {{jobData.zipCode}}</td>
      <td>
        <button class="btn btn-success" @click="completedJob()">Job Completed</button>
      </td>
      <td>{{jobData.price}}</td>
      <td>{{jobData.yardSize}}</td>
    </tr>
  </tbody>
</template>


<script>
export default {
  name: "ProvActiveJob",
  props: ["jobData"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    completedJob() {
      if (confirm("Are you sure you want to mark this job complete?")) {
        this.jobData.jobStatus = "completed";
        this.$store.dispatch("editJob", this.jobData);
      }
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
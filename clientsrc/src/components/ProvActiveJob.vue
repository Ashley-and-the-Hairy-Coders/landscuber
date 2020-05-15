<template>
  <tbody class="ProvActiveJob">
    <tr>
      <td
        @click.prevent="goToJobDetails"
        scope="row"
      >{{jobData.streetAddress}} {{jobData.city}}, {{jobData.state}} {{jobData.zipCode}}</td>
      <td @click.prevent="goToJobDetails">{{jobData.timeWindow}}</td>
      <td @click.prevent="goToJobDetails">{{jobData.price}}</td>
      <td @click.prevent="goToJobDetails">{{jobData.yardSize}}</td>
      <td>
        <button class="btn btn-success btn-sm" @click="completedJob()">Job Completed</button>
      </td>
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
      this.$swal.fire({
        title: "Are you sure?",
        text: "Confirm only when the job is finished!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#85CF4B",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, complete it!"
      }).then(result => {
        if (result.value) {
          this.$swal.fire("Completed!", "Your job has been completed.", "success");
          this.jobData.jobStatus = "completed";
          this.$store.dispatch("editJob", this.jobData);
        }
      });
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
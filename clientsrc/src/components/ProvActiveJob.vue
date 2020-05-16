<template>
  <div class="col-md-3 my-2">
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
      <button class="btn btn-success btn-sm m-1" @click="completedJob()">Job Completed</button>
      <button class="btn btn-danger btn-sm m-1" @click="goToJobDetails()">View Job Details</button>
    </div>
  </div>
  <!-- <tbody class="ProvActiveJob">
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
  </tbody>-->
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
      this.$swal
        .fire({
          title: "Are you sure?",
          text: "Confirm only when the job is finished!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#85CF4B",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, complete it!"
        })
        .then(result => {
          if (result.value) {
            this.$swal.fire(
              "Completed!",
              "Your job has been completed.",
              "success"
            );
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
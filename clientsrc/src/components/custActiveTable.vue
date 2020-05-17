
<template>
  <div class="col-md-3 m-2">
    <div class="card">
      <div class="card-header bg-info">
        <p class="text-white p-0 m-0 display-6">
          <strong>{{jobData.contactName}}</strong>
        </p>
      </div>
      <div class="card-body text-capitalize text-danger text-left">
        <p><strong>Addr: </strong>{{jobData.streetAddress}}, {{jobData.city}}, {{jobData.state}} {{jobData.zipCode}}</p>
        <p><strong>Date: </strong>{{jobData.timeWindow}}</p>
        <p><strong>Price: </strong>${{jobData.price}}</p>
        <p><strong>Yard Size: </strong>{{jobData.yardSize}}</p>

        <div class="progress mt-2">
          <div
            class="progress-bar progress-bar-striped bg-success text-info font-weight-bold text-uppercase"
            role="progressbar"
            :style="{width: status}"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >{{jobData.jobStatus}}</div>
        </div>
      </div>
      <button
        class="btn btn-success btn-sm mx-1 mb-1"
        @click="editJob(jobData)"
        data-toggle="modal"
        data-target="#editJobModal"
        v-if="jobData.jobStatus == 'posted'"
      >Edit Job</button>
      <button class="btn btn-danger btn-sm mx-1 my-1" @click="goToJobDetails()">View Job Details</button>
    </div>
    <Modal title="Edit Job" id="editJobModal" class="text-center">
      <EditJob :job="jobData"></EditJob>
    </Modal>
  </div>

  <!-- <tbody class="custActiveTable" >
    <tr>
      <td @click.prevent="goToJobDetails()" scope="row" class="pb-1">
        {{jobData.streetAddress}} {{jobData.city}}, {{jobData.state}} {{jobData.zipCode}}
      </td>
      <td @click.prevent="goToJobDetails()" class="pb-1">{{jobData.timeWindow}}</td>
      <td @click.prevent="goToJobDetails()" class="pb-1">{{jobData.price}}</td>
      <td @click.prevent="goToJobDetails()" class="pb-1">{{jobData.yardSize}}</td>
      <td><button
          data-toggle="modal"
          data-target="#editJobModal"
          class="btn btn-block btn-success"
          @click="editJob(jobData)"
          v-if="jobData.jobStatus == 'posted'"
        >Edit</button></td>
    </tr>
    <tr scope="row ">
      <td colspan="5" class="pt-0 mt-0">
        <div class="progress bg-">
          <div
            class="progress-bar progress-bar-striped bg-success text-capitalize"
            role="progressbar"
            :style="{width: status}"
          >{{jobData.jobStatus}}</div>
        </div>
      </td>
    </tr>

  </tbody>-->
</template>


<script>
import Modal from "../components/Modal";
import EditJob from "../components/EditJob";
export default {
  name: "custActiveTable",
  props: ["jobData"],
  data() {
    return {};
  },
  computed: {
    status() {
      if (this.jobData.jobStatus == "posted") {
        return "30%";
      }
      if (this.jobData.jobStatus == "accepted") {
        return "60%";
      }
      if (this.jobData.jobStatus == "active") {
        return "90%";
      }
      if (this.jobData.jobStatus == "scheduled") {
        return "60%";
      }
      return "0%";
    }
  },
  mounted() {},
  methods: {
    editJob() {
      this.$store.commit("setActiveJob", this.jobData);
    },
    goToJobDetails() {
      this.$store.commit("setActiveJob", this.jobData);
      this.$router.push({
        name: "JobDetails",
        params: { jobId: this.jobData._id }
      });
    }
  },
  components: {
    Modal,
    EditJob
  }
};
</script>


<style scoped>
p{
  margin: 0;
}
</style>

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

      <div class="progress">
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
    <button class="btn btn-danger btn-sm mx-2 my-1" @click="goToJobDetails()">View Job Details</button>
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
    <Modal title="Edit Job" id="editJobModal" class="text-center">
      <EditJob :job="jobData"></EditJob>
    </Modal>
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
        return "25%";
      }
      if (this.jobData.jobStatus == "accepted") {
        return "40%";
      }
      if (this.jobData.jobStatus == "active") {
        return "75%";
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
@media only screen and (max-width: 760px),
  (min-device-width: 768px) and (max-device-width: 1024px) {
  /* Force table to not be like tables anymore */
  table,
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
  }

  tr {
    border: 1px solid #ccc;
  }

  td {
    /* Behave  like a "row" */
    border: none;
    border-bottom: 1px solid #eee;
    position: relative;
    padding-left: 25%;
  }

  td:before {
    /* Now like a table header */
    position: absolute;
    /* Top/left values mimic padding */
    top: 12px;
    left: 6px;
    width: 75%;
    padding-right: 10px;
    white-space: nowrap;
  }
  td:nth-of-type(1):before {
    content: "Address:";
  }
  td:nth-of-type(2):before {
    content: "Date:";
  }
  td:nth-of-type(3):before {
    content: "\0024";
  }
  td:nth-of-type(4):before {
    content: "Size:";
  }
}
</style>
<template>
  <!-- SECTION Customer Dashboard Header (Welcome user, display "Book now" button) -->
  <div class="customerDashboard container-fluid bg-secondary">
    <div class="row mb-3">
      <div class="col-12 text-center text-info">
        <h2
          v-if="profile.customerProfile.firstName"
        >Welcome back, {{profile.customerProfile.firstName}}!</h2>
      </div>
    </div>
    <div class="row text-center">
      <div class="col-10 mx-auto col-md-3">
        <button
          data-toggle="modal"
          data-target="#createJobModal"
          class="btn btn-success btn-block"
        >Request Lawn Service</button>
        <Modal title="Request Lawn Service" id="createJobModal">
          <CreateJob></CreateJob>
        </Modal>
      </div>
    </div>
    <!-- !SECTION End header -->
    <!-- SECTION Table displaying active jobs for customer -->
    <div class="col-12 text-center mt-3">
      <h3 class="text-info">Active Jobs</h3>
    </div>
    <div class="row justify-content-center text-center mx-5 mt-3 p-1">
      <div class="card-deck">
        <custActiveTable v-for="Job in incompleteJobs" :jobData="Job" :key="Job._id"></custActiveTable>
      </div>
    </div>
    <!-- !SECTION End active jobs -->
    <!-- SECTION Begin job history -->
    <div class="col-12 text-center mt-3">
      <h3 class="text-info">Job History</h3>
    </div>
    <div class="row justify-content-center text-center mx-5 mt-3 p-1">
      <div class="card-deck">
        <custCompleteTable v-for="Job in completeJobs" :jobData="Job" :key="Job._id"></custCompleteTable>
      </div>
    </div>
    <modal title="Leave Feedback!" id="jobRatingModal">
      <JobRating></JobRating>
    </modal>
    <!-- !SECTION End job history -->
  </div>
  <!-- <div class="custDashboard container-fluid">
    <div class="row my-3">
      <div class="col-12 text-center text-success">
        <h2
          v-if="profile.customerProfile.firstName"
        >Welcome back, {{profile.customerProfile.firstName}}!</h2>
      </div>
    </div>
    <div class="row text-center">
      <div class="col-12 col-md-6">
        <button
          data-toggle="modal"
          data-target="#createJobModal"
          class="btn btn-sm btn-success"
        >Request Lawn Service</button>

        <Modal title="Request Lawn Service" id="createJobModal">
          <CreateJob></CreateJob>
        </Modal>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-12 col-md-10">
        <h5 class="text-center mt-5 text-info">Current Jobs</h5>
        <UtilTable>
          <custActiveTable
            v-for="Job in incompleteJobs"
            :jobData="Job"
            :key="Job._id"
            class="table-row"
          ></custActiveTable>
        </UtilTable>
      </div>

      <div class="col-12 col-md-10">
        <h5 class="text-center mt-5 text-info">Job History</h5>
        <UtilTable>
          <custCompleteTable
            v-for="Job in completeJobs"
            :jobData="Job"
            :key="Job._id"
            class="table-row"
          ></custCompleteTable>
        </UtilTable>
      </div>
      <modal title="Leave Feedback!" id="jobRatingModal">
        <JobRating></JobRating>
      </modal>
    </div>
  </div>-->
</template>


<script>
import custCompleteTable from "../components/custCompleteTable";
import Modal from "../components/Modal";
import CreateJob from "../components/CreateJob";
import custActiveTable from "../components/custActiveTable";
import UtilTable from "../components/UtilTable";
import JobRating from "../components/JobRating";
export default {
  name: "custDashboard",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getAllJobs");
    this.$store.dispatch("joinRoom", "jobs");
  },
  beforeDestroy() {
    this.$store.dispatch("leaveRoom", "jobs");
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    completeJobs() {
      return this.$store.getters.customerCompletedJobs;
    },
    incompleteJobs() {
      return this.$store.getters.customerIncompleteJobs;
    }
  },
  methods: {},
  components: {
    Modal,
    CreateJob,
    UtilTable,
    custActiveTable,
    custCompleteTable,
    JobRating
  }
};
</script>


<style scoped>
.card {
  width: 240px;
  height: 20rem;
}
.table-row {
  background-color: #e0dfd5;
}
.table-row:not(:last-of-type) {
  border-bottom: 1px solid #6c7579;
}
</style>
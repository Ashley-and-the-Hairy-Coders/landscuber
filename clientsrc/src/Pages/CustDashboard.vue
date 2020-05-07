<template>
  <div class="custDashboard container-fluid">
    <div class="row my-3">
      <div class="col-12 text-center text-success">
        <h2
          v-if="profile.customerProfile.firstName"
        >Welcome back, {{profile.customerProfile.firstName}}!</h2>
      </div>
    </div>
    <div class="row text-center">
      <div class="col-12 col-md-6">
        <!-- <h1>There are {{NumOfProvidersAvail}} active in your area!</h1> -->
      </div>
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
      <div class="col-10">
        <UtilTable>
          <custActiveTable v-for="Job in incompleteJobs" :jobData="Job" :key="Job._id"></custActiveTable>
        </UtilTable>
      </div>

      <div class="col-10">
        <h3 class="text-center mt-5 text-success">Completed Jobs</h3>
        <UtilTable>
          <custCompleteTable v-for="Job in completeJobs" :jobData="Job" :key="Job._id"></custCompleteTable>
        </UtilTable>
      </div>
    </div>
  </div>
</template>


<script>
import custCompleteTable from "../components/custCompleteTable";
import Modal from "../components/Modal";
import CreateJob from "../components/CreateJob";
import custActiveTable from "../components/custActiveTable";
import UtilTable from "../components/UtilTable";
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
    custCompleteTable
  }
};
</script>


<style scoped>
</style>
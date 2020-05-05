<template>
  <div class="custDashboard container-fluid">
    <div class="row my-3">
      <div class="col-12 text-center text-success">
        <h2>Welcome back, {{profile.customerProfile.firstName}}!</h2>
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
      <div class="col-8">
        <UtilTable>
          <custActiveTable v-for="Job in customerJobs" :jobData="Job" :key="Job._id"></custActiveTable>
        </UtilTable>
<<<<<<< HEAD
        <div class="progress">
          <div
            class="progress-bar progress-bar-striped bg-success"
            role="progressbar"
            style="width: 25%"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
=======
>>>>>>> 41d3f57d39a3ad61b272d091af45440bb6afb239
      </div>
    </div>
  </div>
</template>


<script>
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
    this.$store.dispatch("getCustomerJobs", this.$route.params.customerId);
  },
  computed: {
    customerJobs() {
      return this.$store.state.customerJobs;
    },
    profile() {
      return this.$store.state.profile;
    }
  },
  methods: {},
  components: {
    Modal,
    CreateJob,
    UtilTable,
    custActiveTable
  }
};
</script>


<style scoped>
</style>
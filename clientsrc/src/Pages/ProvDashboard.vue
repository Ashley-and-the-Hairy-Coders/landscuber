<template>
  <div class="providerDashboard container-fluid bg-secondary">
    <!-- SECTION Provider dashboard header, greeting and Available Now toggle. -->
    <div class="row mb-3 py-3">
      <div class="col-12 text-center text-info">
        <h2
          v-if="profile.providerProfile.firstName"
        >Welcome back, {{profile.providerProfile.firstName}}!</h2>
      </div>
    </div>
    <div class="row py-md-3">
      <div class="col-10 pr-1">
        <h4 class="text-right text-info">I AM AVAILABLE</h4>
      </div>
      <div class="col-2 m-md-auto pl-0">
        <label class="switch pl-0">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
      </div>
    </div>
    <!-- !SECTION End header -->
    <!-- SECTION Begin provider active job display -->
    <div class="col-12 text-center mt-3">
      <h3 class="text-info">Active Jobs</h3>
    </div>
    <div class="row justify-content-center text-center mx-3 mt-3 p-1">
      <ProvActiveJob v-for="job in activeJobs" :jobData="job" :key="job._id"></ProvActiveJob>
    </div>
    <!-- !SECTION -->
    <!-- SECTION Begin provider accepted/scheduled jobs display -->

    <div class="col-12 text-center mt-3">
      <h3 class="text-info">Accepted Jobs</h3>
    </div>
    <div class="row justify-content-center text-center mx-3 mt-3 p-1">
      <ProvSchedJob v-for="job in acceptedJobs" :jobData="job" :key="job._id"></ProvSchedJob>
    </div>

    <!-- !SECTION -->
    <!-- SECTION Begin provider posted/available jobs display -->

    <div class="col-12 text-center mt-3">
      <h3 class="text-info">Posted Jobs</h3>
    </div>
    <div class="row justify-content-center text-center mx-3 mt-3 p-1">
      <ProviderPostedTable v-for="job in postedJobs" :jobData="job" :key="job._id"></ProviderPostedTable>
    </div>

    <!-- !SECTION -->
  </div>
  <!-- <div class="provdashboard bg-warning">
    <div class="container-fluid m-0 text-center">
      <div class="row py-5">
        <div class="col-11">
          <h4 class="text-right text-info">I AM AVAILABLE</h4>
        </div>
        <div class="m-auto">
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
      </div>
      <div class="row">
        <div class="col-10 mx-auto pt-3 text-info">
          <h5>My Active Jobs</h5>
          <UtilTable>
            <ProvActiveJob
              v-for="job in activeJobs"
              :jobData="job"
              :key="job._id"
              class="table-row"
            ></ProvActiveJob>
          </UtilTable>
        </div>
      </div>
      <div class="row">
        <div class="col-10 mx-auto pt-3 text-info">
          <h5>My Scheduled Jobs</h5>
          <UtilTable>
            <ProvSchedJob
              v-for="job in acceptedJobs"
              :jobData="job"
              :key="job._id"
              class="table-row"
            ></ProvSchedJob>
          </UtilTable>
        </div>
      </div>
      <div class="row">
        <div class="col-10 mx-auto pt-3 text-info">
          <h5>Available Jobs</h5>

          <UtilTable>
            <ProviderPostedTable
              v-for="job in postedJobs"
              :jobData="job"
              :key="job._id"
              class="table-row"
            ></ProviderPostedTable>
          </UtilTable>
        </div>
      </div>
    </div>
  </div>-->
</template>


<script>
import UtilTable from "../components/UtilTable";
import ProviderPostedTable from "../components/ProviderPostedTable";
import ProvSchedJob from "../components/ProvSchedJob";
import ProvActiveJob from "../components/ProvActiveJob";
export default {
  name: "provDashboard",
  data() {
    return {
      available: false
    };
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
    postedJobs() {
      return this.$store.getters.postedJobs;
    },
    acceptedJobs() {
      return this.$store.getters.acceptedJobs;
    },
    activeJobs() {
      return this.$store.getters.activeJobs;
    },
    completedJobs() {
      return this.$store.getters.completedJobs;
    }
  },
  methods: {
    // getPostedJobs() {
    //   this.$store.dispatch("getPostedJobs");
    // }
  },
  components: {
    UtilTable,
    ProviderPostedTable,
    ProvSchedJob,
    ProvActiveJob
  }
};
</script>


<style scoped>
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #85cf4b;
}

input:focus + .slider {
  box-shadow: 0 0 1px #85cf4b;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
.table-row {
  background-color: #e8e9eb;
}
.table-row:not(:last-of-type) {
  border-bottom: 1px solid #6c7579;
}
</style>
<template>
  <div class="provdashboard bg-warning bg-h">
    <div class="container-fluid m-0 text-center">
      <div class="row py-5">
        <div class="col-11">
          <h4 class="text-right">I AM AVAILABLE</h4>
        </div>
        <div class="m-auto">
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
      </div>
      <div class="row">
        <div class="col-12 pt-3 text-success">
          <h5>My Active Jobs</h5>
        </div>
        <!-- NOTE Insert ACTIVE jobs table -->
        <!-- <UtilTable></UtilTable> -->
      </div>
      <div class="row">
        <div class="col-12 pt-3 text-success">
          <h5>My Scheduled Jobs</h5>
        </div>
        <!-- NOTE Insert SCHEDULED jobs table -->
        <!-- <UtilTable></UtilTable> -->
      </div>
      <div class="row">
        <div class="col-12 pt-3 text-success">
          <h5>Available Jobs</h5>
        </div>
        <!-- NOTE Insert AVAILABLE jobs table -->
        <!-- <UtilTable></UtilTable> -->
      </div>
    </div>
  </div>
</template>


<script>
// import UtilTable from "../components/UtilTable"
export default {
  name: "provDashboard",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {
    // UtilTable
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

.bg-h {
  height: 100vh;
}
</style>
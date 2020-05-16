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

        <div class="progress">
          <div
            class="progress-bar progress-bar-striped bg-success text-info font-weight-bold w-100 text-uppercase"
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >{{jobData.jobStatus}}</div>
        </div>
        <button
          @click="setJobForRating()"
          class="btn btn-success btn-sm m-1 mt-3"
          data-toggle="modal"
          data-target="#jobRatingModal"
        >Leave feedback!</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "custCompleteTable",
  props: ["jobData"],
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {
    saveRating() {
      console.log("you clicked the button");
    },
    setJobForRating() {
      this.$store.commit("setJobToBeRated", this.jobData);
    }
  },
  components: {}
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

  /* Hide table headers (but not display: none;, for accessibility) */
  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
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
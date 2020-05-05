
<template>
  <tbody class="custActiveTable">
    <tr>
      <td scope="row" type="button" @click="editJob()">{{jobData.streetAddress}}</td>
      <td>ASAP</td>
      <td>{{jobData.price}}</td>
      <td>{{jobData.yardSize}}</td>
    </tr>
    <tr scope="row">
      <td colspan="4">
        <div class="progress">
          <div
            class="progress-bar progress-bar-striped bg-success text-capitalize"
            role="progressbar"
            id="jobProgress"
          >{{jobData.jobStatus}}</div>
        </div>
      </td>
    </tr>
  </tbody>
</template>


<script>
export default {
  name: "custActiveTable",
  props: ["jobData"],
  data() {
    return {};
  },
  computed: {},
  mounted() {
    status();
  },
  methods: {
    editJob() {
      console.log("Assuming we want the job editable...");
    },
    status() {
      if (jobData.jobStatus == "posted") {
        document
          .getElementById("jobProgress")
          .setAttribute("style", "width: 25%");
      } else if (jobData.jobStatus == "accepted") {
        document
          .getElementById("jobProgress")
          .setAttribute("style", "width: 50%");
      } else if (jobData.jobStatus == "active") {
        document
          .getElementById("jobProgress")
          .setAttribute("style", "width: 75%");
      } else {
        document
          .getElementById("jobProgress")
          .setAttribute("style", "width: 100%");
      }
    }
  },
  components: {}
};
</script>


<style scoped>
</style>
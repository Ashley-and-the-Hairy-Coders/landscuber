
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
            :style="{width: status}"
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
  computed: {
    status() {
      if (this.jobData.jobStatus == "posted") {
        return "25%";
      }
      if (this.jobData.jobStatus == "accepted") {
        return "50%";
      }
      if (this.jobData.jobStatus == "active") {
        return "75%";
      }
      if (this.jobData.jobStatus == "completed") {
        return "100%";
      }
      return "0%";
    }
  },
  mounted() {},
  methods: {
    editJob() {
      console.log("Assuming we want the job editable...");
    }
  },
  components: {}
};
</script>


<style scoped>
</style>
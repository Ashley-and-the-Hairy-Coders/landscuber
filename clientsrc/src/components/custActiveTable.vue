
<template>
  <tbody class="custActiveTable">
    <tr>
      <td scope="row" class="pb-1" type="button" @click="editJob()">{{jobData.streetAddress}}</td>
      <td class="pb-1">ASAP</td>
      <td class="pb-1">{{jobData.price}}</td>
      <td class="pb-1">{{jobData.yardSize}}</td>
    </tr>
    <tr scope="row ">
      <td colspan="4" class="pt-0 mt-0">
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
      console.log("Assuming we want the job editable...");
    }
  },
  components: {}
};
</script>


<style scoped>
</style>
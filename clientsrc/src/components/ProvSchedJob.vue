<template>
  <tbody class="ProviderScheduledJobs">
    <tr>
      <td
        scope="row"
      >{{jobData.streetAddress}} {{jobData.city}}, {{jobData.state}} {{jobData.zipCode}}</td>
      <td>
        <button class="btn btn-success" @click="startJob()">Start Job</button>
      </td>
      <td>{{jobData.price}}</td>
      <td>{{jobData.yardSize}}</td>
    </tr>
  </tbody>
</template>


<script>
export default {
  name: "ProviderScheduledJobs",
  props: ["jobData"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    startJob() {
      debugger;
      this.jobData.jobStatus = "active";
      this.$store.dispatch("editJobStatus", this.jobData);
      // this.$store.getters.postedJobs;
    }
  },
  components: {}
};
</script>


<style scoped>
</style>
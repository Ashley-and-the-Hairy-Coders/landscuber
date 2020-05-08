<template>
  <tbody class="providerPostedTable">
    <tr>
      <td
        scope="row"
      >{{jobData.streetAddress}} {{jobData.city}}, {{jobData.state}} {{jobData.zipCode}}</td>
      <td>
        {{jobData.timeWindow}}
      </td>
      <td>{{jobData.price}}</td>
      <td>{{jobData.yardSize}}</td>
      <td>
        <button class="btn btn-success btn-sm" @click="acceptJob()">Accept</button>
      </td>
    </tr>
  </tbody>
</template>


<script>
export default {
  name: "providerPostedTable",
  props: ["jobData"],
  data() {
    return {};
  },
  computed: {
    provider() {
      return this.$store.state.profile.providerProfile;
    }
  },
  methods: {
    acceptJob() {
      this.jobData.jobStatus = "accepted";
      this.$store.dispatch("acceptJob", this.jobData);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>
<template>
  <tbody class="providerPostedTable">
    <tr>
      <td scope="row">{{jobData.streetAddress}}  {{jobData.city}}, {{jobData.state}} {{jobData.zipCode}}</td>
      <td>
        <button class="btn btn-success" @click="AcceptJob()">Accept</button>
      </td>
      <td>{{jobData.price}}</td>
      <td>{{jobData.yardSize}}</td>
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
    provider(){
      return this.$store.state.profile.providerProfile
    }
  },
  methods: {
    AcceptJob() {
      this.$store.dispatch("AcceptJob", this.jobData)
      
    }
  },
  components: {}
};
</script>


<style scoped>
</style>
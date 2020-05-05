
<template>
  <tr class="custActiveTable">
    <td scope="row" type="button" @click="editJob()">{{jobData.streetAddress}}</td>
    <td>ASAP</td>
    <td>{{jobData.price}}</td>
    <td>{{jobData.yardSize}}</td>
  </tr>
</template>


<script>
export default {
  name: "custActiveTable",
  props: ["jobData"],
  data() {
    return {};
  },
  computed: {},
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
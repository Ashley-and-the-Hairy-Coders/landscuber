<template>
  <tbody class="custCompleteTable">
    <tr>
      <td scope="row">{{jobData.streetAddress}}</td>
      <td>ASAP</td>
      <td>{{jobData.price}}</td>
      <td>{{jobData.yardSize}}</td>
    </tr>
  </tbody>
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
    // editJob() {
    //   console.log("Assuming we want the job editable...");
    // }
  },
  components: {}
};
</script>


<style scoped>
</style>
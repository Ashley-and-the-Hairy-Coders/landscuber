<template>
  <tbody class="custCompleteTable">
    <tr>
      <td scope="row">{{jobData.streetAddress}}</td>
      <td>{{jobData.timeWindow}}</td>
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
  },
  components: {}
};
</script>


<style scoped>
</style>
<template>
  <tbody class="providerPostedTable">
    <tr>
      <td scope="row">{{jobData.streetAddress}}</td>
      <td>
        <button class="btn btn-success">Accept</button>
      </td>
      <td>{{jobData.price}}</td>
      <td>{{jobData.yardSize}}</td>
    </tr>
  </tbody>
</template>


<script>
export default {
  name: "component",
  props: ["jobData"],
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>
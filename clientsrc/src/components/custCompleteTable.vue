<template>
  <tbody class="custCompleteTable">
    <tr>
      <td scope="row">{{jobData.streetAddress}}</td>
      <td>ASAP</td>
      <td>{{jobData.price}}</td>
      <td>{{jobData.yardSize}}</td>
      <button class="btn btn-success"
        data-toggle="modal"
        data-target="#jobRatingModal">Leave feedback!
      </button>
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
    saveRating() {
      console.log("you clicked the button");
    }
  },
  components: {}
};
</script>


<style scoped>
</style>
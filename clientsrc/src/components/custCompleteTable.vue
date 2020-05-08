<template>
  <tbody class="custCompleteTable">
    <tr>
      <td scope="row">{{jobData.streetAddress}}</td>
      <td>{{jobData.timeWindow}}</td>
      <td>{{jobData.price}}</td>
      <td>{{jobData.yardSize}}</td>
      <button @click="setJobForRating()" class="btn btn-success"
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
    },
    setJobForRating() {
      this.$store.commit("setRating", this.jobData)
    }
  },
  components: {}
};
</script>


<style scoped>
</style>
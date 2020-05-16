<template>
  <tbody class="custCompleteTable">
    <tr>
      <td
        scope="row"
      >{{jobData.streetAddress}} {{jobData.city}}, {{jobData.state}} {{jobData.zipCode}}</td>
      <td>{{jobData.timeWindow}}</td>
      <td>{{jobData.price}}</td>
      <td>{{jobData.yardSize}}</td>
      <td>
        <button
          @click="setJobForRating()"
          class="btn btn-block btn-success"
          data-toggle="modal"
          data-target="#jobRatingModal"
        >Leave feedback!</button>
      </td>
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
      this.$store.commit("setJobToBeRated", this.jobData);
    }
  },
  components: {}
};
</script>


<style scoped>
@media 
only screen and (max-width: 760px),
(min-device-width: 768px) and (max-device-width: 1024px)  {

	/* Force table to not be like tables anymore */
	table, thead, tbody, th, td, tr { 
		display: block; 
	}
	
	/* Hide table headers (but not display: none;, for accessibility) */
	thead tr { 
		position: absolute;
		top: -9999px;
		left: -9999px;
	}
	
	tr { border: 1px solid #ccc; }
	
	td { 
		/* Behave  like a "row" */
		border: none;
		border-bottom: 1px solid #eee; 
		position: relative;
		padding-left: 25%; 
	}
	
	td:before { 
		/* Now like a table header */
		position: absolute;
		/* Top/left values mimic padding */
		top: 12px;
		left: 6px;
		width: 75%; 
		padding-right: 10px; 
		white-space: nowrap;
  }
  td:nth-of-type(1):before { content: "Address:"; }
	td:nth-of-type(2):before { content: "Date:"; }
	td:nth-of-type(3):before { content: "\0024"; }
	td:nth-of-type(4):before { content: "Size:"; }
}
</style>
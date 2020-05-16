<template>
  <div class="UtilTable">
    <table class="table table-borderless text-info bg-secondary">
      <thead>
        <tr>
          <th scope="col" width="35%">Address</th>
          <th scope="col" width="15%">Date and Time</th>
          <th scope="col" width="15%">Price</th>
          <th scope="col" width="20%">Yard Size</th>
          <th scope="col" width="15%"></th>
        </tr>
      </thead>

      <slot></slot>
    </table>
  </div>
</template>


<script>
export default {
  name: "UtilTable",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {
  }
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
		display: none;
	}
	
	tr { border: 1px solid #ccc; }
	
	td { 
		/* Behave  like a "row" */
		border: none;
		border-bottom: 1px solid #eee; 
		position: relative;
		/* padding-left: 50%;  */
	}
	
	td:before { 
		/* Now like a table header */
		position: absolute;
		/* Top/left values mimic padding */
		top: 6px;
		left: 6px;
		width: 90%; 
		padding-right: 10px; 
		white-space: nowrap;
  }
}
</style>
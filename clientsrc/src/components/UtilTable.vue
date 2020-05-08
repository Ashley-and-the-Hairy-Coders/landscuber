<template>
  <div class="UtilTable">
    <table class="table table-borderless text-info">
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
// import custActiveTable from "../components/custActiveTable.vue"
// import custPrevTable from "../components/custPrevTable.vue"
export default {
  name: "UtilTable",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {
    // 'PendingJobs': custActiveTable,
    // 'PrevJobs': custPrevTable,
  }
};
</script>


<style scoped>
</style>
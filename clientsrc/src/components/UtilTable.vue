<template>
  <div class="UtilTable">
    <table class="table table-borderless text-info">
      <thead>
        <tr>
          <th scope="col" class="col-4">Address</th>
          <th scope="col" class="col-2">Date and Time</th>
          <th scope="col" class="col-2">Price</th>
          <th scope="col" class="col-4">Yard Size</th>
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
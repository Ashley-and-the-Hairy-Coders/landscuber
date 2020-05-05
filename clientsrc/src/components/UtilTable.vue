<template>
  <div class="UtilTable">
    <table class="table table-borderless text-success">
      <thead>
        <tr>
          <th scope="col">Address</th>
          <th scope="col">Date and Time</th>
          <th scope="col">Pice</th>
          <th scope="col">Yard Size</th>
        </tr>
      </thead>
      <tbody>
        <slot></slot>
      </tbody>
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
  computed:{},
  methods:{},
  components:{
    // 'PendingJobs': custActiveTable,
    // 'PrevJobs': custPrevTable,
  }
};
</script>


<style scoped>
</style>
<template>
  <div class="custDashboard container-fluid">
<div class="row text-center">
  <div class="col-12 col-md-6">
    <h1>There are {{NumOfProvidersAvail}} active in your area!</h1>
  </div>
  <div class="col-12 col-md-6 ">
        <button
          type="submit"
          @click.prevent="postJob()"
          class="btn btn-sm btn-success"
        >Request Lawn Service</button>
  </div>
</div>

  </div>
</template>


<script>
export default {
  name: 'custDashboard',
  data(){
    return {}
  },
  computed:{},
  methods:{},
  components:{}
}
</script>


<style scoped>

</style>
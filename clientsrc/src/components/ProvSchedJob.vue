<template>
  <tbody class="ProviderScheduledJobs">
    <tr>
      <td scope="row">{{jobData.streetAddress}}</td>
      <td>
        <button class="btn btn-success" @click="ActiveJob()">Start Job</button>
      </td>
      <td>{{jobData.price}}</td>
      <td>{{jobData.yardSize}}</td>
    </tr>
  </tbody>
</template>


<script>
export default {
  name: "ProviderScheduledJobs",
  props: ["jobData"],
  data(){
    return {}
  },
  computed:{},
  methods:{
    ActiveJob() {

    }
  },
  components:{}
}
</script>


<style scoped>

</style>
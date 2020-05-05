
<template>
  <div class="custActiveTable">
    <p>hello, world!</p>
    <tr>
      <th scope="row" type="button" @click="editJob()">{{jobData.address}}</th>
      <td>ASAP</td>
      <td>{{jobData.price}}</td>
      <td>{{jobData.yardSize}}</td>
    </tr>
  </div>
</template>


<script>
export default {
  name: 'custActiveTable',
  props: ["jobData"],
  data(){
    return {}
  },
  mounted(){
    console.log('mounted!')
  },
  computed:{},
  methods:{
    editJob(){
      console.log("Assuming we want the job editable...");
    }
  },
  components:{}
}
</script>


<style scoped>

</style>
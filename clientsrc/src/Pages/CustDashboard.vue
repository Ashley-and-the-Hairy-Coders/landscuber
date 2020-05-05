<template>
  <div class="custDashboard container-fluid">
<div class="row text-center">
  <div class="col-12 col-md-6">
    <h1>There are {{NumOfProvidersAvail}} active in your area!</h1>
  </div>
  <div class="col-12 col-md-6 ">
        <button
          data-toggle="modal"
          data-target="#createJobModal"
          class="btn btn-sm btn-success"
        >Request Lawn Service</button> 
        
        <Modal title="Request Lawn Service" id="createJobModal">
          <CreateJob></CreateJob>
        </Modal>
<UtilModal>
  <custActiveTable></custActiveTable>
</UtilModal>

  </div>
</div>

  </div>
</template>


<script>
import Modal from "../components/Modal"
import CreateJob from "../components/CreateJob"
import UtilTable from "../components/UtilTable"
export default {
  name: 'custDashboard',
  data(){
    return {}
  },
  computed:{},
  methods:{},
  components:{
    Modal,
    CreateJob,
    UtilTable
  }
}
</script>


<style scoped>

</style>
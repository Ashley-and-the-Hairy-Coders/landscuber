<template>
  <div class="CustomerReg">
    <div class="createNote">
    <form>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="First Name"
          v-model="newCustomer.firstName"
        />
      </div>
      <button
        type="submit"
        data-dismiss="modal"
        @click="Register()"
        class="btn btn-sm btn-dark"
      >Register Now</button>
    </form>
  </div>

  </div>
</template>


<script>
export default {
  name: 'CustomerReg',
  data(){
    return {
      newCustomer: {

      }
    }
  },
  computed:{},
  methods:{},
  components:{}
}
</script>


<style scoped>

</style>
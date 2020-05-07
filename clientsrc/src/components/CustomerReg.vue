<template>
  <form class="CustomerReg">
    <div class="input-group">
      <input
        type="text"
        class="form-control w-75 m-2"
        placeholder="First Name"
        v-model="newCustomer.firstName"
        required
      />
    </div>
    <div class="input-group">
      <input
        type="text"
        class="form-control m-2"
        placeholder="Last Name"
        v-model="newCustomer.lastName"
        required
      />
    </div>
    <input
      class="form-control w-25 mx-auto m-2"
      maxlength="5"
      placeholder="Zip Code"
      v-model="newCustomer.location"
      required
      type="number"
    />
    <button
      type="submit"
      data-dismiss="modal"
      @click.prevent="registerCustomer()"
      class="btn btn-sm btn-success"
    >Register Now</button>
  </form>
</template>


<script>
export default {
  name: "CustomerReg",
  data() {
    return {
      newCustomer: {}
    };
  },
  computed: {},
  methods: {
    registerCustomer() {
      this.$store.dispatch("registerCustomer", this.newCustomer);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>
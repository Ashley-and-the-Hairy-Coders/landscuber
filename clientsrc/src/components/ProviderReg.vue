<template>
  <form class="ProviderReg">
    <div class="input-group">
      <input
        type="text"
        class="form-control w-75 m-2"
        placeholder="First Name"
        v-model="newProvider.firstName"
        required
      />
    </div>
    <div class="input-group">
      <input
        type="text"
        class="form-control m-2"
        placeholder="Last Name"
        v-model="newProvider.lastName"
        required
      />
    </div>
    <input
      class="form-control w-50 mx-auto m-2"
      maxlength="12"
      placeholder="555-123-4567"
      v-model="newProvider.phone"
      required
      type="text"
    />
    <input
      class="form-control w-25 mx-auto m-2"
      maxlength="5"
      placeholder="Zip Code"
      v-model="newProvider.location"
      required
      type="number"
    />
    <button
      type="submit"
      data-dismiss="modal"
      @click.prevent="registerProvider()"
      class="btn btn-sm btn-success"
    >Register Now</button>
  </form>
</template>


<script>
export default {
  name: "ProviderReg",
  data() {
    return {
      newProvider: {}
    };
  },
  computed: {},
  methods: {
    registerProvider() {
      console.log(this.newProvider);
      this.$store.dispatch("registerProvider", this.newProvider);
    }
  },
  components: {}
};
</script>


<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type=number] {
    -moz-appearance:textfield; /* Firefox */
}
</style>

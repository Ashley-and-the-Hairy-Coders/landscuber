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
            inputmode="numeric" pattern="^(?(^00000(|-0000))|(\d{5}(|-\d{4})))$">
        <button
          type="submit"
          data-dismiss="modal"
          @click.prevent="registerCust()"
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
    registerCust() {
       this.$store.dispatch('registerCust', this.newCustomer)
      console.log(this.newCustomer);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>
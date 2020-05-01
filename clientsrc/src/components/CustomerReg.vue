<template>
  <div class="CustomerReg">
    <div class="createNote">
      <form>
        <div class="form-group">
          <input
            type="text"
            class="form-group m-2"
            placeholder="First Name"
            v-model="newCustomer.firstName"
            required
          />
          <input
            type="text"
            class="form-group m-2"
            placeholder="Last Name"
            v-model="newCustomer.lastName"
            required
          />
          <input
            class="form-group"
            maxlength="5"
            placeholder="Zip Code"
            v-model="newCustomer.location"
            required
            inputmode="numeric" pattern="^(?(^00000(|-0000))|(\d{5}(|-\d{4})))$">
        </div>
        <button
          type="submit"
          data-dismiss="modal"
          @click.prevent="registerCust()"
          class="btn btn-sm btn-success"
        >Register Now</button>
      </form>
    </div>
  </div>
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
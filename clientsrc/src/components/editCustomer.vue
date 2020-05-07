<template>
  <div class="editCustomer">
    <form>
      <div class="form-group">
        <input
          type="text"
          class="form-control w-75 m-2"
          placeholder="First Name"
          v-model="Customer.firstName"
          required
        />
        <input
          type="text"
          class="form-control w-75 m-2"
          placeholder="Last Name"
          v-model="Customer.lastName"
          required
        />
        <input
          type="text"
          class="form-control w-75 m-2"
          placeholder="Cell Phone"
          v-model="Customer.cellPhone"
          required
        />
        <h6 class="mt-5">Addresses</h6>

        <div v-for="Address in Addresses" :key="Address._id" class="mb-4">
          <input
            type="text"
            class="form-control w-75 m-2"
            placeholder="Contact Name"
            v-model="Address.contactName"
            required
          />
          <input
            type="text"
            class="form-control w-75 m-2"
            placeholder="Street Address"
            v-model="Address.streetAddress"
            required
          />
          <input
            type="text"
            class="form-control w-75 m-2"
            placeholder="City"
            v-model="Address.city"
            required
          />
          <input
            type="text"
            class="form-control w-75 m-2"
            placeholder="State"
            v-model="Address.state"
            required
          />
          <input
            type="text"
            class="form-control w-75 m-2"
            placeholder="Zip"
            v-model="Address.zipCode"
            required
          />

          <div class="d-flex ml-3">
            <div class="align-self-center">Yard Size: {{Address.yardSize}}</div>
            <div class="dropdown">
              <button
                class="btn ml-2 btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Change Size</button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" @click.prevent="setYard('small')">Small &#8804; 5,000 sqft</a>
                <a
                  class="dropdown-item"
                  @click.prevent="setYard('medium')"
                >Medium - 10,000 sqft - 5,001 sqft</a>
                <a
                  class="dropdown-item"
                  @click.prevent="setYard('large')"
                >Large - 1/2 Acre - 10,000 sqft</a>
                <a
                  class="dropdown-item"
                  @click.prevent="setYard('x-large')"
                >Extra Large &#8805; 1/2 Acre</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        type="submit"
        @click.prevent="editCustomer"
        class="btn btn-success btn-small"
        data-dismiss="modal"
      >Submit</button>
    </form>
  </div>
</template>


<script>
export default {
  name: "editCustomer",
  props: ["customer"],
  data() {
    return {
      editedCustomer: {}
      // newAddress: {
      //   primary: false
      // },
      // newJob: {
      //   jobStatus: "posted"
      // },
      // save: false,
      // yard: "Select Size"
      // // job: {}
    };
  },
  mounted() {},
  computed: {
    Customer() {
      return this.$store.state.profile.customerProfile;
    },
    Addresses() {
      if (this.$store.state.profile.customerProfile) {
        return this.$store.state.profile.customerProfile.addresses;
      }
      return [];
    }
  },
  methods: {
    setYard(size) {
      this.yard = size;
      this.job.yardSize = size;
    },
    editCustomer() {
      console.log("need to dispatch update to the store", this.Customer);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>
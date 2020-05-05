<template>
  <div class="CreateJob">
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >Saved Addresses</button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" @click.prevent="newAddress = Address" v-for="Address in Addresses" :key="Address._id" href="#">{{Address.contactName}}</a>
      </div>
    </div>
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >Yard Size</button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" @click.prevent="setYard('Small')" >Small &#8804; 5,000 sqft</a>
        <a class="dropdown-item" @click.prevent="setYard('Medium')" >Medium - 10,000 sqft - 5,001 sqft</a>
        <a class="dropdown-item" @click.prevent="setYard('Large')" >Large - 1/2 Acre - 10,000 sqft </a>
        <a class="dropdown-item" @click.prevent="setYard('X-Large')" >Extra Large &#8805; 1/2 Acre</a>
      </div>
    </div>
    <form>
      
      <div class="form-group">
        <small id="helpId" class="text-muted">Setup Address</small>
        <input
          required
          type="text"
          v-model="newAddress.contactName"
          class="form-control"
          placeholder="Contact Name" 
          aria-describedby="helpId"
        />
        <input
          required
          type="text"
          v-model="newAddress.streetAddress"
          class="form-control"
          placeholder="Street Address"
          aria-describedby="helpId"
        />
        <input
          required
          type="text"
          v-model="newAddress.city"
          class="form-control"
          placeholder="City"
          aria-describedby="helpId"
        />
        <input
          required
          type="text"
          v-model="newAddress.state"
          class="form-control"
          placeholder="State"
          aria-describedby="helpId"
        />
        <input
          type="text"
          v-model="newAddress.zipCode"
          class="form-control"
          placeholder="Zip Code"
          required
          aria-describedby="helpId"
        />
        <p class="text-muted">Name your price! {{newJob.price}}</p>
        <input
          required
          type="range"
          v-model="newJob.price"
          step="1"
          min="20"
          max="200"
          class="form-control custom-range"
          placeholder="25"
          aria-describedby="helpId"
        />
      </div>

      <div class="custom-control m-1 custom-checkbox">
        <input type="checkbox" @click="save = !save" class="custom-control-input" id="customCheck1" />
        <label class="custom-control-label" for="customCheck1">Save This Address</label>
      </div>

      <button type="submit" @click.prevent="createJob" class="btn btn-success btn-small">Scübe!</button>
    </form>
  </div>
</template>


<script>
export default {
  name: "CreateJob",
  data() {
    return {
      newAddress: {
        primary: false
      },
      newJob: {
        jobStatus: "Posted"
      },
      save: false
    };
  },
  computed: {
    Customer() {
      return this.$store.state.profile.customerProfile;
    },
    Addresses() {
      return this.$store.state.profile.customerProfile.addresses;
    }
  },
  methods: {
    setYard(size) {
      this.newAddress.yardSize = size
    },
    createJob() {
      if (this.save) {
        this.$store.dispatch('saveAddress', this.newAddress)
      }
      let job = Object.assign(this.newJob, this.newAddress)
      job.customerId = this.Customer._id
      console.log(job, this.save)
      this.$store.dispatch('createJob', job)
      this.newAddress = {}
      this.newJob = {}
    }
  },
  components: {}
};
</script>


<style scoped>
</style>
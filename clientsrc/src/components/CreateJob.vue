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
        <a
          class="dropdown-item"
          @click.prevent="newAddress = Address"
          v-for="Address in Addresses"
          :key="Address._id"
          href="#"
        >{{Address.contactName}}</a>
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
        <a class="dropdown-item" @click.prevent="setYard('small')">Small &#8804; 5,000 sqft</a>
        <a
          class="dropdown-item"
          @click.prevent="setYard('medium')"
        >Medium - 10,000 sqft - 5,001 sqft</a>
        <a class="dropdown-item" @click.prevent="setYard('large')">Large - 1/2 Acre - 10,000 sqft</a>
        <a class="dropdown-item" @click.prevent="setYard('x-large')">Extra Large &#8805; 1/2 Acre</a>
      </div>
    </div>
    <p>{{yard}}</p>
    <div class="custom-control m-1 custom-checkbox">
      <input type="checkbox" @click="scheduleToday" class="custom-control-input" id="customCheck2" />
      <label class="custom-control-label" for="customCheck2">Schedule for Today</label>
    </div>
    <form v-if="!scheduled">
      <div class="form-group">
        <small id="helpId" class="text-muted">Schedule a Time</small>
        <input type="date" required v-model="newJob.timeWindow" class="form-control" />
      </div>
    </form>
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
        <p class="text-muted">Name your price! ${{newJob.price}}</p>
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

      <button
        type="submit"
        @click.prevent="createJob"
        class="btn btn-success btn-small"
        data-dismiss="modal"
      >Post</button>
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
        jobStatus: "posted",
        timeWindow: ""
      },
      save: false,
      yard: "Select Size",
      scheduled: false
    };
  },
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
    scheduleToday() {
      if (this.scheduled == false) {
        this.scheduled = true;
      } else if (this.scheduled == true) {
        this.scheduled = false;
      }
      let dateObj = new Date();
      let month = dateObj.getMonth() + 1;
      if (month < 10) {
        month = "0" + month.toString();
      }
      let day = dateObj.getDate();
      if (day < 10) {
        day = "0" + day.toString();
      }
      let year = dateObj.getFullYear();
      let newDate = year + "-" + month + "-" + day;
      this.newJob.timeWindow = newDate;
    },
    setYard(size) {
      this.yard = size;
      this.newAddress.yardSize = size;
    },
    createJob() {
      if (!this.newJob.price) {
        this.newJob.price = window.prompt("A price is required", 50);
      }
      if (this.save) {
        this.$store.dispatch("saveAddress", this.newAddress);
      }
      let job = Object.assign(this.newJob, this.newAddress);
      job.customerId = this.Customer.id;
      this.$store.dispatch("createJob", job);
      this.newAddress = {};
      this.newJob = {};
    }
  },
  components: {}
};
</script>


<style scoped>
</style>
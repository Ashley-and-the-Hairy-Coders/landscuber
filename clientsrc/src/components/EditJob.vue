<template>
  <div class="EditJob">
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >Change Yard Size</button>
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
    <p>{{job.yardSize}}</p>
    <form>
      <div class="form-group">
        <small id="helpId" class="text-muted">Change Address</small>
        <input
          required
          type="text"
          v-model="job.contactName"
          class="form-control"
          placeholder="Contact Name"
          aria-describedby="helpId"
        />
        <input
          required
          type="text"
          v-model="job.streetAddress"
          class="form-control"
          placeholder="Street Address"
          aria-describedby="helpId"
        />
        <input
          required
          type="text"
          v-model="job.city"
          class="form-control"
          placeholder="City"
          aria-describedby="helpId"
        />
        <input
          required
          type="text"
          v-model="job.state"
          class="form-control"
          placeholder="State"
          aria-describedby="helpId"
        />
        <input
          type="text"
          v-model="job.zipCode"
          class="form-control"
          placeholder="Zip Code"
          required
          aria-describedby="helpId"
        />
        <p class="text-muted">Change your price! ${{job.price}}</p>
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

      <button
        type="submit"
        @click.prevent="editJob"
        class="btn btn-success btn-small"
        data-dismiss="modal"
      >Update Job</button>
    </form>
  </div>
</template>


<script>
export default {
  name: "EditJob",
  data() {
    return {
      newAddress: {
        primary: false
      },
      newJob: {
        jobStatus: "posted"
      },
      save: false,
      yard: "Select Size"
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
    },
    job() {
      return this.$store.state.activeJob;
    }
  },
  methods: {
    setYard(size) {
      this.yard = size;
      this.job.yardSize = size;
    },
    editJob() {
      if (this.job.jobStatus == "posted") {
        this.$store.dispatch("editJob", this.job)
      } else {
        console.log("Too late to edit because your job status is not posted");
      }
    }
  },
  components: {}
};
</script>

<style scoped>
</style>
<template>
  <div class="editProvider">
    <form>
      <div class="form-group">
        <input
          type="text"
          class="form-control w-75 m-2"
          placeholder="First Name"
          v-model="Provider.firstName"
          required
        />
        <input
          type="text"
          class="form-control w-75 m-2"
          placeholder="Last Name"
          v-model="Provider.lastName"
          required
        />
        <input
          type="text"
          class="form-control w-75 m-2"
          placeholder="Cell Phone"
          v-model="Provider.cellPhone"
          required
        />
        <h6 class="mt-5">Services</h6>

        <!-- <div v-for="Service in Services" :key="Service._id" class="mb-4"></div> -->
      </div>

      <button
        type="submit"
        @click.prevent="editProvider"
        class="btn btn-success btn-small"
        data-dismiss="modal"
      >Submit</button>
    </form>
  </div>
</template>


<script>
export default {
  name: "editProvider",
  props: ["provider"],
  data() {
    return {
      editedProvider: {}
    };
  },
  mounted() {},
  computed: {
    Provider() {
      return this.$store.state.profile.providerProfile;
    },
    // Services() {
    //   return this.$store.state.profile.providerProfile.services;
    // }
  },
  methods: {
    editProvider() {
      console.log("need to dispatch update to the store", this.Provider);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>
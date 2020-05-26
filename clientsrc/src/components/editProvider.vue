<template>
  <div class="editProvider">
    <form>
      <div class="form-group">
        <input
          type="text"
          class="form-control w-75 m-2"
          placeholder="First Name"
          v-model="provider.firstName"
          required
        />
        <input
          type="text"
          class="form-control w-75 m-2"
          placeholder="Last Name"
          v-model="provider.lastName"
          required
        />
        <input
          type="text"
          class="form-control w-75 m-2"
          placeholder="Cell Phone"
          v-model="provider.phone"
          required
        />
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
    }
  },
  methods: {
    editProvider() {
      this.$store.dispatch("editProvider", this.provider);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>
<template>
  <div class="col-md-3 my-2">
    <div class="card card-dashboard">
      <div class="card-header bg-info">
        <p class="text-white p-0 m-0 display-6">
          <strong>{{jobData.contactName}}</strong>
        </p>
      </div>
      <div class="card-body">
        <p>{{jobData.streetAddress}}, {{jobData.city}}, {{jobData.state}} {{jobData.zipCode}}</p>
        <p>{{jobData.timeWindow}}</p>
        <p>${{jobData.price}}</p>
        <p class="text-capitalize">{{jobData.yardSize}}</p>
      </div>
      <button class="btn btn-success btn-sm m-1" @click="acceptJob()">Accept</button>
    </div>
  </div>

  <!-- <tbody class="providerPostedTable">
    <tr>
      <td
        scope="row"
      >{{jobData.streetAddress}} {{jobData.city}}, {{jobData.state}} {{jobData.zipCode}}</td>
      <td>
        {{jobData.timeWindow}}
      </td>
      <td>{{jobData.price}}</td>
      <td>{{jobData.yardSize}}</td>
      <td>
        <button class="btn btn-success btn-sm" @click="acceptJob()">Accept</button>
      </td>
    </tr>
  </tbody>-->
</template>


<script>
export default {
  name: "providerPostedTable",
  props: ["jobData"],
  data() {
    return {};
  },
  computed: {
    provider() {
      return this.$store.state.profile.providerProfile;
    }
  },
  methods: {
    acceptJob() {
      this.$swal
        .fire({
          title: "Yes take this job?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#85CF4B",
          cancelButtonColor: "#d33",
          confirmButtonText: "Claim"
        })
        .then(result => {
          if (result.value) {
            this.$swal.fire(
              "It's all yours",
              "You've claimed this job",
              "success"
            );
            this.jobData.jobStatus = "accepted";
            this.$store.dispatch("acceptJob", this.jobData);
          }
        });
    }
  },
  components: {}
};
</script>


<style scoped>
.card {
  height: 18em;
}
</style>
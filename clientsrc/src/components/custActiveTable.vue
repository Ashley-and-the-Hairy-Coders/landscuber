
<template>
  <tbody class="custActiveTable">
    <tr>
      <td scope="row" class="pb-1">
        <button
          data-toggle="modal"
          data-target="#editJobModal"
          class="btn btn-sm btn-success"
          @click="editJob(jobData)"
          v-if="jobData.jobStatus == 'posted'"
        >edit</button>
        {{jobData.streetAddress}}
      </td>
      <td class="pb-1">ASAP</td>
      <td class="pb-1">{{jobData.price}}</td>
      <td class="pb-1">{{jobData.yardSize}}</td>
    </tr>
    <tr scope="row ">
      <td colspan="4" class="pt-0 mt-0">
        <div class="progress">
          <div
            class="progress-bar progress-bar-striped bg-success text-capitalize"
            role="progressbar"
            :style="{width: status}"
          >{{jobData.jobStatus}}</div>
        </div>
      </td>
    </tr>
    <Modal title="Edit Job" id="editJobModal" class="text-center">
      <EditJob :job="jobData"></EditJob>
    </Modal>
  </tbody>
</template>


<script>
import Modal from "../components/Modal";
import EditJob from "../components/EditJob";
export default {
  name: "custActiveTable",
  props: ["jobData"],
  data() {
    return {};
  },
  computed: {
    status() {
      if (this.jobData.jobStatus == "posted") {
        return "25%";
      }
      if (this.jobData.jobStatus == "accepted") {
        return "40%";
      }
      if (this.jobData.jobStatus == "active") {
        return "75%";
      }
      if (this.jobData.jobStatus == "scheduled") {
        return "60%";
      }
      return "0%";
    }
  },
  mounted() {},
  methods: {
    editJob() {
      this.$store.commit('setActiveJob', this.jobData)
    }
  },
  components: {
    Modal,
    EditJob
  }
};
</script>


<style scoped>
</style>
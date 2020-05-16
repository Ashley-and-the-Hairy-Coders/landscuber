<template>
  <div class="job-details">
    <div class="container-fluid bg-home">
      <div class="row">
        <div class="col-12 pt-3">
          <h5>Customer Name: {{job.contactName}}</h5>
        </div>
      </div>
      <div class="row">
        <div class="col-12 pt-5 ml-5">
          <h5>Job Details:</h5>
        </div>
      </div>
      <div class="row pb-5 m-auto justify-content-center">
        <div class="col-12 col-md-2 m-2 pt-3 card">
          <p>Address:</p>
          <h6>{{job.streetAddress}}</h6>
          <h6>{{job.city}}, {{job.state}} {{job.zipCode}}</h6>
        </div>
        <div class="col-12 col-md-2 pt-3 m-2 card">
          <p>Date & Time:</p>
          <h6>{{job.timeWindow}}</h6>
          <!-- <h6>{{job.confirmedTime}} ||</h6> -->
        </div>
        <div class="col-12 col-md-2 pt-3 m-2 card">
          <p>Yard Size:</p>
          <h6>{{job.yardSize}}</h6>
        </div>
        <div class="col-12 col-md-2 pt-3 m-2 card">
          <p>Rate:</p>
          <h6>{{job.price}}</h6>
        </div>
      </div>
      <div class="row bg-blend"></div>
      <div class="row justify-content-center pt-5 bg-message">
        <div class="col-md-6">
          <h4 class="text-center">Message Center:</h4>
          <Message v-for="message in messages" :messageData="message" :key="message.id"></Message>
          <form action="submit" @submit.prevent="addMessage()">
            <div class="input-group">
              <input
                type="text"
                class="form-control form-control-sm"
                placeholder="Add comment..."
                v-model="newMessage.body"
              />
              <div class="input-group-append">
                <button class="btn btn-sm btn-success" type="submit">
                  <i class="fas fa-plus text-white"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Message from "../components/Message";
export default {
  name: "JobDetails",
  data() {
    return {
      newMessage: {}
    };
  },
  mounted() {
    this.$store.dispatch("getJob", this.$route.params.jobId);
    this.$store.dispatch("joinRoom", "messages");
  },
  beforeDestroy() {
    this.$store.dispatch("leaveRoom", "messages");
  },
  computed: {
    customerProfile() {
      if (!this.$store.state.profile.customerProfile) {
        return { id: "123" };
      } else {
        return this.$store.state.profile.customerProfile;
      }
    },
    providerProfile() {
      if (!this.$store.state.profile.providerProfile) {
        return { id: "123" };
      } else {
        return this.$store.state.profile.providerProfile;
      }
    },
    job() {
      return this.$store.state.activeJob;
    },
    messages() {
      return this.$store.state.activeJob.messages;
    }
  },
  methods: {
    addMessage() {
      if (this.job.customerId == this.customerProfile.id) {
        this.newMessage.customerId = this.customerProfile.id;
        this.newMessage.customerImg = this.customerProfile.picture;
        this.$store.dispatch("addMessage", this.newMessage);
        console.log(this.newMessage);
      } else if (this.job.providerId == this.providerProfile.id) {
        this.newMessage.providerId = this.providerProfile.id;
        this.newMessage.providerImg = this.providerProfile.picture;
        this.$store.dispatch("addMessage", this.newMessage);
        console.log(this.newMessage);
      }
      this.newMessage = {};
    }
  },
  components: {
    Message
  }
};
</script>


<style scoped>
.bg-home {
  background-color: #e8e9eb;
}
.bg-blend {
  background: rgb(232, 233, 235);
  background: linear-gradient(
    180deg,
    rgba(232, 233, 235, 1) 0%,
    rgba(224, 223, 213, 1) 38%
  );
  height: 80px;
}
.bg-message {
  background: rgba(224, 223, 213, 1);
  height: 50vh;
}
</style>
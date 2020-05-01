<template>
  <div class="home container-fluid bg-home">
    <!-- Top Home Row -->
    <div class="row top-row justify-content-center mb-0">
      <div class="col-12 col-md-8 col-lg-5 align-middle text-center my-auto">
        <button type="button" @click="landscaper = false" class="btn mx-2 btn-link">
          <strong>Hire a Landscüber</strong>
        </button>
        <button type="button" @click="landscaper = true" class="btn mx-2 btn-link">
          <strong>Find Clients</strong>
        </button>

        <div v-if="!landscaper">
          <h4 class="mx-5">We take the worry out of yard work!</h4>
          <form class="my-2">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Enter your zip to find a mower"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <div class="input-group-append">
                <button class="btn btn-outline-success" type="button" id="button-addon2">Search</button>
              </div>
            </div>
          </form>
        </div>

        <div v-if="landscaper">
          <h3 class="mx-5">Find new clients in your area!</h3>
          <!-- This btn takes user to the landscaper sign up -->
          <button type="button" class="btn mx-2 btn-sm btn-success">Get Started</button>
        </div>
      </div>

      <div class="col-8 col-lg-5 align-self-end text-center mt-2">
        <img class="img-fluid text-bottom mt-lg-5 mb-0 mx-auto" src="../assets/Home-Landscuber.png" />
      </div>
    </div>

    <!-- Customer/Partner Join Now Row -->
    <div class="row bg-home-mid justify-content-around bg-secondary py-5">
      <div class="col-12 col-md-8 col-lg-6 text-center py-4">
        <h4>When you need your lawn mowed today, Landscüber will get it done!</h4>
        <p>Name your price and immediately connect with local lawn care professionals.</p>
        <button
          class="btn btn-success"
          data-toggle="modal"
          data-target="#customerRegModal"
        >Join Now</button>
        <Modal title="Join Today!" id="customerRegModal">
          <CustomerReg></CustomerReg>
        </Modal>
      </div>
      <div class="col-12 col-md-8 col-lg-6 text-center py-4">
        <h4>Ready to get a job now? Join as a provider</h4>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex reprehenderit aut incidunt. Sapiente tenetur unde corrupti dolorum, placeat officiis praesentium, perferendis at, illum architecto aspernatur accusamus distinctio fugiat iste alias.</p>
        <button class="btn btn-success">Get Started</button>
      </div>
    </div>

    <!-- Customer Review Row -->
    <div class="row bg-home py-2">
      <div class="col-12 text-center">
        <h2 class="mb-5 my-md-5">What your neighbors are saying...</h2>
      </div>
      <div class="card col-lg-3 col-md-5 col-10 mx-auto shadow p-3 mb-5 bg-white rounded">
        <img
          src="../assets/lady.png"
          width="120"
          height="120"
          class="mx-auto mt-2 rounded-circle"
          alt="..."
        />
        <div class="card-body">
          <h6 class="card-text text-center">Boise, ID</h6>
          <div class="d-flex justified-content-center">
            <img src="../assets/5stars.png" height="25" class="mx-auto mb-2" alt="..." />
          </div>
          <p>We couldn't be happier with Landscüber! Our lawn was mowed the same day we scheduled the job and the landscaper was great. He was very professional and actually did a better job than my husband would do! haha! I'm very pleased and will be using Landscüber all summer long!</p>
        </div>
      </div>
      <div
        class="card col-lg-3 col-md-5 col-10 mx-auto shadow p-3 mb-5 bg-white rounded"
        style="width: 18rem;"
      >
        <img
          src="../assets/man.png"
          width="120"
          height="120"
          class="mx-auto mt-2 rounded-circle"
          alt="..."
        />
        <div class="card-body">
          <h6 class="card-text text-center">Meridian, ID</h6>
          <div class="d-flex justified-content-center">
            <img src="../assets/5stars.png" height="25" class="mx-auto mb-2" alt="..." />
          </div>
          <p>I had some deadlines at work that I had to meet and didn't have time to mow before our 4th of July party. I hired Landscüber in the morning and by the time I got home, the lawn was done and ready for the party! Thanks for keeping me out of the doghouse!</p>
        </div>
      </div>
      <div
        class="card col-lg-3 col-md-5 col-10 mx-auto shadow p-3 mb-5 bg-white rounded"
        style="width: 18rem;"
      >
        <img
          src="../assets/lady2.png"
          width="120"
          height="120"
          class="mx-auto mt-2 rounded-circle"
          alt="..."
        />
        <div class="card-body">
          <h6 class="card-text text-center">Nampa, ID</h6>
          <div class="d-flex justified-content-center">
            <img src="../assets/5stars.png" height="25" class="mx-auto mb-2" alt="..." />
          </div>
          <p>Our yard is too big for me to mow with my current mower. I scheduled a landscaper from Landscüber and the mowed our lawn in 1/2 the time it would have taken me! I'm so grateful! The yard looks great and now I have time to finish my gardening!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "../components/Modal"
import CustomerReg from "../components/CustomerReg"
export default {
  name: "home",
  data() {
    return {
      landscaper: false
    };
  },
  components: {
    Modal
  }
};
</script>


<style>
.bg-home {
  background-color: #e8e9eb;
}
.bg-home-mid {
  background: rgb(232, 233, 235);
  background: linear-gradient(
    0deg,
    rgba(232, 233, 235, 1) 0%,
    rgba(224, 223, 213, 1) 38%
  );
}
.btn-link:focus {
  color: #85cf4b;
}
</style>
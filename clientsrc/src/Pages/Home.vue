<template>
  <div class="home container-fluid bg-home">
    <div class="row">
      <div class="col-5 offset-1 align-middle text-center my-auto">
        <button
          type="button"
          @click="landscaper = false"
          class="btn mx-2 btn-sm btn-success"
        >Hire a Landscuber</button>
        <button
          type="button"
          @click="landscaper = true"
          class="btn mx-2 btn-sm btn-success"
        >Find Clients</button>

        <div v-if="!landscaper">
          <h4 class="mx-5">"We take the worry out of yard work!"</h4>
          <small class="mx-5 text-muted">-Dah Veeed</small>
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

      <div class="col-5 text-center my-2">
        <img class="img-fluid mx-auto" src="../assets/Home-Landscuber.png" />
      </div>
    </div>
    <div class="row bg-secondary py-5">
      <div class="col-5 text-center mx-auto">
        <h4>When you need your lawn mowed today, Landscüber will get it done!</h4>
        <h6>Name your price and immediately connect iwth local lawn care professionals.</h6>
        <button class="btn btn-success">Join Now</button>
      </div>
      <div class="col-5 text-center mx-auto">
        <h4>Ready to get a job now? Join as a provider</h4>
        <h6></h6>
        <button class="btn btn-success">Get Started</button>
      </div>
    </div>
    <div class="row bg-home py-5">
      <div class="col-12">
        <h2 class="mt-3 mb-5">What your neighbors are saying...</h2>
      </div>
      <div class="card col-3 mx-auto shadow p-3 mb-5 bg-white rounded">
        <img src="../assets/lady.png" width="120" height="120" class="mx-auto mt-2 rounded-circle" alt="..." />
        <div class="card-body">
          <h6 class="card-text text-center">Boise, ID</h6>
          <div class="d-flex justified-content-center">
          <img src="../assets/5stars.png" height="25" class="mx-auto mb-2" alt="..." />
          </div>
          <h6>We couldn't be happier with Landscüber! Our lawn was mowed the same day we scheduled the job and the landscaper was great.  He was very professional and actually did a better job than my husband would do! haha! I'm very pleased and will be using Landscüber all summer long!</h6>
        </div>
      </div>
      <div class="card col-3 mx-auto shadow p-3 mb-5 bg-white rounded" style="width: 18rem;">
        <img src="../assets/man.png" width="120" height="120" class="mx-auto mt-2 rounded-circle" alt="..." />
        <div class="card-body">
          <h6 class="card-text text-center">Meridian, ID</h6>
          <div class="d-flex justified-content-center">
          <img src="../assets/5stars.png" height="25" class="mx-auto mb-2" alt="..." />
          </div>
          <h5>I had some deadlines at work that I had to meet and didn't have time to mow before our 4th of July party.  I hired Landscüber in the morning and by the time I got home, the lawn was done and ready for the party!  Thanks for keeping me out of the doghouse!</h5>
        </div>
      </div>
      <div class="card col-3 mx-auto shadow p-3 mb-5 bg-white rounded" style="width: 18rem;">
        <img src="../assets/lady2.png" width="120" height="120" class="mx-auto mt-2 rounded-circle" alt="..." />
        <div class="card-body">
          <h6 class="card-text text-center">Nampa, ID</h6>
          <div class="d-flex justified-content-center">
          <img src="../assets/5stars.png" height="25" class="mx-auto mb-2" alt="..." />
          </div>
          <h5>Our yard is too big for me to mow with my current mower.  I scheduled a landscaper from Landscüber and the mowed our lawn in 1/2 the time it would have taken me!  I'm so grateful! The yard looks great and now I have time to finish my gardening!</h5>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      landscaper: false
    };
  }
};
</script>


<style>
.bg-home {
  background-color: #e8e9eb;
}
</style>
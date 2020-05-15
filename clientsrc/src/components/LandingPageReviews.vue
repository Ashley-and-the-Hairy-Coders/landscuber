<template>
  <div class="landingpagereviews">
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
export default {
  name: 'landingpagereviews',
  data(){
    return {}
  },
  computed:{},
  methods:{},
  components:{}
}
</script>


<style scoped>
.bg-home {
  background-color: #e8e9eb;
}
</style>
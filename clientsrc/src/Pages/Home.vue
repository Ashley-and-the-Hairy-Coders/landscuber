<template>
  <div class="home container-fluid bg-home">
    <div class="row">
      <div class="col-5 offset-1 align-middle text-center my-auto">
        <button type="button" @click="landscaper = false" class="btn mx-2 btn-sm btn-success">Hire a Landscuber</button>
        <button type="button" @click="landscaper = true" class="btn mx-2 btn-sm btn-success">Find Clients</button>
        
        <div v-if="!landscaper">
          <h4 class="mx-5">"We take the worry out of yard work!"</h4>
          <small class="mx-5 text-muted"> -Dah Veeed</small>
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
        <img class="img-fluid mx-auto" src="../assets/Home-Landscuber.png" >

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return  {
      landscaper : false
    }
  }
};
</script>


<style>
.bg-home {
  background-color: #e8e9eb;
}
</style>
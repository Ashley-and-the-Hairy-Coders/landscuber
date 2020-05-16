<template>
  <div class="JobRating">
    <div class="container">
      <h1 class="m-auto">How was your provider today?</h1>
      <div class="row">
        <form>
          <fieldset class="rating m-auto">
            <input @click="ProviderRating()" type="radio" id="star5" name="rating" value="5" />
            <label for="star5" title="Rocks!">5 stars</label>
            <input @click="ProviderRating()" type="radio" id="star4" name="rating" value="4" />
            <label for="star4" title="Pretty good">4 stars</label>
            <input @click="ProviderRating()" type="radio" id="star3" name="rating" value="3" />
            <label for="star3" title="Meh">3 stars</label>
            <input @click="ProviderRating()" type="radio" id="star2" name="rating" value="2" />
            <label for="star2" title="Kinda bad">2 stars</label>
            <input @click="ProviderRating()" type="radio" id="star1" name="rating" value="1" />
            <label for="star1" title="Sucks big time">1 star</label>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "JobRating",
  data() {
    return {};
  },
  computed: {
    jobToBeRated() {
      return this.$store.state.jobToBeRated;
    }
  },
  methods: {
    ProviderRating() {
      console.log(this.jobToBeRated);
      let rating = parseInt(event.target.value);
      console.log(rating);
      this.$store.dispatch("addRating", {
        jobId: this.jobToBeRated._id,
        providerId: this.jobToBeRated.providerId,
        providerRating: event.target.value
      });
    }
  },
  components: {}
};
</script>


<style scoped>
.rating {
  float: left;
}

/* :not(:checked) is a filter, so that browsers that don’t support :checked don’t 
   follow these rules. Every browser that supports :checked also supports :not(), so
   it doesn’t make the test unnecessarily selective */
.rating:not(:checked) > input {
  position: absolute;
  /* top: -9999px; */
  clip: rect(0, 0, 0, 0);
  height: 0;
  width: 0;
  overflow: hidden;
  opacity: 0;
}

.rating:not(:checked) > label {
  float: right;
  width: 1em;
  padding: 0 0.1em;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  font-size: 200%;
  line-height: 1.2;
  color: #ddd;
  text-shadow: 1px 1px #bbb, 2px 2px #666, 0.1em 0.1em 0.2em rgba(0, 0, 0, 0.5);
}

.rating:not(:checked) > label:before {
  content: "★ ";
}

.rating > input:checked ~ label {
  color: #f70;
  text-shadow: 1px 1px #c60, 2px 2px #940, 0.1em 0.1em 0.2em rgba(0, 0, 0, 0.5);
}

.rating:not(:checked) > label:hover,
.rating:not(:checked) > label:hover ~ label {
  color: gold;
  text-shadow: 1px 1px goldenrod, 2px 2px #b57340,
    0.1em 0.1em 0.2em rgba(0, 0, 0, 0.5);
}

.rating > input:checked + label:hover,
.rating > input:checked + label:hover ~ label,
.rating > input:checked ~ label:hover,
.rating > input:checked ~ label:hover ~ label,
.rating > label:hover ~ input:checked ~ label {
  color: #ea0;
  text-shadow: 1px 1px goldenrod, 2px 2px #b57340,
    0.1em 0.1em 0.2em rgba(0, 0, 0, 0.5);
}

.rating > label:active {
  position: relative;
  top: 2px;
  left: 2px;
}
</style>
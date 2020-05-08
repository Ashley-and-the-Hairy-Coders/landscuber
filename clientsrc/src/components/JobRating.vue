<template>
  <div class="JobRating">
    <h1>How was your provider today?</h1>
 <div class="container">
  <div class="row">
    <div class="col-lg-12">
      <div class="star-rating text-center">
        <span class="fa fa-star" data-rating="1"></span>
        <span class="fa fa-star" data-rating="2"></span>
        <span class="fa fa-star" data-rating="3"></span>
        <span class="fa fa-star" data-rating="4"></span>
        <span class="fa fa-star" data-rating="5"></span>
        <input type="hidden" name="whatever1" class="rating-value" value="2.56">
      </div>
    </div>
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
  computed: {},
  methods: {},
  components: {}
};

</script>


<style scoped>
.star-rating {
  line-height:32px;
  font-size:3em;
}

.star-rating .fa-star{color: yellow;}
</style>
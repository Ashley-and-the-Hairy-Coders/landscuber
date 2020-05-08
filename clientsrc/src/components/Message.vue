<template>
  <div class="Message d-flex align-items-center" :class="toggleAlign">
    <img v-if="messageData.customerImg" :src="messageData.customerImg" class="avatar img-fluid">
    <img v-if="messageData.providerImg" :src="messageData.providerImg" class="avatar img-fluid">
    <p class="mb-0 pl-1">{{messageData.body}}</p>
  </div>
</template>


<script>
export default {
  name: 'Message',
  props: ['messageData'],
  data(){
    return {}
  },
  computed:{
    toggleAlign() {
      if (this.messageData.providerId) {
        return "ml-auto"
      } else {
        return "mr-auto"
      }
    }
  },
  methods:{},
  components:{}
}
</script>


<style scoped>
.avatar {
  border: 1px solid black;
  border-radius: 50%;
  height: 2rem;
}
</style>
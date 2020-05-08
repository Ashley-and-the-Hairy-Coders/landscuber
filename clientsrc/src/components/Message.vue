<template>
  <div class="Message d-flex align-items-center" :class="toggleAlign">
    <img v-if="messageData.providerImg" :src="messageData.providerImg" class="avatar img-fluid">
    <p class="mb-0 px-1">{{messageData.body}}</p>
    <img v-if="messageData.customerImg" :src="messageData.customerImg" class="avatar img-fluid">
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
        return "justify-content-start"
      } else {
        return "justify-content-end"
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
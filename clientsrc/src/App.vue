<template>
  <div id="app" class="bg-secondary">
    <navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
import { onAuth } from "@bcwdev/auth0-vue";
export default {
  name: "App",
  async beforeCreate() {
    this.$store.dispatch("initializeSocket");
    await onAuth();
    if (this.$auth.isAuthenticated) {
      this.$store.dispatch("setBearer", this.$auth.bearer);
      this.$store.dispatch("getProfile");
    }
  },
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
#app {
  height: 125vh;
}
@import "./assets/_variables.scss";
@import "bootstrap";
@import "./assets/_overrides.scss";
</style>

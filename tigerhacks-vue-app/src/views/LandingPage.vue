<template>
  <md-list>
    <md-list-item>
      <md-icon>Hello?</md-icon>
      <span class="md-list-item-text">Inbox</span>
    </md-list-item>
  </md-list>
</template>

<script>
import VueMaterial from "vue-material";
import Vue from "vue";

Vue.use(VueMaterial);

export default {
  name: "LandingPage",
  data() {
    return {};
  },
  props: {}
};
</script>

<style>
</style>
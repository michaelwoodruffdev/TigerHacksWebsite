<template>
  <div class="prizes-tab">
      <heading text="Prizes"></heading>    
  </div>
</template>

<script>
import Heading from '../components/Heading.vue'

export default {
  name: "PrizesTab",
  components: {
    Heading
  }, 
  data() {
    return {};
  },
  methods: {},
  mounted() {
    this.$nextTick(() => {});
  }
};
</script>

<style scoped>
</style>
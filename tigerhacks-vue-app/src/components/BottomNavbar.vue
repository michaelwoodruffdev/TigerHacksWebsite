<template>
  <div class="bottom-navbar">
    <v-bottom-navigation :v-model="true" class="bottom-navbar" height="70">
      <v-btn v-for="link in links" :key="link.title">
        <span>{{ link.title }}</span>
        <v-icon>{{ link.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  name: "BottomNavbar",
  data() {
    return {
      links: [
        {
          icon: "mdi-help",
          title: "About"
        },
        {
          icon: "mdi-calendar",
          title: "Schedule"
        },
        {
          icon: "mdi-trophy",
          title: "Prizes"
        },
        {
          icon: "mdi-chat",
          title: "TigerTalks"
        },
        {
          icon: "mdi-star",
          title: "Sponsors"
        },
        {
          icon: "mdi-account",
          title: "Profile"
        }
      ]
    };
  }
};
</script>

<style scoped>
.bottom-navbar {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100vw;
  margin: 0;
  padding: 0;
  z-index: 3;
}
</style>
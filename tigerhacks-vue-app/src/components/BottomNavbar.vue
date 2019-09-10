<template>
  <div class="bottom-navbar">
    <v-bottom-navigation :v-model="true" class="bottom-navbar" height="10vh">
      <v-btn v-for="link in links" :key="link.title" @click="switchRoute(link.link)">
        <span>{{ link.title }}</span>
        <v-icon>{{ link.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  name: "BottomNavbar",
  methods: {
    switchRoute(link) {
      this.$router.push(link);
    }
  }, 
  data() {
    return {
      links: [
        {
          link: 'about', 
          icon: "mdi-help",
          title: "About"
        },
        {
          link: 'schedule', 
          icon: "mdi-calendar",
          title: "Schedule"
        },
        {
          link: 'prizes', 
          icon: "mdi-trophy",
          title: "Prizes"
        },
        {
          link: 'tigertalks', 
          icon: "mdi-chat",
          title: "TigerTalks"
        },
        {
          link: 'sponsors', 
          icon: "mdi-star",
          title: "Sponsors"
        },
        {
          link: 'profile', 
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
<template>
  <div class="dashboard-div">
    <a href="http://www.mlh.io" class="mlh-badge-link">
      <img src="../assets/mlh-trust-badge-2020-gray.svg" alt class="mlh-badge" />
    </a>

    <transition name="from-left">
      <side-navbar v-if="isDashboardOpen"></side-navbar>
    </transition>

    <transition name="fade">
      <landing-card v-if="!isDashboardOpen"></landing-card>
    </transition>

    <transition name="from-right">
      <bottom-navbar v-if="isDashboardOpen"></bottom-navbar>
    </transition>

    <v-btn @click="openDashboard()" class="palette-button" v-if="!isDashboardOpen">
      <v-icon>mdi-help</v-icon>
    </v-btn>

    <transition name="from-bottom">
      <div class="viewport" v-if="isDashboardOpen">
        <router-view></router-view>
      </div>
    </transition>
  </div>
</template>

<script>
import LandingCard from "../components/LandingCard.vue";
import SideNavbar from "../components/SideNavbar.vue";
import BottomNavbar from "../components/BottomNavbar.vue";

export default {
  name: "Dashboard",
  components: {
    LandingCard,
    SideNavbar,
    BottomNavbar
  },
  data() {
    return {
      isDashboardOpen: false,
      isMobile: false
    };
  },
  methods: {
    openDashboard() {
      this.isDashboardOpen = true;
    },
    closeDashboard() {
      this.isDashboardOpen = false;
    }
  }, 
  mounted() {
    // fetch('https://tigerhacks.com/api/schedule')
    //   .then(res => res.json())
    //   .then(res => {
    //     console.log(res);
    //   });
  }
};
</script>

<style>
</style>

<style scoped>
.dashboard-div {
  width: 100vw;
  height: 100vh;
  background: url("../assets/background-img.jpg");
  background-repeat: repeat;
}

.mlh-badge {
  height: 175px;
  position: fixed;
  top: 0;
  right: 30px;
  z-index: 3;
}

.palette-button {
  height: 200px;
  width: 200px;
  position: fixed;
  bottom: 0;
  right: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .7s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave {
  opacity: 1;
}

.from-left-enter-active, .from-right-enter-active {
  transition: transform .7s ease;
}

.from-left-enter {
  transform: translateX(-100px);
}

.from-right-enter {
  transform: translateX(100vw);
}

.from-left-enter-to, .from-right-enter-to {
  transform: translateX(0px);
}

.from-bottom-enter-active {
  transition: transform .7s ease .7s;
}

.from-bottom-enter {
  transform: translateY(100vh);
}

.from-bottom-enter-to {
  transform: translateY(0);
}

.viewport {
  padding: 40px 80px;
  background-color: #22222266;
  position: relative;
  z-index: 2;
  height: 90vh;
  overflow: scroll;
}
</style>

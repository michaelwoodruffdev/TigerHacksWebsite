<template>
  <div class="dashboard-div">
    <a href="http://www.mlh.io" class="mlh-badge-link">
      <img src="../assets/mlh-trust-badge-2020-gray.svg" alt class="mlh-badge" />
    </a>

    <!-- background image -->
    <img src="../assets/TigerHacksBackground.png" alt class="background-img" ref="backgroundImage" />
    <!-- <img src="../assets/background-img.jpg" alt class="background-img" ref="backgroundImage" /> -->
    <!-- side navbar -->
    <transition name="from-left">
      <side-navbar v-if="isDashboardOpen" class="side-nav"></side-navbar>
    </transition>

    <!-- landing card -->
    <transition name="fade">
      <landing-card v-if="!isDashboardOpen" @openDashboard="openDashboard()"></landing-card>
    </transition>

    <!-- bottom navbar -->
    <transition name="from-right">
      <bottom-navbar v-if="isDashboardOpen" @switchTheme="switchTheme()" class="bottom-nav"></bottom-navbar>
    </transition>

    <!-- viewport -->
    <transition name="from-bottom">
      <div v-if="isDashboardOpen" class="viewport" ref="viewport">
        <transition name="tab-slide" mode="out-in">
          <router-view ref="routerView"></router-view>
        </transition>
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
      this.$router.push("/about");
      this.isDashboardOpen = true;
    },
    closeDashboard() {
      this.isDashboardOpen = false;
    },
    switchTheme() {
      this.$emit("switchTheme");
    }
  },
  created() {
    // onVpScroll = (e) => {
    //   console.log(e);
    // }
  },
  mounted() {
    if (this.$route.path !== "/") this.isDashboardOpen = true;
    this.$nextTick(() => {
      // this.$refs.viewport.onscroll = () => {
      //   let scrollLocation =
      //     (this.$refs.viewport.scrollTop +
      //       this.$refs.viewport.offsetHeight / 2) /
      //     this.$refs.viewport.children[0].offsetHeight;
      //   this.$refs.backgroundImage.style.top = -(scrollLocation * 45) + "px";
      // };
    });
  }
};
</script>

<style>
@font-face {
  font-family: "outage";
  src: url("../assets/outage.ttf");
}

* {
  font-family: "outage" !important;
}
</style>

<style scoped>
.dashboard-div {
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/background-img.jpg");
  background-repeat: repeat;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.mlh-badge {
  height: 175px;
  position: fixed;
  top: 0;
  right: 30px;
  z-index: 9;
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
  transition: opacity 0.7s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0 !important;
}

.fade-enter-to,
.fade-leave {
  opacity: 1;
}

.from-left-enter-active,
.from-right-enter-active {
  transition: transform 0.7s ease;
}

.from-left-enter {
  transform: translateX(-100px);
}

.from-right-enter {
  transform: translateX(100vw);
}

.from-left-enter-to,
.from-right-enter-to {
  transform: translateX(0px);
}

.from-bottom-enter-active {
  transition: transform 0.7s ease 0.7s;
}

.from-bottom-enter {
  transform: translateY(100vh);
}

.from-bottom-enter-to {
  transform: translateY(0);
}

.tab-slide-enter-active,
.tab-slide-leave-active {
  transition: transform 0.15s ease-out, opacity 0.15s ease;
}

.tab-slide-enter,
.tab-slide-leave-to {
  transform: translateY(1vh);
  opacity: 0;
}

.tab-slide-enter-to,
.tab-slide-leave {
  transform: translateX(0);
  opacity: 1;
}

.tab-slide-leave-to {
  transform: translateY(1vh);
}

.viewport {
  padding: 40px 2.5vw;
  /* background-color: #22222266; */
  /* background-image: url('../assets/THBubbleBackground.png'); */
  background-size: 100%;
  position: fixed;
  top: 0;
  z-index: 8;
  height: 90vh;
  overflow: scroll;
}

.background-image {
  position: fixed;
  left: -10vw;
  top: -10vh;
  width: 130vw;
  min-width: 220vh;
  height: 130vh;
  pointer-events: none;
}

.background-img {
  position: fixed;
  width: 120vw;
  min-width: 800px;
  left: -5vw;
  top: -20vh;
}

.side-nav {
  display: none;
}

@media only screen and (max-width: 700px) {
  .viewport {
    height: 100vh;
  }

  .bottom-nav {
    display: none;
  }

  .side-nav {
    display: initial;
  }

  .mlh-badge {
    display: none;
  }
}
</style>

<template>
  <v-card class="text-center landing-card">
    <img src="../assets/tiger_big.png" alt />

    <h1><p style="color: orange;">Tiger</p><p>Hacks</p></h1>
    <!-- <v-card-title class="card-title justify-center">
      <span>Tiger</span>Hacks
    </v-card-title> -->

    <v-card-title class="justify-center">
        November 8-10 2019
    </v-card-title>

    <v-btn :large="true" color="#f79845" class="mt-6" height="60" @click="window.location.replace('https://tigerhacks.firebaseapp.com/signin')" block>Register</v-btn>
    <v-btn :large="true" color="#f79845" class="mt-6" height="60" @click="$emit('openDashboard')" block>Learn More</v-btn>

    <v-card-actions class="justify-center link-row mt-3">
      <v-btn @click="window.location.replace('mailto:muengrtigerhacks@missouri.edu')">
        <v-icon>mdi-email</v-icon>
      </v-btn>
      <v-btn @click="window.location.replace('https://twitter.com/tigerhackshd')">
        <v-icon>mdi-twitter</v-icon>
      </v-btn>
      <v-btn @click="window.location.replace('https://www.facebook.com/TigerHacks/')">
        <v-icon>mdi-facebook</v-icon>
      </v-btn>
      <v-btn @click="window.location.replace('https://www.instagram.com/tigerhacks/')">
        <v-icon>mdi-instagram</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "LandingCard"
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap");

.landing-card {
  margin: auto;
  /* margin-top: 3vh; */
  width: 80vw;
  max-width: 460px;
  padding: 30px;
  opacity: .95;
  position: relative;
  bottom: 0;
  transition: bottom 1s ease, max-width 1s ease, width 1s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.landing-card:hover {
  
}

.landing-card:hover {
    opacity: 1;
}

.landing-card > img {
  width: 80%;
}

h1 {
  font-size: 4rem;
  font-family: "Josefin Sans";
  text-align: center;
  width: 100%;
}

p {
  margin: 0 !important;
  padding: 0 !important;
  height: 4rem !important;
  font-size: 4rem;
}
/* h1 > span {
  color: orange;
} */
</style>
<template>
  <div class="dashboard-div">
    
    <v-card 
      class="text-center landing-card"
      dark="true">
      
      <img src="../assets/tiger_big.png" alt="">

      <v-card-title class="card-title justify-center"><span>Tiger</span>Hacks</v-card-title>
        
      <v-btn large="true" color="#f79845" class="mt-6" height="60">Register / Sign in</v-btn>

      <v-card-actions class="justify-center link-row mt-3">
          <v-btn>
            <v-icon>mdi-email</v-icon>
          </v-btn>
          <v-btn>
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
          <v-btn>
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn>
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
      </v-card-actions>
    </v-card>

  </div>
</template>

<script>

export default {
  name: 'Dashboard'
};
</script>

<style>

</style>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap');

.dashboard-div {
  width: 100vw;
  height: 100vh;
  background: url("../assets/background-img.jpg");
  background-repeat: repeat;
}

.landing-card {
  margin: auto;
  margin-top: 40px;
  width: 80vw;
  max-width: 460px;
  padding: 30px;
}

.landing-card > img {
  width: 80%;
}

.card-title {
  font-size: 4rem;
  font-family: 'Josefin Sans';
  text-align: center;
}

.card-title>span {
  color: orange;
}

</style>

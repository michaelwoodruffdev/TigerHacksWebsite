<template>
  <div class="sponsors-tab">
    <h1>Sponsors</h1>
    <v-card class="sponsor-section" v-for="(value, name) in sponsors" :key="name">
      <h2>{{ name }}</h2>
      <v-card
        v-for="sponsor in value"
        :key="sponsor.name"
        class="sponsor-card"
        width="76%"
        max-width="600px"
        elevation="10"
      >
        <img :src="sponsor.image" alt="sponsor-image" class="sponsor-image" width="100%" />
        <v-divider></v-divider>
        <v-card-title>{{ sponsor.name }}</v-card-title>
        <v-card-text>{{ sponsor.description }}</v-card-text>
      </v-card>
    </v-card>
  </div>
</template>

<script>
import mockSponsors from "../mockdata/sponsors";

export default {
  name: "SponsorsTab",
  data() {
    return {
      sponsors: {
        Gold: [],
        Silver: [],
        Bronze: []
      }
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.sponsors.Gold = mockSponsors.sponsors.filter(
        sponsor => sponsor.level === "Gold"
      );
      this.sponsors.Silver = mockSponsors.sponsors.filter(
        sponsor => sponsor.level === "Silver"
      );
      this.sponsors.Bronze = mockSponsors.sponsors.filter(
        sponsor => sponsor.level === "Bronze"
      );
      console.log('MOCKSPONSORS');
      console.log(mockSponsors);
      console.log('SPONSORS');
      console.log(this.sponsors);
    });
  }
};
</script>

<style scoped>
.sponsor-section {
  margin-top: 40px;
  display: flex;
  flex-direction: column; 
  align-items: center;
  background-color: white;
}

.sponsors-tab {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sponsor-card {
  padding: 20px;
  width: 90%;
  max-width: 600px;
  margin-bottom: 2rem;
  margin-top: 2rem;
  transition: width .4s ease;
}

.sponsor-card:hover {
  width: 80% !important;
  cursor: pointer;
}

.sponsor-image {
  width: 100%;
  padding: 40px;
  box-shadow: 0 0 30px 0 grey inset;
  background-color: white;
}

h2 {
  width: 100%;
  background-color: red;
  font-size: 5rem;
  padding-left: 40px;
}
</style>
<template>
  <div class="sponsors-tab">
    <h1>Sponsors</h1>

    <v-dialog v-model="dialog" width="600px">
      <template v-slot:activator="{ on }">
        <v-card :class="'sponsor-section ' + key" v-for="key in sortedKeyList" :key="key">
          <h2>{{ key }}</h2>
          <v-card
            v-for="sponsor in sponsors[key]"
            :key="sponsor.name"
            class="sponsor-card"
            width="76%"
            max-width="600px"
            elevation="10"
            @click="openSponsor(sponsor)"
            v-on="on"
          >
            <img :src="sponsor.image" alt="sponsor-image" class="sponsor-image" width="100%" />
            <v-divider></v-divider>
            <v-card-title>{{ sponsor.name }}</v-card-title>
            <v-card-text>{{ sponsor.description }}</v-card-text>
          </v-card>
        </v-card>

        <!-- <v-card class="sponsor-section-display-none" v-for="(value, name) in sponsors" :key="name">
          <h2>{{ name }}</h2>
          <v-card
            v-for="sponsor in value"
            :key="sponsor.name"
            class="sponsor-card"
            width="76%"
            max-width="600px"
            elevation="10"
            @click="openSponsor(sponsor)"
            v-on="on"
          >
            <img :src="sponsor.image" alt="sponsor-image" class="sponsor-image" width="100%" />
            <v-divider></v-divider>
            <v-card-title>{{ sponsor.name }}</v-card-title>
            <v-card-text>{{ sponsor.description }}</v-card-text>
          </v-card>
        </v-card>-->
      </template>
      <v-card>
        <img :src="selected.image" alt="sponsor-image" class="sponsor-image" width="100%" />
        <v-card-title>
          <h3>{{ selected.name }}</h3>
        </v-card-title>
        <v-card-text>{{ selected.description }}</v-card-text>
        
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="green darken-1" text @click="dialog = false">Agree</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- <v-card class="sponsor-section" v-for="(value, name) in sponsors" :key="name">
      <h2>{{ name }}</h2>
      <v-dialog v-model="dialog" width="600px" v-for="sponsor in value" :key="sponsor.name">
        <template v-slot:activator="{ on }">
          <v-card class="sponsor-card" width="76%" max-width="600px" elevation="10" v-on="on">
            <img :src="sponsor.image" alt="sponsor-image" class="sponsor-image" width="100%" />
            <v-divider></v-divider>
            <v-card-title>{{ sponsor.name }}</v-card-title>
            <v-card-text>{{ sponsor.description }}</v-card-text>
          </v-card>
        </template>
        <v-card height="60vh">
          <v-card-title>
            <h3>{{ sponsor.name }}</h3>
          </v-card-title>
          <v-card-text>{{ sponsor.description }}</v-card-text>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn color="green darken-1" text @click="dialog = false">Agree</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card>-->
  </div>
</template>

<script>
import mockSponsors from "../mockdata/sponsors";

export default {
  name: "SponsorsTab",
  data() {
    return {
      dialog: false,
      sponsors: {
        Platinum: [],
        Gold: [],
        Silver: [],
        Bronze: []
      },
      sortedKeyList: ["Platinum", "Gold", "Silver", "Bronze"],
      selected: {}
    };
  },
  methods: {
    openSponsor(sponsor) {
      this.selected = sponsor;
    }
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
      this.sponsors.Platinum = mockSponsors.sponsors.filter(
        sponsor => sponsor.level === "Platinum"
      );
      console.log("MOCKSPONSORS");
      console.log(mockSponsors);
      console.log("SPONSORS");
      console.log(this.sponsors);
    });
  }
};
</script>

<style scoped>
.sponsor-section {
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 0 0 20px 0 grey inset;
}

.sponsors-tab {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Josefin Sans";
}

h1 {
  font-size: 100px;
}

.sponsor-card {
  padding: 20px;
  width: 90%;
  max-width: 600px;
  margin-bottom: 2rem;
  margin-top: 2rem;
  transition: width 0.4s ease;
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
  /* text-decoration: underline; */
  font-weight: 400;
  box-shadow: 0 0 10px 0 #999999 inset;
}

.Platinum > h2 {
  background-image: linear-gradient(
    to bottom right,
    rgb(135, 196, 237),
    rgb(221, 242, 252)
  );
}

.Bronze > h2 {
  background-image: linear-gradient(
    to bottom right,
    rgb(160, 124, 39),
    rgb(77, 61, 10)
  );
}

.Gold > h2 {
  background-image: linear-gradient(
    to bottom right,
    rgb(236, 172, 44),
    rgb(240, 221, 221)
  );
}

.Silver > h2 {
  background-image: linear-gradient(
    to bottom right,
    rgb(190, 190, 190),
    rgb(252, 252, 252)
  );
}
</style>
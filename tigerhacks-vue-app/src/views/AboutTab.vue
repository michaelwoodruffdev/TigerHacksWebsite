<template>
  <div class="about-tab">
      <!-- <h1>About    <span>Tiger</span>Hacks</h1> -->
      <heading text="About TigerHacks"></heading>
    <v-card class="about-section" width="90vw" max-width="680px">
      <h2>What is TigerHacks?</h2>
      <v-divider></v-divider>
      <v-card-text>TigerHacks is a 36 hour hackathon hosted at the University of Missouri - Columbia. Hundreds of passionate students from around the midwest will gather together to use technology to rethink journalism and media. This weekend of collaboration will allow for programmers, designers, and people interested in learning technology to build something new, while also meeting great companies and making new memories. Whether you are a budding programmer cub or an experienced panther, we will see you at TigerHacks!</v-card-text>
    </v-card>
    <v-card class="about-section" width="90vw" max-width="680px">
      <h2>What is a hackathon?</h2>
      <v-divider></v-divider>
      <v-card-text>A hackathon does not involve breaking anything as the name would suggest. Participants (hackers) spend 36 hours working in teams to build or code projects (hacks) to solve a problem. Projects can take the form of websites, mobile apps, robots, or anything you can think of! All of the projects are judged, with the best teams receiving prizes. In the meantime, there are workshops, mentors, food, swag, and plenty of coffee to guide you.</v-card-text>
    </v-card>
    <v-card class="about-section" width="90vw" max-width="680px">
      <h2>Theme</h2>
      <v-divider></v-divider>
      <v-card-text>TigerHacks 2019 is themed around The Arts. Make an art related hack. I don't really know what that means, I'm just the guy making the website, but theoretically you can do some cool stuff. Maybe it's an app, maybe you do something with hardware. I think we can expect a lot of hardware hacks out of this year. I hope so.</v-card-text>
    </v-card>
  </div>
</template>

<script>
import Heading from '../components/Heading.vue';

export default {
  name: "AboutTab",
  data() {
    return {};
  },
  components: {
    Heading
  }, 
  methods: {},
  mounted() {}
};
</script>

<style scoped>
.about-section {
    box-shadow: 0 0 20px 0 grey inset;
    margin-bottom: 2rem;
    margin-top: .5rem;
    padding: 2rem;
    opacity: .8;
    transition: opacity .2s ease;
    width: 100vw;
    max-width: 800px;
}

.about-section:hover {
    opacity: 1;
}

h2 {
    color: orange;
}

.about-tab {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    width: 95vw;
    max-width: 800px;
    font-family: "Josefin Sans";
}

h1 {
    font-size: 5rem;
}

span {
    color: orange;
}
</style>
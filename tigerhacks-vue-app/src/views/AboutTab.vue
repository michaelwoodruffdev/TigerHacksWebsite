<template>
  <div class="about-tab">
    <!-- <h1>About    <span>Tiger</span>Hacks</h1> -->
    <!-- <heading text="About TigerHacks"></heading> -->
    <v-card
      tile
      class="about-section"
      v-for="qa in questionAnswers"
      width="100vw"
      max-width="680px"
      :key="qa.q"
      @click="qa.isOpen = !qa.isOpen"
    >
      <h2 class="q">{{qa.q}}</h2>
      <!-- <transition name="slide-open"> -->
        <div class="a-container" v-if="qa.isOpen">
          <v-card-text class="a">{{qa.a}}</v-card-text>
        </div>
      <!-- </transition> -->
    </v-card>
  </div>
</template>

<script>
import Heading from "../components/Heading.vue";

export default {
  name: "AboutTab",
  data() {
    return {
      questionAnswers: [
        {
          q: "What is TigerHacks?",
          a:
            "TigerHacks is a 36 hour hackathon hosted by the University of Missouri - Columbia. Over 300 students from around the country will come together to work on software (or hardware) projects throughout the weekend.",
          isOpen: false
        },
        {
          q: "When and where is TigerHacks?",
          a:
            "TigerHacks will start November 8th at 5:00 PM, and end November 10th at 2:00 PM. TigerHacks will take place on the University of Missouri's campus in Lafferre Hall. 416 S 6th St, Columbia, MO 65201",
          isOpen: false
        },
        {
          q: "What is the theme for TigerHacks?",
          a:
            "TigerHacks 2019 is themed around The Arts. Whether it's an app to help writers, or hardware for some instrument, hackers will have a chance to flex their creativity at this year's hackathon. We've tried to keep the theme general so we can expect a wide variety of interesting projects!",
          isOpen: false
        },
        {
          q: "Is TigerHacks competetive?",
          a:
            "Although there will be a panel of judges looking at the projects at the end of the weekend, TigerHacks will be an inviting space for any budding developers seeking a fun experience! There will be events that aren't based around software, food served to developers, and experts to help developers with their projects (see schedule for details). So whether you're new to development, or an elite hacker, come on down for an exciting weekend and valueable experience!",
          isOpen: false
        },
        {
          q: "What if I have more questions?",
          a:
            "Feel free to reach out and e-mail the MCA (Mizzou Computing Association) at muengrtigerhacks@missouri.edu",
          isOpen: false
        }
      ]
    };
  },
  components: {
    Heading
  },
  methods: {},
  mounted() {}
};
</script>

<style scoped>
.slide-open-enter-active,
.slide-open-leave-active {
  transition: height .2s ease;
}

.slide-open-enter,
.slide-open-leave-to {
  height: 0px !important;
}

.slide-open-enter-to,
.slide-open-leave {
  height: 150px !important;
}

.q {
  /* text-decoration: underline; */
  text-align: center;
}

.a {
  margin-top: 20px;
  font-size: 20px;
  background-color: #232323;
  overflow: scroll;
  font-family: 'Josefin Sans' !important;
  font-weight: 100;
}

.about-section {
  /* box-shadow: 0 0 20px 0 grey inset; */
  /* margin-bottom: 2rem; */
  /* margin-top: 0rem; */
  padding: 2rem;
  transition: background-color 0.2s ease;
  background-color: #343434;
  width: 100vw;
  max-width: 800px;
}

.about-section:hover {
  background-color: #434343;
}

h2 {
  color: rgb(247, 152, 69);
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
  color: rgb(247, 152, 69);
}
</style>
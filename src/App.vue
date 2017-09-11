<template>
  <div id="app">

            <div id="view">
                <keep-alive>
                    <component :is="currentView"></component>
                </keep-alive>
            </div>

<foot v-if="currentView != 'navigation'"></foot>

  </div>
</template>

<script>
import foot from './components/footer.vue';
import navigation from './components/nav/bignavbar.vue';
import cv from './components/cv/cv.vue';
import bio from "./components/bio.vue";
import pubs from './components/pubs/publications.vue';
import writing from './components/writing.vue';
import tech from "./components/tech.vue";
import contact from "./components/contact.vue";

export default {
  name: 'app',
  components: {
      bio,
      navigation,
      cv,
      pubs,
      writing,
      tech,
      contact,
      foot
  },
    computed: {
        currentView: function(){return this.$store.state.currentView;}
    },
mounted() {var that = this;
window.onpopstate = function(event){
            that.$store.commit('navigate', "navigation");};},

}
</script>

<style>



</style>

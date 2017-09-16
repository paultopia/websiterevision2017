<template>
  <div id="app">
       <v-touch @swipedown="tldr">
            <div id="view">
                <keep-alive>
                    <component :is="currentView"></component>
                </keep-alive>
            </div>
       </v-touch>

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

function innerTLDR(view){console.log(view);}

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
    methods: {tldr: function(){innerTLDR(this.$store.state.currentView);}},
    computed: {
        currentView: function(){return this.$store.state.currentView;}
    },
    mounted() {var that = this;
               window.onpopstate = function(event){
              that.$store.commit('navigate', "navigation");};},
    created() {var vm = this;
               window.addEventListener('keydown', function(e){
               if (e.keyCode == 32){vm.tldr();}});}

}
</script>

<style>



</style>

<template>
  <div id="app">
       <v-touch @pinchin="openTLDR" @pinchout="closeTLDR">
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
import tldr from "./components/tldr.vue";

function innerTLDR(view){console.log(view);}

const KEYCODE_ESC = 27;

const KEYCODE_TAB = 9;

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
      foot,
      tldr
  },
    methods: {openTLDR: function(){this.$store.commit('navigate', "tldr");},
             closeTLDR: function(){
                        if (this.currentView === "tldr"){
                        this.$store.commit('navigate', this.lastView);}
             }
},
    computed: {
        currentView: function(){return this.$store.state.currentView;},
        lastView: function(){return this.$store.state.lastView;}
    },
    mounted() {var that = this;
               window.focus();
               window.onpopstate = function(event){
              that.$store.commit('navigate', "navigation");};},
    created() {var that = this;
               window.addEventListener('keydown', function(e){
               if (e.keyCode == KEYCODE_TAB){
                 that.openTLDR();
               }
               if (e.keyCode == KEYCODE_ESC){
                 that.closeTLDR();
               }
});}

}
</script>

<style>



</style>

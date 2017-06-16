<template>
  <div id="app">

            <div id="view">
                <transition name="lilnav" mode="out-in">
                    <littlenav v-if="currentView != 'navigation'"></littlenav>
                </transition>
                <transition v-bind:name="checkViewForTransition()" mode="out-in">
                <keep-alive>
                    <component :is="currentView"></component>
                </keep-alive>
                </transition>
            </div>

  </div>
</template>

<script>
import Hello from './components/Hello'
import navigation from './components/nav/bignavbar.vue';
import littlenav from './components/nav/littlenavbar.vue'
import cv from './components/cv/cv.vue';
import bio from "./components/bio.vue";
import pubs from './components/pubs/publications.vue';
import writing from './components/writing.vue';


export default {
  name: 'app',
  components: {
      Hello,
      bio,
      navigation,
      cv,
      pubs,
      writing,
      littlenav
  },
    computed: {
        currentView: function(){return this.$store.state.currentView;}
    },
    methods: {
        clog: x => console.log(x), // for debugging
        checkViewForTransition: function(){return (this.$store.state.currentView == "navigation" || this.$store.state.lastView == "navigation") ? "main-view-anim" : "main-view-nonav";}
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

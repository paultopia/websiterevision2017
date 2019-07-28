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

import metadata from './assets/json/metadata.json';

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
    metaInfo: {
        meta: [
            {name: "viewport", content: metadata.viewport},
            {charset: metadata.charset},
            {name: "description", content: metadata.description},
            {name: "twitter:card", content: metadata.twittercard},
            {name: "twitter:site", content: metadata.twittersite},
            {name: "twitter:title", content: metadata.title},
            {name: "twitter:image", content: metadata.image},
            {name: "twitter:description", content: metadata.description},
            {property: "og:url", content: metadata.url},
            {property: "og:title", content: metadata.title},
            {property: "og:description", content: metadata.description},
            {property: "og:image", content: metadata.image},
            {itemprop: 'name', content: metadata.title},
            {itemprop: 'description', content: metadata.description},
            {itemprop: 'image', content: metadata.image}
        ],
        link: [
            {rel: 'canonical', href: metadata.url}
        ]
  },
  computed: {
        currentView: function(){return this.$store.state.currentView;},
        lastView: function(){return this.$store.state.lastView;},
  },
  mounted() {var that = this;
               window.focus();
               window.onpopstate = function(event){
                   that.$store.commit('navigate', "navigation");};},
}
</script>

<style>



</style>

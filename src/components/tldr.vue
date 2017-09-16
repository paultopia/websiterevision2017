<template>
<div class="textcontainer">

  <component :is="viewMap"></component>

  <hr class="instructions">
  <p><b>Navigation info:</b> This quick info functionality works on every page; <span class="nomobile">press tab</span><span class="mobileonly">pinch in</span> for page-specific info and navigation.</p>

  <p><span class="nomobile">Click</span><span class="mobileonly">Touch</span> the arrow or <span class="nomobile">press escape</span><span class="mobileonly">pinch out</span> to close this message and go back where you were. To go home, <span class="nomobile">click</span><span class="mobileonly">touch</span> the orange house.</p>
  <p class="nomobile">If the keyboard doesn't work, try clicking into the page first.</p>
    <div class="bailoutcontainer">
  <div class="bailout">
  <img class="naviconimage bailouticon" src="../assets/icons/arrow.svg" v-on:click="closeTLDR">
    <img class="naviconimage bailouticon" src="../assets/icons/home.svg" v-on:click="goHome">
  </div>
    </div>

</div>
</template>
 
<script>
  import navigationTLDR from '../assets/md/tldr/navigationtldr.md';
  import bioTLDR from '../assets/md/tldr/biotldr.md';
  import contactTLDR from '../assets/md/tldr/contacttldr.md';
  import cvTLDR from '../assets/md/tldr/cvtldr.md';
  import pubsTLDR from '../assets/md/tldr/pubstldr.md';
  import techTLDR from '../assets/md/tldr/techtldr.md';
  import writingTLDR from '../assets/md/tldr/writingtldr.md';
  import navigation from './nav/bignavbar.vue';

export default {
    components: {navigation, navigationTLDR, bioTLDR, contactTLDR, cvTLDR, pubsTLDR, techTLDR, writingTLDR},
  methods: {closeTLDR: function(){this.$store.commit('navigate', this.$store.state.lastView);},
          goHome: function(){this.$store.commit('navigate', "navigation");}
  },
computed: {viewMap: function(){return this.$store.state.lastView + "TLDR";}}
}

</script>

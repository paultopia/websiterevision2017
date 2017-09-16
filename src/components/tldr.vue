<template>
<div class="textcontainer">

  <component :is="viewMap"></component>

<p>Click the arrow or press escape to close this message and go back where you were.</p>
<div style="margin: auto; max-width: 100px;">
<img class="naviconimage" src="../assets/icons/arrow.svg" v-on:click="closeTLDR"></div>




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

export default {
    components: {navigationTLDR, bioTLDR, contactTLDR, cvTLDR, pubsTLDR, techTLDR, writingTLDR},
    methods: {closeTLDR: function(){this.$store.commit('navigate', this.$store.state.lastView);}},
computed: {viewMap: function(){return this.$store.state.lastView + "TLDR";}}
}

</script>

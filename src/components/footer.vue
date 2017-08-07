<template>
<div id="footer">
<div id="innerfooter" v-on:click="goHome">

<span class="nomobile">&copy; Paul Gowder</span>

<span class="nomobile">Last rev. {{ lastRev }}</span>

<span class="homelink">
<img src="../assets/icons/home.svg" class="footericon">
<span class="homelinktext">Home</span>
</span>

</div>
</div>
</template>

<script>

export default {
     methods: {
     goHome: function(){
window.history.back();
// this.$store.commit('navigate', 'navigation')
}},
     computed: {
     lastRev: function(){return this.$store.state.basics.core.revdate}
}} 
     
</script>

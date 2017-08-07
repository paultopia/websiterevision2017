<template>
<div id="footer">
<div id="innerfooter" v-on:click="goHome">

<span>&copy; Paul Gowder</span>

<span>Last rev. {{ lastRev }}</span>

<span class="homelink">Home</span>

</div>
</div>
</template>

<script>

export default {
     methods: {
     goHome: function(){this.$store.commit('navigate', 'navigation')}},
     computed: {
     lastRev: function(){return this.$store.state.basics.core.revdate}
}} 
     
</script>

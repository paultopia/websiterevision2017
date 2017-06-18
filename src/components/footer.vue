<template>
<div id="footer">
<div id="innerfooter">

<span v-on:click="goHome">Return Home</span>

<span>&copy; Paul Gowder.</span>

<span>Last rev. {{ lastRev }}.</span>

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

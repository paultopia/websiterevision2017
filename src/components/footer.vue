<template>
<div id="footer">
<img src="../assets/icons/home.svg" class="cvicon" v-on:click="goHome"> &copy; Paul Gowder. Last rev. {{ lastRev }}.


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

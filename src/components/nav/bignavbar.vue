<template>
<div class="allnav">

<div class="headline">
<transition name="main-view-anim">
<div class="subcontainer" v-if="typerOn" id="headline">
  <vue-typer
    :text='["Paul Gowder", "Rule of Law", "Political Philosophy", "Data Science", "Paul Gowder"]'
    caret-animation="blink"
    erase-style="select-all"
    :erase-on-complete='true'
    :pre-type-delay=0
    :type-delay="70"
    :erase-delay="400"
    initial-action="erasing"
    :repeat="0"></vue-typer>
</div>
</transition>
</div>


<div class="bigcontainer">

<div class="bigsubcontainer">
 <bigicon icon="user-secret" word="bio" toggle="bio" class="navicon"></bigicon>
 <bigicon icon="flask" word="research" toggle="pubs" class="navicon"></bigicon>
 
</div>

<div class="bigsubcontainer">
<bigicon icon="list-ul" word="cv" toggle="cv" class="navicon"></bigicon>
<bigicon icon="code" word="tech" toggle="tech" class="navicon"></bigicon>

</div>

<div class="bigsubcontainer">
<bigicon icon="pencil" word="external" toggle="writing" class="navicon"></bigicon>
<bigicon icon="address-card" word="contact" toggle="contact" class="navicon"></bigicon>

</div>
</div>

<p><span class="nomobile">Press tab</span><span class="mobileonly">Swipe down</span> on any screen for concise info & quick navigation.</p>

</div>

</template>

<script>

 import VueTyperPlugin from 'vue-typer';

 import bigicon from "./bigicon.vue";

 function hashJump(){
     
     this.$store.commit('navigate', location);
 }

 export default {
     components: {bigicon, VueTyperPlugin},
     deactivated() {this.$store.commit('typerOff');},
     mounted() {this.$store.commit('urlNavigate');},
     computed: {typerOn(){return this.$store.state.typerOn;},
                icons(){return this.$store.state.icons;},
     }
 }


</script>

<style>



  </style>

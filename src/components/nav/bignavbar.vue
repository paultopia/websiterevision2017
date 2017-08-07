<template>
<div class="allnav">

<div class="headline">
<transition name="main-view-anim">
<div class="subcontainer" v-if="typerOn" id="headline">
  <vue-typer
    :text='["Pau", "Rul", "Polit", "Dat", "Pau"]'
    caret-animation="solid"
    erase-style="backspace"
    :erase-on-complete='true'
    :type-delay="300"
    initial-action="erasing"
    :repeat="0"></vue-typer>

  <vue-typer
    :text='["l G", "e o", "ical ", "a S", "l G"]'
    caret-animation="solid"
    erase-style="backspace"
    :erase-on-complete='true'
    :type-delay="300"
    initial-action="erasing"
    :repeat="0"></vue-typer>

<vue-typer
    :text='["owd", "f L", "Philo", "cie", "owd"]'
    caret-animation="solid"
    erase-style="backspace"
    :erase-on-complete='true'
    :type-delay="300"
    initial-action="erasing"
    :repeat="0"></vue-typer>

<vue-typer
    :text='["er", "aw", "sophy", "nce", "er"]'
    caret-animation="solid"
    erase-style="backspace"
    :erase-on-complete='true'
    :type-delay="300"
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

</div>

</template>

<script>

import VueTyperPlugin from 'vue-typer';


import bigicon from "./bigicon.vue";
export default {
     components: {bigicon, VueTyperPlugin},
     deactivated() {this.$store.commit('typerOff');},
     computed: {typerOn(){return this.$store.state.typerOn;},
     icons(){return this.$store.state.icons;},
     }
}


</script>

<style>



  </style>

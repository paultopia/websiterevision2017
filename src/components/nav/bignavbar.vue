<template>
<div class="bignavbox">
<transition name="main-view-anim">
                <div v-if="typerOn">
                    <vue-typer text="Paul Gowder" caret-animation="solid" :type-delay="300" :repeat="0"></vue-typer>
</div>
</transition>

<div class="bigcontainer">

<div class="subcontainer">
 <bigicon icon="user-secret" word="bio" toggle="bio" class="navicon"></bigicon>
 <bigicon icon="flask" word="research" toggle="pubs" class="navicon"></bigicon>
 <bigicon icon="list-ul" word="cv" toggle="cv" class="navicon"></bigicon>
 
</div>

<div class="subcontainer">
<bigicon icon="pencil" word="writing" toggle="writing" class="navicon"></bigicon>
<bigicon icon="lightbulb" word="teaching" toggle="teaching"> class="navicon"</bigicon>
<bigicon icon="code" word="tech" toggle="tech" class="navicon"></bigicon>

</div>

<div class="subcontainer">
<bigicon icon="news" word="news" toggle="news" class="navicon"></bigicon>
<bigicon icon="rocket" word="links" toggle="links" class="navicon"></bigicon>
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

// this is also an experiment, it might not let me use methods from the global vue instance in here... might have to have them as mixins or something.

</script>

<style>
body {
background-color: rgb(172, 196, 165);
}

/* nav */

.bigcontainer {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
  margin: 3em;
}

.subcontainer {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: stretch;
  padding-top: 3em;
  }

.bignavbox {
  margin-left: auto;
  margin-right: auto;
}

/* typer */

.vue-typer .custom.caret {
  width: 10px;
  background-color: rgba(229, 81, 229, 0.68);
}

.vue-typer {

    font-weight:bold;
}

/* media queries */

@media (max-width: 699px) 
{

.bignavbox {
width: 95%;
}

img {
height: 40px;
width: 40px;
}

.subcontainer {
  justify-content: space-between;
  }

.vue-typer {
    font-size:1.5em;

}


}






@media (min-width: 700px) 
{

.bignavbox {
width: 80%;
}

img {
height: 100px;
width: 100px;
}

.subcontainer {
  justify-content: space-around;
  }

.vue-typer {
    font-size:3em;
}


}





  </style>

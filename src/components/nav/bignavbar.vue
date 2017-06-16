<template>
<div class="bignavbox">

<div class="bigcontainer">

<transition name="main-view-anim">
<div class="subcontainer" v-if="typerOn" id="headline">
<vue-typer text="Paul Gowder" caret-animation="solid" :type-delay="300" :repeat="0"></vue-typer>
</div>
</transition>


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


/* nav */

.bigcontainer {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
margin: 3em;
text-align: center;
font-size: 1em;

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
  width: 0.3em;
background-color: rgba(255, 131, 0, 0.7);
}

.vue-typer {

    font-weight:bold;
}

#headline {
  justify-content: space-around;
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

.bignavlabel

{
font-size: 1.1em;
margin-top: -0.25em;
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

.bignavlabel

{
font-size: 2em;
margin-top: -0.25em;
}


}





  </style>

<template>

<div class="littlenavbox">
  <div class="subcontainer">
 <littleicon icon="home" word="home" toggle="navigation"></littleicon>
 <littleicon icon="user-secret" word="bio" toggle="bio" class="navicon"></littleicon>
 <littleicon icon="flask" word="research" toggle="pubs" class="navicon"></littleicon>
 <littleicon icon="list-ul" word="cv" toggle="cv" class="navicon"></littleicon>
 
<littleicon icon="pencil" word="writing" toggle="writing" class="navicon"></littleicon>
<littleicon icon="lightbulb" word="teaching" toggle="teaching" class="navicon"></littleicon>
<littleicon icon="code" word="tech" toggle="tech" class="navicon"></littleicon>

<littleicon icon="news" word="news" toggle="news" class="navicon"></littleicon>
<littleicon icon="rocket" word="links" toggle="links" class="navicon"></littleicon>
<littleicon icon="address-card" word="contact" toggle="contact" class="navicon"></littleicon>

</div>

</div>


</template>

<script>

import littleicon from "./littleicon.vue";

export default {
     components: {littleicon}
}


</script>

<style>


  .littlenav {
  height: 50%;
  width: 50%;
  }


  </style>

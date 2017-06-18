<template>

<div class="littlenavbox">
 <littleicon icon="home" word="home" toggle="navigation" class="homeicon littlenavicon"></littleicon>
 <littleicon icon="user-secret" word="bio" toggle="bio" class="littlenavicon"></littleicon>
 <littleicon icon="flask" word="research" toggle="pubs" class="littlenavicon"></littleicon>
 <littleicon icon="list-ul" word="cv" toggle="cv" class="littlenavicon"></littleicon>
 
<littleicon icon="pencil" word="writing" toggle="writing" class="littlenavicon"></littleicon>
<littleicon icon="lightbulb" word="teaching" toggle="teaching" class="littlenavicon"></littleicon>
<littleicon icon="code" word="tech" toggle="tech" class="littlenavicon"></littleicon>

<littleicon icon="news" word="news" toggle="news" class="littlenavicon"></littleicon>
<littleicon icon="rocket" word="links" toggle="links" class="littlenavicon"></littleicon>
<littleicon icon="address-card" word="contact" toggle="contact" class="littlenavicon"></littleicon>

</div>


</template>

<script>

import littleicon from "./littleicon.vue";

export default {
     components: {littleicon}
}


</script>

<style>


  </style>

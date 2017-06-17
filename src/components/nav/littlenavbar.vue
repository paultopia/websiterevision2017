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

  .littlenavbox {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
  float: left;
margin: 3em;
text-align: center;
font-size: 1em;

}


  .littlenav {
  height: 30%;
  width: 30%;
  }

.littlenavlabel

{
font-size: 0.4em;
margin-top: -0.15em;
}

  @media (max-width: 699px) 
{
  .littlenavicon {
display: none;
  }

  .homeicon

  {
  display: block;
  }
  .littlenavbox {
  position: fixed;
  bottom: 0;
  }
}
  </style>

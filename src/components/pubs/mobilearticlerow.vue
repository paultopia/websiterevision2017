<template>

  <div class="mobilearticleblock">
    <div v-if="this.infoline" class="mobilearticleflexcontainer">
      <div class="mobilearticletext">
      {{ art.title }}, {{ art.journal }} {{ art.volume }}<span v-if="art.issue">({{ art.issue }})</span>:{{ art.firstpage }}-{{ art.lastpage }}<span v-if="art.coauthor"> (with {{ art.coauthor }})</span> ({{ art.year }}).
      </div>

      <div class="mobilearticleiconbuttons">
      <span v-on:click="abs()"><img src="../../assets/icons/file-text.svg" class="pubsicon"></span>
      <a v-if="art.publink" :href="art.publink"><img src="../../assets/icons/external-link.svg" class="pubsicon"></a>

      <a v-if="art.altlink" :href="art.altlink"><img src="../../assets/icons/cloud-download.svg" class="pubsicon"></a>
    </div>

</div>

    <div v-else>
    <h5>{{art.title}}</h5>
    <h6>Abstract</h6>
<p v-if="art.abstract">{{ art.abstract }}</p>
<p v-else>Sorry, I don't have an abstract for this publication.</p>
<h6>Citation</h6>
<p>
<citation :art="art"></citation></p>

<p>
<button v-on:click="line()">
Close abstract.
</button>
</p>

    </div>

  </div>

  </template>

<script>

import citation from "./citation.vue";

 export default {
     props: ["art"],
     components: {citation},
     data: function(){return {infoline: true};},
     methods: {
         abs(){this.infoline = false;},
         line(){this.infoline = true;}
     }}
</script>

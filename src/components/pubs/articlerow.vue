<template>
    <tr v-if="this.infoline">
        <td>{{ art.title }}</td>
        <td>{{ art.journal }} {{ art.volume }}<span v-if="art.issue">({{ art.issue }})</span>:{{ art.firstpage }}-{{ art.lastpage }}<span v-if="art.coauthor"> (with {{ art.coauthor }})</span></td>
        <td>{{ art.year }}</td>
        <td>
        <span v-on:click="abs()"><img src="../../assets/icons/file-text.svg" class="pubsicon"></span>
        <a v-if="art.publink" :href="art.publink"><img src="../../assets/icons/external-link.svg" class="pubsicon"></a>
<a v-if="art.altlink" :href="art.altlink"><img src="../../assets/icons/cloud-download.svg" class="pubsicon"></a>
<!-- Why do I have one span and two anchors with the same function?! Also I need to replace the tooltops with labels. -->

        </td>
    </tr>

    <tr v-else> <td colspan="3">
    <h5>{{art.title}}</h5>
    <h6>Abstract</h6>
<p v-if="art.abstract">{{ art.abstract }}</p>
<p v-else>Sorry, I don't have an abstract for this publication.</p>
<h6>Citation</h6>
<p>
<newcitation :art="art"></newcitation></p>

</td>
<td style="vertical-align: top;"><span v-on:click="line()">
<img src="../../assets/icons/times.svg" class="pubsicon">
</span>         <a v-if="art.publink" :href="art.publink"><img src="../../assets/icons/external-link.svg" class="pubsicon"></a>
<a v-if="art.altlink" :href="art.altlink"><img src="../../assets/icons/cloud-download.svg" class="pubsicon"></a> </td>
    </tr>
</template>

<script>

import newcitation from "./newcitation.vue";

 export default {
     props: ["art"],
     components: {newcitation},
     data: function(){return {infoline: true};},
     methods: {
         abs(){this.infoline = false;},
         line(){this.infoline = true;}
     }}
</script>

<style>

  </style>

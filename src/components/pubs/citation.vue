<template>

<div class="citation">

<div class="citeselector">
<form>

<select v-model="citeFormat" class="citeselect">
  <option>Chicago</option>
  <option>APA</option>
  <option>Bluebook</option>
  <option>MLA</option>
</select>


</form>
</div>


<innercitation :art="art"></innercitation>

<p>
<button v-clipboard:copy="copyCite()">
Copy citation.
</button>
</p>


</div>
</template>

<script>

  import innercitation from "./innercitation.vue";

 export default {
     props: ["art"],
     components: {innercitation},
     computed: {
               citeFormat: {
                           get(){return this.$store.state.citeFormat;},
                           set(value){this.$store.commit('changeCitation', value);}
               }
     },
     methods: {
         copyCite: function(){
             return this.$store.state.citeText;
         }}}

// AUTHORMAKER DOES NOT HANDLE JOURNAL ON LEGISLATION GROUP AUTHORSHIP CASE.

// MLA ARTICLE DOES NOT HANDLE NON-PRINT

</script>

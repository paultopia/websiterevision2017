<template>

<div class="citation">

<div class="citeselector">
<form>

<select v-model="citeFormat" class="citeselect">
  <option disabled value="">Select format</option>
  <option>Chicago</option>
  <option>APA</option>
  <option>Bluebook</option>
  <option>MLA</option>
</select>


</form>
</div>


<innercitation :art="art"></innercitation>

<p>
<button v-clipboard:copy="copyCite(art.title)">
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
               cites(){return this.$store.state.citeText},
               citeFormat: {
                   get(){
                       return this.$store.state.citeFormat;},
                   set(value){
                       this.$store.commit('changeCitation', value);}
               }
     },
     methods: {
         copyCite: function(title){
             return this.cites[title];
         }}}

// AUTHORMAKER DOES NOT HANDLE JOURNAL ON LEGISLATION GROUP AUTHORSHIP CASE.

// MLA ARTICLE DOES NOT HANDLE NON-PRINT

</script>

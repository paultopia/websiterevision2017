<template>

<div class="citation">

<div class="citeselector">
<form>

<select v-model="style" class="citeselect">
  <option v-for="option in options" v-bind:value="option.value">
    {{ option.text }}
  </option>
</select>

</form>
</div>

<div class="citecontent">
<span v-html="html"></span>
</div>

<p>
<button v-clipboard:copy="text">
Copy citation.
</button>
</p>


</div>
</template>

<script>

// THIS WHOLE COMPONENT IS UNTESTED

 export default {
     props: ["art"],
     data: function(){return {
               style: "CH",
               options: [
                         {text: "Chicago", value: "CH"},
                         {text: "Bluebook", value: "BB"}
               ]
     }},
     computed: {
               html: function(){return this.art["html" + this.style]},
               text: function(){return this.art["text" + this.style]}
     }
}

// still has problems handling Harvard journal on legislation piece.  Just remove?
</script>

<template>

<div class="citation">

<div class="citecontent">
<p v-html="html"></p>
</div>

<div class="citeselector">
<form>
Choose Style: 
<select v-model="style" class="citeselect">
  <option v-for="option in options" v-bind:value="option.value">
    {{ option.text }}
  </option>
</select>
 <button v-clipboard:copy="text">
Copy Citation
</button>

</form>
</div>

<p>
</p>


</div>
</template>

<script>

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

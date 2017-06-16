<template>
<div class="three columns" v-on:click="navto">
<img :src="iconPath(icon)" height=100 width=100>
<p class="bignavlabel">{{ word }}</p>
</div>
</template>

<script>

// NEED TO SET SOME RESPONSIVE CSS ON ICON AND GET RID OF HARD-CODED DIMENSIONS.  Also need to use flexbox to lay these out.  might just be able to get down to one icon component after flexbox + responsive css sort it out, i.e., apply appropriate css in each navbar component.

import mixins from "../../mixins.js";

export default {
mixins: [mixins.nav, mixins.icon]
};

</script>

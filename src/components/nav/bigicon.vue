<template>
<div v-on:click="navto">
<img class="naviconimage" :src="iconPath(icon)">

<!-- for some bizarre reason taking away these hardcoded dimensions breaks layout, even though I have dimensions in css.  I might just have to accept this. -->

<p class="bignavlabel">{{ word }}</p>
</div>
</template>

<script>

import mixins from "../../mixins.js";

export default {
mixins: [mixins.nav]
};

</script>

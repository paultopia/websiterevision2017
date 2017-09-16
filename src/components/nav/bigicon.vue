<template>
<div v-on:click="navto">
<img class="naviconimage" :src="iconPath(icon)">

<p class="bignavlabel">{{ word }}</p>
</div>
</template>

<script>

import mixins from "../../mixins.js";

export default {
mixins: [mixins.nav]
};

</script>

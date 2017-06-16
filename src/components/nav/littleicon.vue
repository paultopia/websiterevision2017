<template>
<div class="two columns" v-on:click="navto" :class="isActive">
<img :src="iconPath(icon)" class="littlenav">
<p class="littlenavlabel">{{ word }}</p>
</div>
</template>

<script>

import mixins from "../../mixins.js";

export default {
mixins: [mixins.nav, mixins.icon]
};

</script>

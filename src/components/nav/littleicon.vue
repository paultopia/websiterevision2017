<template>
<div class="two columns" v-on:click="navto" :class="isActive">
<img :src="iconPath(icon)" height=50 width=50>
<p class="little-nav-label">{{ word }}</p>
</div>
</template>

<script>

import mixins from "../../mixins.js";

export default {
mixins: [mixins.nav]
};

</script>

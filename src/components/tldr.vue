<template>
<div class="textcontainer">

{{viewMap}}

<navigationTLDR></navigationTLDR>

<img src="../assets/images/fluffyface.jpg" style="border-radius: 50%; height: 100px; width: 100px;">
</div>
</template>

<script>
import navigationTLDR from '../assets/md/tldr.md';

export default {
    components: {navigationTLDR},
    computed: {viewMap: function(){return this.$store.state.lastView + "TLDR";}}
}

</script>

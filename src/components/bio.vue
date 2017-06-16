<template>
<div>
 <p><img src="../assets/images/headshot.jpg"></p>
<bio></bio>
</div>
</template>

<script>
import bio from '../assets/md/bio.md';
import littlenav from './nav/littlenavbar.vue';

export default {
     components: {bio, littlenav}
}

</script>

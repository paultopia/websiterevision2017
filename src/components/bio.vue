<template>
<div class="textcontainer">
 <img src="../assets/images/headshot.jpg">
<bio></bio>
 <img src="../assets/images/kitty.jpg">
<bio2></bio2>
</div>
</template>

<script>
import bio from '../assets/md/bio.md';
import bio2 from '../assets/md/bio2.md';
// this is a terrible hack to get around limitations of css float with images.

export default {
     components: {bio, bio2}
}

</script>

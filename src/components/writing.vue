<template>


<div class="textcontainer">
<h2>Non-Academic Writings</h2>

<div v-for="category in commentary.orderedcategories">
<h4>{{ category }}</h4>
<table>
        <col style="width:7%">
        <col style="width:60%">
        <col style="width:30%">
<tbody>
<tr v-for="article in catsort(commentary.articles)" v-if="article.category == category">
<td>{{ article.month + '/' + article.year }}</td>
<td>{{ article.title }}</td>
<td><a :href="article.url" target="_blank">{{ article.publisher }}</a></td>
</tr>
</tbody>
</table>
</div>

</div>

</template>

<script>

function chronThenTitle(a, b){
    if(parseInt(a.year) > parseInt(b.year)) return -1;
    if(parseInt(a.year) < parseInt(b.year)) return 1;
    if(parseInt(a.month) > parseInt(b.month)) return -1;
    if(parseInt(a.month) < parseInt(b.month)) return 1;
    if(a.title < b.title) return -1;
    return 1;
}

export default {
       computed: {
                 commentary: function(){return this.$store.state.commentary;}
                 },
       methods: {catsort: x => JSON.parse(JSON.stringify(x)).sort(chronThenTitle)}
}

</script>

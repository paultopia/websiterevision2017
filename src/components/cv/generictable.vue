<template>

<div>

<!-- This is only suitable for when the header is just a capitalized version of the items.  headingslist will be lowercase and I'll just uppercase the first word in a method. -->

    <h2 v-if="ismajor"> {{ header }} </h2>

    <h3 v-else> {{ header }} </h3>

    <table>
        <col style="width:10%">
        <col style="width:50%">
        <col style="width:40%">
        <thead>
            <tr>
                <th v-for="heading in titleCase(headings)">
                    {{ heading }} </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in sortedItems">
                <td v-for="heading in headings">
                    {{ item[heading] }}
                </td>


            </tr>
        </tbody></table>

<!-- I can swap existing subcomponents for this maybe? -->
</div>
</template>

<script>

function chron(a, b){
    if(a.year >= b.year) return -1;
    return 1;
}


 export default {
     props: ["header", "itemslist", "ismajor"],
     computed: {
headings: function () {return Object.keys(this.itemslist[0])},
sortedItems(){return this.itemslist.sort(chron);}
},
     methods: {titleCase: arr => arr.map(s=>s.slice(0,1).toUpperCase() + s.slice(1))}
 }
</script>

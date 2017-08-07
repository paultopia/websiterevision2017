<template>
<div>
    <h2>Service</h2>

    <h3> University Service </h3>
    <table>
            <col style="width:10%">
        <col style="width:40%">
        <col style="width:50%">

      
        <tbody>
        <tr v-for="sv in servicelist.filter(x=>x['type']=='university')">
        <td>{{ sv.years }}</td>
                <td>{{ sv.role }}</td>
                <td>{{ sv.entity }}<span v-if="sv.subentity">, {{ sv.subentity }}</span></td>
                
            </tr>
        </tbody></table>

    <h3> Disciplinary Service </h3>
    <table>
            <col style="width:10%">
        <col style="width:80%">

      
        <tbody>
        <tr v-for="sv in servicelist.filter(x=>x['type']=='disciplinary')">
                <td>{{ sv.years }}</td>
                <td>{{ sv.role }}</td>
                
            </tr>
        </tbody></table>

            <h3> Community Service and Outreach</h3>
    <table>
            <col style="width:10%">
        <col style="width:80%">

      
        <tbody>
        <tr v-for="sv in servicelist.filter(x=>x['type']=='community')">
                <td>{{ sv.years }}</td>
                <td>{{ sv.role }}</td>
                
            </tr>
        </tbody></table>


</div>
</template>


<script>

import generictable from "./generictable.vue";

export default {
     props: ["servicelist"],
     components: {generictable}
 }
</script>

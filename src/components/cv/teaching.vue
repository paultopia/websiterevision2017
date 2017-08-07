<template>
<div>
    <h3> {{ header }} </h3>
    <table>
     <col style="width:10%">
        <col style="width:40%">
        <col style="width:50%">
       

        <tbody>
        <tr v-for="cl in classlist">
            <td>{{ cl.terms }}</td>
            <td>{{ cl.title }}</td>
            <td>{{ cl.school }}</td>

            </tr>
        </tbody></table>
</div>
</template>
 

<script>

 export default {
     props: ["header", "classlist"]
 }
</script>

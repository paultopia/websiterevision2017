<template>
<div>

    <h3> {{ header }} </h3>
    <table class="u-full-width">
    <col style="width:5%">
        <col style="width:40%">
        <col style="width:50%">
        

        <tbody>
        <tr v-for="presentation in sortedPres">


                <td>
                    {{ presentation.year }}
                    </td>

                <td>
                    {{ presentation.venue }}
                </td>

                <td>
                    {{ presentation.title }}
                </td>


            </tr>
        </tbody></table>

</div>
</template>

<script>

function chronThenTitle(a, b){
    if(parseInt(a.year) != parseInt(b.year)) return parseInt(b.year) - parseInt(a.year);
    if(a.title < b.title) return -1;
    return 1;
}

export default {
     props: ["header", "presentationlist"],
     computed: {sortedPres: function(){return this.presentationlist.sort(chronThenTitle);}}
     }
</script>

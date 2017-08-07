<template>
<div>

    <h3> {{ header }} </h3>
    <table class="u-full-width">
    <col style="width:5%">
        <col style="width:40%">
        <col style="width:50%">
        

        <tbody>
        <tr v-for="presentation in presentationlist">


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

export default {
     props: ["header", "presentationlist"]
     }
</script>

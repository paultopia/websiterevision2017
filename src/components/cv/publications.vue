<template>
<div>
<h2>Publications</h2>
            <h3>Books</h3>
            <table>
<col style="width:5%">
                
              <col style="width:55%">
                <col style="width:40%">
                

                <tbody>

<tr v-for="book in sortedPubs" v-if="book.type === 'book'">

<td>

                        {{ book.year }}

                    </td>
                   

                    <td>
                        <b>{{ book.title }}</b>

                        <span v-if="book.coauthor">
                        <br>(Co-Author with {{ book.coauthor }})
                        </span>

                    </td><td>
                        {{ book.publisher }}

                    </td>
                     </tr>
                    
                </tbody></table>


            <h3>Peer Reviewed Articles</h3>
            <table>
                <col style="width:5%">
                <col style="width:35%">
                <col style="width:35%">
                <col style="width:20%">

                <tbody>

<tr v-for="art in sortedPubs" v-if="art.type === 'peer review'">
                    <td>

                        {{ art.year }}

                    </td>
                    <td>
                        {{ art.title }}

                        <span v-if="art.coauthor">
                        <br>(Co-Author with {{ art.coauthor }})
                        </span>

                    </td><td>
                        {{ art.journal }}

                    </td><td>
                        {{ makeCitation(art) }}

                    </td>
                    
                    </tr>
                </tbody></table>


            <h3>Law Review Articles</h3>
            <table>
                <col style="width:5%">
                <col style="width:35%">
                <col style="width:35%">
                <col style="width:20%">

                <tbody>

<tr v-for="art in sortedPubs" v-if="art.type === 'law review'">
                    <td>

                        {{ art.year }}

                    </td>
                    <td>
                        {{ art.title }}

                        <span v-if="art.coauthor">
                        <br>(Co-Author with {{ art.coauthor }})
                        </span>

                    </td><td>
                        {{ art.journal }}

                    </td><td>
                        {{ makeCitation(art) }}

                    </td>
                    </tr>
                </tbody></table>


            <h3>Book Chapters</h3>
            <table>
<col style="width:5%">
              <col style="width:35%">
                <col style="width:45%">
                <col style="width:10%">
                
<tbody>
                
<tr v-for="chapter in sortedPubs" v-if="chapter.type === 'chapter'">                
<td>
                        {{ chapter.year }}
                    </td>

<td>
                        {{ chapter.title }}

                        <span v-if="chapter.coauthor">
                        <br>(Co-Author with {{ chapter.coauthor }})
                        </span>
    
                </td>
                    <td>
                        {{ chapter.editor }}, ed., <em>{{ chapter.book }}</em> ({{ chapter.publisher }})
                        
                    </td><td>
                        
                        {{chapter.firstpage + "-" + chapter.lastpage}}
                    
                    </td>

</tr>
                    
                </tbody></table>

            <h3>Miscellany</h3>
            <table>
                <col style="width:5%">
                <col style="width:40%">
                <col style="width:50%">

                <tbody>
                    
                    <tr v-for="misc in sortedPubs" v-if="misc.type === 'misc'">              
                    <td>
                        {{ misc.year }}
                    </td>
                    <td>
                        {{ misc.title }}
                        
                        <span v-if="misc.coauthor">
                        <br>(Co-Author with {{ misc.coauthor }})
                        </span>
    
                        
                    </td><td>
                        {{ misc.note }}
                    </td></tr>
                    
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
     props: ["pubs"],
     computed: {sortedPubs: function(){return this.pubs.sort(chronThenTitle);},
     displayPubs: function(){return JSON.stringify(this.pubs);}
     },
     methods: {makeCitation: function(art){
         var iss = art.issue ? "(" + art.issue + ")" : "";
     return art.volume + iss + ":" + art.firstpage + "-" + art.lastpage;}
      }
    }
 

</script>

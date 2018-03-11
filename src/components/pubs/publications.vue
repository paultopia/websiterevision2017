<template>
<div class="textcontainer">
<div style="margin-top:5%;">

<research></research>

       <h3>Book</h3>
<p><em>The Rule of Law in the Real World</em>, Cambridge University Press 2016. <br> For more information, go to <a href="http://rulelaw.net">rulelaw.net</a>.</p>
            <h3>Articles</h3>

            <div class="nomobile">
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Citation</th>
                        <th>Year</th>
                        <th>options</th>
                    </tr>
                    </thead>
                    <tbody>

                        <tr is="articlerow" v-for="art in articles" v-bind:art="art" v-bind:key="art.title"></tr>


                        </tbody>
                      </table>

                    </div> 

                    <div class="mobileonly">

                         <mobilearticlerow v-for="art in articles" v-bind:art="art" v-bind:key="art.title"></mobilearticlerow>

                                        </div>

            <h3>Chapters in Edited Volumes</h3>

            <div class="nomobile">
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Citation</th>
                        <th>Year</th>
                        <th>options</th>
                    </tr>
                    </thead>
                    <tbody>

                        <tr is="chapterrow" v-for="chap in chapters" v-bind:art="chap" v-bind:key="chap.title"></tr>


                        </tbody>
                      </table>

                    </div> 

                    <div class="mobileonly">

                         <mobilechapterrow v-for="chap in chapters" v-bind:art="chap" v-bind:key="chap.title"></mobilechapterrow>

                                        </div>


                    
                    <p>
                        <a :href="bturl" download="gowder.bib">download bibtex</a>
                        </p>

                        <p>

                      See cv page for additional, minor, publications.
                      </p>



</div>
</div>
</template>

<script>

import articlerow from './articlerow.vue';
import mobilearticlerow from './mobilearticlerow.vue';

// EXPERIMENTAL
import chapterrow from './chapterrow.vue';
import mobilechapterrow from './mobilechapterrow.vue';
// END EXPERIMENTAL

import bibtex from "../../bibtex.js";
import io from "../../io.js";

const isArticle = pub => pub.type === "peer review" || pub.type === "law review";

const isChapter = pub => pub.type === "chapter";

function chronThenTypeThenTitle(a, b){
    if(parseInt(a.year) > parseInt(b.year)) return -1;
    if(parseInt(a.year) < parseInt(b.year)) return 1;
    if(a.type > b.type) return -1;
    if(a.type < b.type) return 1;
    if(a.title < b.title) return -1;
    return 1;
}

function chronThenTitle(a, b){
    if(parseInt(a.year) > parseInt(b.year)) return -1;
    if(parseInt(a.year) < parseInt(b.year)) return 1;
    if(a.title < b.title) return -1;
    return 1;
}

import research from '../../assets/md/research.md';

export default {
       components: {articlerow,
                    mobilearticlerow,
                    research,
                    mobilechapterrow,
                    chapterrow
                    },
       computed: {
                 publications: function(){return this.$store.state.pubs;},
                 articles: function(){return this.$store.state.pubs.filter(isArticle).sort(chronThenTypeThenTitle)},
                 chapters: function(){return this.$store.state.augmentedPubs.filter(isChapter).sort(chronThenTitle)}
                 bturl: function (){return io.downloadURL(bibtex.string(this.publications));},
                 }
}

</script>
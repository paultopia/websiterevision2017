<template>
<div class="textcontainer">
<div style="margin-top:5%;">

<research></research>

<p>
  <h4>Legend:</h4>
  <table class="legendtable">
    <tr>
      <td>
        <img src="../../assets/icons/file-text.svg" class="pubsicon">
      </td>
      <td>
        abstract
      </td>
      </tr>
    <tr>
      <td>
        <img src="../../assets/icons/external-link.svg" class="pubsicon">
      </td>
      <td>
        official/journal link
      </td>
      </tr>
    <tr>
      <td>
        <img src="../../assets/icons/cloud-download.svg" class="pubsicon">
      </td>
      <td>
        unofficial/preprint link (may not be final version)
      </td>
    </tr>
    </table>
</p>

       <h3>Books</h3>
       
<p><em>The Rule of Law in the United States: An Unfinished Project of Black Liberation</em>, Hart Publishing/Bloomsbury 2021. <br> For more information, to buy, or to download a free open-access PDF, go to <a href="https://rulelaw.us">rulelaw.us</a>.</p>
       
<p><em>The Rule of Law in the Real World</em>, Cambridge University Press 2016. <br> For more information or to buy, go to <a href="https://rulelaw.net">rulelaw.net</a>.</p>

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


 <h3>Book Reviews</h3>

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

                        <tr is="articlerow" v-for="rev in bookReviews" v-bind:art="rev" v-bind:key="rev.title"></tr>


                        </tbody>
                      </table>

                    </div> 

                    <div class="mobileonly">

                         <mobilearticlerow v-for="rev in bookReviews" v-bind:art="rev" v-bind:key="rev.title"></mobilearticlerow>

                                        </div>
		    
                    
                    <p>
                        <a :href="bturl" download="gowder.bib">download bibtex</a>
                        </p>

                    <p>
                        <a :href="risurl" download="gowder.ris">download ris (reference manager format)</a>
                        </p>

			<p>
				If you use Zotero for reference management, you can also add individual publications directly to your library via <a href="https://www.zotero.org/paulgowder">my Zotero profile</a> (give the list a moment to load). 
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
import chapterrow from './chapterrow.vue';
import mobilechapterrow from './mobilechapterrow.vue';

import bibtex from "../../bibtex.js";
import ris from "../../ris.js";
import downloadURL from "../../io.js";

import research from '../../assets/md/research.md';


const isArticle = pub => pub.type === "peer review" || pub.type === "law review";

const isChapter = pub => pub.type === "chapter";

const isBookReview = pub => pub.type === "book review";

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


export default {
       components: {
                    articlerow,
                    mobilearticlerow,
                    research,
                    mobilechapterrow,
                    chapterrow
                    },
       computed: {
                 publications: function(){return this.$store.state.pubs;},
                 articles: function(){
                   var arts = this.$store.state.augmented
                              .filter(isArticle)
                              .sort(chronThenTypeThenTitle);
                   arts.pop()
                   // get rid of harvard journal on legislation thing
                   return arts;},
                 chapters: function(){return this.$store.state.augmented
                   .filter(isChapter)
                   .sort(chronThenTitle)},
                 bookReviews: function(){return this.$store.state.augmented
                   .filter(isBookReview)
                   .sort(chronThenTitle)},
                 bturl: function (){return downloadURL(bibtex(this.publications));},
                 risurl: function (){return downloadURL(ris(this.publications));}
      }
}

</script>

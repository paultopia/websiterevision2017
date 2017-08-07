

<template>
<div>
<div class="row">


    <div class="twelve columns">
        <h1 id="top"><a href="http://paul-gowder.com">Paul Gowder</a></h1>
        <p><a :href="'mailto:' + basics.email"><img src="../../assets/icons/envelope.svg" class="cvicon"></a> <a :href="cvURL" download="gowdercv.pdf"><img src="../../assets/icons/file-pdf.svg" class="cvicon"></a></p>

    </div></div>

    <div class="row">
        <div class="twelve columns">

            <generictable :ismajor="true" header="Academic Positions" :itemslist="basics.positions"></generictable>

<!-- this might be worth hard-coding, since it obv changes rarely and requires special formatting for things like promotion, courtesy appointments, etc. -->

            <generictable :ismajor="true" header="Education" :itemslist="basics.education"></generictable>

<!-- pubs are too annoyingly messy to separate out into individual components for now.  Maybe later. -->

<publications :pubs="pubs"></publications>

            <generictable :ismajor="true" header="Grants, Awards and Honors" :itemslist="awards"></generictable>

            <h3 id="pres">Presentations</h3>

            <presentations header="Invited Talks" :presentationlist="pres.invited"></presentations>
            <presentations header="Conference Presentations" :presentationlist="pres.conferences"></presentations>
            <presentations header="Campus Talks" :presentationlist="pres.campus"></presentations>

            <h3 id="teach">Teaching</h3>
            <teaching header="Lead Instructor" :classlist="courses.lead"></teaching>

<p>Graduate School teaching assistantships ommitted for brevity, but included courses on introductory political philosophy, global justice, the philosophy of race, and corruption.</p>

            <generictable :ismajor="true" header="Legal Practice" :itemslist="misc.practice"></generictable>

            <service :servicelist="svc"></service>

            <p><b>Languages</b></p>
            <p>Human:</p>
                <p v-for="lang in misc.humanlang"> {{ lang }} </p>

                <p>Computer:</p>
                <p v-for="lang in misc.computerlang"> {{ lang }} </p>

                <p><b>Bar Admissions</b></p>
                <p v-for="bar in misc.bars"> {{ bar }} </p>

                <p><b>Other</b></p>
                <p v-for="o in misc.other"> {{ o }} </p>

                <p><b>Notes</b></p>
                <p v-for="n in misc.notes"> {{ n }} </p>

        </div>
    </div>
    <hr />
    <p style="float: left;"><a :href="basics.url"><b>&lt;&lt;---</b></a></p> <p style="float: right;">Last Revised {{ basics.revdate }} </p>


    <input v-model.number="page" type="number" style="width: 5em"> /{{numPages}}
    <button @click="$refs.pdf.print()">print</button>


			<div v-if="loadedRatio > 0 && loadedRatio < 1" style="background-color: green; color: white; text-align: center" :style="{ width: loadedRatio * 100 + '%' }">{{ Math.floor(loadedRatio * 100) }}%</div>
			<pdf ref="pdf" :src="cvbin" :page="page"  @progress="loadedRatio = $event" @numPages="numPages = $event"></pdf>



</div>

</template>

<script>

import presentations from "./presentations.vue";
import teaching from "./teaching.vue";
import generictable from "./generictable.vue";
import publications from "./publications.vue";
import service from "./service.vue";
import pdf from 'vue-pdf';

export default {    
    components: {presentations, teaching, generictable, publications, service, pdf},
    data(){return {
			  loadedRatio: 0,
			  page: 1,
			  numPages: 0}},
    computed: {
        cvURL: function(){return this.$store.state.cvURL;},
        pubs: function(){return this.$store.state.pubs;},
        pres: function(){return this.$store.state.pres;},
        courses: function(){return this.$store.state.courses;},
        misc: function(){return this.$store.state.misc;},
        basics: function(){return this.$store.state.basics;},
        svc: function(){return this.$store.state.svc;},
        awards: function(){return this.$store.state.awards;},
        cvbin: function(){return {data: atob(this.$store.state.cvURL.replace("data:application/pdf;base64,", ""))};}
    }
}

</script>

<style>

  </style>

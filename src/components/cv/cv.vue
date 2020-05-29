

<template>
<div class="textcontainer">

        <div>

        <h1>Paul Gowder: CV</h1>
        <p><a :href="cvURL" download="gowdercv.pdf"><img src="../../assets/icons/file-pdf.svg" class="cvicon"> Download in PDF</a></p>

        <h2>Academic Positions</h2>

        <p>2020- <b>Professor of Law</b>, Northwestern University
        </p>

        <p>2012-2020 <b>Professor of Law and (2019-) O.K. Patton Fellow in Law</b>, University of Iowa
          <ul>
            <li>pre-tenure associate professor 2012-7, tenured and promoted to full 2017
            <li>courtesy appointments in political science (2012-20), philosophy (2016-20)</li>
          </ul>
        </p>


        <p>Fall 2019 <b>Visiting Professor of Law</b>, Boston University</p>


        <h2>Education</h2>
        <p>2012 <b>Ph.D., Political Science</b>, Stanford University</p>
        <p>2000 <b>J.D.</b>, Harvard Law School</p>
        <p>1997 <b>B.A., Political Science</b>, California State University Los Angeles</p>


        <publications :pubs="pubs"></publications>

        <h2>Grants, Awards and Honors</h2>

            <table>
        <col style="width:20%">
        <col style="width:80%">

        <tr v-for="aw in awards">
          <td>{{ aw.year }}</td> <td>{{ aw.award }}</td>
        </tr>
        </table>

            <h2>Presentations</h2>

            <presentations header="Invited Talks" :presentationlist="pres.invited"></presentations>
            <presentations header="Conference Presentations" :presentationlist="pres.conferences"></presentations>
            <presentations header="Campus Talks" :presentationlist="pres.campus"></presentations>

            <h2>Teaching</h2>
            <teaching header="Lead Instructor" :classlist="courses.lead"></teaching>

<p>Graduate School teaching assistantships ommitted for brevity, but included courses on introductory political philosophy, global justice, the philosophy of race, and corruption.</p>

        <h2>Legal Practice</h2>

            <table>
        <col style="width:10%">
        <col style="width:40%">
        <col style="width:40%">

        <tr v-for="prac in misc.practice">
          <td>{{ prac.years }}</td> <td>{{ prac.employer }}</td><td>{{ prac.role }}</td>
        </tr>
        </table>


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

</template>

<script>

function chron(a, b){
    if(a.year >= b.year) return -1;
    return 1;
}


import presentations from "./presentations.vue";
import teaching from "./teaching.vue";
import generictable from "./generictable.vue";
import publications from "./publications.vue";
import service from "./service.vue";

export default {
    components: {presentations, teaching, generictable, publications, service},
    computed: {
        cvURL: function(){return this.$store.state.cvURL;},
        pubs: function(){return this.$store.state.pubs;},
        pres: function(){return this.$store.state.pres;},
        courses: function(){return this.$store.state.courses;},
        misc: function(){return this.$store.state.misc;},
        basics: function(){return this.$store.state.basics;},
        svc: function(){return this.$store.state.svc;},
        awards: function(){return this.$store.state.awards;},
        practice: function(){return this.misc.practice.sort(chron);}
    }
}

</script>

<style>

  </style>

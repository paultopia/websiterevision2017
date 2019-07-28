// fire up vuex

import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

// get my external data in

import pubs from './assets/json/publications.json';
import pres from './assets/json/presentations.json';
import courses from './assets/json/courses.json';
import misc from './assets/json/misc.json';
import basics from './assets/json/basic.json';
import svc from './assets/json/service.json';
import commentary from './assets/json/commentary.json';
import bbabbrv from './assets/json/bbtables.json';
import awards from './assets/json/awards.json';
import cvURL from './assets/pdf/gowdercv.pdf';



import augment from "./citeformats.js";
const augmented = pubs.map(pub => augment(pub, bbabbrv))


// load up the state object

var currentView = "navigation";
var citeFormat = "Chicago"
var lastView = null;
var typerOn = true;
var citeText = {};

var state = {currentView,
             citeFormat,
             lastView,
             typerOn,
             pubs,
             pres,
             courses,
             misc,
             basics,
             svc,
             commentary,
             bbabbrv,
             awards,
             cvURL,
             citeText,
             augmented};

const legitPages = new Set(["navigation", "bio", "pubs", "cv", "tech", "writing", "contact"]);

var mutations = {
    navigate(state, view){
    if (state.currentView !== "tldr"){
        state.lastView = state.currentView;}
        state.currentView = view;},
    changeCitation(state, newFormat){state.citeFormat = newFormat;},
    changeCitationText(state, inobj){
        Vue.set(state.citeText, inobj.title, inobj.text);},
    urlNavigate(){
       var derlocation = window.location.href.split("#").pop()
       if (derlocation){
          if (legitPages.has(derlocation))
           {
            state.lastView = state.currentView;
            state.currentView = derlocation;
           }}},
    typerOff(){state.typerOn = false;}};

// this one is just for debugging

var getters = {logState (state) {console.log(JSON.stringify(state));}}

export default new Vuex.Store({
    state,
    mutations,
    getters
})

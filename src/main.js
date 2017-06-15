// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import App from './App';

import VueTyperPlugin from 'vue-typer'; // maybe this goes into nav component?!
Vue.use(VueTyperPlugin);

// get the store in...
import store from "./state.js";


Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
  template: '<App/>',
  components: { App }
})

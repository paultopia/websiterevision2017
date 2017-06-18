var nav = {
    props: ["icon", "word", "toggle"],
    methods: {
	      navto: function(){this.$store.commit('navigate', this.toggle)},
        iconPath: function(nom){return require("./assets/icons/" + nom + ".svg")} // see "getting asset path in javascript" in docs here. http://vuejs-templates.github.io/webpack/static.html  If this doesn't work right, I can always switch to just requiring them in state.js and getting the URLs from the store with vuex.
    },
    computed: {
	    isActive: function(){return this.$store.state.currentView == this.toggle ? "greyedout" : "live";}
    }
};

export default {nav}

// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('bayesruleslider.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
bayesruleslider.core.posterior_b_given_a = (function bayesruleslider$core$posterior_b_given_a(a_given_b,prior_b,prior_a){
return ((a_given_b * prior_b) / prior_a);
});
bayesruleslider.core.total_probability_rule = (function bayesruleslider$core$total_probability_rule(prob_true,prob_positive_test_if_true,prob_positive_test_if_false){
var prob_false = ((1) - prob_true);
return ((prob_true * prob_positive_test_if_true) + (prob_false * prob_positive_test_if_false));
});
bayesruleslider.core.calculate_test = (function bayesruleslider$core$calculate_test(false_positive,false_negative,base_rate){
var true_positive = ((1) - false_negative);
var prior_positive = bayesruleslider.core.total_probability_rule(base_rate,true_positive,false_positive);
return bayesruleslider.core.posterior_b_given_a(true_positive,base_rate,prior_positive);
});
bayesruleslider.core.round = (function bayesruleslider$core$round(value,places){
var multiplier = Math.pow((10),places);
var raised = (value * multiplier);
return (Math.round(raised) / multiplier);
});
bayesruleslider.core.test_params = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$false_DASH_positive,0.05,cljs.core.cst$kw$false_DASH_negative,0.05,cljs.core.cst$kw$base_DASH_rate,0.02], null));
bayesruleslider.core.slider = (function bayesruleslider$core$slider(param,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$type,"range",cljs.core.cst$kw$value,value,cljs.core.cst$kw$min,(0),cljs.core.cst$kw$max,(1),cljs.core.cst$kw$step,0.01,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null),cljs.core.cst$kw$on_DASH_change,(function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(bayesruleslider.core.test_params,cljs.core.assoc,param,e.target.value);
})], null)], null);
});
bayesruleslider.core.calculator_component = (function bayesruleslider$core$calculator_component(){
var map__26409 = cljs.core.deref(bayesruleslider.core.test_params);
var map__26409__$1 = (((((!((map__26409 == null))))?(((((map__26409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26409):map__26409);
var false_positive = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26409__$1,cljs.core.cst$kw$false_DASH_positive);
var false_negative = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26409__$1,cljs.core.cst$kw$false_DASH_negative);
var base_rate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26409__$1,cljs.core.cst$kw$base_DASH_rate);
var posterior = bayesruleslider.core.calculate_test(false_positive,false_negative,base_rate);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"False Positive Rate: ",false_positive,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bayesruleslider.core.slider,cljs.core.cst$kw$false_DASH_positive,false_positive], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"False Negative Rate: ",false_negative,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bayesruleslider.core.slider,cljs.core.cst$kw$false_DASH_negative,false_negative], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Base Rate: ",base_rate,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bayesruleslider.core.slider,cljs.core.cst$kw$base_DASH_rate,base_rate], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Probability of true condition given positive test result: ",bayesruleslider.core.round(posterior,(3))], null)], null);
});
bayesruleslider.core.home_page = (function bayesruleslider$core$home_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Bayes Rule Test Result Calculator"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"To build a little bit more intuition for what's going on here, you can use the sliders below to calculate our posteriors on the test given specified error rates for false positives (what proportion of the time the test sees a sober person and says drunk), false negatives (what proprtion of the time the test sees a drunk person and says sober), and base rate (our prior). Note that the test defaults to the example we worked through above.  Change the parameters and see what happens!"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bayesruleslider.core.calculator_component], null)], null);
});
bayesruleslider.core.mount_root = (function bayesruleslider$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bayesruleslider.core.home_page], null),document.getElementById("app"));
});
bayesruleslider.core.init_BANG_ = (function bayesruleslider$core$init_BANG_(){
return bayesruleslider.core.mount_root();
});

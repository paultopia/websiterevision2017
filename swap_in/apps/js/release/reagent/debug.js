// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__28366__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__28366 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28367__i = 0, G__28367__a = new Array(arguments.length -  0);
while (G__28367__i < G__28367__a.length) {G__28367__a[G__28367__i] = arguments[G__28367__i + 0]; ++G__28367__i;}
  args = new cljs.core.IndexedSeq(G__28367__a,0,null);
} 
return G__28366__delegate.call(this,args);};
G__28366.cljs$lang$maxFixedArity = 0;
G__28366.cljs$lang$applyTo = (function (arglist__28368){
var args = cljs.core.seq(arglist__28368);
return G__28366__delegate(args);
});
G__28366.cljs$core$IFn$_invoke$arity$variadic = G__28366__delegate;
return G__28366;
})()
);

(o.error = (function() { 
var G__28369__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__28369 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28370__i = 0, G__28370__a = new Array(arguments.length -  0);
while (G__28370__i < G__28370__a.length) {G__28370__a[G__28370__i] = arguments[G__28370__i + 0]; ++G__28370__i;}
  args = new cljs.core.IndexedSeq(G__28370__a,0,null);
} 
return G__28369__delegate.call(this,args);};
G__28369.cljs$lang$maxFixedArity = 0;
G__28369.cljs$lang$applyTo = (function (arglist__28371){
var args = cljs.core.seq(arglist__28371);
return G__28369__delegate(args);
});
G__28369.cljs$core$IFn$_invoke$arity$variadic = G__28369__delegate;
return G__28369;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

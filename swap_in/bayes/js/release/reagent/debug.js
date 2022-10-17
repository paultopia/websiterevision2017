// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
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
o.warn = ((function (o){
return (function() { 
var G__25921__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__25921 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25922__i = 0, G__25922__a = new Array(arguments.length -  0);
while (G__25922__i < G__25922__a.length) {G__25922__a[G__25922__i] = arguments[G__25922__i + 0]; ++G__25922__i;}
  args = new cljs.core.IndexedSeq(G__25922__a,0,null);
} 
return G__25921__delegate.call(this,args);};
G__25921.cljs$lang$maxFixedArity = 0;
G__25921.cljs$lang$applyTo = (function (arglist__25923){
var args = cljs.core.seq(arglist__25923);
return G__25921__delegate(args);
});
G__25921.cljs$core$IFn$_invoke$arity$variadic = G__25921__delegate;
return G__25921;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__25924__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__25924 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25925__i = 0, G__25925__a = new Array(arguments.length -  0);
while (G__25925__i < G__25925__a.length) {G__25925__a[G__25925__i] = arguments[G__25925__i + 0]; ++G__25925__i;}
  args = new cljs.core.IndexedSeq(G__25925__a,0,null);
} 
return G__25924__delegate.call(this,args);};
G__25924.cljs$lang$maxFixedArity = 0;
G__25924.cljs$lang$applyTo = (function (arglist__25926){
var args = cljs.core.seq(arglist__25926);
return G__25924__delegate(args);
});
G__25924.cljs$core$IFn$_invoke$arity$variadic = G__25924__delegate;
return G__25924;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('apps.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
apps.core.home_page = (function apps$core$home_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Test: try this later."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"This is currently a stub, I'm testing building some cljs code into my automatic website deploy."], null)], null);
});
apps.core.mount_root = (function apps$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [apps.core.home_page], null),document.getElementById("app"));
});
apps.core.init_BANG_ = (function apps$core$init_BANG_(){
return apps.core.mount_root();
});

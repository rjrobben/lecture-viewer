// Compiled by ClojureScript 1.11.132 {:static-fns true, :optimize-constants true, :optimizations :advanced}
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
var G__11640__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__11640 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11641__i = 0, G__11641__a = new Array(arguments.length -  0);
while (G__11641__i < G__11641__a.length) {G__11641__a[G__11641__i] = arguments[G__11641__i + 0]; ++G__11641__i;}
  args = new cljs.core.IndexedSeq(G__11641__a,0,null);
} 
return G__11640__delegate.call(this,args);};
G__11640.cljs$lang$maxFixedArity = 0;
G__11640.cljs$lang$applyTo = (function (arglist__11642){
var args = cljs.core.seq(arglist__11642);
return G__11640__delegate(args);
});
G__11640.cljs$core$IFn$_invoke$arity$variadic = G__11640__delegate;
return G__11640;
})()
);

(o.error = (function() { 
var G__11643__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__11643 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11644__i = 0, G__11644__a = new Array(arguments.length -  0);
while (G__11644__i < G__11644__a.length) {G__11644__a[G__11644__i] = arguments[G__11644__i + 0]; ++G__11644__i;}
  args = new cljs.core.IndexedSeq(G__11644__a,0,null);
} 
return G__11643__delegate.call(this,args);};
G__11643.cljs$lang$maxFixedArity = 0;
G__11643.cljs$lang$applyTo = (function (arglist__11645){
var args = cljs.core.seq(arglist__11645);
return G__11643__delegate(args);
});
G__11643.cljs$core$IFn$_invoke$arity$variadic = G__11643__delegate;
return G__11643;
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

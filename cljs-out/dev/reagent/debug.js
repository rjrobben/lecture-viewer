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
var G__14452__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__14452 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14453__i = 0, G__14453__a = new Array(arguments.length -  0);
while (G__14453__i < G__14453__a.length) {G__14453__a[G__14453__i] = arguments[G__14453__i + 0]; ++G__14453__i;}
  args = new cljs.core.IndexedSeq(G__14453__a,0,null);
} 
return G__14452__delegate.call(this,args);};
G__14452.cljs$lang$maxFixedArity = 0;
G__14452.cljs$lang$applyTo = (function (arglist__14454){
var args = cljs.core.seq(arglist__14454);
return G__14452__delegate(args);
});
G__14452.cljs$core$IFn$_invoke$arity$variadic = G__14452__delegate;
return G__14452;
})()
);

(o.error = (function() { 
var G__14455__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__14455 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14456__i = 0, G__14456__a = new Array(arguments.length -  0);
while (G__14456__i < G__14456__a.length) {G__14456__a[G__14456__i] = arguments[G__14456__i + 0]; ++G__14456__i;}
  args = new cljs.core.IndexedSeq(G__14456__a,0,null);
} 
return G__14455__delegate.call(this,args);};
G__14455.cljs$lang$maxFixedArity = 0;
G__14455.cljs$lang$applyTo = (function (arglist__14457){
var args = cljs.core.seq(arglist__14457);
return G__14455__delegate(args);
});
G__14455.cljs$core$IFn$_invoke$arity$variadic = G__14455__delegate;
return G__14455;
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

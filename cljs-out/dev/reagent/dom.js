// Compiled by ClojureScript 1.11.132 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__13519 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__13520 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__13520);

try{var G__13521 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__13522 = container;
var G__13523 = (function (){
var _STAR_always_update_STAR__orig_val__13524 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__13525 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__13525);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__13524);
}});
return reagent.dom.global$module$react_dom.render(G__13521,G__13522,G__13523);
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__13519);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__13527 = arguments.length;
switch (G__13527) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template._STAR_current_default_compiler_STAR_);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__13528 = ((cljs.core.map_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$compiler.cljs$core$IFn$_invoke$arity$1(callback_or_compiler),cljs.core.cst$kw$callback.cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null):((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template._STAR_current_default_compiler_STAR_,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,null], null)
));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13528,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13528,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__13532_13548 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__13533_13549 = null;
var count__13534_13550 = (0);
var i__13535_13551 = (0);
while(true){
if((i__13535_13551 < count__13534_13550)){
var vec__13542_13552 = chunk__13533_13549.cljs$core$IIndexed$_nth$arity$2(null,i__13535_13551);
var container_13553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13542_13552,(0),null);
var comp_13554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13542_13552,(1),null);
reagent.dom.re_render_component(comp_13554,container_13553);


var G__13555 = seq__13532_13548;
var G__13556 = chunk__13533_13549;
var G__13557 = count__13534_13550;
var G__13558 = (i__13535_13551 + (1));
seq__13532_13548 = G__13555;
chunk__13533_13549 = G__13556;
count__13534_13550 = G__13557;
i__13535_13551 = G__13558;
continue;
} else {
var temp__5823__auto___13559 = cljs.core.seq(seq__13532_13548);
if(temp__5823__auto___13559){
var seq__13532_13560__$1 = temp__5823__auto___13559;
if(cljs.core.chunked_seq_QMARK_(seq__13532_13560__$1)){
var c__5525__auto___13561 = cljs.core.chunk_first(seq__13532_13560__$1);
var G__13562 = cljs.core.chunk_rest(seq__13532_13560__$1);
var G__13563 = c__5525__auto___13561;
var G__13564 = cljs.core.count(c__5525__auto___13561);
var G__13565 = (0);
seq__13532_13548 = G__13562;
chunk__13533_13549 = G__13563;
count__13534_13550 = G__13564;
i__13535_13551 = G__13565;
continue;
} else {
var vec__13545_13566 = cljs.core.first(seq__13532_13560__$1);
var container_13567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13545_13566,(0),null);
var comp_13568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13545_13566,(1),null);
reagent.dom.re_render_component(comp_13568,container_13567);


var G__13569 = cljs.core.next(seq__13532_13560__$1);
var G__13570 = null;
var G__13571 = (0);
var G__13572 = (0);
seq__13532_13548 = G__13569;
chunk__13533_13549 = G__13570;
count__13534_13550 = G__13571;
i__13535_13551 = G__13572;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

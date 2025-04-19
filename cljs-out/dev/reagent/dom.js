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
var _STAR_always_update_STAR__orig_val__15468 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__15469 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__15469);

try{var G__15470 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__15471 = container;
var G__15472 = (function (){
var _STAR_always_update_STAR__orig_val__15473 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__15474 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__15474);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__15473);
}});
return reagent.dom.global$module$react_dom.render(G__15470,G__15471,G__15472);
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__15468);
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
var G__15476 = arguments.length;
switch (G__15476) {
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

var vec__15477 = ((cljs.core.map_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$compiler.cljs$core$IFn$_invoke$arity$1(callback_or_compiler),cljs.core.cst$kw$callback.cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null):((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template._STAR_current_default_compiler_STAR_,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,null], null)
));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15477,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15477,(1),null);
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

var seq__15481_15497 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__15482_15498 = null;
var count__15483_15499 = (0);
var i__15484_15500 = (0);
while(true){
if((i__15484_15500 < count__15483_15499)){
var vec__15491_15501 = chunk__15482_15498.cljs$core$IIndexed$_nth$arity$2(null,i__15484_15500);
var container_15502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15491_15501,(0),null);
var comp_15503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15491_15501,(1),null);
reagent.dom.re_render_component(comp_15503,container_15502);


var G__15504 = seq__15481_15497;
var G__15505 = chunk__15482_15498;
var G__15506 = count__15483_15499;
var G__15507 = (i__15484_15500 + (1));
seq__15481_15497 = G__15504;
chunk__15482_15498 = G__15505;
count__15483_15499 = G__15506;
i__15484_15500 = G__15507;
continue;
} else {
var temp__5823__auto___15508 = cljs.core.seq(seq__15481_15497);
if(temp__5823__auto___15508){
var seq__15481_15509__$1 = temp__5823__auto___15508;
if(cljs.core.chunked_seq_QMARK_(seq__15481_15509__$1)){
var c__5525__auto___15510 = cljs.core.chunk_first(seq__15481_15509__$1);
var G__15511 = cljs.core.chunk_rest(seq__15481_15509__$1);
var G__15512 = c__5525__auto___15510;
var G__15513 = cljs.core.count(c__5525__auto___15510);
var G__15514 = (0);
seq__15481_15497 = G__15511;
chunk__15482_15498 = G__15512;
count__15483_15499 = G__15513;
i__15484_15500 = G__15514;
continue;
} else {
var vec__15494_15515 = cljs.core.first(seq__15481_15509__$1);
var container_15516 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15494_15515,(0),null);
var comp_15517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15494_15515,(1),null);
reagent.dom.re_render_component(comp_15517,container_15516);


var G__15518 = cljs.core.next(seq__15481_15509__$1);
var G__15519 = null;
var G__15520 = (0);
var G__15521 = (0);
seq__15481_15497 = G__15518;
chunk__15482_15498 = G__15519;
count__15483_15499 = G__15520;
i__15484_15500 = G__15521;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

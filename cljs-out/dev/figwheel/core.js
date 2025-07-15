// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('figwheel.core');
goog.require('cljs.core');
goog.require('figwheel.tools.heads_up');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.log');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('goog.debug.Console');
goog.require('goog.async.Deferred');
goog.require('goog.Promise');
goog.require('goog.events.EventTarget');
goog.require('goog.events.Event');
goog.require('goog.object');
goog.scope(function(){
figwheel.core.goog$module$goog$object = goog.module.get('goog.object');
});
figwheel.core.distinct_by = (function figwheel$core$distinct_by(f,coll){
var seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.filter.call(null,(function (p1__30123_SHARP_){
var k = f.call(null,p1__30123_SHARP_);
var res = cljs.core.not.call(null,cljs.core.deref.call(null,seen).call(null,k));
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),k));

return res;
}),coll);
});
figwheel.core.map_keys = (function figwheel$core$map_keys(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__30124){
var vec__30125 = p__30124;
var k = cljs.core.nth.call(null,vec__30125,(0),null);
var v = cljs.core.nth.call(null,vec__30125,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null);
})),coll);
});
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (80);
figwheel.core.wrap_line = (function figwheel$core$wrap_line(text,size){
return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[".{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}\\s|.{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}"].join('')),[clojure.string.replace.call(null,text,/\n/," ")," "].join(''));
});
figwheel.core.cross_format = (function figwheel$core$cross_format(var_args){
var args__5732__auto__ = [];
var len__5726__auto___30129 = arguments.length;
var i__5727__auto___30130 = (0);
while(true){
if((i__5727__auto___30130 < len__5726__auto___30129)){
args__5732__auto__.push((arguments[i__5727__auto___30130]));

var G__30131 = (i__5727__auto___30130 + (1));
i__5727__auto___30130 = G__30131;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,goog.string.format,args);
}));

(figwheel.core.cross_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.core.cross_format.cljs$lang$applyTo = (function (seq30128){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30128));
}));

figwheel.core.pointer_message_lines = (function figwheel$core$pointer_message_lines(p__30134){
var map__30135 = p__30134;
var map__30135__$1 = cljs.core.__destructure_map.call(null,map__30135);
var message = cljs.core.get.call(null,map__30135__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var column = cljs.core.get.call(null,map__30135__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(((column + cljs.core.count.call(null,message)) > figwheel.core._STAR_inline_code_message_max_column_STAR_)){
return cljs.core.mapv.call(null,(function (p1__30133_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30133_SHARP_], null)));
}),cljs.core.cons.call(null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s"].join('');
})(),"","^---"),cljs.core.map.call(null,(function (p1__30132_SHARP_){
return figwheel.core.cross_format.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core._STAR_inline_code_message_max_column_STAR_),"s"].join(''),p1__30132_SHARP_);
}),figwheel.core.wrap_line.call(null,message,(figwheel.core._STAR_inline_code_message_max_column_STAR_ - (10))))));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s %s"].join('');
})(),"","^---",message)], null)], null);
}
});
figwheel.core.inline_message_display_data = (function figwheel$core$inline_message_display_data(p__30137){
var map__30138 = p__30137;
var map__30138__$1 = cljs.core.__destructure_map.call(null,map__30138);
var message_data = map__30138__$1;
var message = cljs.core.get.call(null,map__30138__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.call(null,map__30138__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__30138__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file_excerpt = cljs.core.get.call(null,map__30138__$1,new cljs.core.Keyword(null,"file-excerpt","file-excerpt",-1132330744));
if(cljs.core.truth_(file_excerpt)){
var map__30139 = file_excerpt;
var map__30139__$1 = cljs.core.__destructure_map.call(null,map__30139);
var start_line = cljs.core.get.call(null,map__30139__$1,new cljs.core.Keyword(null,"start-line","start-line",-41746654));
var path = cljs.core.get.call(null,map__30139__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var excerpt = cljs.core.get.call(null,map__30139__$1,new cljs.core.Keyword(null,"excerpt","excerpt",219850763));
var lines = cljs.core.map_indexed.call(null,(function (i,l){
var ln = (i + start_line);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,line,ln))?new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357):new cljs.core.Keyword(null,"code-line","code-line",-2138627853)),ln,l],null));
}),clojure.string.split_lines.call(null,excerpt));
var vec__30140 = cljs.core.split_with.call(null,(function (p1__30136_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),cljs.core.first.call(null,p1__30136_SHARP_));
}),lines);
var begin = cljs.core.nth.call(null,vec__30140,(0),null);
var end = cljs.core.nth.call(null,vec__30140,(1),null);
return cljs.core.concat.call(null,cljs.core.take_last.call(null,(5),begin),cljs.core.take.call(null,(1),end),figwheel.core.pointer_message_lines.call(null,message_data),cljs.core.take.call(null,(5),cljs.core.rest.call(null,end)));
} else {
return null;
}
});
figwheel.core.file_line_column = (function figwheel$core$file_line_column(p__30143){
var map__30144 = p__30143;
var map__30144__$1 = cljs.core.__destructure_map.call(null,map__30144);
var file = cljs.core.get.call(null,map__30144__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__30144__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__30144__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__30145 = "";
var G__30145__$1 = (cljs.core.truth_(file)?[G__30145,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__30145);
var G__30145__$2 = (cljs.core.truth_(line)?[G__30145__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__30145__$1);
if(cljs.core.truth_((function (){var and__5000__auto__ = line;
if(cljs.core.truth_(and__5000__auto__)){
return column;
} else {
return and__5000__auto__;
}
})())){
return [G__30145__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__30145__$2;
}
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.logger !== 'undefined')){
} else {
figwheel.core.logger = goog.log.getLogger.call(null,"Figwheel");
}

figwheel.core.glog_info = (function figwheel$core$glog_info(log,msg){
return goog.log.info.call(null,log,msg);
});

figwheel.core.glog_warning = (function figwheel$core$glog_warning(log,msg){
return goog.log.warning.call(null,log,msg);
});

figwheel.core.glog_error = (function figwheel$core$glog_error(log,msg){
return goog.log.error.call(null,log,msg);
});

figwheel.core.console_logging = (function figwheel$core$console_logging(){
if(cljs.core.truth_(figwheel.core.goog$module$goog$object.get.call(null,goog.debug.Console,"instance"))){
} else {
var c_30203 = (new goog.debug.Console());
var G__30152_30204 = c_30203.getFormatter();
figwheel.core.goog$module$goog$object.set.call(null,G__30152_30204,"showAbsoluteTime",false);

figwheel.core.goog$module$goog$object.set.call(null,G__30152_30204,"showRelativeTime",false);


figwheel.core.goog$module$goog$object.set.call(null,goog.debug.Console,"instance",c_30203);

}

var temp__5823__auto__ = figwheel.core.goog$module$goog$object.get.call(null,goog.debug.Console,"instance");
if(cljs.core.truth_(temp__5823__auto__)){
var console_instance = temp__5823__auto__;
console_instance.setCapturing(true);

return true;
} else {
return null;
}
});
goog.exportSymbol('figwheel.core.console_logging', figwheel.core.console_logging);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.log_console !== 'undefined')){
} else {
figwheel.core.log_console = figwheel.core.console_logging.call(null);
}

figwheel.core.event_target = (((typeof document !== 'undefined'))?document:(new goog.events.EventTarget()));
goog.exportSymbol('figwheel.core.event_target', figwheel.core.event_target);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.listener_key_map !== 'undefined')){
} else {
figwheel.core.listener_key_map = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}

figwheel.core.unlisten = (function figwheel$core$unlisten(ky,event_name){
var temp__5823__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.core.listener_key_map),ky);
if(cljs.core.truth_(temp__5823__auto__)){
var f = temp__5823__auto__;
return figwheel.core.event_target.removeEventListener(cljs.core.name.call(null,event_name),f);
} else {
return null;
}
});

figwheel.core.listen = (function figwheel$core$listen(ky,event_name,f){
figwheel.core.unlisten.call(null,ky,event_name);

figwheel.core.event_target.addEventListener(cljs.core.name.call(null,event_name),f);

return cljs.core.swap_BANG_.call(null,figwheel.core.listener_key_map,cljs.core.assoc,ky,f);
});

figwheel.core.dispatch_event = (function figwheel$core$dispatch_event(event_name,data){
return figwheel.core.event_target.dispatchEvent((function (){var G__30153 = (((figwheel.core.event_target instanceof goog.events.EventTarget))?(new goog.events.Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)):(new Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)));
figwheel.core.goog$module$goog$object.add.call(null,G__30153,"data",(function (){var or__5002__auto__ = data;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return G__30153;
})());
});

figwheel.core.event_data = (function figwheel$core$event_data(e){
return figwheel.core.goog$module$goog$object.get.call(null,(function (){var temp__5821__auto__ = e.event_;
if(cljs.core.truth_(temp__5821__auto__)){
var e__$1 = temp__5821__auto__;
return e__$1;
} else {
return e;
}
})(),"data");
});


/**
 * @define {boolean}
 */
figwheel.core.load_warninged_code = goog.define("figwheel.core.load_warninged_code",false);


/**
 * @define {boolean}
 */
figwheel.core.heads_up_display = goog.define("figwheel.core.heads_up_display",true);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.state !== 'undefined')){
} else {
figwheel.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY], null));
}

figwheel.core.heads_up_display_QMARK_ = (function figwheel$core$heads_up_display_QMARK_(){
var and__5000__auto__ = figwheel.core.heads_up_display;
if(cljs.core.truth_(and__5000__auto__)){
return (!((goog.global.document == null)));
} else {
return and__5000__auto__;
}
});

var last_reload_timestamp_30205 = cljs.core.atom.call(null,(0));
var promise_chain_30206 = (new goog.Promise((function (r,_){
return r.call(null,true);
})));
figwheel.core.render_watcher = (function figwheel$core$render_watcher(_,___$1,o,n){
if(cljs.core.truth_(figwheel.core.heads_up_display_QMARK_.call(null))){
var temp__5821__auto__ = (function (){var temp__5823__auto__ = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null));
if(cljs.core.truth_(temp__5823__auto__)){
var ts = temp__5823__auto__;
var and__5000__auto__ = (cljs.core.deref.call(null,last_reload_timestamp_30205) < ts);
if(and__5000__auto__){
return ts;
} else {
return and__5000__auto__;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5821__auto__)){
var ts = temp__5821__auto__;
var warnings = cljs.core.not_empty.call(null,cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
var exception = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null));
cljs.core.reset_BANG_.call(null,last_reload_timestamp_30205,ts);

if(cljs.core.truth_(warnings)){
return promise_chain_30206.then((function (){
var warn = cljs.core.first.call(null,warnings);
var _STAR_inline_code_message_max_column_STAR__orig_val__30154 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__30155 = (132);
(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__30155);

try{return figwheel.tools.heads_up.display_warning.call(null,cljs.core.assoc.call(null,warn,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,warn))).then((function (){
var seq__30156 = cljs.core.seq.call(null,cljs.core.rest.call(null,warnings));
var chunk__30157 = null;
var count__30158 = (0);
var i__30159 = (0);
while(true){
if((i__30159 < count__30158)){
var w = cljs.core._nth.call(null,chunk__30157,i__30159);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__30207 = seq__30156;
var G__30208 = chunk__30157;
var G__30209 = count__30158;
var G__30210 = (i__30159 + (1));
seq__30156 = G__30207;
chunk__30157 = G__30208;
count__30158 = G__30209;
i__30159 = G__30210;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq.call(null,seq__30156);
if(temp__5823__auto__){
var seq__30156__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30156__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__30156__$1);
var G__30211 = cljs.core.chunk_rest.call(null,seq__30156__$1);
var G__30212 = c__5525__auto__;
var G__30213 = cljs.core.count.call(null,c__5525__auto__);
var G__30214 = (0);
seq__30156 = G__30211;
chunk__30157 = G__30212;
count__30158 = G__30213;
i__30159 = G__30214;
continue;
} else {
var w = cljs.core.first.call(null,seq__30156__$1);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__30215 = cljs.core.next.call(null,seq__30156__$1);
var G__30216 = null;
var G__30217 = (0);
var G__30218 = (0);
seq__30156 = G__30215;
chunk__30157 = G__30216;
count__30158 = G__30217;
i__30159 = G__30218;
continue;
}
} else {
return null;
}
}
break;
}
}));
}finally {(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__30154);
}}));
} else {
if(cljs.core.truth_(exception)){
return promise_chain_30206.then((function (){
var _STAR_inline_code_message_max_column_STAR__orig_val__30160 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__30161 = (132);
(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__30161);

try{return figwheel.tools.heads_up.display_exception.call(null,cljs.core.assoc.call(null,exception,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,exception)));
}finally {(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__30160);
}}));
} else {
return promise_chain_30206.then((function (){
return figwheel.tools.heads_up.flash_loaded.call(null);
}));

}
}
} else {
return null;
}
} else {
return null;
}
});

cljs.core.add_watch.call(null,figwheel.core.state,new cljs.core.Keyword("figwheel.core","render-watcher","figwheel.core/render-watcher",2046135910),figwheel.core.render_watcher);

figwheel.core.immutable_ns_QMARK_ = (function figwheel$core$immutable_ns_QMARK_(ns){
var ns__$1 = cljs.core.name.call(null,ns);
var or__5002__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["cljs.nodejs",null,"goog",null,"figwheel.connect",null,"cljs.core",null,"figwheel.preload",null], null), null).call(null,ns__$1);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return ((goog.string.startsWith("clojure.",ns__$1)) || (goog.string.startsWith("goog.",ns__$1)));
}
});

figwheel.core.ns_exists_QMARK_ = (function figwheel$core$ns_exists_QMARK_(ns){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,figwheel.core.goog$module$goog$object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,ns),".")) == null)));
});

figwheel.core.reload_ns_QMARK_ = (function figwheel$core$reload_ns_QMARK_(namespace){
var meta_data = cljs.core.meta.call(null,namespace);
var and__5000__auto__ = cljs.core.not.call(null,figwheel.core.immutable_ns_QMARK_.call(null,namespace));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data));
if(and__5000__auto____$1){
var or__5002__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return figwheel.core.ns_exists_QMARK_.call(null,namespace);
}
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
});

figwheel.core.call_hooks = (function figwheel$core$call_hooks(var_args){
var args__5732__auto__ = [];
var len__5726__auto___30219 = arguments.length;
var i__5727__auto___30220 = (0);
while(true){
if((i__5727__auto___30220 < len__5726__auto___30219)){
args__5732__auto__.push((arguments[i__5727__auto___30220]));

var G__30221 = (i__5727__auto___30220 + (1));
i__5727__auto___30220 = G__30221;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (hook_key,args){
var hooks = cljs.core.keep.call(null,(function (p__30164){
var vec__30165 = p__30164;
var n = cljs.core.nth.call(null,vec__30165,(0),null);
var mdata = cljs.core.nth.call(null,vec__30165,(1),null);
var temp__5823__auto__ = cljs.core.get_in.call(null,mdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),hook_key], null));
if(cljs.core.truth_(temp__5823__auto__)){
var f = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,f], null);
} else {
return null;
}
}),new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.core.state)));
var seq__30168 = cljs.core.seq.call(null,hooks);
var chunk__30169 = null;
var count__30170 = (0);
var i__30171 = (0);
while(true){
if((i__30171 < count__30170)){
var vec__30180 = cljs.core._nth.call(null,chunk__30169,i__30171);
var n = cljs.core.nth.call(null,vec__30180,(0),null);
var f = cljs.core.nth.call(null,vec__30180,(1),null);
var temp__5821__auto___30222 = cljs.core.reduce.call(null,((function (seq__30168,chunk__30169,count__30170,i__30171,vec__30180,n,f,hooks){
return (function (p1__30146_SHARP_,p2__30147_SHARP_){
if(cljs.core.truth_(p1__30146_SHARP_)){
return figwheel.core.goog$module$goog$object.get.call(null,p1__30146_SHARP_,p2__30147_SHARP_);
} else {
return null;
}
});})(seq__30168,chunk__30169,count__30170,i__30171,vec__30180,n,f,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5821__auto___30222)){
var hook_30223 = temp__5821__auto___30222;
figwheel.core.glog_info.call(null,figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

try{cljs.core.apply.call(null,hook_30223,args);
}catch (e30183){if((e30183 instanceof Error)){
var e_30224 = e30183;
figwheel.core.glog_error.call(null,figwheel.core.logger,e_30224);
} else {
throw e30183;

}
}} else {
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__30225 = seq__30168;
var G__30226 = chunk__30169;
var G__30227 = count__30170;
var G__30228 = (i__30171 + (1));
seq__30168 = G__30225;
chunk__30169 = G__30226;
count__30170 = G__30227;
i__30171 = G__30228;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq.call(null,seq__30168);
if(temp__5823__auto__){
var seq__30168__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30168__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__30168__$1);
var G__30229 = cljs.core.chunk_rest.call(null,seq__30168__$1);
var G__30230 = c__5525__auto__;
var G__30231 = cljs.core.count.call(null,c__5525__auto__);
var G__30232 = (0);
seq__30168 = G__30229;
chunk__30169 = G__30230;
count__30170 = G__30231;
i__30171 = G__30232;
continue;
} else {
var vec__30184 = cljs.core.first.call(null,seq__30168__$1);
var n = cljs.core.nth.call(null,vec__30184,(0),null);
var f = cljs.core.nth.call(null,vec__30184,(1),null);
var temp__5821__auto___30233 = cljs.core.reduce.call(null,((function (seq__30168,chunk__30169,count__30170,i__30171,vec__30184,n,f,seq__30168__$1,temp__5823__auto__,hooks){
return (function (p1__30146_SHARP_,p2__30147_SHARP_){
if(cljs.core.truth_(p1__30146_SHARP_)){
return figwheel.core.goog$module$goog$object.get.call(null,p1__30146_SHARP_,p2__30147_SHARP_);
} else {
return null;
}
});})(seq__30168,chunk__30169,count__30170,i__30171,vec__30184,n,f,seq__30168__$1,temp__5823__auto__,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5821__auto___30233)){
var hook_30234 = temp__5821__auto___30233;
figwheel.core.glog_info.call(null,figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

try{cljs.core.apply.call(null,hook_30234,args);
}catch (e30187){if((e30187 instanceof Error)){
var e_30235 = e30187;
figwheel.core.glog_error.call(null,figwheel.core.logger,e_30235);
} else {
throw e30187;

}
}} else {
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__30236 = cljs.core.next.call(null,seq__30168__$1);
var G__30237 = null;
var G__30238 = (0);
var G__30239 = (0);
seq__30168 = G__30236;
chunk__30169 = G__30237;
count__30170 = G__30238;
i__30171 = G__30239;
continue;
}
} else {
return null;
}
}
break;
}
}));

(figwheel.core.call_hooks.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(figwheel.core.call_hooks.cljs$lang$applyTo = (function (seq30162){
var G__30163 = cljs.core.first.call(null,seq30162);
var seq30162__$1 = cljs.core.next.call(null,seq30162);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30163,seq30162__$1);
}));


figwheel.core.reload_namespaces = (function figwheel$core$reload_namespaces(namespaces,figwheel_meta){
var figwheel_meta__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__30188){
var vec__30189 = p__30188;
var k = cljs.core.nth.call(null,vec__30189,(0),null);
var v = cljs.core.nth.call(null,vec__30189,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
})),cljs.core.js__GT_clj.call(null,figwheel_meta,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var namespaces__$1 = cljs.core.map.call(null,(function (p1__30148_SHARP_){
return cljs.core.with_meta.call(null,cljs.core.symbol.call(null,p1__30148_SHARP_),cljs.core.get.call(null,figwheel_meta__$1,p1__30148_SHARP_));
}),namespaces);
cljs.core.swap_BANG_.call(null,figwheel.core.state,(function (p1__30149_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,p1__30149_SHARP_,new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885),figwheel_meta__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime());
}));

var to_reload = (cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.not.call(null,figwheel.core.load_warninged_code);
if(and__5000__auto__){
return cljs.core.not_empty.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
} else {
return and__5000__auto__;
}
})())?null:cljs.core.filter.call(null,(function (p1__30150_SHARP_){
return figwheel.core.reload_ns_QMARK_.call(null,p1__30150_SHARP_);
}),namespaces__$1));
if(cljs.core.empty_QMARK_.call(null,to_reload)){
} else {
figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"before-load","before-load",-2060117064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));

setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.before-load","figwheel.before-load",58978771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));
}),(0));
}

var seq__30192_30240 = cljs.core.seq.call(null,to_reload);
var chunk__30193_30241 = null;
var count__30194_30242 = (0);
var i__30195_30243 = (0);
while(true){
if((i__30195_30243 < count__30194_30242)){
var ns_30244 = cljs.core._nth.call(null,chunk__30193_30241,i__30195_30243);
goog.require(cljs.core.name.call(null,ns_30244),true);


var G__30245 = seq__30192_30240;
var G__30246 = chunk__30193_30241;
var G__30247 = count__30194_30242;
var G__30248 = (i__30195_30243 + (1));
seq__30192_30240 = G__30245;
chunk__30193_30241 = G__30246;
count__30194_30242 = G__30247;
i__30195_30243 = G__30248;
continue;
} else {
var temp__5823__auto___30249 = cljs.core.seq.call(null,seq__30192_30240);
if(temp__5823__auto___30249){
var seq__30192_30250__$1 = temp__5823__auto___30249;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30192_30250__$1)){
var c__5525__auto___30251 = cljs.core.chunk_first.call(null,seq__30192_30250__$1);
var G__30252 = cljs.core.chunk_rest.call(null,seq__30192_30250__$1);
var G__30253 = c__5525__auto___30251;
var G__30254 = cljs.core.count.call(null,c__5525__auto___30251);
var G__30255 = (0);
seq__30192_30240 = G__30252;
chunk__30193_30241 = G__30253;
count__30194_30242 = G__30254;
i__30195_30243 = G__30255;
continue;
} else {
var ns_30256 = cljs.core.first.call(null,seq__30192_30250__$1);
goog.require(cljs.core.name.call(null,ns_30256),true);


var G__30257 = cljs.core.next.call(null,seq__30192_30250__$1);
var G__30258 = null;
var G__30259 = (0);
var G__30260 = (0);
seq__30192_30240 = G__30257;
chunk__30193_30241 = G__30258;
count__30194_30242 = G__30259;
i__30195_30243 = G__30260;
continue;
}
} else {
}
}
break;
}

var after_reload_fn_30261 = (function (){
try{if(cljs.core.truth_(cljs.core.not_empty.call(null,to_reload))){
figwheel.core.glog_info.call(null,figwheel.core.logger,["loaded ",cljs.core.pr_str.call(null,to_reload)].join(''));

figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"after-load","after-load",-1278503285),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));

figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.after-load","figwheel.after-load",-1913099389),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));
} else {
}

var temp__5823__auto__ = cljs.core.not_empty.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.set.call(null,to_reload)),namespaces__$1));
if(cljs.core.truth_(temp__5823__auto__)){
var not_loaded = temp__5823__auto__;
return figwheel.core.glog_info.call(null,figwheel.core.logger,["did not load ",cljs.core.pr_str.call(null,not_loaded)].join(''));
} else {
return null;
}
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc,new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY);
}});
if((((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined')) && ((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.after_reloads !== 'undefined')))){
figwheel.repl.after_reloads(after_reload_fn_30261);
} else {
setTimeout(after_reload_fn_30261,(100));
}

return null;
});
goog.exportSymbol('figwheel.core.reload_namespaces', figwheel.core.reload_namespaces);

figwheel.core.compile_warnings = (function figwheel$core$compile_warnings(warnings){
if(cljs.core.empty_QMARK_.call(null,warnings)){
} else {
setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-warnings","figwheel.compile-warnings",-2015032448),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"warnings","warnings",-735437651),warnings], null));
}),(0));
}

cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null),cljs.core.concat,warnings);

var seq__30196 = cljs.core.seq.call(null,warnings);
var chunk__30197 = null;
var count__30198 = (0);
var i__30199 = (0);
while(true){
if((i__30199 < count__30198)){
var warning = cljs.core._nth.call(null,chunk__30197,i__30199);
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__30262 = seq__30196;
var G__30263 = chunk__30197;
var G__30264 = count__30198;
var G__30265 = (i__30199 + (1));
seq__30196 = G__30262;
chunk__30197 = G__30263;
count__30198 = G__30264;
i__30199 = G__30265;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq.call(null,seq__30196);
if(temp__5823__auto__){
var seq__30196__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30196__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__30196__$1);
var G__30266 = cljs.core.chunk_rest.call(null,seq__30196__$1);
var G__30267 = c__5525__auto__;
var G__30268 = cljs.core.count.call(null,c__5525__auto__);
var G__30269 = (0);
seq__30196 = G__30266;
chunk__30197 = G__30267;
count__30198 = G__30268;
i__30199 = G__30269;
continue;
} else {
var warning = cljs.core.first.call(null,seq__30196__$1);
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__30270 = cljs.core.next.call(null,seq__30196__$1);
var G__30271 = null;
var G__30272 = (0);
var G__30273 = (0);
seq__30196 = G__30270;
chunk__30197 = G__30271;
count__30198 = G__30272;
i__30199 = G__30273;
continue;
}
} else {
return null;
}
}
break;
}
});
goog.exportSymbol('figwheel.core.compile_warnings', figwheel.core.compile_warnings);

figwheel.core.compile_warnings_remote = (function figwheel$core$compile_warnings_remote(warnings_json){
return figwheel.core.compile_warnings.call(null,cljs.core.js__GT_clj.call(null,warnings_json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.compile_warnings_remote', figwheel.core.compile_warnings_remote);

figwheel.core.handle_exception = (function figwheel$core$handle_exception(p__30200){
var map__30201 = p__30200;
var map__30201__$1 = cljs.core.__destructure_map.call(null,map__30201);
var exception_data = map__30201__$1;
var file = cljs.core.get.call(null,map__30201__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var type = cljs.core.get.call(null,map__30201__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__30201__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-exception","figwheel.compile-exception",1092880746),exception_data);
}),(0));

cljs.core.swap_BANG_.call(null,figwheel.core.state,(function (p1__30151_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,p1__30151_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),exception_data);
}));

return figwheel.core.glog_warning.call(null,figwheel.core.logger,(function (){var G__30202 = "Compile Exception - ";
var G__30202__$1 = (cljs.core.truth_((function (){var or__5002__auto__ = type;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return message;
}
})())?[G__30202,clojure.string.join.call(null," : ",cljs.core.filter.call(null,cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,message], null)))].join(''):G__30202);
if(cljs.core.truth_(file)){
return [G__30202__$1," in ",figwheel.core.file_line_column.call(null,exception_data)].join('');
} else {
return G__30202__$1;
}
})());
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715)], null),cljs.core.PersistentArrayMap.EMPTY);
}});
goog.exportSymbol('figwheel.core.handle_exception', figwheel.core.handle_exception);

figwheel.core.handle_exception_remote = (function figwheel$core$handle_exception_remote(exception_data){
return figwheel.core.handle_exception.call(null,cljs.core.js__GT_clj.call(null,exception_data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.handle_exception_remote', figwheel.core.handle_exception_remote);

//# sourceMappingURL=core.js.map

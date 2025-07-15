// Compiled by ClojureScript 1.11.132 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.tools.reader');
goog.require('cljs.tools.reader.edn');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.scope(function(){
cljs.reader.goog$module$goog$object = goog.module.get('goog.object');
});
cljs.reader.zero_fill_right_and_truncate = (function cljs$reader$zero_fill_right_and_truncate(s,width){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(width,cljs.core.count(s))){
return s;
} else {
if((width < cljs.core.count(s))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),width);
} else {
var b = (new goog.string.StringBuffer(s));
while(true){
if((b.getLength() < width)){
var G__13702 = b.append("0");
b = G__13702;
continue;
} else {
return b.toString();
}
break;
}

}
}
});
cljs.reader.divisible_QMARK_ = (function cljs$reader$divisible_QMARK_(num,div){
return (cljs.core.mod(num,div) === (0));
});
cljs.reader.indivisible_QMARK_ = (function cljs$reader$indivisible_QMARK_(num,div){
return (!(cljs.reader.divisible_QMARK_(num,div)));
});
cljs.reader.leap_year_QMARK_ = (function cljs$reader$leap_year_QMARK_(year){
return ((cljs.reader.divisible_QMARK_(year,(4))) && (((cljs.reader.indivisible_QMARK_(year,(100))) || (cljs.reader.divisible_QMARK_(year,(400))))));
});
cljs.reader.days_in_month = (function (){var dim_norm = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(28),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
var dim_leap = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(29),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
return (function (month,leap_year_QMARK_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(leap_year_QMARK_)?dim_leap:dim_norm),month);
});
})();
cljs.reader.timestamp_regex = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
cljs.reader.parse_int = (function cljs$reader$parse_int(s){
var n = parseInt(s,(10));
if(cljs.core.not(isNaN(n))){
return n;
} else {
return null;
}
});
cljs.reader.check = (function cljs$reader$check(low,n,high,msg){
if((((low <= n)) && ((n <= high)))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)," Failed:  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(low),"<=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"<=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(high)].join('')));
}

return n;
});
cljs.reader.parse_and_validate_timestamp = (function cljs$reader$parse_and_validate_timestamp(s){
var vec__13703 = cljs.core.re_matches(cljs.reader.timestamp_regex,s);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13703,(0),null);
var years = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13703,(1),null);
var months = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13703,(2),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13703,(3),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13703,(4),null);
var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13703,(5),null);
var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13703,(6),null);
var fraction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13703,(7),null);
var offset_sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13703,(8),null);
var offset_hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13703,(9),null);
var offset_minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13703,(10),null);
var v = vec__13703;
if(cljs.core.not(v)){
throw (new Error(["Unrecognized date/time syntax: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')));
} else {
var years__$1 = cljs.reader.parse_int(years);
var months__$1 = (function (){var or__5002__auto__ = cljs.reader.parse_int(months);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})();
var days__$1 = (function (){var or__5002__auto__ = cljs.reader.parse_int(days);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})();
var hours__$1 = (function (){var or__5002__auto__ = cljs.reader.parse_int(hours);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})();
var minutes__$1 = (function (){var or__5002__auto__ = cljs.reader.parse_int(minutes);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})();
var seconds__$1 = (function (){var or__5002__auto__ = cljs.reader.parse_int(seconds);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})();
var fraction__$1 = (function (){var or__5002__auto__ = cljs.reader.parse_int(cljs.reader.zero_fill_right_and_truncate(fraction,(3)));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})();
var offset_sign__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(offset_sign,"-"))?(-1):(1));
var offset_hours__$1 = (function (){var or__5002__auto__ = cljs.reader.parse_int(offset_hours);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})();
var offset_minutes__$1 = (function (){var or__5002__auto__ = cljs.reader.parse_int(offset_minutes);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})();
var offset = (offset_sign__$1 * ((offset_hours__$1 * (60)) + offset_minutes__$1));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [years__$1,cljs.reader.check((1),months__$1,(12),"timestamp month field must be in range 1..12"),cljs.reader.check((1),days__$1,(function (){var G__13706 = months__$1;
var G__13707 = cljs.reader.leap_year_QMARK_(years__$1);
return (cljs.reader.days_in_month.cljs$core$IFn$_invoke$arity$2 ? cljs.reader.days_in_month.cljs$core$IFn$_invoke$arity$2(G__13706,G__13707) : cljs.reader.days_in_month.call(null,G__13706,G__13707));
})(),"timestamp day field must be in range 1..last day in month"),cljs.reader.check((0),hours__$1,(23),"timestamp hour field must be in range 0..23"),cljs.reader.check((0),minutes__$1,(59),"timestamp minute field must be in range 0..59"),cljs.reader.check((0),seconds__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(minutes__$1,(59)))?(60):(59)),"timestamp second field must be in range 0..60"),cljs.reader.check((0),fraction__$1,(999),"timestamp millisecond field must be in range 0..999"),offset], null);
}
});
cljs.reader.parse_timestamp = (function cljs$reader$parse_timestamp(ts){
var temp__5821__auto__ = cljs.reader.parse_and_validate_timestamp(ts);
if(cljs.core.truth_(temp__5821__auto__)){
var vec__13708 = temp__5821__auto__;
var years = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13708,(0),null);
var months = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13708,(1),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13708,(2),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13708,(3),null);
var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13708,(4),null);
var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13708,(5),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13708,(6),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13708,(7),null);
return (new Date((Date.UTC(years,(months - (1)),days,hours,minutes,seconds,ms) - ((offset * (60)) * (1000)))));
} else {
throw (new Error(["Unrecognized date/time syntax: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join('')));
}
});
cljs.reader.read_date = (function cljs$reader$read_date(s){
if(typeof s === 'string'){
return cljs.reader.parse_timestamp(s);
} else {
throw (new Error("Instance literal expects a string for its timestamp."));
}
});
cljs.reader.read_queue = (function cljs$reader$read_queue(elems){
if(cljs.core.vector_QMARK_(elems)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,elems);
} else {
throw (new Error("Queue literal expects a vector for its elements."));
}
});
cljs.reader.read_js = (function cljs$reader$read_js(form){
if(cljs.core.vector_QMARK_(form)){
var arr = [];
var seq__13711_13745 = cljs.core.seq(form);
var chunk__13712_13746 = null;
var count__13713_13747 = (0);
var i__13714_13748 = (0);
while(true){
if((i__13714_13748 < count__13713_13747)){
var x_13749 = chunk__13712_13746.cljs$core$IIndexed$_nth$arity$2(null,i__13714_13748);
arr.push(x_13749);


var G__13750 = seq__13711_13745;
var G__13751 = chunk__13712_13746;
var G__13752 = count__13713_13747;
var G__13753 = (i__13714_13748 + (1));
seq__13711_13745 = G__13750;
chunk__13712_13746 = G__13751;
count__13713_13747 = G__13752;
i__13714_13748 = G__13753;
continue;
} else {
var temp__5823__auto___13754 = cljs.core.seq(seq__13711_13745);
if(temp__5823__auto___13754){
var seq__13711_13755__$1 = temp__5823__auto___13754;
if(cljs.core.chunked_seq_QMARK_(seq__13711_13755__$1)){
var c__5525__auto___13756 = cljs.core.chunk_first(seq__13711_13755__$1);
var G__13757 = cljs.core.chunk_rest(seq__13711_13755__$1);
var G__13758 = c__5525__auto___13756;
var G__13759 = cljs.core.count(c__5525__auto___13756);
var G__13760 = (0);
seq__13711_13745 = G__13757;
chunk__13712_13746 = G__13758;
count__13713_13747 = G__13759;
i__13714_13748 = G__13760;
continue;
} else {
var x_13761 = cljs.core.first(seq__13711_13755__$1);
arr.push(x_13761);


var G__13762 = cljs.core.next(seq__13711_13755__$1);
var G__13763 = null;
var G__13764 = (0);
var G__13765 = (0);
seq__13711_13745 = G__13762;
chunk__13712_13746 = G__13763;
count__13713_13747 = G__13764;
i__13714_13748 = G__13765;
continue;
}
} else {
}
}
break;
}

return arr;
} else {
if(cljs.core.map_QMARK_(form)){
var obj = ({});
var seq__13717_13766 = cljs.core.seq(form);
var chunk__13718_13767 = null;
var count__13719_13768 = (0);
var i__13720_13769 = (0);
while(true){
if((i__13720_13769 < count__13719_13768)){
var vec__13733_13770 = chunk__13718_13767.cljs$core$IIndexed$_nth$arity$2(null,i__13720_13769);
var k_13771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13733_13770,(0),null);
var v_13772 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13733_13770,(1),null);
var G__13736_13773 = obj;
var G__13737_13774 = cljs.core.name(k_13771);
var G__13738_13775 = v_13772;
cljs.reader.goog$module$goog$object.set.call(null,G__13736_13773,G__13737_13774,G__13738_13775);


var G__13776 = seq__13717_13766;
var G__13777 = chunk__13718_13767;
var G__13778 = count__13719_13768;
var G__13779 = (i__13720_13769 + (1));
seq__13717_13766 = G__13776;
chunk__13718_13767 = G__13777;
count__13719_13768 = G__13778;
i__13720_13769 = G__13779;
continue;
} else {
var temp__5823__auto___13780 = cljs.core.seq(seq__13717_13766);
if(temp__5823__auto___13780){
var seq__13717_13781__$1 = temp__5823__auto___13780;
if(cljs.core.chunked_seq_QMARK_(seq__13717_13781__$1)){
var c__5525__auto___13782 = cljs.core.chunk_first(seq__13717_13781__$1);
var G__13783 = cljs.core.chunk_rest(seq__13717_13781__$1);
var G__13784 = c__5525__auto___13782;
var G__13785 = cljs.core.count(c__5525__auto___13782);
var G__13786 = (0);
seq__13717_13766 = G__13783;
chunk__13718_13767 = G__13784;
count__13719_13768 = G__13785;
i__13720_13769 = G__13786;
continue;
} else {
var vec__13739_13787 = cljs.core.first(seq__13717_13781__$1);
var k_13788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13739_13787,(0),null);
var v_13789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13739_13787,(1),null);
var G__13742_13790 = obj;
var G__13743_13791 = cljs.core.name(k_13788);
var G__13744_13792 = v_13789;
cljs.reader.goog$module$goog$object.set.call(null,G__13742_13790,G__13743_13791,G__13744_13792);


var G__13793 = cljs.core.next(seq__13717_13781__$1);
var G__13794 = null;
var G__13795 = (0);
var G__13796 = (0);
seq__13717_13766 = G__13793;
chunk__13718_13767 = G__13794;
count__13719_13768 = G__13795;
i__13720_13769 = G__13796;
continue;
}
} else {
}
}
break;
}

return obj;
} else {
throw (new Error(["JS literal expects a vector or map containing ","only string or unqualified keyword keys"].join('')));

}
}
});
cljs.reader.read_uuid = (function cljs$reader$read_uuid(uuid){
if(typeof uuid === 'string'){
return cljs.core.uuid(uuid);
} else {
throw (new Error("UUID literal expects a string as its representation."));
}
});
cljs.reader._STAR_default_data_reader_fn_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
cljs.reader._STAR_tag_table_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$sym$inst,cljs.reader.read_date,cljs.core.cst$sym$uuid,cljs.reader.read_uuid,cljs.core.cst$sym$queue,cljs.reader.read_queue,cljs.core.cst$sym$js,cljs.reader.read_js], null),cljs.core.PersistentArrayMap.EMPTY], 0)));
/**
 * Reads the first object from an cljs.tools.reader.reader-types/IPushbackReader.
 * Returns the object read. If EOF, throws if eof-error? is true otherwise returns eof.
 * If no reader is provided, *in* will be used.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * cljs.tools.reader.edn/read doesn't depend on dynamic Vars, all configuration
 * is done by passing an opt map.
 * 
 * opts is a map that can include the following keys:
 * :eof - value to return on end-of-file. When not supplied, eof throws an exception.
 * :readers  - a map of tag symbols to data-reader functions to be considered before default-data-readers.
 *            When not supplied, only the default-data-readers will be used.
 * :default - A function of two args, that will, if present and no reader is found for a tag,
 *            be called with the tag and the value.
 */
cljs.reader.read = (function cljs$reader$read(var_args){
var G__13798 = arguments.length;
switch (G__13798) {
case 1:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.reader.read.cljs$core$IFn$_invoke$arity$1 = (function (reader){
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$readers,cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),cljs.core.cst$kw$default,cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_),cljs.core.cst$kw$eof,null], null),reader);
}));

(cljs.reader.read.cljs$core$IFn$_invoke$arity$2 = (function (p__13799,reader){
var map__13800 = p__13799;
var map__13800__$1 = cljs.core.__destructure_map(map__13800);
var opts = map__13800__$1;
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13800__$1,cljs.core.cst$kw$eof);
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_)], null)], 0)),cljs.core.cst$kw$readers,(function (m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),m], 0));
})),reader);
}));

(cljs.reader.read.cljs$core$IFn$_invoke$arity$4 = (function (reader,eof_error_QMARK_,eof,opts){
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4(reader,eof_error_QMARK_,eof,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_)], null)], 0)),cljs.core.cst$kw$readers,(function (m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),m], 0));
})));
}));

(cljs.reader.read.cljs$lang$maxFixedArity = 4);

/**
 * Reads one object from the string s.
 * Returns nil when s is nil or empty.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * opts is a map as per cljs.tools.reader.edn/read
 */
cljs.reader.read_string = (function cljs$reader$read_string(var_args){
var G__13803 = arguments.length;
switch (G__13803) {
case 1:
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$readers,cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),cljs.core.cst$kw$default,cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_),cljs.core.cst$kw$eof,null], null),s);
}));

(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_)], null),opts], 0)),cljs.core.cst$kw$readers,(function (m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),m], 0));
})),s);
}));

(cljs.reader.read_string.cljs$lang$maxFixedArity = 2);

cljs.reader.register_tag_parser_BANG_ = (function cljs$reader$register_tag_parser_BANG_(tag,f){
var old_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),tag);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag,f);

return old_parser;
});
cljs.reader.deregister_tag_parser_BANG_ = (function cljs$reader$deregister_tag_parser_BANG_(tag){
var old_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),tag);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag);

return old_parser;
});
cljs.reader.register_default_tag_parser_BANG_ = (function cljs$reader$register_default_tag_parser_BANG_(f){
var old_parser = cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.reader._STAR_default_data_reader_fn_STAR_,(function (_){
return f;
}));

return old_parser;
});
cljs.reader.deregister_default_tag_parser_BANG_ = (function cljs$reader$deregister_default_tag_parser_BANG_(){
var old_parser = cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.reader._STAR_default_data_reader_fn_STAR_,(function (_){
return null;
}));

return old_parser;
});

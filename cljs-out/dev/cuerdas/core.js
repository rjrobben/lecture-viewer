// Compiled by ClojureScript 1.11.132 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('cuerdas.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('cuerdas.regexp');
goog.require('goog.string');
goog.require('cljs.reader');
cuerdas.core.keyword_STAR_ = cljs.core.keyword;
var ret__5781__auto___14201 = /**
 * Mark a expression string safe, if value is nil or undefined, the ""
 *   is returned.
 */
cuerdas.core.nilv = (function cuerdas$core$nilv(_AMPERSAND_form,_AMPERSAND_env,v){
if(cljs.core.truth_(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env))){
return (new cljs.core.List(null,cljs.core.cst$sym$js_STAR_,(new cljs.core.List(null,"(~{} ?? \"\")",(new cljs.core.List(null,v,null,(1),null)),(2),null)),(3),null));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,null,(1),null)),(new cljs.core.List(null,v,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,v,null,(1),null)),(new cljs.core.List(null,"",null,(1),null))], 0))));
}
});
(cuerdas.core.nilv.cljs$lang$macro = true);

var ret__5781__auto___14207 = (function (){
/**
 * A macro variant of the clojure.core/str function that performs
 *   considerably faster string concatenation operation on CLJS (on
 *   JVM/CLJ it only applies basic simplification and then relies on the
 *   `clojure.core/str`).
 */
cuerdas.core.concat = (function cuerdas$core$concat(var_args){
var args__5732__auto__ = [];
var len__5726__auto___14208 = arguments.length;
var i__5727__auto___14209 = (0);
while(true){
if((i__5727__auto___14209 < len__5726__auto___14208)){
args__5732__auto__.push((arguments[i__5727__auto___14209]));

var G__14210 = (i__5727__auto___14209 + (1));
i__5727__auto___14209 = G__14210;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return cuerdas.core.concat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(cuerdas.core.concat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,params){
if(cljs.core.truth_(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env))){
var xform = (cuerdas.core.make_concat_xform.cljs$core$IFn$_invoke$arity$1 ? cuerdas.core.make_concat_xform.cljs$core$IFn$_invoke$arity$1(true) : cuerdas.core.make_concat_xform.call(null,true));
var params__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,xform,params);
var stmpl = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"\"\"",(function (){var G__14205 = "+~{}";
var G__14206 = cljs.core.count(params__$1);
return (cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$2 ? cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$2(G__14205,G__14206) : cuerdas.core.repeat.call(null,G__14205,G__14206));
})());
return cljs.core.cons(cljs.core.cst$sym$js_STAR_,cljs.core.cons(stmpl,params__$1));
} else {
return cljs.core.cons(cljs.core.cst$sym$cljs$core_SLASH_str,params);
}
}));

(cuerdas.core.concat.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cuerdas.core.concat.cljs$lang$applyTo = (function (seq14202){
var G__14203 = cljs.core.first(seq14202);
var seq14202__$1 = cljs.core.next(seq14202);
var G__14204 = cljs.core.first(seq14202__$1);
var seq14202__$2 = cljs.core.next(seq14202__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14203,G__14204,seq14202__$2);
}));

return null;
})()
;
(cuerdas.core.concat.cljs$lang$macro = true);

var ret__5781__auto___14216 = (function (){
/**
 * Unsafe variant of `concat`. Does not add checks on unknown symbols.
 */
cuerdas.core.unsafe_concat = (function cuerdas$core$unsafe_concat(var_args){
var args__5732__auto__ = [];
var len__5726__auto___14217 = arguments.length;
var i__5727__auto___14218 = (0);
while(true){
if((i__5727__auto___14218 < len__5726__auto___14217)){
args__5732__auto__.push((arguments[i__5727__auto___14218]));

var G__14219 = (i__5727__auto___14218 + (1));
i__5727__auto___14218 = G__14219;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return cuerdas.core.unsafe_concat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(cuerdas.core.unsafe_concat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,params){
if(cljs.core.truth_(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env))){
var xform = (cuerdas.core.make_concat_xform.cljs$core$IFn$_invoke$arity$1 ? cuerdas.core.make_concat_xform.cljs$core$IFn$_invoke$arity$1(false) : cuerdas.core.make_concat_xform.call(null,false));
var params__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,xform,params);
var stmpl = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"\"\"",(function (){var G__14214 = "+~{}";
var G__14215 = cljs.core.count(params__$1);
return (cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$2 ? cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$2(G__14214,G__14215) : cuerdas.core.repeat.call(null,G__14214,G__14215));
})());
return cljs.core.cons(cljs.core.cst$sym$js_STAR_,cljs.core.cons(stmpl,params__$1));
} else {
return cljs.core.cons(cljs.core.cst$sym$cljs$core_SLASH_str,params);
}
}));

(cuerdas.core.unsafe_concat.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cuerdas.core.unsafe_concat.cljs$lang$applyTo = (function (seq14211){
var G__14212 = cljs.core.first(seq14211);
var seq14211__$1 = cljs.core.next(seq14211);
var G__14213 = cljs.core.first(seq14211__$1);
var seq14211__$2 = cljs.core.next(seq14211__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14212,G__14213,seq14211__$2);
}));

return null;
})()
;
(cuerdas.core.unsafe_concat.cljs$lang$macro = true);

/**
 * Checks if a string is empty.
 */
cuerdas.core.empty_QMARK_ = (function cuerdas$core$empty_QMARK_(s){
return (((s == null)) || (((typeof s === 'string') && ((cljs.core.count(s) === (0))))));
});
/**
 * Convenient helper for check emptines or if value is nil
 * 
 *   DEPRECATED: this is already covered by `empty?`
 *   
 */
cuerdas.core.empty_or_nil_QMARK_ = (function cuerdas$core$empty_or_nil_QMARK_(s){
return (((s == null)) || (cuerdas.core.empty_QMARK_(s)));
});
/**
 * Determines whether a string contains a substring.
 */
cuerdas.core.includes_QMARK_ = (function cuerdas$core$includes_QMARK_(s,subs){
return ((typeof s === 'string') && (((typeof subs === 'string') && (goog.string.contains(s,subs)))));
});
/**
 * Extracts a section of a string and returns a new string.
 */
cuerdas.core.slice = (function cuerdas$core$slice(var_args){
var G__14221 = arguments.length;
switch (G__14221) {
case 2:
return cuerdas.core.slice.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cuerdas.core.slice.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cuerdas.core.slice.cljs$core$IFn$_invoke$arity$2 = (function (s,begin){
if(typeof s === 'string'){
return s.slice(begin);
} else {
return null;
}
}));

(cuerdas.core.slice.cljs$core$IFn$_invoke$arity$3 = (function (s,begin,end){
if(typeof s === 'string'){
return s.slice(begin,end);
} else {
return null;
}
}));

(cuerdas.core.slice.cljs$lang$maxFixedArity = 3);

/**
 * UNSAFE version of starts-with? predicate
 */
cuerdas.core.unsafe_starts_with_QMARK_ = (function cuerdas$core$unsafe_starts_with_QMARK_(s,prefix){
return (s.lastIndexOf(prefix,(0)) === (0));
});
/**
 * Check if the string starts with prefix.
 */
cuerdas.core.starts_with_QMARK_ = (function cuerdas$core$starts_with_QMARK_(s,prefix){
return ((typeof s === 'string') && (((typeof prefix === 'string') && (cuerdas.core.unsafe_starts_with_QMARK_(s,prefix)))));
});
/**
 * UNSAFE version of ends-with? predicate
 */
cuerdas.core.unsafe_ends_with_QMARK_ = (function cuerdas$core$unsafe_ends_with_QMARK_(s,suffix){
var or__5002__auto__ = (cljs.core.count(suffix) === (0));
if(or__5002__auto__){
return or__5002__auto__;
} else {
var l = (cljs.core.count(s) - cljs.core.count(suffix));
return (((l >= (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s.indexOf(suffix,l),l)));
}
});
/**
 * Check if the string ends with suffix.
 */
cuerdas.core.ends_with_QMARK_ = (function cuerdas$core$ends_with_QMARK_(s,suffix){
return ((typeof s === 'string') && (((typeof suffix === 'string') && (cuerdas.core.unsafe_ends_with_QMARK_(s,suffix)))));
});
/**
 * Converts string to all lower-case.
 * 
 *   This function works in strictly locale independent way,
 *   if you want a localized version, just use `locale-lower`
 */
cuerdas.core.lower = (function cuerdas$core$lower(s){
if(typeof s === 'string'){
return s.toLowerCase();
} else {
return null;
}
});
/**
 * Converts string to all upper-case.
 * 
 *   This function works in strictly locale independent way,
 *   if you want a localized version, just use `locale-upper`
 */
cuerdas.core.upper = (function cuerdas$core$upper(s){
if(typeof s === 'string'){
return s.toUpperCase();
} else {
return null;
}
});
cuerdas.core.str_blank_re = cljs.core.re_pattern("(?u)^[\\s\\p{Z}]+$");
/**
 * Checks if is a nil, empty string or contains only whitespace.
 */
cuerdas.core.blank_QMARK_ = (function cuerdas$core$blank_QMARK_(s){
return (((s == null)) || (((typeof s === 'string') && ((((cljs.core.count(s) === (0))) || ((!((cljs.core.re_matches(cuerdas.core.str_blank_re,s) == null)))))))));
});
cuerdas.core.alpha_pred_re = cljs.core.re_pattern("^[a-zA-Z]+$");
/**
 * Checks if a string contains only alpha characters.
 */
cuerdas.core.alpha_QMARK_ = (function cuerdas$core$alpha_QMARK_(s){
return ((typeof s === 'string') && ((!((cljs.core.re_matches(cuerdas.core.alpha_pred_re,s) == null)))));
});
cuerdas.core.digits_pred_re = cljs.core.re_pattern("^[0-9]+$");
/**
 * Checks if a string contains only digit characters.
 */
cuerdas.core.digits_QMARK_ = (function cuerdas$core$digits_QMARK_(s){
return ((typeof s === 'string') && ((!((cljs.core.re_matches(cuerdas.core.digits_pred_re,s) == null)))));
});
cuerdas.core.alnum_pred_re = cljs.core.re_pattern("^[a-zA-Z0-9]+$");
/**
 * Checks if a string contains only alphanumeric characters.
 */
cuerdas.core.alnum_QMARK_ = (function cuerdas$core$alnum_QMARK_(s){
return ((typeof s === 'string') && ((!((cljs.core.re_matches(cuerdas.core.alnum_pred_re,s) == null)))));
});
cuerdas.core.world_pred_re = cljs.core.re_pattern("(?u)^[\\p{N}\\p{L}_-]+$");
/**
 * Checks if a string contains only the word characters.
 *   This function will use all the unicode range.
 */
cuerdas.core.word_QMARK_ = (function cuerdas$core$word_QMARK_(s){
return ((typeof s === 'string') && ((!((cljs.core.re_matches(cuerdas.core.world_pred_re,s) == null)))));
});
cuerdas.core.letters_pred_re = cljs.core.re_pattern("(?u)^\\p{L}+$");
/**
 * Checks if string contains only letters.
 *   This function will use all the unicode range.
 */
cuerdas.core.letters_QMARK_ = (function cuerdas$core$letters_QMARK_(s){
return ((typeof s === 'string') && ((!((cljs.core.re_matches(cuerdas.core.letters_pred_re,s) == null)))));
});
cuerdas.core.numeric_pred_re = cljs.core.re_pattern("^[+-]?([0-9]*\\.?[0-9]+|[0-9]+\\.?[0-9]*)([eE][+-]?[0-9]+)?$");
/**
 * Check if a string contains only numeric values.
 */
cuerdas.core.numeric_QMARK_ = (function cuerdas$core$numeric_QMARK_(s){
return ((typeof s === 'string') && ((!((cljs.core.re_matches(cuerdas.core.numeric_pred_re,s) == null)))));
});
cuerdas.core.index_of = (function cuerdas$core$index_of(var_args){
var G__14224 = arguments.length;
switch (G__14224) {
case 2:
return cuerdas.core.index_of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cuerdas.core.index_of.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cuerdas.core.index_of.cljs$core$IFn$_invoke$arity$2 = (function (s,val){
if(((typeof s === 'string') && (typeof val === 'string'))){
return clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(s,val);
} else {
return null;
}
}));

(cuerdas.core.index_of.cljs$core$IFn$_invoke$arity$3 = (function (s,val,from){
if(((typeof s === 'string') && (typeof val === 'string'))){
return clojure.string.index_of.cljs$core$IFn$_invoke$arity$3(s,val,from);
} else {
return null;
}
}));

(cuerdas.core.index_of.cljs$lang$maxFixedArity = 3);

cuerdas.core.last_index_of = (function cuerdas$core$last_index_of(var_args){
var G__14227 = arguments.length;
switch (G__14227) {
case 2:
return cuerdas.core.last_index_of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cuerdas.core.last_index_of.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cuerdas.core.last_index_of.cljs$core$IFn$_invoke$arity$2 = (function (s,val){
if(((typeof s === 'string') && (typeof val === 'string'))){
return clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(s,val);
} else {
return null;
}
}));

(cuerdas.core.last_index_of.cljs$core$IFn$_invoke$arity$3 = (function (s,val,from){
if(((typeof s === 'string') && (typeof val === 'string'))){
return clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$3(s,val,from);
} else {
return null;
}
}));

(cuerdas.core.last_index_of.cljs$lang$maxFixedArity = 3);

cuerdas.core.str__GT_trim_re = (function cuerdas$core$str__GT_trim_re(chs){
var rxstr = ""+"["+(cuerdas.regexp.escape(chs))+"]";
var rxstr__$1 = ""+"^"+(rxstr)+"+|"+(rxstr)+"+$";
return cljs.core.re_pattern(rxstr__$1);
});
cuerdas.core.str__GT_rtrim_re = (function cuerdas$core$str__GT_rtrim_re(chs){
var rxstr = ""+"["+(cuerdas.regexp.escape(chs))+"]";
var rxstr__$1 = ""+(rxstr)+"+$";
return cljs.core.re_pattern(rxstr__$1);
});
cuerdas.core.str__GT_ltrim_re = (function cuerdas$core$str__GT_ltrim_re(chs){
var rxstr = ""+"["+(cuerdas.regexp.escape(chs))+"]";
var rxstr__$1 = ""+"^"+(rxstr)+"+";
return cljs.core.re_pattern(rxstr__$1);
});
cuerdas.core.trim_default_re = cuerdas.core.str__GT_trim_re(cuerdas.regexp.escape("\n\f\r\t "));
cuerdas.core.rtrim_default_re = cuerdas.core.str__GT_rtrim_re(cuerdas.regexp.escape("\n\f\r\t "));
cuerdas.core.ltrim_default_re = cuerdas.core.str__GT_ltrim_re(cuerdas.regexp.escape("\n\f\r\t "));
/**
 * Removes whitespace or specified characters
 *   from both ends of string.
 */
cuerdas.core.trim = (function cuerdas$core$trim(var_args){
var G__14230 = arguments.length;
switch (G__14230) {
case 1:
return cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.trim.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1 = (function (s){
return (cuerdas.core.replace.cljs$core$IFn$_invoke$arity$3 ? cuerdas.core.replace.cljs$core$IFn$_invoke$arity$3(s,cuerdas.core.trim_default_re,"") : cuerdas.core.replace.call(null,s,cuerdas.core.trim_default_re,""));
}));

(cuerdas.core.trim.cljs$core$IFn$_invoke$arity$2 = (function (s,chs){
if(typeof s === 'string'){
var rx = cuerdas.core.str__GT_trim_re(chs);
return (cuerdas.core.replace.cljs$core$IFn$_invoke$arity$3 ? cuerdas.core.replace.cljs$core$IFn$_invoke$arity$3(s,rx,"") : cuerdas.core.replace.call(null,s,rx,""));
} else {
return null;
}
}));

(cuerdas.core.trim.cljs$lang$maxFixedArity = 2);

/**
 * Removes whitespace or specified characters
 *   from right side of string.
 */
cuerdas.core.rtrim = (function cuerdas$core$rtrim(var_args){
var G__14233 = arguments.length;
switch (G__14233) {
case 1:
return cuerdas.core.rtrim.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.rtrim.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cuerdas.core.rtrim.cljs$core$IFn$_invoke$arity$1 = (function (s){
return (cuerdas.core.replace.cljs$core$IFn$_invoke$arity$3 ? cuerdas.core.replace.cljs$core$IFn$_invoke$arity$3(s,cuerdas.core.rtrim_default_re,"") : cuerdas.core.replace.call(null,s,cuerdas.core.rtrim_default_re,""));
}));

(cuerdas.core.rtrim.cljs$core$IFn$_invoke$arity$2 = (function (s,chs){
if(typeof s === 'string'){
var rx = cuerdas.core.str__GT_rtrim_re(chs);
return (cuerdas.core.replace.cljs$core$IFn$_invoke$arity$3 ? cuerdas.core.replace.cljs$core$IFn$_invoke$arity$3(s,rx,"") : cuerdas.core.replace.call(null,s,rx,""));
} else {
return null;
}
}));

(cuerdas.core.rtrim.cljs$lang$maxFixedArity = 2);

/**
 * Removes whitespace or specified characters
 *   from left side of string.
 */
cuerdas.core.ltrim = (function cuerdas$core$ltrim(var_args){
var G__14236 = arguments.length;
switch (G__14236) {
case 1:
return cuerdas.core.ltrim.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.ltrim.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cuerdas.core.ltrim.cljs$core$IFn$_invoke$arity$1 = (function (s){
return (cuerdas.core.replace.cljs$core$IFn$_invoke$arity$3 ? cuerdas.core.replace.cljs$core$IFn$_invoke$arity$3(s,cuerdas.core.ltrim_default_re,"") : cuerdas.core.replace.call(null,s,cuerdas.core.ltrim_default_re,""));
}));

(cuerdas.core.ltrim.cljs$core$IFn$_invoke$arity$2 = (function (s,chs){
if(typeof s === 'string'){
var rx = cuerdas.core.str__GT_ltrim_re(chs);
return (cuerdas.core.replace.cljs$core$IFn$_invoke$arity$3 ? cuerdas.core.replace.cljs$core$IFn$_invoke$arity$3(s,rx,"") : cuerdas.core.replace.call(null,s,rx,""));
} else {
return null;
}
}));

(cuerdas.core.ltrim.cljs$lang$maxFixedArity = 2);

cuerdas.core.clean_re = cljs.core.re_pattern("(?u)[\\s\\p{Z}]+");
/**
 * Trim and replace multiple spaces with
 *   a single space.
 */
cuerdas.core.clean = (function cuerdas$core$clean(s){
var G__14238 = cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(s);
var G__14239 = cuerdas.core.clean_re;
var G__14240 = " ";
return (cuerdas.core.replace.cljs$core$IFn$_invoke$arity$3 ? cuerdas.core.replace.cljs$core$IFn$_invoke$arity$3(G__14238,G__14239,G__14240) : cuerdas.core.replace.call(null,G__14238,G__14239,G__14240));
});
cuerdas.core.strip = cuerdas.core.trim;
cuerdas.core.rstrip = cuerdas.core.rtrim;
cuerdas.core.lstrip = cuerdas.core.ltrim;
/**
 * Strip prefix in more efficient way.
 */
cuerdas.core.strip_prefix = (function cuerdas$core$strip_prefix(s,prefix){
if(cuerdas.core.starts_with_QMARK_(s,prefix)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,cljs.core.count(prefix),cljs.core.count(s));
} else {
return s;
}
});
/**
 * Strip suffix in more efficient way.
 */
cuerdas.core.strip_suffix = (function cuerdas$core$strip_suffix(s,suffix){
if(cuerdas.core.ends_with_QMARK_(s,suffix)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(cljs.core.count(s) - cljs.core.count(suffix)));
} else {
return s;
}
});
/**
 * Repeats string n times.
 */
cuerdas.core.repeat = (function cuerdas$core$repeat(var_args){
var G__14242 = arguments.length;
switch (G__14242) {
case 1:
return cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$2(s,(1));
}));

(cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$2 = (function (s,n){
if(typeof s === 'string'){
return goog.string.repeat(s,n);
} else {
return null;
}
}));

(cuerdas.core.repeat.cljs$lang$maxFixedArity = 2);

cuerdas.core.replace_all = (function cuerdas$core$replace_all(s,re,replacement){
var flags = re.flags;
var flags__$1 = ((cuerdas.core.includes_QMARK_(flags,"g"))?flags:""+(flags)+"g");
var rx = (new RegExp(re.source,flags__$1));
return s.replace(rx,replacement);
});
cuerdas.core.replace_with = (function cuerdas$core$replace_with(f){
return (function() { 
var G__14246__delegate = function (args){
var matches = cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),args);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(matches),(1))){
var G__14244 = cljs.core.first(matches);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14244) : f.call(null,G__14244));
} else {
var G__14245 = cljs.core.vec(matches);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14245) : f.call(null,G__14245));
}
};
var G__14246 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14247__i = 0, G__14247__a = new Array(arguments.length -  0);
while (G__14247__i < G__14247__a.length) {G__14247__a[G__14247__i] = arguments[G__14247__i + 0]; ++G__14247__i;}
  args = new cljs.core.IndexedSeq(G__14247__a,0,null);
} 
return G__14246__delegate.call(this,args);};
G__14246.cljs$lang$maxFixedArity = 0;
G__14246.cljs$lang$applyTo = (function (arglist__14248){
var args = cljs.core.seq(arglist__14248);
return G__14246__delegate(args);
});
G__14246.cljs$core$IFn$_invoke$arity$variadic = G__14246__delegate;
return G__14246;
})()
;
});
cuerdas.core.replace_STAR_ = (function cuerdas$core$replace_STAR_(s,match,replacement){
if(typeof match === 'string'){
return clojure.string.replace(s,match,replacement);
} else {
if(cuerdas.regexp.regexp_QMARK_(match)){
if(typeof replacement === 'string'){
return cuerdas.core.replace_all(s,match,replacement);
} else {
return cuerdas.core.replace_all(s,match,cuerdas.core.replace_with(replacement));
}
} else {
return null;
}
}
});
/**
 * Replaces all instance of match with replacement in s.
 * 
 *   The replacement is literal (i.e. none of its characters are treated
 *   specially) for all cases above except pattern / string.
 * 
 *   In match is pattern instance, replacement can contain $1, $2, etc.
 *   will be substituted with string that matcher the corresponding
 *   parenthesized group in pattern.
 * 
 *   If you wish your replacement string to be used literary,
 *   use `(cuerdas.regexp/escape replacement)`.
 * 
 *   Example:
 *  (replace "Almost Pig Latin" #"\b(\w)(\w+)\b" "$2$1ay")
 *  ;; => "lmostAay igPay atinLay"
 *   
 */
cuerdas.core.replace = (function cuerdas$core$replace(s,match,replacement){
if(typeof s === 'string'){
return cuerdas.core.replace_STAR_(s,match,replacement);
} else {
return null;
}
});
/**
 * Replaces first instance of match with replacement in s.
 */
cuerdas.core.replace_first = (function cuerdas$core$replace_first(s,match,replacement){
if(typeof s === 'string'){
return clojure.string.replace_first(s,match,replacement);
} else {
return null;
}
});
/**
 * Truncates a string to a certain length and adds '...'
 *   if necessary.
 */
cuerdas.core.prune = (function cuerdas$core$prune(var_args){
var G__14250 = arguments.length;
switch (G__14250) {
case 2:
return cuerdas.core.prune.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cuerdas.core.prune.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cuerdas.core.prune.cljs$core$IFn$_invoke$arity$2 = (function (s,num){
return cuerdas.core.prune.cljs$core$IFn$_invoke$arity$3(s,num,"...");
}));

(cuerdas.core.prune.cljs$core$IFn$_invoke$arity$3 = (function (s,num,subs){
if((cljs.core.count(s) <= num)){
return s;
} else {
var tmpl = (function (c){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cuerdas.core.upper(c),cuerdas.core.lower(c))){
return "A";
} else {
return " ";
}
});
var template = cuerdas.core.replace(cuerdas.core.slice.cljs$core$IFn$_invoke$arity$3(s,(0),(num + (1))),/.(?=\W*\w*$)/,tmpl);
var tmp = cuerdas.core.slice.cljs$core$IFn$_invoke$arity$2(template,(cljs.core.count(template) - (2)));
var template__$1 = (cljs.core.truth_(tmp.match(/\w\w/))?cuerdas.core.replace_first(template,/\s*\S+$/,""):cuerdas.core.rtrim.cljs$core$IFn$_invoke$arity$1(cuerdas.core.slice.cljs$core$IFn$_invoke$arity$3(template,(0),(cljs.core.count(template) - (1)))));
if(((([cljs.core.str.cljs$core$IFn$_invoke$arity$1(template__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(subs)].join('')).length) > cljs.core.count(s))){
return s;
} else {
return ""+(cuerdas.core.slice.cljs$core$IFn$_invoke$arity$3(s,(0),cljs.core.count(template__$1)))+((subs ?? ""));
}
}
}));

(cuerdas.core.prune.cljs$lang$maxFixedArity = 3);

/**
 * Takes a string and replaces newlines with a space.
 *   Multiple lines are replaced with a single space.
 */
cuerdas.core.strip_newlines = (function cuerdas$core$strip_newlines(s){
return cuerdas.core.replace(s,/(\r\n|\r|\n)+/," ");
});
/**
 * Splits a string on a separator a limited
 *   number of times. The separator can be a string,
 *   character or Pattern (clj) / RegExp (cljs) instance.
 */
cuerdas.core.split = (function cuerdas$core$split(var_args){
var G__14253 = arguments.length;
switch (G__14253) {
case 1:
return cuerdas.core.split.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cuerdas.core.split.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cuerdas.core.split.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.split.cljs$core$IFn$_invoke$arity$3(s,/\s+/,null);
}));

(cuerdas.core.split.cljs$core$IFn$_invoke$arity$2 = (function (s,sep){
if((s == null)){
return s;
} else {
if(cuerdas.regexp.regexp_QMARK_(sep)){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,sep);
} else {
if(typeof sep === 'string'){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,cljs.core.re_pattern(cuerdas.regexp.escape(sep)));
} else {
if(cljs.core.char_QMARK_(sep)){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,cljs.core.re_pattern(cuerdas.regexp.escape(sep.toString())));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid arguments",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sep,sep], null));

}
}
}
}
}));

(cuerdas.core.split.cljs$core$IFn$_invoke$arity$3 = (function (s,sep,num){
if((s == null)){
return s;
} else {
if(cuerdas.regexp.regexp_QMARK_(sep)){
return clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,sep,num);
} else {
if(typeof sep === 'string'){
return clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,cljs.core.re_pattern(cuerdas.regexp.escape(sep)),num);
} else {
if(cljs.core.char_QMARK_(sep)){
return clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,cljs.core.re_pattern(cuerdas.regexp.escape(sep.toString())),num);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid arguments",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sep,sep], null));

}
}
}
}
}));

(cuerdas.core.split.cljs$lang$maxFixedArity = 3);

/**
 * Return string reversed.
 */
cuerdas.core.reverse = (function cuerdas$core$reverse(s){
if(typeof s === 'string'){
return clojure.string.reverse(s);
} else {
return null;
}
});
/**
 * Split a string in a seq of chars.
 */
cuerdas.core.chars = (function cuerdas$core$chars(s){
if(typeof s === 'string'){
return cljs.core.vec(s.split(""));
} else {
return null;
}
});
/**
 * Return a list of the lines in the string.
 */
cuerdas.core.lines = (function cuerdas$core$lines(s){
return cuerdas.core.split.cljs$core$IFn$_invoke$arity$2(s,/\n|\r\n/);
});
/**
 * Returns a new string joining a list of strings with a newline char (\n).
 */
cuerdas.core.unlines = (function cuerdas$core$unlines(s){
if(cljs.core.sequential_QMARK_(s)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",s);
} else {
return null;
}
});
cuerdas.core.words_default_re = cljs.core.re_pattern("(?u)[\\p{N}\\p{L}_-]+");
/**
 * Returns a vector of the words in the string.
 */
cuerdas.core.words = (function cuerdas$core$words(var_args){
var G__14256 = arguments.length;
switch (G__14256) {
case 1:
return cuerdas.core.words.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.words.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cuerdas.core.words.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.words.cljs$core$IFn$_invoke$arity$2(s,cuerdas.core.words_default_re);
}));

(cuerdas.core.words.cljs$core$IFn$_invoke$arity$2 = (function (s,re){
if(typeof s === 'string'){
return cljs.core.vec(cljs.core.re_seq(re,s));
} else {
return null;
}
}));

(cuerdas.core.words.cljs$lang$maxFixedArity = 2);

cuerdas.core.interpolate_format = (function cuerdas$core$interpolate_format(s,params){
var on_match = (function cuerdas$core$interpolate_format_$_on_match(match){
var val = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(match,(0),(1)),"$"))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(match,(1)):cuerdas.core.slice.cljs$core$IFn$_invoke$arity$3(match,(2),(-2))));
var val__$1 = (((val instanceof cljs.core.Symbol))?(cuerdas.core.keyword_STAR_.cljs$core$IFn$_invoke$arity$1 ? cuerdas.core.keyword_STAR_.cljs$core$IFn$_invoke$arity$1(val) : cuerdas.core.keyword_STAR_.call(null,val)):val);
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(params,val__$1,""));
});
var $ = /(?:%\([\d\w\:\_\-]+\)s|\$[\w\d\:\_\-]+)/;
return cuerdas.core.replace(s,$,on_match);
});
cuerdas.core.indexed_format = (function cuerdas$core$indexed_format(s,params){
var params__$1 = cljs.core.clj__GT_js((function (){var or__5002__auto__ = params;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
var rx = (new RegExp("%s","g"));
return cuerdas.core.replace(s,rx,(function (_){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((((cljs.core.count(params__$1) === (0)))?"%s":params__$1.shift()));
}));
});
/**
 * Simple string interpolation.
 */
cuerdas.core.format = (function cuerdas$core$format(var_args){
var args__5732__auto__ = [];
var len__5726__auto___14260 = arguments.length;
var i__5727__auto___14261 = (0);
while(true){
if((i__5727__auto___14261 < len__5726__auto___14260)){
args__5732__auto__.push((arguments[i__5727__auto___14261]));

var G__14262 = (i__5727__auto___14261 + (1));
i__5727__auto___14261 = G__14262;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (s,more){
if(typeof s === 'string'){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(more),(1))) && (cljs.core.associative_QMARK_(cljs.core.first(more))))){
return cuerdas.core.interpolate_format(s,cljs.core.first(more));
} else {
return cuerdas.core.indexed_format(s,more);
}
} else {
return null;
}
}));

(cuerdas.core.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cuerdas.core.format.cljs$lang$applyTo = (function (seq14258){
var G__14259 = cljs.core.first(seq14258);
var seq14258__$1 = cljs.core.next(seq14258);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14259,seq14258__$1);
}));

/**
 * A shorter alias to `format` function.
 */
cuerdas.core.fmt = cuerdas.core.format;
/**
 * Joins strings together with given separator.
 */
cuerdas.core.join = (function cuerdas$core$join(var_args){
var G__14264 = arguments.length;
switch (G__14264) {
case 1:
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cuerdas.core.join.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,coll);
}));

(cuerdas.core.join.cljs$core$IFn$_invoke$arity$2 = (function (separator,coll){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(separator,coll));
}));

(cuerdas.core.join.cljs$lang$maxFixedArity = 2);

/**
 * Surround a string with another string or character.
 */
cuerdas.core.surround = (function cuerdas$core$surround(s,wrap){
if(typeof s === 'string'){
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [wrap,s,wrap], null));
} else {
return null;
}
});
/**
 * Unsurround a string surrounded by another string or character.
 */
cuerdas.core.unsurround = (function cuerdas$core$unsurround(s,surrounding){
var surrounding__$1 = surrounding.toString();
var length = cljs.core.count(surrounding__$1);
var fstr = cuerdas.core.slice.cljs$core$IFn$_invoke$arity$3(s,(0),length);
var slength = cljs.core.count(s);
var rightend = (slength - length);
var lstr = cuerdas.core.slice.cljs$core$IFn$_invoke$arity$3(s,rightend,slength);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fstr,surrounding__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lstr,surrounding__$1)))){
return cuerdas.core.slice.cljs$core$IFn$_invoke$arity$3(s,length,rightend);
} else {
return s;
}
});
/**
 * Quotes a string.
 */
cuerdas.core.quote = (function cuerdas$core$quote(var_args){
var G__14267 = arguments.length;
switch (G__14267) {
case 1:
return cuerdas.core.quote.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.quote.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cuerdas.core.quote.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.surround(s,"\"");
}));

(cuerdas.core.quote.cljs$core$IFn$_invoke$arity$2 = (function (s,qchar){
return cuerdas.core.surround(s,qchar);
}));

(cuerdas.core.quote.cljs$lang$maxFixedArity = 2);

/**
 * Unquote a string.
 */
cuerdas.core.unquote = (function cuerdas$core$unquote(var_args){
var G__14270 = arguments.length;
switch (G__14270) {
case 1:
return cuerdas.core.unquote.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.unquote.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cuerdas.core.unquote.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.unsurround(s,"\"");
}));

(cuerdas.core.unquote.cljs$core$IFn$_invoke$arity$2 = (function (s,qchar){
return cuerdas.core.unsurround(s,qchar);
}));

(cuerdas.core.unquote.cljs$lang$maxFixedArity = 2);

cuerdas.core.stylize_re1 = cljs.core.re_pattern("(?u)(\\p{Lu}+[\\p{Ll}\\u0027\\p{Ps}\\p{Pe}]*)");
cuerdas.core.stylize_re2 = cljs.core.re_pattern("(?u)[^\\p{L}\\p{N}\\u0027\\p{Ps}\\p{Pe}]+");
cuerdas.core.stylize_split = (function cuerdas$core$stylize_split(s){
if(((typeof s === 'string') || ((s instanceof cljs.core.Keyword)))){
return cljs.core.seq(cuerdas.core.split.cljs$core$IFn$_invoke$arity$2(cuerdas.core.replace(cljs.core.name(s),cuerdas.core.stylize_re1,"-$1"),cuerdas.core.stylize_re2));
} else {
return null;
}
});
cuerdas.core.stylize_join = (function cuerdas$core$stylize_join(var_args){
var G__14273 = arguments.length;
switch (G__14273) {
case 3:
return cuerdas.core.stylize_join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cuerdas.core.stylize_join.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cuerdas.core.stylize_join.cljs$core$IFn$_invoke$arity$3 = (function (coll,every_fn,join_with){
if(cljs.core.seq(coll)){
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(join_with,cljs.core.map.cljs$core$IFn$_invoke$arity$2(every_fn,coll));
} else {
return null;
}
}));

(cuerdas.core.stylize_join.cljs$core$IFn$_invoke$arity$4 = (function (p__14274,first_fn,rest_fn,join_with){
var vec__14275 = p__14274;
var seq__14276 = cljs.core.seq(vec__14275);
var first__14277 = cljs.core.first(seq__14276);
var seq__14276__$1 = cljs.core.next(seq__14276);
var fst = first__14277;
var rst = seq__14276__$1;
if(typeof fst === 'string'){
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(join_with,cljs.core.cons((first_fn.cljs$core$IFn$_invoke$arity$1 ? first_fn.cljs$core$IFn$_invoke$arity$1(fst) : first_fn.call(null,fst)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(rest_fn,rst)));
} else {
return null;
}
}));

(cuerdas.core.stylize_join.cljs$lang$maxFixedArity = 4);

cuerdas.core.stylize = (function cuerdas$core$stylize(var_args){
var G__14281 = arguments.length;
switch (G__14281) {
case 3:
return cuerdas.core.stylize.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cuerdas.core.stylize.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cuerdas.core.stylize.cljs$core$IFn$_invoke$arity$3 = (function (s,every_fn,join_with){
return cuerdas.core.stylize.cljs$core$IFn$_invoke$arity$4(s,every_fn,every_fn,join_with);
}));

(cuerdas.core.stylize.cljs$core$IFn$_invoke$arity$4 = (function (s,first_fn,rest_fn,join_with){
var remove_empty = (function (p1__14279_SHARP_){
return cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cuerdas.core.empty_QMARK_,p1__14279_SHARP_));
});
var G__14282 = cuerdas.core.stylize_split(s);
var G__14282__$1 = (((G__14282 == null))?null:remove_empty(G__14282));
if((G__14282__$1 == null)){
return null;
} else {
return cuerdas.core.stylize_join.cljs$core$IFn$_invoke$arity$4(G__14282__$1,first_fn,rest_fn,join_with);
}
}));

(cuerdas.core.stylize.cljs$lang$maxFixedArity = 4);

/**
 * Uppercases the first character of a string
 */
cuerdas.core.capital = (function cuerdas$core$capital(s){
if(typeof s === 'string'){
var len = ((s).length);
if((len === (0))){
return s;
} else {
return ""+(cuerdas.core.upper(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1))))+(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(1),len));
}
} else {
return s;
}
});
/**
 * Output will be: lowerUpperUpperNoSpaces
 *   accepts strings and keywords
 */
cuerdas.core.camel = (function cuerdas$core$camel(s){
if(typeof s === 'string'){
return (s.replace(/[:\s\_\-]+/g, "-").replace(/(^-|-$)/g, "").replace(/-./g, x=>x[1].toUpperCase()));
} else {
if((s instanceof cljs.core.Keyword)){
var G__14284 = cljs.core.name(s);
return (cuerdas.core.camel.cljs$core$IFn$_invoke$arity$1 ? cuerdas.core.camel.cljs$core$IFn$_invoke$arity$1(G__14284) : cuerdas.core.camel.call(null,G__14284));
} else {
return null;

}
}
});
/**
 * Output will be: lower_cased_and_underscore_separated
 *   accepts strings and keywords
 */
cuerdas.core.snake = (function cuerdas$core$snake(s){
if(typeof s === 'string'){
return (s.replace(/[:\s_\-]+/g, '_').replace(/[A-Z]+/g, x=> '_'+x.toLowerCase()).replace(/_+/g, '_').replace(/(^_+|_+$)/g, ''));
} else {
if((s instanceof cljs.core.Keyword)){
var G__14285 = cljs.core.name(s);
return (cuerdas.core.snake.cljs$core$IFn$_invoke$arity$1 ? cuerdas.core.snake.cljs$core$IFn$_invoke$arity$1(G__14285) : cuerdas.core.snake.call(null,G__14285));
} else {
return null;

}
}
});
/**
 * Output will be: Space separated with the first letter capitalized.
 *   accepts strings and keywords
 */
cuerdas.core.phrase = (function cuerdas$core$phrase(s){
return cuerdas.core.stylize.cljs$core$IFn$_invoke$arity$4(s,cuerdas.core.capital,cuerdas.core.lower," ");
});
/**
 * Output will be: lower cased and space separated
 *   accepts strings and keywords
 */
cuerdas.core.human = (function cuerdas$core$human(s){
return cuerdas.core.stylize.cljs$core$IFn$_invoke$arity$3(s,cuerdas.core.lower," ");
});
/**
 * Output will be: Each Word Capitalized And Separated With Spaces
 *   accepts strings and keywords
 */
cuerdas.core.title = (function cuerdas$core$title(s){
return cuerdas.core.stylize.cljs$core$IFn$_invoke$arity$3(s,cuerdas.core.capital," ");
});
/**
 * Output will be: CapitalizedAndTouchingTheNext
 *   accepts strings and keywords
 */
cuerdas.core.pascal = (function cuerdas$core$pascal(s){
return cuerdas.core.stylize.cljs$core$IFn$_invoke$arity$3(s,cuerdas.core.capital,"");
});
/**
 * Output will be: lower-cased-and-separated-with-dashes
 *   accepts strings and keywords
 */
cuerdas.core.kebab = (function cuerdas$core$kebab(s){
if(typeof s === 'string'){
return (s.replace(/[:\s_\-]+/g, '-').replace(/[A-Z]+/g, x=> '-'+x.toLowerCase()).replace(/\-+/g, '-').replace(/(^-+|-+$)/g, ''));
} else {
if((s instanceof cljs.core.Keyword)){
var G__14286 = cljs.core.name(s);
return (cuerdas.core.kebab.cljs$core$IFn$_invoke$arity$1 ? cuerdas.core.kebab.cljs$core$IFn$_invoke$arity$1(G__14286) : cuerdas.core.kebab.call(null,G__14286));
} else {
return null;

}
}
});
/**
 * Output will be either:
 *   (js-selector "-pascal-case-me") ;; => PascalCaseMe
 *   (js-selector "camel-case-me") ;; => camelCaseMe
 * 
 *   accepts keywords and strings, with any standard delimiter
 */
cuerdas.core.js_selector = (function cuerdas$core$js_selector(s){
var G__14287 = cuerdas.core.stylize_split(s);
if((G__14287 == null)){
return null;
} else {
return cuerdas.core.stylize_join.cljs$core$IFn$_invoke$arity$4(G__14287,cljs.core.identity,cuerdas.core.capital,"");
}
});
/**
 * Output will be either:
 *   (js-selector "LeadingDash") ;; => -leading-dash
 *   (js-selector "noLeadingDash") ;; => no-leading-dash
 * 
 *   accepts keywords and strings, with any standard delimiter
 */
cuerdas.core.css_selector = (function cuerdas$core$css_selector(s){
var G__14288 = cuerdas.core.stylize_split(s);
if((G__14288 == null)){
return null;
} else {
return cuerdas.core.stylize_join.cljs$core$IFn$_invoke$arity$3(G__14288,cuerdas.core.lower,"-");
}
});
cuerdas.core._PLUS_slug_tr_map_PLUS_ = cljs.core.zipmap("\u0105\u00E0\u00E1\u00E4\u00E2\u00E3\u00E5\u00E6\u0103\u0107\u010D\u0109\u0119\u00E8\u00E9\u00EB\u00EA\u011D\u0125\u00EC\u00ED\u00EF\u00EE\u0135\u0142\u013E\u0144\u0148\u00F2\u00F3\u00F6\u0151\u00F4\u00F5\u00F0\u00F8\u015B\u0219\u0161\u015D\u0165\u021B\u016D\u00F9\u00FA\u00FC\u0171\u00FB\u00F1\u00FF\u00FD\u00E7\u017C\u017A\u017E","aaaaaaaaaccceeeeeghiiiijllnnoooooooossssttuuuuuunyyczzz");
/**
 * Transform text into a URL slug.
 */
cuerdas.core.slug = (function cuerdas$core$slug(s){
var G__14289 = cuerdas.core.lower(s);
var G__14289__$1 = (((G__14289 == null))?null:clojure.string.escape(G__14289,cuerdas.core._PLUS_slug_tr_map_PLUS_));
var G__14289__$2 = (((G__14289__$1 == null))?null:cuerdas.core.replace(G__14289__$1,/[^\w\s]+/,""));
if((G__14289__$2 == null)){
return null;
} else {
return cuerdas.core.replace(G__14289__$2,/\s+/,"-");
}
});
cuerdas.core.uslug_re1 = cljs.core.re_pattern("(?u)[^\\p{L}\\p{N}]+");
cuerdas.core.uslug_re2 = cljs.core.re_pattern("(?u)[\\p{Z}\\s]+");
/**
 * Unicode friendly version of `slug` function.
 */
cuerdas.core.uslug = (function cuerdas$core$uslug(s){
var G__14290 = cuerdas.core.lower(s);
var G__14290__$1 = (((G__14290 == null))?null:cuerdas.core.replace(G__14290,cuerdas.core.uslug_re1," "));
if((G__14290__$1 == null)){
return null;
} else {
return cuerdas.core.replace(G__14290__$1,cuerdas.core.uslug_re2,"-");
}
});
/**
 * Safer version of clojure keyword, accepting a
 *   symbol for the namespace and kebab-casing the key
 */
cuerdas.core.keyword = (function cuerdas$core$keyword(var_args){
var G__14292 = arguments.length;
switch (G__14292) {
case 1:
return cuerdas.core.keyword.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.keyword.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cuerdas.core.keyword.cljs$core$IFn$_invoke$arity$1 = (function (k){
var G__14293 = cuerdas.core.kebab(k);
return (cuerdas.core.keyword_STAR_.cljs$core$IFn$_invoke$arity$1 ? cuerdas.core.keyword_STAR_.cljs$core$IFn$_invoke$arity$1(G__14293) : cuerdas.core.keyword_STAR_.call(null,G__14293));
}));

(cuerdas.core.keyword.cljs$core$IFn$_invoke$arity$2 = (function (n,k){
var G__14294 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(n);
var G__14295 = cuerdas.core.kebab(k);
return (cuerdas.core.keyword_STAR_.cljs$core$IFn$_invoke$arity$2 ? cuerdas.core.keyword_STAR_.cljs$core$IFn$_invoke$arity$2(G__14294,G__14295) : cuerdas.core.keyword_STAR_.call(null,G__14294,G__14295));
}));

(cuerdas.core.keyword.cljs$lang$maxFixedArity = 2);

/**
 * Returns true if s can be found in coll.
 */
cuerdas.core.one_of_QMARK_ = (function cuerdas$core$one_of_QMARK_(coll,s){
return cljs.core.boolean$(cljs.core.some((function (p1__14297_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__14297_SHARP_,s);
}),coll));
});
/**
 * Returns true for 1/on/true/yes string values (case-insensitive),
 *   false otherwise.
 */
cuerdas.core.to_bool = (function cuerdas$core$to_bool(s){
return cuerdas.core.one_of_QMARK_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","on","true","yes"], null),cuerdas.core.lower(s));
});
/**
 * Pads the str with characters until the total string
 *   length is equal to the passed length parameter. By
 *   default, pads on the left with the space char.
 */
cuerdas.core.pad = (function cuerdas$core$pad(var_args){
var G__14299 = arguments.length;
switch (G__14299) {
case 1:
return cuerdas.core.pad.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.pad.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cuerdas.core.pad.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.pad.cljs$core$IFn$_invoke$arity$2(s,null);
}));

(cuerdas.core.pad.cljs$core$IFn$_invoke$arity$2 = (function (s,p__14300){
var map__14301 = p__14300;
var map__14301__$1 = cljs.core.__destructure_map(map__14301);
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14301__$1,cljs.core.cst$kw$length,(0));
var padding = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14301__$1,cljs.core.cst$kw$padding," ");
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14301__$1,cljs.core.cst$kw$type,cljs.core.cst$kw$left);
if(typeof s === 'string'){
var padding__$1 = cuerdas.core.slice.cljs$core$IFn$_invoke$arity$3(padding,(0),(1));
var padlen = (length - ((s).length));
var padlen__$1 = (((padlen < (0)))?(0):padlen);
var pred__14302 = cljs.core._EQ_;
var expr__14303 = type;
if(cljs.core.truth_((function (){var G__14305 = cljs.core.cst$kw$right;
var G__14306 = expr__14303;
return (pred__14302.cljs$core$IFn$_invoke$arity$2 ? pred__14302.cljs$core$IFn$_invoke$arity$2(G__14305,G__14306) : pred__14302.call(null,G__14305,G__14306));
})())){
return [s,cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$2(padding__$1,padlen__$1)].join('');
} else {
if(cljs.core.truth_((function (){var G__14307 = cljs.core.cst$kw$both;
var G__14308 = expr__14303;
return (pred__14302.cljs$core$IFn$_invoke$arity$2 ? pred__14302.cljs$core$IFn$_invoke$arity$2(G__14307,G__14308) : pred__14302.call(null,G__14307,G__14308));
})())){
var first = cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$2(padding__$1,(function (){var G__14309 = (padlen__$1 / (2));
return Math.ceil(G__14309);
})());
var second = cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$2(padding__$1,(function (){var G__14310 = (padlen__$1 / (2));
return Math.floor(G__14310);
})());
return [first,s,second].join('');
} else {
if(cljs.core.truth_((function (){var G__14311 = cljs.core.cst$kw$left;
var G__14312 = expr__14303;
return (pred__14302.cljs$core$IFn$_invoke$arity$2 ? pred__14302.cljs$core$IFn$_invoke$arity$2(G__14311,G__14312) : pred__14302.call(null,G__14311,G__14312));
})())){
return [cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$2(padding__$1,padlen__$1),s].join('');
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__14303)].join('')));
}
}
}
} else {
return null;
}
}));

(cuerdas.core.pad.cljs$lang$maxFixedArity = 2);

/**
 * Converts all adjacent whitespace characters
 *   to a single space.
 */
cuerdas.core.collapse_whitespace = (function cuerdas$core$collapse_whitespace(s){
var G__14314 = s;
var G__14314__$1 = (((G__14314 == null))?null:cuerdas.core.replace(G__14314,cljs.core.re_pattern("(?u)[\\p{Z}\\s]+")," "));
if((G__14314__$1 == null)){
return null;
} else {
return cuerdas.core.replace(G__14314__$1,/^\s+|\s+$/,"");
}
});
cuerdas.core.escape_html = (function cuerdas$core$escape_html(s){

if(cljs.core.truth_(s)){
return cuerdas.core.replace(cuerdas.core.replace(cuerdas.core.replace(cuerdas.core.replace(s,"&","&amp;"),"<","&lt;"),">","&gt;"),"\"","&quot;");
} else {
return null;
}
});
/**
 * Converts entity characters to HTML equivalents.
 */
cuerdas.core.unescape_html = (function cuerdas$core$unescape_html(s){
if(cljs.core.truth_(s)){
return cuerdas.core.replace(cuerdas.core.replace(cuerdas.core.replace(cuerdas.core.replace(s,"&amp;","&"),"&lt;","<"),"&gt;",">"),"&quot;","\"");
} else {
return null;
}
});
cuerdas.core.strip_tags_impl = (function cuerdas$core$strip_tags_impl(s,tags,mappings){
var kwdize = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cuerdas.core.keyword,cuerdas.core.lower,cljs.core.name);
var tags__$1 = (((tags == null))?tags:((typeof tags === 'string')?cljs.core.PersistentHashSet.createAsIfByAssoc([(kwdize.cljs$core$IFn$_invoke$arity$1 ? kwdize.cljs$core$IFn$_invoke$arity$1(tags) : kwdize.call(null,tags))]):((cljs.core.sequential_QMARK_(tags))?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(kwdize,tags)):null)));
var rx = cljs.core.re_pattern("<\\/?([^<>]*)>");
return cuerdas.core.replace(s,rx,(((tags__$1 == null))?(function (p__14315){
var vec__14316 = p__14315;
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14316,(0),null);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14316,(1),null);
var tag__$1 = (kwdize.cljs$core$IFn$_invoke$arity$1 ? kwdize.cljs$core$IFn$_invoke$arity$1(tag) : kwdize.call(null,tag));
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(mappings,tag__$1,"");
}):(function (p__14319){
var vec__14320 = p__14319;
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14320,(0),null);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14320,(1),null);
var tag__$1 = (kwdize.cljs$core$IFn$_invoke$arity$1 ? kwdize.cljs$core$IFn$_invoke$arity$1(tag) : kwdize.call(null,tag));
if(cljs.core.truth_((tags__$1.cljs$core$IFn$_invoke$arity$1 ? tags__$1.cljs$core$IFn$_invoke$arity$1(tag__$1) : tags__$1.call(null,tag__$1)))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(mappings,tag__$1,"");
} else {
return match;
}
})));
});
/**
 * Remove html tags from string.
 */
cuerdas.core.strip_tags = (function cuerdas$core$strip_tags(var_args){
var G__14324 = arguments.length;
switch (G__14324) {
case 1:
return cuerdas.core.strip_tags.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.strip_tags.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cuerdas.core.strip_tags.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cuerdas.core.strip_tags.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.strip_tags_impl(s,null,cljs.core.PersistentArrayMap.EMPTY);
}));

(cuerdas.core.strip_tags.cljs$core$IFn$_invoke$arity$2 = (function (s,tags){
if(cljs.core.map_QMARK_(tags)){
return cuerdas.core.strip_tags_impl(s,null,tags);
} else {
return cuerdas.core.strip_tags_impl(s,tags,cljs.core.PersistentArrayMap.EMPTY);
}
}));

(cuerdas.core.strip_tags.cljs$core$IFn$_invoke$arity$3 = (function (s,tags,mapping){
return cuerdas.core.strip_tags_impl(s,tags,mapping);
}));

(cuerdas.core.strip_tags.cljs$lang$maxFixedArity = 3);

/**
 * Find string that is nested in between two strings. Return first match
 */
cuerdas.core.substr_between = (function cuerdas$core$substr_between(s,prefix,suffix){
if(((cuerdas.core.includes_QMARK_(s,prefix)) && (cuerdas.core.includes_QMARK_(s,suffix)))){
var G__14326 = cuerdas.core.split.cljs$core$IFn$_invoke$arity$2(s,prefix);
var G__14326__$1 = (((G__14326 == null))?null:cljs.core.second(G__14326));
var G__14326__$2 = (((G__14326__$1 == null))?null:cuerdas.core.split.cljs$core$IFn$_invoke$arity$2(G__14326__$1,suffix));
if((G__14326__$2 == null)){
return null;
} else {
return cljs.core.first(G__14326__$2);
}
} else {
return null;
}
});
/**
 * Unindent multiline text. Uses either a supplied regex or the shortest
 *   beginning-of-line to non-whitespace distance
 */
cuerdas.core.unindent = (function cuerdas$core$unindent(var_args){
var G__14330 = arguments.length;
switch (G__14330) {
case 1:
return cuerdas.core.unindent.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.unindent.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cuerdas.core.unindent.cljs$core$IFn$_invoke$arity$1 = (function (s){
if(typeof s === 'string'){
var re_space = /^( +)/;
var all_lines = cuerdas.core.lines(s);
var all_indents = cljs.core.not_empty(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cuerdas.core.blank_QMARK_,cljs.core.rest(all_lines)));
var all_indents__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(all_indents,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last(all_lines)], null));
var all_indents__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (o){
var result = cljs.core.re_find(re_space,o);
return cljs.core.count(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(result,(1)));
}),all_indents__$1);
var min_indent = cljs.core.re_pattern(["^ {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,all_indents__$2)),"}"].join(''));
return cuerdas.core.unlines(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14327_SHARP_){
return cuerdas.core.replace(p1__14327_SHARP_,min_indent,"");
}),all_lines));
} else {
return null;
}
}));

(cuerdas.core.unindent.cljs$core$IFn$_invoke$arity$2 = (function (s,re){
return cuerdas.core.unlines(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14328_SHARP_){
return cuerdas.core.replace(p1__14328_SHARP_,re,"");
}),cuerdas.core.lines(s)));
}));

(cuerdas.core.unindent.cljs$lang$maxFixedArity = 2);

/**
 * Unindent multiline text. Uses either a supplied regex or the shortest
 *   beginning-of-line to non-whitespace distance
 * 
 *   DEPRECTED: replaced by `uninindent`
 */
cuerdas.core._LT__LT__ = (function cuerdas$core$_LT__LT__(var_args){
var G__14336 = arguments.length;
switch (G__14336) {
case 1:
return cuerdas.core._LT__LT__.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core._LT__LT__.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cuerdas.core._LT__LT__.cljs$core$IFn$_invoke$arity$1 = (function (s){
var re = cljs.core.re_pattern(cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic("^ {%s}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14332_SHARP_){
return cljs.core.count(cljs.core.second(cljs.core.re_find(/^( +)/,p1__14332_SHARP_)));
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last(cuerdas.core.lines(s))], null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cuerdas.core.blank_QMARK_,cljs.core.rest(cuerdas.core.lines(s))))))], 0)));
return cuerdas.core.unlines(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14333_SHARP_){
return cuerdas.core.replace(p1__14333_SHARP_,re,"");
}),cuerdas.core.lines(s)));
}));

(cuerdas.core._LT__LT__.cljs$core$IFn$_invoke$arity$2 = (function (re,s){
return cuerdas.core.unlines(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14334_SHARP_){
return cuerdas.core.replace(p1__14334_SHARP_,re,"");
}),cuerdas.core.lines(s)));
}));

(cuerdas.core._LT__LT__.cljs$lang$maxFixedArity = 2);


// Compiled by ClojureScript 1.11.132 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('cuerdas.regexp');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.string');
/**
 * Return `true` if `x` is a regexp pattern
 *   instance.
 */
cuerdas.regexp.regexp_QMARK_ = (function cuerdas$regexp$regexp_QMARK_(x){
return cljs.core.regexp_QMARK_(x);
});
/**
 * Escapes characters in the string that are not safe
 * to use in a RegExp.
 */
cuerdas.regexp.escape = (function cuerdas$regexp$escape(s){
return goog.string.regExpEscape(s);
});

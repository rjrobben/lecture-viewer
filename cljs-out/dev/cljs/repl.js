// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31983){
var map__31984 = p__31983;
var map__31984__$1 = cljs.core.__destructure_map.call(null,map__31984);
var m = map__31984__$1;
var n = cljs.core.get.call(null,map__31984__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__31984__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31985_32013 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31986_32014 = null;
var count__31987_32015 = (0);
var i__31988_32016 = (0);
while(true){
if((i__31988_32016 < count__31987_32015)){
var f_32017 = cljs.core._nth.call(null,chunk__31986_32014,i__31988_32016);
cljs.core.println.call(null,"  ",f_32017);


var G__32018 = seq__31985_32013;
var G__32019 = chunk__31986_32014;
var G__32020 = count__31987_32015;
var G__32021 = (i__31988_32016 + (1));
seq__31985_32013 = G__32018;
chunk__31986_32014 = G__32019;
count__31987_32015 = G__32020;
i__31988_32016 = G__32021;
continue;
} else {
var temp__5823__auto___32022 = cljs.core.seq.call(null,seq__31985_32013);
if(temp__5823__auto___32022){
var seq__31985_32023__$1 = temp__5823__auto___32022;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31985_32023__$1)){
var c__5525__auto___32024 = cljs.core.chunk_first.call(null,seq__31985_32023__$1);
var G__32025 = cljs.core.chunk_rest.call(null,seq__31985_32023__$1);
var G__32026 = c__5525__auto___32024;
var G__32027 = cljs.core.count.call(null,c__5525__auto___32024);
var G__32028 = (0);
seq__31985_32013 = G__32025;
chunk__31986_32014 = G__32026;
count__31987_32015 = G__32027;
i__31988_32016 = G__32028;
continue;
} else {
var f_32029 = cljs.core.first.call(null,seq__31985_32023__$1);
cljs.core.println.call(null,"  ",f_32029);


var G__32030 = cljs.core.next.call(null,seq__31985_32023__$1);
var G__32031 = null;
var G__32032 = (0);
var G__32033 = (0);
seq__31985_32013 = G__32030;
chunk__31986_32014 = G__32031;
count__31987_32015 = G__32032;
i__31988_32016 = G__32033;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32034 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_32034);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_32034)))?cljs.core.second.call(null,arglists_32034):arglists_32034));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31989_32035 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31990_32036 = null;
var count__31991_32037 = (0);
var i__31992_32038 = (0);
while(true){
if((i__31992_32038 < count__31991_32037)){
var vec__32001_32039 = cljs.core._nth.call(null,chunk__31990_32036,i__31992_32038);
var name_32040 = cljs.core.nth.call(null,vec__32001_32039,(0),null);
var map__32004_32041 = cljs.core.nth.call(null,vec__32001_32039,(1),null);
var map__32004_32042__$1 = cljs.core.__destructure_map.call(null,map__32004_32041);
var doc_32043 = cljs.core.get.call(null,map__32004_32042__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32044 = cljs.core.get.call(null,map__32004_32042__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32040);

cljs.core.println.call(null," ",arglists_32044);

if(cljs.core.truth_(doc_32043)){
cljs.core.println.call(null," ",doc_32043);
} else {
}


var G__32045 = seq__31989_32035;
var G__32046 = chunk__31990_32036;
var G__32047 = count__31991_32037;
var G__32048 = (i__31992_32038 + (1));
seq__31989_32035 = G__32045;
chunk__31990_32036 = G__32046;
count__31991_32037 = G__32047;
i__31992_32038 = G__32048;
continue;
} else {
var temp__5823__auto___32049 = cljs.core.seq.call(null,seq__31989_32035);
if(temp__5823__auto___32049){
var seq__31989_32050__$1 = temp__5823__auto___32049;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31989_32050__$1)){
var c__5525__auto___32051 = cljs.core.chunk_first.call(null,seq__31989_32050__$1);
var G__32052 = cljs.core.chunk_rest.call(null,seq__31989_32050__$1);
var G__32053 = c__5525__auto___32051;
var G__32054 = cljs.core.count.call(null,c__5525__auto___32051);
var G__32055 = (0);
seq__31989_32035 = G__32052;
chunk__31990_32036 = G__32053;
count__31991_32037 = G__32054;
i__31992_32038 = G__32055;
continue;
} else {
var vec__32005_32056 = cljs.core.first.call(null,seq__31989_32050__$1);
var name_32057 = cljs.core.nth.call(null,vec__32005_32056,(0),null);
var map__32008_32058 = cljs.core.nth.call(null,vec__32005_32056,(1),null);
var map__32008_32059__$1 = cljs.core.__destructure_map.call(null,map__32008_32058);
var doc_32060 = cljs.core.get.call(null,map__32008_32059__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32061 = cljs.core.get.call(null,map__32008_32059__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32057);

cljs.core.println.call(null," ",arglists_32061);

if(cljs.core.truth_(doc_32060)){
cljs.core.println.call(null," ",doc_32060);
} else {
}


var G__32062 = cljs.core.next.call(null,seq__31989_32050__$1);
var G__32063 = null;
var G__32064 = (0);
var G__32065 = (0);
seq__31989_32035 = G__32062;
chunk__31990_32036 = G__32063;
count__31991_32037 = G__32064;
i__31992_32038 = G__32065;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5823__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5823__auto__)){
var fnspec = temp__5823__auto__;
cljs.core.print.call(null,"Spec");

var seq__32009 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__32010 = null;
var count__32011 = (0);
var i__32012 = (0);
while(true){
if((i__32012 < count__32011)){
var role = cljs.core._nth.call(null,chunk__32010,i__32012);
var temp__5823__auto___32066__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5823__auto___32066__$1)){
var spec_32067 = temp__5823__auto___32066__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_32067));
} else {
}


var G__32068 = seq__32009;
var G__32069 = chunk__32010;
var G__32070 = count__32011;
var G__32071 = (i__32012 + (1));
seq__32009 = G__32068;
chunk__32010 = G__32069;
count__32011 = G__32070;
i__32012 = G__32071;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq.call(null,seq__32009);
if(temp__5823__auto____$1){
var seq__32009__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32009__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__32009__$1);
var G__32072 = cljs.core.chunk_rest.call(null,seq__32009__$1);
var G__32073 = c__5525__auto__;
var G__32074 = cljs.core.count.call(null,c__5525__auto__);
var G__32075 = (0);
seq__32009 = G__32072;
chunk__32010 = G__32073;
count__32011 = G__32074;
i__32012 = G__32075;
continue;
} else {
var role = cljs.core.first.call(null,seq__32009__$1);
var temp__5823__auto___32076__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5823__auto___32076__$2)){
var spec_32077 = temp__5823__auto___32076__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_32077));
} else {
}


var G__32078 = cljs.core.next.call(null,seq__32009__$1);
var G__32079 = null;
var G__32080 = (0);
var G__32081 = (0);
seq__32009 = G__32078;
chunk__32010 = G__32079;
count__32011 = G__32080;
i__32012 = G__32081;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map.call(null,o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__32084 = datafied_throwable;
var map__32084__$1 = cljs.core.__destructure_map.call(null,map__32084);
var via = cljs.core.get.call(null,map__32084__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__32084__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__32084__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__32085 = cljs.core.last.call(null,via);
var map__32085__$1 = cljs.core.__destructure_map.call(null,map__32085);
var type = cljs.core.get.call(null,map__32085__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__32085__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__32085__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__32086 = data;
var map__32086__$1 = cljs.core.__destructure_map.call(null,map__32086);
var problems = cljs.core.get.call(null,map__32086__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__32086__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__32086__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__32087 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__32087__$1 = cljs.core.__destructure_map.call(null,map__32087);
var top_data = map__32087__$1;
var source = cljs.core.get.call(null,map__32087__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__32088 = phase;
var G__32088__$1 = (((G__32088 instanceof cljs.core.Keyword))?G__32088.fqn:null);
switch (G__32088__$1) {
case "read-source":
var map__32089 = data;
var map__32089__$1 = cljs.core.__destructure_map.call(null,map__32089);
var line = cljs.core.get.call(null,map__32089__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__32089__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__32090 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__32090__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__32090,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__32090);
var G__32090__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__32090__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__32090__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__32090__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__32090__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__32091 = top_data;
var G__32091__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__32091,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__32091);
var G__32091__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__32091__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__32091__$1);
var G__32091__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__32091__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__32091__$2);
var G__32091__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__32091__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__32091__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__32091__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__32091__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__32092 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__32092,(0),null);
var method = cljs.core.nth.call(null,vec__32092,(1),null);
var file = cljs.core.nth.call(null,vec__32092,(2),null);
var line = cljs.core.nth.call(null,vec__32092,(3),null);
var G__32095 = top_data;
var G__32095__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__32095,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__32095);
var G__32095__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__32095__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__32095__$1);
var G__32095__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.call(null,G__32095__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__32095__$2);
var G__32095__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__32095__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__32095__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__32095__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__32095__$4;
}

break;
case "execution":
var vec__32096 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__32096,(0),null);
var method = cljs.core.nth.call(null,vec__32096,(1),null);
var file = cljs.core.nth.call(null,vec__32096,(2),null);
var line = cljs.core.nth.call(null,vec__32096,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__32083_SHARP_){
var or__5002__auto__ = (p1__32083_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__32083_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__32099 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__32099__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__32099,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__32099);
var G__32099__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__32099__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__32099__$1);
var G__32099__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.call(null,G__32099__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__32099__$2);
var G__32099__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__32099__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__32099__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__32099__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__32099__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32088__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__32103){
var map__32104 = p__32103;
var map__32104__$1 = cljs.core.__destructure_map.call(null,map__32104);
var triage_data = map__32104__$1;
var phase = cljs.core.get.call(null,map__32104__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__32104__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__32104__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__32104__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__32104__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__32104__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__32104__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__32104__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__32105 = phase;
var G__32105__$1 = (((G__32105 instanceof cljs.core.Keyword))?G__32105.fqn:null);
switch (G__32105__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__32106_32115 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__32107_32116 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__32108_32117 = true;
var _STAR_print_fn_STAR__temp_val__32109_32118 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32108_32117);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32109_32118);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__32101_SHARP_){
return cljs.core.dissoc.call(null,p1__32101_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32107_32116);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32106_32115);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__32110_32119 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__32111_32120 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__32112_32121 = true;
var _STAR_print_fn_STAR__temp_val__32113_32122 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32112_32121);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32113_32122);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__32102_SHARP_){
return cljs.core.dissoc.call(null,p1__32102_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32111_32120);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32110_32119);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32105__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map

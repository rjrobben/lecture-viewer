// Compiled by ClojureScript 1.11.132 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('pcll.lecture_viewer');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cuerdas.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('reagent.dom');
pcll.lecture_viewer.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$subtitles,cljs.core.cst$kw$current_DASH_time,cljs.core.cst$kw$drag_DASH_start_DASH_info,cljs.core.cst$kw$video_DASH_url,cljs.core.cst$kw$duration,cljs.core.cst$kw$playing_QMARK_,cljs.core.cst$kw$filtered_DASH_subtitles,cljs.core.cst$kw$dragging_DASH_subtitle_QMARK_,cljs.core.cst$kw$search_DASH_query,cljs.core.cst$kw$playback_DASH_speed,cljs.core.cst$kw$subtitle_DASH_offset],[cljs.core.PersistentVector.EMPTY,(0),null,null,(0),false,cljs.core.PersistentVector.EMPTY,false,"",1.0,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(289),cljs.core.cst$kw$y,(0)], null)]));
pcll.lecture_viewer.video_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
pcll.lecture_viewer.parse_vtt_time = (function pcll$lecture_viewer$parse_vtt_time(time_str){
var temp__5821__auto__ = cljs.core.re_matches(/(\d{2}):(\d{2}):(\d{2})\.(\d{3})/,time_str);
if(cljs.core.truth_(temp__5821__auto__)){
var matches = temp__5821__auto__;
var vec__16045 = matches;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16045,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16045,(1),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16045,(2),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16045,(3),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16045,(4),null);
var hours = parseInt(h);
var minutes = parseInt(m);
var seconds = parseInt(s);
var milliseconds = parseInt(ms);
return ((((hours * (3600000)) + (minutes * (60000))) + (seconds * (1000))) + milliseconds);
} else {
var temp__5821__auto____$1 = cljs.core.re_matches(/(\d{2}):(\d{2})\.(\d{3})/,time_str);
if(cljs.core.truth_(temp__5821__auto____$1)){
var matches = temp__5821__auto____$1;
var vec__16048 = matches;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16048,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16048,(1),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16048,(2),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16048,(3),null);
var minutes = parseInt(m);
var seconds = parseInt(s);
var milliseconds = parseInt(ms);
return (((minutes * (60000)) + (seconds * (1000))) + milliseconds);
} else {
console.warn("Could not parse VTT time:",time_str);

return (0);
}
}
});
pcll.lecture_viewer.pad_number = (function pcll$lecture_viewer$pad_number(num,len,pad_char){
var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(num);
if((((s).length) >= len)){
return s;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len - ((s).length)),pad_char))),s].join('');
}
});
pcll.lecture_viewer.parse_vtt = (function pcll$lecture_viewer$parse_vtt(vtt_text){
try{var lines = cuerdas.core.lines(vtt_text);
var blocks = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__16051_SHARP_){
return cljs.core.every_QMARK_(cuerdas.core.blank_QMARK_,p1__16051_SHARP_);
}),cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(cuerdas.core.blank_QMARK_,lines));
return cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (block){
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(block),"WEBVTT");
if(and__5000__auto__){
var and__5000__auto____$1 = (cljs.core.count(block) >= (1));
if(and__5000__auto____$1){
return cljs.core.some((function (p1__16052_SHARP_){
return cuerdas.core.includes_QMARK_(p1__16052_SHARP_,"-->");
}),block);
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
var timestamp_line_index = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,line){
if(cuerdas.core.includes_QMARK_(line,"-->")){
return idx;
} else {
return null;
}
}),block));
var timestamp_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(block,timestamp_line_index,null);
var text_lines = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((timestamp_line_index + (1)),block));
if(cljs.core.truth_(timestamp_line)){
var time_matches = cljs.core.re_find(/(\d{2}:\d{2}:\d{2}\.\d{3}|\d{2}:\d{2}\.\d{3})\s*-->\s*(\d{2}:\d{2}:\d{2}\.\d{3}|\d{2}:\d{2}\.\d{3})/,timestamp_line);
if(cljs.core.truth_(time_matches)){
var vec__16054 = time_matches;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16054,(0),null);
var start_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16054,(1),null);
var end_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16054,(2),null);
var parsed_cue = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$start,pcll.lecture_viewer.parse_vtt_time(start_str),cljs.core.cst$kw$end,pcll.lecture_viewer.parse_vtt_time(end_str),cljs.core.cst$kw$text,cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("\n",text_lines)], null);
return parsed_cue;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}),blocks));
}catch (e16053){if((e16053 instanceof Error)){
var e = e16053;
console.error("Error parsing VTT:",e);

return cljs.core.PersistentVector.EMPTY;
} else {
throw e16053;

}
}});
pcll.lecture_viewer.format_time = (function pcll$lecture_viewer$format_time(time_ms){
if(cljs.core.truth_(isNaN(time_ms))){
return "00:00";
} else {
var total_seconds = Math.floor((time_ms / (1000)));
var minutes = Math.floor((total_seconds / (60)));
var seconds = cljs.core.mod(total_seconds,(60));
return [pcll.lecture_viewer.pad_number(minutes,(2),"0"),":",pcll.lecture_viewer.pad_number(seconds,(2),"0")].join('');
}
});
pcll.lecture_viewer.toggle_play = (function pcll$lecture_viewer$toggle_play(){
var temp__5823__auto__ = cljs.core.deref(pcll.lecture_viewer.video_ref);
if(cljs.core.truth_(temp__5823__auto__)){
var video = temp__5823__auto__;
if(cljs.core.truth_(video.paused)){
video.play();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pcll.lecture_viewer.app_state,cljs.core.assoc,cljs.core.cst$kw$playing_QMARK_,true);
} else {
video.pause();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pcll.lecture_viewer.app_state,cljs.core.assoc,cljs.core.cst$kw$playing_QMARK_,false);
}
} else {
return null;
}
});
pcll.lecture_viewer.set_playback_speed = (function pcll$lecture_viewer$set_playback_speed(speed_str){
var temp__5823__auto__ = cljs.core.deref(pcll.lecture_viewer.video_ref);
if(cljs.core.truth_(temp__5823__auto__)){
var video = temp__5823__auto__;
var speed = parseFloat(speed_str);
(video.playbackRate = speed);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pcll.lecture_viewer.app_state,cljs.core.assoc,cljs.core.cst$kw$playback_DASH_speed,speed);
} else {
return null;
}
});
pcll.lecture_viewer.seek = (function pcll$lecture_viewer$seek(offset_seconds){
var temp__5823__auto__ = cljs.core.deref(pcll.lecture_viewer.video_ref);
if(cljs.core.truth_(temp__5823__auto__)){
var video = temp__5823__auto__;
var new_time = (video.currentTime + offset_seconds);
return (video.currentTime = (function (){var x__5087__auto__ = (0);
var y__5088__auto__ = new_time;
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})());
} else {
return null;
}
});
pcll.lecture_viewer.set_position = (function pcll$lecture_viewer$set_position(time_ms){
var temp__5823__auto__ = cljs.core.deref(pcll.lecture_viewer.video_ref);
if(cljs.core.truth_(temp__5823__auto__)){
var video = temp__5823__auto__;
return (video.currentTime = (time_ms / (1000)));
} else {
return null;
}
});
pcll.lecture_viewer.get_current_subtitle_index = (function pcll$lecture_viewer$get_current_subtitle_index(subtitles,current_time_ms){
return cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,p__16057){
var map__16058 = p__16057;
var map__16058__$1 = cljs.core.__destructure_map(map__16058);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16058__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16058__$1,cljs.core.cst$kw$end);
if((((start <= current_time_ms)) && ((current_time_ms <= end)))){
return idx;
} else {
return null;
}
}),subtitles));
});
pcll.lecture_viewer.handle_subtitle_drag_move = (function pcll$lecture_viewer$handle_subtitle_drag_move(event){
if(cljs.core.truth_(cljs.core.cst$kw$dragging_DASH_subtitle_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pcll.lecture_viewer.app_state)))){
var start_info = cljs.core.cst$kw$drag_DASH_start_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pcll.lecture_viewer.app_state));
var dx = (event.clientX - cljs.core.cst$kw$start_DASH_x.cljs$core$IFn$_invoke$arity$1(start_info));
var dy = (event.clientY - cljs.core.cst$kw$start_DASH_y.cljs$core$IFn$_invoke$arity$1(start_info));
var new_x = (cljs.core.cst$kw$initial_DASH_offset_DASH_x.cljs$core$IFn$_invoke$arity$1(start_info) + dx);
var new_y = (cljs.core.cst$kw$initial_DASH_offset_DASH_y.cljs$core$IFn$_invoke$arity$1(start_info) + dy);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pcll.lecture_viewer.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$subtitle_DASH_offset], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,new_x,cljs.core.cst$kw$y,new_y], null));
} else {
return null;
}
});
pcll.lecture_viewer.handle_subtitle_drag_end = (function pcll$lecture_viewer$handle_subtitle_drag_end(event){
if(cljs.core.truth_(cljs.core.cst$kw$dragging_DASH_subtitle_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pcll.lecture_viewer.app_state)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(pcll.lecture_viewer.app_state,cljs.core.assoc,cljs.core.cst$kw$dragging_DASH_subtitle_QMARK_,false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$drag_DASH_start_DASH_info,null], 0));

window.removeEventListener("mousemove",pcll.lecture_viewer.handle_subtitle_drag_move);

return window.removeEventListener("mouseup",pcll.lecture_viewer.handle_subtitle_drag_end);
} else {
return null;
}
});
pcll.lecture_viewer.handle_subtitle_drag_start = (function pcll$lecture_viewer$handle_subtitle_drag_start(event){
event.preventDefault();

var current_offset = cljs.core.cst$kw$subtitle_DASH_offset.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pcll.lecture_viewer.app_state));
var initial_x = (function (){var or__5002__auto__ = cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(current_offset);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})();
var initial_y = (function (){var or__5002__auto__ = cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(current_offset);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(pcll.lecture_viewer.app_state,cljs.core.assoc,cljs.core.cst$kw$dragging_DASH_subtitle_QMARK_,true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$drag_DASH_start_DASH_info,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$start_DASH_x,event.clientX,cljs.core.cst$kw$start_DASH_y,event.clientY,cljs.core.cst$kw$initial_DASH_offset_DASH_x,initial_x,cljs.core.cst$kw$initial_DASH_offset_DASH_y,initial_y], null)], 0));

window.addEventListener("mousemove",pcll.lecture_viewer.handle_subtitle_drag_move);

return window.addEventListener("mouseup",pcll.lecture_viewer.handle_subtitle_drag_end);
});
pcll.lecture_viewer.video_player = (function pcll$lecture_viewer$video_player(){
var current_time = cljs.core.cst$kw$current_DASH_time.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pcll.lecture_viewer.app_state));
var subtitles = cljs.core.cst$kw$subtitles.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pcll.lecture_viewer.app_state));
var current_idx = pcll.lecture_viewer.get_current_subtitle_index(subtitles,current_time);
var current_subtitle = (cljs.core.truth_(current_idx)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(subtitles,current_idx):null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$video_DASH_container,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,"relative"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$video,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$ref,(function (p1__16059_SHARP_){
return cljs.core.reset_BANG_(pcll.lecture_viewer.video_ref,p1__16059_SHARP_);
}),cljs.core.cst$kw$src,cljs.core.cst$kw$video_DASH_url.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pcll.lecture_viewer.app_state)),cljs.core.cst$kw$controls,false,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null),cljs.core.cst$kw$on_DASH_time_DASH_update,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pcll.lecture_viewer.app_state,cljs.core.assoc,cljs.core.cst$kw$current_DASH_time,((1000) * cljs.core.deref(pcll.lecture_viewer.video_ref).currentTime));
}),cljs.core.cst$kw$on_DASH_loaded_DASH_metadata,(function (){
var duration = ((1000) * cljs.core.deref(pcll.lecture_viewer.video_ref).duration);
if(cljs.core.truth_(isNaN(duration))){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pcll.lecture_viewer.app_state,cljs.core.assoc,cljs.core.cst$kw$duration,duration);
}
})], null)], null),(cljs.core.truth_(current_subtitle)?(function (){var offset = cljs.core.cst$kw$subtitle_DASH_offset.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pcll.lecture_viewer.app_state));
var style = (function (){var G__16060 = cljs.core.PersistentArrayMap.EMPTY;
var G__16060__$1 = (cljs.core.truth_(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(offset))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16060,cljs.core.cst$kw$left,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(offset)),"px"].join('')):G__16060);
if(cljs.core.truth_(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(offset))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16060__$1,cljs.core.cst$kw$top,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(offset)),"px"].join(''));
} else {
return G__16060__$1;
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$subtitle_DASH_overlay,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,style,cljs.core.cst$kw$on_DASH_mouse_DASH_down,pcll.lecture_viewer.handle_subtitle_drag_start], null),cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(current_subtitle)], null);
})():null)], null);
});
pcll.lecture_viewer.controls = (function pcll$lecture_viewer$controls(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$controls,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,pcll.lecture_viewer.toggle_play], null),(cljs.core.truth_(cljs.core.cst$kw$playing_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pcll.lecture_viewer.app_state)))?"Pause":"Play")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,pcll.lecture_viewer.format_time(cljs.core.cst$kw$current_DASH_time.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pcll.lecture_viewer.app_state)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$slider,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"range",cljs.core.cst$kw$min,(0),cljs.core.cst$kw$max,cljs.core.cst$kw$duration.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pcll.lecture_viewer.app_state)),cljs.core.cst$kw$value,cljs.core.cst$kw$current_DASH_time.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pcll.lecture_viewer.app_state)),cljs.core.cst$kw$on_DASH_change,(function (p1__16061_SHARP_){
return pcll.lecture_viewer.set_position(parseInt(p1__16061_SHARP_.target.value));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,pcll.lecture_viewer.format_time(cljs.core.cst$kw$duration.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pcll.lecture_viewer.app_state)))], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.cst$kw$playback_DASH_speed.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pcll.lecture_viewer.app_state)),cljs.core.cst$kw$on_DASH_change,(function (p1__16062_SHARP_){
return pcll.lecture_viewer.set_playback_speed(p1__16062_SHARP_.target.value);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,1.0], null),"1x"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,1.25], null),"1.25x"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,1.5], null),"1.5x"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,1.75], null),"1.75x"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,2.0], null),"2x"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,2.5], null),"2.5x"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,3.0], null),"3x"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,4.0], null),"4x"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,5.0], null),"5x"], null)], null)], null);
});
pcll.lecture_viewer.search_results = (function pcll$lecture_viewer$search_results(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$search_DASH_results,(function (){var iter__5480__auto__ = (function pcll$lecture_viewer$search_results_$_iter__16063(s__16064){
return (new cljs.core.LazySeq(null,(function (){
var s__16064__$1 = s__16064;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__16064__$1);
if(temp__5823__auto__){
var s__16064__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16064__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__16064__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__16066 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__16065 = (0);
while(true){
if((i__16065 < size__5479__auto__)){
var map__16067 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5478__auto__,i__16065);
var map__16067__$1 = cljs.core.__destructure_map(map__16067);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16067__$1,cljs.core.cst$kw$start);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16067__$1,cljs.core.cst$kw$text);
cljs.core.chunk_append(b__16066,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$search_DASH_result,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (i__16065,map__16067,map__16067__$1,start,text,c__5478__auto__,size__5479__auto__,b__16066,s__16064__$2,temp__5823__auto__){
return (function (){
return pcll.lecture_viewer.set_position(start);
});})(i__16065,map__16067,map__16067__$1,start,text,c__5478__auto__,size__5479__auto__,b__16066,s__16064__$2,temp__5823__auto__))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$timestamp,pcll.lecture_viewer.format_time(start)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$text,text], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,start], null)));

var G__16069 = (i__16065 + (1));
i__16065 = G__16069;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16066),pcll$lecture_viewer$search_results_$_iter__16063(cljs.core.chunk_rest(s__16064__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16066),null);
}
} else {
var map__16068 = cljs.core.first(s__16064__$2);
var map__16068__$1 = cljs.core.__destructure_map(map__16068);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16068__$1,cljs.core.cst$kw$start);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16068__$1,cljs.core.cst$kw$text);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$search_DASH_result,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (map__16068,map__16068__$1,start,text,s__16064__$2,temp__5823__auto__){
return (function (){
return pcll.lecture_viewer.set_position(start);
});})(map__16068,map__16068__$1,start,text,s__16064__$2,temp__5823__auto__))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$timestamp,pcll.lecture_viewer.format_time(start)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$text,text], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,start], null)),pcll$lecture_viewer$search_results_$_iter__16063(cljs.core.rest(s__16064__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.cst$kw$filtered_DASH_subtitles.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pcll.lecture_viewer.app_state)));
})()], null);
});
pcll.lecture_viewer.file_uploader = (function pcll$lecture_viewer$file_uploader(id,label,accept,on_load){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,id], null),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,id,cljs.core.cst$kw$type,"file",cljs.core.cst$kw$accept,accept,cljs.core.cst$kw$on_DASH_change,(function (p1__16070_SHARP_){
var file = (p1__16070_SHARP_.target.files[(0)]);
if(cljs.core.truth_(file)){
return (on_load.cljs$core$IFn$_invoke$arity$1 ? on_load.cljs$core$IFn$_invoke$arity$1(file) : on_load.call(null,file));
} else {
return null;
}
})], null)], null)], null);
});
pcll.lecture_viewer.app = (function pcll$lecture_viewer$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$app_DASH_container,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$left_DASH_panel,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$flex,"2",cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$flex_DASH_direction,"column",cljs.core.cst$kw$padding,"10px"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pcll.lecture_viewer.video_player], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pcll.lecture_viewer.controls], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$file_DASH_uploaders,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_top,"10px"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [pcll.lecture_viewer.file_uploader,"video-upload","Video: ","video/*",(function (file){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pcll.lecture_viewer.app_state,cljs.core.assoc,cljs.core.cst$kw$video_DASH_url,URL.createObjectURL(file));
})], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [pcll.lecture_viewer.file_uploader,"subtitle-upload","Subtitles (VTT): ",".vtt",(function (file){
var reader = (new FileReader());
(reader.onload = (function (e){
var parsed_subs = pcll.lecture_viewer.parse_vtt(e.target.result);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pcll.lecture_viewer.app_state,cljs.core.assoc,cljs.core.cst$kw$subtitles,parsed_subs);
}));

return reader.readAsText(file);
})], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$right_DASH_panel,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$flex,"1",cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$flex_DASH_direction,"column",cljs.core.cst$kw$padding,"10px",cljs.core.cst$kw$overflow_DASH_y,"hidden"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Search"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$search_DASH_bar,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$placeholder,"Search subtitles...",cljs.core.cst$kw$value,cljs.core.cst$kw$search_DASH_query.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pcll.lecture_viewer.app_state)),cljs.core.cst$kw$on_DASH_change,(function (p1__16071_SHARP_){
var query = p1__16071_SHARP_.target.value;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(pcll.lecture_viewer.app_state,cljs.core.assoc,cljs.core.cst$kw$search_DASH_query,query,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$filtered_DASH_subtitles,((cuerdas.core.blank_QMARK_(query))?cljs.core.PersistentVector.EMPTY:cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__16072){
var map__16073 = p__16072;
var map__16073__$1 = cljs.core.__destructure_map(map__16073);
var sub_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16073__$1,cljs.core.cst$kw$text);
return cuerdas.core.includes_QMARK_(cuerdas.core.lower(sub_text),cuerdas.core.lower(query));
}),cljs.core.cst$kw$subtitles.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pcll.lecture_viewer.app_state))))], 0));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$flex,"1",cljs.core.cst$kw$overflow_DASH_y,"auto",cljs.core.cst$kw$border,"1px solid #ccc"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pcll.lecture_viewer.search_results], null)], null)], null)], null);
});
pcll.lecture_viewer.handle_keydown = (function pcll$lecture_viewer$handle_keydown(event){
var pred__16074 = cljs.core._EQ_;
var expr__16075 = event.key;
if(cljs.core.truth_((pred__16074.cljs$core$IFn$_invoke$arity$2 ? pred__16074.cljs$core$IFn$_invoke$arity$2(" ",expr__16075) : pred__16074.call(null," ",expr__16075)))){
event.preventDefault();

return pcll.lecture_viewer.toggle_play();
} else {
if(cljs.core.truth_((pred__16074.cljs$core$IFn$_invoke$arity$2 ? pred__16074.cljs$core$IFn$_invoke$arity$2("ArrowRight",expr__16075) : pred__16074.call(null,"ArrowRight",expr__16075)))){
return pcll.lecture_viewer.seek((10));
} else {
if(cljs.core.truth_((pred__16074.cljs$core$IFn$_invoke$arity$2 ? pred__16074.cljs$core$IFn$_invoke$arity$2("ArrowLeft",expr__16075) : pred__16074.call(null,"ArrowLeft",expr__16075)))){
return pcll.lecture_viewer.seek((-10));
} else {
return null;
}
}
}
});
pcll.lecture_viewer.setup_keyboard_shortcuts = (function pcll$lecture_viewer$setup_keyboard_shortcuts(){
return document.addEventListener("keydown",pcll.lecture_viewer.handle_keydown);
});
pcll.lecture_viewer.cleanup_keyboard_shortcuts = (function pcll$lecture_viewer$cleanup_keyboard_shortcuts(){
return document.removeEventListener("keydown",pcll.lecture_viewer.handle_keydown);
});
pcll.lecture_viewer.mount_app_element = (function pcll$lecture_viewer$mount_app_element(){
pcll.lecture_viewer.cleanup_keyboard_shortcuts();

reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pcll.lecture_viewer.app], null),goog.dom.getElement("app"));

return pcll.lecture_viewer.setup_keyboard_shortcuts();
});
if(cljs.core.truth_(goog.dom.getElement("app"))){
pcll.lecture_viewer.mount_app_element();
} else {
}
pcll.lecture_viewer.on_reload = (function pcll$lecture_viewer$on_reload(){
return pcll.lecture_viewer.mount_app_element();
});

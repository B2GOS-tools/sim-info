// Compiled by ClojureScript 1.7.145 {:static-fns true, :optimize-constants true}
goog.provide('imei.core');
goog.require('cljs.core');
goog.require('goog.dom');
imei.core.span_n_sims = document.getElementById("n-sims");
imei.core.span_network_name = document.getElementById("network-name");
imei.core.span_network_signal = document.getElementById("network-signal");
imei.core.span_network_mcc = document.getElementById("network-mcc");
imei.core.span_network_mnc = document.getElementById("network-mnc");
imei.core.span_network_supported = document.getElementById("network-supported");
imei.core.span_iccid = document.getElementById("iccid");
imei.core.btn_imei = document.getElementById("btn-imei");
imei.core.btn_msisdn = document.getElementById("btn-msisdn");
imei.core.btn_forward = document.getElementById("btn-forward");
imei.core.start = (function imei$core$start(){
imei.core.supportedNetworkTypes_str = window.navigator.mozMobileConnections[0].supportedNetworkTypes.join(' - ');

var G__8633_8645 = imei.core.span_n_sims;
var G__8634_8646 = window.navigator.mozMobileConnections.length;
goog.dom.setTextContent(G__8633_8645,G__8634_8646);

var G__8635_8647 = imei.core.span_network_name;
var G__8636_8648 = window.navigator.mozMobileConnections[0].voice.network.longName;
goog.dom.setTextContent(G__8635_8647,G__8636_8648);

var G__8637_8649 = imei.core.span_network_mcc;
var G__8638_8650 = window.navigator.mozMobileConnections[0].voice.network.mcc;
goog.dom.setTextContent(G__8637_8649,G__8638_8650);

var G__8639_8651 = imei.core.span_network_mnc;
var G__8640_8652 = window.navigator.mozMobileConnections[0].voice.network.mnc;
goog.dom.setTextContent(G__8639_8651,G__8640_8652);

var G__8641_8653 = imei.core.span_network_signal;
var G__8642_8654 = window.navigator.mozMobileConnections[0].voice.relSignalStrength;
goog.dom.setTextContent(G__8641_8653,G__8642_8654);

goog.dom.setTextContent(imei.core.span_network_supported,imei.core.supportedNetworkTypes_str);

var G__8643 = imei.core.span_iccid;
var G__8644 = window.navigator.mozIccManager.iccIds[0];
return goog.dom.setTextContent(G__8643,G__8644);
});
imei.core.handle_imei = (function imei$core$handle_imei(){
console.log("imei");

return (new MozActivity(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"dial",cljs.core.cst$kw$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$number,"*#06#"], null)], null))));
});
imei.core.handle_forward = (function imei$core$handle_forward(){
return (new MozActivity(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"dial",cljs.core.cst$kw$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$number,"*#21#"], null)], null))));
});
imei.core.handle_msisdn = (function imei$core$handle_msisdn(){
return navigator.getMobileIdAssertion({forceSelection: true});
});
imei.core.btn_imei.addEventListener("click",imei.core.handle_imei);
imei.core.btn_forward.addEventListener("click",imei.core.handle_forward);
imei.core.btn_msisdn.addEventListener("click",imei.core.handle_msisdn);
window.onload = imei.core.start;

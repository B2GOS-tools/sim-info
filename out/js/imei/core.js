// Compiled by ClojureScript 1.7.145 {:static-fns true}
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
imei.core.a_sync = document.getElementById("sync");
imei.core.span_network_type = document.getElementById("network-type");
imei.core.span_network_state = document.getElementById("network-state");
imei.core.span_cellid = document.getElementById("cellid");
imei.core.span_location_area = document.getElementById("location-area");
imei.core.span_wifi_mac = document.getElementById("wifi-mac");
imei.core.span_wifi_ip = document.getElementById("wifi-ip");
imei.core.btn_imei = document.getElementById("btn-imei");
imei.core.btn_msisdn = document.getElementById("btn-msisdn");
imei.core.btn_forward = document.getElementById("btn-forward");
imei.core.start = (function imei$core$start(){
imei.core.supportedNetworkTypes_str = window.navigator.mozMobileConnections[0].supportedNetworkTypes.join(' - ');

var G__5775_5799 = imei.core.span_n_sims;
var G__5776_5800 = window.navigator.mozMobileConnections.length;
goog.dom.setTextContent(G__5775_5799,G__5776_5800);

var G__5777_5801 = imei.core.span_network_name;
var G__5778_5802 = window.navigator.mozMobileConnections[0].voice.network.longName;
goog.dom.setTextContent(G__5777_5801,G__5778_5802);

var G__5779_5803 = imei.core.span_network_mcc;
var G__5780_5804 = window.navigator.mozMobileConnections[0].voice.network.mcc;
goog.dom.setTextContent(G__5779_5803,G__5780_5804);

var G__5781_5805 = imei.core.span_network_mnc;
var G__5782_5806 = window.navigator.mozMobileConnections[0].voice.network.mnc;
goog.dom.setTextContent(G__5781_5805,G__5782_5806);

var G__5783_5807 = imei.core.span_network_signal;
var G__5784_5808 = window.navigator.mozMobileConnections[0].voice.relSignalStrength;
goog.dom.setTextContent(G__5783_5807,G__5784_5808);

goog.dom.setTextContent(imei.core.span_network_supported,imei.core.supportedNetworkTypes_str);

var G__5785_5809 = imei.core.span_iccid;
var G__5786_5810 = window.navigator.mozIccManager.iccIds[0];
goog.dom.setTextContent(G__5785_5809,G__5786_5810);

var G__5787_5811 = imei.core.span_network_type;
var G__5788_5812 = window.navigator.mozMobileConnections[0].data.type;
goog.dom.setTextContent(G__5787_5811,G__5788_5812);

var G__5789_5813 = imei.core.span_network_state;
var G__5790_5814 = window.navigator.mozMobileConnections[0].data.state;
goog.dom.setTextContent(G__5789_5813,G__5790_5814);

var G__5791_5815 = imei.core.span_cellid;
var G__5792_5816 = window.navigator.mozMobileConnections[0].data.cell.gsmCellId;
goog.dom.setTextContent(G__5791_5815,G__5792_5816);

var G__5793_5817 = imei.core.span_location_area;
var G__5794_5818 = window.navigator.mozMobileConnections[0].data.cell.gsmLocationAreaCode;
goog.dom.setTextContent(G__5793_5817,G__5794_5818);

var G__5795_5819 = imei.core.span_wifi_mac;
var G__5796_5820 = window.navigator.mozWifiManager.macAddress;
goog.dom.setTextContent(G__5795_5819,G__5796_5820);

var G__5797 = imei.core.span_wifi_ip;
var G__5798 = window.navigator.mozWifiManager.connectionInformation.ipAddress;
return goog.dom.setTextContent(G__5797,G__5798);
});
imei.core.handle_imei = (function imei$core$handle_imei(){
console.log("imei");

return (new MozActivity(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"dial",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),"*#06#"], null)], null))));
});
imei.core.handle_forward = (function imei$core$handle_forward(){
return (new MozActivity(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"dial",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),"*#21#"], null)], null))));
});
imei.core.handle_msisdn = (function imei$core$handle_msisdn(){
return navigator.getMobileIdAssertion({forceSelection: true});
});
imei.core.btn_imei.addEventListener("click",imei.core.handle_imei);
imei.core.btn_forward.addEventListener("click",imei.core.handle_forward);
imei.core.btn_msisdn.addEventListener("click",imei.core.handle_msisdn);
imei.core.a_sync.addEventListener("click",imei.core.start);
window.onload = imei.core.start;

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

var G__5703_5727 = imei.core.span_n_sims;
var G__5704_5728 = window.navigator.mozMobileConnections.length;
goog.dom.setTextContent(G__5703_5727,G__5704_5728);

var G__5705_5729 = imei.core.span_network_name;
var G__5706_5730 = window.navigator.mozMobileConnections[0].voice.network.longName;
goog.dom.setTextContent(G__5705_5729,G__5706_5730);

var G__5707_5731 = imei.core.span_network_mcc;
var G__5708_5732 = window.navigator.mozMobileConnections[0].voice.network.mcc;
goog.dom.setTextContent(G__5707_5731,G__5708_5732);

var G__5709_5733 = imei.core.span_network_mnc;
var G__5710_5734 = window.navigator.mozMobileConnections[0].voice.network.mnc;
goog.dom.setTextContent(G__5709_5733,G__5710_5734);

var G__5711_5735 = imei.core.span_network_signal;
var G__5712_5736 = window.navigator.mozMobileConnections[0].voice.relSignalStrength;
goog.dom.setTextContent(G__5711_5735,G__5712_5736);

goog.dom.setTextContent(imei.core.span_network_supported,imei.core.supportedNetworkTypes_str);

var G__5713_5737 = imei.core.span_iccid;
var G__5714_5738 = window.navigator.mozIccManager.iccIds[0];
goog.dom.setTextContent(G__5713_5737,G__5714_5738);

var G__5715_5739 = imei.core.span_network_type;
var G__5716_5740 = window.navigator.mozMobileConnections[0].data.type;
goog.dom.setTextContent(G__5715_5739,G__5716_5740);

var G__5717_5741 = imei.core.span_network_state;
var G__5718_5742 = window.navigator.mozMobileConnections[0].data.state;
goog.dom.setTextContent(G__5717_5741,G__5718_5742);

var G__5719_5743 = imei.core.span_cellid;
var G__5720_5744 = window.navigator.mozMobileConnections[0].data.cell.gsmCellId;
goog.dom.setTextContent(G__5719_5743,G__5720_5744);

var G__5721_5745 = imei.core.span_location_area;
var G__5722_5746 = window.navigator.mozMobileConnections[0].data.cell.gsmLocationAreaCode;
goog.dom.setTextContent(G__5721_5745,G__5722_5746);

var G__5723_5747 = imei.core.span_wifi_mac;
var G__5724_5748 = window.navigator.mozWifiManager.macAddress;
goog.dom.setTextContent(G__5723_5747,G__5724_5748);

var G__5725 = imei.core.span_wifi_ip;
var G__5726 = window.navigator.mozWifiManager.connectionInformation.ipAddress;
return goog.dom.setTextContent(G__5725,G__5726);
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
window.onload = imei.core.start;

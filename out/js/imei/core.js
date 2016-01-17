// Compiled by ClojureScript 1.7.228 {}
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

goog.dom.setTextContent(imei.core.span_n_sims,window.navigator.mozMobileConnections.length);

goog.dom.setTextContent(imei.core.span_network_name,window.navigator.mozMobileConnections[0].voice.network.longName);

goog.dom.setTextContent(imei.core.span_network_mcc,window.navigator.mozMobileConnections[0].voice.network.mcc);

goog.dom.setTextContent(imei.core.span_network_mnc,window.navigator.mozMobileConnections[0].voice.network.mnc);

goog.dom.setTextContent(imei.core.span_network_signal,window.navigator.mozMobileConnections[0].voice.relSignalStrength);

goog.dom.setTextContent(imei.core.span_network_supported,imei.core.supportedNetworkTypes_str);

goog.dom.setTextContent(imei.core.span_iccid,window.navigator.mozIccManager.iccIds[0]);

goog.dom.setTextContent(imei.core.span_network_type,window.navigator.mozMobileConnections[0].data.type);

goog.dom.setTextContent(imei.core.span_network_state,window.navigator.mozMobileConnections[0].data.state);

goog.dom.setTextContent(imei.core.span_cellid,window.navigator.mozMobileConnections[0].data.cell.gsmCellId);

goog.dom.setTextContent(imei.core.span_location_area,window.navigator.mozMobileConnections[0].data.cell.gsmLocationAreaCode);

goog.dom.setTextContent(imei.core.span_wifi_mac,window.navigator.mozWifiManager.macAddress);

return goog.dom.setTextContent(imei.core.span_wifi_ip,window.navigator.mozWifiManager.connectionInformation.ipAddress);
});
imei.core.handle_imei = (function imei$core$handle_imei(){
console.log("imei");

return (new MozActivity(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"dial",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),"*#06#"], null)], null))));
});
imei.core.handle_forward = (function imei$core$handle_forward(){
return (new MozActivity(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"dial",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),"*#21#"], null)], null))));
});
imei.core.handle_msisdn = (function imei$core$handle_msisdn(){
return navigator.getMobileIdAssertion({forceSelection: true});
});
imei.core.btn_imei.addEventListener("click",imei.core.handle_imei);
imei.core.btn_forward.addEventListener("click",imei.core.handle_forward);
imei.core.btn_msisdn.addEventListener("click",imei.core.handle_msisdn);
imei.core.a_sync.addEventListener("click",imei.core.start);
window.onload = imei.core.start;

; SIM Info
; (c) leandro@leandro.org
; 20151025
;
; TODO: handle several SIMs

(ns imei.core
  (:require
    [goog.dom :as dom]
    ))

;Handling MMI/USSD codes (like *#06# for IMEI, *#21# for call forwarding status).
; *#*#4636#*#* → testing menu

(def span-n-sims        (.getElementById js/document "n-sims"))
(def span-network-name  (.getElementById js/document "network-name"))
(def span-network-signal (.getElementById js/document "network-signal"))
(def span-network-mcc   (.getElementById js/document "network-mcc"))
(def span-network-mnc   (.getElementById js/document "network-mnc"))
(def span-network-supported (.getElementById js/document "network-supported"))
(def span-iccid         (.getElementById js/document "iccid"))
(def a-sync             (.getElementById js/document "sync"))

(def span-network-type  (.getElementById js/document "network-type"))
(def span-network-state (.getElementById js/document "network-state"))
(def span-cellid        (.getElementById js/document "cellid"))
(def span-location-area (.getElementById js/document "location-area"))
(def span-wifi-mac      (.getElementById js/document "wifi-mac"))
(def span-wifi-ip       (.getElementById js/document "wifi-ip"))


(def btn-imei    (.getElementById js/document "btn-imei"))
(def btn-msisdn  (.getElementById js/document "btn-msisdn"))
(def btn-forward (.getElementById js/document "btn-forward"))


(defn start []

  (def supportedNetworkTypes-str (js* "window.navigator.mozMobileConnections[0].supportedNetworkTypes.join(' - ')"))

  ;(.info js/console (js* "window.navigator.mozMobileConnections"))
  (dom/setTextContent span-n-sims (js* "window.navigator.mozMobileConnections.length"))

  ;network-info
  (dom/setTextContent span-network-name (js* "window.navigator.mozMobileConnections[0].voice.network.longName"))
  (dom/setTextContent span-network-mcc (js* "window.navigator.mozMobileConnections[0].voice.network.mcc"))
  (dom/setTextContent span-network-mnc (js* "window.navigator.mozMobileConnections[0].voice.network.mnc"))
  (dom/setTextContent span-network-signal (js* "window.navigator.mozMobileConnections[0].voice.relSignalStrength"))
  (dom/setTextContent span-network-supported supportedNetworkTypes-str)
  (dom/setTextContent span-iccid (js* "window.navigator.mozIccManager.iccIds[0]"))

  (dom/setTextContent span-network-type (js* "window.navigator.mozMobileConnections[0].data.type"))
  (dom/setTextContent span-network-state (js* "window.navigator.mozMobileConnections[0].data.state"))
  (dom/setTextContent span-cellid (js* "window.navigator.mozMobileConnections[0].data.cell.gsmCellId"))
  (dom/setTextContent span-location-area (js* "window.navigator.mozMobileConnections[0].data.cell.gsmLocationAreaCode"))
  (dom/setTextContent span-wifi-mac (js* "window.navigator.mozWifiManager.macAddress"))
  (dom/setTextContent span-wifi-ip (js* "window.navigator.mozWifiManager.connectionInformation.ipAddress"))

  )


(defn handle-imei []
  ;(let [tel js/navigator.mozTelephony]
  ;      (.dial tel "*#06#")))
  ;(js* "navigator.mozTelephony.dial('*#06#');"))
  (.log js/console "imei")
  (js/MozActivity.
      (clj->js {
        :name "dial"
        :data {
          :number "*#06#"}})))


(defn handle-forward []
  (js/MozActivity.
      (clj->js {
        :name "dial"
        :data {
          :number "*#21#"}})))

(defn handle-msisdn []
  (js* "navigator.getMobileIdAssertion({forceSelection: true})"))


(.addEventListener btn-imei "click" handle-imei)
(.addEventListener btn-forward "click" handle-forward)
(.addEventListener btn-msisdn "click" handle-msisdn)
(.addEventListener a-sync "click" start)


(set! (.-onload js/window) start)

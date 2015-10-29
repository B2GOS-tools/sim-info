(require 'cljs.build.api)

(cljs.build.api/build "src"
  {:main 'imei.core
   :output-to "out/js/imei.js"})

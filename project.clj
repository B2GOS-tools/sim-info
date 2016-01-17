(defproject imei "0.1.1"
  :description "IMEI, ICCID, and other numbers of your SIM chip and your FirefoxOS phone"
  :url "https://github.com/novia713/sim-info"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
    :dependencies [
                    [org.clojure/clojure "1.8.0-RC5"]
                    [org.clojure/clojurescript "1.7.228"]
                ]
  :plugins [[lein-cljsbuild "1.1.2"]]
  :hooks [leiningen.cljsbuild]
  :cljsbuild
    {:builds
     [{:source-paths ["src/cljs"]
       :compiler
       {
        :optimizations :simple
        :output-to "out/js/imei.js"
        ;:externs ["externs/jquery-1.8.js"]
        ;:pseudo-names true ;human
        ;:pretty-print true ;human
        ;:static-fns true   ;not optimized
        ;:verbose true      ;debug
        :output-dir "out/js"
        :cache-analysis true
        ;:source-map "out/js/imei-debug.js" ;only for debug
        ;:source-map-path "out/js"  ;only for debug
        ;:source-map-timestamp true ;debug
        }}]}
  :main imei.core
  :target-path "target/%s"
  ;; to clean JS files generated during the build
  :clean-targets ^{:protect false} [:target-path "out/js/"]
  :profiles {:uberjar {:aot :all}})

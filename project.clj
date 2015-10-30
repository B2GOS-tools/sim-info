(defproject imei "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
    :dependencies [
                    [org.clojure/clojure "1.7.0"]
                    [org.clojure/clojurescript "1.7.145"]
                ]
  :plugins [[lein-cljsbuild "1.1.0"]]
  :hooks [leiningen.cljsbuild]
  :cljsbuild
    {:builds
     [{:source-paths ["src/cljs"]
       :compiler
       {
        :optimizations :whitespace
        :output-to "out/js/imei.js"
        ;:externs ["externs/jquery-1.8.js"]
        :pseudo-names true ;human
        :pretty-print true ;human
        :static-fns true   ;not optimized
        :verbose true      ;debug
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

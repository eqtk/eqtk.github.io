(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("8a7143ac-65c6-44a6-8ff2-0e8c629ace35");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '8a7143ac-65c6-44a6-8ff2-0e8c629ace35' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.3.3.min.js": "dM3QQsP+wXdHg42wTqW85BjZQdLNNIXqlPw/BgKoExPmTG7ZLML4EGqLMfqHT6ON", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.3.min.js": "8x57I4YuIfu8XyZfFo0XVr2WAT8EK4rh/uDe3wF7YuW2FNUSNEpJbsPaB1nJ2fz2", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.3.min.js": "3QTqdz9LyAm2i0sG5XTePsHec3UHWwVsrOL68SYRoAXsafvfAyqtQ+h440+qIBhS"};
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.3.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.3.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"6d03083f-94a9-4510-bf9c-c9dba7ba7334":{"defs":[],"roots":{"references":[{"attributes":{},"id":"1341","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"1311"}],"center":[{"id":"1314"},{"id":"1318"}],"height":250,"left":[{"id":"1315"}],"renderers":[{"id":"1336"}],"title":{"id":"1338"},"toolbar":{"id":"1326"},"width":420,"x_range":{"id":"1303"},"x_scale":{"id":"1307"},"y_range":{"id":"1305"},"y_scale":{"id":"1309"}},"id":"1302","subtype":"Figure","type":"Plot"},{"attributes":{"end":0.5},"id":"1303","type":"Range1d"},{"attributes":{},"id":"1344","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1325","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"1333"},"glyph":{"id":"1334"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1335"},"view":{"id":"1337"}},"id":"1336","type":"GlyphRenderer"},{"attributes":{},"id":"1309","type":"LinearScale"},{"attributes":{},"id":"1322","type":"SaveTool"},{"attributes":{"active_multi":null,"tools":[{"id":"1319"},{"id":"1320"},{"id":"1321"},{"id":"1322"},{"id":"1323"},{"id":"1324"}]},"id":"1326","type":"Toolbar"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[400]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[400]}},"selected":{"id":"1347"},"selection_policy":{"id":"1348"}},"id":"1333","type":"ColumnDataSource"},{"attributes":{"line_color":"#4c78a8","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1334","type":"Line"},{"attributes":{"axis":{"id":"1315"},"dimension":1,"ticker":null},"id":"1318","type":"Grid"},{"attributes":{},"id":"1348","type":"UnionRenderers"},{"attributes":{},"id":"1340","type":"AllLabels"},{"attributes":{},"id":"1347","type":"Selection"},{"attributes":{"source":{"id":"1333"}},"id":"1337","type":"CDSView"},{"attributes":{"axis":{"id":"1311"},"ticker":null},"id":"1314","type":"Grid"},{"attributes":{},"id":"1324","type":"HelpTool"},{"attributes":{},"id":"1312","type":"BasicTicker"},{"attributes":{},"id":"1305","type":"DataRange1d"},{"attributes":{},"id":"1316","type":"BasicTicker"},{"attributes":{},"id":"1338","type":"Title"},{"attributes":{},"id":"1323","type":"ResetTool"},{"attributes":{"axis_label":"titrant volume / initial volume","formatter":{"id":"1341"},"major_label_policy":{"id":"1340"},"ticker":{"id":"1312"}},"id":"1311","type":"LinearAxis"},{"attributes":{},"id":"1320","type":"WheelZoomTool"},{"attributes":{"line_alpha":0.1,"line_color":"#4c78a8","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1335","type":"Line"},{"attributes":{},"id":"1343","type":"AllLabels"},{"attributes":{"overlay":{"id":"1325"}},"id":"1321","type":"BoxZoomTool"},{"attributes":{},"id":"1307","type":"LinearScale"},{"attributes":{"axis_label":"pH","formatter":{"id":"1344"},"major_label_policy":{"id":"1343"},"ticker":{"id":"1316"}},"id":"1315","type":"LinearAxis"},{"attributes":{},"id":"1319","type":"PanTool"}],"root_ids":["1302"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"6d03083f-94a9-4510-bf9c-c9dba7ba7334","root_ids":["1302"],"roots":{"1302":"8a7143ac-65c6-44a6-8ff2-0e8c629ace35"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
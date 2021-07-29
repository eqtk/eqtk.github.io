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
    
      
      
    
      var element = document.getElementById("5fdb7e6e-b68a-4d42-9f79-c59d1451647c");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '5fdb7e6e-b68a-4d42-9f79-c59d1451647c' but no matching script tag was found.")
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
                    
                  var docs_json = '{"4f7928df-d24a-4e44-b2b2-d32cc43275e7":{"defs":[],"roots":{"references":[{"attributes":{},"id":"1023","type":"ResetTool"},{"attributes":{},"id":"1012","type":"BasicTicker"},{"attributes":{},"id":"1019","type":"PanTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1035","type":"Line"},{"attributes":{"line_color":"orange","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1052","type":"Line"},{"attributes":{},"id":"1068","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"1051"},"glyph":{"id":"1052"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1053"},"view":{"id":"1055"}},"id":"1054","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[200]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[200]}},"selected":{"id":"1047"},"selection_policy":{"id":"1048"}},"id":"1033","type":"ColumnDataSource"},{"attributes":{},"id":"1020","type":"WheelZoomTool"},{"attributes":{"line_alpha":0.1,"line_color":"orange","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1053","type":"Line"},{"attributes":{"data_source":{"id":"1033"},"glyph":{"id":"1034"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1035"},"view":{"id":"1037"}},"id":"1036","type":"GlyphRenderer"},{"attributes":{},"id":"1007","type":"LinearScale"},{"attributes":{"label":{"value":"B"},"renderers":[{"id":"1036"}]},"id":"1050","type":"LegendItem"},{"attributes":{},"id":"1024","type":"HelpTool"},{"attributes":{},"id":"1043","type":"AllLabels"},{"attributes":{"source":{"id":"1033"}},"id":"1037","type":"CDSView"},{"attributes":{},"id":"1040","type":"AllLabels"},{"attributes":{},"id":"1048","type":"UnionRenderers"},{"attributes":{},"id":"1016","type":"BasicTicker"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"1034","type":"Line"},{"attributes":{"axis_label":"fraction bound","formatter":{"id":"1044"},"major_label_policy":{"id":"1043"},"ticker":{"id":"1016"}},"id":"1015","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1025","type":"BoxAnnotation"},{"attributes":{"source":{"id":"1051"}},"id":"1055","type":"CDSView"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[200]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[200]}},"selected":{"id":"1067"},"selection_policy":{"id":"1068"}},"id":"1051","type":"ColumnDataSource"},{"attributes":{},"id":"1022","type":"SaveTool"},{"attributes":{"items":[{"id":"1050"},{"id":"1069"}],"location":"center_right"},"id":"1049","type":"Legend"},{"attributes":{},"id":"1038","type":"Title"},{"attributes":{"overlay":{"id":"1025"}},"id":"1021","type":"BoxZoomTool"},{"attributes":{},"id":"1044","type":"BasicTickFormatter"},{"attributes":{},"id":"1009","type":"LinearScale"},{"attributes":{"active_multi":null,"tools":[{"id":"1019"},{"id":"1020"},{"id":"1021"},{"id":"1022"},{"id":"1023"},{"id":"1024"}]},"id":"1026","type":"Toolbar"},{"attributes":{},"id":"1005","type":"DataRange1d"},{"attributes":{"axis":{"id":"1015"},"dimension":1,"ticker":null},"id":"1018","type":"Grid"},{"attributes":{},"id":"1047","type":"Selection"},{"attributes":{"end":2},"id":"1003","type":"Range1d"},{"attributes":{"label":{"value":"C"},"renderers":[{"id":"1054"}]},"id":"1069","type":"LegendItem"},{"attributes":{},"id":"1041","type":"BasicTickFormatter"},{"attributes":{},"id":"1067","type":"Selection"},{"attributes":{"axis_label":"[A]\\u2080 (mM)","formatter":{"id":"1041"},"major_label_policy":{"id":"1040"},"ticker":{"id":"1012"}},"id":"1011","type":"LinearAxis"},{"attributes":{"axis":{"id":"1011"},"ticker":null},"id":"1014","type":"Grid"},{"attributes":{"below":[{"id":"1011"}],"center":[{"id":"1014"},{"id":"1018"},{"id":"1049"}],"height":250,"left":[{"id":"1015"}],"renderers":[{"id":"1036"},{"id":"1054"}],"title":{"id":"1038"},"toolbar":{"id":"1026"},"width":400,"x_range":{"id":"1003"},"x_scale":{"id":"1007"},"y_range":{"id":"1005"},"y_scale":{"id":"1009"}},"id":"1002","subtype":"Figure","type":"Plot"}],"root_ids":["1002"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"4f7928df-d24a-4e44-b2b2-d32cc43275e7","root_ids":["1002"],"roots":{"1002":"5fdb7e6e-b68a-4d42-9f79-c59d1451647c"}}];
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
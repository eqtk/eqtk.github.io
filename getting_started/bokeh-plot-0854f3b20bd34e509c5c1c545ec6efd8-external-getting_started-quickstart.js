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
    
      
      
    
      var element = document.getElementById("a8c6f372-aa94-438a-8abd-71029e3dc408");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a8c6f372-aa94-438a-8abd-71029e3dc408' but no matching script tag was found.")
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
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.0.2.min.js": "ufR9RFnRs6lniiaFvtJziE0YeidtAgBRH6ux2oUItHw5WTvE1zuk9uzhUU/FJXDp", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.0.2.min.js": "8QM/PGWBT+IssZuRcDcjzwIh1mkOmJSoNMmyYDZbCfXJg3Ap1lEvdVgFuSAwhb/J", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.0.2.min.js": "Jm8cH3Rg0P6UeZhVY5cLy1WzKajUT9KImCY+76hEqrcJt59/d8GPvFHjCkYgnSIn", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.0.2.min.js": "Ozhzj+SI7ywm74aOI/UajcWz+C0NjsPunEVyVIrxzYkB+jA+2tUw8x5xJCbVtK5I"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
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
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.0.2.min.js"];
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
                    
                  var docs_json = '{&quot;ee2c6be5-8ae5-47b5-8750-307ef77a0efc&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;1024&quot;}},&quot;id&quot;:&quot;1020&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1006&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1021&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[200]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[200]}},&quot;selected&quot;:{&quot;id&quot;:&quot;1071&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;1070&quot;}},&quot;id&quot;:&quot;1046&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;1032&quot;}},&quot;id&quot;:&quot;1036&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1022&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;1037&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;line_color&quot;:&quot;#1f77b4&quot;,&quot;line_width&quot;:2,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;1033&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;1046&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;1047&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;1048&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;1050&quot;}},&quot;id&quot;:&quot;1049&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1018&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;1014&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;1017&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1039&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;line_color&quot;:&quot;orange&quot;,&quot;line_width&quot;:2,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;1047&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;render_mode&quot;:&quot;css&quot;,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;1024&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1019&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1058&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;axis_label&quot;:&quot;fraction bound&quot;,&quot;formatter&quot;:{&quot;id&quot;:&quot;1041&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;1015&quot;}},&quot;id&quot;:&quot;1014&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[200]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[200]}},&quot;selected&quot;:{&quot;id&quot;:&quot;1059&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;1058&quot;}},&quot;id&quot;:&quot;1032&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1008&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1071&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;axis_label&quot;:&quot;[A]\\u2080 (mM)&quot;,&quot;formatter&quot;:{&quot;id&quot;:&quot;1039&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;1011&quot;}},&quot;id&quot;:&quot;1010&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;orange&quot;,&quot;line_width&quot;:2,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;1048&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1070&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;#1f77b4&quot;,&quot;line_width&quot;:2,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;1034&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;1010&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;1013&quot;},{&quot;id&quot;:&quot;1017&quot;},{&quot;id&quot;:&quot;1044&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;1014&quot;}],&quot;plot_height&quot;:250,&quot;plot_width&quot;:400,&quot;renderers&quot;:[{&quot;id&quot;:&quot;1035&quot;},{&quot;id&quot;:&quot;1049&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;1037&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;1025&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;1002&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;1006&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;1004&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;1008&quot;}},&quot;id&quot;:&quot;1001&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1023&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;1046&quot;}},&quot;id&quot;:&quot;1050&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;label&quot;:{&quot;value&quot;:&quot;C&quot;},&quot;renderers&quot;:[{&quot;id&quot;:&quot;1049&quot;}]},&quot;id&quot;:&quot;1060&quot;,&quot;type&quot;:&quot;LegendItem&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1015&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1059&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1011&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;label&quot;:{&quot;value&quot;:&quot;B&quot;},&quot;renderers&quot;:[{&quot;id&quot;:&quot;1035&quot;}]},&quot;id&quot;:&quot;1045&quot;,&quot;type&quot;:&quot;LegendItem&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;1018&quot;},{&quot;id&quot;:&quot;1019&quot;},{&quot;id&quot;:&quot;1020&quot;},{&quot;id&quot;:&quot;1021&quot;},{&quot;id&quot;:&quot;1022&quot;},{&quot;id&quot;:&quot;1023&quot;}]},&quot;id&quot;:&quot;1025&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;1032&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;1033&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;1034&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;1036&quot;}},&quot;id&quot;:&quot;1035&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1041&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1002&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;items&quot;:[{&quot;id&quot;:&quot;1045&quot;},{&quot;id&quot;:&quot;1060&quot;}],&quot;location&quot;:&quot;center_right&quot;},&quot;id&quot;:&quot;1044&quot;,&quot;type&quot;:&quot;Legend&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;1010&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;1013&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1004&quot;,&quot;type&quot;:&quot;DataRange1d&quot;}],&quot;root_ids&quot;:[&quot;1001&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.0.2&quot;}}';
                  var render_items = [{"docid":"ee2c6be5-8ae5-47b5-8750-307ef77a0efc","root_ids":["1001"],"roots":{"1001":"a8c6f372-aa94-438a-8abd-71029e3dc408"}}];
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
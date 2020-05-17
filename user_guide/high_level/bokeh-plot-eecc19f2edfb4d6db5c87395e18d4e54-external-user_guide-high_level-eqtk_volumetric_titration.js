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
    
      
      
    
      var element = document.getElementById("b013392d-ab0d-49d2-95a2-2d6fc905ec1a");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b013392d-ab0d-49d2-95a2-2d6fc905ec1a' but no matching script tag was found.")
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
                    
                  var docs_json = '{&quot;473311e7-d4bf-4253-beec-f9d4c1c67101&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1309&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1331&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1301&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1304&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1330&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1307&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[400]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[400]}},&quot;selected&quot;:{&quot;id&quot;:&quot;1331&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;1330&quot;}},&quot;id&quot;:&quot;1318&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1328&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1294&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;1318&quot;}},&quot;id&quot;:&quot;1322&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;render_mode&quot;:&quot;css&quot;,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;1310&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;axis_label&quot;:&quot;pH&quot;,&quot;formatter&quot;:{&quot;id&quot;:&quot;1328&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;1301&quot;}},&quot;id&quot;:&quot;1300&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;1310&quot;}},&quot;id&quot;:&quot;1306&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1326&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;#4c78a8&quot;,&quot;line_width&quot;:2,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;1320&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;1296&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;1299&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1292&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;line_color&quot;:&quot;#4c78a8&quot;,&quot;line_width&quot;:2,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;1319&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1290&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;1324&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;1296&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;1299&quot;},{&quot;id&quot;:&quot;1303&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;1300&quot;}],&quot;plot_height&quot;:250,&quot;plot_width&quot;:420,&quot;renderers&quot;:[{&quot;id&quot;:&quot;1321&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;1324&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;1311&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;1288&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;1292&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;1290&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;1294&quot;}},&quot;id&quot;:&quot;1287&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1308&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;end&quot;:0.5},&quot;id&quot;:&quot;1288&quot;,&quot;type&quot;:&quot;Range1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1305&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;1304&quot;},{&quot;id&quot;:&quot;1305&quot;},{&quot;id&quot;:&quot;1306&quot;},{&quot;id&quot;:&quot;1307&quot;},{&quot;id&quot;:&quot;1308&quot;},{&quot;id&quot;:&quot;1309&quot;}]},&quot;id&quot;:&quot;1311&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;axis_label&quot;:&quot;titrant volume / initial volume&quot;,&quot;formatter&quot;:{&quot;id&quot;:&quot;1326&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;1297&quot;}},&quot;id&quot;:&quot;1296&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;1300&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;1303&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1297&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;1318&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;1319&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;1320&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;1322&quot;}},&quot;id&quot;:&quot;1321&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;}],&quot;root_ids&quot;:[&quot;1287&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.0.2&quot;}}';
                  var render_items = [{"docid":"473311e7-d4bf-4253-beec-f9d4c1c67101","root_ids":["1287"],"roots":{"1287":"b013392d-ab0d-49d2-95a2-2d6fc905ec1a"}}];
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
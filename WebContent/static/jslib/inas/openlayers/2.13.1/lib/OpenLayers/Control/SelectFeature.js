OpenLayers.Control.SelectFeature=OpenLayers.Class(OpenLayers.Control,{multipleKey:null,toggleKey:null,multiple:false,clickout:true,toggle:false,hover:false,highlightOnly:false,box:false,onBeforeSelect:function(){},onSelect:function(){},onUnselect:function(){},scope:null,geometryTypes:null,layer:null,layers:null,callbacks:null,selectStyle:null,renderIntent:"select",handlers:null,initialize:function(c,a){OpenLayers.Control.prototype.initialize.apply(this,[a]);if(this.scope===null){this.scope=this}this.initLayer(c);var b={click:this.clickFeature,clickout:this.clickoutFeature};if(this.hover){b.over=this.overFeature;b.out=this.outFeature}this.callbacks=OpenLayers.Util.extend(b,this.callbacks);this.handlers={feature:new OpenLayers.Handler.Feature(this,this.layer,this.callbacks,{geometryTypes:this.geometryTypes})};if(this.box){this.handlers.box=new OpenLayers.Handler.Box(this,{done:this.selectBox},{boxDivClassName:"olHandlerBoxSelectFeature"})}},initLayer:function(a){if(OpenLayers.Util.isArray(a)){this.layers=a;this.layer=new OpenLayers.Layer.Vector.RootContainer(this.id+"_container",{layers:a})}else{this.layer=a}},destroy:function(){if(this.active&&this.layers){this.map.removeLayer(this.layer)}OpenLayers.Control.prototype.destroy.apply(this,arguments);if(this.layers){this.layer.destroy()}},activate:function(){if(!this.active){if(this.layers){this.map.addLayer(this.layer)}this.handlers.feature.activate();if(this.box&&this.handlers.box){this.handlers.box.activate()}}return OpenLayers.Control.prototype.activate.apply(this,arguments)},deactivate:function(){if(this.active){this.handlers.feature.deactivate();if(this.handlers.box){this.handlers.box.deactivate()}if(this.layers){this.map.removeLayer(this.layer)}}return OpenLayers.Control.prototype.deactivate.apply(this,arguments)},unselectAll:function(b){var f=this.layers||[this.layer],d,c,a,e;for(a=0;a<f.length;++a){d=f[a];e=0;if(d.selectedFeatures!=null){while(d.selectedFeatures.length>e){c=d.selectedFeatures[e];if(!b||b.except!=c){this.unselect(c)}else{++e}}}}},clickFeature:function(a){if(!this.hover){var b=(OpenLayers.Util.indexOf(a.layer.selectedFeatures,a)>-1);if(b){if(this.toggleSelect()){this.unselect(a)}else{if(!this.multipleSelect()){this.unselectAll({except:a})}}}else{if(!this.multipleSelect()){this.unselectAll({except:a})}this.select(a)}}},multipleSelect:function(){return this.multiple||(this.handlers.feature.evt&&this.handlers.feature.evt[this.multipleKey])},toggleSelect:function(){return this.toggle||(this.handlers.feature.evt&&this.handlers.feature.evt[this.toggleKey])},clickoutFeature:function(a){if(!this.hover&&this.clickout){this.unselectAll()}},overFeature:function(b){var a=b.layer;if(this.hover){if(this.highlightOnly){this.highlight(b)}else{if(OpenLayers.Util.indexOf(a.selectedFeatures,b)==-1){this.select(b)}}}},outFeature:function(a){if(this.hover){if(this.highlightOnly){if(a._lastHighlighter==this.id){if(a._prevHighlighter&&a._prevHighlighter!=this.id){delete a._lastHighlighter;var b=this.map.getControl(a._prevHighlighter);if(b){b.highlight(a)}}else{this.unhighlight(a)}}}else{this.unselect(a)}}},highlight:function(c){var b=c.layer;var a=this.events.triggerEvent("beforefeaturehighlighted",{feature:c});if(a!==false){c._prevHighlighter=c._lastHighlighter;c._lastHighlighter=this.id;var d=this.selectStyle||this.renderIntent;b.drawFeature(c,d);this.events.triggerEvent("featurehighlighted",{feature:c})}},unhighlight:function(b){var a=b.layer;if(b._prevHighlighter==undefined){delete b._lastHighlighter}else{if(b._prevHighlighter==this.id){delete b._prevHighlighter}else{b._lastHighlighter=b._prevHighlighter;delete b._prevHighlighter}}a.drawFeature(b,b.style||b.layer.style||"default");this.events.triggerEvent("featureunhighlighted",{feature:b})},select:function(c){var a=this.onBeforeSelect.call(this.scope,c);var b=c.layer;if(a!==false){a=b.events.triggerEvent("beforefeatureselected",{feature:c});if(a!==false){b.selectedFeatures.push(c);this.highlight(c);if(!this.handlers.feature.lastFeature){this.handlers.feature.lastFeature=b.selectedFeatures[0]}b.events.triggerEvent("featureselected",{feature:c});this.onSelect.call(this.scope,c)}}},unselect:function(b){var a=b.layer;this.unhighlight(b);OpenLayers.Util.removeItem(a.selectedFeatures,b);a.events.triggerEvent("featureunselected",{feature:b});this.onUnselect.call(this.scope,b)},selectBox:function(e){if(e instanceof OpenLayers.Bounds){var h=this.map.getLonLatFromPixel({x:e.left,y:e.bottom});var k=this.map.getLonLatFromPixel({x:e.right,y:e.top});var a=new OpenLayers.Bounds(h.lon,h.lat,k.lon,k.lat);if(!this.multipleSelect()){this.unselectAll()}var j=this.multiple;this.multiple=true;var d=this.layers||[this.layer];this.events.triggerEvent("boxselectionstart",{layers:d});var f;for(var b=0;b<d.length;++b){f=d[b];for(var c=0,g=f.features.length;c<g;++c){var m=f.features[c];if(!m.getVisibility()){continue}if(this.geometryTypes==null||OpenLayers.Util.indexOf(this.geometryTypes,m.geometry.CLASS_NAME)>-1){if(a.toGeometry().intersects(m.geometry)){if(OpenLayers.Util.indexOf(f.selectedFeatures,m)==-1){this.select(m)}}}}}this.multiple=j;this.events.triggerEvent("boxselectionend",{layers:d})}},setMap:function(a){this.handlers.feature.setMap(a);if(this.box){this.handlers.box.setMap(a)}OpenLayers.Control.prototype.setMap.apply(this,arguments)},setLayer:function(b){var a=this.active;this.unselectAll();this.deactivate();if(this.layers){this.layer.destroy();this.layers=null}this.initLayer(b);this.handlers.feature.layer=this.layer;if(a){this.activate()}},CLASS_NAME:"OpenLayers.Control.SelectFeature"});
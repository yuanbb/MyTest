OpenLayers.Layer.ArcGIS93Rest=OpenLayers.Class(OpenLayers.Layer.Grid,{DEFAULT_PARAMS:{format:"png"},isBaseLayer:true,initialize:function(d,c,e,b){var a=[];e=OpenLayers.Util.upperCaseObject(e);a.push(d,c,e,b);OpenLayers.Layer.Grid.prototype.initialize.apply(this,a);OpenLayers.Util.applyDefaults(this.params,OpenLayers.Util.upperCaseObject(this.DEFAULT_PARAMS));if(this.params.TRANSPARENT&&this.params.TRANSPARENT.toString().toLowerCase()=="true"){if((b==null)||(!b.isBaseLayer)){this.isBaseLayer=false}if(this.params.FORMAT=="jpg"){this.params.FORMAT=OpenLayers.Util.alphaHack()?"gif":"png"}}},clone:function(a){if(a==null){a=new OpenLayers.Layer.ArcGIS93Rest(this.name,this.url,this.params,this.getOptions())}a=OpenLayers.Layer.Grid.prototype.clone.apply(this,[a]);return a},getURL:function(e){e=this.adjustBounds(e);var d=this.projection.getCode().split(":");var c=d[d.length-1];var g=this.getImageSize();var h={BBOX:e.toBBOX(),SIZE:g.w+","+g.h,F:"image",BBOXSR:c,IMAGESR:c};if(this.layerDefs){var f=[];var a;for(a in this.layerDefs){if(this.layerDefs.hasOwnProperty(a)){if(this.layerDefs[a]){f.push(a);f.push(":");f.push(this.layerDefs[a]);f.push(";")}}}if(f.length>0){h.LAYERDEFS=f.join("")}}var b=this.getFullRequestString(h);return b},setLayerFilter:function(b,a){if(!this.layerDefs){this.layerDefs={}}if(a){this.layerDefs[b]=a}else{delete this.layerDefs[b]}},clearLayerFilter:function(a){if(a){delete this.layerDefs[a]}else{delete this.layerDefs}},mergeNewParams:function(c){var b=OpenLayers.Util.upperCaseObject(c);var a=[b];return OpenLayers.Layer.Grid.prototype.mergeNewParams.apply(this,a)},CLASS_NAME:"OpenLayers.Layer.ArcGIS93Rest"});
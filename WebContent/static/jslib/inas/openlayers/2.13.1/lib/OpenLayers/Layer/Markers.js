OpenLayers.Layer.Markers=OpenLayers.Class(OpenLayers.Layer,{isBaseLayer:false,markers:null,drawn:false,initialize:function(b,a){OpenLayers.Layer.prototype.initialize.apply(this,arguments);this.markers=[]},destroy:function(){this.clearMarkers();this.markers=null;OpenLayers.Layer.prototype.destroy.apply(this,arguments)},setOpacity:function(b){if(b!=this.opacity){this.opacity=b;for(var c=0,a=this.markers.length;c<a;c++){this.markers[c].setOpacity(this.opacity)}}},moveTo:function(d,b,e){OpenLayers.Layer.prototype.moveTo.apply(this,arguments);if(b||!this.drawn){for(var c=0,a=this.markers.length;c<a;c++){this.drawMarker(this.markers[c])}this.drawn=true}},addMarker:function(a){this.markers.push(a);if(this.opacity<1){a.setOpacity(this.opacity)}if(this.map&&this.map.getExtent()){a.map=this.map;this.drawMarker(a)}},removeMarker:function(a){if(this.markers&&this.markers.length){OpenLayers.Util.removeItem(this.markers,a);a.erase()}},clearMarkers:function(){if(this.markers!=null){while(this.markers.length>0){this.removeMarker(this.markers[0])}}},drawMarker:function(a){var b=this.map.getLayerPxFromLonLat(a.lonlat);if(b==null){a.display(false)}else{if(!a.isDrawn()){var c=a.draw(b);this.div.appendChild(c)}else{if(a.icon){a.icon.moveTo(b)}}}},getDataExtent:function(){var b=null;if(this.markers&&(this.markers.length>0)){var b=new OpenLayers.Bounds();for(var d=0,a=this.markers.length;d<a;d++){var c=this.markers[d];b.extend(c.lonlat)}}return b},CLASS_NAME:"OpenLayers.Layer.Markers"});
OpenLayers.Layer.Boxes=OpenLayers.Class(OpenLayers.Layer.Markers,{drawMarker:function(a){var d=this.map.getLayerPxFromLonLat({lon:a.bounds.left,lat:a.bounds.top});var c=this.map.getLayerPxFromLonLat({lon:a.bounds.right,lat:a.bounds.bottom});if(c==null||d==null){a.display(false)}else{var b=a.draw(d,{w:Math.max(1,c.x-d.x),h:Math.max(1,c.y-d.y)});if(!a.drawn){this.div.appendChild(b);a.drawn=true}}},removeMarker:function(a){OpenLayers.Util.removeItem(this.markers,a);if((a.div!=null)&&(a.div.parentNode==this.div)){this.div.removeChild(a.div)}},CLASS_NAME:"OpenLayers.Layer.Boxes"});
OpenLayers.Layer.SphericalMercator={getExtent:function(){var a=null;if(this.sphericalMercator){a=this.map.calculateBounds()}else{a=OpenLayers.Layer.FixedZoomLevels.prototype.getExtent.apply(this)}return a},getLonLatFromViewPortPx:function(a){return OpenLayers.Layer.prototype.getLonLatFromViewPortPx.apply(this,arguments)},getViewPortPxFromLonLat:function(a){return OpenLayers.Layer.prototype.getViewPortPxFromLonLat.apply(this,arguments)},initMercatorParameters:function(){this.RESOLUTIONS=[];var a=156543.03390625;for(var b=0;b<=this.MAX_ZOOM_LEVEL;++b){this.RESOLUTIONS[b]=a/Math.pow(2,b)}this.units="m";this.projection=this.projection||"EPSG:900913"},forwardMercator:(function(){var a=new OpenLayers.Projection("EPSG:4326");var b=new OpenLayers.Projection("EPSG:900913");return function(e,d){var c=OpenLayers.Projection.transform({x:e,y:d},a,b);return new OpenLayers.LonLat(c.x,c.y)}})(),inverseMercator:(function(){var a=new OpenLayers.Projection("EPSG:4326");var b=new OpenLayers.Projection("EPSG:900913");return function(d,e){var c=OpenLayers.Projection.transform({x:d,y:e},b,a);return new OpenLayers.LonLat(c.x,c.y)}})()};
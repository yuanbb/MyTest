OpenLayers.Layer=OpenLayers.Class({id:null,name:null,div:null,opacity:1,alwaysInRange:null,RESOLUTION_PROPERTIES:["scales","resolutions","maxScale","minScale","maxResolution","minResolution","numZoomLevels","maxZoomLevel"],events:null,map:null,isBaseLayer:false,alpha:false,displayInLayerSwitcher:true,visibility:true,attribution:null,inRange:false,imageSize:null,options:null,eventListeners:null,gutter:0,projection:null,units:null,scales:null,resolutions:null,maxExtent:null,minExtent:null,maxResolution:null,minResolution:null,numZoomLevels:null,minScale:null,maxScale:null,displayOutsideMaxExtent:false,wrapDateLine:false,metadata:null,initialize:function(b,a){this.metadata={};a=OpenLayers.Util.extend({},a);if(this.alwaysInRange!=null){a.alwaysInRange=this.alwaysInRange}this.addOptions(a);this.name=b;if(this.id==null){this.id=OpenLayers.Util.createUniqueID(this.CLASS_NAME+"_");this.div=OpenLayers.Util.createDiv(this.id);this.div.style.width="100%";this.div.style.height="100%";this.div.dir="ltr";this.events=new OpenLayers.Events(this,this.div);if(this.eventListeners instanceof Object){this.events.on(this.eventListeners)}}},destroy:function(a){if(a==null){a=true}if(this.map!=null){this.map.removeLayer(this,a)}this.projection=null;this.map=null;this.name=null;this.div=null;this.options=null;if(this.events){if(this.eventListeners){this.events.un(this.eventListeners)}this.events.destroy()}this.eventListeners=null;this.events=null},clone:function(a){if(a==null){a=new OpenLayers.Layer(this.name,this.getOptions())}OpenLayers.Util.applyDefaults(a,this);a.map=null;return a},getOptions:function(){var a={};for(var b in this.options){a[b]=this[b]}return a},setName:function(a){if(a!=this.name){this.name=a;if(this.map!=null){this.map.events.triggerEvent("changelayer",{layer:this,property:"name"})}}},addOptions:function(e,a){if(this.options==null){this.options={}}if(e){if(typeof e.projection=="string"){e.projection=new OpenLayers.Projection(e.projection)}if(e.projection){OpenLayers.Util.applyDefaults(e,OpenLayers.Projection.defaults[e.projection.getCode()])}if(e.maxExtent&&!(e.maxExtent instanceof OpenLayers.Bounds)){e.maxExtent=new OpenLayers.Bounds(e.maxExtent)}if(e.minExtent&&!(e.minExtent instanceof OpenLayers.Bounds)){e.minExtent=new OpenLayers.Bounds(e.minExtent)}}OpenLayers.Util.extend(this.options,e);OpenLayers.Util.extend(this,e);if(this.projection&&this.projection.getUnits()){this.units=this.projection.getUnits()}if(this.map){var b=this.map.getResolution();var c=this.RESOLUTION_PROPERTIES.concat(["projection","units","minExtent","maxExtent"]);for(var d in e){if(e.hasOwnProperty(d)&&OpenLayers.Util.indexOf(c,d)>=0){this.initResolutions();if(a&&this.map.baseLayer===this){this.map.setCenter(this.map.getCenter(),this.map.getZoomForResolution(b),false,true);this.map.events.triggerEvent("changebaselayer",{layer:this})}break}}}},onMapResize:function(){},redraw:function(){var b=false;if(this.map){this.inRange=this.calculateInRange();var c=this.getExtent();if(c&&this.inRange&&this.visibility){var a=true;this.moveTo(c,a,false);this.events.triggerEvent("moveend",{zoomChanged:a});b=true}}return b},moveTo:function(b,a,c){var d=this.visibility;if(!this.isBaseLayer){d=d&&this.inRange}this.display(d)},moveByPx:function(b,a){},setMap:function(b){if(this.map==null){this.map=b;this.maxExtent=this.maxExtent||this.map.maxExtent;this.minExtent=this.minExtent||this.map.minExtent;this.projection=this.projection||this.map.projection;if(typeof this.projection=="string"){this.projection=new OpenLayers.Projection(this.projection)}this.units=this.projection.getUnits()||this.units||this.map.units;this.initResolutions();if(!this.isBaseLayer){this.inRange=this.calculateInRange();var a=((this.visibility)&&(this.inRange));this.div.style.display=a?"":"none"}this.setTileSize()}},afterAdd:function(){},removeMap:function(a){},getImageSize:function(a){return(this.imageSize||this.tileSize)},setTileSize:function(a){var b=(a)?a:((this.tileSize)?this.tileSize:this.map.getTileSize());this.tileSize=b;if(this.gutter){this.imageSize=new OpenLayers.Size(b.w+(2*this.gutter),b.h+(2*this.gutter))}},getVisibility:function(){return this.visibility},setVisibility:function(a){if(a!=this.visibility){this.visibility=a;this.display(a);this.redraw();if(this.map!=null){this.map.events.triggerEvent("changelayer",{layer:this,property:"visibility"})}this.events.triggerEvent("visibilitychanged")}},display:function(a){if(a!=(this.div.style.display!="none")){this.div.style.display=(a&&this.calculateInRange())?"block":"none"}},calculateInRange:function(){var b=false;if(this.alwaysInRange){b=true}else{if(this.map){var a=this.map.getResolution();b=((a>=this.minResolution)&&(a<=this.maxResolution))}}return b},setIsBaseLayer:function(a){if(a!=this.isBaseLayer){this.isBaseLayer=a;if(this.map!=null){this.map.events.triggerEvent("changebaselayer",{layer:this})}}},initResolutions:function(){var e,a,h;var f={},d=true;for(e=0,a=this.RESOLUTION_PROPERTIES.length;e<a;e++){h=this.RESOLUTION_PROPERTIES[e];f[h]=this.options[h];if(d&&this.options[h]){d=false}}if(this.options.alwaysInRange==null){this.alwaysInRange=d}if(f.resolutions==null){f.resolutions=this.resolutionsFromScales(f.scales)}if(f.resolutions==null){f.resolutions=this.calculateResolutions(f)}if(f.resolutions==null){for(e=0,a=this.RESOLUTION_PROPERTIES.length;e<a;e++){h=this.RESOLUTION_PROPERTIES[e];f[h]=this.options[h]!=null?this.options[h]:this.map[h]}if(f.resolutions==null){f.resolutions=this.resolutionsFromScales(f.scales)}if(f.resolutions==null){f.resolutions=this.calculateResolutions(f)}}var c;if(this.options.maxResolution&&this.options.maxResolution!=="auto"){c=this.options.maxResolution}if(this.options.minScale){c=OpenLayers.Util.getResolutionFromScale(this.options.minScale,this.units)}var b;if(this.options.minResolution&&this.options.minResolution!=="auto"){b=this.options.minResolution}if(this.options.maxScale){b=OpenLayers.Util.getResolutionFromScale(this.options.maxScale,this.units)}if(f.resolutions){f.resolutions.sort(function(j,i){return(i-j)});if(!c){c=f.resolutions[0]}if(!b){var g=f.resolutions.length-1;b=f.resolutions[g]}}this.resolutions=f.resolutions;if(this.resolutions){a=this.resolutions.length;this.scales=new Array(a);for(e=0;e<a;e++){this.scales[e]=OpenLayers.Util.getScaleFromResolution(this.resolutions[e],this.units)}this.numZoomLevels=a}this.minResolution=b;if(b){this.maxScale=OpenLayers.Util.getScaleFromResolution(b,this.units)}this.maxResolution=c;if(c){this.minScale=OpenLayers.Util.getScaleFromResolution(c,this.units)}},resolutionsFromScales:function(d){if(d==null){return}var b,c,a;a=d.length;b=new Array(a);for(c=0;c<a;c++){b[c]=OpenLayers.Util.getResolutionFromScale(d[c],this.units)}return b},calculateResolutions:function(k){var l,j,g;var m=k.maxResolution;if(k.minScale!=null){m=OpenLayers.Util.getResolutionFromScale(k.minScale,this.units)}else{if(m=="auto"&&this.maxExtent!=null){l=this.map.getSize();j=this.maxExtent.getWidth()/l.w;g=this.maxExtent.getHeight()/l.h;m=Math.max(j,g)}}var f=k.minResolution;if(k.maxScale!=null){f=OpenLayers.Util.getResolutionFromScale(k.maxScale,this.units)}else{if(k.minResolution=="auto"&&this.minExtent!=null){l=this.map.getSize();j=this.minExtent.getWidth()/l.w;g=this.minExtent.getHeight()/l.h;f=Math.max(j,g)}}if(typeof m!=="number"&&typeof f!=="number"&&this.maxExtent!=null){var n=this.map.getTileSize();m=Math.max(this.maxExtent.getWidth()/n.w,this.maxExtent.getHeight()/n.h)}var a=k.maxZoomLevel;var b=k.numZoomLevels;if(typeof f==="number"&&typeof m==="number"&&b===undefined){var h=m/f;b=Math.floor(Math.log(h)/Math.log(2))+1}else{if(b===undefined&&a!=null){b=a+1}}if(typeof b!=="number"||b<=0||(typeof m!=="number"&&typeof f!=="number")){return}var d=new Array(b);var c=2;if(typeof f=="number"&&typeof m=="number"){c=Math.pow((m/f),(1/(b-1)))}var e;if(typeof m==="number"){for(e=0;e<b;e++){d[e]=m/Math.pow(c,e)}}else{for(e=0;e<b;e++){d[b-1-e]=f*Math.pow(c,e)}}return d},getResolution:function(){var a=this.map.getZoom();return this.getResolutionForZoom(a)},getExtent:function(){return this.map.calculateBounds()},getZoomForExtent:function(b,c){var d=this.map.getSize();var a=Math.max(b.getWidth()/d.w,b.getHeight()/d.h);return this.getZoomForResolution(a,c)},getDataExtent:function(){},getResolutionForZoom:function(c){c=Math.max(0,Math.min(c,this.resolutions.length-1));var b;if(this.map.fractionalZoom){var a=Math.floor(c);var d=Math.ceil(c);b=this.resolutions[a]-((c-a)*(this.resolutions[a]-this.resolutions[d]))}else{b=this.resolutions[Math.round(c)]}return b},getZoomForResolution:function(e,b){var n,f,g;if(this.map.fractionalZoom){var k=0;var c=this.resolutions.length-1;var d=this.resolutions[k];var a=this.resolutions[c];var j;for(f=0,g=this.resolutions.length;f<g;++f){j=this.resolutions[f];if(j>=e){d=j;k=f}if(j<=e){a=j;c=f;break}}var h=d-a;if(h>0){n=k+((d-e)/h)}else{n=k}}else{var l;var m=Number.POSITIVE_INFINITY;for(f=0,g=this.resolutions.length;f<g;f++){if(b){l=Math.abs(this.resolutions[f]-e);if(l>m){break}m=l}else{if(this.resolutions[f]<e){break}}}n=Math.max(0,f-1)}return n},getLonLatFromViewPortPx:function(b){var d=null;var f=this.map;if(b!=null&&f.minPx){var c=f.getResolution();var a=f.getMaxExtent({restricted:true});var g=(b.x-f.minPx.x)*c+a.left;var e=(f.minPx.y-b.y)*c+a.top;d=new OpenLayers.LonLat(g,e);if(this.wrapDateLine){d=d.wrapDateLine(this.maxExtent)}}return d},getViewPortPxFromLonLat:function(d,a){var b=null;if(d!=null){a=a||this.map.getResolution();var c=this.map.calculateBounds(null,a);b=new OpenLayers.Pixel((1/a*(d.lon-c.left)),(1/a*(c.top-d.lat)))}return b},setOpacity:function(b){if(b!=this.opacity){this.opacity=b;var f=this.div.childNodes;for(var d=0,a=f.length;d<a;++d){var c=f[d].firstChild||f[d];var e=f[d].lastChild;if(e&&e.nodeName.toLowerCase()==="iframe"){c=e.parentNode}OpenLayers.Util.modifyDOMElement(c,null,null,null,null,null,null,b)}if(this.map!=null){this.map.events.triggerEvent("changelayer",{layer:this,property:"opacity"})}}},getZIndex:function(){return this.div.style.zIndex},setZIndex:function(a){this.div.style.zIndex=a},adjustBounds:function(b){if(this.gutter){var a=this.gutter*this.map.getResolution();b=new OpenLayers.Bounds(b.left-a,b.bottom-a,b.right+a,b.top+a)}if(this.wrapDateLine){var c={rightTolerance:this.getResolution(),leftTolerance:this.getResolution()};b=b.wrapDateLine(this.maxExtent,c)}return b},CLASS_NAME:"OpenLayers.Layer"});
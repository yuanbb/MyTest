OpenLayers.Style=OpenLayers.Class({id:null,name:null,title:null,description:null,layerName:null,isDefault:false,rules:null,context:null,defaultStyle:null,defaultsPerSymbolizer:false,propertyStyles:null,initialize:function(b,a){OpenLayers.Util.extend(this,a);this.rules=[];if(a&&a.rules){this.addRules(a.rules)}this.setDefaultStyle(b||OpenLayers.Feature.Vector.style["default"]);this.id=OpenLayers.Util.createUniqueID(this.CLASS_NAME+"_")},destroy:function(){for(var b=0,a=this.rules.length;b<a;b++){this.rules[b].destroy();this.rules[b]=null}this.rules=null;this.defaultStyle=null},createSymbolizer:function(k){var a=this.defaultsPerSymbolizer?{}:this.createLiterals(OpenLayers.Util.extend({},this.defaultStyle),k);var j=this.rules;var h,b;var c=[];var f=false;for(var d=0,e=j.length;d<e;d++){h=j[d];var g=h.evaluate(k);if(g){if(h instanceof OpenLayers.Rule&&h.elseFilter){c.push(h)}else{f=true;this.applySymbolizer(h,a,k)}}}if(f==false&&c.length>0){f=true;for(var d=0,e=c.length;d<e;d++){this.applySymbolizer(c[d],a,k)}}if(j.length>0&&f==false){a.display="none"}if(a.label!=null&&typeof a.label!=="string"){a.label=String(a.label)}return a},applySymbolizer:function(f,d,b){var a=b.geometry?this.getSymbolizerPrefix(b.geometry):OpenLayers.Style.SYMBOLIZER_PREFIXES[0];var c=f.symbolizer[a]||f.symbolizer;if(this.defaultsPerSymbolizer===true){var e=this.defaultStyle;OpenLayers.Util.applyDefaults(c,{pointRadius:e.pointRadius});if(c.stroke===true||c.graphic===true){OpenLayers.Util.applyDefaults(c,{strokeWidth:e.strokeWidth,strokeColor:e.strokeColor,strokeOpacity:e.strokeOpacity,strokeDashstyle:e.strokeDashstyle,strokeLinecap:e.strokeLinecap})}if(c.fill===true||c.graphic===true){OpenLayers.Util.applyDefaults(c,{fillColor:e.fillColor,fillOpacity:e.fillOpacity})}if(c.graphic===true){OpenLayers.Util.applyDefaults(c,{pointRadius:this.defaultStyle.pointRadius,externalGraphic:this.defaultStyle.externalGraphic,graphicName:this.defaultStyle.graphicName,graphicOpacity:this.defaultStyle.graphicOpacity,graphicWidth:this.defaultStyle.graphicWidth,graphicHeight:this.defaultStyle.graphicHeight,graphicXOffset:this.defaultStyle.graphicXOffset,graphicYOffset:this.defaultStyle.graphicYOffset})}}return this.createLiterals(OpenLayers.Util.extend(d,c),b)},createLiterals:function(d,c){var b=OpenLayers.Util.extend({},c.attributes||c.data);OpenLayers.Util.extend(b,this.context);for(var a in this.propertyStyles){d[a]=OpenLayers.Style.createLiteral(d[a],b,c,a)}return d},findPropertyStyles:function(){var d={};var f=this.defaultStyle;this.addPropertyStyles(d,f);var h=this.rules;var e,g;for(var c=0,a=h.length;c<a;c++){e=h[c].symbolizer;for(var b in e){g=e[b];if(typeof g=="object"){this.addPropertyStyles(d,g)}else{this.addPropertyStyles(d,e);break}}}return d},addPropertyStyles:function(b,c){var d;for(var a in c){d=c[a];if(typeof d=="string"&&d.match(/\$\{\w+\}/)){b[a]=true}}return b},addRules:function(a){Array.prototype.push.apply(this.rules,a);this.propertyStyles=this.findPropertyStyles()},setDefaultStyle:function(a){this.defaultStyle=a;this.propertyStyles=this.findPropertyStyles()},getSymbolizerPrefix:function(d){var c=OpenLayers.Style.SYMBOLIZER_PREFIXES;for(var b=0,a=c.length;b<a;b++){if(d.CLASS_NAME.indexOf(c[b])!=-1){return c[b]}}},clone:function(){var b=OpenLayers.Util.extend({},this);if(this.rules){b.rules=[];for(var c=0,a=this.rules.length;c<a;++c){b.rules.push(this.rules[c].clone())}}b.context=this.context&&OpenLayers.Util.extend({},this.context);var d=OpenLayers.Util.extend({},this.defaultStyle);return new OpenLayers.Style(d,b)},CLASS_NAME:"OpenLayers.Style"});OpenLayers.Style.createLiteral=function(d,b,a,c){if(typeof d=="string"&&d.indexOf("${")!=-1){d=OpenLayers.String.format(d,b,[a,c]);d=(isNaN(d)||!d)?d:parseFloat(d)}return d};OpenLayers.Style.SYMBOLIZER_PREFIXES=["Point","Line","Polygon","Text","Raster"];
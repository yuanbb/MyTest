OpenLayers.Format.OWSContext=OpenLayers.Class(OpenLayers.Format.Context,{defaultVersion:"0.3.1",getVersion:function(b,c){var a=OpenLayers.Format.XML.VersionedOGC.prototype.getVersion.apply(this,arguments);if(a==="0.3.0"){a=this.defaultVersion}return a},toContext:function(b){var a={};if(b.CLASS_NAME=="OpenLayers.Map"){a.bounds=b.getExtent();a.maxExtent=b.maxExtent;a.projection=b.projection;a.size=b.getSize();a.layers=b.layers}return a},CLASS_NAME:"OpenLayers.Format.OWSContext"});
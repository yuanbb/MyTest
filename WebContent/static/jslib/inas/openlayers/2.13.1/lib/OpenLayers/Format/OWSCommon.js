OpenLayers.Format.OWSCommon=OpenLayers.Class(OpenLayers.Format.XML.VersionedOGC,{defaultVersion:"1.0.0",getVersion:function(b,c){var a=this.version;if(!a){var d=b.getAttribute("xmlns:ows");if(d&&d.substring(d.lastIndexOf("/")+1)==="1.1"){a="1.1.0"}if(!a){a=this.defaultVersion}}return a},CLASS_NAME:"OpenLayers.Format.OWSCommon"});
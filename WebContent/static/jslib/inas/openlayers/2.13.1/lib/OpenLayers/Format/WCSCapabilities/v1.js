OpenLayers.Format.WCSCapabilities.v1=OpenLayers.Class(OpenLayers.Format.XML,{regExes:{trimSpace:(/^\s*|\s*$/g),splitSpace:(/\s+/)},defaultPrefix:"wcs",read:function(c){if(typeof c=="string"){c=OpenLayers.Format.XML.prototype.read.apply(this,[c])}var b=c;if(c&&c.nodeType==9){c=c.documentElement}var a={};this.readNode(c,a);return a},CLASS_NAME:"OpenLayers.Format.WCSCapabilities.v1"});
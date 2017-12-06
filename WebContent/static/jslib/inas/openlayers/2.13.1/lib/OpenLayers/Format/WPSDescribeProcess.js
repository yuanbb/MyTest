OpenLayers.Format.WPSDescribeProcess=OpenLayers.Class(OpenLayers.Format.XML,{VERSION:"1.0.0",namespaces:{wps:"http://www.opengis.net/wps/1.0.0",ows:"http://www.opengis.net/ows/1.1",xsi:"http://www.w3.org/2001/XMLSchema-instance"},schemaLocation:"http://www.opengis.net/wps/1.0.0 http://schemas.opengis.net/wps/1.0.0/wpsAll.xsd",defaultPrefix:"wps",regExes:{trimSpace:(/^\s*|\s*$/g),removeSpace:(/\s*/g),splitSpace:(/\s+/),trimComma:(/\s*,\s*/g)},read:function(a){if(typeof a=="string"){a=OpenLayers.Format.XML.prototype.read.apply(this,[a])}if(a&&a.nodeType==9){a=a.documentElement}var b={};this.readNode(a,b);return b},readers:{wps:{ProcessDescriptions:function(a,b){b.processDescriptions={};this.readChildNodes(a,b.processDescriptions)},ProcessDescription:function(c,a){var d=this.getAttributeNS(c,this.namespaces.wps,"processVersion");var b={processVersion:d,statusSupported:(c.getAttribute("statusSupported")==="true"),storeSupported:(c.getAttribute("storeSupported")==="true")};this.readChildNodes(c,b);a[b.identifier]=b},DataInputs:function(b,a){a.dataInputs=[];this.readChildNodes(b,a.dataInputs)},ProcessOutputs:function(b,a){a.processOutputs=[];this.readChildNodes(b,a.processOutputs)},Output:function(c,b){var a={};this.readChildNodes(c,a);b.push(a)},ComplexOutput:function(b,a){a.complexOutput={};this.readChildNodes(b,a.complexOutput)},LiteralOutput:function(b,a){a.literalOutput={};this.readChildNodes(b,a.literalOutput)},Input:function(c,b){var a={maxOccurs:parseInt(c.getAttribute("maxOccurs")),minOccurs:parseInt(c.getAttribute("minOccurs"))};this.readChildNodes(c,a);b.push(a)},BoundingBoxData:function(b,a){a.boundingBoxData={};this.readChildNodes(b,a.boundingBoxData)},CRS:function(a,b){if(!b.CRSs){b.CRSs={}}b.CRSs[this.getChildValue(a)]=true},LiteralData:function(b,a){a.literalData={};this.readChildNodes(b,a.literalData)},ComplexData:function(b,a){a.complexData={};this.readChildNodes(b,a.complexData)},Default:function(b,a){a["default"]={};this.readChildNodes(b,a["default"])},Supported:function(b,a){a.supported={};this.readChildNodes(b,a.supported)},Format:function(a,c){var b={};this.readChildNodes(a,b);if(!c.formats){c.formats={}}c.formats[b.mimeType]=true},MimeType:function(a,b){b.mimeType=this.getChildValue(a)}},ows:OpenLayers.Format.OWSCommon.v1_1_0.prototype.readers.ows},CLASS_NAME:"OpenLayers.Format.WPSDescribeProcess"});
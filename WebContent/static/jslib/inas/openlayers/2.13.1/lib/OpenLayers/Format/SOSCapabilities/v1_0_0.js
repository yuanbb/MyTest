OpenLayers.Format.SOSCapabilities.v1_0_0=OpenLayers.Class(OpenLayers.Format.SOSCapabilities,{namespaces:{ows:"http://www.opengis.net/ows/1.1",sos:"http://www.opengis.net/sos/1.0",gml:"http://www.opengis.net/gml",xlink:"http://www.w3.org/1999/xlink"},regExes:{trimSpace:(/^\s*|\s*$/g),removeSpace:(/\s*/g),splitSpace:(/\s+/),trimComma:(/\s*,\s*/g)},initialize:function(a){OpenLayers.Format.XML.prototype.initialize.apply(this,[a]);this.options=a},read:function(b){if(typeof b=="string"){b=OpenLayers.Format.XML.prototype.read.apply(this,[b])}if(b&&b.nodeType==9){b=b.documentElement}var a={};this.readNode(b,a);return a},readers:{gml:OpenLayers.Util.applyDefaults({name:function(a,b){b.name=this.getChildValue(a)},TimePeriod:function(a,b){b.timePeriod={};this.readChildNodes(a,b.timePeriod)},beginPosition:function(b,a){a.beginPosition=this.getChildValue(b)},endPosition:function(b,a){a.endPosition=this.getChildValue(b)}},OpenLayers.Format.GML.v3.prototype.readers.gml),sos:{Capabilities:function(a,b){this.readChildNodes(a,b)},Contents:function(a,b){b.contents={};this.readChildNodes(a,b.contents)},ObservationOfferingList:function(b,a){a.offeringList={};this.readChildNodes(b,a.offeringList)},ObservationOffering:function(b,a){var c=this.getAttributeNS(b,this.namespaces.gml,"id");a[c]={procedures:[],observedProperties:[],featureOfInterestIds:[],responseFormats:[],resultModels:[],responseModes:[]};this.readChildNodes(b,a[c])},time:function(a,b){b.time={};this.readChildNodes(a,b.time)},procedure:function(a,b){b.procedures.push(this.getAttributeNS(a,this.namespaces.xlink,"href"))},observedProperty:function(a,b){b.observedProperties.push(this.getAttributeNS(a,this.namespaces.xlink,"href"))},featureOfInterest:function(a,b){b.featureOfInterestIds.push(this.getAttributeNS(a,this.namespaces.xlink,"href"))},responseFormat:function(a,b){b.responseFormats.push(this.getChildValue(a))},resultModel:function(a,b){b.resultModels.push(this.getChildValue(a))},responseMode:function(a,b){b.responseModes.push(this.getChildValue(a))}},ows:OpenLayers.Format.OWSCommon.v1_1_0.prototype.readers.ows},CLASS_NAME:"OpenLayers.Format.SOSCapabilities.v1_0_0"});
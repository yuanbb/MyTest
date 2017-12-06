OpenLayers.Format.CSWGetRecords.v2_0_2=OpenLayers.Class(OpenLayers.Format.XML,{namespaces:{csw:"http://www.opengis.net/cat/csw/2.0.2",dc:"http://purl.org/dc/elements/1.1/",dct:"http://purl.org/dc/terms/",gmd:"http://www.isotc211.org/2005/gmd",geonet:"http://www.fao.org/geonetwork",ogc:"http://www.opengis.net/ogc",ows:"http://www.opengis.net/ows",xlink:"http://www.w3.org/1999/xlink",xsi:"http://www.w3.org/2001/XMLSchema-instance"},defaultPrefix:"csw",version:"2.0.2",schemaLocation:"http://www.opengis.net/cat/csw/2.0.2 http://schemas.opengis.net/csw/2.0.2/CSW-discovery.xsd",requestId:null,resultType:null,outputFormat:null,outputSchema:null,startPosition:null,maxRecords:null,DistributedSearch:null,ResponseHandler:null,Query:null,regExes:{trimSpace:(/^\s*|\s*$/g),removeSpace:(/\s*/g),splitSpace:(/\s+/),trimComma:(/\s*,\s*/g)},initialize:function(a){OpenLayers.Format.XML.prototype.initialize.apply(this,[a])},read:function(a){if(typeof a=="string"){a=OpenLayers.Format.XML.prototype.read.apply(this,[a])}if(a&&a.nodeType==9){a=a.documentElement}var b={};this.readNode(a,b);return b},readers:{csw:{GetRecordsResponse:function(b,c){c.records=[];this.readChildNodes(b,c);var a=this.getAttributeNS(b,"","version");if(a!=""){c.version=a}},RequestId:function(a,b){b.RequestId=this.getChildValue(a)},SearchStatus:function(a,c){c.SearchStatus={};var b=this.getAttributeNS(a,"","timestamp");if(b!=""){c.SearchStatus.timestamp=b}},SearchResults:function(d,e){this.readChildNodes(d,e);var b=d.attributes;var f={};for(var c=0,a=b.length;c<a;++c){if((b[c].name=="numberOfRecordsMatched")||(b[c].name=="numberOfRecordsReturned")||(b[c].name=="nextRecord")){f[b[c].name]=parseInt(b[c].nodeValue)}else{f[b[c].name]=b[c].nodeValue}}e.SearchResults=f},SummaryRecord:function(b,c){var a={type:"SummaryRecord"};this.readChildNodes(b,a);c.records.push(a)},BriefRecord:function(b,c){var a={type:"BriefRecord"};this.readChildNodes(b,a);c.records.push(a)},DCMIRecord:function(b,c){var a={type:"DCMIRecord"};this.readChildNodes(b,a);c.records.push(a)},Record:function(b,c){var a={type:"Record"};this.readChildNodes(b,a);c.records.push(a)},"*":function(b,c){var a=b.localName||b.nodeName.split(":").pop();c[a]=this.getChildValue(b)}},geonet:{info:function(b,c){var a={};this.readChildNodes(b,a);c.gninfo=a}},dc:{"*":function(f,g){var d=f.localName||f.nodeName.split(":").pop();if(!(OpenLayers.Util.isArray(g[d]))){g[d]=[]}var c={};var b=f.attributes;for(var e=0,a=b.length;e<a;++e){c[b[e].name]=b[e].nodeValue}c.value=this.getChildValue(f);if(c.value!=""){g[d].push(c)}}},dct:{"*":function(b,c){var a=b.localName||b.nodeName.split(":").pop();if(!(OpenLayers.Util.isArray(c[a]))){c[a]=[]}c[a].push(this.getChildValue(b))}},ows:OpenLayers.Util.applyDefaults({BoundingBox:function(a,b){if(b.bounds){b.BoundingBox=[{crs:b.projection,value:[b.bounds.left,b.bounds.bottom,b.bounds.right,b.bounds.top]}];delete b.projection;delete b.bounds}OpenLayers.Format.OWSCommon.v1_0_0.prototype.readers.ows["BoundingBox"].apply(this,arguments)}},OpenLayers.Format.OWSCommon.v1_0_0.prototype.readers.ows)},write:function(a){var b=this.writeNode("csw:GetRecords",a);b.setAttribute("xmlns:gmd",this.namespaces.gmd);return OpenLayers.Format.XML.prototype.write.apply(this,[b])},writers:{csw:{GetRecords:function(b){if(!b){b={}}var e=this.createElementNSPlus("csw:GetRecords",{attributes:{service:"CSW",version:this.version,requestId:b.requestId||this.requestId,resultType:b.resultType||this.resultType,outputFormat:b.outputFormat||this.outputFormat,outputSchema:b.outputSchema||this.outputSchema,startPosition:b.startPosition||this.startPosition,maxRecords:b.maxRecords||this.maxRecords}});if(b.DistributedSearch||this.DistributedSearch){this.writeNode("csw:DistributedSearch",b.DistributedSearch||this.DistributedSearch,e)}var d=b.ResponseHandler||this.ResponseHandler;if(OpenLayers.Util.isArray(d)&&d.length>0){for(var c=0,a=d.length;c<a;c++){this.writeNode("csw:ResponseHandler",d[c],e)}}this.writeNode("Query",b.Query||this.Query,e);return e},DistributedSearch:function(a){var b=this.createElementNSPlus("csw:DistributedSearch",{attributes:{hopCount:a.hopCount}});return b},ResponseHandler:function(a){var b=this.createElementNSPlus("csw:ResponseHandler",{value:a.value});return b},Query:function(b){if(!b){b={}}var e=this.createElementNSPlus("csw:Query",{attributes:{typeNames:b.typeNames||"csw:Record"}});var d=b.ElementName;if(OpenLayers.Util.isArray(d)&&d.length>0){for(var c=0,a=d.length;c<a;c++){this.writeNode("csw:ElementName",d[c],e)}}else{this.writeNode("csw:ElementSetName",b.ElementSetName||{value:"summary"},e)}if(b.Constraint){this.writeNode("csw:Constraint",b.Constraint,e)}if(b.SortBy){this.writeNode("ogc:SortBy",b.SortBy,e)}return e},ElementName:function(a){var b=this.createElementNSPlus("csw:ElementName",{value:a.value});return b},ElementSetName:function(a){var b=this.createElementNSPlus("csw:ElementSetName",{attributes:{typeNames:a.typeNames},value:a.value});return b},Constraint:function(a){var b=this.createElementNSPlus("csw:Constraint",{attributes:{version:a.version}});if(a.Filter){var c=new OpenLayers.Format.Filter({version:a.version});b.appendChild(c.write(a.Filter))}else{if(a.CqlText){var d=this.createElementNSPlus("CqlText",{value:a.CqlText.value});b.appendChild(d)}}return b}},ogc:OpenLayers.Format.Filter.v1_1_0.prototype.writers.ogc},CLASS_NAME:"OpenLayers.Format.CSWGetRecords.v2_0_2"});
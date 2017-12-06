if(!OpenLayers.Format.GML){OpenLayers.Format.GML={}}OpenLayers.Format.GML.Base=OpenLayers.Class(OpenLayers.Format.XML,{namespaces:{gml:"http://www.opengis.net/gml",xlink:"http://www.w3.org/1999/xlink",xsi:"http://www.w3.org/2001/XMLSchema-instance",wfs:"http://www.opengis.net/wfs"},defaultPrefix:"gml",schemaLocation:null,featureType:null,featureNS:null,geometryName:"geometry",extractAttributes:true,srsName:null,xy:true,geometryTypes:null,singleFeatureType:null,regExes:{trimSpace:(/^\s*|\s*$/g),removeSpace:(/\s*/g),splitSpace:(/\s+/),trimComma:(/\s*,\s*/g),featureMember:(/^(.*:)?featureMembers?$/)},initialize:function(a){OpenLayers.Format.XML.prototype.initialize.apply(this,[a]);this.setGeometryTypes();if(a&&a.featureNS){this.setNamespace("feature",a.featureNS)}this.singleFeatureType=!a||(typeof a.featureType==="string")},read:function(e){if(typeof e=="string"){e=OpenLayers.Format.XML.prototype.read.apply(this,[e])}if(e&&e.nodeType==9){e=e.documentElement}var c=[];this.readNode(e,{features:c},true);if(c.length==0){var d=this.getElementsByTagNameNS(e,this.namespaces.gml,"featureMember");if(d.length){for(var b=0,a=d.length;b<a;++b){this.readNode(d[b],{features:c},true)}}else{var d=this.getElementsByTagNameNS(e,this.namespaces.gml,"featureMembers");if(d.length){this.readNode(d[0],{features:c},true)}}}return c},readNode:function(a,b,c){if(c===true&&this.autoConfig===true){this.featureType=null;delete this.namespaceAlias[this.featureNS];delete this.namespaces.feature;this.featureNS=null}if(!this.featureNS&&(!(a.prefix in this.namespaces)&&a.parentNode.namespaceURI==this.namespaces.gml&&this.regExes.featureMember.test(a.parentNode.nodeName))){this.featureType=a.nodeName.split(":").pop();this.setNamespace("feature",a.namespaceURI);this.featureNS=a.namespaceURI;this.autoConfig=true}return OpenLayers.Format.XML.prototype.readNode.apply(this,[a,b])},readers:{gml:{_inherit:function(b,c,a){},featureMember:function(a,b){this.readChildNodes(a,b)},featureMembers:function(a,b){this.readChildNodes(a,b)},name:function(a,b){b.name=this.getChildValue(a)},boundedBy:function(b,c){var a={};this.readChildNodes(b,a);if(a.components&&a.components.length>0){c.bounds=a.components[0]}},Point:function(b,a){var c={points:[]};this.readChildNodes(b,c);if(!a.components){a.components=[]}a.components.push(c.points[0])},coordinates:function(e,g){var h=this.getChildValue(e).replace(this.regExes.trimSpace,"");h=h.replace(this.regExes.trimComma,",");var a=h.split(this.regExes.splitSpace);var f;var d=a.length;var c=new Array(d);for(var b=0;b<d;++b){f=a[b].split(",");if(this.xy){c[b]=new OpenLayers.Geometry.Point(f[0],f[1],f[2])}else{c[b]=new OpenLayers.Geometry.Point(f[1],f[0],f[2])}}g.points=c},coord:function(a,b){var c={};this.readChildNodes(a,c);if(!b.points){b.points=[]}b.points.push(new OpenLayers.Geometry.Point(c.x,c.y,c.z))},X:function(a,b){b.x=this.getChildValue(a)},Y:function(a,b){b.y=this.getChildValue(a)},Z:function(a,b){b.z=this.getChildValue(a)},MultiPoint:function(b,a){var c={components:[]};this.readers.gml._inherit.apply(this,[b,c,a]);this.readChildNodes(b,c);a.components=[new OpenLayers.Geometry.MultiPoint(c.components)]},pointMember:function(a,b){this.readChildNodes(a,b)},LineString:function(b,a){var c={};this.readers.gml._inherit.apply(this,[b,c,a]);this.readChildNodes(b,c);if(!a.components){a.components=[]}a.components.push(new OpenLayers.Geometry.LineString(c.points))},MultiLineString:function(b,a){var c={components:[]};this.readers.gml._inherit.apply(this,[b,c,a]);this.readChildNodes(b,c);a.components=[new OpenLayers.Geometry.MultiLineString(c.components)]},lineStringMember:function(a,b){this.readChildNodes(a,b)},Polygon:function(b,a){var c={outer:null,inner:[]};this.readers.gml._inherit.apply(this,[b,c,a]);this.readChildNodes(b,c);c.inner.unshift(c.outer);if(!a.components){a.components=[]}a.components.push(new OpenLayers.Geometry.Polygon(c.inner))},LinearRing:function(b,c){var a={};this.readers.gml._inherit.apply(this,[b,a]);this.readChildNodes(b,a);c.components=[new OpenLayers.Geometry.LinearRing(a.points)]},MultiPolygon:function(b,a){var c={components:[]};this.readers.gml._inherit.apply(this,[b,c,a]);this.readChildNodes(b,c);a.components=[new OpenLayers.Geometry.MultiPolygon(c.components)]},polygonMember:function(a,b){this.readChildNodes(a,b)},GeometryCollection:function(b,a){var c={components:[]};this.readers.gml._inherit.apply(this,[b,c,a]);this.readChildNodes(b,c);a.components=[new OpenLayers.Geometry.Collection(c.components)]},geometryMember:function(a,b){this.readChildNodes(a,b)}},feature:{"*":function(c,d){var a;var b=c.localName||c.nodeName.split(":").pop();if(d.features){if(!this.singleFeatureType&&(OpenLayers.Util.indexOf(this.featureType,b)!==-1)){a="_typeName"}else{if(b===this.featureType){a="_typeName"}}}else{if(c.childNodes.length==0||(c.childNodes.length==1&&c.firstChild.nodeType==3)){if(this.extractAttributes){a="_attribute"}}else{a="_geometry"}}if(a){this.readers.feature[a].apply(this,[c,d])}},_typeName:function(c,d){var a={components:[],attributes:{}};this.readChildNodes(c,a);if(a.name){a.attributes.name=a.name}var b=new OpenLayers.Feature.Vector(a.components[0],a.attributes);if(!this.singleFeatureType){b.type=c.nodeName.split(":").pop();b.namespace=c.namespaceURI}var e=c.getAttribute("fid")||this.getAttributeNS(c,this.namespaces.gml,"id");if(e){b.fid=e}if(this.internalProjection&&this.externalProjection&&b.geometry){b.geometry.transform(this.externalProjection,this.internalProjection)}if(a.bounds){b.bounds=a.bounds}d.features.push(b)},_geometry:function(a,b){if(!this.geometryName){this.geometryName=a.nodeName.split(":").pop()}this.readChildNodes(a,b)},_attribute:function(b,d){var a=b.localName||b.nodeName.split(":").pop();var c=this.getChildValue(b);d.attributes[a]=c}},wfs:{FeatureCollection:function(a,b){this.readChildNodes(a,b)}}},write:function(c){var b;if(OpenLayers.Util.isArray(c)){b="featureMembers"}else{b="featureMember"}var a=this.writeNode("gml:"+b,c);this.setAttributeNS(a,this.namespaces.xsi,"xsi:schemaLocation",this.schemaLocation);return OpenLayers.Format.XML.prototype.write.apply(this,[a])},writers:{gml:{featureMember:function(a){var b=this.createElementNSPlus("gml:featureMember");this.writeNode("feature:_typeName",a,b);return b},MultiPoint:function(e){var d=this.createElementNSPlus("gml:MultiPoint");var c=e.components||[e];for(var a=0,b=c.length;a<b;++a){this.writeNode("pointMember",c[a],d)}return d},pointMember:function(b){var a=this.createElementNSPlus("gml:pointMember");this.writeNode("Point",b,a);return a},MultiLineString:function(e){var d=this.createElementNSPlus("gml:MultiLineString");var c=e.components||[e];for(var a=0,b=c.length;a<b;++a){this.writeNode("lineStringMember",c[a],d)}return d},lineStringMember:function(b){var a=this.createElementNSPlus("gml:lineStringMember");this.writeNode("LineString",b,a);return a},MultiPolygon:function(e){var d=this.createElementNSPlus("gml:MultiPolygon");var c=e.components||[e];for(var a=0,b=c.length;a<b;++a){this.writeNode("polygonMember",c[a],d)}return d},polygonMember:function(b){var a=this.createElementNSPlus("gml:polygonMember");this.writeNode("Polygon",b,a);return a},GeometryCollection:function(d){var c=this.createElementNSPlus("gml:GeometryCollection");for(var b=0,a=d.components.length;b<a;++b){this.writeNode("geometryMember",d.components[b],c)}return c},geometryMember:function(b){var a=this.createElementNSPlus("gml:geometryMember");var c=this.writeNode("feature:_geometry",b);a.appendChild(c.firstChild);return a}},feature:{_typeName:function(b){var c=this.createElementNSPlus("feature:"+this.featureType,{attributes:{fid:b.fid}});if(b.geometry){this.writeNode("feature:_geometry",b.geometry,c)}for(var a in b.attributes){var d=b.attributes[a];if(d!=null){this.writeNode("feature:_attribute",{name:a,value:d},c)}}return c},_geometry:function(c){if(this.externalProjection&&this.internalProjection){c=c.clone().transform(this.internalProjection,this.externalProjection)}var b=this.createElementNSPlus("feature:"+this.geometryName);var a=this.geometryTypes[c.CLASS_NAME];var d=this.writeNode("gml:"+a,c,b);if(this.srsName){d.setAttribute("srsName",this.srsName)}return b},_attribute:function(a){return this.createElementNSPlus("feature:"+a.name,{value:a.value})}},wfs:{FeatureCollection:function(c){var d=this.createElementNSPlus("wfs:FeatureCollection");for(var b=0,a=c.length;b<a;++b){this.writeNode("gml:featureMember",c[b],d)}return d}}},setGeometryTypes:function(){this.geometryTypes={"OpenLayers.Geometry.Point":"Point","OpenLayers.Geometry.MultiPoint":"MultiPoint","OpenLayers.Geometry.LineString":"LineString","OpenLayers.Geometry.MultiLineString":"MultiLineString","OpenLayers.Geometry.Polygon":"Polygon","OpenLayers.Geometry.MultiPolygon":"MultiPolygon","OpenLayers.Geometry.Collection":"GeometryCollection"}},CLASS_NAME:"OpenLayers.Format.GML.Base"});
OpenLayers.Format.WMSDescribeLayer.v1_1_1=OpenLayers.Class(OpenLayers.Format.WMSDescribeLayer,{initialize:function(a){OpenLayers.Format.WMSDescribeLayer.prototype.initialize.apply(this,[a])},read:function(e){if(typeof e=="string"){e=OpenLayers.Format.XML.prototype.read.apply(this,[e])}var k=e.documentElement;var c=k.childNodes;var g={layerDescriptions:[]};var a,n;for(var f=0;f<c.length;++f){a=c[f];n=a.nodeName;if(n=="LayerDescription"){var h=a.getAttribute("name");var m="";var d="";var l="";if(a.getAttribute("owsType")){m=a.getAttribute("owsType");d=a.getAttribute("owsURL")}else{if(a.getAttribute("wfs")!=""){m="WFS";d=a.getAttribute("wfs")}else{if(a.getAttribute("wcs")!=""){m="WCS";d=a.getAttribute("wcs")}}}var j=a.getElementsByTagName("Query");if(j.length>0){l=j[0].getAttribute("typeName");if(!l){l=j[0].getAttribute("typename")}}var o={layerName:h,owsType:m,owsURL:d,typeName:l};g.layerDescriptions.push(o);g.length=g.layerDescriptions.length;g[g.length-1]=o}else{if(n=="ServiceException"){var b=new OpenLayers.Format.OGCExceptionReport();return{error:b.read(e)}}}}return g},CLASS_NAME:"OpenLayers.Format.WMSDescribeLayer.v1_1_1"});OpenLayers.Format.WMSDescribeLayer.v1_1_0=OpenLayers.Format.WMSDescribeLayer.v1_1_1;
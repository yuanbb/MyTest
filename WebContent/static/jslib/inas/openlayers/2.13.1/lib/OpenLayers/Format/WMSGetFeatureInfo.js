OpenLayers.Format.WMSGetFeatureInfo=OpenLayers.Class(OpenLayers.Format.XML,{layerIdentifier:"_layer",featureIdentifier:"_feature",regExes:{trimSpace:(/^\s*|\s*$/g),removeSpace:(/\s*/g),splitSpace:(/\s+/),trimComma:(/\s*,\s*/g)},gmlFormat:null,read:function(e){var a;if(typeof e=="string"){e=OpenLayers.Format.XML.prototype.read.apply(this,[e])}var b=e.documentElement;if(b){var c=this;var d=this["read_"+b.nodeName];if(d){a=d.call(this,b)}else{a=new OpenLayers.Format.GML((this.options?this.options:{})).read(e)}}else{a=e}return a},read_msGMLOutput:function(h){var e=[];var b=this.getSiblingNodesByTagCriteria(h,this.layerIdentifier);if(b){for(var k=0,n=b.length;k<n;++k){var c=b[k];var l=c.nodeName;if(c.prefix){l=l.split(":")[1]}var l=l.replace(this.layerIdentifier,"");var m=this.getSiblingNodesByTagCriteria(c,this.featureIdentifier);if(m){for(var g=0;g<m.length;g++){var a=m[g];var d=this.parseGeometry(a);var f=this.parseAttributes(a);var o=new OpenLayers.Feature.Vector(d.geometry,f,null);o.bounds=d.bounds;o.type=l;e.push(o)}}}}return e},read_FeatureInfoResponse:function(h){var e=[];var l=this.getElementsByTagNameNS(h,"*","FIELDS");for(var k=0,m=l.length;k<m;k++){var b=l[k];var n=null;var g={};var f;var o=b.attributes.length;if(o>0){for(f=0;f<o;f++){var c=b.attributes[f];g[c.nodeName]=c.nodeValue}}else{var a=b.childNodes;for(f=0,o=a.length;f<o;++f){var d=a[f];if(d.nodeType!=3){g[d.getAttribute("name")]=d.getAttribute("value")}}}e.push(new OpenLayers.Feature.Vector(n,g,null))}return e},getSiblingNodesByTagCriteria:function(f,i){var a=[];var c,e,d,g,b;if(f&&f.hasChildNodes()){c=f.childNodes;d=c.length;for(var h=0;h<d;h++){b=c[h];while(b&&b.nodeType!=1){b=b.nextSibling;h++}e=(b?b.nodeName:"");if(e.length>0&&e.indexOf(i)>-1){a.push(b)}else{g=this.getSiblingNodesByTagCriteria(b,i);if(g.length>0){(a.length==0)?a=g:a.push(g)}}}}return a},parseAttributes:function(e){var f={};if(e.nodeType==1){var c=e.childNodes;var d=c.length;for(var g=0;g<d;++g){var b=c[g];if(b.nodeType==1){var k=b.childNodes;var a=(b.prefix)?b.nodeName.split(":")[1]:b.nodeName;if(k.length==0){f[a]=null}else{if(k.length==1){var j=k[0];if(j.nodeType==3||j.nodeType==4){var h=j.nodeValue.replace(this.regExes.trimSpace,"");f[a]=h}}}}}}return f},parseGeometry:function(c){if(!this.gmlFormat){this.gmlFormat=new OpenLayers.Format.GML()}var a=this.gmlFormat.parseFeature(c);var d,b=null;if(a){d=a.geometry&&a.geometry.clone();b=a.bounds&&a.bounds.clone();a.destroy()}return{geometry:d,bounds:b}},CLASS_NAME:"OpenLayers.Format.WMSGetFeatureInfo"});
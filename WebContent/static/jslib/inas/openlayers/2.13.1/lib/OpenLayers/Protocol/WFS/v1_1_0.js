OpenLayers.Protocol.WFS.v1_1_0=OpenLayers.Class(OpenLayers.Protocol.WFS.v1,{version:"1.1.0",initialize:function(a){OpenLayers.Protocol.WFS.v1.prototype.initialize.apply(this,arguments);if(this.outputFormat&&!this.readFormat){if(this.outputFormat.toLowerCase()=="gml2"){this.readFormat=new OpenLayers.Format.GML.v2({featureType:this.featureType,featureNS:this.featureNS,geometryName:this.geometryName})}else{if(this.outputFormat.toLowerCase()=="json"){this.readFormat=new OpenLayers.Format.GeoJSON()}}}},CLASS_NAME:"OpenLayers.Protocol.WFS.v1_1_0"});
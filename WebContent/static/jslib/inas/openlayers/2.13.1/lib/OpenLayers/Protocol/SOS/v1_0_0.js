OpenLayers.Protocol.SOS.v1_0_0=OpenLayers.Class(OpenLayers.Protocol,{fois:null,formatOptions:null,initialize:function(a){OpenLayers.Protocol.prototype.initialize.apply(this,[a]);if(!a.format){this.format=new OpenLayers.Format.SOSGetFeatureOfInterest(this.formatOptions)}},destroy:function(){if(this.options&&!this.options.format){this.format.destroy()}this.format=null;OpenLayers.Protocol.prototype.destroy.apply(this)},read:function(b){b=OpenLayers.Util.extend({},b);OpenLayers.Util.applyDefaults(b,this.options||{});var a=new OpenLayers.Protocol.Response({requestType:"read"});var d=this.format;var c=OpenLayers.Format.XML.prototype.write.apply(d,[d.writeNode("sos:GetFeatureOfInterest",{fois:this.fois})]);a.priv=OpenLayers.Request.POST({url:b.url,callback:this.createCallback(this.handleRead,a,b),data:c});return a},handleRead:function(a,b){if(b.callback){var c=a.priv;if(c.status>=200&&c.status<300){a.features=this.parseFeatures(c);a.code=OpenLayers.Protocol.Response.SUCCESS}else{a.code=OpenLayers.Protocol.Response.FAILURE}b.callback.call(b.scope,a)}},parseFeatures:function(a){var b=a.responseXML;if(!b||!b.documentElement){b=a.responseText}if(!b||b.length<=0){return null}return this.format.read(b)},CLASS_NAME:"OpenLayers.Protocol.SOS.v1_0_0"});
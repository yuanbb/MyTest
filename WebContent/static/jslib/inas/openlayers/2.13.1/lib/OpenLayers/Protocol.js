OpenLayers.Protocol=OpenLayers.Class({format:null,options:null,autoDestroy:true,defaultFilter:null,initialize:function(a){a=a||{};OpenLayers.Util.extend(this,a);this.options=a},mergeWithDefaultFilter:function(b){var a;if(b&&this.defaultFilter){a=new OpenLayers.Filter.Logical({type:OpenLayers.Filter.Logical.AND,filters:[this.defaultFilter,b]})}else{a=b||this.defaultFilter||undefined}return a},destroy:function(){this.options=null;this.format=null},read:function(a){a=a||{};a.filter=this.mergeWithDefaultFilter(a.filter)},create:function(){},update:function(){},"delete":function(){},commit:function(){},abort:function(a){},createCallback:function(c,a,b){return OpenLayers.Function.bind(function(){c.apply(this,[a,b])},this)},CLASS_NAME:"OpenLayers.Protocol"});OpenLayers.Protocol.Response=OpenLayers.Class({code:null,requestType:null,last:true,features:null,data:null,reqFeatures:null,priv:null,error:null,initialize:function(a){OpenLayers.Util.extend(this,a)},success:function(){return this.code>0},CLASS_NAME:"OpenLayers.Protocol.Response"});OpenLayers.Protocol.Response.SUCCESS=1;OpenLayers.Protocol.Response.FAILURE=0;
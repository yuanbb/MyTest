OpenLayers.Icon=OpenLayers.Class({url:null,size:null,offset:null,calculateOffset:null,imageDiv:null,px:null,initialize:function(a,b,d,c){this.url=a;this.size=b||{w:20,h:20};this.offset=d||{x:-(this.size.w/2),y:-(this.size.h/2)};this.calculateOffset=c;var e=OpenLayers.Util.createUniqueID("OL_Icon_");this.imageDiv=OpenLayers.Util.createAlphaImageDiv(e)},destroy:function(){this.erase();OpenLayers.Event.stopObservingElement(this.imageDiv.firstChild);this.imageDiv.innerHTML="";this.imageDiv=null},clone:function(){return new OpenLayers.Icon(this.url,this.size,this.offset,this.calculateOffset)},setSize:function(a){if(a!=null){this.size=a}this.draw()},setUrl:function(a){if(a!=null){this.url=a}this.draw()},draw:function(a){OpenLayers.Util.modifyAlphaImageDiv(this.imageDiv,null,null,this.size,this.url,"absolute");this.moveTo(a);return this.imageDiv},erase:function(){if(this.imageDiv!=null&&this.imageDiv.parentNode!=null){OpenLayers.Element.remove(this.imageDiv)}},setOpacity:function(a){OpenLayers.Util.modifyAlphaImageDiv(this.imageDiv,null,null,null,null,null,null,null,a)},moveTo:function(a){if(a!=null){this.px=a}if(this.imageDiv!=null){if(this.px==null){this.display(false)}else{if(this.calculateOffset){this.offset=this.calculateOffset(this.size)}OpenLayers.Util.modifyAlphaImageDiv(this.imageDiv,null,{x:this.px.x+this.offset.x,y:this.px.y+this.offset.y})}}},display:function(a){this.imageDiv.style.display=(a)?"":"none"},isDrawn:function(){var a=(this.imageDiv&&this.imageDiv.parentNode&&(this.imageDiv.parentNode.nodeType!=11));return a},CLASS_NAME:"OpenLayers.Icon"});
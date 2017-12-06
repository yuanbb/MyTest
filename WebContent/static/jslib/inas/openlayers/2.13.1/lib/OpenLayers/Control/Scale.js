OpenLayers.Control.Scale=OpenLayers.Class(OpenLayers.Control,{element:null,geodesic:false,initialize:function(b,a){OpenLayers.Control.prototype.initialize.apply(this,[a]);this.element=OpenLayers.Util.getElement(b)},draw:function(){OpenLayers.Control.prototype.draw.apply(this,arguments);if(!this.element){this.element=document.createElement("div");this.div.appendChild(this.element)}this.map.events.register("moveend",this,this.updateScale);this.updateScale();return this.div},updateScale:function(){var c;if(this.geodesic===true){var a=this.map.getUnits();if(!a){return}var b=OpenLayers.INCHES_PER_UNIT;c=(this.map.getGeodesicPixelSize().w||0.000001)*b.km*OpenLayers.DOTS_PER_INCH}else{c=this.map.getScale()}if(!c){return}if(c>=9500&&c<=950000){c=Math.round(c/1000)+"K"}else{if(c>=950000){c=Math.round(c/1000000)+"M"}else{c=Math.round(c)}}this.element.innerHTML=OpenLayers.i18n("Scale = 1 : ${scaleDenom}",{scaleDenom:c})},CLASS_NAME:"OpenLayers.Control.Scale"});
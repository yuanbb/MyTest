OpenLayers.Control.LayerSwitcher=OpenLayers.Class(OpenLayers.Control,{layerStates:null,layersDiv:null,baseLayersDiv:null,baseLayers:null,dataLbl:null,dataLayersDiv:null,dataLayers:null,minimizeDiv:null,maximizeDiv:null,ascending:true,initialize:function(a){OpenLayers.Control.prototype.initialize.apply(this,arguments);this.layerStates=[]},destroy:function(){this.clearLayersArray("base");this.clearLayersArray("data");this.map.events.un({buttonclick:this.onButtonClick,addlayer:this.redraw,changelayer:this.redraw,removelayer:this.redraw,changebaselayer:this.redraw,scope:this});this.events.unregister("buttonclick",this,this.onButtonClick);OpenLayers.Control.prototype.destroy.apply(this,arguments)},setMap:function(a){OpenLayers.Control.prototype.setMap.apply(this,arguments);this.map.events.on({addlayer:this.redraw,changelayer:this.redraw,removelayer:this.redraw,changebaselayer:this.redraw,scope:this});if(this.outsideViewport){this.events.attachToElement(this.div);this.events.register("buttonclick",this,this.onButtonClick)}else{this.map.events.register("buttonclick",this,this.onButtonClick)}},draw:function(){OpenLayers.Control.prototype.draw.apply(this);this.loadContents();if(!this.outsideViewport){this.minimizeControl()}this.redraw();return this.div},onButtonClick:function(a){var b=a.buttonElement;if(b===this.minimizeDiv){this.minimizeControl()}else{if(b===this.maximizeDiv){this.maximizeControl()}else{if(b._layerSwitcher===this.id){if(b["for"]){b=document.getElementById(b["for"])}if(!b.disabled){if(b.type=="radio"){b.checked=true;this.map.setBaseLayer(this.map.getLayer(b._layer))}else{b.checked=!b.checked;this.updateMap()}}}}}},clearLayersArray:function(a){this[a+"LayersDiv"].innerHTML="";this[a+"Layers"]=[]},checkRedraw:function(){if(!this.layerStates.length||(this.map.layers.length!=this.layerStates.length)){return true}for(var c=0,a=this.layerStates.length;c<a;c++){var d=this.layerStates[c];var b=this.map.layers[c];if((d.name!=b.name)||(d.inRange!=b.inRange)||(d.id!=b.id)||(d.visibility!=b.visibility)){return true}}return false},redraw:function(){if(!this.checkRedraw()){return this.div}this.clearLayersArray("base");this.clearLayersArray("data");var c=false;var m=false;var g=this.map.layers.length;this.layerStates=new Array(g);for(var e=0;e<g;e++){var f=this.map.layers[e];this.layerStates[e]={name:f.name,visibility:f.visibility,inRange:f.inRange,id:f.id}}var d=this.map.layers.slice();if(!this.ascending){d.reverse()}for(var e=0,g=d.length;e<g;e++){var f=d[e];var h=f.isBaseLayer;if(f.displayInLayerSwitcher){if(h){m=true}else{c=true}var l=(h)?(f==this.map.baseLayer):f.getVisibility();var j=document.createElement("input"),k=OpenLayers.Util.createUniqueID(this.id+"_input_");j.id=k;j.name=(h)?this.id+"_baseLayers":f.name;j.type=(h)?"radio":"checkbox";j.value=f.name;j.checked=l;j.defaultChecked=l;j.className="olButton";j._layer=f.id;j._layerSwitcher=this.id;if(!h&&!f.inRange){j.disabled=true}var a=document.createElement("label");a["for"]=j.id;OpenLayers.Element.addClass(a,"labelSpan olButton");a._layer=f.id;a._layerSwitcher=this.id;if(!h&&!f.inRange){a.style.color="gray"}a.innerHTML=f.name;a.style.verticalAlign=(h)?"bottom":"baseline";var o=document.createElement("br");var n=(h)?this.baseLayers:this.dataLayers;n.push({layer:f,inputElem:j,labelSpan:a});var b=(h)?this.baseLayersDiv:this.dataLayersDiv;b.appendChild(j);b.appendChild(a);b.appendChild(o)}}this.dataLbl.style.display=(c)?"":"none";this.baseLbl.style.display=(m)?"":"none";return this.div},updateMap:function(){for(var b=0,a=this.baseLayers.length;b<a;b++){var c=this.baseLayers[b];if(c.inputElem.checked){this.map.setBaseLayer(c.layer,false)}}for(var b=0,a=this.dataLayers.length;b<a;b++){var c=this.dataLayers[b];c.layer.setVisibility(c.inputElem.checked)}},maximizeControl:function(a){this.div.style.width="";this.div.style.height="";this.showControls(false);if(a!=null){OpenLayers.Event.stop(a)}},minimizeControl:function(a){this.div.style.width="0px";this.div.style.height="0px";this.showControls(true);if(a!=null){OpenLayers.Event.stop(a)}},showControls:function(a){this.maximizeDiv.style.display=a?"":"none";this.minimizeDiv.style.display=a?"none":"";this.layersDiv.style.display=a?"none":""},loadContents:function(){this.layersDiv=document.createElement("div");this.layersDiv.id=this.id+"_layersDiv";OpenLayers.Element.addClass(this.layersDiv,"layersDiv");this.baseLbl=document.createElement("div");this.baseLbl.innerHTML=OpenLayers.i18n("Base Layer");OpenLayers.Element.addClass(this.baseLbl,"baseLbl");this.baseLayersDiv=document.createElement("div");OpenLayers.Element.addClass(this.baseLayersDiv,"baseLayersDiv");this.dataLbl=document.createElement("div");this.dataLbl.innerHTML=OpenLayers.i18n("Overlays");OpenLayers.Element.addClass(this.dataLbl,"dataLbl");this.dataLayersDiv=document.createElement("div");OpenLayers.Element.addClass(this.dataLayersDiv,"dataLayersDiv");if(this.ascending){this.layersDiv.appendChild(this.baseLbl);this.layersDiv.appendChild(this.baseLayersDiv);this.layersDiv.appendChild(this.dataLbl);this.layersDiv.appendChild(this.dataLayersDiv)}else{this.layersDiv.appendChild(this.dataLbl);this.layersDiv.appendChild(this.dataLayersDiv);this.layersDiv.appendChild(this.baseLbl);this.layersDiv.appendChild(this.baseLayersDiv)}this.div.appendChild(this.layersDiv);var a=OpenLayers.Util.getImageLocation("layer-switcher-maximize.png");this.maximizeDiv=OpenLayers.Util.createAlphaImageDiv("OpenLayers_Control_MaximizeDiv",null,null,a,"absolute");OpenLayers.Element.addClass(this.maximizeDiv,"maximizeDiv olButton");this.maximizeDiv.style.display="none";this.div.appendChild(this.maximizeDiv);var a=OpenLayers.Util.getImageLocation("layer-switcher-minimize.png");this.minimizeDiv=OpenLayers.Util.createAlphaImageDiv("OpenLayers_Control_MinimizeDiv",null,null,a,"absolute");OpenLayers.Element.addClass(this.minimizeDiv,"minimizeDiv olButton");this.minimizeDiv.style.display="none";this.div.appendChild(this.minimizeDiv)},CLASS_NAME:"OpenLayers.Control.LayerSwitcher"});
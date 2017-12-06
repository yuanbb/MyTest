OpenLayers.Console.warn("OpenLayers.Rico is deprecated");OpenLayers.Rico=OpenLayers.Rico||{};OpenLayers.Rico.Corner={round:function(d,b){d=OpenLayers.Util.getElement(d);this._setOptions(b);var a=this.options.color;if(this.options.color=="fromElement"){a=this._background(d)}var c=this.options.bgColor;if(this.options.bgColor=="fromParent"){c=this._background(d.offsetParent)}this._roundCornersImpl(d,a,c)},changeColor:function(c,b){c.style.backgroundColor=b;var a=c.parentNode.getElementsByTagName("span");for(var d=0;d<a.length;d++){a[d].style.backgroundColor=b}},changeOpacity:function(c,f){var d=f;var a="alpha(opacity="+f*100+")";c.style.opacity=d;c.style.filter=a;var b=c.parentNode.getElementsByTagName("span");for(var e=0;e<b.length;e++){b[e].style.opacity=d;b[e].style.filter=a}},reRound:function(d,c){var b=d.parentNode.childNodes[0];var a=d.parentNode.childNodes[2];d.parentNode.removeChild(b);d.parentNode.removeChild(a);this.round(d.parentNode,c)},_roundCornersImpl:function(c,a,b){if(this.options.border){this._renderBorder(c,b)}if(this._isTopRounded()){this._roundTopCorners(c,a,b)}if(this._isBottomRounded()){this._roundBottomCorners(c,a,b)}},_renderBorder:function(d,e){var b="1px solid "+this._borderColor(e);var a="border-left: "+b;var f="border-right: "+b;var c="style='"+a+";"+f+"'";d.innerHTML="<div "+c+">"+d.innerHTML+"</div>"},_roundTopCorners:function(c,a,e){var d=this._createCorner(e);for(var b=0;b<this.options.numSlices;b++){d.appendChild(this._createCornerSlice(a,e,b,"top"))}c.style.paddingTop=0;c.insertBefore(d,c.firstChild)},_roundBottomCorners:function(c,a,e){var d=this._createCorner(e);for(var b=(this.options.numSlices-1);b>=0;b--){d.appendChild(this._createCornerSlice(a,e,b,"bottom"))}c.style.paddingBottom=0;c.appendChild(d)},_createCorner:function(b){var a=document.createElement("div");a.style.backgroundColor=(this._isTransparent()?"transparent":b);return a},_createCornerSlice:function(c,d,g,a){var e=document.createElement("span");var b=e.style;b.backgroundColor=c;b.display="block";b.height="1px";b.overflow="hidden";b.fontSize="1px";var f=this._borderColor(c,d);if(this.options.border&&g==0){b.borderTopStyle="solid";b.borderTopWidth="1px";b.borderLeftWidth="0px";b.borderRightWidth="0px";b.borderBottomWidth="0px";b.height="0px";b.borderColor=f}else{if(f){b.borderColor=f;b.borderStyle="solid";b.borderWidth="0px 1px"}}if(!this.options.compact&&(g==(this.options.numSlices-1))){b.height="2px"}this._setMargin(e,g,a);this._setBorder(e,g,a);return e},_setOptions:function(a){this.options={corners:"all",color:"fromElement",bgColor:"fromParent",blend:true,border:false,compact:false};OpenLayers.Util.extend(this.options,a||{});this.options.numSlices=this.options.compact?2:4;if(this._isTransparent()){this.options.blend=false}},_whichSideTop:function(){if(this._hasString(this.options.corners,"all","top")){return""}if(this.options.corners.indexOf("tl")>=0&&this.options.corners.indexOf("tr")>=0){return""}if(this.options.corners.indexOf("tl")>=0){return"left"}else{if(this.options.corners.indexOf("tr")>=0){return"right"}}return""},_whichSideBottom:function(){if(this._hasString(this.options.corners,"all","bottom")){return""}if(this.options.corners.indexOf("bl")>=0&&this.options.corners.indexOf("br")>=0){return""}if(this.options.corners.indexOf("bl")>=0){return"left"}else{if(this.options.corners.indexOf("br")>=0){return"right"}}return""},_borderColor:function(a,b){if(a=="transparent"){return b}else{if(this.options.border){return this.options.border}else{if(this.options.blend){return this._blend(b,a)}else{return""}}}},_setMargin:function(d,e,b){var c=this._marginSize(e);var a=b=="top"?this._whichSideTop():this._whichSideBottom();if(a=="left"){d.style.marginLeft=c+"px";d.style.marginRight="0px"}else{if(a=="right"){d.style.marginRight=c+"px";d.style.marginLeft="0px"}else{d.style.marginLeft=c+"px";d.style.marginRight=c+"px"}}},_setBorder:function(d,e,b){var c=this._borderSize(e);var a=b=="top"?this._whichSideTop():this._whichSideBottom();if(a=="left"){d.style.borderLeftWidth=c+"px";d.style.borderRightWidth="0px"}else{if(a=="right"){d.style.borderRightWidth=c+"px";d.style.borderLeftWidth="0px"}else{d.style.borderLeftWidth=c+"px";d.style.borderRightWidth=c+"px"}}if(this.options.border!=false){d.style.borderLeftWidth=c+"px";d.style.borderRightWidth=c+"px"}},_marginSize:function(e){if(this._isTransparent()){return 0}var d=[5,3,2,1];var a=[3,2,1,0];var c=[2,1];var b=[1,0];if(this.options.compact&&this.options.blend){return b[e]}else{if(this.options.compact){return c[e]}else{if(this.options.blend){return a[e]}else{return d[e]}}}},_borderSize:function(e){var d=[5,3,2,1];var b=[2,1,1,1];var a=[1,0];var c=[0,2,0,0];if(this.options.compact&&(this.options.blend||this._isTransparent())){return 1}else{if(this.options.compact){return a[e]}else{if(this.options.blend){return b[e]}else{if(this.options.border){return c[e]}else{if(this._isTransparent()){return d[e]}}}}}return 0},_hasString:function(b){for(var a=1;a<arguments.length;a++){if(b.indexOf(arguments[a])>=0){return true}}return false},_blend:function(c,a){var b=OpenLayers.Rico.Color.createFromHex(c);b.blend(OpenLayers.Rico.Color.createFromHex(a));return b},_background:function(a){try{return OpenLayers.Rico.Color.createColorFromBackground(a).asHex()}catch(b){return"#ffffff"}},_isTransparent:function(){return this.options.color=="transparent"},_isTopRounded:function(){return this._hasString(this.options.corners,"all","top","tl","tr")},_isBottomRounded:function(){return this._hasString(this.options.corners,"all","bottom","bl","br")},_hasSingleTextChild:function(a){return a.childNodes.length==1&&a.childNodes[0].nodeType==3}};
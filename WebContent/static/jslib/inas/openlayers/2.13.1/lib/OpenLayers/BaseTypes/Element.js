OpenLayers.Element={visible:function(a){return OpenLayers.Util.getElement(a).style.display!="none"},toggle:function(){for(var c=0,a=arguments.length;c<a;c++){var b=OpenLayers.Util.getElement(arguments[c]);var d=OpenLayers.Element.visible(b)?"none":"";b.style.display=d}},remove:function(a){a=OpenLayers.Util.getElement(a);a.parentNode.removeChild(a)},getHeight:function(a){a=OpenLayers.Util.getElement(a);return a.offsetHeight},hasClass:function(b,a){var c=b.className;return(!!c&&new RegExp("(^|\\s)"+a+"(\\s|$)").test(c))},addClass:function(b,a){if(!OpenLayers.Element.hasClass(b,a)){b.className+=(b.className?" ":"")+a}return b},removeClass:function(b,a){var c=b.className;if(c){b.className=OpenLayers.String.trim(c.replace(new RegExp("(^|\\s+)"+a+"(\\s+|$)")," "))}return b},toggleClass:function(b,a){if(OpenLayers.Element.hasClass(b,a)){OpenLayers.Element.removeClass(b,a)}else{OpenLayers.Element.addClass(b,a)}return b},getStyle:function(c,d){c=OpenLayers.Util.getElement(c);var e=null;if(c&&c.style){e=c.style[OpenLayers.String.camelize(d)];if(!e){if(document.defaultView&&document.defaultView.getComputedStyle){var b=document.defaultView.getComputedStyle(c,null);e=b?b.getPropertyValue(d):null}else{if(c.currentStyle){e=c.currentStyle[OpenLayers.String.camelize(d)]}}}var a=["left","top","right","bottom"];if(window.opera&&(OpenLayers.Util.indexOf(a,d)!=-1)&&(OpenLayers.Element.getStyle(c,"position")=="static")){e="auto"}}return e=="auto"?null:e}};
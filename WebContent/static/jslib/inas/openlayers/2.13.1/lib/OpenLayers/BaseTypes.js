OpenLayers.String={startsWith:function(b,a){return(b.indexOf(a)==0)},contains:function(b,a){return(b.indexOf(a)!=-1)},trim:function(a){return a.replace(/^\s\s*/,"").replace(/\s\s*$/,"")},camelize:function(f){var d=f.split("-");var b=d[0];for(var c=1,a=d.length;c<a;c++){var e=d[c];b+=e.charAt(0).toUpperCase()+e.substring(1)}return b},format:function(d,c,a){if(!c){c=window}var b=function(j,e){var h;var g=e.split(/\.+/);for(var f=0;f<g.length;f++){if(f==0){h=c}if(h===undefined){break}h=h[g[f]]}if(typeof h=="function"){h=a?h.apply(null,a):h()}if(typeof h=="undefined"){return"undefined"}else{return h}};return d.replace(OpenLayers.String.tokenRegEx,b)},tokenRegEx:/\$\{([\w.]+?)\}/g,numberRegEx:/^([+-]?)(?=\d|\.\d)\d*(\.\d*)?([Ee]([+-]?\d+))?$/,isNumeric:function(a){return OpenLayers.String.numberRegEx.test(a)},numericIf:function(b,c){var a=b;if(c===true&&b!=null&&b.replace){b=b.replace(/^\s*|\s*$/g,"")}return OpenLayers.String.isNumeric(b)?parseFloat(b):a}};OpenLayers.Number={decimalSeparator:".",thousandsSeparator:",",limitSigDigs:function(a,c){var b=0;if(c>0){b=parseFloat(a.toPrecision(c))}return b},format:function(c,a,g,i){a=(typeof a!="undefined")?a:0;g=(typeof g!="undefined")?g:OpenLayers.Number.thousandsSeparator;i=(typeof i!="undefined")?i:OpenLayers.Number.decimalSeparator;if(a!=null){c=parseFloat(c.toFixed(a))}var b=c.toString().split(".");if(b.length==1&&a==null){a=0}var d=b[0];if(g){var e=/(-?[0-9]+)([0-9]{3})/;while(e.test(d)){d=d.replace(e,"$1"+g+"$2")}}var f;if(a==0){f=d}else{var h=b.length>1?b[1]:"0";if(a!=null){h=h+new Array(a-h.length+1).join("0")}f=d+i+h}return f},zeroPad:function(b,a,c){var d=b.toString(c||10);while(d.length<a){d="0"+d}return d}};OpenLayers.Function={bind:function(c,b){var a=Array.prototype.slice.apply(arguments,[2]);return function(){var d=a.concat(Array.prototype.slice.apply(arguments,[0]));return c.apply(b,d)}},bindAsEventListener:function(b,a){return function(c){return b.call(a,c||window.event)}},False:function(){return false},True:function(){return true},Void:function(){}};OpenLayers.Array={filter:function(g,f,b){var d=[];if(Array.prototype.filter){d=g.filter(f,b)}else{var a=g.length;if(typeof f!="function"){throw new TypeError()}for(var c=0;c<a;c++){if(c in g){var e=g[c];if(f.call(b,e,c,g)){d.push(e)}}}}return d}};
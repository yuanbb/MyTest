OpenLayers.Class=function(){var a=arguments.length;var d=arguments[0];var c=arguments[a-1];var e=typeof c.initialize=="function"?c.initialize:function(){d.prototype.initialize.apply(this,arguments)};if(a>1){var b=[e,d].concat(Array.prototype.slice.call(arguments).slice(1,a-1),c);OpenLayers.inherit.apply(null,b)}else{e.prototype=c}return e};OpenLayers.inherit=function(f,d){var c=function(){};c.prototype=d.prototype;f.prototype=new c;var b,a,e;for(b=2,a=arguments.length;b<a;b++){e=arguments[b];if(typeof e==="function"){e=e.prototype}OpenLayers.Util.extend(f.prototype,e)}};OpenLayers.Util=OpenLayers.Util||{};OpenLayers.Util.extend=function(a,e){a=a||{};if(e){for(var d in e){var c=e[d];if(c!==undefined){a[d]=c}}var b=typeof window.Event=="function"&&e instanceof window.Event;if(!b&&e.hasOwnProperty&&e.hasOwnProperty("toString")){a.toString=e.toString}}return a};
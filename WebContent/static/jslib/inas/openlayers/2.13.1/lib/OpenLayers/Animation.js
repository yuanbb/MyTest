OpenLayers.Animation=(function(f){var g=OpenLayers.Util.vendorPrefix.js(f,"requestAnimationFrame");var c=!!(g);var e=(function(){var i=f[g]||function(k,j){f.setTimeout(k,16)};return function(k,j){i.apply(f,[k,j])}})();var b=0;var a={};function h(m,j,i){j=j>0?j:Number.POSITIVE_INFINITY;var l=++b;var k=+new Date;a[l]=function(){if(a[l]&&+new Date-k<=j){m();if(a[l]){e(a[l],i)}}else{delete a[l]}};e(a[l],i);return l}function d(i){delete a[i]}return{isNative:c,requestFrame:e,start:h,stop:d}})(window);
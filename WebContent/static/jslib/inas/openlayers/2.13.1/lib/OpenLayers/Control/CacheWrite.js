OpenLayers.Control.CacheWrite=OpenLayers.Class(OpenLayers.Control,{layers:null,imageFormat:"image/png",quotaRegEx:(/quota/i),setMap:function(c){OpenLayers.Control.prototype.setMap.apply(this,arguments);var a,b=this.layers||c.layers;for(a=b.length-1;a>=0;--a){this.addLayer({layer:b[a]})}if(!this.layers){c.events.on({addlayer:this.addLayer,removeLayer:this.removeLayer,scope:this})}},addLayer:function(a){a.layer.events.on({tileloadstart:this.makeSameOrigin,tileloaded:this.onTileLoaded,scope:this})},removeLayer:function(a){a.layer.events.un({tileloadstart:this.makeSameOrigin,tileloaded:this.onTileLoaded,scope:this})},makeSameOrigin:function(a){if(this.active){var c=a.tile;if(c instanceof OpenLayers.Tile.Image&&!c.crossOriginKeyword&&c.url.substr(0,5)!=="data:"){var b=OpenLayers.Request.makeSameOrigin(c.url,OpenLayers.ProxyHost);OpenLayers.Control.CacheWrite.urlMap[b]=c.url;c.url=b}}},onTileLoaded:function(a){if(this.active&&!a.aborted&&a.tile instanceof OpenLayers.Tile.Image&&a.tile.url.substr(0,5)!=="data:"){this.cache({tile:a.tile});delete OpenLayers.Control.CacheWrite.urlMap[a.tile.url]}},cache:function(h){if(window.localStorage){var c=h.tile;try{var a=c.getCanvasContext();if(a){var d=OpenLayers.Control.CacheWrite.urlMap;var b=d[c.url]||c.url;window.localStorage.setItem("olCache_"+b,a.canvas.toDataURL(this.imageFormat))}}catch(g){var f=g.name||g.message;if(f&&this.quotaRegEx.test(f)){this.events.triggerEvent("cachefull",{tile:c})}else{OpenLayers.Console.error(g.toString())}}}},destroy:function(){if(this.layers||this.map){var a,b=this.layers||this.map.layers;for(a=b.length-1;a>=0;--a){this.removeLayer({layer:b[a]})}}if(this.map){this.map.events.un({addlayer:this.addLayer,removeLayer:this.removeLayer,scope:this})}OpenLayers.Control.prototype.destroy.apply(this,arguments)},CLASS_NAME:"OpenLayers.Control.CacheWrite"});OpenLayers.Control.CacheWrite.clearCache=function(){if(!window.localStorage){return}var b,a;for(b=window.localStorage.length-1;b>=0;--b){a=window.localStorage.key(b);if(a.substr(0,8)==="olCache_"){window.localStorage.removeItem(a)}}};OpenLayers.Control.CacheWrite.urlMap={};
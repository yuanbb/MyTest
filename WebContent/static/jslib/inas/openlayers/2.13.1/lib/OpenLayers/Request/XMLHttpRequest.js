(function(){var g=window.XMLHttpRequest;var a=!!window.controllers,j=window.document.all&&!window.opera,k=j&&window.navigator.userAgent.match(/MSIE 7.0/);function d(){this._object=g&&!k?new g:new window.ActiveXObject("Microsoft.XMLHTTP");this._listeners=[]}function c(){return new d}c.prototype=d.prototype;if(a&&g.wrapped){c.wrapped=g.wrapped}c.UNSENT=0;c.OPENED=1;c.HEADERS_RECEIVED=2;c.LOADING=3;c.DONE=4;c.prototype.readyState=c.UNSENT;c.prototype.responseText="";c.prototype.responseXML=null;c.prototype.status=0;c.prototype.statusText="";c.prototype.priority="NORMAL";c.prototype.onreadystatechange=null;c.onreadystatechange=null;c.onopen=null;c.onsend=null;c.onabort=null;c.prototype.open=function(o,r,n,s,m){delete this._headers;if(arguments.length<3){n=true}this._async=n;var q=this,p=this.readyState,l;if(j&&n){l=function(){if(p!=c.DONE){e(q);q.abort()}};window.attachEvent("onunload",l)}if(c.onopen){c.onopen.apply(this,arguments)}if(arguments.length>4){this._object.open(o,r,n,s,m)}else{if(arguments.length>3){this._object.open(o,r,n,s)}else{this._object.open(o,r,n)}}this.readyState=c.OPENED;b(this);this._object.onreadystatechange=function(){if(a&&!n){return}q.readyState=q._object.readyState;h(q);if(q._aborted){q.readyState=c.UNSENT;return}if(q.readyState==c.DONE){delete q._data;e(q);if(j&&n){window.detachEvent("onunload",l)}}if(p!=q.readyState){b(q)}p=q.readyState}};function f(l){l._object.send(l._data);if(a&&!l._async){l.readyState=c.OPENED;h(l);while(l.readyState<c.DONE){l.readyState++;b(l);if(l._aborted){return}}}}c.prototype.send=function(l){if(c.onsend){c.onsend.apply(this,arguments)}if(!arguments.length){l=null}if(l&&l.nodeType){l=window.XMLSerializer?new window.XMLSerializer().serializeToString(l):l.xml;if(!this._headers["Content-Type"]){this._object.setRequestHeader("Content-Type","application/xml")}}this._data=l;f(this)};c.prototype.abort=function(){if(c.onabort){c.onabort.apply(this,arguments)}if(this.readyState>c.UNSENT){this._aborted=true}this._object.abort();e(this);this.readyState=c.UNSENT;delete this._data};c.prototype.getAllResponseHeaders=function(){return this._object.getAllResponseHeaders()};c.prototype.getResponseHeader=function(l){return this._object.getResponseHeader(l)};c.prototype.setRequestHeader=function(l,m){if(!this._headers){this._headers={}}this._headers[l]=m;return this._object.setRequestHeader(l,m)};c.prototype.addEventListener=function(o,n,m){for(var l=0,p;p=this._listeners[l];l++){if(p[0]==o&&p[1]==n&&p[2]==m){return}}this._listeners.push([o,n,m])};c.prototype.removeEventListener=function(o,n,m){for(var l=0,p;p=this._listeners[l];l++){if(p[0]==o&&p[1]==n&&p[2]==m){break}}if(p){this._listeners.splice(l,1)}};c.prototype.dispatchEvent=function(m){var n={type:m.type,target:this,currentTarget:this,eventPhase:2,bubbles:m.bubbles,cancelable:m.cancelable,timeStamp:m.timeStamp,stopPropagation:function(){},preventDefault:function(){},initEvent:function(){}};if(n.type=="readystatechange"&&this.onreadystatechange){(this.onreadystatechange.handleEvent||this.onreadystatechange).apply(this,[n])}for(var l=0,o;o=this._listeners[l];l++){if(o[0]==n.type&&!o[2]){(o[1].handleEvent||o[1]).apply(this,[n])}}};c.prototype.toString=function(){return"[object XMLHttpRequest]"};c.toString=function(){return"[XMLHttpRequest]"};function b(l){if(c.onreadystatechange){c.onreadystatechange.apply(l)}l.dispatchEvent({type:"readystatechange",bubbles:false,cancelable:false,timeStamp:new Date+0})}function i(n){var m=n.responseXML,l=n.responseText;if(j&&l&&m&&!m.documentElement&&n.getResponseHeader("Content-Type").match(/[^\/]+\/[^\+]+\+xml/)){m=new window.ActiveXObject("Microsoft.XMLDOM");m.async=false;m.validateOnParse=false;m.loadXML(l)}if(m){if((j&&m.parseError!=0)||!m.documentElement||(m.documentElement&&m.documentElement.tagName=="parsererror")){return null}}return m}function h(l){try{l.responseText=l._object.responseText}catch(m){}try{l.responseXML=i(l._object)}catch(m){}try{l.status=l._object.status}catch(m){}try{l.statusText=l._object.statusText}catch(m){}}function e(l){l._object.onreadystatechange=new window.Function}if(!window.Function.prototype.apply){window.Function.prototype.apply=function(l,m){if(!m){m=[]}l.__func=this;l.__func(m[0],m[1],m[2],m[3],m[4]);delete l.__func}}if(!OpenLayers.Request){OpenLayers.Request={}}OpenLayers.Request.XMLHttpRequest=c})();
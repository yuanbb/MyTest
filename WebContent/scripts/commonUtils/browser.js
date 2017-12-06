;(function($, window, document,undefined){
    if(!window.browser){
         
        var userAgent = navigator.userAgent.toLowerCase(),uaMatch;
        window.browser = {}
         
        /**
         * 判断是否为ie
         */
        function isIE(){
            return ("ActiveXObject" in window);
        }
        /**
         * 判断是否为谷歌浏览器
         */
        if(!uaMatch){
            uaMatch = userAgent.match(/chrome\/([\d.]+)/);
            if(uaMatch!=null){
                window.browser['name'] = 'chrome';
                window.browser['version'] = uaMatch[1];
            }
        }
        /**
         * 判断是否为火狐浏览器
         */
        if(!uaMatch){
            uaMatch = userAgent.match(/firefox\/([\d.]+)/);
            if(uaMatch!=null){
                window.browser['name'] = 'firefox';
                window.browser['version'] = uaMatch[1];
            }
        }
        /**
         * 判断是否为opera浏览器
         */
        if(!uaMatch){
            uaMatch = userAgent.match(/opera.([\d.]+)/);
            if(uaMatch!=null){
                window.browser['name'] = 'opera';
                window.browser['version'] = uaMatch[1];
            }
        }
        /**
         * 判断是否为Safari浏览器
         */
        if(!uaMatch){
            uaMatch = userAgent.match(/safari\/([\d.]+)/);
            if(uaMatch!=null){
                window.browser['name'] = 'safari';
                window.browser['version'] = uaMatch[1];
            }
        }
        /**
         * 最后判断是否为IE
         */
        if(!uaMatch){
            if(userAgent.match(/msie ([\d.]+)/)!=null){
                uaMatch = userAgent.match(/msie ([\d.]+)/);
                window.browser['name'] = 'ie';
                window.browser['version'] = uaMatch[1];
            }else{
                /**
                 * IE10
                 */
                if(isIE() && !!document.attachEvent && (function(){"use strict";return !this;}())){
                    window.browser['name'] = 'ie';
                    window.browser['version'] = '10';
                }
                /**
                 * IE11
                 */
                if(isIE() && !document.attachEvent){
                    window.browser['name'] = 'ie';
                    window.browser['version'] = '11';
                }
            }
        }
 
        /**
         * 注册判断方法
         */
        if(!$.isIE){
            $.extend({
                isIE:function(){
                    return (window.browser.name == 'ie');
                }
            });
        }
        if(!$.isIE11){
            $.extend({
                isIE11:function(){
                	var _vs = window.browser.version;
                	if(_vs.indexOf('.')==-1){
                		_vs += ".0";
                	}
                	var _vsArr = _vs.split(".");
                    return (window.browser.name == 'ie' && _vsArr[0] == '11');
                }
            });
        }
        if(!$.isIE10){
            $.extend({
                isIE10:function(){
                	var _vs = window.browser.version;
                	if(_vs.indexOf('.')==-1){
                		_vs += ".0";
                	}
                	var _vsArr = _vs.split(".");
                    return (window.browser.name == 'ie' && _vsArr[0] == '10');
                }
            });
        }
        if(!$.isIE9){
            $.extend({
                isIE9:function(){
                	var _vs = window.browser.version;
                	if(_vs.indexOf('.')==-1){
                		_vs += ".0";
                	}
                	var _vsArr = _vs.split(".");
                    return (window.browser.name == 'ie' && _vsArr[0] == '9');
                }
            });
        }
        if(!$.isIE5_8){
            $.extend({
                isIE5_8:function(){
                	var _vs = window.browser.version;
                	if(_vs.indexOf('.')==-1){
                		_vs += ".0";
                	}
                	var _vsArr = _vs.split(".");
                    return (window.browser.name == 'ie' && (_vsArr[0] == '5' || _vsArr[0] == '6' || _vsArr[0] == '7' || _vsArr[0] == '8'));
                }
            });
        }
        if(!$.isChrome){
            $.extend({
                isChrome:function(){
                    return (window.browser.name == 'chrome');
                }
            });
        }
        if(!$.isFirefox){
            $.extend({
                isFirefox:function(){
                    return (window.browser.name == 'firefox');
                }
            });
        }
        if(!$.isOpera){
            $.extend({
                isOpera:function(){
                    return (window.browser.name == 'opera');
                }
            });
        }
        if(!$.isSafari){
            $.extend({
                isSafari:function(){
                    return (window.browser.name == 'safari');
                }
            });
        }
    }
})(jQuery, window, document);

//使用方式
/*console.log(window.browser);
console.log($.isIE());
console.log($.isChrome());*/
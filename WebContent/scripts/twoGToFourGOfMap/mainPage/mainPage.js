//twoGToFourGOfMap
var mainPage = {
			init:function(){
                mainPage.initDom();
                mainPage.initEvent();
				mainPage.initMap();
			}
};
function doQuery(){
        alert(getsbcSelectStr());
}
mainPage.initEvent = function(){
        //地市切换加载SBC
        $("#cityName").on('change',mainPage.loadSBC);
        //切换指标显示样式
        $("#selectFloatType").on('click',mainPage.changeFolatType);
        $("#typeFolat").on('click',mainPage.changeTypeFolat);
        $("#typeBottom").on('click',mainPage.changeTypeBottom);
        $("#typeRight").on('click',mainPage.changeTypeRight);

};
mainPage.initDom = function(){
        //居中条件
        $("div.float-condition-div").css('margin-left', -$("div.float-condition-div").width()/2-100);
        //初始化地市
        $("#cityName").empty();
        $("#cityName").append('<option value="">---请选择---</option>');
        var cityUrl = "/sml/query/replace-cfg-query-area";
        var cityPost = {};
        var cityPostStr=JSON.stringify(cityPost);
        commonAjax(cityUrl, cityPostStr, "post", true,"", function(resData){
                 var data = resData.data;
                 for (var i = 0; i < data.length; i++) {
                        var curr = data[i];
                        $("#cityName").append('<option value="'+curr.ID+'">'+curr.NAME+'</option>');
                 }
                 mainPage.loadSBC();
         });

};
mainPage.loadSBC = function(){
            var area = $("#cityName").val();
            $("#sbcName_span").empty();
            var htmlStr = "";  
            htmlStr   += '<select id="sbcName" class="selectpicker" multiple data-hide-disabled="true" data-size="5">';
    
            var sbcUrl = "/sml/query/replace-cfg-query-bsc-by-area";
            var sbcPost = {"area":area};
            var sbcPostStr=JSON.stringify(sbcPost);
            commonAjax(sbcUrl, sbcPostStr, "post", true,"", function(resData){
                    var data = resData.data;
                    for (var i = 0; i < data.length; i++) {
                            var curr = data[i];
                            htmlStr   += '<option value="'+curr.ID+'">'+curr.NAME+'</option>';

                    }
                   htmlStr   += '</select>';
                   $("#sbcName_span").html(htmlStr);
                   $('#sbcName').selectpicker();
             });
};
mainPage.changeFolatType = function(){
        var flag = $("#selectFloatTypeContent").css('display');
        if (flag == "block") {
            $("#selectFloatTypeContent").css('display', 'none');
        }else{
            $("#selectFloatTypeContent").css('display', 'block');
        };
};
mainPage.hiddenAllPopup = function(){
        $("#bottomPopup").css('display', 'none');
        $("#floatPopup").css('display', 'none');
        $("#rightPopup").css('display', 'none');
};
mainPage.changeTypeFolat = function(){
        mainPage.hiddenAllPopup();
        $("#floatPopup").css('display', 'block');
        eventPopupFloat();
        setTimeout('$("#selectFloatTypeContent").css("display", "none")',1000);
       
};
mainPage.changeTypeBottom = function(){
        mainPage.hiddenAllPopup();
        $("#bottomPopup").css('display', 'block');
        eventPopupBottom();
        setTimeout('$("#selectFloatTypeContent").css("display", "none")',1000);
};
mainPage.changeTypeRight = function(){
        mainPage.hiddenAllPopup();
        $("#rightPopup").css('display', 'block');
        eventPopupRight();
        setTimeout('$("#selectFloatTypeContent").css("display", "none")',1000);
};
mainPage.initMap = function(){
        //限制地图显示范围
        var southWest = L.latLng(31.079115, 121.5702),
            northEast = L.latLng(31.237952, 121.753598),
            bounds = L.latLngBounds(southWest, northEast);
        //初始化地图
        map = new L.map('map',{
            minZoom: 11,
            maxZoom: 20,
            crs: L.CRS.BEPSG3857,
            contextmenu: true,
            //maxBounds: bounds,
    		zoomControl: false,
            attributionControl: false
          }).setView([31.147534,121.663992], 14);
        normalLayer = new L.tileLayer.baiduLayer('customLayerNormalSH.Map');
        satelliteLayer = new L.tileLayer.baiduLayer('customLayerSatSH.Map');
        roadLayer = new L.tileLayer.baiduLayer('customLayerSatSH.Road');
    	//添加图层控制器
        var baseLayers = {
            "地图": normalLayer,
            "卫星": satelliteLayer
        };
        switchControl = L.control.groupedLayers(baseLayers, [],{exclusiveGroups: [], groupCheckboxes: true}).addTo(map);
        L.control.zoom({zoomInTitle: '放大', zoomOutTitle: '缩小'}).addTo(map);
        map.on('baselayerchange', baseLayerChange);//注册底图切换事件
        //默认添加
        map.addLayer(normalLayer);
        //map.addLayer(roadLayer);
        //roadLayer.bringToFront();
};

function baseLayerChange(e){
        //console.log(e)
        var curLayerName = e.name;
        var curZoom = map.getZoom();
        var curCenter = map.getCenter();
        //map.addLayer(roadLayer);
        map.hasLayer(roadLayer) && (map.removeLayer(roadLayer));
        //map.hasLayer(satelliteLayer) && map.removeLayer(satelliteLayer);
        //map.hasLayer(baseLayer) && map.removeLayer(baseLayer);
        //map.hasLayer(normalLayer) && map.removeLayer(normalLayer);
        if(curLayerName === '地图'){
            //map.addLayer(normalLayer);
            //map.removeLayer(roadLayer);
            map.options.maxZoom = 18;
            map.options.minZoom = 11;
            if(curZoom>18){
                map.setView(curCenter,18);
            }
        }else{
            map.options.maxZoom = 18;
            map.options.minZoom = 11;
            if(curZoom>18){
                map.setView(curCenter,18);
            }
            //map.addLayer(roadLayer);
            //roadLayer.bringToFront();
        }
}
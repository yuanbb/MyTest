var railway_bd = [
                  
                  {"lng":"114.01611","lat":"32.99945","line":"确新铁路","line_section":"驻马店段"},  //32.99945, 114.01611
                  {"lng":"114.04083","lat":"32.79766","line":"确新铁路","line_section":"驻马店段"},  //
                  {"lng":"114.04083","lat":"32.79766","line":"确新铁路","line_section":"确山段"},  //32.79766, 114.04083
                  {"lng":"114.18777","lat":"32.65325","line":"确新铁路","line_section":"确山段"},  ///32.65325, 114.18777
                  {"lng":"114.39789","lat":"32.58848","line":"确新铁路","line_section":"确山段"},  
				  {"lng":"114.39789","lat":"32.58848","line":"确新铁路","line_section":"正阳段"},   //32.58848, 114.39789
				  {"lng":"114.9884","lat":"32.73877","line":"确新铁路","line_section":"正阳段"},   
				  {"lng":"114.9884","lat":"32.73877","line":"确新铁路","line_section":"新蔡段"},    //32.73877, 114.9884
				  {"lng":"114.9984","lat":"32.74877","line":"确新铁路","line_section":"新蔡段"}    
				 ]
var OWN = {
           map : null,
           common : {},
           layers : {},
           init : function(id){
           	     OWN.initMap(id);
           	    // OWN.getLatlngSelf();
           	     OWN.addLine();        // 添加一条铁路线
           	     OWN.addHeatMap();        // 添加热力图
           	     OWN.initDomEvent();   
                 OWN.map.on('zoomend', OWN.getCurrZoom);      //注册缩放结束事件
                 OWN.map.on('overlayadd', OWN.overlayadd);    //注册图层添加事件
                 OWN.map.on('overlayremove', OWN.overlayremove);  //注册图层清除事件
           }

};
OWN.getCurrZoom = function(){
       var zoom = OWN.map.getZoom();
       console.log(zoom);
};
OWN.overlayadd = function(e){
	   var layerName = e.name;
	   var groupName = e.group.name;
	   console.log(groupName +"----"+layerName)
	   if(layerName === '哈哈'){
		   console.log("添加....");
		   
	   } 
}
OWN.overlayremove = function(e){
	   var layerName = e.name;
	   var groupName = e.group.name;
	   console.log(groupName +"----"+layerName)
	   if(layerName === '哈哈'){
		   console.log("清除....");
		   
	   } 
}
OWN.initDomEvent = function(){
	
	//addHeatMap	
	OWN.map.on('zoomend', OWN.rerenderHeatMap);//重新绘制热力图
};
//单击获取当前点的 经纬度
OWN.getLatlngSelf = function(){
                   var popup2 = L.popup();
                   function onMapClick(e) {
                       popup2
                           .setLatLng(e.latlng)
                           .setContent("你点击地图经纬度:" + e.latlng.toString())
                           .openOn(OWN.map);
                   	
                   }
                   OWN.map.on('click', onMapClick);
};
OWN.initMap = function(id){
           OWN.map = L.map(id,{
                minZoom: 4,
                maxZoom: 17,
                //center :[32.73762,113.87604],
                //zoom: 9
                zoomControl: false,
           }).setView([32.73762,113.87604], 12);
           //加载图层
           OWN.layers.normalLayer = L.tileLayer('http://localhost:8080/MapTile/googlemaps/roadmap/{z}/{x}/{y}.png').addTo(OWN.map);
           OWN.layers.satelliteLayer = L.tileLayer('http://localhost:8080/MapTile/googlemaps/satellite/{z}/{x}/{y}.jpg');
           OWN.layers.roadLayer = L.tileLayer('http://localhost:8080/MapTile/googlemaps/roadmap/{z}/{x}/{y}.png');
           //初始化图层控制器
  	       var baseLayers = {
  		      "地图": OWN.layers.normalLayer,
  		      "卫星": OWN.layers.satelliteLayer,
  		      "路": OWN.layers.roadLayer
  	       };
  	       OWN.switchControl = L.control.groupedLayers(baseLayers,[],{autoZIndex: false, exclusiveGroups: [], groupCheckboxes: true});
  	           //switchControl = L.control.groupedLayers(baseLayers,[],{exclusiveGroups: [], groupCheckboxes: true}).addTo(map);
  		   OWN.map.addControl(OWN.switchControl);
  		   L.control.zoom({zoomInTitle: '放大', zoomOutTitle: '缩小'}).addTo(OWN.map);
  	      // L.control.scale({position: 'bottomright', imperial: false}).addTo(OWN.map);	//添加比例尺
  		 addTestMark();
  		 addSectorXQ();
  		 addRectangleTool();
};

OWN.addLine = function(){
           var uniqueArr = OWN.common.getUniqueName(railway_bd, 'line_section');
           var points_bs = [];
           var points_bx = [];
           var points = [];
           for (var i = 0; i < uniqueArr.length; i++) {
           	    var lineName = uniqueArr[i];
           	    var obj = OWN.getLinePoints(lineName);
           	    points = obj.points;
           	    var line = obj.line;


           	    OWN.layers[lineName] = L.featureGroup();
           	    
           	    var flag = Math.random();
                if(flag > 0.5){
                       	   //绘制背景线上
                           	    
                           	    L.polyline(points, {
                         	          name: lineName, 
                                      weight: 10,
                                      color: 'yellow',
                                      opacity: 0.8
                         	     }).addTo(OWN.layers[lineName]);  //添加到分组层上
                           	//绘制背景线下
                           	    
                           	    L.polyline(points, {
                         	          name: lineName, 
                                      weight: 10,
                                      color: 'pink',
                                      opacity: 0.8
                         	     }).addTo(OWN.layers[lineName]);  //添加到分组层上
           	    }else{
           	   
                         	//绘制背景线下
                         	    
                         	    L.polyline(points, {
                       	          name: lineName, 
                                    weight: 10,
                                    color: 'pink',
                                    opacity: 0.8
                       	     }).addTo(OWN.layers[lineName]);  //添加到分组层上
                         	//绘制背景线上
                         	    
                         	    L.polyline(points, {
                       	          name: lineName, 
                                    weight: 10,
                                    color: 'yellow',
                                    opacity: 0.8
                       	     }).addTo(OWN.layers[lineName]);  //添加到分组层上
           	    }
           	    
                //绘制线
                L.polyline(points, {
                	    name: lineName, 
                        weight: 4,
                        //color: '#76EE00',
                        color: 'green',
                        opacity: 0.9
                	}).addTo(OWN.layers[lineName]);  //添加到分组层上
                
                
                
                
                //绑定 popup 弹框
                var popup =  L.popup({
                        maxWidth: 1000,
                        maxHeight: 800,
                        closeOnClick: false
                     }).setContent('<p>您好,欢迎点击!<br />这里是:'+lineName+'.</p>');
                OWN.layers[lineName].bindPopup(popup);   //把popup绑定到线路上(分组层上)
                //绘制mark
                var myIcon = L.icon({
                    iconRetinaUrl: '../static/images/railway.png',
				    iconSize: [27,27],            //图片宽  高
				    iconAnchor: [14,16],          //图片  -左外补丁   -上外补丁
                }); 
               L.marker(points[0],{
                       icon : myIcon
               }).addTo(OWN.layers[lineName]);           //把标志添加到分组层上    

                //DivIcon  
                var divIcon = L.divIcon({
                	iconSize : L.point(80,30),
                	iconAnchor : L.point(-17, 19),
                	className: 'my-div-DivIcon',
                	html : '<big>'+lineName+'</big>'
                });

                L.marker(points[0], {
                	 icon: divIcon,
                }).addTo(OWN.layers[lineName]);


                
                OWN.map.addLayer(OWN.layers[lineName]); //把每一个线层添加到地图上

           };

};
//添加扇形小区
//function addSectorXQ(latlng,radius,start,stop,name,lacci,hotspot,hotId,type){
function addSectorXQ(){
	var sectorLayer = new L.featureGroup();//扇形小区图层
    
    //var color = getSectorColor(radius);
    var color = 'green';
   
    var circle = L.circle([32.78762,113.70604], 1000, {
            fill: true,
            weight:1,
            className:"黑河",
            fillColor: color,
            fillOpacity: 0.5,
            color: color,
            opacity: 0.9,
            startAngle: 0,
            stopAngle: 45
        });
    
    var circle2 = L.circle([32.78762,113.70604], 1500, {
        fill: true,
        weight:1,
        className:"黑河",
        fillColor: color,
        fillOpacity: 0.5,
        color: color,
        opacity: 0.9,
        startAngle: 90,
        stopAngle: 135
    });
    
    var circle3 = L.circle([32.78762,113.70604], 2000, {
        fill: true,
        weight:1,
        className:"黑河",
        fillColor: color,
        fillOpacity: 0.5,
        color: color,
        opacity: 0.9,
        startAngle: 180,
        stopAngle: 225
    });
   
    circle.addTo(sectorLayer)
    circle2.addTo(sectorLayer)
    circle3.addTo(sectorLayer)
    //sectorLayer.addLayer(circle);
    OWN.map.addLayer(sectorLayer);  
    //若添加至地图 ,默认洗一次加载
    OWN.switchControl.addOverlay(sectorLayer,"改改","扇形业务");
}

//添加一个测试点
function  addTestMark(){
	var temLayer = new L.featureGroup();
	//绘制mark---1
    var myIcon = L.icon({
        iconRetinaUrl: '../static/images/railway.png',
	    iconSize: [27,27],            //图片宽  高
	    iconAnchor: [14,16],          //图片  -左外补丁   -上外补丁
    }); 
    var marker = L.marker([32.73762,113.87604],{
           icon : myIcon
    });           //把标志添加到分组层上    
    
    temLayer.addLayer(marker);
    OWN.map.addLayer(temLayer);   //若添加至地图 ,默认洗一次加载
    OWN.switchControl.addOverlay(temLayer,"呵呵","业务");
    
    
    
  //绘制mark---2
    var temLayer2 = new L.featureGroup();
    var marker2 = L.marker([32.74762,113.82604],{
           icon : myIcon
    });           //把标志添加到分组层上    
    
    temLayer2.addLayer(marker2);
    OWN.map.addLayer(temLayer2);
    OWN.switchControl.addOverlay(temLayer2,"哈哈","业务");
    
  //绘制mark---3
    var temLayer3 = new L.featureGroup();
    var marker3 = L.marker([32.71762,113.80604],{
           icon : myIcon
    });           //把标志添加到分组层上    
    
    temLayer3.addLayer(marker3);
    OWN.map.addLayer(temLayer3);
    OWN.switchControl.addOverlay(temLayer3,"哈哈","非业务");  
    
    
};

//添加框选工具
function addRectangleTool(){
	//添加图形绘制控件，并注册鼠标绘制图形时的首次查询事件
    var drawnItems = new L.FeatureGroup().addTo(OWN.map);
    //OWN.map.addLayer(drawnItems);
    L.drawLocal.draw.toolbar.buttons.rectangle = '框选';
    L.drawLocal.draw.toolbar.actions.text = '取消';
    L.drawLocal.draw.handlers.rectangle.tooltip.start = '拖动鼠标开始绘制';
    L.drawLocal.draw.handlers.simpleshape.tooltip.end = '释放鼠标结束绘制';
    L.drawLocal.edit.toolbar.buttons.edit = '编辑';
    L.drawLocal.edit.toolbar.actions.save.text = '保存';
    L.drawLocal.edit.toolbar.actions.cancel.text = '取消';
    L.drawLocal.edit.handlers.edit.tooltip.text = '点击节点开始编辑';
    L.drawLocal.edit.handlers.edit.tooltip.subtext = '';
    var drawControl = new L.Control.Draw({
        draw: {
            position: 'topleft',
            rectangle:{
                title:'Query By Rectangle',
                shapeOptions:{
                    color: '#252c34',
                    fill: true
                }
            },
            polygon: {},
            polyline: false,
            circle: {},
            marker:{}
        },
        edit: {
            featureGroup: drawnItems,
            edit: {
                selectedPathOptions: {
                    maintainColor: true,
                    opacity: 0.9
                }
            },
            remove: {}
        }
    }).addTo(OWN.map);
    //OWN.map.addControl(drawControl);
    OWN.map.on('draw:created', function (e) {
    	drawnItems.addLayer(e.layer);      //是否显示所绘形状 
       

       
        
    });
    OWN.map.on('draw:edited', function (e) {
    	
        
    });
}


//根据指定字段获取分段名称或大段名称
OWN.common.getUniqueName = function(data, field) {
	var line_section_arr = data.map(function(obj) {
		return obj[field];
	});
	var uniqueArr = OWN.common.uniqueVal(line_section_arr);
	return uniqueArr;
};
OWN.common.uniqueVal = function(arr) {
	var n = {},
	r = []; //n为hash表，r为临时数组
	for (var i = 0; i < arr.length; i++) //遍历当前数组
	{
		if (!n[arr[i]]) //如果hash表中没有当前项
		{
			n[arr[i]] = true; //存入hash表
			r.push(arr[i]); //把当前数组的当前项push到临时数组里面
		}
	}
	return r;
};
//给定高铁段名称，获取该段高铁所有点坐标以及所属高铁线路
OWN.getLinePoints = function(lineName) {
	var points = [];
	var line = '';//京沪高铁或沪杭高铁
	var data = railway_bd;
	data.map(function(obj) {
		var line_section = obj.line_section;
		if(line_section == lineName) {
			var lat = parseFloat(obj.lat),
				lng = parseFloat(obj.lng);
			points.push([lat,lng]);
			line = obj.line;
		}
	});
	return {
		points: points,
		line: line
	};
};

//添加热力图
OWN.addHeatMap = function(){
	//制造假数据
	//var dataDemo = [{"lng":"121.123456","lat":"31.123456","value":12}];
	var data = [];
	for(var i=0;i<300;i++){
		var obj = {};
		obj.lat = parseFloat(33.00000) + parseFloat((Math.random() * 0.3).toFixed(5));
		obj.lng = parseFloat(113.00000) + parseFloat((Math.random() * 1).toFixed(5));
		obj.value = Math.floor((Math.random() * 100));
		data.push(obj);
	};
	/*data = [];
	data.push({"lat":33.4578,"lng":113.80875,"value":5});
	data.push({"lat":33.5578,"lng":113.90875,"value":7});*/
	//接口请求的数据放到缓存里面
	OWN.cacheHeatMapData = data;
	OWN.rerenderHeatMap();   //调用渲染热力图
};
OWN.rerenderHeatMap = function(){
	var radiusHeatMap;  
	var curZoom = OWN.map.getZoom();  // 获取当前级别
	if(curZoom === OWN.lastZoomLevel){
	    //console.log('相等');
	   // return;
	}else{
		switch (curZoom){
		    case 10:
		        radiusHeatMap = 0.032;
		        break;
		    case 11:
		        radiusHeatMap = 0.016;
		        break;
		    case 12:
		        radiusHeatMap = 0.008;
		        break;
		    case 13:
		        radiusHeatMap = 0.004;
		        break;
		    case 14:
		        radiusHeatMap = 0.003;
		        break;
		    case 15:
		        radiusHeatMap = 0.002;
		        break;
		    case 16:
		        radiusHeatMap = 0.0015;
		        break;
		    case 17:
		        radiusHeatMap = 0.001;
		        break;
		    default:
		        radiusHeatMap = 0.0008;
		        break;
		} 
	};
	OWN.lastZoomLevel = curZoom;
	if(curZoom >= 19) return;
	if(OWN.cacheHeatMapData.length <= 0) return;//无缓存数据不渲染
	
	OWN.heatMapRender(OWN.cacheHeatMapData,radiusHeatMap);
	
};
OWN.heatMapRender = function(temArr,radius){
	OWN.cacheHeatMapData = [];              //渲染之前把缓存清空
	//OWN.map.removeLayer(OWN.heatMapLayer);  //清除之前热力图层
	
	//清除数据中 value为 0 的数据
	var heatMap = [];
    for (var i = 0; i < temArr.length; i++) {
    	    var currObj = temArr[i];
    	    if(currObj.value != 0){
    	    	  heatMap.push(currObj);
    	    }
    };
    
    OWN.cacheHeatMapData = heatMap;  //把数据缓存起来
    
    var testData = {};
    var cfg = {
        // radius should be small ONLY if scaleRadius is true (or small radius is intended)
        "radius": radius,
        "maxOpacity": 1,
        // scales the radius based on map zoom
        "scaleRadius": true,
        // if set to false the heatmap uses the global maximum for colorization
        // if activated: uses the data maximum within the current map boundaries
        //   (there will always be a red spot with useLocalExtremas true)
        "useLocalExtrema": true,
        // which field name in your data represents the latitude - default "lat"
        "latField": 'lat',
        // which field name in your data represents the longitude - default "lng"
        "lngField": 'lng',
        // which field name in your data represents the data value - default "value"
        "valueField": 'value'
    };
    
    
    testData.data = heatMap;
    OWN.heatMapLayer = new HeatmapOverlay(cfg);
    OWN.map.addLayer(OWN.heatMapLayer);
    OWN.heatMapLayer.setData(testData);
    
    
};



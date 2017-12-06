var railway_bd = [
                  
                  {"lng":"114.01611","lat":"32.99945","line":"确新铁路","line_section":"驻马店段"},  //32.99945, 114.01611
                  {"lng":"114.04083","lat":"32.79766","line":"确新铁路","line_section":"驻马店段"},  //
                  {"lng":"114.04083","lat":"32.79766","line":"确新铁路","line_section":"确山段"},  //32.79766, 114.04083
                  {"lng":"114.18777","lat":"32.65325","line":"确新铁路","line_section":"确山段"},  ///32.65325, 114.18777
                  {"lng":"114.39789","lat":"32.58848","line":"确新铁路","line_section":"确山段"},  
				  {"lng":"114.39789","lat":"32.58848","line":"确新铁路","line_section":"正阳段"},   //32.58848, 114.39789
				  {"lng":"114.9884","lat":"32.73877","line":"确新铁路","line_section":"正阳段"},   
				  {"lng":"114.9884","lat":"32.73877","line":"确新铁路","line_section":"新蔡段"},    //32.73877, 114.9884
				  {"lng":"114.9784","lat":"32.72877","line":"确新铁路","line_section":"新蔡段"}    
				 ]
var OWN = {
	    map: null,
	    layers : {
	    	        "iconLabelLayer": L.featureGroup()
	    },
	    common: {},
	    datas: {
				allLineName: [],
				businessIndex: [],
				nowLineName: '',
				nowOverviewLine: '',
				index: '无线接通率',
				timeId: '201703230000',
				reference: {
					'无线接通率': 'WIRE_CONN_RATIO',
					'切换成功率': 'SW_SUCC_RATIO',
					'无线掉线率': 'WIRE_DROP_RATIO',
					'VOLTE无线接通率': 'VL_CONN_RATIO',
					'ERAB掉线率': 'VL_ERAB_DROP_RATIO',
					'ESRVCC切换成功率': 'VL_ESRVCC_SW_SUCC_RATIO',
					'VOLTE用户切换成功率': 'VL_SW_SUCC_RATIO',
					'LTE综合覆盖率': 'LTE_COVERAGE_RATIO',
					'连续弱覆盖里程占比': 'WEAK_COVERAGE_RATIO',
					'CQI连续质差里程占比': 'LOW_CQI_RATIO'
				},
				threshold: {
					'无线接通率': '<90',
					'切换成功率': '<90',
					'无线掉线率': '>10',
					'VOLTE无线接通率': '<90',
					'ERAB掉线率': '>10',
					'ESRVCC切换成功率': '<90',
					'VOLTE用户切换成功率': '<90',
					'LTE综合覆盖率': '<90',
					'连续弱覆盖里程占比': '>10',
					'CQI连续质差里程占比': '>10'
				}
	    },
	    init : function(id){
		       OWN.initMap(id);
		       OWN.getLatlngSelf();
		       OWN.addGaotie();
		}

	    
};
OWN.initMap = function(id){
        var southWest = L.latLng(32.18956, 113.03833),
		    northEast = L.latLng(33.54597, 115.35095),
		    bounds = L.latLngBounds(southWest, northEast);
	    //初始化地图
	    OWN.map = new L.map(id,{
		        minZoom: 4,
		        maxZoom: 18,
		        //crs: L.CRS.EPSG3857,
		        contextmenu: true,
		        maxBounds: bounds,
		        zoomControl: true,
		        attributionControl: false
	    }).setView([32.73762,113.87604], 7);
	    L.control.scale({
	    	       position : 'bottomright',
	    	       imperial : false
	    }).addTo(OWN.map);
	//初始化图层
	      //百度地图   需要引入leaflet-baidu.js ,添加默认坐标系
	      //OWN.layers.normalLayer = new L.tileLayer.baiduLayer('customLayerNormalSH.Map');
	      //OWN.layers.satelliteLayer = new L.tileLayer.baiduLayer('customLayerSatSH.Map');
	      //OWN.layers.roadLayer = new L.tileLayer.baiduLayer('customLayerSatSH.Road');
          //其他地图地图  
	      OWN.layers.normalLayer = L.tileLayer('http://localhost:8080/MapTile/googlemaps/roadmap/{z}/{x}/{y}.png').addTo(OWN.map);
	      OWN.layers.satelliteLayer = L.tileLayer('http://localhost:8080/MapTile/googlemaps/satellite/{z}/{x}/{y}.jpg');
	//初始化图层控制器
	     var baseLayers = {
		      "地图": OWN.layers.normalLayer,
		      "卫星": OWN.layers.satelliteLayer
		      //"路": OWN.layers.roadLayer,
	    };
	    var groupedOverlays = {
		     '京沪高铁': {},
		     '沪杭高铁': {}
	    };
	    ///OWN.switchControl = L.control.groupedLayers(baseLayers, groupedOverlays, {autoZIndex: false, exclusiveGroups: [], groupCheckboxes: true});
	    ///OWN.map.addControl(OWN.switchControl);

	//默认添加卫星图层
	    OWN.map.addLayer(OWN.layers.normalLayer);
	    //OWN.map.addLayer(OWN.layers.roadLayer);

	    

};
OWN.addGaotie = function(){
	 //var uniqueArr = ['驻马店段','确山段','正阳段','新蔡段'];
	 var uniqueArr = OWN.common.getUniqueName(railway_bd, 'line_section');
	 var points = [];
	 uniqueArr.map(function(lineName) {
	 	var obj = OWN.getLinePoints(lineName);
	 	points = obj.points;
	 	var line = obj.line;

	 	OWN.layers[lineName] = L.featureGroup();
	 	//绘制线
	 	var popup = OWN.common.createHtmlPopop({title: lineName});
	 	OWN.common.drawPolyline({
	 		points: points,
	 		popup: popup,
	 		options: {name: lineName},
	 		featureGroup: OWN.layers[lineName]
	 	});
	 	// OWN.switchControl.addOverlay(OWN.layers[lineName], lineName, line);
	 	OWN.map.addLayer(OWN.layers[lineName]);
	 	
	 	//设置iconLabel
	 	//OWN.layers.iconLabelLayer = L.featureGroup();
	 	OWN.common.setIconLable({
	 		point: points[0],
	 		popup: popup,
	 		label: lineName
	 		//layer :OWN.layers.iconLabelLayer
	 	});
	 });
	 // OWN.map.addLayer(OWN.layers.allLinePopup);
	 OWN.map.addLayer(OWN.layers.iconLabelLayer);
	 OWN.map.panTo(points[1]);
	 //为所有线路注册右键
	 uniqueArr.map(function(val) {
	 	   //OWN.setContextMenu(val);
	 });
};








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

OWN.common.drawPolyline = function(obj) {
	var points = obj.points;
	var opts = OWN.common.setOptions({weight: 4, color: 'red', opacity: 0.8}, obj.options);
	//var opts = OWN.common.setOptions({weight: 4, color: '#76EE00', opacity: 0.8}, obj.options);
	var popup = obj.popup;
	var featureGroup = obj.featureGroup;
	L.polyline(points, opts).addTo(featureGroup);
	OWN.common.setPopup({
		content: popup,
		layer: featureGroup
	});
};
OWN.common.setOptions = function(obj,opts){
	for(var name in opts){
		opts.hasOwnProperty(name) && (obj[name] = opts[name]);
	}
	return obj;
};
OWN.common.createHtmlPopop = function(obj) {
	var title = obj.title || '高铁详情';
	var data = obj.data || OWN.datas.businessIndex;
	var htmlStr = '';
	htmlStr += '<div class="popup-custom-wx"><div class="popup-head-wx">' + title + '</div>';
	htmlStr += '<div class="popup-content-wx">';
	htmlStr += OWN.common.createTableByData(data, title);
	htmlStr += '</div>';
	htmlStr += '</div>';
	return htmlStr;
};
OWN.common.createTableByData = function(data, lineName) {
	var htmlStr = '<table width="100%"><tr>';
	htmlStr += '<th style="width: 60%;">' + '指标名称' + '</th>';
	htmlStr += '<th >' + '指标值（%）' + '</th>';
	htmlStr += '</tr>';
	data.map(function(obj, index){
		var name = obj.name,
			field = obj.field,
			type = obj.type,
			// color = obj.color,
			value = obj.value;
		var color = OWN.common.getColorByDataIndex(value, name);
		var tepName = name;
		htmlStr += '<tr>';
		htmlStr += '<td align="left" title="' + name + '">' + tepName + '</td>';
		//htmlStr += '<td align="left" style="padding-left: 20px;">' + '<a href="#" style="color:' + color + '" onclick="OWN.common.callTrendPlot(\''+lineName+'\',\''+type+'\',\''+field+'\',\''+name+'\')">' + value + '</a>' + '</td>';
		htmlStr += '</tr>';
	});
	htmlStr += '</table>';
	return htmlStr;
};
OWN.common.setIconLable = function(obj) {
	var point = obj.point;
	var label = obj.label || '高铁段';
	var popup = obj.popup;
	var layer = obj.layer || OWN.layers.iconLabelLayer;
	var SweetIcon = L.Icon.Label.extend({
		options: {
			//iconUrl: eastcom.baseURL + '/map/static/images/railway.png',
			iconUrl: 'http://localhost:8080/MyTest/mapDemo/static/images/railway.png',
			shadowUrl: null,
			iconSize: new L.Point(24, 24),
			iconAnchor: new L.Point(0, 1),
			labelAnchor: new L.Point(26, 0),
			wrapperAnchor: new L.Point(12, 13),
			labelClassName: 'sweet-deal-label'
		}
	});
	var labelMarker = new L.Marker(point, {
		title: label,
		name: label,
		icon: new SweetIcon({
			labelText: label
		})
	});
	OWN.common.setPopup({
		layer: labelMarker,
		content: popup
	});
	labelMarker.addTo(layer);
};
OWN.common.setPopup = function(obj) {
	var opts = obj.options || {maxWidth: 1000, maxHeight: 800, closeOnClick: false};
	var layer = obj.layer;
	var content = obj.content;
	var popup = new L.popup(opts)
		.setContent(content);
	layer.bindPopup(popup);
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












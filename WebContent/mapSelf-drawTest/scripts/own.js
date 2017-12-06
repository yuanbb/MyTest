
var OWN = {
           map : null,
           common : {},
           layers : {},
           init : function(id){
           	     OWN.initMap(id);
           	     OWN.getLatlngSelf();
           	     OWN.initDomEvent();   
           }

};
OWN.getCurrZoom = function(){
       var zoom = OWN.map.getZoom();
       console.log(zoom);
};
OWN.initDomEvent = function(){
	
};
//单击获取当前点的 经纬度
OWN.getLatlngSelf = function(){
                   var popup2 = L.popup();
                   function onMapClick(e) {
                	   console.log(e.latlng.toString());
                       //popup2
                      //     .setLatLng(e.latlng)
                      //     .setContent("你点击地图经纬度:" + e.latlng.toString())
                       //    .openOn(OWN.map);
                   	
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

  		 addRectangleTool();  //demo
  		 //addRectangleTool_mark();  //demo
  		 //addRectangleTool_polyline();  //demo
  		//添加搜索工具栏
  		 addSearchTool();
};


//添加框选工具   Demo
function addRectangleTool(){
	var featureGroup = L.featureGroup().addTo(OWN.map);
	
	var myIcon = L.icon({
        iconRetinaUrl: '../static/images/railway.png',
	    iconSize: [27,27],            //图片宽  高
	    iconAnchor: [14,16],          //图片  -左外补丁   -上外补丁
    }); 
    var marker = L.marker([32.73762,113.87604],{
           icon : myIcon,
           lacci:"123-34"
    });           //把标志添加到分组层上    
    marker.addTo(featureGroup);
    var marker2 = L.marker([32.74762,113.88604],{
           icon : myIcon
    });           //把标志添加到分组层上    
    marker2.addTo(featureGroup);
    var marker3 = L.marker([32.75762,113.89604],{
           icon : myIcon
    });           //把标志添加到分组层上    
    marker3.addTo(featureGroup);
   
	
	//增加一条线
    
	var line_points = [
	                   [32.77544, 113.78609],
	                   [32.76505, 113.7981],
	                   [32.75061, 113.83484],
	                   [32.7483, 113.86024],
	                   [32.75061, 113.8884],
	                   [32.76967, 113.93784],
	                   [32.78699, 113.94505]
	               ];

	               
	var polyline_options = {color: '#000' };
	var polyline = L.polyline(line_points, polyline_options).addTo(featureGroup);
	
	
	
	//添加图形绘制控件，并注册鼠标绘制图形时的首次查询事件
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
           edit: {
                  featureGroup: featureGroup,
                }
    }).addTo(OWN.map);
    //OWN.map.addControl(drawControl);
    OWN.map.on('draw:created', function (e) {
   	   featureGroup.addLayer(e.layer);    //是否显示所绘形状
   	   console.log("创建了....");
   });
   OWN.map.on('draw:edited', function (e) {
     	console.log("编辑了....");
     	var layers = e.layers;
        var layersArr = layers.getLayers();    //获取到所有变动的mark  数组
        for(var i =0;i<layersArr.length;i++){
    	      var currObj = layersArr[i];
    	      var latlng = currObj._latlng;   //得到 新拖拽点的 经纬度
    	      var lacci = currObj.options.lacci   //得到自己附带的参数(自己用)
    	      
    	      console.log("lat="+latlng.lat+",lng="+latlng.lng+",lacci="+lacci);
    	     
        }
    
   }); 
  
    
}


//添加框选工具 mark
function addRectangleTool_mark(){
	var featureGroup = L.featureGroup().addTo(OWN.map);
	var myIcon = L.icon({
        iconRetinaUrl: '../static/images/railway.png',
	    iconSize: [27,27],            //图片宽  高
	    iconAnchor: [14,16],          //图片  -左外补丁   -上外补丁
    }); 
    var marker = L.marker([32.73762,113.87604],{
           icon : myIcon
    });           //把标志添加到分组层上    
    
    marker.addTo(featureGroup);
   
	
	//添加图形绘制控件，并注册鼠标绘制图形时的首次查询事件
    L.drawLocal.draw.toolbar.buttons.rectangle = '框选';
    L.drawLocal.draw.toolbar.actions.text = '取消';
    L.drawLocal.draw.handlers.rectangle.tooltip.start = '拖动鼠标开始绘制';
    L.drawLocal.draw.handlers.simpleshape.tooltip.end = '释放鼠标结束绘制';
    L.drawLocal.edit.toolbar.buttons.edit = '编辑图标';
    L.drawLocal.edit.toolbar.actions.save.text = '保存';
    L.drawLocal.edit.toolbar.actions.cancel.text = '取消';
    L.drawLocal.edit.handlers.edit.tooltip.text = '点击节点开始编辑';
    L.drawLocal.edit.handlers.edit.tooltip.subtext = '';
    var drawControl = new L.Control.Draw({
           edit: {
                  featureGroup: featureGroup,
                }
    }).addTo(OWN.map);
    //OWN.map.addControl(drawControl);
    OWN.map.on('draw:created', function (e) {
    	 //featureGroup.addLayer(e.layer);
    });
   OWN.map.on('draw:edited', function (e) {
	   
   }) 
    
}


//添加框选工具polyline
function addRectangleTool_polyline(){
	var featureGroup = L.featureGroup().addTo(OWN.map);
	//增加一条线
	var line_points = [
	                   [32.77544, 113.78609],
	                   [32.76505, 113.7981],
	                   [32.75061, 113.83484],
	                   [32.7483, 113.86024],
	                   [32.75061, 113.8884],
	                   [32.76967, 113.93784],
	                   [32.78699, 113.94505]
	               ];

	               
	var polyline_options = {color: '#000' };
	var polyline = L.polyline(line_points, polyline_options).addTo(featureGroup);
	
	
	//添加图形绘制控件，并注册鼠标绘制图形时的首次查询事件
    L.drawLocal.draw.toolbar.buttons.rectangle = '框选';
    L.drawLocal.draw.toolbar.actions.text = '取消';
    L.drawLocal.draw.handlers.rectangle.tooltip.start = '拖动鼠标开始绘制';
    L.drawLocal.draw.handlers.simpleshape.tooltip.end = '释放鼠标结束绘制';
    L.drawLocal.edit.toolbar.buttons.edit = '编辑线路';
    L.drawLocal.edit.toolbar.actions.save.text = '保存';
    L.drawLocal.edit.toolbar.actions.cancel.text = '取消';
    L.drawLocal.edit.handlers.edit.tooltip.text = '点击节点开始编辑';
    L.drawLocal.edit.handlers.edit.tooltip.subtext = '';
    var drawControl = new L.Control.Draw({
           edit: {
                  featureGroup: featureGroup,
                }
    }).addTo(OWN.map);
    //OWN.map.addControl(drawControl);
    OWN.map.on('draw:created', function (e) {
    	 featureGroup.addLayer(e.layer);    //是否显示所绘形状
    	 console.log("创建了....");
    });
    OWN.map.on('draw:edited', function (e) {
    	console.log("编辑了....");
    }); 
    
}



//添加搜索工具栏
function addSearchTool(){
    var myIcon = new L.icon({
        iconUrl: '../static/images/marker-icon.png',
        //iconRetinaUrl: '../static/images/marker-icon@2x.png',
        iconSize: [25, 41],
        //iconAnchor: [22, 94],
        popupAnchor: [-3, -6],
        shadowUrl: '../static/images/marker-shadow.png',
        //shadowRetinaUrl: '../static/images/marker-shadow@2x.png',
        shadowSize: [68, 95],
        shadowAnchor: [22, 94]
    });
    OWN.map.addControl( new L.Control.Search({callData: searchByAjax, text:"请输入搜索内容....", textCancel: '取消', textErr: '未查询到', markerIcon: myIcon}) );
}

OWN.districtsLayer = new L.featureGroup();//框选查询及搜索查询到的小区
function searchByAjax(text,callResponse){
	OWN.districtsLayer && (OWN.map.removeLayer(OWN.districtsLayer),OWN.districtsLayer.clearLayers());
	console.log(text);
	//obj.lat = parseFloat(33.00000) + parseFloat((Math.random() * 0.3).toFixed(5));
	var lat = parseFloat(32.6) + parseFloat((Math.random() * 0.1).toFixed(5));
	var lng = parseFloat(113.7) + parseFloat((Math.random() * 0.1).toFixed(5));
	var marker = L.marker([lat,lng],{
        icon : new L.Icon.Default(),
        lacci:"123-34"
    });   
	marker.addTo(OWN.districtsLayer);
	OWN.districtsLayer.addTo(OWN.map);
	OWN.map.panTo([lat,lng])
	
	//查询成功回调
	callResponse();
	
}



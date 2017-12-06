
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
           }).setView([32.9983, 114.02573], 12);
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
  		   
  		   
  		   addMarkercluster();

};
function addMarkercluster(){
    	var points = [
                      [33.04781, 113.88977],
                      [33.04781, 113.88977],
    	                [33.04781, 113.88977],
                      [33.03169, 113.89801],
                      [33.03169, 113.89801],
                      [33.03169, 113.89801],
                      [33.03169, 113.89801],
                      [33.03169, 113.89801],
                      [33.03169, 113.89801],
                      [33.03169, 113.89801],
                      [33.03169, 113.89801],
                      [33.03169, 113.89801],
                      [33.03169, 113.89801],
                      [33.03169, 113.89801],
                      [33.03169, 113.89801],
                      [33.03169, 113.89801],
                      [33.03169, 113.89801],
                      [33.03169, 113.89801],
                      [33.03169, 113.89801],
                      [33.03169, 113.89801],
                      [33.03169, 113.89801],
                      [33.03169, 113.89801],
                      [33.03169, 113.89801],
    	              [33.03169, 113.89801],
                      [33.0386, 113.94196],
                      [33.0386, 113.94196],
    	              [33.0386, 113.94196],
                      [32.96604, 113.84033],
                      [32.96604, 113.84033],
    	              [32.96604, 113.84033]
    	            ];
        var markers = new L.MarkerClusterGroup({
                            showCoverageOnHover : false,
                            iconCreateFunction: function(cluster) {
                                //cluster.getAllChildMarkers();
                                //cluster.getChildCount();   
                                var imgUrl = '../static/images/jhGray.png';
                                var clusterArr = cluster.getAllChildMarkers();
                                for (var i = 0; i < clusterArr.length; i++) {
                                    var currObj = clusterArr[i];
                                    var currImg = currObj.options.icon.options.iconUrl;
                                    if (currImg.indexOf("Green.png") > -1) {
                                        imgUrl = '../static/images/jhGreen.png';
                                    }
                                }
                                for (var i = 0; i < clusterArr.length; i++) {
                                    var currObj = clusterArr[i];
                                    var currImg = currObj.options.icon.options.iconUrl;
                                    if (currImg.indexOf("Red.png") > -1) {
                                        imgUrl = '../static/images/jhRed.png';
                                    } 
                                }
                                for (var i = 0; i < clusterArr.length; i++) {
                                    var currObj = clusterArr[i];
                                    var currImg = currObj.options.icon.options.iconUrl;
                                    if (currImg.indexOf("RedL.gif") > -1) {
                                        imgUrl = '../static/images/jhRedL.gif';
                                    }
                                }
                                
                                var htmlStr = '';
                                    htmlStr += '<div style="margin: -7px;position:absolute">'
                                            +     '<img style="width:30px;height:30px" src="'+imgUrl+'" />'       
                                            +     '<span style="display:block;position:relative;top: -24px;width:30px; height:20px;text-align:center;color:#fff;font-size: 13px;font-weight: bold;">' + cluster.getChildCount() + '</span>'       
                                            +  '</div>'       
                                return L.divIcon({ html: htmlStr});
                            }
                        });  
        for (var i = 0; i < points.length; i++) {
              var imgName = 'cellGray.png';
              var num = Math.random();
              if (num<0.4) {imgName = 'cellGreen.png'}else if (0.4<num<0.6) {imgName = 'cellRed.png'}else if (0.6<num<0.8) {imgName = 'cellRedL.gif'}; 
            	//绘制mark
                var myIcon = L.icon({
                  iconUrl: '../static/images/'+imgName,
            	    iconSize: [27,27],            //图片宽  高
            	    iconAnchor: [14,16],          //图片  -左外补丁   -上外补丁
                }); 
                var marker = L.marker(points[i],{
                       icon : myIcon
                });   
                marker.bindPopup("123__" + i);
                markers.on('clustermouseover', function (a) {
                                    var zoom = OWN.map.getZoom();
                                    if (zoom > 10) {
                                        a.layer.spiderfy();
                                    }
                            });
                markers.addLayer(marker);
        } 
        OWN.map.addLayer(markers);
};
















var TEST = {
          map:null,
          layers : {},
          common : {},
          wholeParam : {},
          init : function(id){
                 TEST.initMap(id);
                 //TEST.getLatlngSelf();    //获取当前点的 经纬度
                 TEST.initEvent();
          }
};
//单击获取当前点的 经纬度
TEST.getLatlngSelf = function(){
                   var popup2 = L.popup();
                   function onMapClick(e) {
                       popup2
                           .setLatLng(e.latlng)
                           .setContent("你点击地图经纬度:" + e.latlng.toString())
                           .openOn(TEST.map);
                   }
                   TEST.map.on('click', onMapClick);
};


TEST.initMap = function(id){
          TEST.map = L.map(id,{
                  minZoom : 4,
                  maxZoom : 18,
                  doubleClickZoom :false           //不可以通过双击放大，因为双击的作用是添加矩形
          }).setView([32.60063, 114.3924], 10);

          //初始化图层
          TEST.layers.normalLayer = L.tileLayer('http://localhost:8080/MapTile/googlemaps/roadmap/{z}/{x}/{y}.png').addTo(TEST.map);


          //添加一个控制器
          /*L.control({
          	   position : "topright"
          }).addTo(TEST.map);*/

          var MyControl = L.Control.extend({
              options: {
                  position: 'topright'
              },
              onAdd: function (map) {
                  //创建一个class为leaflet-control-clegend的div
                          this._container = L.DomUtil.create('div', 'leaflet-control-clegend');
                         //创建一个图片要素
                          var legendimg = document.createElement('img');
                          legendimg.id = 'leaflet-control-clegend';
                          legendimg.type = 'img';
                          legendimg.src = "../static/images/caidantest.png";
                          legendimg.style.width = "133px";
                          legendimg.style.display = "block";
                          this._legendimg = legendimg;
                          //创建一个关闭控件的按钮
                          var closebutton = document.createElement('a');
                          closebutton.id = 'leaflet-control-geosearch-close';
                          closebutton.className = 'glyphicon glyphicon-remove';
                          this._closebutton = closebutton;
                          
                          this._container.appendChild(this._closebutton);
                          this._container.appendChild(this._legendimg);
                          //注册关闭事件
                          L.DomEvent.addListener(this._closebutton, 'click', this._onCloseControl, this);
                          
                          return this._container;
                      },
                      _onCloseControl: function () {
                          this._map.options.Legend = false;
                          this.removeFrom(this._map);

                      },
          });

          TEST.map.addControl(new MyControl());





};

TEST.initEvent = function(){
          TEST.map.on('click', TEST.addClickLatlng);    //单击，添加点
          //TEST.map.on('dblclick', TEST.showPoly);       //双击，显示面 
          //TEST.map.on('dblclick', TEST.showPoly);       //双击，显示面 
};



var poly_points = [];//区域
var poly_line = new L.Polyline([],{color:"red"});//折线
var markerLayer = L.featureGroup();  //存放点击图标的层
TEST.addClickLatlng = function(e){
		//当前点
			var clickLocation=[e.latlng.lat,e.latlng.lng];
			poly_points.push(clickLocation);
			//添加个图标
			var myIcon = L.icon({
				    iconUrl: '../static/images/marker-icon-red.png',
				    iconRetinaUrl: '../static/images/marker-icon-red.png',
				    iconSize: [24,41],            //图片宽  高
				    iconAnchor: [14,40],          //图片  -左外补丁   -上外补丁
				    popupAnchor: [-3, -76],
				    //shadowUrl: 'my-icon-shadow.png',
				    //shadowRetinaUrl: 'my-icon-shadow@2x.png',
				    shadowSize: [68, 95],
				    shadowAnchor: [22, 94]
			});
			markerLayer.clearLayers();  //清除
			var mark = L.marker(clickLocation,{
				  icon : myIcon,
				  clickable : true
			}).addTo(markerLayer); 
			TEST.map.addLayer(markerLayer);

			mark.on('click', TEST.showPoly); //给mark 注册单击事件

		//显示折线
			poly_line.addLatLng(e.latlng);
			TEST.map.addLayer(poly_line);
			//var point=new L.Point(e.layerPoint.x,e.layerPoint.y);
};
TEST.showPoly = function(){
	         var latlngs = [], 
	         len = poly_points.length;
	         for (var i = 0; i < len; i++) {
	         	     var currObj = poly_points[i];
	                 latlngs.push(new L.LatLng(currObj[0], currObj[1]));
	         };
	         var poly = new L.Polygon(latlngs);
	         TEST.map.addLayer(poly);
	         //清空
	         poly_points=[];
	         poly_line=new L.Polyline([]);
};










  
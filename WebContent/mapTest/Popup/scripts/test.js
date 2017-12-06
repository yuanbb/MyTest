var TEST = {
          map:null,
          layers : {},
          common : {},
          wholeParam : {},
          init : function(id){
                 TEST.initMap(id);
                 //TEST.getLatlngSelf();    //获取当前点的 经纬度
                 //TEST.addPopup();
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
                   };
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
          
          //添加几个图标
          var markerLayer = L.featureGroup();  //存放点击图标的层
          var markLocationArr = [[32.79766, 114.03397],[32.60352, 114.39377],[32.95337, 114.63684],[32.74108, 114.98016]];
          for (var i = 0; i < markLocationArr.length; i++) {
                      var markLocation=markLocationArr[i];
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
                      var marker = L.marker(markLocation,{
                          icon : myIcon,
                          clickable : true
                      }).addTo(markerLayer); 
                      
                      //在标记上添加弹框
                      var popup = new L.popup({
                                           maxWidth: 1000,
                                           maxHeight: 800,
                                           offset : L.point(-100, -300),
                                           autoPanPadding : L.point(100, 300),
                                           closeOnClick: true,
                                           className : 'my-popup-style'
                                    })
                                     .setContent("<b>Hello world!</b>I am a popup.");
                      marker.bindPopup(popup);

                      //marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
                      TEST.map.addLayer(markerLayer);
          };
};


TEST.addPopup = function(){

                 var latlng = L.latLng(32.79766, 114.03397);
                 var popup = L.popup()
                     .setLatLng(latlng)
                     .setContent('<p>Hello world! This is a nice popup.</p>')
                     .openOn(TEST.map);
};












  












  
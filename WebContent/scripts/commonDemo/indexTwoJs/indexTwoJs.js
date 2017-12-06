var indexParam = "subway_userPathAnalysis";
var indexTwoJs = {
	      init:function(){
	      	    //实战
	      	    /*getMenuData(indexParam,"","",false,function(data){
                         indexTwoJs.getAllIndex(data);
                });*/
                getMenuData_Test(indexParam,"","",false,function(data){
                         indexTwoJs.getAllIndex(data);
                });
                indexTwoJs.initAllIndex();
	      },
	      getAllIndex : function(data){
	                  if (data.length > 0) {
	                    _CacheFun._bindCache(indexParam,data);    //将查询触来的tabList存到缓存对象去
	                   //data = _CacheFun._getCache(indexParam); 
	                   indexTwoJs.recursionFunction(data,0);
	                  }else{
	                    alert("类别加载失败!"); 
	                  };
	      },
	      initAllIndex : function(){
	            var dataSource = {
	                              "lte_synthesize_cover_rate":(Math.random()*100).toFixed(2),
	                              "lte_mileage_cover_rare":(Math.random()*100).toFixed(2),
	                              "lte_caiyang_cover_rete":(Math.random()*100).toFixed(2),
	                              "average_cqi":(Math.random()*10000).toFixed(2),
	                              "average_rsrq":(Math.random()*10000).toFixed(2),

	                              "cqi_contin_bad_ mileage_percent":(Math.random()*100).toFixed(2),
	                              "rsrq_contin_bad_ mileage_percent":(Math.random()*100).toFixed(2),
	                              "continue_bad_cover_mileage_percent":(Math.random()*100).toFixed(2),

	                              "average_up_sinr":(Math.random()*10000).toFixed(2),
	                              "public_net_user_percent":(Math.random()*100).toFixed(2)
	            }; 
	            if(_CacheFun._getCache(indexParam) && _CacheFun._getCache(indexParam)!=null ){
	                   var indexClass = _CacheFun._getCache(indexParam);
	                   for (var i = 0; i < indexClass.length; i++) {
	                          var item = indexClass[i];
	                          if (item.name == "indexClass1") {
	                               if (_CacheFun._getCache(item.id) && _CacheFun._getCache(item.id)!=null) {
	                                    var indexFile = _CacheFun._getCache(item.id);
	                                    var htmlStr=""; 
	                                    for (var j = 0; j < indexFile.length; j++) {
	                                              var currObj = indexFile[j];
	                                              var currValue = 0;
	                                              if (dataSource[currObj.name]) {
	                                                    currValue = dataSource[currObj.name];
	                                              };
	                                              var thresholdArr = currObj.value.split(",");
	                                              var threshold = false;
	                                              if(thresholdArr.length =2){
	                                                    threshold = ThresholdCommon(currValue,thresholdArr[0],thresholdArr[1]);
	                                              };
	                                              htmlStr += '<tr class="cursor" onclick="indexTwoJs.indexToEcharts(\'一类指标\',\''+currObj.label+'\',\''+currObj.name+'\',\''+currObj.attribute+'\')">'
	                                                          +        '<td class="text-f-left text-f-n1">'+currObj.label+'</td>'
	                                                          +        '<td class="text-f-right">'
	                                                          +              '<span '+(threshold?'style="color:red"':'')+'>'+currValue+'</span>'
	                                                          +        '</td>'
	                                                          +        '<td class="text-f-left">'+currObj.attribute+'</td>'
	                                                          +  '</tr>'
	                                    };
	                                    $("#indexClass_1_Content").html(htmlStr);
	                               };
	                          };
	                          /*if (item.name == "indexClass2") {
	                               if (_CacheFun._getCache(item.id) && _CacheFun._getCache(item.id)!=null) {
	                                    var indexFile = _CacheFun._getCache(item.id);
	                                    var htmlStr=""; 
	                                    for (var j = 0; j < indexFile.length; j++) {
	                                              var currObj = indexFile[j];
	                                              var currValue = (Math.random()*100).toFixed(2);
	                                              var thresholdArr = currObj.value.split(",");
	                                              var threshold = false;
	                                              if(thresholdArr.length =2){
	                                                    threshold = ThresholdCommon(currValue,thresholdArr[0],thresholdArr[1]);
	                                              };
	                                              htmlStr += '<tr class="cursor" onclick="indexTwoJs.indexToEcharts(\''+currObj.label+'\',\''+currObj.name+'\')">'
	                                                          +        '<td class="text-f-left text-f-n1">'+currObj.label+'</td>'
	                                                          +        '<td class="text-f-right">'
	                                                          +              '<span '+(threshold?'style="color:red"':'')+'>'+currValue+'</span>'
	                                                          +              '<span style="display:none">'+currObj.label+'</span>'  
	                                                          +              '<span style="display:none">'+currObj.name+'</span>'   
	                                                          +        '</td>'
	                                                          +        '<td class="text-f-left">'+currObj.attribute+'</td>'
	                                                          +  '</tr>'
	                                    };
	                                    $("#indexClass_2_Content").html(htmlStr);
	                               };
	                          };*/
	                          if (item.name == "indexClass3") {
	                               if (_CacheFun._getCache(item.id) && _CacheFun._getCache(item.id)!=null) {
	                                    var indexFile = _CacheFun._getCache(item.id);
	                                    var htmlStr=""; 
	                                    for (var j = 0; j < indexFile.length; j++) {
	                                              var currObj = indexFile[j];
	                                              var currValue = 0;
	                                              if (dataSource[currObj.name]) {
	                                                    currValue = dataSource[currObj.name];
	                                              };
	                                              var thresholdArr = currObj.value.split(",");
	                                              var threshold = false;
	                                              if(thresholdArr.length =2){
	                                                    threshold = ThresholdCommon(currValue,thresholdArr[0],thresholdArr[1]);
	                                              };
	                                              htmlStr += '<tr class="cursor" onclick="indexTwoJs.indexToEcharts(\'二类指标\',\''+currObj.label+'\',\''+currObj.name+'\',\''+currObj.attribute+'\')">'
	                                                          +        '<td class="text-f-left text-f-n1">'+currObj.label+'</td>'
	                                                          +        '<td class="text-f-right">'
	                                                          +              '<span '+(threshold?'style="color:red"':'')+'>'+currValue+'</span>'
	                                                          +        '</td>'
	                                                          +        '<td class="text-f-left">'+currObj.attribute+'</td>'
	                                                          +  '</tr>'
	                                    };
	                                    $("#indexClass_3_Content").html(htmlStr);
	                               };
	                          };
	                          if (item.name == "indexClass4") {
	                               if (_CacheFun._getCache(item.id) && _CacheFun._getCache(item.id)!=null) {
	                                    var indexFile = _CacheFun._getCache(item.id);
	                                    var htmlStr=""; 
	                                    for (var j = 0; j < indexFile.length; j++) {
	                                              var currObj = indexFile[j];
	                                              var currValue = 0;
	                                              if (dataSource[currObj.name]) {
	                                                    currValue = dataSource[currObj.name];
	                                              };
	                                              var thresholdArr = currObj.value.split(",");
	                                              var threshold = false;
	                                              if(thresholdArr.length =2){
	                                                    threshold = ThresholdCommon(currValue,thresholdArr[0],thresholdArr[1]);
	                                              };
	                                              htmlStr += '<tr class="cursor" onclick="indexTwoJs.indexToEcharts(\'三类指标\',\''+currObj.label+'\',\''+currObj.name+'\',\''+currObj.attribute+'\')">'
	                                                          +        '<td class="text-f-left text-f-n1">'+currObj.label+'</td>'
	                                                          +        '<td class="text-f-right">'
	                                                          +              '<span '+(threshold?'style="color:red"':'')+'>'+currValue+'</span>'
	                                                          +        '</td>'
	                                                          +        '<td class="text-f-left">'+currObj.attribute+'</td>'
	                                                          +  '</tr>'
	                                    };
	                                    $("#indexClass_4_Content").html(htmlStr);
	                               };
	                          };
	                          

	                   };
	            };
	      },
	      /*
              这里使用递归可以解决  在for循环里面发送多个ajax的请求方式，但这种方式有很多缺点，首先因为是异步，
              可能造成请求结果丢失，其次如果将请求方式改为同步，则会造成浏览器假死现象
             */
	      recursionFunction : function(datas,i){    
                     var item = datas[i];
                     //实战
                     /*getMenuData(item.name,"","",false,function(data){
                                           if (data == undefined || data == "undefined"){
                                                _CacheFun._bindCache(item.id,[]);
                                           }else{
                                                _CacheFun._bindCache(item.id,data);  //存到缓存对象用id
                                           };
                                           i++;
                                           if (i<datas.length) {
                                                 indexTwoJs.recursionFunction(datas,i);
                                           };

                    });*/    //获取数据用name 

                    getMenuData_Test(item.name,"","",false,function(data){
                                           if (data == undefined || data == "undefined"){
                                                _CacheFun._bindCache(item.id,[]);
                                           }else{
                                                _CacheFun._bindCache(item.id,data);  //存到缓存对象用id
                                           };
                                           i++;
                                           if (i<datas.length) {
                                                 indexTwoJs.recursionFunction(datas,i);
                                           };

                    });  
          },
          indexToEcharts : function(classN,name,id,unit){
                   $("#mymodal").modal("toggle");
                   $("#_modal_title").html(classN +"-"+ name + "趋势图");
                   var x = ['1','2','3','4','5','6','7','8','9','10'];
                   var y = [11,22,33,44,55,66,77,88,99,100];
                   $("#echartsContent").empty();
                   single_bar_echarts.loadDataToChart('echartsContent',x,y);
          }
};
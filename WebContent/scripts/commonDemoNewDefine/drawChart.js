define(['echarts/euiEcharts'], 
function(euiEcharts) {
	function drawBar(chartId,xName,yValue){
	  var option = initOption_bar(chartId,xName,yValue);
	  euiEcharts.delCache(chartId);
	  euiEcharts.create(chartId,option,"line");
	}
	function initOption_bar(chartId,xName,yValue){
		/*if(!list || list.length == 0){
			return null;
		}else {
			var xName=[],yValue1=[],yValue2=[];
	         for(var i=0;i<list.length;i++){
	        	 xName.push(list[i].timeId);
	        	 yValue1.push(list[i].prov_rate);
	        	 yValue2.push(list[i].net_rate);
	          }*/
			
			var option = {
				    tooltip : {
				        trigger: 'axis'
				    },
				    legend: {
				    	show:true, 
				        data:['温度(°C)','湿度']
				    },
				    toolbox: {
				        show : false,
				        feature : {
				           restore : {show: true},
				            saveAsImage : {show: true}
				        }
				    },
				    calculable :false,
				    xAxis : [
				        {
				            type : 'category',
				            boundaryGap : true,
				            data : xName
				        }
				    ],
				    yAxis : [
				        {  
				        	name : '温度(°C)',
				            type : 'value',
				            axisLabel : {
				                formatter: '{value}'
				            }
				        },{
				        	name : '湿度', 
				            type : 'value',
				            axisLabel : {
				                formatter: '{value}'
				            }
				        }
				    ],
				    series : [
				        {
				            name:'温度(°C)',
				            type:'bar',
				            data:yValue[0],
				            yAxisIndex: 0   
				        },
				        {
				            name:'湿度',
				            type:'line',
				            data:yValue[1],
				            itemStyle: {normal: {areaStyle: {type: 'default'}}},
				            yAxisIndex: 1   
				        }
				    ]
				};
		    return  option;
		/*}*/
	}
	
	return {
	  drawBar:drawBar,
	 }
});

define(['./drawChart'],function(drawChart){
          function loadEchartsBar (){

          	    var xName = ['周一','周二','周三','周四','周五','周六','周日'];
          	    var yValue = [];
          	    var yValue1 = [];
          	    var yValue2 = [];
                for (var i = 0; i <7; i++) {
                	    yValue1.push((Math.random()*100).toFixed(2));
                };
                for (var i = 0; i <7; i++) {
            	         yValue2.push((Math.random()*10).toFixed(2));
                };
                yValue.push(yValue1);
                yValue.push(yValue2);
          	    drawChart.drawBar('index_chart_bar',xName,yValue);
          };
	      return {
	      	   loadEchartsBar : loadEchartsBar 
	      }    
});
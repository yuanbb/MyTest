var index = {
		currTimeShow : function(){
			 var currTime = new Date();
			 $("#currTimeShow").html(currTime.format("yyyy-MM-dd hh:mm:ss"));
		},
		init : function(){
			index.initTime(); 
			index.initClass();
			index.doQuery();
			index.initPopover();
		},
		initTime : function(){
			var startSecond = new Date();
	        var endSecond = new Date();
	        startSecond.setDate(startSecond.getDate()-1);
	        
	        var startMin = new Date();
	        var endMin = new Date();
	        startMin.setHours(startMin.getHours()-1);
	        
			var startHour = new Date();
			var endHour = new Date();
			startHour.setDate(startHour.getDate()-1); 
			
			var startDay = new Date(); 
			var endDay=new Date();
			startDay.setDate(startDay.getDate()-1);
			
			var startMonth = new Date();
			var endMonth = new Date();
			startMonth.setDate(1);
			endMonth.setDate(1);
			startMonth.setMonth(endMonth.getMonth()-1);

			$("#timeField_second").val(startSecond.format("yyyy-MM-dd hh:mm:ss"));
			$("#timeField_second2").val(endSecond.format("yyyy-MM-dd hh:mm:ss")); 
			
			$("#timeField_min").val(startMin.format("yyyy-MM-dd hh:mm:ss"));
			$("#timeField_min2").val(endMin.format("yyyy-MM-dd hh:mm:ss")); 

			$("#timeField_hour").val(startHour.format("yyyy-MM-dd hh"));
			$("#timeField_hour2").val(endHour.format("yyyy-MM-dd hh")); 

			$("#timeField_day").val(startDay.format("yyyy-MM-dd"));
			$("#timeField_day2").val(endDay.format("yyyy-MM-dd"));

			$("#timeField_month").val(startMonth.format("yyyy-MM"));
			$("#timeField_month2").val(endMonth.format("yyyy-MM"));

			//处理周的时间
			var today = new Date();
			var weekToday = new Date();//获取上周最大日期
			weekToday.setDate(weekToday.getDate());
			var tY = today.getFullYear();
			var tM = today.getMonth()+1;
			var tD = today.getDate()-1;
			var s_week = getYearWeek(tY,tM,tD);
			var week = getYearWeek(tY,tM,tD);
			tM = tM<10?("0"+tM):tM;
			tD = tD<10?("0"+tD):tD;
			if(week=='01'){
			tY = tY - 1;
			s_week = getNumOfWeeks(tY);
			week = getNumOfWeeks(tY);
			}else{
			s_week = week - 1;
			week = week - 0;
			};

			s_week = s_week<10?("0"+s_week):s_week;
			week = week<10?("0"+week):week;

			$("#timeField_week").val(tY+"-"+s_week);
			$("#timeField_week2").val(tY+"-"+week);
			$('#timeField_week').bind('focus',function(){
			WdatePicker({isShowWeek:true,errDealMode:3,maxDate:weekToday.format("yyyy-MM-dd"),autoPickDate:true,firstDayOfWeek:1,
			onpicked:function() {$dp.$('timeField_week').value=$dp.cal.getP('y')+'-'+$dp.cal.getP('W');}
			})});  
		},
		//改变时间粒度
		changeTimeFiledType :function (a,none1,none2,none3,none4){
						$("#timeField_"+a).css('display','inline-block');
						$("#timeField_"+a+"2").css('display','inline-block');

						$("#timeField_"+none1).css('display','none');
						$("#timeField_"+none1+"2").css('display','none');

						$("#timeField_"+none2).css('display','none');
						$("#timeField_"+none2+"2").css('display','none');

						$("#timeField_"+none3).css('display','none');
						$("#timeField_"+none3+"2").css('display','none');

						$("#timeField_"+none4).css('display','none');
						$("#timeField_"+none4+"2").css('display','none');
		},
		//leftMiddleRight
		init_left_pie_echarts : function(){
			var data = [
			            {name:"苹果",value:getRandomData(3)},
			            {name:"橘子",value:getRandomData(3)},
			            {name:"香蕉",value:getRandomData(3)},
			            {name:"梨",value:getRandomData(3)},
			            {name:"西瓜",value:getRandomData(3)},
			            {name:"哈蜜桃",value:getRandomData(3)}
			            ] 
			left_pie_echarts.loadDataToChart("left_pie_echarts",data);
		},
		init_middle_barLine_echarts : function(){
			var x = ['周一','周二','周三','周四','周五','周六','周日'];
			var y = [];
			var y1 = [18,19,15,20,22,17,19];
			var y2 = [100,120,80,90,130,90,110];
			
			y.push(y1);
			y.push(y2);
			
			middle_barLine_echarts.loadDataToChart("middle_barLine_echarts",x,y);
		},
		init_right_pie_echarts : function(){
			var data = [
			            {name:"萝卜",value:getRandomData(1)},
			            {name:"白菜",value:getRandomData(1)},
			            {name:"青椒",value:getRandomData(1)},
			            {name:"大蒜",value:getRandomData(1)},
			            {name:"西葫芦",value:getRandomData(1)},
			            {name:"土豆",value:getRandomData(1)}
			            ] 
			right_pie_echarts.loadDataToChart("right_pie_echarts",data);
		},
		init_single_bar_echarts : function(){
			var x = [
			         '2017-4-1',
			         '2017-4-2',
			         '2017-4-3',
			         '2017-4-4',
			         '2017-4-5',
			         '2017-4-6',
			         '2017-4-7',
			         '2017-4-8',
			         '2017-4-9',
			         '2017-4-10',
			         '2017-4-11',
			         '2017-4-12'
			         ];
			
			var y = [];
			for(var i=0;i<12;i++){
				y.push(getRandomData(2));
			};
			single_bar_echarts.loadDataToChart("single_bar_echarts",x,y);
		},
		init_single_lineArea_echarts : function(){
			var x = [
			         '2017-4-1',
			         '2017-4-2',
			         '2017-4-3',
			         '2017-4-4',
			         '2017-4-5',
			         '2017-4-6',
			         '2017-4-7',
			         '2017-4-8',
			         '2017-4-9',
			         '2017-4-10',
			         '2017-4-11',
			         '2017-4-12'
			         ];
			
			var y = [];
			var y1 = [];
			var y2 = [];
			for(var i=0;i<12;i++){
				y1.push(getRandomData(2));
			};
			for(var i=0;i<12;i++){
				y2.push(getRandomData(2));
			};
			y.push(y1);
			y.push(y2);
			single_lineArea_echarts.loadDataToChart("single_lineArea_echarts",x,y); 
		},
		load_AjaxRequest_Tab : function(){

		},
		initClass : function(){
			 $("#floatBar_Query_Span").on('click',function(event) {
			 	    index.doQuery();
			 }); 
		},
		initPopover : function(){
			    var img = '<i class="fr fa fa-times cursor" style="color:#0085d0;padding-left:15px;font-size:16px;" onclick="$(this).parents(\'div.popover\').removeClass(\'in\').remove()"></i>';
			  	var htmlStr = '<div style="height:300px;width:300px;border:1px solid red"></div>'
			  	var options = {
			          trigger:'click', //触发方式
			          html: true, // 为true的话，data-content里就能放html代码了
			          container: 'body',
			          placement: 'bottom',
			          title:'测试啊'+img,
			      	  content: htmlStr
			            // 还有很多选项 ……
			      };
			      $('#all_vidioApp_count').popover('destroy');
			      $("#all_vidioApp_count").popover(options);
			      $('#all_vidioApp_count').on('shown.bs.popover', function () {
								// 执行一些动作...
				  })
		},
		doQuery : function(){
			var timeType = $("input[name = 'timeType']:checked").val(); 
			
			index.init_left_pie_echarts();
			index.init_middle_barLine_echarts();
			index.init_right_pie_echarts();
			index.init_single_bar_echarts();
			index.init_single_lineArea_echarts();
			//加载Ajax请求表格
			drawGrid.load_AjaxRequest_Tab();
			timeBar.timeLine();
			//加载漂亮指标2种类型
			indexTwoJs.init();
		}
};
//求一年总共有多少周
var getNumOfWeeks = function (year){
    	var d=new Date(year,0,1);
    	var yt=( ( year%4==0 && year%100!=0) || year%400==0)? 366:365; 
    	return Math.ceil((yt-d.getDay())/7.0);
};
var getYearWeek = function (a, b, c) { 
	var date1 = new Date(a, parseInt(b) - 1, c), date2 = new Date(a, 0, 1), 
	d = Math.round((date1.valueOf() - date2.valueOf()) / 86400000); 
	return Math.ceil((d + ((date2.getDay() + 1) - 1)) / 7); 
};
//时间格式化   去除空,冒号 杠
function timeRemoveNullThillColon(timeType,time){
                var re1=new RegExp("-","g");
                var re2=new RegExp(":","g");
                var re3=new RegExp(" ","g");  
                var time = time.replace(re1,"");
                var time = time.replace(re2,"");
                var time = time.replace(re3,"");  

                if(timeType == "hour"){time+="00";};
                if(timeType == "day"){time+="0000";};
                if(timeType == "week"){time+="000000";};
                if(timeType == "month"){time+="000000";};    
                return time;
}; 
function timeStringToDate(time){        //"20170407145218"
				var y = time.substring(0,4);
				var m = time.substring(4,6)-1;
				var d = time.substring(6,8);
				var h = time.substring(8,10);
				var min = time.substring(10,12);
				var s = time.substring(12,14);
				return new Date(y,m,d,h,min,s);
};
//获取随机数值
function getRandomData(n,m){   //n代表几位整数,名代表几位小数
	  var num = 1;
	  for(var i=0;i<n;i++){
		  num *= 10;
	  };
	  if (!m) {
	       return (Math.random()*num).toFixed(m) *1;
	  }else{
	       return (Math.random()*num).toFixed(2) *1;
	  }
};
//阀值比较,返回 true or false,true代表超阀值
function ThresholdCommon(val,threshold_val,threshold_symbol) {
  var returnFlag = false;
  if (val != "null" && val != null && val != "" && val != "-" && threshold_symbol != null && threshold_symbol != "" && threshold_val != null && threshold_val != "" && eval(val + threshold_symbol + threshold_val)) {
    returnFlag = true
  }
  return returnFlag
};
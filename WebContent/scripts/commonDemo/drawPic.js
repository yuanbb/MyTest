 require(['echarts'], function(ec) {});
 var ecConfig = require('echarts/config');
 var zrColor = require('zrender/tool/color');
 var echObjects = {}; // echObjects 全局对象



 //画图方法
 var eastcom_echarts_drawChart = {
  init: function(chartId, option) { //初始化方法
    var me = this;
    require(['echarts', 'echarts/theme/macarons', 'echarts/chart/bar', 'echarts/chart/line',
      'echarts/chart/pie', 'echarts/chart/gauge'
    ], function(ec, theme, bar, line, pie, gauge) {
      var myChart = ec.init(document.getElementById(chartId), theme);
      echObjects[chartId] = myChart;
      me.loadEchart(chartId, option);
      me.resize(chartId);
      //me.initEvent();
    });
  },
  resize: function(chartId) {
    window.onresize = function() {
      for (var chartId in echObjects) {
        echObjects[chartId].resize();
      }
    }
  },
  loadEchart: function(chartId, optionObj) { //加载chart的方法
    var me = this;
    var myChart = echObjects[chartId];

    var option = optionObj; //获得option对象
    if (option == null) { //为空这提示div里的内容，类似not data
      document.getElementById(chartId).innerHTML = me.chartHtml;
      echObjects[chartId] = null; //清空全局变量里的chart对象
    } else {
      myChart.setOption(option);
      // if(chartId == "picture" ){
      // window.onresize = myChart.resize;
      // };
    }
  },
  getOption: function() { //获取option对象
    var option = {
      backgroundColor: "#ffffff" //背景色，设置成全白，不设置属性，则透明
    };
    return option;
  },
  initEvent: function() { //初始化chart监听事件，更多参考api
    var me = this;
    //var myChart = echObjects[me.chartId];
  }
 };
 //----左饼图--------------------------------------------------------------------
 var left_pie_echarts = {
  loadDataToChart: function(chartId, data) { //加载chart
    var me = this;
    var option = me.initOption(data);
    eastcom_echarts_drawChart.init(chartId, option);
  },
  initOption: function(data) { //获取option对象
    var option = {
                  /*title : {
                     text: '某站点用户访问来源',
                     subtext: '纯属虚构',
                     x:'center'
                 },*/
                 tooltip : {
                     trigger: 'item',
                     formatter: "{b} : {c} ({d}%)"
                 },
                 /*legend: {
                     orient : 'vertical',
                     x : 'left',
                     data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                 },*/
                 toolbox: {
                     show : false,
                     feature : {
                         mark : {show: false},
                         dataView : {show: false, readOnly: false},
                         magicType : {
                             show: false, 
                             type: ['pie', 'funnel'],
                             option: {
                                 funnel: {
                                     x: '25%',
                                     width: '50%',
                                     funnelAlign: 'left',
                                     max: 1548
                                 }
                             }
                         },
                         restore : {show: true},
                         saveAsImage : {show: true}
                     }
                 },
                 calculable : false,
                 series : [
                     {
                         //name:'访问来源',
                         type:'pie',
                         radius : '55%',
                         center: ['50%', '50%'],
                         data:data,
                         itemStyle: {
                                  emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: "rgba(0, 0, 0, 0.5)"
                                  }
                        }
                     }
                 ]
    };
    return option;
  }
 };
 //----柱状&折线图--------------------------------------------------------------------
 var middle_barLine_echarts = {
  loadDataToChart: function(chartId, x, y) { //加载chart
    var me = this;
    var option = me.initOption(x, y);
    eastcom_echarts_drawChart.init(chartId, option);
  },
  initOption: function(x, y) { //获取option对象
    var option = {
              // title: {
              //     text: ''
              // },
              // tooltip: {},
              // legend: {
              //     data:['销量']
              // },
                tooltip: {
                           trigger: 'axis'
                           //formatter: + ": {b}<br/>查看次数 : {c}次"
                },
                toolbox: {
                     show : false,
                     feature : {
                         mark : {show: false},
                         dataView : {show: false, readOnly: false},
                         magicType : {
                             show: false, 
                             type: ['pie', 'funnel'],
                             option: {
                                 funnel: {
                                     x: '25%',
                                     width: '50%',
                                     funnelAlign: 'left',
                                     max: 1548
                                 }
                             }
                         },
                         restore : {show: true},
                         saveAsImage : {show: true}
                     }
                },
                legend: {
                  y : '10px', 
                  data:['温度','湿度']
                },
                grid: {
                  x: '10%',
                  y: '20%',
                  x2: '10%',
                  y2: '20%'
                },
                xAxis: {
                  data: x, //list
                  // name:'用户名',
                  axisLabel: {
                    interval: '0',
                    rotate: '15'
                  }
                },
                yAxis: [{
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
                                   
                     }],
                series: [{
                            name: '温度',
                            type: 'bar',
                            data: y[0],
                            yAxisIndex: 0      
                          },{
                            name: '湿度',
                            type: 'line',
                            data: y[1],
                            yAxisIndex: 1   
                          }]
    };
    return option;
  }
 };
 
 //----右饼图--------------------------------------------------------------------
 var right_pie_echarts = {
  loadDataToChart: function(chartId, data) { //加载chart
    var me = this;
    var option = me.initOption(data);
    eastcom_echarts_drawChart.init(chartId, option);
  },
  initOption: function(data) { //获取option对象
    var option = {
                  /*title : {
                      text: '某站点用户访问来源',
                      subtext: '纯属虚构',
                      x:'center'
                  },*/
                  tooltip : {
                      trigger: 'item',
                      formatter: "{b} : {c} ({d}%)"
                  },
                  /*legend: {
                      orient : 'vertical',
                      x : 'left',
                      data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                  },*/
                  toolbox: {
                      show : false,
                      feature : {
                          mark : {show: false},
                          dataView : {show: false, readOnly: false},
                          magicType : {
                              show: false, 
                              type: ['pie', 'funnel'],
                              option: {
                                  funnel: {
                                      x: '25%',
                                      width: '50%',
                                      funnelAlign: 'left',
                                      max: 1548
                                  }
                              }
                          },
                          restore : {show: true},
                          saveAsImage : {show: true}
                      }
                  },
                  calculable : false,
                  series : [
                      {
                          //name:'访问来源',
                          type:'pie',
                          radius : '55%',
                          center: ['50%', '50%'],
                          data:data
                      }
                  ]
    };
    return option;
  }
 };
 
//----单独柱状--------------------------------------------------------------------
 var single_bar_echarts = {
  loadDataToChart: function(chartId, x, y) { //加载chart
    var me = this;
    var option = me.initOption(x, y);
    eastcom_echarts_drawChart.init(chartId, option);
  },
  initOption: function(x, y) { //获取option对象
    var option = {
              // title: {
              //     text: ''
              // },
              // tooltip: {},
              // legend: {
              //     data:['销量']
              // },
                tooltip: {
                           trigger: 'axis'
                           //formatter: + ": {b}<br/>查看次数 : {c}次"
                },
                toolbox: {
                     show : false,
                     feature : {
                         mark : {show: false},
                         dataView : {show: false, readOnly: false},
                         magicType : {
                             show: false, 
                             type: ['pie', 'funnel'],
                             option: {
                                 funnel: {
                                     x: '25%',
                                     width: '50%',
                                     funnelAlign: 'left',
                                     max: 1548
                                 }
                             }
                         },
                         restore : {show: true},
                         saveAsImage : {show: true}
                     }
                },
                /*legend: {
                  y : '10px', 
                  data:['温度','湿度']
                },*/
                grid: {
                  x: '10%',
                  y: '20%',
                  x2: '10%',
                  y2: '20%'
                },
                xAxis: {
                  data: x, //list
                  // name:'用户名',
                  axisLabel: {
                    interval: '0',
                    rotate: '15'
                  }
                },
                yAxis: [{
                          name : '温度(°C)',
                          type : 'value',
                          axisLabel : {
                                        formatter: '{value}'
                                      }
                                   
                       }],
                series: [{
                            name: '温度',
                            type: 'bar',
                            data: y
                          }]
    };
    return option;
  }
 };
 //----双这线折线区域图--------------------------------------------------------------------
 var single_lineArea_echarts = {
  loadDataToChart: function(chartId, x, y) { //加载chart
    var me = this;
    var option = me.initOption(x, y);
    eastcom_echarts_drawChart.init(chartId, option);
  },
  initOption: function(x, y) { //获取option对象
    var option = {
          // title: {
          //     text: ''
          // },
          // tooltip: {},
          // legend: {
          //     data:['销量']
          // },
      tooltip: {
            trigger: 'axis'
           //formatter: + ": {b}<br/>查看次数 : {c}次"
      },
      //图例配置
      legend: {
          show : true,
          data: ['随便1','随便2'] //这里需要与series内的每一组数据的name值保持一致
      },
      calculable: false,   //点击拐弯处,可以拖拽
      grid: {
        x: '10%',
        y: '10%',
        x2: '6%',
        y2: '15%'
      },
      xAxis: {
        data: x, //list
        boundaryGap : false,   // false:折线图拐点在格交点上
        type: 'category',
        // name:'用户名',
        axisLabel: {
          interval: '0',
          rotate: '15'
        }
      },
      yAxis: {
        type: 'value', 
        name: "温度啊"
      },
      series: [{
        name: '随便1',
        type: 'line',
        itemStyle: {normal: {color:'#5ab1ef',areaStyle: {type: 'default'}}},       //标准面积图,且修改其颜色
        data: y[0],
        markLine :{
          itemStyle :{normal : {color:'red'}},
          data:[]
        }
      }, {
            name:'随便2',
            type:'line',
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:y[1]
        }]
    };

    var threshold = 80;
    if (threshold != 0) {
      option.series[0].markLine.data.push([
                   {name: '阀值', xAxis: -1, yAxis: parseFloat(threshold),value: parseFloat(threshold)},
                   {name: '阀值', xAxis: 100, yAxis: parseFloat(threshold)}
               ]);
      };
   
    return option;
  }
 };
 

 
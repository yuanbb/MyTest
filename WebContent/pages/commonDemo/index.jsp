<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Demo</title>
 <%@ include file="/common/lib.jsp"%>
 <%@ include file="/common/fontawesome/fontawesome4.3.0.jsp"%>
 <%@ include file="/common/bootstrap.jsp"%>
 <%@ include file="/pages/common/jquery-ui-bootstrap.jsp"%>
 <%@ include file="/pages/common/inas-common.jsp"%>
 <%@ include file="/pages/common/inas-product-style.jsp"%>
 <%@ include file="/pages/common/inas-loadmask.jsp"%>
 <%@ include file="/pages/common/inas-my97.jsp"%>
 <%@ include file="/common/echarts.jsp"%>
<!--自己的css-->
<link rel="stylesheet" type="text/css" href="${ctx}/static/commonDemo/timeBar/timeBar.css" />
<link rel="stylesheet" type="text/css" href="${ctx}/static/commonDemo/floatBar/style.css" />
<link rel="stylesheet" type="text/css" href="${ctx}/static/commonDemo/indexTwoStyle/style.css" />
<!--自己的js-->
<script type="text/javascript" src="${ctx}/scripts/commonDemo/index.js"></script>
<script type="text/javascript" src="${ctx}/scripts/commonDemo/drawPic.js"></script>
<script type="text/javascript" src="${ctx}/scripts/commonDemo/drawGrid.js"></script>
<script type="text/javascript" src="${ctx}/scripts/commonDemo/timeBar.js"></script>

<script type="text/javascript" src="${ctx}/scripts/commonDemo/indexTwoJs/getMenuDataJs.js"></script>
<script type="text/javascript" src="${ctx}/scripts/commonDemo/indexTwoJs/indexTwoJs.js"></script>

<!--自己的测试数据库-->
<script type="text/javascript" src="${ctx}/scripts/commonDemo/dataSource.js"></script>
<script type="text/javascript">
function backTop(){
             $('html, body').animate({ scrollTop:'0px'},'2000');
};
$(document).ready(function(){
      index.init();
      setInterval(index.currTimeShow,100);
      window.onscroll=gundong;
      function gundong(){
          var scrollTop =  $(document).scrollTop();
          //console.log(scrollTop);
          if (scrollTop > 100) {
              $("#backToTop").css('display', 'block');
          }else{
              $("#backToTop").css('display', 'none');
          };
      };
      
});
 </script>
 <style>
   .popover {
              max-width: 1000px;
            }
 </style>
</head>
<body style="font-size: 14px">
   <div style="min-width: 1100px;">
       <div style="float: left;background-color: #eee;width: 100%; height: 75px;position:relative">
            <div id="currTimeShow" style="position:absolute;right:5px;bottom:5px"></div>
       </div>
       <div style="padding:75px 50px 0;margin-bottom:30px">
            <div class="con_homebox_title">
                   <h5 class="fl">
                   <i class="fa fa-th-large ecom_icons" style="padding-top: 6px;"></i><span>关键指标查询</span>
                   </h5>
                   <div class="clear"></div>
            </div>
            <!--条件集中营  -->
            <div style="padding: 5px 0 12px;border-bottom: 1px solid #eee;">
                <div style="margin-bottom: 10px;">
                    <input name="timeType" type="radio" class="RadioStyle" id="radio4" value="min" style="margin-left: 0px"  onclick="index.changeTimeFiledType('min','hour','day','week', 'month')"  /><span id="radioLable4" >15分钟</span>
                    <input name="timeType" type="radio" class="RadioStyle" id="radio5" value="hour" onclick="index.changeTimeFiledType('hour','min','day','week', 'month')" /><span id="radioLable5" >小时</span>
                    <input name="timeType" type="radio" class="RadioStyle" id="radio" value="day" onclick="index.changeTimeFiledType('day','min','hour','week', 'month')"  checked="checked"/><span id="radioLable" >日</span>
                    <input name="timeType" type="radio" class="RadioStyle" id="radio3" value="week" onclick="index.changeTimeFiledType('week','min','hour','day', 'month')" /><span id="radioLable3" >周</span>
                    <input name="timeType" type="radio" class="RadioStyle" id="radio2" value="month"  onclick="index.changeTimeFiledType('month','min','hour','day','week')" /><span id="radioLable2">月</span>
                
                    <span style="margin: 0 10px;">开始时间：</span>
                    <!-- <input id="timeField_second" class="Wdate TimeFiled " style="width: 168px;height:34px;" onclick="WdatePicker({dateFmt : 'yyyy-MM-dd HH:mm:ss',maxDate:'%y-%M-%d 23:59:59'})" /> -->
                    <input id="timeField_min" class="Wdate TimeFiled " style="display: none; width: 168px;height:34px;" onclick="WdatePicker({dateFmt : 'yyyy-MM-dd HH:mm',maxDate:'%y-%M-%d 23:59'})" />
                    <input id="timeField_hour" class="Wdate TimeFiled " style="display: none; width: 168px;height:34px;" onclick="WdatePicker({dateFmt : 'yyyy-MM-dd HH',maxDate:'%y-%M-%d 23'})" />
                    <input id="timeField_day" class="Wdate TimeFiled " style=" width: 168px;height:23px;" onclick="WdatePicker({dateFmt : 'yyyy-MM-dd',maxDate:'%y-%M-%d'})" />
                    <input id="timeField_week" class="Wdate TimeFiled " style="display:none; width: 168px;height:23px;"  />
                    <input id="timeField_month" class="Wdate TimeFiled " style="display: none; width: 168px;height:34px;"onclick="WdatePicker({dateFmt : 'yyyy-MM',maxDate:'%y-%M'})" />
                     
                    <span style="margin: 0 10px;">结束时间:</span>
                    <!-- <input id="timeField_second2" class="Wdate TimeFiled " style="width: 168px;height:34px;" onclick="WdatePicker({dateFmt : 'yyyy-MM-dd HH:mm:ss',maxDate:'%y-%M-%d 23:59:59'})" /> -->
                    <input id="timeField_min2" class="Wdate TimeFiled " style="display: none; width: 168px;height:34px;" onclick="WdatePicker({dateFmt : 'yyyy-MM-dd HH:mm',maxDate:'%y-%M-%d 23:59'})" />
                    <input id="timeField_hour2" class="Wdate TimeFiled " style="display: none; width: 168px;height:34px;" onclick="WdatePicker({dateFmt : 'yyyy-MM-dd HH',maxDate:'%y-%M-%d 23'})" /> 
                    <input id="timeField_day2" class="Wdate TimeFiled " style=" width: 168px;height:23px;" onclick="WdatePicker({dateFmt : 'yyyy-MM-dd',maxDate:'%y-%M-%d'})" />
                    <input id="timeField_week2" class="Wdate TimeFiled " style="display:none; width: 168px;height:23px;"  />
                    <input id="timeField_month2" class="Wdate TimeFiled " style="display: none; width: 168px;height:34px;"onclick="WdatePicker({dateFmt : 'yyyy-MM',maxDate:'%y-%M'})" />
                    <span id="all_vidioApp_count" style="margin-left: 100px;color: blue;text-decoration: underline;cursor: pointer;" data-toggle="popover">45</span>
                </div> 
                <div style="margin-bottom: 0;">
                    <span style="margin: 0 0 8px 0;">下拉框啊 : </span> 
                    <select style="width: 234px;">
                        <option value="">--------请选择--------</option>
                        <option value="1">1111</option>
                        <option value="2">2222</option>
                        <option value="3">3333</option>    
                        <option value="4">4444</option>    
                    </select>
                    <span style="margin: 0 8px;" >输入框啊 : </span> 
                    <input type="text" style="width: 425px;margin-left: 10px;" /> 

                    <button class="btn btn-primary" style=" margin-left: 20px;"  type="button" onclick="index.doQuery()">查 询</button>
                 </div>    
                  <div class="clear"></div>
           </div> 
       
           <!--content 时间轴的拖拽  -->
           <div style="width:100%;height:100px">
                 <div style="margin-top:5px;">
                       <div class="con_homebox_title" style="border-bottom: none;">
                             <h5 class="fl">
                             <i class="fa fa-pie-chart ecom_icons" style="padding-top: 6px;"></i><span>时间轴的拖拽(小时&日的有效)</span>
                             </h5>
                             <!-- <span class="fr" name="index_rank_trend_ico">
                                   <a class="function-icon">
                                   <i class="fa fa-file-excel-o cursor" name="index_trend" onclick="qualityView.exportTab()" title="导出表格"></i>
                                   </a>
                                   <a class="function-icon">
                                   <i class="fa fa-th-list cursor" name="index_trend" onclick="terminalview.echartsOrJqGrid('leftJqGrid')" title="切换到分析表"></i>
                                   </a> 
                             </span> -->
                             <div class="clear"></div>
                       </div>
                       <div class="clear"></div>
                 </div>
                 <div style="width: 100%;height: 50px;border: 1px solid #eee">
                          <div class="timeLine fl" style="width: 800px;margin-left:10px;margin-top:5px;">
                                <span class="bars_10" id="startTime"></span>
                                <div class="scale" id="bar">
                                    <div class="hideScale1" id="hideScale1"></div>
                                    <span id="btnLeft"></span>
                                    <span id="btnRight"></span>
                                    <div class="hideScale2" id="hideScale2"></div>
                                </div>
                                <span class="bars_10" id="endTime"></span>
                          </div>
                 </div>
               <div class="clear"></div>      
          </div>
          <!-- content 漂亮的指标显示2 -->              
          <div style="margin-top:5px;">
                <div class="con_homebox_title" style="border-bottom:none">
                      <h5 class="fl">
                      <i class="fa fa-navicon ecom_icons" style="padding-top: 6px;"></i><span>漂亮的指标显示2</span>
                      </h5>
                      <!-- <span class="fr" name="index_rank_trend_ico">
                      <a class="function-icon">
                      <i class="fa fa-area-chart cursor" name="index_trend" onclick="terminalview.echartsOrJqGrid('leftEcharts')" title="切换到分析图"></i>
                      </a>
                      <a class="function-icon">
                      <i class="fa fa-th-list cursor" name="index_trend" onclick="terminalview.echartsOrJqGrid('leftJqGrid')" title="切换到分析表"></i>
                      </a>
                      </span> -->
                      <div class="clear"></div>
                </div>
                <div style="width: 100%;">
                      <div class="con_homebox" style="position: relative;height:222px;margin-bottom:0px;">
                          <div class="con_list" style="z-index: 2;position: absolute;width: 100%;border-top: 1px solid #e8e8e8;padding-bottom: 10px">
                          <div class="business-box">
                                <ul>
                                    <li style="width:33%">
                                        <div class="cont-box kpi-tb">
                                            <table border="0" width="100%" cellpadding="0" cellspacing="0">
                                                  <thead>
                                                      <tr>
                                                       <td colspan="3">
                                                           <span>一类指标</span>
                                                           <i class="arrow-r"></i>
                                                      </td>
                                                    </tr>
                                                  </thead>
                                              </table>
                                            <div style="height:168px;overflow-y:auto;overflow-x:hidden;">
                                                <table border="0" width="100%" cellpadding="0" cellspacing="0">
                                                    <tbody id="indexClass_1_Content">
                                                        
                                                    </tbody>
                                                </table>
                                              </div>
                                        </div>
                                    </li>
                                    <li style="width:33%">
                                        <div class="cont-box cause-tb">
                                           <table border="0" width="100%" cellpadding="0" cellspacing="0">
                                                  <thead>
                                                      <tr>
                                                       <td colspan="3">
                                                           <span>二类指标</span>
                                                           <i class="arrow-r"></i>
                                                      </td>
                                                    </tr>
                                                  </thead>
                                            </table>
                                          <div style="height:168px;overflow-y:auto;overflow-x:hidden;">
                                              <table border="0" width="100%" cellpadding="0" cellspacing="0">
                                                  <tbody id="indexClass_3_Content">
                                                      
                                                  </tbody>
                                              </table>
                                            </div>
                                        </div>
                                    </li>
                                    <li style="width:33%">
                                        <div class="cont-box zhicha-tb">
                                            <table border="0" width="100%" cellpadding="0" cellspacing="0">
                                                <thead>
                                                    <tr>
                                                       <td colspan="3">
                                                           <span>三类指标</span>
                                                           <i class="arrow-r"></i>
                                                      </td>
                                                    </tr>
                                                </thead>
                                                
                                            </table>
                                            <div style="height:168px;overflow-y:auto;overflow-x:hidden;">
                                              <table border="0" width="100%" cellpadding="0" cellspacing="0">
                                                  <tbody id="indexClass_4_Content">
                                                      
                                                  </tbody>
                                              </table>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            </div>
                          </div>
                <div class="clear"></div>
          </div>


          <!--content id="leftMiddleRight" -->
          <div style="width: 100%; height: 365px;border: 0px solid #eee;position: relative;">
                      <div style="width: 30%;height:100%;float: left;margin-right: 5px">
                                 <div style="margin-top:5px;">
                                       <div class="con_homebox_title" style="border-bottom: none;">
                                             <h5 class="fl">
                                             <i class="fa fa-pie-chart ecom_icons" style="padding-top: 6px;"></i><span>左边饼图</span>
                                             </h5>
                                             <!-- <span class="fr" name="index_rank_trend_ico">
                                                   <a class="function-icon">
                                                   <i class="fa fa-file-excel-o cursor" name="index_trend" onclick="qualityView.exportTab()" title="导出表格"></i>
                                                   </a>
                                                   <a class="function-icon">
                                                   <i class="fa fa-th-list cursor" name="index_trend" onclick="terminalview.echartsOrJqGrid('leftJqGrid')" title="切换到分析表"></i>
                                                   </a> 
                                             </span> -->
                                             <div class="clear"></div>
                                       </div>
                                       <div class="clear"></div>
                                 </div>
                                 <div style="width: 100%;height: 85%;border: 1px solid #eee">
                                         <div id="left_pie_echarts" style="width: 100%;height: 100%">
                              
                                         </div>
                                 </div>
                           <div class="clear"></div>      
                      </div>
                      <div style="width: 39%;height:100%;float: left;margin-right: 5px">
                                 <div style="margin-top:5px;margin-right: 5px">
                                       <div class="con_homebox_title" style="border-bottom: none;">
                                             <h5 class="fl">
                                             <i class="fa fa-bar-chart-o ecom_icons" style="padding-top: 6px;"></i><span>中间趋势图</span>
                                             </h5>
                                             <!-- <span class="fr" name="index_rank_trend_ico">
                                                 <a class="function-icon">
                                                 <i class="fa fa-file-excel-o cursor" name="index_trend" onclick="qualityView.exportTab()" title="导出表格"></i>
                                                 </a>
                                             </span> -->
                                             <div class="clear"></div>
                                       </div>
                                       <div class="clear"></div>
                                 </div>
                                 <div style="width: 100%;height: 85%;border: 1px solid #eee">
                                        <div id="middle_barLine_echarts" style="width: 100%;height: 100%">
                                        
                                        </div>
                                 </div>
                           <div class="clear"></div>      
                      </div>
                      <div style="width: 30%;height:100%;float: left;">
                                 <div style="margin-top:5px;">
                                       <div class="con_homebox_title" style="border-bottom: none;">
                                             <h5 class="fl">
                                             <i class="fa fa-pie-chart ecom_icons" style="padding-top: 6px;"></i><span>右边饼图</span>
                                             </h5>
                                             <!-- <span class="fr" name="index_rank_trend_ico">
                                                 <a class="function-icon">
                                                 <i class="fa fa-file-excel-o cursor" name="index_trend" onclick="qualityView.exportTab()" title="导出表格"></i>
                                                 </a>
                                             </span> -->
                                             <div class="clear"></div>
                                       </div>
                                       <div class="clear"></div>
                                 </div>
                                 <div style="width: 100%;height: 85%;border: 1px solid #eee">
                                         <div id="right_pie_echarts" style="width: 100%;height: 100%">
                                         
                                         </div>
                                 </div>
                           <div class="clear"></div>      
                      </div>
              </div>
              
              <!--content 单独柱图 -->
              <div class="con_homebox">
                       <div class="con_homebox_title" style="border-bottom:none">
                           <h5 id="titleId" class="fl" style="font-size: 14px;font-weight: bold;">
                                  <i class="fa fa-bar-chart-o ecom_icons"></i><span>单独柱图</span>
                           </h5>
                         <div class="clear"></div>
                       </div>
                       <div style="width: 100%;height: 85%;border: 1px solid #eee">
                                  <div id="single_bar_echarts" style="width: 100%;height: 300px">
                                         
                                  </div>
                       </div>
              </div>
              <!-- content 单独折线区域 -->
              <div class="con_homebox">
                       <div class="con_homebox_title" style="border-bottom:none">
                           <h5 id="titleId" class="fl" style="font-size: 14px;font-weight: bold;">
                                  <i class="fa fa-line-chart ecom_icons"></i><span>双折线区域带阀值</span>
                           </h5>
                         <div class="clear"></div>
                       </div>
                       <div style="width: 100%;height: 85%;border: 1px solid #eee">
                                  <div id="single_lineArea_echarts" style="width: 100%;height: 300px">
                                         
                                  </div>
                       </div>
              </div>
              <!--  content 表格Ajax请求 -->
              <div class="con_homebox">
                       <div class="con_homebox_title" style="border-bottom:none">
                           <h5 id="titleId" class="fl" style="font-size: 14px;font-weight: bold;">
                                  <i class="fa fa-th-list ecom_icons"></i><span>表格Ajax请求</span>
                           </h5>
                           <span class="fr" name="index_rank_trend_ico">
                               <a class="function-icon">
                               <i class="fa fa-file-excel-o cursor" onclick="index.exportTab()" title="导出表格"></i>
                               </a>
                           </span>
                         <div class="clear"></div>
                       </div>
                       <div style="width: 100%;">
                                  <div id="con_list" class="con_list" style="border:1px solid #e8e8e8; padding: 0px">
                                      <div class="con_chart" >
                                        <div id="con_grid_div" style="border: 1px solid #e7e7e7">
                                          <table id="con_grid_div_grid"></table>
                                          <div id="con_grid_div_gridPager"></div>
                                        </div>
                                        <div class="clear"></div>
                                      </div>
                                  </div>
                       </div>
              </div>
       
       
       
      
      
      
      
      
      
      
      
      
 
      </div>  <!--  1100 -->


<!-- 浮动的菜单 -->
<div id="floatbar" class="floatbarW">
        <div id="backToTop" class="floatbar" title="回到顶部" style="display: none">
            <a href="javascript:backTop()">
               <div class="content toolbar_top"></div> 
            </a>
        </div> 
        <div class="floatbar">
            <span id="floatBar_Query_Span" class="content">查询</span>
        </div>
        <div class="floatbar" title="用户信息">
            <div class="content toolbar_user_drafts"></div> 
        </div>
        <div class="floatbar">
            <span class="content">嘿嘿</span> 
        </div>
        <div class="floatbar">
            <span class="content">嘿嘿</span> 
        </div>
</div>










<!--指标钻取趋势图 -------------------------------------------------------------------------->
       <div  class="modal" id="mymodal">
         <div class="modal-dialog" style="width: 960px;">   <!-- style="width: 900px;left: -50px" -->
             <div class="modal-content" >
                   <div class="modal-header">
                       <button type="button"  class="close" data-dismiss="modal"><span aria-hidden="true"><img src="../../static/commonDemo/images/close.png"></span><span class="sr-only"></span></button>
                       <h4 id="_modal_title" class="modal-title">趋势图</h4>
                   </div>
                   <div class="modal-body" id="modal-body" >
                        <div id="echartsContent" style="height:357px">
                              
                        </div>
                   </div>
                  <!--  <div class="modal-footer">
                    <center>
                    <button type="button" class="btn btn-primary"   onclick="reportQueryResult.addColors()" >保  存</button>
                    <button type="button" class="btn btn-default" data-dismiss="modal">关 闭</button>
                    </center>
                  </div> -->
             </div>
        </div>
     </div>

   </div>
</body>
</html>
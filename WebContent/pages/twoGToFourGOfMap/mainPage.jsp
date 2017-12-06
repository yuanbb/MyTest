<%@ page contentType="text/html;charset=utf-8"%>
<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%String hotManage_rightKey_flag=request.getParameter("hotManage_rightKey_flag")==null?"0":request.getParameter("hotManage_rightKey_flag"); %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
 <%@ include file="/common/lib.jsp"%> 
<%@ include file="/common/fontawesome/fontawesome4.3.0.jsp"%>
<%@ include file="/common/bootstrap.jsp"%>
<%@ include file="/pages/common/jquery-ui-bootstrap.jsp"%>
<%@ include file="/pages/common/inas-common.jsp"%>
<%@ include file="/pages/common/inas-product-style.jsp"%>
<%@ include file="/pages/common/inas-loadmask.jsp"%>
<%@ include file="/pages/common/inas-my97.jsp"%>
<!-- <%@ include file="/common/echarts.jsp"%> -->


<script>
    //基本URL
    var baseUrl = '10.221.247.7';
    var locationUrl = window.location.href;
    locationUrl.indexOf('10.10.46.60') !== -1 && (baseUrl = '10.10.46.60');
    //var hostName = window.location.hostname;
    //hostName != '' && (baseUrl = hostName);        
    //基本端口号
    var basePort = '8080';
    var locationPort = window.location.port;                
    locationPort != '' && (basePort = locationPort);

    console.log(baseUrl);
    console.log(basePort);
</script>
<script type="text/javascript">
  //地图相关定义
  var map;
  var switchControl;
  var baseLayer,
      normalLayer,
      roadLayer,
      satelliteLayer;
</script>




<!--引入地图js-->
<link href="${ctx}/static/twoGToFourGOfMap/mainPage/css/leaflet.css" rel="stylesheet" type="text/css" />
<link href="${ctx}/static/twoGToFourGOfMap/mainPage/css/Icon.Label.css" rel="stylesheet" type="text/css" />
<link href="${ctx}/static/twoGToFourGOfMap/mainPage/css/leaflet.contextmenu.css" rel="stylesheet" type="text/css" />
<link href="${ctx}/static/twoGToFourGOfMap/mainPage/css/leaflet.markercluster.css" rel="stylesheet" type="text/css" />
<link href="${ctx}/static/twoGToFourGOfMap/mainPage/css/leaflet.groupedlayercontrol.css" rel="stylesheet" type="text/css" />

<script src="${ctx}/scripts/twoGToFourGOfMap/mainPage/leaflet.js" type="text/javascript"></script>
<script src="${ctx}/scripts/twoGToFourGOfMap/mainPage/Icon.Label.js" type="text/javascript"></script>
<script src="${ctx}/scripts/twoGToFourGOfMap/mainPage/leaflet.baidu.min.js" type="text/javascript"></script>
<script src="${ctx}/scripts/twoGToFourGOfMap/mainPage/leaflet.contextmenu.js" type="text/javascript"></script>
<script src="${ctx}/scripts/twoGToFourGOfMap/mainPage/leaflet.markercluster-src.js" type="text/javascript"></script>
<script src="${ctx}/scripts/twoGToFourGOfMap/mainPage/leaflet.groupedlayercontrol.js" type="text/javascript"></script>

<!--自己的js-->
<link rel="stylesheet" href="dist/css/bootstrap-select.css"> 
<link href="${ctx}/static/twoGToFourGOfMap/mainPage/css/mainPage.css" rel="stylesheet" type="text/css" />
<link href="${ctx}/static/twoGToFourGOfMap/mainPage/css/mainPageBottomPopup.css" rel="stylesheet" type="text/css" />
<link href="${ctx}/static/twoGToFourGOfMap/mainPage/css/mainPageRightPopup.css" rel="stylesheet" type="text/css" />
<link href="${ctx}/static/twoGToFourGOfMap/mainPage/css/mainPageFloatPopup.css" rel="stylesheet" type="text/css" />

<script src="dist/js/bootstrap-select.js"></script>
<script src="${ctx}/scripts/twoGToFourGOfMap/common/commonAjax.js" type="text/javascript"></script>
<script src="${ctx}/scripts/twoGToFourGOfMap/common/dragBottomPopup.js" type="text/javascript"></script>
<script src="${ctx}/scripts/twoGToFourGOfMap/common/dragRightPopup.js" type="text/javascript"></script>
<script src="${ctx}/scripts/twoGToFourGOfMap/common/dragFloatPopup.js" type="text/javascript"></script>
<script src="${ctx}/scripts/twoGToFourGOfMap/mainPage/mainPage.js" type="text/javascript"></script>
<script src="${ctx}/scripts/twoGToFourGOfMap/mainPage/mainPageAssist.js" type="text/javascript"></script>
<script src="${ctx}/scripts/twoGToFourGOfMap/mainPage/mainPageBottomPopup.js" type="text/javascript"></script>
<script src="${ctx}/scripts/twoGToFourGOfMap/mainPage/mainPageRightPopup.js" type="text/javascript"></script>
<script src="${ctx}/scripts/twoGToFourGOfMap/mainPage/mainPageFloatPopup.js" type="text/javascript"></script>



<script type="text/javascript">
var hotManage_rightKey_flag=<%=hotManage_rightKey_flag%>;


$(document).ready(function(){
            mainPage.init();
           
});
</script>


</head>

   
<body>
<div style="height: 602px;position: relative;">
    <!-- 地图 --> 
    <div id="map" style="height:600px"></div>                                           
    <!-- 地图悬浮条件 --> 
    <div class="float-condition-div">
        <select id="cityName" style="width: 150px;">
             <option>---请选择---</option>
             <option>浦东</option>
        </select>
        <span id="sbcName_span">
            <!-- <select id="sbcName" class="selectpicker" multiple data-hide-disabled="true" data-size="5">
                <option value="123">Apple</option>
            </select> -->
        </span>
        <select id="timeParagrah" style="width: 150px;">
            <option>最近七天</option>
            <option>最近二周</option>
            <option>最近三周</option>
            <option>最近四周</option>
            <option>最近五周</option>
       </select>  
       <button type="button" class="btn btn-primary" onclick="doQuery()">查询</button>
    </div>
    <!-- 地图悬浮按钮 --> 
    <div id="selectFloatType" class="float-button-div">
         <img style="width: 100%;height: 100%" src="${ctx}/static/twoGToFourGOfMap/mainPage/images/1.png">
         <div id="selectFloatTypeContent" class="float-button-childiren">
             <div class="button-content-div" id="typeFolat"><img style="width: 100%;height: 100%" src="${ctx}/static/twoGToFourGOfMap/mainPage/images/2.png"></div>
             <div class="button-content-div" id="typeBottom"><img style="width: 100%;height: 100%" src="${ctx}/static/twoGToFourGOfMap/mainPage/images/3.png"></div>
             <div class="button-content-div" id="typeRight"><img style="width: 100%;height: 100%" src="${ctx}/static/twoGToFourGOfMap/mainPage/images/4.png"></div>
         </div>
    </div>





<!-- 底部弹框 ---------------------------------------------->
<div id="bottomPopup" style="display: none">
    <div class="title">
        <h2>这是底部固定窗口</h2>
        <div>
            <a style="display: none;" class="min" href="javascript:;" title="最小化"></a>
            <a style="display: none;" class="max" href="javascript:;" title="最大化"></a>
            <a style="display: none;" class="revert" href="javascript:;" title="还原"></a>
            <a class="close" href="javascript:;" title="关闭"></a>
        </div>
    </div>
    <div class="resizeL"></div>
    <div class="resizeT"></div>
    <div class="resizeR"></div>
    <div class="resizeB"></div>
    <div class="resizeLT"></div>
    <div class="resizeTR"></div>
    <div class="resizeBR"></div>
    <div class="resizeLB"></div>
    <div class="content">
        <div id="content_title_div">
              <span><input type="checkbox"/><span>替换进度</span></span>  
              <span><input type="checkbox"/><span>MSC Pool指标</span></span>  
              <span><input type="checkbox"/><span>BSC列表</span></span>  
              <span><input type="checkbox"/><span>小区列表</span></span>  
              <span><input type="checkbox"/><span>退服告警</span></span>  
              <span><input type="checkbox"/><span>TOP质差小区</span></span>  
        </div>
        <div id="content_content_div">
            <div class="buttom_content_iframe" id="content_iframe_replaceProgress"></div>
            <div class="buttom_content_iframe" id="content_iframe_mscpoolIndex"></div>
            <div class="buttom_content_iframe" id="content_iframe_sbcList"></div>
            <div class="buttom_content_iframe" id="content_iframe_cellList"></div>
            <div class="buttom_content_iframe" id="content_iframe_outServiceWarning"></div>
            <div class="buttom_content_iframe" id="content_iframe_topLowQualityCell"></div>
        </div>

    </div>    
</div>
<!-- 右边弹框 ---------------------------------------------->
<div id="rightPopup" style="display: none">
    <div class="title">
        <h2>这是右部窗口</h2>
        <div>
            <a style="display: none;" class="min" href="javascript:;" title="最小化"></a>
            <a style="display: none;" class="max" href="javascript:;" title="最大化"></a>
            <a style="display: none;" class="revert" href="javascript:;" title="还原"></a>
            <a class="close" href="javascript:;" title="关闭"></a>
        </div>
    </div>
    <div class="resizeL"></div>
    <div class="resizeT"></div>
    <div class="resizeR"></div>
    <div class="resizeB"></div>
    <div class="resizeLT"></div>
    <div class="resizeTR"></div>
    <div class="resizeBR"></div>
    <div class="resizeLB"></div>
    <div class="content">
       ① 右部；<br />
       ① 右部；<br />
       ① 右部；<br />
       ① 右部；<br />
       ① 右部；<br />
       ① 右部；<br />
       
    </div>    
</div>
<!-- 悬浮弹框 ---------------------------------------------->
<div id="floatPopup" style="display: none">
    <div class="title">
        <h2>这是悬浮窗口</h2>
        <div>
            <a style="display: none;" class="min" href="javascript:;" title="最小化"></a>
            <a style="display: none;" class="max" href="javascript:;" title="最大化"></a>
            <a style="display: none;" class="revert" href="javascript:;" title="还原"></a>
            <a class="close" href="javascript:;" title="关闭"></a>
        </div>
    </div>
    <div class="resizeL"></div>
    <div class="resizeT"></div>
    <div class="resizeR"></div>
    <div class="resizeB"></div>
    <div class="resizeLT"></div>
    <div class="resizeTR"></div>
    <div class="resizeBR"></div>
    <div class="resizeLB"></div>
    <div class="content">
       ① 悬浮；<br />
       ① 悬浮；<br />
       ① 悬浮；<br />
       ① 悬浮；<br />
       ① 悬浮；<br />
       ① 悬浮；<br />
       ① 悬浮；<br />
       ① 悬浮；<br />
        
    </div>    
</div>


   
</div>
</body>
<script type="text/javascript">
  window.onload = window.onresize = function ()
  { 
    var flagBottom = $("#bottomPopup").css('display');
    var flagRight = $("#rightPopup").css('display');
    var flagFloat = $("#floatPopup").css('display');
    if (flagBottom =="block") {eventPopupBottom();}
    if (flagRight =="block") {eventPopupRight();}
    if (flagFloat =="block") {eventPopupFloat();}
  }
</script>
</html>


         
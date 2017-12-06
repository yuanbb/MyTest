<%@ page contentType="text/html;charset=utf-8"%>
<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>MapSelf</title>
<%@ include file="/common/lib.jsp"%>



<!--自己的css-->
<link rel="stylesheet" type="text/css" href="${ctx}/mapSelf-drawTest/static/css/leaflet.css" />
<link rel="stylesheet" type="text/css" href="${ctx}/mapSelf-drawTest/static/css/leaflet.groupedlayercontrol.css" />
<link rel="stylesheet" type="text/css" href="${ctx}/mapSelf-drawTest/static/css/leaflet.draw.css" />
<link rel="stylesheet" type="text/css" href="${ctx}/mapSelf-drawTest/static/css/leaflet-search.css" />

<link rel="stylesheet" type="text/css" href="${ctx}/mapSelf-drawTest/static/css/own.css" />

<!--地图引擎-->
<script type="text/javascript" src="${ctx}/mapSelf-drawTest/scripts/leaflet.js"></script>
<!--渲染热力图使用-->
<script type="text/javascript" src="${ctx}/mapSelf-drawTest/scripts/heatmap.js"></script>

<script type="text/javascript" src="${ctx}/mapSelf-drawTest/scripts/leaflet-heatmap.js"></script>
<script type="text/javascript" src="${ctx}/mapSelf-drawTest/scripts/Icon.Label.js"></script>
<script type="text/javascript" src="${ctx}/mapSelf-drawTest/scripts/leaflet-baidu.js"></script>

<!--画圆,可以变成扇形-->
<script type="text/javascript" src="${ctx}/mapSelf-drawTest/scripts/leaflet.draw.js"></script>

<!--拖拽使用-->
<script type="text/javascript" src="${ctx}/mapSelf-drawTest/scripts/Semicircle.js"></script>

<!--搜索使用-->
<script type="text/javascript" src="${ctx}/mapSelf-drawTest/scripts/leaflet-search.js"></script>


<!--坐标系转换-->
<script type="text/javascript" src="${ctx}/mapSelf-drawTest/scripts/leaflet.baidu.min.js"></script>

<!--地图 卫星 线路 分组用-->
<script type="text/javascript" src="${ctx}/mapSelf-drawTest/scripts/leaflet.groupedlayercontrol.js"></script>

<!--自己的js-->
<script type="text/javascript" src="${ctx}/mapSelf-drawTest/scripts/own.js"></script>


<script type="text/javascript">
    $(document).ready(function(){
           OWN.init("map");
    });
</script>
</head>
<body>
   <div id="map" style="height: 597px;width:100%"></div>
</body>
</html>
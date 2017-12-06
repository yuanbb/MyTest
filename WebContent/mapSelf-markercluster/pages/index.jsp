<%@ page contentType="text/html;charset=utf-8"%>
<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>MapSelf</title>
<%@ include file="/common/lib.jsp"%>



<!--自己的css-->
<link rel="stylesheet" type="text/css" href="${ctx}/mapSelf-markercluster/static/css/leaflet.css" />
<link rel="stylesheet" type="text/css" href="${ctx}/mapSelf-markercluster/static/css/leaflet.groupedlayercontrol.css" />
<link rel="stylesheet" type="text/css" href="${ctx}/mapSelf-markercluster/static/css/leaflet.draw.css" />
<link rel="stylesheet" type="text/css" href="${ctx}/mapSelf-markercluster/static/css/leaflet-search.css" />
<link rel="stylesheet" type="text/css" href="${ctx}/mapSelf-markercluster/static/css/leaflet.markercluster.css" />

<link rel="stylesheet" type="text/css" href="${ctx}/mapSelf-markercluster/static/css/own.css" />

<!--地图引擎-->
<script type="text/javascript" src="${ctx}/mapSelf-markercluster/scripts/leaflet.js"></script>


<script type="text/javascript" src="${ctx}/mapSelf-markercluster/scripts/Icon.Label.js"></script>
<script type="text/javascript" src="${ctx}/mapSelf-markercluster/scripts/leaflet-baidu.js"></script>



<!--坐标系转换-->
<script type="text/javascript" src="${ctx}/mapSelf-markercluster/scripts/leaflet.baidu.min.js"></script>

<!--地图 卫星 线路 分组用-->
<script type="text/javascript" src="${ctx}/mapSelf-markercluster/scripts/leaflet.groupedlayercontrol.js"></script>

<!--地图 汇聚小区-->
<script type="text/javascript" src="${ctx}/mapSelf-markercluster/scripts/leaflet.markercluster-src.js"></script>

<!--自己的js-->
<script type="text/javascript" src="${ctx}/mapSelf-markercluster/scripts/own.js"></script>


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
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>MapDemo</title>
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
<link rel="stylesheet" type="text/css" href="${ctx}/mapDemo/static/css/leaflet.css" />
<link rel="stylesheet" type="text/css" href="${ctx}/mapDemo/static/css/own.css" />

<!--地图引擎-->
<script type="text/javascript" src="${ctx}/mapDemo/scripts/leaflet.js"></script>
<script type="text/javascript" src="${ctx}/mapDemo/scripts/leaflet.groupedlayercontrol.js"></script>
<script type="text/javascript" src="${ctx}/mapDemo/scripts/Icon.Label.js"></script>
<!--自己的js-->
<script type="text/javascript" src="${ctx}/mapDemo/scripts/own.js"></script>


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
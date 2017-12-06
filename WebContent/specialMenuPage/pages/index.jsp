<%@ page contentType="text/html;charset=utf-8"%>
<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<!DOCTYPE html>
<head>
<title>流量分析</title>
<%@ include file="/common/jq183.jsp"%>
<%@ include file="/common/fontawesome/fontawesome4.3.0.jsp"%>
<%@ include file="/common/bootstrap.jsp"%>
<%@ include file="/pages/common/jquery-ui-bootstrap.jsp"%>
<%@ include file="/pages/common/inas-common.jsp"%>
<%@ include file="/pages/common/inas-product-style.jsp"%>
<%@ include file="/pages/common/inas-loadmask.jsp"%>
<%@ include file="/pages/common/inas-my97.jsp"%>
<%@ include file="/pages/common/inas-export.jsp"%>
<%@ include file="/pages/common/bootstrap-third.jsp"%>
<%@ include file="/common/eui.jsp"%> 
<link rel="stylesheet" type="text/css" href="${ctx}/specialMenuPage/static/customreport.css" />

<script src="${ctx}/specialMenuPage/scripts/index.js" type="text/javascript"></script>
<script type="text/javascript">
	$(document).ready(function(){
             index.getMenus();
	});
	
</script>
</head>
<body>
     <div class="container-fluid" id="main-cnt" style="min-width: 1152px;">
     <div class="row head"></div>
     	<div id="content" class="content hide-left-tree">
     		<div class="row">
     			<div class="col-md-3" style="padding-left:0px;">
     				<div style="width:100%;min-height:850px;" id="videoReportMenu">
     				</div>
     			</div>
     			<div class="col-md-9" style="padding-left:0px;padding-right:0px;">
     				<div style="width:100%;min-height:850px;">
     					<iframe src="" marginheight="0" marginwidth="0" frameborder="0" scrolling="no" width="100%"
     					 height=100% id="iframeReport" name="iframeReport" onload="this.height=iframeReport.document.body.scrollHeight"></iframe>
     				</div>
     			</div>
     		</div>
     	</div>
     </div>
</body>
</html>
<%@ page contentType="text/html;charset=utf-8"%>
<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%String currUserName=request.getParameter("currUserName")==null?"unknown":request.getParameter("currUserName"); %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>demo</title>
<%@ include file="/common/lib.jsp"%>
<%@ include file="/common/fontawesome/fontawesome4.3.0.jsp"%>
<%@ include file="/common/bootstrap.jsp"%>
<%@ include file="/pages/common/jquery-ui-bootstrap.jsp"%>
<%@ include file="/pages/common/inas-common.jsp"%>
<%@ include file="/pages/common/inas-product-style.jsp"%>
<%@ include file="/pages/common/inas-loadmask.jsp"%>
<%@ include file="/pages/common/inas-my97.jsp"%>
<%@ include file="/common/echarts.jsp"%>


<!--引用easyui框架-->
<script src="easyui/jquery.easyui.min.js" type="text/javascript"></script>
<script src="easyui/locale/easyui-lang-zh_CN.js" type="text/javascript"></script>
<link rel="stylesheet" type="text/css" href="themes/bootstrap/easyui_config.css" />
<link rel="stylesheet" type="text/css" href="themes/icon.css" />
<link href="easyui/style/css/statisticalforms.css" rel="stylesheet" type="text/css" />

<!--自己的js-->
<script src="${ctx}/scripts/reportManageSys/jquery.json-2.4.min.js" type="text/javascript"></script>

<script type="text/javascript">
   var currUserName="<%=currUserName%>";
	$(document).ready(function(){
     
	});
	
</script>

</head>
<body>

</body>
</html>
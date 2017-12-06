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


<script type="text/javascript">
   var currUserName="<%=currUserName%>";
	$(document).ready(function(){
     
	});
	
</script>

</head>
<body>

</body>
</html>
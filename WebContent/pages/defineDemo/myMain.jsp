<%@ page contentType="text/html;charset=utf-8"%>
<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>

<!DOCTYPE>
<html>
<head>
<title>define写法模板</title>
<%@ include file="/common/lib.jsp"%>
<%@ include file="/common/fontawesome/fontawesome4.3.0.jsp"%>
<%@ include file="/common/bootstrap.jsp"%>
<%@ include file="/pages/common/jquery-ui-bootstrap.jsp"%>
<%@ include file="/pages/common/inas-common.jsp"%>
<%@ include file="/pages/common/inas-product-style.jsp"%>
<%@ include file="/pages/common/inas-loadmask.jsp"%>
<%@ include file="/pages/common/inas-my97.jsp"%>
<!-- 使用require.js 需使用另外一种echarts -->
<!-- <%@ include file="/common/echarts.jsp"%> -->

<c:set var="mainJs" value="${ctx}/scripts/defineDemo/mainJs.js" />
<%@ include file="/common/require.jsp"%>




<!-- 自己的js -->
<script src="${ctx}/scripts/defineDemo/main.js" type="text/javascript"></script>
<script type="text/javascript">
	/*$(document).ready(function(){
	});*/
</script>

</head>
<body>
123
</body>
</html>
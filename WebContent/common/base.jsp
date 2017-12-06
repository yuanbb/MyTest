<%@ page language="java" pageEncoding="UTF-8"%>

<%@page import="java.lang.reflect.Field"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<c:set var="ctx" value='<%=request.getRequestURL().substring(0,request.getRequestURL().indexOf("/", 7))+"/MyTest" %>' />
<c:set var="jslib" value="${ctx}/static/jslib" />
<c:set var="theme" value="blue" />
<c:set var="cssDir" value="${ctx}/static/styles/themes/${theme}" />
<c:set var="imgDir" value="${ctx}/static/images/themes/${theme}" />
<script src="${ctx}/static/commonjs/commonModule.js" type="text/javascript"></script>
<script src="${ctx}/static/locale/common_zh_CN.js" type="text/javascript"></script>
<script type="text/javascript">
	var jslib = '${jslib}';
</script> 
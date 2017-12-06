<%@ include file="/common/base.jsp"%>
<c:set var="ext4" value="${jslib}/extjs-4.1.0"></c:set>
<link rel="stylesheet" type="text/css" href="${ext4}/resources/css/ext-all_<%=CommonUtil.getTheme(request) %>.css"></link>
<link rel="stylesheet" type="text/css" href="${ctx}/static/styles/themes/blue/icon.css">
<script type="text/javascript" src="${ext4}/ext-all.js"></script>
<script type="text/javascript" src="${ext4}/locale/ext-lang-<%=WebApplicationContextUtils.getRequiredWebApplicationContext(getServletContext()).getBean(CommonDataController.class).getI18NLocale()%>.js"></script>

<script type="text/javascript">
	Ext.Ajax.on('requestcomplete',checkUserSessionStatus, this);    
	var extDir = eastcom.baseURL+'/static/jslib/extjs-4.1.0';
	function checkUserSessionStatus(conn,response,options) {
		var header = response.getResponseHeader;
		if (typeof(header) != "undefined"){
			var sessionstatus = header["sessionstatus"];
			if(typeof(sessionstatus)!='undefined' && sessionstatus=='timeout'){
				window.open('${ctx}/pages/login.jsp','_top');
			}
		}      
	}
</script>


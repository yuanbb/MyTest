<%@ include file="/common/base.jsp"%>
<script src="${jslib}/echarts/echarts.js"></script>
<script type="text/javascript">
	require.config({
	    paths: {
	    	'echarts': '${jslib}'+'/echarts',
	    	'jquery' : '${jslib}'+'/jquery-1.7.2/jquery-1.7.2.min',
			'scripts' : '${ctx}' + '/scripts',
			'eui' : '${jslib}'+'/eui/0.1',
			'text' : '${jslib}'+'/requireJs/plugins/text'//text plugin
	    }
	});
</script>
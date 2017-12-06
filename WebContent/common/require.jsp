<%@ include file="/common/base.jsp"%>
<script type="text/javascript"
	src="${ctx}/static/jslib/requireJs/require.js" data-main="${mainJs}"></script>
<script type="text/javascript">
	/**
	 */
	require.config({
		paths : {
			'jquery' : '${jslib}' + '/jquery-1.7.2/jquery-1.7.2.min',
			'scripts' : '${ctx}' + '/scripts',
			'echarts' : '${jslib}' + '/echarts/echarts-all',
			'eui' : '${jslib}' + '/eui/0.1',
			'text' : '${jslib}' + '/requireJs/plugins/text'//text plugin
		},
		shim : {
			echarts : {
				exports : "exports"//echarts.echarts and echarts.zrender
			}
		}
	});
</script>
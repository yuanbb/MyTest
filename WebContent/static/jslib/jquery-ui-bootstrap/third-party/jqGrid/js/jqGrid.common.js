;(function($){
/**
 * 为jqgrid增加默认设置，全局的默认设置
 */
$.jgrid = $.jgrid || {};
$.extend($.jgrid.defaults,{
	windowresize:true,
	rowNum : 10,//默认10行
    altRows : true,//行颜色交替显示
	viewrecords : true,//现在总记录数
	hidegrid : false,//收缩grid
    shrinkToFit : true,//此属性用来说明当初始化列宽度时候的计算类型，如果为ture，则按比例初始化列宽度。如果为false，则列宽度使用colModel指定的宽度
    autowidth : false,//如果为ture时，则当表格在首次被创建时会根据父元素比例重新调整表格宽度。如果父元素宽度改变，为了使表格宽度能够自动调整则需要实现函数：setGridWidth
	datatype : "json",//这个参数用于设定将要得到的数据类型。我最常用的是“json”，其余的类型还包括：xml、xmlstring、local、javascript、function
	mtype : 'POST',//定义使用哪种方法发起请求，GET或者POST
	prmNames : {
		page : "page", // 表示请求页码的参数名称
		rows : "limit" // 表示请求行数的参数名称
	},
	loadComplete: function() {// 如果数据不存在，提示信息
    	var _id = $(this).closest("table.ui-jqgrid-btable").attr('id').replace(/_frozen([^_]*)$/,'$1');
		var _gridId = _id;
		var _gridNoRecordsId = _id+"norecords_";
		var _grid = $("#"+_gridId);
    	var rowNum = _grid.jqGrid('getGridParam','records');
    	if (rowNum == 0 || rowNum == null){
	    	if($("#"+_gridNoRecordsId).html() == null){
	    		var colModel = _grid.jqGrid('getGridParam','colModel');
	    		var tds = 0;
	    		if (colModel != null && colModel.length>0) {
	    			for (var x = 0; x < colModel.length; x++) {
	    				if (!colModel[x].hidden || colModel[x].hidden=="false") {
	    					tds ++;
	    				}
	    			}
	    		}
	    		if (tds <4) {
	    			tds = 3
	    		}
	    		_grid.append("<tr id='"+_gridNoRecordsId+"' class='ui-widget-content ui-row-ltr'>" +
	    				"<td colspan='"+tds+"' style='text-align:center;' >无数据显示</td></tr>");
	            //$("#"+$id).append("<pre><div id='norecords'>无数据显示</div></pre>");
	        }
	        $("#"+_gridNoRecordsId).show();
    	}else{// 如果存在记录，则删除提示信息。
       		$("#"+_gridNoRecordsId).remove();
    	}
	},
	gridComplete: function() {// 如果grid 第一次加载的时候
		var _id = $(this).closest("table.ui-jqgrid-btable").attr('id').replace(/_frozen([^_]*)$/,'$1');
		var _gridId = _id;
		var _gridNoRecordsId = _id+"norecords_";
		var _grid = $("#"+_gridId);
    	var rowNum = _grid.jqGrid('getGridParam','records');
    	if (rowNum == 0 || rowNum == null){
	    	if($("#"+_gridNoRecordsId).html() == null){
	    		var colModel = _grid.jqGrid('getGridParam','colModel');
	    		var tds = 0;
	    		if (colModel != null && colModel.length>0) {
	    			for (var x = 0; x < colModel.length; x++) {
	    				if (!colModel[x].hidden || colModel[x].hidden=="false") {
	    					tds ++;
	    				}
	    			}
	    		}
	    		if (tds <4) {
	    			tds = 3
	    		}
	    		_grid.append("<tr id='"+_gridNoRecordsId+"' class='ui-widget-content ui-row-ltr'>" +
	    				"<td colspan='"+tds+"' style='text-align:center;' >无数据显示</td></tr>");
	            //$("#"+$id).append("<pre><div id='norecords'>无数据显示</div></pre>");
	        }
	        $("#"+_gridNoRecordsId).show();
    	}else{// 如果存在记录，则删除提示信息。
       		$("#"+_gridNoRecordsId).remove();
    	}
	},
	jsonReader : {
		root : "data.elements",
		page : "data.pageNo",
		records : "data.total",
		total: "data.pageNum",
		repeatitems: false
	}
});
})(jQuery);

/**
 * 当某一个jqgrid的宽度变化时，调用此方法
 * @param {} jqId
 */
function jqGridResize(jqId) {
	// Get width of parent container
	var parWidth = $("#gbox_"+jqId).parent().width();
	var curWidth = $("#gbox_"+jqId).width();
	//console.log("span width " + parWidth + " gridWidth " + gWidth);
	var w = parWidth - 1; // Fudge factor to prevent horizontal scrollbars
	if (Math.abs(w - curWidth) > 2) {
		//alert("resize to " + width);
		//console.log("span width " + parWidth + " gridWidth " + curWidth);
		$("#"+jqId).setGridWidth(w);
		//console.log("new width " + w);
	}
}
var _jqgridResizeObj = {};
/**
 * 初始化某一个jqgrid，使它的宽度随着浏览器大小变化而变化
 * @param {} jqId
 */
function onWindowResize(jqId){
	$(window).on('resize', function(event, ui) {
		if(_jqgridResizeObj[jqId]){
			clearTimeout(_jqgridResizeObj[jqId]);
		}
		_jqgridResizeObj[jqId] = setTimeout(function(){
			jqGridResize(jqId);
		},700);
	}).trigger('resize');
}
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Demo</title>
 <%@ include file="/common/lib.jsp"%>
 <%@ include file="/common/fontawesome/fontawesome4.3.0.jsp"%>
 <%@ include file="/common/bootstrap.jsp"%>
 <%@ include file="/pages/common/jquery-ui-bootstrap.jsp"%>
 <%@ include file="/pages/common/inas-common.jsp"%>
 <%@ include file="/pages/common/inas-product-style.jsp"%>
 <%@ include file="/pages/common/inas-loadmask.jsp"%>
 <%@ include file="/pages/common/inas-my97.jsp"%>
 <%@ include file="/common/echarts.jsp"%>


<script type="text/javascript" src="${ctx}/scripts/commonDemo/tree_jqgrid/tree_jqgrid.js"></script>

<script type="text/javascript">

$(document).ready(function(){
    
});
 </script>
 <style type="text/css">
 .ui-jqgrid .tree-wrap-ltr {
  
    top: 8px;
}
</style>

</head>
<body style="font-size: 14px">
  
   <div id="con_list" class="con_list" style="border:1px solid #e8e8e8; padding: 0px">
        <div class="con_chart" >
            <div id="con_grid_div" style="width:600px;border: 1px solid #e7e7e7">
                <table id="treegrid"></table> 
            </div>
            <div class="clear"></div>
        </div>
    </div>
</body>
</html>